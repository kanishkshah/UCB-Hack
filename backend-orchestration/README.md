## Setting environment variables

Copy .env.template to a new file called .env

Update `.env` with the settings specific to your server.

The server specified in `.env` must be the same as the server specified in your front-end app.

## Generating a Self-Signed SSL Key and Cert

You can use the script below (for linux/mac) users:
- `mkdir certs`
- `cd certs`
- `../scripts/generate-ssh.sh server`

Or manually create your key and cert in `./certs` with `openssl`:
- `mkdir certs`
- `cd certs`
- `openssl req -nodes -new -x509 -keyout server.key -out server.csr`
- `Country Name (2 letter code) []:NZ`
- _Press enter to skip other cert questions_
- `openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt`

Instructions here: https://devcenter.heroku.com/articles/ssl-certificate-self

## Running the server

To run the dev server use the command `npm run dev`

## Bypass Chrome Security

To connect to your server from your frontend app, you will need to allow your self-signed cert to be used in Chrome.

Navigate to your orchestration server in your browser `https://localhost:5000` and choose to "proceed to unsafe site".

This will add your self-signed cert to Chrome's trusted certs for a limited time (a few weeks).

When the override expires your UI will no longer be able to connect. At that time the above process can be repeated to renew the override.