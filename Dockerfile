# DEVELOPMENT ONLY

FROM node:12

RUN mkdir /app

ADD . /app/

WORKDIR /app

CMD yarn start
