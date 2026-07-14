import { renderMermaidSVG } from 'beautiful-mermaid';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

export function Mermaid({ chart }: { chart: string }) {
  const svg = renderChart(chart);

  if (!svg) {
    return (
      <CodeBlock title="Mermaid diagram source">
        <Pre>{chart}</Pre>
      </CodeBlock>
    );
  }

  return (
    <div
      aria-label="Infrastructure diagram"
      className="my-6 overflow-x-auto [&_svg]:h-auto [&_svg]:max-w-full"
      role="img"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

function renderChart(chart: string) {
  try {
    return renderMermaidSVG(chart, {
      bg: 'var(--color-fd-background)',
      fg: 'var(--color-fd-foreground)',
      interactive: true,
      transparent: true,
    });
  } catch {
    return undefined;
  }
}
