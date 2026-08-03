import './sundial.css';

function SundialPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-sundial\">SHADOW</div>" }}
    />
  );
}

export { SundialPreview };
