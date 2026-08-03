import './indicador-de-scroll.css';

function IndicadorDeScrollPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<button class=\"indicador-scroll\"><div class=\"indicador-scroll__wheel\"></div></button>" }}
    />
  );
}

export { IndicadorDeScrollPreview };
