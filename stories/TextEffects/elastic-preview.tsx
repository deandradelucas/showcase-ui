import './elastic.css';

function ElasticPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-elastic\">BOING</div>" }}
    />
  );
}

export { ElasticPreview };
