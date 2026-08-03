import './spectrum.css';

function SpectrumPreview() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}
      dangerouslySetInnerHTML={{ __html: "<div class=\"fx-spectrum\" role=\"img\" aria-label=\"SPECTRUM\"><b aria-hidden=\"true\" style=\"--i:0\">S</b><b aria-hidden=\"true\" style=\"--i:1\">P</b><b aria-hidden=\"true\" style=\"--i:2\">E</b><b aria-hidden=\"true\" style=\"--i:3\">C</b><b aria-hidden=\"true\" style=\"--i:4\">T</b><b aria-hidden=\"true\" style=\"--i:5\">R</b><b aria-hidden=\"true\" style=\"--i:6\">U</b><b aria-hidden=\"true\" style=\"--i:7\">M</b></div>" }}
    />
  );
}

export { SpectrumPreview };
