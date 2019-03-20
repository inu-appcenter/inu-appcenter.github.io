#!/bin/bash
prjname="inu-appcenter.github.io"

echo "=============================="
echo ${prjname}
echo "=============================="

# run gulpfile.js image resizer
trap 'echo Stop gulp-watch' SIGINT
gulp watch
trap SIGINT

npm run dev

# build
npm run build

# deploy with firebase cli
printf "\n"
firebase deploy

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg
git add .

# commit
if [ -z "$commitmsg" ]
then
    echo "commit message is empty"
    git commit -m "Add files via upload"
else
    git commit -m "$commitmsg"
fi

git push

exit
