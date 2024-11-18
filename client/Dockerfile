FROM node:21-alpine

WORKDIR /app

ARG API_URL
ENV API_URL ${API_URL}

COPY . .

RUN npm install -g pnpm && pnpm install && pnpm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD pnpm run start
