#!/bin/bash

cd ./server
echo "Inside server"
npm install
npm start &  

cd ..
cd ./client
echo "Inside client"
npm install
npm start 
