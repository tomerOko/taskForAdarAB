# hey! welcome to docker for angular

## description
react chat component with nodeJS and mySql.

## security
not secured at all
DO NOT DEPLOY TO ANY SERVER/CLOUD BEFORE HIDING CONFIG FILES AND CHANGING AND HIDING THE PASSWORDS


## installation
make sure u have docker running

## runing
1. clone/download to linux machine or WSL (for widows users)
2. cd into this project file (if u aren't already here, wich u are probably)
3. run: sudo docker-compose up -d

## for testing the component as a user:
1. react app will be runing at localhot:4200
2. node server runing on localhost:3000
3. mySql deamon ruming on localhost:3306

## for development
1. open vscode (from linux or WSL) 
2. click Ctrl+shift+p
3. copy and paste: remote-containers: attach to running container
4. choose 'react_frontend'
5. do 3 again 
6. this time choose 'node_backend'
7. to see the main proccess node_backend or react_frontend just run the conmand 'pm2 logs 0'
8. if there any git problems try runing 'sudo chown -R $USER:$(id -gn $USER) ./*' and then then yout linux password
9. if u want to connect to the mysql with some GUI (like workbench) the password for root is on the docker file


## developing notes
* if installing anything globaly and u want it to stay for the next build, please add the installation to the Dockerfile at the end of the 'RUN npm i -g' line 

* make sure to install react extension on chrome


