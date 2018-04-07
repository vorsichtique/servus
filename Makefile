prod: docker-down prod-up

prod-up:
	docker-compose -f docker-compose.yml -f docker-compose-production.yml up -d --build

dev: docker-down dev-up

dev-up:
	docker-compose up

docker-down:
	docker-compose down