# Stage 1: Build the frontend
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Copy package files and install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy built frontend assets
COPY --from=builder /app/dist ./dist

# Copy server code
COPY server ./server

EXPOSE 3001

CMD ["node", "server/index.js"]
