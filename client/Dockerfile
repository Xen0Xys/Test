FROM node:21

LABEL authors="Xen0Xys"

WORKDIR /app

COPY . .

RUN npm install -g pnpm && pnpm install

RUN pnpm run build

EXPOSE 3000

CMD pnpm run start
