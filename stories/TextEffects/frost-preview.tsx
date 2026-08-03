import './frost.css';

function FrostPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-frost\">FROZEN</div>" }}
    />
  );
}

export { FrostPreview };
