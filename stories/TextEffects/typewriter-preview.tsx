import './typewriter.css';

function TypewriterPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-typewriter\">TYPEWRITER</div>" }}
    />
  );
}

export { TypewriterPreview };
