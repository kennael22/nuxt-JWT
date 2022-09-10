FROM php:8.1-fpm
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev \
    unzip
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo pdo_mysql
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY php.ini /etc/php/8.1/cli/conf.d/99-etc.ini

#COPY docker-entrypoint.sh ./
#RUN chmod 777 ./docker-entrypoint.sh
#CMD ["./docker-entrypoint.sh"]
# Install unzip utility and libs needed by zip PHP extension 
COPY . .
CMD bash -c "composer install --prefer-dist && php artisan migrate:fresh --seed && php -S 0.0.0.0:8000 -t public"
WORKDIR /var/www/laravel
