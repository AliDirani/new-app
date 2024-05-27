FROM node:current-alpine3.19
WORKDIR /app
COPY package*.json ./
Run npm install 
copy . .
EXPOSE 3000 
CMD ["node","app.js"]
