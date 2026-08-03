import './iridescent.css';

function IridescentPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-iridescent\">IRIS</div>" }}
    />
  );
}

export { IridescentPreview };
