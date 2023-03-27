FROM node:16-alpine3.17 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/you-booking    /usr/share/nginx/html

