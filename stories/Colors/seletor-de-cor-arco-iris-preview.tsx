import './seletor-de-cor-arco-iris.css';

function SeletorDeCorArcoIrisPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"seletor-cor-container\"><button class=\"seletor-cor-item\" style=\"--color: #e11d48\" aria-color=\"#e11d48\"></button><button class=\"seletor-cor-item\" style=\"--color: #f472b6\" aria-color=\"#f472b6\"></button><button class=\"seletor-cor-item\" style=\"--color: #fb923c\" aria-color=\"#fb923c\"></button><button class=\"seletor-cor-item\" style=\"--color: #facc15\" aria-color=\"#facc15\"></button><button class=\"seletor-cor-item\" style=\"--color: #84cc16\" aria-color=\"#84cc16\"></button><button class=\"seletor-cor-item\" style=\"--color: #10b981\" aria-color=\"#10b981\"></button><button class=\"seletor-cor-item\" style=\"--color: #0ea5e9\" aria-color=\"#0ea5e9\"></button><button class=\"seletor-cor-item\" style=\"--color: #3b82f6\" aria-color=\"#3b82f6\"></button><button class=\"seletor-cor-item\" style=\"--color: #8b5cf6\" aria-color=\"#8b5cf6\"></button><button class=\"seletor-cor-item\" style=\"--color: #a78bfa\" aria-color=\"#a78bfa\"></button></div>" }}
    />
  );
}

export { SeletorDeCorArcoIrisPreview };
