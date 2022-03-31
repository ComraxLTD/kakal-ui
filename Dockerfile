FROM node:16

WORKDIR /app/design-system

COPY ./design-system/package* .

RUN npm install

CMD ["npm", "run", "storybook"]
