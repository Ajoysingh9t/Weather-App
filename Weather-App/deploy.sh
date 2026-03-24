#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Initialize a new git repository
git init
git add -A
git commit -m 'deploy'

# Push to the gh-pages branch
# Replace <USERNAME> and <REPO> with your GitHub username and repository name
git push -f git@github.com:<YOUR_USERNAME>/<YOUR_REPO>.git main:gh-pages

cd -
