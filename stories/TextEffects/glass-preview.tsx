import './glass.css';

function GlassPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-glass\" data-text=\"GLASS\">GLASS</div>" }}
    />
  );
}

export { GlassPreview };
