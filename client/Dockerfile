FROM node:12-alpine

RUN apk add --no-cache bash

COPY package.json yarn.lock /app/

WORKDIR /app

RUN /bin/bash -c "yarn install"

CMD /bin/bash -c "yarn start"
