FROM node:12
ADD . .
RUN yarn install
RUN yarn build
CMD yarn start