import './tiltshift.css';

function TiltshiftPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-tiltshift\" data-text=\"SHIFT\">SHIFT</div>" }}
    />
  );
}

export { TiltshiftPreview };
