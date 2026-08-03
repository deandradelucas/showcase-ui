import './neon.css';

function NeonPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-neon\">NEON</div>" }}
    />
  );
}

export { NeonPreview };
