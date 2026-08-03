import './orbit.css';

function OrbitPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-orbit\" role=\"img\" aria-label=\"ORBIT\"><b aria-hidden=\"true\" style=\"--i:0\">O</b><b aria-hidden=\"true\" style=\"--i:1\">R</b><b aria-hidden=\"true\" style=\"--i:2\">B</b><b aria-hidden=\"true\" style=\"--i:3\">I</b><b aria-hidden=\"true\" style=\"--i:4\">T</b></div>" }}
    />
  );
}

export { OrbitPreview };
