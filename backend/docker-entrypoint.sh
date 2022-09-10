# docker-entrypoint.sh
# Install Laravel packages
composer install
if [ ! -e ./.env ]; then
  cp .env.example .env
fi

php -S 0.0.0.0:8000 -t public
