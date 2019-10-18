# Building
build-prod:
	yarn build

# Deployment
push-mucss:
	rsync -r build/ mucss:ciaran.mucss.ie --delete

deploy-mucss: build-prod push-mucss
