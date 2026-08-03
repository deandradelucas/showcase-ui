import './extrude.css';

function ExtrudePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-extrude\">DEPTH</div>" }}
    />
  );
}

export { ExtrudePreview };
