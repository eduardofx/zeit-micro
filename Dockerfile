FROM mhart/alpine-node:12 as base
WORKDIR /usr/src
COPY . .
RUN npm install
RUN npm run build

FROM mhart/alpine-node:base-12
WORKDIR /usr/src

COPY --from=base /usr/src .
CMD ["node", "./node_modules/.bin/micro"]