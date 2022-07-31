FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm build

ENV BASE_URL=http://localhost:8000/api/v1

EXPOSE 8080

CMD ["npm", "start"]