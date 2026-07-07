import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import localFont from 'next/font/local';
import { ThemeFavicon } from '@/components/theme-favicon';

const jetbrainsNerd = localFont({
  src: [
    {
      path: './fonts/JetBrainsMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/JetBrainsMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nerd',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsNerd.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen" style={{ fontFamily: 'var(--font-nerd), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' }}>
        <ThemeFavicon />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}