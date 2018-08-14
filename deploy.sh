#!/bin/sh

set -e

# Stolen from the hakyll tutorial on github pages

# Temporarily store uncommited changes
git stash -u

# Verify correct branch
git checkout develop

# Build new files
stack exec site clean
stack exec site build

# Get previous files
git fetch --all
git checkout -b master --track origin/master

# Overwrite existing files with new files
cp -a _site/. .

# Commit
git add -A
git commit -m "Publish."

# Push
git push origin master:master

# Restoration
git checkout develop
git branch -D master
git stash pop
