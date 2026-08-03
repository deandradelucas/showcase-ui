import './eclipse.css';

function EclipsePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-eclipse\">ECLIPSE</div>" }}
    />
  );
}

export { EclipsePreview };
