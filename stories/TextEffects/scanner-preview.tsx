import './scanner.css';

function ScannerPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-scanner\">SCANNER</div>" }}
    />
  );
}

export { ScannerPreview };
