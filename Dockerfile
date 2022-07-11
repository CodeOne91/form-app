FROM node:16 as node
WORKDIR /app
COPY package*.json /app/

RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx as runtime
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=node /app/build/ /usr/share/nginx/html
