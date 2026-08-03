import './heatmap.css';

function HeatmapPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-heatmap\">THERMAL</div>" }}
    />
  );
}

export { HeatmapPreview };
