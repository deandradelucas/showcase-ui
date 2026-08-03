import { useState } from 'react';

export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard indisponível (permissão negada, contexto não seguro, etc.)
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        borderRadius: 6,
        background: '#f6f6f6',
        padding: '8px 8px 8px 12px',
        fontFamily: "'Outfit', sans-serif",
        fontSize: 13,
        color: '#111111',
      }}
    >
      <code
        style={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          color: '#111111',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {command}
      </code>
      <button
        type="button"
        onClick={copiar}
        style={{
          flexShrink: 0,
          border: '1px solid rgba(0,0,0,0.15)',
          borderRadius: 4,
          background: 'transparent',
          padding: '4px 8px',
          fontSize: 12,
          cursor: 'pointer',
          color: '#111111',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {copied ? 'Copiado' : 'Copiar'}
      </button>
    </div>
  );
}
