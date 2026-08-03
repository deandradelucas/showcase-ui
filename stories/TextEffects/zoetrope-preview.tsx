import './zoetrope.css';

function ZoetropePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-zoetrope\" role=\"img\" aria-label=\"ROTATE\"><b aria-hidden=\"true\" style=\"--i:0\">R</b><b aria-hidden=\"true\" style=\"--i:1\">O</b><b aria-hidden=\"true\" style=\"--i:2\">T</b><b aria-hidden=\"true\" style=\"--i:3\">A</b><b aria-hidden=\"true\" style=\"--i:4\">T</b><b aria-hidden=\"true\" style=\"--i:5\">E</b></div>" }}
    />
  );
}

export { ZoetropePreview };
