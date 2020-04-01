.PHONY: help run

run:
	docker-compose up

help:
	@echo "Commands:"
	@echo "\tsetup: Setup new dev environment"
	@echo "\tmigrate: Run django migrations"

build:
	docker-compose build

migrate:
	docker-compose run --rm django python run.py migrate

setup: build migrate
