#!/bin/bash

# Check if composer is installed
if ! [ -x "$(command -v composer)" ]; then
  echo "Error: Composer is not installed." >&2
  exit 1
fi

echo "Installing PHP dependencies with Composer..."
composer install --no-dev --optimize-autoloader

echo "Setting up environment..."
cp .env.example .env

echo "Generating application key..."
php artisan key:generate

echo "Running migrations..."
php artisan migrate --force

echo "Caching configuration..."
php artisan config:cache
php artisan route:cache

echo "Build completed successfully."
