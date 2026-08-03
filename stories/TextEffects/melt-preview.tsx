import './melt.css';

function MeltPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-melt\" role=\"img\" aria-label=\"MELT\"><b aria-hidden=\"true\" style=\"--i:0\">M</b><b aria-hidden=\"true\" style=\"--i:1\">E</b><b aria-hidden=\"true\" style=\"--i:2\">L</b><b aria-hidden=\"true\" style=\"--i:3\">T</b></div>" }}
    />
  );
}

export { MeltPreview };
