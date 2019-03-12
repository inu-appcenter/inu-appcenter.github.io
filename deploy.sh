#!/bin/bash

npm run dev

# build
npm run build

# deploy with firebase cli
firebase deploy

# get commit message
printf "\n"
read -p "Enter commit message: " commitmsg

# commit
git add .
git commit -m $commitmsg
git push

exit
