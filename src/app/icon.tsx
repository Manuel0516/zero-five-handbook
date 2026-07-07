import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  const fontData = readFileSync(
    join(process.cwd(), 'src/app/fonts/JetBrainsMono-Regular.ttf'),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1a1a1a',
          fontSize: 22,
          fontFamily: 'JetBrainsMonoNF',
        }}
      >
        
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'JetBrainsMonoNF',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );
}
