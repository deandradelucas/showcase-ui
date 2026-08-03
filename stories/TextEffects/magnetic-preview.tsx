import './magnetic.css';

function MagneticPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-magnetic\" role=\"img\" aria-label=\"MAGNET\"><b aria-hidden=\"true\" style=\"--i:0\">M</b><b aria-hidden=\"true\" style=\"--i:1\">A</b><b aria-hidden=\"true\" style=\"--i:2\">G</b><b aria-hidden=\"true\" style=\"--i:3\">N</b><b aria-hidden=\"true\" style=\"--i:4\">E</b><b aria-hidden=\"true\" style=\"--i:5\">T</b></div>" }}
    />
  );
}

export { MagneticPreview };
