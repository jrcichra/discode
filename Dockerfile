FROM node:latest
ADD discode.js run.sh package.json /
RUN npm install
ENV DB_IP localhost
ENV DB_USERNAME root
ENV DB_PASSWORD root
ENV DB_PORT 3306
ENV DISCORD_KEY noclue
CMD ["sh", "-c", "sh run.sh ${DB_IP} ${DB_USERNAME} ${DB_PASSWORD} ${DB_PORT} ${DISCORD_KEY}"]