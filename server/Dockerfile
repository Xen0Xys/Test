FROM node:21-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

RUN npm install -g pnpm && pnpm install

COPY . .

ENV NODE_ENV=production

RUN pnpm dlx prisma generate && pnpm run build

EXPOSE 4000

CMD pnpm dlx prisma migrate deploy && npx prisma db seed && pnpm run start:prod
