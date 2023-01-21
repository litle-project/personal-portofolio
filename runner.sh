#!/bin/bash

if hash php; then
    php -S 127.0.0.1:4200;
fi

if hash python; then
    python -m SimpleHTTPServer 4200
fi
