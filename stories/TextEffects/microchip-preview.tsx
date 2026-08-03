import './microchip.css';

function MicrochipPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-microchip\">CIRCUIT</div>" }}
    />
  );
}

export { MicrochipPreview };
