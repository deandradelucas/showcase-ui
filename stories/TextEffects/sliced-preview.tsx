import './sliced.css';

function SlicedPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-sliced\" data-text=\"SLICED\">SLICED</div>" }}
    />
  );
}

export { SlicedPreview };
