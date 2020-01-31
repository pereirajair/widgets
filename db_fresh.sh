#!/bin/bash
docker exec -it app2 /bin/bash -c "php artisan migrate:fresh && php artisan db:seed"
