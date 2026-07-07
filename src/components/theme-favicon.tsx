'use client';

import { useEffect, useRef } from 'react';

function getAccentColor(): string {
  // Toggle to read the opposite theme's accent color
  document.documentElement.classList.toggle('dark');
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-fd-primary')
    .trim();
  document.documentElement.classList.toggle('dark');
  return color || '#1a1a1a';
}

async function renderFavicon() {
  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!favicon) return;

  // Wait for the Nerd Font to be loaded by the browser
  await document.fonts.ready;

  // Detect the actual font-family name Next.js generated for the Nerd Font
  const probe = document.createElement('span');
  probe.style.cssText = 'font-family: var(--font-nerd); position: absolute; visibility: hidden;';
  document.body.appendChild(probe);
  const fontFamily = getComputedStyle(probe).fontFamily.split(',')[0].replace(/["']/g, '');
  document.body.removeChild(probe);

  const color = getAccentColor();
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d')!;

  ctx.font = `22px "${fontFamily}", monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.fillText('', 16, 16);

  favicon.href = canvas.toDataURL();
}

export function ThemeFavicon() {
  const rendering = useRef(false);

  useEffect(() => {
    const observer = new MutationObserver(safeRender);
    const observerOptions: MutationObserverInit = { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] };

    function safeRender() {
      if (rendering.current) return;
      rendering.current = true;
      // Disconnect while rendering: getAccentColor() toggles the `dark`
      // class to sample the other theme, which would otherwise re-trigger
      // this same observer and loop forever.
      observer.disconnect();
      renderFavicon().finally(() => {
        rendering.current = false;
        observer.observe(document.documentElement, observerOptions);
      });
    }

    safeRender();

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', safeRender);
    observer.observe(document.documentElement, observerOptions);

    return () => {
      mq.removeEventListener('change', safeRender);
      observer.disconnect();
    };
  }, []);

  return null;
}
