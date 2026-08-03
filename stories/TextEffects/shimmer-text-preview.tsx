import './shimmer-text.css';

function ShimmerTextPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<span class=\"t-shimmer\" data-text=\"Efeito Shimmer\">Efeito Shimmer</span>" }}
    />
  );
}

export { ShimmerTextPreview };
