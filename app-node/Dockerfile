ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /code
EXPOSE ${PORT}

ENV PORT=${PORT}


# DEVELOPMENT
FROM base as dev

COPY . .
RUN npm ci --include=dev
CMD npm run dev


# PRODUCTION
FROM base as prod
ENV NODE_ENV production

COPY . .
RUN npm ci --omit=dev
CMD node src/index.js
