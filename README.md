# E-CV
CV numérique

## Prerequisites :
```
Node.js 10.x+ / NPM 6.x+
strapi 3 alpha.16
mongoDB
```

## How to start frontend :
```
npm run start
```

## How to start backend :
```
sudo service mongod start
strapi start
```

## Installing Strapi :
```
npm install strapi@alpha -g
```

## Installing Node.js 10.x :
``` 
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
Install node.js (and npm)
sudo apt-get install -y nodejs 
```

## Installing MongoDB :
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

FOR 3.4 :
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
FOR 4.0 :
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

sudo apt-get update

FOR 3.4 :
sudo apt-get install -y mongodb-org=3.4 mongodb-org-server=3.4 mongodb-org-shell=3.4 mongodb-org-mongos=3.4 mongodb-org-tools=3.4
FOR LATEST :
sudo apt-get install -y mongodb-org

TO PREVENT MONGODB DEPENDENCIES TO UPDATE IF YOU INSTALLED A SPECIFIC VERTION :
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
```
