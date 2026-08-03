import './duotone.css';

function DuotonePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-duotone\" data-text=\"DUO\">DUO</div>" }}
    />
  );
}

export { DuotonePreview };
