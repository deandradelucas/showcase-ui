import './decoder.css';

function DecoderPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-decoder\" role=\"img\" aria-label=\"DECODER\"></div>" }}
    />
  );
}

export { DecoderPreview };
