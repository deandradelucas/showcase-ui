import './vapor.css';

function VaporPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-vapor\" data-text=\"VAPOR\">VAPOR</div>" }}
    />
  );
}

export { VaporPreview };
