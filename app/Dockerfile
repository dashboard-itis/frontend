FROM node:25-bookworm-slim AS base
FROM base AS installer

WORKDIR /app

COPY package.json package-lock.json /app/

RUN --mount=type=cache,target=/root/.npm \
    npm ci --ignore-scripts

FROM base AS builder

COPY --from=installer /app/node_modules /app/node_modules

WORKDIR /app

COPY *.json craco.config.js /app/
COPY src /app/src
COPY public /app/public

RUN GENERATE_SOURCEMAP=false npm run build

FROM nginx:stable-alpine-slim

RUN apk update && apk upgrade --no-cache && apk add --no-cache curl

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /var/www/html

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/www/html && \
    chown -R nginx:nginx /etc/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

EXPOSE 80

USER nginx

CMD [ "nginx" ]