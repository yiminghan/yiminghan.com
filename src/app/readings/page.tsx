function BookComponent({
  bookTitle,
  bookLink,
  author,
  authorLink,
}: {
  bookTitle: string;
  bookLink: string;
  author: string;
  authorLink: string;
}) {
  return (
    <p>
      <a
        className="text-blue-500 hover:text-blue-700 hover:underline"
        href={bookLink}
      >
        <span>{bookTitle} </span>
      </a>
      <span>
        by <a href={authorLink}>{author}</a>
      </span>
    </p>
  );
}

function PaperComponent({ title, link }: { title: string; link: string }) {
  return (
    <p>
      <a
        className="text-blue-500 hover:text-blue-700 hover:underline"
        href={link}
      >
        <span>{title}</span>
      </a>
    </p>
  );
}

export default function Readings() {
  return (
    <>
      <div>
        <h5>Books:</h5>
        <BookComponent
          bookTitle="Fooled by Randomness"
          bookLink="https://en.wikipedia.org/wiki/Fooled_by_Randomness"
          author="Nassim Nicholas Taleb"
          authorLink="https://twitter.com/nntaleb"
        />
        <BookComponent
          bookTitle="AntiFragile"
          bookLink="https://en.wikipedia.org/wiki/Antifragile_(book)"
          author="Nassim Nicholas Taleb"
          authorLink="https://twitter.com/nntaleb"
        />
        <BookComponent
          bookTitle="How to Win Friends and Influence People"
          bookLink="https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People"
          author="Dale Carnegie"
          authorLink="https://en.wikipedia.org/wiki/Dale_Carnegie"
        />
        <BookComponent
          bookTitle="Tao Te Ching (道德经)"
          bookLink="https://en.wikipedia.org/wiki/Tao_Te_Ching"
          author="Lao zi (老子)"
          authorLink="https://en.wikipedia.org/wiki/Laozi"
        />
        <BookComponent
          bookTitle="Berserk"
          bookLink="https://en.wikipedia.org/wiki/Berserk_(manga)"
          author="Kentaro Miura"
          authorLink="https://en.wikipedia.org/wiki/Kentaro_Miura"
        />
        <BookComponent
          bookTitle="In Defense of Food"
          bookLink="https://michaelpollan.com/books/in-defense-of-food/"
          author="Michael Pollan"
          authorLink="https://michaelpollan.com/"
        />
        <BookComponent
          bookTitle="The Selfish Gene"
          bookLink="https://en.wikipedia.org/wiki/The_Selfish_Gene"
          author="Richard Dawkins"
          authorLink="https://en.wikipedia.org/wiki/Richard_Dawkins"
        />
        <BookComponent
          bookTitle="Sapiens: A Brief History of Humankind"
          bookLink="https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind"
          author="Yuval Noah Harari"
          authorLink="https://twitter.com/harari_yuval"
        />
        <BookComponent
          bookTitle="Why We Sleep"
          bookLink="https://en.wikipedia.org/wiki/Why_We_Sleep"
          author="Matthew Walker"
          authorLink="https://en.wikipedia.org/wiki/Matthew_Walker_(neuroscientist)"
        />
        <BookComponent
          bookTitle="Attached"
          bookLink="https://www.attachedthebook.com/wordpress/"
          author="Amir Levine"
          authorLink="https://www.attachedthebook.com/wordpress/amir-levine/"
        />
        <BookComponent
          bookTitle="The Three-Body Problem"
          bookLink="https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)"
          author="Liu Cixin"
          authorLink="https://en.wikipedia.org/wiki/Liu_Cixin"
        />
        <BookComponent
          bookTitle="Blitzed: Drugs in the Third Reich"
          bookLink="https://www.goodreads.com/book/show/29429893-blitzed"
          author="Norman Ohler"
          authorLink="https://en.wikipedia.org/wiki/Norman_Ohler"
        />
        <BookComponent
          bookTitle="Plants of the Gods"
          bookLink="https://www.goodreads.com/book/show/378208.Plants_of_the_Gods"
          author="Richard Evans Schultes"
          authorLink="https://www.goodreads.com/author/show/215444.Richard_Evans_Schultes"
        />

        <br />
        <br />
        <h5>CS Papers:</h5>
        <PaperComponent
          title="Bitcoin: A Peer-to-Peer Electronic Cash System"
          link="https://bitcoin.org/bitcoin.pdf"
        />
        <PaperComponent
          title="Scaling Laws for Neural Language Models"
          link="https://arxiv.org/pdf/2001.08361.pdf"
        />
        <PaperComponent
          title="Transformer Inference Arithmetic"
          link="https://kipp.ly/transformer-inference-arithmetic/"
        />
        <PaperComponent
          title="Reducing Activation Recomputation in Large Transformer Models"
          link="https://arxiv.org/pdf/2205.05198.pdf"
        />
        <PaperComponent
          title="RoFormer: Enhanced Transformer with Rotary Position Embedding"
          link="https://arxiv.org/abs/2104.09864"
        />
        <PaperComponent
          title="Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer"
          link="https://arxiv.org/pdf/1701.06538.pdf"
        />
        <PaperComponent
          title="Attention is All You Need"
          link="https://arxiv.org/abs/1706.03762"
        />
        <br />
        <br />
        <h5>Neuroscience Papers:</h5>
        <PaperComponent
          title="The psychology and neuroscience of curiosity"
          link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4635443/"
        />
        <PaperComponent
          title="The Tenacious Brain: How the Anterior Mid-Cingulate Contributes to Achieving Goals"
          link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7381101/"
        />
        <PaperComponent
          title="Mesolimbic Dopamine Signals the Value of Work"
          link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4696912/"
        />
      </div>
    </>
  );
}
