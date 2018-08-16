dev:
	npm run dev

.PHONY: build
build:
	npm run build

sync: build
	rsync -av -e "ssh -i ~/.ssh/pid_rsa" dist/ pi@$(PI):/home/pi/EMF/voting-frontend/
