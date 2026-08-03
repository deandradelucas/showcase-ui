import './signal.css';

function SignalPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-signal\" data-text=\"SIGNAL\">SIGNAL</div>" }}
    />
  );
}

export { SignalPreview };
