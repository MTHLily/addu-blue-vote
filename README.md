# Setup Instructions

1. Clone repo
2. Generate key with `php artisan key:generate`
3. Configure your .env

   - Database configuration (replace with your own)

   ```
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=addu_blue_vote
   DB_USERNAME=
   DB_PASSWORD=

   ADMIN_USER=
   ADMIN_EMAIL=
   ADMIN_PASSWORD=

   MIX_GOOGLE_MAPS_API_KEY=
   ```

4. Install the frontend packages

   ```
   npm install
   npm run dev
   ```

5. Migrate with `php artisan migrate --seed`

# Update Instructions

1. `composer install`
2. `php artisan migrate:fresh --seed`
3. `npm install && npm run dev`

# Production Instructions

1. Run `npm run production`
2. Change .env

```
APP_ENV=production
APP_DEBUG=false
```

# Development Instructions

`php artisan serve`
`npm run watch`
