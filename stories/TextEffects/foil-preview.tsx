import './foil.css';

function FoilPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-foil\">LUXE</div>" }}
    />
  );
}

export { FoilPreview };
