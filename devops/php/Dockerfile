FROM php:7.2-fpm

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www

RUN printf "deb [trusted=yes] http://deb.debian.org/debian buster main\ndeb [trusted=yes] http://security.debian.org/debian-security buster/updates main\ndeb [trusted=yes] http://deb.debian.org/debian buster-updates main" > /etc/apt/sources.list

RUN cat /etc/apt/sources.list
# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    mariadb-client \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    libpq-dev \
    curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN apt-get update && \
    apt-get install -y libxml2-dev && \
    docker-php-ext-install soap
# Install extensions
RUN docker-php-ext-install pgsql pdo_pgsql
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl 
RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/
RUN docker-php-ext-install gd

# Install composer
RUN curl -ksS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

RUN \
  sed -i 's/TLSv1.2/TLSv1/g' /etc/ssl/openssl.cnf && \
  sed -i 's/CipherString/#CipherString/g' /etc/ssl/openssl.cnf

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
COPY --chown=www:www . /var/www

# Change current user to www
USER www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]