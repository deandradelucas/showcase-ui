import './smoke.css';

function SmokePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-smoke\" role=\"img\" aria-label=\"SMOKE\"><b aria-hidden=\"true\" style=\"--i:0\">S</b><b aria-hidden=\"true\" style=\"--i:1\">M</b><b aria-hidden=\"true\" style=\"--i:2\">O</b><b aria-hidden=\"true\" style=\"--i:3\">K</b><b aria-hidden=\"true\" style=\"--i:4\">E</b></div>" }}
    />
  );
}

export { SmokePreview };
