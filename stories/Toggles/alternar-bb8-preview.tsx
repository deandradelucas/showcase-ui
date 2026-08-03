import './alternar-bb8.css';

function AlternarBb8Preview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<label class=\"bb8-toggle\"><input class=\"bb8-toggle__checkbox\" type=\"checkbox\"><div class=\"bb8-toggle__container\"><div class=\"bb8-toggle__scenery\"><div class=\"bb8-toggle__star\"></div><div class=\"bb8-toggle__star\"></div><div class=\"bb8-toggle__star\"></div><div class=\"bb8-toggle__star\"></div><div class=\"bb8-toggle__star\"></div><div class=\"bb8-toggle__star\"></div><div class=\"bb8-toggle__star\"></div><div class=\"gomrassen\"></div><div class=\"hermes\"></div><div class=\"chenini\"></div><div class=\"tatto-1\"></div><div class=\"tatto-2\"></div><div class=\"bb8-toggle__cloud\"></div><div class=\"bb8-toggle__cloud\"></div><div class=\"bb8-toggle__cloud\"></div></div><div class=\"bb8\"><div class=\"bb8__head-container\"><div class=\"bb8__head\"></div><div class=\"bb8__antenna\"></div><div class=\"bb8__antenna\"></div></div><div class=\"bb8__body\"></div></div><div class=\"bb8__shadow\"></div></div></label>" }}
    />
  );
}

export { AlternarBb8Preview };
