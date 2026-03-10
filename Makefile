IMAGE_NAME=sylvian-web
IMAGE_TAG=latest
CONTAINER_NAME=sylvian-web

# Load .env automatically
ifneq (,$(wildcard .env))
	include .env
	export
endif

.PHONY: build run stop logs shell clean

build:
	docker build \
		-t $(IMAGE_NAME):$(IMAGE_TAG) .

run:
	docker run -d \
		--name $(CONTAINER_NAME) \
		-p 3000:3000 \
		--env-file .env \
		$(IMAGE_NAME):$(IMAGE_TAG)

stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

logs:
	docker logs -f $(CONTAINER_NAME)

shell:
	docker exec -it $(CONTAINER_NAME) sh

clean:
	docker rmi $(IMAGE_NAME):$(IMAGE_TAG) || true