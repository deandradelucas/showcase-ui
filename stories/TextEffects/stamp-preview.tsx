import './stamp.css';

function StampPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-stamp\">APPROVED</div>" }}
    />
  );
}

export { StampPreview };
