import './alternar-pulso.css';

function AlternarPulsoPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<label class=\"switch\"><input type=\"checkbox\"><span class=\"slider\"><span class=\"glow\"></span><span class=\"icon-on\">✓</span><span class=\"icon-off\">✕</span></span></label>" }}
    />
  );
}

export { AlternarPulsoPreview };
