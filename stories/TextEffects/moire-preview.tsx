import './moire.css';

function MoirePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-moire\">MOIRÉ</div>" }}
    />
  );
}

export { MoirePreview };
