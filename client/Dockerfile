FROM node
WORKDIR /client
COPY . .
COPY ./docker-entrypoint.sh /home/client/docker-entrypoint.sh
RUN npm i
RUN chmod +x /home/client/docker-entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["/home/client/docker-entrypoint.sh"]
