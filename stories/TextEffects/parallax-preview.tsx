import './parallax.css';

function ParallaxPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-parallax\" role=\"img\" aria-label=\"LAYERS\"><b aria-hidden=\"true\" style=\"--i:0\">L</b><b aria-hidden=\"true\" style=\"--i:1\">A</b><b aria-hidden=\"true\" style=\"--i:2\">Y</b><b aria-hidden=\"true\" style=\"--i:3\">E</b><b aria-hidden=\"true\" style=\"--i:4\">R</b><b aria-hidden=\"true\" style=\"--i:5\">S</b></div>" }}
    />
  );
}

export { ParallaxPreview };
