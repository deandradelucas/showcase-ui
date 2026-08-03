import './kinetic.css';

function KineticPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-kinetic\" role=\"img\" aria-label=\"KINETIC\"><b aria-hidden=\"true\" style=\"--i:0\">K</b><b aria-hidden=\"true\" style=\"--i:1\">I</b><b aria-hidden=\"true\" style=\"--i:2\">N</b><b aria-hidden=\"true\" style=\"--i:3\">E</b><b aria-hidden=\"true\" style=\"--i:4\">T</b><b aria-hidden=\"true\" style=\"--i:5\">I</b><b aria-hidden=\"true\" style=\"--i:6\">C</b></div>" }}
    />
  );
}

export { KineticPreview };
