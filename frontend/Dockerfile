FROM node:14 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --output-path=./dist/out --configuration=production
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/out/ /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
