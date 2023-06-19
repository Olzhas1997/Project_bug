FROM php:8.1-fpm

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions gd

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libicu-dev \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev \
    libfreetype6-dev \
    libavif-dev \
    libaom-dev \
    libxpm-dev \
    libjpeg62-turbo-dev \
    libpng-dev

RUN docker-php-ext-install -j$(nproc) pdo_mysql mysqli bcmath sockets calendar gettext \
    && docker-php-ext-configure gd --with-freetype --with-webp --with-jpeg --with-avif --with-xpm \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-enable gd \
    && docker-php-ext-configure intl && docker-php-ext-install intl \
    && docker-php-ext-configure exif && docker-php-ext-install exif && docker-php-ext-enable exif \
    && pecl install xdebug-3.1.3 && docker-php-ext-enable xdebug

COPY ./docker/php/php.ini /usr/local/etc/php/conf.d/php.ini

# Install composer
#ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- \
    --filename=composer \
    --install-dir=/usr/local/bin

WORKDIR /var/www
