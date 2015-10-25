rsync -avz --progress \
	--exclude ".git" \
	--exclude "sync.sh" \
	--exclude "README.org" \
	* \
	hipp0:~/felix.geller.io/public_html/
