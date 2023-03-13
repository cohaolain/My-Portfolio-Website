#!/bin/bash
echo "Clearing gh directory"
rm -rf gh && mkdir gh && cd gh

echo "Init empty sites repo"
git init
git remote add origin git@github.com:cohaolain/cohaolain.git

echo "Build site"
yarn build

echo "Copy prod site and GitHub profile README"
cp ../build/* . -r
cp ../README_profile.md README.md

echo "Generating commit and force pushing"
git add .
git commit -m "Update site build"
git push --set-upstream origin main --force
