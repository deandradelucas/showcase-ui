import './chrome.css';

function ChromePreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-chrome\">CHROME</div>" }}
    />
  );
}

export { ChromePreview };
