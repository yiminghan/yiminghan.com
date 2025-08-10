"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Download, Copy, Plus, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { type NewYapRequest } from "@/app/api/yap/route";

// Type declarations for Web Speech API
interface SpeechRecognitionResult {
  readonly [index: number]: SpeechRecognitionAlternative;
  readonly isFinal: boolean;
  readonly length: number;
}

interface SpeechRecognitionAlternative {
  readonly confidence: number;
  readonly transcript: string;
}

interface SpeechRecognitionResultList {
  readonly [index: number]: SpeechRecognitionResult;
  readonly length: number;
}

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message: string;
}

interface SpeechGrammarList {
  readonly length: number;
  addFromString(string: string, weight?: number): void;
  addFromURI(src: string, weight?: number): void;
  item(index: number): SpeechGrammar;
}

interface SpeechGrammar {
  src: string;
  weight: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  grammars: SpeechGrammarList;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onerror:
    | ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any)
    | null;
  onnomatch:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onresult:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  abort(): void;
  start(): void;
  stop(): void;
}

// eslint-disable-next-line no-var
declare var SpeechRecognition: {
  prototype: SpeechRecognition;
  new (): SpeechRecognition;
};

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

interface NoteRecorderDialogProps {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
}

function NoteRecorderContent({
  onUploadFinished,
}: {
  onUploadFinished: () => void;
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [showCopied, setShowCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [uploading, setUploading] = useState(false);
  const [uploadAuthor, setUploadAuthor] = useState("");

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const uploadPost = async ({
    content,
    author,
    title,
  }: {
    content: string;
    author: string | undefined;
    title: string | undefined;
  }) => {
    if (uploading) return;
    setUploading(true);
    try {
      const request: NewYapRequest = {
        content,
        author,
        title,
      };

      const response = await fetch("/api/yap", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Failed to upload yap");
      }

      setTranscript("");
      setInterimTranscript("");
      setRecordingTime(0);
      setWordCount(0);
      onUploadFinished();
    } catch (err) {
      setError("Failed to upload yap");
    } finally {
      setUploading(false);
    }
  };

  // Supported languages
  const languages = [
    { code: "en-US", name: "English (US)", flag: "🇺🇸" },
    { code: "en-GB", name: "English (UK)", flag: "🇬🇧" },
    { code: "es-ES", name: "Spanish (Spain)", flag: "🇪🇸" },
    { code: "es-MX", name: "Spanish (Mexico)", flag: "🇲🇽" },
    { code: "fr-FR", name: "French", flag: "🇫🇷" },
    { code: "de-DE", name: "German", flag: "🇩🇪" },
    { code: "it-IT", name: "Italian", flag: "🇮🇹" },
    { code: "pt-BR", name: "Portuguese (Brazil)", flag: "🇧🇷" },
    { code: "pt-PT", name: "Portuguese (Portugal)", flag: "🇵🇹" },
    { code: "ru-RU", name: "Russian", flag: "🇷🇺" },
    { code: "zh-CN", name: "Chinese (Simplified)", flag: "🇨🇳" },
    { code: "ja-JP", name: "Japanese", flag: "🇯🇵" },
    { code: "ko-KR", name: "Korean", flag: "🇰🇷" },
    { code: "ar-SA", name: "Arabic", flag: "🇸🇦" },
    { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
    { code: "nl-NL", name: "Dutch", flag: "🇳🇱" },
    { code: "sv-SE", name: "Swedish", flag: "🇸🇪" },
    { code: "no-NO", name: "Norwegian", flag: "🇳🇴" },
    { code: "da-DK", name: "Danish", flag: "🇩🇰" },
    { code: "fi-FI", name: "Finnish", flag: "🇫🇮" },
  ];

  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage,
  );

  useEffect(() => {
    // Check if speech recognition is supported
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      setError(
        "Speech recognition is not supported in this browser. Please use Chrome or Edge.",
      );
      return;
    }

    // Request microphone permission
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => setHasPermission(true))
      .catch(() => setHasPermission(false));

    // Initialize speech recognition
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = selectedLanguage;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = "";
      let final = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result?.[0]) {
          if (result.isFinal) {
            final += result[0].transcript + " ";
          } else {
            interim += result[0].transcript;
          }
        }
      }

      if (final) {
        setTranscript((prev) => prev + final);
        setInterimTranscript("");
      } else {
        setInterimTranscript(interim);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsRecording(false);
    };

    recognition.onend = () => {
      if (isRecording) {
        recognition.start();
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognition) {
        recognition.stop();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRecording, selectedLanguage]);

  // Update word count
  useEffect(() => {
    const fullText = transcript + interimTranscript;
    const words = fullText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  }, [transcript, interimTranscript]);

  // Auto-grow textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [transcript]);

  const startRecording = () => {
    if (hasPermission === false) {
      setError(
        "Microphone access denied. Please enable microphone permissions.",
      );
      return;
    }

    setError("");
    setIsRecording(true);
    setRecordingTime(0);

    recognitionRef.current?.start();

    intervalRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setInterimTranscript("");
    recognitionRef.current?.stop();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const copyToClipboard = async () => {
    if (transcript) {
      try {
        await navigator.clipboard.writeText(transcript);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } catch (err) {
        setError("Failed to copy to clipboard");
      }
    }
  };

  const downloadTranscript = () => {
    if (transcript) {
      const blob = new Blob([transcript], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `transcript-${new Date().toISOString().slice(0, 19).replace(/:/g, "-")}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);

    if (isRecording) {
      stopRecording();
    }
  };

  if (hasPermission === false) {
    return (
      <div className="flex min-h-[400px] items-center justify-center p-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47B20]">
            <MicOff size={32} className="text-white" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-[#1E1E1E] dark:text-white">
            Microphone Access Required
          </h2>
          <p className="mb-6 text-stone-300 dark:text-[#A8ADB4]">
            To record voice notes, please allow microphone access in your
            browser settings and refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-2xl bg-gradient-to-r from-[#219079] to-[#9BC56E] px-8 py-3 font-semibold text-white transition-all duration-200 hover:from-[#1E8169] hover:to-[#8AB05E] dark:from-[#4DD0B1] dark:to-[#B5D16A]"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-inter max-h-[80vh] overflow-y-auto">
      {/* Error Message */}
      {error && (
        <div className="mb-6 rounded-2xl border border-[#F47B20] bg-[#FEF2F2] p-4 dark:border-[#FF8C42] dark:bg-[#2D1B1B]">
          <p className="text-center text-[#F47B20] dark:text-[#FF8C42]">
            {error}
          </p>
        </div>
      )}

      {/* Transcript Display */}
      <div className="max-h-[300px] min-h-[200px] overflow-y-auto rounded-3xl border border-[#E2E2E2] bg-white p-6 dark:border-[#333333] dark:bg-[#1E1E1E]">
        <div className="prose max-w-none">
          {isRecording ? (
            <p className="whitespace-pre-wrap text-base leading-relaxed text-[#1E1E1E] dark:text-white">
              {transcript}
              {interimTranscript && (
                <span className="italic text-stone-300 dark:text-[#A8ADB4]">
                  {interimTranscript}
                </span>
              )}
            </p>
          ) : (
            <textarea
              ref={textareaRef}
              className={cn(
                "ring-none min-h-[24px] w-full resize-none overflow-hidden whitespace-pre-wrap border-none bg-transparent text-base leading-relaxed text-[#1E1E1E] focus:ring-0 dark:text-white",
                "ring-none focus:ring-none border-none outline-none focus:border-none focus:outline-none",
              )}
              value={transcript}
              onChange={(e) => {
                setTranscript(e.target.value);
              }}
              rows={1}
            />
          )}

          {!transcript && !interimTranscript && !isRecording && (
            <p className="py-12 text-center italic text-[#B4B4B4] dark:text-stone-300">
              Click the microphone button to start recording your voice notes...
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {transcript && (
        <div className="mt-3 flex w-full justify-between space-x-3">
          <div className="mt-3 flex w-full justify-start space-x-3">
            <button
              onClick={copyToClipboard}
              disabled={!transcript}
              className="flex items-center space-x-2 rounded-2xl border border-[#DADADA] bg-[#F5F5F5] px-4 py-2 transition-colors hover:bg-[#F7F7F7] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#404040] dark:bg-[#262626] dark:hover:bg-[#333333]"
            >
              <Copy size={16} className="text-[#219079] dark:text-[#4DD0B1]" />
              <span className="text-sm font-medium text-[#414141] dark:text-[#D1D1D1]">
                {showCopied ? "Copied!" : "Copy"}
              </span>
            </button>

            <button
              onClick={downloadTranscript}
              disabled={!transcript}
              className="flex items-center space-x-2 rounded-2xl border border-[#DADADA] bg-[#F5F5F5] px-4 py-2 transition-colors hover:bg-[#F7F7F7] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#404040] dark:bg-[#262626] dark:hover:bg-[#333333]"
            >
              <Download
                size={16}
                className="text-[#219079] dark:text-[#4DD0B1]"
              />
              <span className="text-sm font-medium text-[#414141] dark:text-[#D1D1D1]">
                Download
              </span>
            </button>
          </div>

          <div className="mt-3 flex w-full justify-end space-x-3">
            <input
              type="text"
              value={uploadAuthor}
              onChange={(e) => setUploadAuthor(e.target.value)}
              placeholder="Enter name"
              className="rounded-2xl border border-[#DADADA] bg-[#F5F5F5] px-4 py-2 text-sm font-medium text-[#414141] placeholder-[#B4B4B4] transition-colors hover:bg-[#F7F7F7] focus:outline-none dark:border-[#404040] dark:bg-[#262626] dark:text-[#D1D1D1] dark:placeholder-stone-300 dark:hover:bg-[#333333]"
            />
            <button
              onClick={() =>
                void uploadPost({
                  author: uploadAuthor,
                  content: transcript,
                  title: undefined,
                })
              }
              disabled={!transcript}
              className="flex items-center space-x-2 rounded-2xl border border-[#DADADA] bg-[#F5F5F5] px-4 py-2 transition-colors hover:bg-[#F7F7F7] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#404040] dark:bg-[#262626] dark:hover:bg-[#333333]"
            >
              <Upload
                size={16}
                className="text-[#219079] dark:text-[#4DD0B1]"
              />
              <span className="text-sm font-medium text-[#414141] dark:text-[#D1D1D1]">
                Upload
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Recording Controls */}
      <div className="mt-8 text-center">
        <div className="my-6 flex flex-col items-center">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            disabled={hasPermission === null}
            className={cn(
              "flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
              isRecording
                ? "animate-pulse bg-[#F47B20] shadow-lg hover:bg-[#E66D0F]"
                : "bg-gradient-to-r from-[#219079] to-[#9BC56E] shadow-xl hover:from-[#1E8169] hover:to-[#8AB05E] hover:shadow-2xl dark:from-[#4DD0B1] dark:to-[#B5D16A]",
            )}
          >
            {isRecording ? (
              <MicOff size={28} className="text-white" />
            ) : (
              <Mic size={28} className="text-white" />
            )}
          </button>
        </div>
        {/* Recording Status */}
        <div className="mb-6 space-y-2">
          <p className="text-xl font-bold text-[#1E1E1E] dark:text-white">
            {isRecording ? "Recording..." : "Ready to Record"}
          </p>

          <div className="gap-sm flex flex-col items-center">
            <div className="mx-auto flex items-center">
              <Select
                value={selectedLanguage}
                onValueChange={handleLanguageSelect}
              >
                <SelectTrigger className="w-[240px] rounded-2xl border-[#DADADA] bg-[#F5F5F5] hover:bg-[#F7F7F7] dark:border-[#404040] dark:bg-[#262626] dark:hover:bg-[#333333]">
                  <SelectValue>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{currentLanguage?.flag}</span>
                      <span className="text-sm font-medium text-[#414141] dark:text-[#D1D1D1]">
                        {currentLanguage?.name}
                      </span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="max-h-64 rounded-2xl border-[#E2E2E2] dark:border-[#333333] dark:bg-[#1E1E1E]">
                  {languages.map((language) => (
                    <SelectItem
                      key={language.code}
                      value={language.code}
                      className="cursor-pointer rounded-xl px-4 py-3 focus:bg-[#F7F7F7] dark:focus:bg-[#262626]"
                    >
                      <div className="flex items-center space-x-3 dark:text-stone-300">
                        <span className="text-lg">{language.flag}</span>
                        <span className="text-sm font-medium">
                          {language.name}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {(isRecording || recordingTime > 0) && (
            <div className="flex items-center justify-center space-x-4 text-stone-300 dark:text-[#A8ADB4]">
              <span className="font-mono text-lg">
                {formatTime(recordingTime)}
              </span>
              <span>•</span>
              <span>{wordCount} words</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NoteRecorderDialog({
  trigger,
  children,
}: NoteRecorderDialogProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button className="ring-none flex items-center space-x-2 rounded-lg px-4 py-2 font-medium outline-none hover:underline">
            <Plus size={16} />
            <span>Add A Note</span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Leave a Yap</DialogTitle>
        </DialogHeader>
        <NoteRecorderContent
          onUploadFinished={() => {
            setDialogOpen(false);
          }}
        />
        {children}
      </DialogContent>
    </Dialog>
  );
}
