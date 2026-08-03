import './negative.css';

function NegativePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-negative\">INVERTED</div>" }}
    />
  );
}

export { NegativePreview };
