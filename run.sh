#!/bin/bash
# Creation date: 2015.07.12

if [[ NODE_ENV == 'production' ]]; then
	forever app.js;

else
	supervisor app.js;
fi
