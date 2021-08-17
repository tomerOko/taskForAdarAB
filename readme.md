# hey! welcome to docker for angular

## description
react chat component with nodeJS and mySql


## installation
make sure u have docker running

## runing
1. clone/download to linux machine or WSL (for widows users)
2. cd into this project file (if u aren't already here, wich u are probably)
3. run: sudo docker-compose up -d

## for testing the component as a user:


## for development
1. open vscode (from linux or WSL) 
2. click Ctrl+shift+p
3. copy and paste: remote-containers: attach to running container
4. choose 'react_frontend'
5. do 3 again 
6. this time choose 'node_backend'
7. to see the main proccess node_backend or react_frontend just run the conmand - pm2 logs 0
8. run: pm2 status   (so that u can see whats going on)
9. run: pm2 logs ng  (to watch the 'ng serve' logs)
10. open the browser on: http://localhost:4200/  ( it might take a minute for angular to compile the project )

## developing notes
* if installing anything globaly and u want it to stay for the next build, please add the installation to the Dockerfile at the end of the 'RUN npm i -g' line 

* make sure to install react extension on chrome


