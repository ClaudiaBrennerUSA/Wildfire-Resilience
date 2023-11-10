FROM windowsservercore:latest
RUN apt-get -y update
RUN apt-get -y install wget
RUN apt -y install default-jdk
RUN apt -y install maven
RUN apt -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get -y install nodejs

WORKDIR /var/www/scorecard/app/main

RUN npm install -g nodemon
RUN npm install jest --global 

#
# SEE:  https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds/32785014#32785014
#       answered Nov 30, 2016 at 10:36 BY sergeysynergy's 
#
#       "local" npm installs are placed in a container directory rather than a volume. 
#       Then an environment variable is set to point to the location of the "local" installs 
#
RUN mkdir /node_home
WORKDIR /node_home
RUN npm install mongodb
RUN npm install mysql 
RUN npm install express
ENV NODE_PATH /node_home/node_modules/
WORKDIR /var/www/scorecard/app/main
