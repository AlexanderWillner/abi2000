#!/bin/bash
#
#

if [ "$2" == "" ]; then
    echo "Usage: $0 <year> <name>"
    exit 1;
fi

_year="$1";
_name="$2";

find . -iname "*.jpg" -exec echo -n "<img src=\"./external/$_year/fotos/$_name/{}\" class=\"album\" />" \;
