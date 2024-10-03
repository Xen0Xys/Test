FROM node:21

LABEL authors="Xen0Xys"

WORKDIR /app

COPY . .

RUN npm install -g pnpm && pnpm install

RUN pnpx prisma generate

EXPOSE 4000

CMD pnpx prisma migrate deploy && pnpx prisma db seed && pnpm run start
