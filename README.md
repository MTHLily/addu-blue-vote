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
    ```
4. Install the frontend packages
    ```
    npm install
    npm run dev
    ```

# Development Instructions

`php artisan serve`
`npm run watch`
