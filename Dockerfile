# frontend/Dockerfile

FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli &&  npm i
COPY . .

EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]

