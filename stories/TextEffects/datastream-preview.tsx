import './datastream.css';

function DatastreamPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-datastream\">STREAM</div>" }}
    />
  );
}

export { DatastreamPreview };
