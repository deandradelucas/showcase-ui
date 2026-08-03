import './blackout.css';

function BlackoutPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-blackout\" data-text=\"CLASSIFIED\">CLASSIFIED</div>" }}
    />
  );
}

export { BlackoutPreview };
