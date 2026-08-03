import './pop.css';

function PopPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-pop\" role=\"img\" aria-label=\"POP!\"><b aria-hidden=\"true\" style=\"--i:0\">P</b><b aria-hidden=\"true\" style=\"--i:1\">O</b><b aria-hidden=\"true\" style=\"--i:2\">P</b><b aria-hidden=\"true\" style=\"--i:3\">!</b></div>" }}
    />
  );
}

export { PopPreview };
