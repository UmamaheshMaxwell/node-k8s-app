FROM node:16 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY . .
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["node", "server.js"]
