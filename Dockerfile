FROM node
WORKDIR /textbt
COPY . .
COPY ./docker-entrypoint.sh /home/textbt/docker-entrypoint.sh
RUN npm i
RUN chmod +x /home/textbt/docker-entrypoint.sh
EXPOSE 8080
ENTRYPOINT ["/home/textbt/docker-entrypoint.sh"]
