import './ransom.css';

function RansomPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-ransom\" role=\"img\" aria-label=\"RANSOM\"><b aria-hidden=\"true\" style=\"--i:0\">R</b><b aria-hidden=\"true\" style=\"--i:1\">A</b><b aria-hidden=\"true\" style=\"--i:2\">N</b><b aria-hidden=\"true\" style=\"--i:3\">S</b><b aria-hidden=\"true\" style=\"--i:4\">O</b><b aria-hidden=\"true\" style=\"--i:5\">M</b></div>" }}
    />
  );
}

export { RansomPreview };
