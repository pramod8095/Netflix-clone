FROM node

#set work Directory 
WORKDIR /app

#install dependencies 
COPY package.json .
RUN npm install

# add app
COPY . .


EXPOSE 3000

#start app 
CMD ["npm", "start"]