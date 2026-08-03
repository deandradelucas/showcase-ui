import './barcode.css';

function BarcodePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-barcode\">BARCODE</div>" }}
    />
  );
}

export { BarcodePreview };
