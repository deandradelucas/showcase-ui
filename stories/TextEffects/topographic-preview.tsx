import './topographic.css';

function TopographicPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-topographic\">TERRAIN</div>" }}
    />
  );
}

export { TopographicPreview };
