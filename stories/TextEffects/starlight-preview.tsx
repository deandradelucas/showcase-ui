import './starlight.css';

function StarlightPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-starlight\">STARDUST</div>" }}
    />
  );
}

export { StarlightPreview };
