import './pixel.css';

function PixelPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-pixel\" data-text=\"PIXELS\">PIXELS</div>" }}
    />
  );
}

export { PixelPreview };
