# hey! welcome to docker for angular

## description
this is a VS Code docker configs to develop react app on a solid, maintainable, docker configuration 

## installation
make sure u have docker and its running

## runing
1. clone/download
2. cd into this project file (if u aren't already here, wich u probably are)
3. run: sudo docker-compose up -d --build --force-recreate
4. click Ctrl+shift+p
5. copy and paste: remote-containers: attach to running container
6. choose angular_one option
7. open the commandline in the remote container vs code window
8. run: pm2 status   (so that u can see whats going on)
9. run: pm2 logs ng  (to watch the 'ng serve' logs)
10. open the browser on: http://localhost:4200/  ( it might take a minute for angular to compile the project )

## developing notes
* if installing anything globaly and u want it to stay for the next build, please add the installation to the Dockerfile at the end of the 'RUN npm i -g' line 

* make sure to install react extension on chrome


