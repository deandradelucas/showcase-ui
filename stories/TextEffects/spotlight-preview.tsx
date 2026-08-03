import './spotlight.css';

function SpotlightPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-spotlight\">SPOTLIGHT</div>" }}
    />
  );
}

export { SpotlightPreview };
