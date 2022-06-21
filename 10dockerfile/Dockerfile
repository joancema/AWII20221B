FROM node
RUN ["apt-get","update"]
RUN ["apt-get","install","-y","vim"]
COPY . /var/www
WORKDIR /var/www
ENTRYPOINT ["node","index.js"]