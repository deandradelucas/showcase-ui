import './ember.css';

function EmberPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-ember\">EMBER</div>" }}
    />
  );
}

export { EmberPreview };
