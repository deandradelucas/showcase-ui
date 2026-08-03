import './wave.css';

function WavePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-wave\" role=\"img\" aria-label=\"WAVE\"><b aria-hidden=\"true\" style=\"--i:0\">W</b><b aria-hidden=\"true\" style=\"--i:1\">A</b><b aria-hidden=\"true\" style=\"--i:2\">V</b><b aria-hidden=\"true\" style=\"--i:3\">E</b></div>" }}
    />
  );
}

export { WavePreview };
