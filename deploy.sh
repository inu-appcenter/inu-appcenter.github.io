#!/bin/bash
prjname="inu-appcenter.github.io"

echo "=============================="
echo ${prjname}
echo "=============================="

# run gulpfile.js image resizer
trap 'echo Stop gulp-watch' SIGINT
sudo gulp watch
trap SIGINT

npm run dev

# build
npm run build

# deploy with firebase cli
firebase deploy

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg

# commit
git add .
git commit -m "$commitmsg"
git push

exit
