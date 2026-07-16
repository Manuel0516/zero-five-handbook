FROM node:24-alpine AS builder
WORKDIR /app

# The build runs on the VPS, which shares 8 GB with everything else.
# Bound the Node heap so a build can never trigger the kernel OOM killer.
ENV NODE_OPTIONS=--max-old-space-size=1536

# fumadocs-mdx runs as a postinstall script and needs its config and content.
COPY package.json package-lock.json source.config.ts tsconfig.json ./
COPY content ./content
RUN npm ci

COPY . .
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# The AI search endpoint reads page text at runtime.
COPY --from=builder /app/content ./content

EXPOSE 3000
CMD ["node", "server.js"]
