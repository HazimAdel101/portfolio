# 1) Base image
FROM node:20-alpine AS base
WORKDIR /app

# Enable corepack so pnpm works
RUN corepack enable

# 2) Dependencies layer
FROM base AS deps

# Alpine extras if you need native modules like sharp
RUN apk add --no-cache libc6-compat

# Only copy package manager files first (better caching)
COPY package.json pnpm-lock.yaml* ./

RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; else pnpm install; fi

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NODE_ENV=production

# Build Next.js
RUN pnpm build

# 4) Runtime image
FROM base AS runner

ENV NODE_ENV=production

# Create non-root user
RUN addgroup -g 1001 -S nodejs \
  && adduser -S nextjs -u 1001

USER nextjs
WORKDIR /app

# Copy only what we need to run the app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.* ./

ENV PORT=3111
EXPOSE 3111

CMD ["pnpm", "start"]
