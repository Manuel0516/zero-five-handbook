import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <span
            className="text-sm"
            style={{ 
              fontFamily: 'var(--font-nerd)',
              marginRight: '0.25rem'
            }}
          >
            
          </span>
          <span className="font-medium">{appName}</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
