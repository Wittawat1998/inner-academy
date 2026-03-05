# ── Stage 1: Build ────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Runner ───────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only the built output from the builder stage
COPY --from=builder /app/.output ./output

# Create mount-point directories so Docker volumes can bind cleanly
# (Nginx serves these directly; Nuxt won't see those requests)
RUN mkdir -p output/public/images output/public/downloads

EXPOSE 3000
CMD ["node", "output/server/index.mjs"]
