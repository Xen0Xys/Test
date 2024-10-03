FROM node:21

LABEL authors="Xen0Xys"

WORKDIR /app

ARG PUBLIC_API_URL
ENV PUBLIC_API_URL ${PUBLIC_API_URL}

COPY . .

RUN npm install -g pnpm && pnpm install

RUN pnpm run build

EXPOSE 3000

CMD pnpm run start
