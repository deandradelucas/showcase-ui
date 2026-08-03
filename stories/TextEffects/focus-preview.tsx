import './focus.css';

function FocusPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-focus\" role=\"img\" aria-label=\"FOCUS\"><b aria-hidden=\"true\" style=\"--i:0\">F</b><b aria-hidden=\"true\" style=\"--i:1\">O</b><b aria-hidden=\"true\" style=\"--i:2\">C</b><b aria-hidden=\"true\" style=\"--i:3\">U</b><b aria-hidden=\"true\" style=\"--i:4\">S</b></div>" }}
    />
  );
}

export { FocusPreview };
