#!/bin/sh
echo "CACHE MANIFEST" > cache.manifest
find . -type f|grep -vE ".git|.DS_Store|README|htaccess|manifest|external"|sed "s/\.\///g" >> cache.manifest
echo ONLINE >> cache.manifest
echo http://maps.gstatic.com/ >> cache.manifest
