import './inktrap.css';

function InktrapPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-inktrap\" data-text=\"INK\">INK</div>" }}
    />
  );
}

export { InktrapPreview };
