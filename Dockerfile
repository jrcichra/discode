FROM node:18-alpine3.16
WORKDIR /app
COPY discode.js package.json yarn.lock /app/
RUN yarn install
ENV DISCORD_KEY noclue
ENTRYPOINT [ "node","/app/discode.js" ]
