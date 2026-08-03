import './liquid.css';

function LiquidPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-liquid\">LIQUID</div>" }}
    />
  );
}

export { LiquidPreview };
