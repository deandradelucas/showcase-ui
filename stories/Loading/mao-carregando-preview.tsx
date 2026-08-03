import './mao-carregando.css';

function MaoCarregandoPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"carregador-mao\"><div class=\"carregador-mao__dedo\"></div><div class=\"carregador-mao__dedo\"></div><div class=\"carregador-mao__dedo\"></div><div class=\"carregador-mao__dedo\"></div><div class=\"carregador-mao__palma\"></div><div class=\"carregador-mao__polegar\"></div></div>" }}
    />
  );
}

export { MaoCarregandoPreview };
