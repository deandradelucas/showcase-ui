import './portal.css';

function PortalPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-portal\" data-text=\"PORTAL\">PORTAL</div>" }}
    />
  );
}

export { PortalPreview };
