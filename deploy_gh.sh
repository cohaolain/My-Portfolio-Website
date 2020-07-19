#!/bin/bash

rm -rf gh && mkdir gh && cd gh
pwd
git clone git@github.com:cohaolain/Website.git .
pwd
git status
yarn build
cp ../build/* . -r
pwd
git status
git add .
git commit -m "Update site build"
git push
