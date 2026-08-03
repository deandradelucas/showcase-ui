import './heartbeat.css';

function HeartbeatPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-heartbeat\">PULSE</div>" }}
    />
  );
}

export { HeartbeatPreview };
