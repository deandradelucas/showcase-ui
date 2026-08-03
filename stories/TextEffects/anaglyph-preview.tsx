import './anaglyph.css';

function AnaglyphPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-anaglyph\">DEPTH-3D</div>" }}
    />
  );
}

export { AnaglyphPreview };
