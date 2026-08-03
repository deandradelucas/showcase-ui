import './aurora.css';

function AuroraPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-aurora\">AURORA</div>" }}
    />
  );
}

export { AuroraPreview };
