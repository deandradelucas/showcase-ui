import './dotmatrix.css';

function DotmatrixPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-dotmatrix\">PRINTOUT</div>" }}
    />
  );
}

export { DotmatrixPreview };
