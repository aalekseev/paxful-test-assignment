FROM node:12-alpine

RUN apk add --no-cache bash python make

WORKDIR /app

COPY package.json yarn.lock /app/

RUN /bin/bash -c "yarn install"

CMD /bin/bash -c "yarn start"
