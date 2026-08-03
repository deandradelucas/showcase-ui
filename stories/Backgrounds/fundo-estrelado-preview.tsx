import './fundo-estrelado.css';

function FundoEstreladoPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"bg-starfield\"><div class=\"bg-starfield__stars\"></div><div class=\"bg-starfield__stars2\"></div><div class=\"bg-starfield__stars3\"></div><div class=\"bg-starfield__title\"><span>STARDUST</span></div></div>" }}
    />
  );
}

export { FundoEstreladoPreview };
