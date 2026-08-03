import './cartao-neumorfico.css';

function CartaoNeumorficoPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"cartao-neumorfico\"></div>" }}
    />
  );
}

export { CartaoNeumorficoPreview };
