#!/bin/bash

set -ex

cd plugins-core
npm install
npm link

cd ../plugins-example
npm install
npm link plugins-core
npm link

cd ../plugins
npm install
npm link plugins-core
npm link plugins-example
npx ng build
npx ng serve
