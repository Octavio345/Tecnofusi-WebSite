const highlightPattern =
  /(fundição de alumínio coquilhado|fundição de alumínio|Tecnofusi|Tecnofuse)/gi;
const highlightTestPattern =
  /^(fundição de alumínio coquilhado|fundição de alumínio|Tecnofusi|Tecnofuse)$/i;

export function HighlightedText({ text }: { text: string }) {
  return (
    <>
      {text.split(highlightPattern).map((part, index) => {
        if (!part) {
          return null;
        }

        const shouldHighlight = highlightTestPattern.test(part);

        if (!shouldHighlight) {
          return part;
        }

        return (
          <span
            key={`${part}-${index}`}
            className="font-semibold text-brand-soft [text-shadow:0_0_22px_rgba(224,20,27,0.24)]"
          >
            {part}
          </span>
        );
      })}
    </>
  );
}
