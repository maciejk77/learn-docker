# specify a base image
FROM alpine

# run some commands to install additional programs
RUN apk add --update gcc
RUN apk add --update redis

# specify a command to run on container startup
CMD ["redis-server"]