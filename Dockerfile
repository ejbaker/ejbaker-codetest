FROM node:6

WORKDIR /app
ADD . /app

RUN yarn && yarn clean

EXPOSE 3000

CMD ["yarn", "run", "serve"]
