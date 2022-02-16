# Install stage
FROM node:14.1-alpine AS installer

WORKDIR /srv

COPY package.json yarn.lock ./

RUN yarn

COPY . .

# Builder Stage
FROM node:14.1-alpine AS builder
WORKDIR /srv

COPY --from=installer /srv/. .

RUN yarn build


# Run stage
# FROM nginx:1.17-alpine
FROM knyuwork/docker-nginx:1.0.0

WORKDIR /srv/build/

COPY --from=builder /srv/build/. .