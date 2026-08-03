import './contour.css';

function ContourPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<svg class=\"fx-contour\" viewBox=\"0 0 260 56\" role=\"img\" aria-label=\"OUTLINE\"><text x=\"50%\" y=\"50%\" dominant-baseline=\"central\" text-anchor=\"middle\">OUTLINE</text></svg>" }}
    />
  );
}

export { ContourPreview };
