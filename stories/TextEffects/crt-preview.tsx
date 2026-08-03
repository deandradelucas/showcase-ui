import './crt.css';

function CrtPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-crt\">CRT_MODE</div>" }}
    />
  );
}

export { CrtPreview };
