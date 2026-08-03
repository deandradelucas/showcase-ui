import './prismcut.css';

function PrismcutPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-prismcut\" data-text=\"PRISM\">PRISM</div>" }}
    />
  );
}

export { PrismcutPreview };
