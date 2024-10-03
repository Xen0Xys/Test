FROM node:21

LABEL authors="Xen0Xys"

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

COPY tsconfig.json ./

COPY . .

RUN npm install -g pnpm && pnpm install

RUN npx prisma generate

EXPOSE 4000

CMD npx prisma migrate deploy && npx prisma db seed && npx start
