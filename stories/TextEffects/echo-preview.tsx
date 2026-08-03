import './echo.css';

function EchoPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-echo\" data-text=\"ECHO\">ECHO</div>" }}
    />
  );
}

export { EchoPreview };
