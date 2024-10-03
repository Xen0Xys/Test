FROM node:21

LABEL authors="Xen0Xys"

WORKDIR /app

ARG API_URL
ENV API_URL ${API_URL}

COPY . .

RUN npm install -g pnpm && pnpm install

RUN pnpm run build

EXPOSE 3000

CMD pnpm run start
