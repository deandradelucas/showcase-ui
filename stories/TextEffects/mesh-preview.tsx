import './mesh.css';

function MeshPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-mesh\">MESH</div>" }}
    />
  );
}

export { MeshPreview };
