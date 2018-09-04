if [ -z $1 ];then
echo "usage rm filename"
else
git rm $1
fi
