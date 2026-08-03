import './flap.css';

function FlapPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-flap\" role=\"img\" aria-label=\"DEPART\"><b aria-hidden=\"true\" style=\"--i:0\">D</b><b aria-hidden=\"true\" style=\"--i:1\">E</b><b aria-hidden=\"true\" style=\"--i:2\">P</b><b aria-hidden=\"true\" style=\"--i:3\">A</b><b aria-hidden=\"true\" style=\"--i:4\">R</b><b aria-hidden=\"true\" style=\"--i:5\">T</b></div>" }}
    />
  );
}

export { FlapPreview };
