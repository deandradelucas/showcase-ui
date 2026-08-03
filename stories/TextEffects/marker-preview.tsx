import './marker.css';

function MarkerPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-marker\">MARKED</div>" }}
    />
  );
}

export { MarkerPreview };
