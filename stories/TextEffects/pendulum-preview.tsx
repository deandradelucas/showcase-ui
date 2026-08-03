import './pendulum.css';

function PendulumPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-pendulum\" role=\"img\" aria-label=\"SWING\"><b aria-hidden=\"true\" style=\"--i:0\">S</b><b aria-hidden=\"true\" style=\"--i:1\">W</b><b aria-hidden=\"true\" style=\"--i:2\">I</b><b aria-hidden=\"true\" style=\"--i:3\">N</b><b aria-hidden=\"true\" style=\"--i:4\">G</b></div>" }}
    />
  );
}

export { PendulumPreview };
