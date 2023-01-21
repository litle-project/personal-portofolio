#!/bin/bash

if hash php; then
  echo "php ada";
fi

if hash python; then
    python -m SimpleHTTPServer 4200
fi
