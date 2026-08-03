import './hologram.css';

function HologramPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-hologram\" data-text=\"HOLOGRAM\">HOLOGRAM</div>" }}
    />
  );
}

export { HologramPreview };
