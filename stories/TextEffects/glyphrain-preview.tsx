import './glyphrain.css';

function GlyphrainPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-glyphrain\" role=\"img\" aria-label=\"GLYPHS\"><b aria-hidden=\"true\" style=\"--i:0\">G</b><b aria-hidden=\"true\" style=\"--i:1\">L</b><b aria-hidden=\"true\" style=\"--i:2\">Y</b><b aria-hidden=\"true\" style=\"--i:3\">P</b><b aria-hidden=\"true\" style=\"--i:4\">H</b><b aria-hidden=\"true\" style=\"--i:5\">S</b></div>" }}
    />
  );
}

export { GlyphrainPreview };
