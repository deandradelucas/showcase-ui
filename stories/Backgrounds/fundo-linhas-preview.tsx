import './fundo-linhas.css';

function FundoLinhasPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"bg-lines\"></div>" }}
    />
  );
}

export { FundoLinhasPreview };
