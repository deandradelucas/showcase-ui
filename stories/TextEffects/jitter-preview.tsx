import './jitter.css';

function JitterPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-jitter\">JITTER</div>" }}
    />
  );
}

export { JitterPreview };
