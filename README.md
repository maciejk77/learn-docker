Learn Docker

# Notes

e.g. docker run -it redis (quickly spins a redis instance without installing locally)

- Container - instance of image, runs a program, process or set of which have a grouping of resources specifically allocated to them
- Image - single file with all the dependencies, configs to run a program, very specific copy of folders, files (file system snapshot) and starting commands for them
- Docker = Docker CLI (Docker Client) + Docker Server (aka Docker Daemon)
- Namespace e.g. allocating resource HD based on the process asking for it, isolating resources per process
- Control Group e.g. limits the amount of resources a given process can use

# Commands

- `docker version` to check current installed version
- `docker run <image_name_here>` e.g. redis, spins up a redis containter
- `docker ps` lists running processes
- `docker ps --all` all containers created, running and ever created
- `docker create` + `docker start -a` = `docker run`
- `docker system prune` to clear all images
- `docker logs <container_id>` to show logs emitted from the container
- `docker stop <container_id>` stops, but gives some time to complete required steps to close
- `docker kill <container_id>` terminates the process immediately
- `docker exec -it <container_id> <command>` -it flag to provide input to the container
- `docker exec -it <container_id> sh` to spin up container and enter to use shell command prompt others being bash | powershell | zsh | sh

Dockerfile ==> Docker Client ==> Docker Server ==> Usable image!

- `docker build .` builds in current folder the image, according to instructions in Dockerfile FROM/RUN/CMD
- `docker build -t <docker_id>/<repo/project_id>:<version> .` tagging image, -t adds specified tag/label to exection of build process e.g. docker build -t maciejkkurek/redis:latest (latest being a tag)

- `docker run -p 8080:8080 <image_id>` reroutes incoming requests to this port on local host to port inside container
