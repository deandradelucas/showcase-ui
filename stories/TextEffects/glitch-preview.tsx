import './glitch.css';

function GlitchPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-glitch\" data-text=\"GLITCH\">GLITCH</div>" }}
    />
  );
}

export { GlitchPreview };
