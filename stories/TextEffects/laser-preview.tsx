import './laser.css';

function LaserPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-laser\" data-text=\"LASER\">LASER</div>" }}
    />
  );
}

export { LaserPreview };
