import './mirror.css';

function MirrorPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-mirror\">MIRROR</div>" }}
    />
  );
}

export { MirrorPreview };
