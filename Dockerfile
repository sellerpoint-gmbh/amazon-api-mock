FROM node:18

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build:lib

EXPOSE 3100

CMD ["npm", "run", "start"]