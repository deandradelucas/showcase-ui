import './softblur.css';

function SoftblurPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-softblur\">FOCUS</div>" }}
    />
  );
}

export { SoftblurPreview };
