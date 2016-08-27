#!/usr/bin/env bash

if [ ! -d ".meteor" ]; then
    echo "Execute deploy script from project root!"
    exit
else
    meteor-build-client private/build
    cd private/build
    surge ./ --domain meteor-boilerplate.surge.sh
    cd ../../
fi
