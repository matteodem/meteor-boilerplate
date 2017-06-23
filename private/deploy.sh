#!/usr/bin/env bash

if [ ! -d ".meteor" ]; then
    echo "Execute deploy script from project root!"
    exit
else
    echo "Don't forget to remove dynamic imports before deploying!"
    meteor-build-client private/build
    cd private/build
    surge ./ --domain meteor-boilerplate.surge.sh
    cd ../../
fi
