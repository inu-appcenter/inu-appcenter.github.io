#!/bin/bash
echo "=============================="
echo "${PWD##*/}"
echo "=============================="

# install dependencies
npm install

# run gulpfile.js image resizer
trap 'echo Stop gulp-watch' SIGINT
gulp watch
trap SIGINT

# serve with hot reload at localhost:8000
npm run dev

# build for production with minification
npm run build

# deploy with firebase cli
printf "\n"
firebase deploy

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg

# if commitmsg empty
if [ -z "$commitmsg" ]
then
    echo "Commit message is empty"
    commitmsg="Add files via upload"
fi

printf "\n"
git add .
git commit -m "$commitmsg"
git push

exit
