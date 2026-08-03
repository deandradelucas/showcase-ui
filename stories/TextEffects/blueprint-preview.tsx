import './blueprint.css';

function BlueprintPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-blueprint\">DRAFT</div>" }}
    />
  );
}

export { BlueprintPreview };
