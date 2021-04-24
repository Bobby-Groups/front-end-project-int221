FROM node:alpine3.10 as build
ENV NODE_VERSION 14.16.1
WORKDIR /my-app/
COPY package*.json /my-app/
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:1.19.10-alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /my-app/dist /usr/share/nginx/html/src/
EXPOSE 8080
