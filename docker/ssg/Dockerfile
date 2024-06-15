# syntax=docker/dockerfile:1
# see: https://docs.docker.com/engine/reference/builder/
ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}-alpine as base

ENV PNPM_HOME="/pnpm" \
    PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /src


FROM base as build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile

COPY --link . .

RUN pnpm run generate


FROM base as runtime

RUN --mount=type=cache,target=/root/.npm \
    npm install serve --global

COPY --from=build /src/.output .output
COPY --link package.json .

ENV HOST=0.0.0.0 PORT=5555
EXPOSE 5555/tcp

# Run the application as a non-root user.
USER node

# Run the application.
CMD pnpm run ssg