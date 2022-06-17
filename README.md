# pinning-service-compliance

> The compliance test suite for [IPFS Pinning Service API Spec](https://ipfs.github.io/pinning-services-api-spec/)

## Getting started

### Run the compliance checker against a service:

***Disclaimer***: It is recommended to use an `auth_token` separate from your production/live services. You should ideally use an `auth_token`/account that is specifically for running compliance checks. The compliance checks will do their best not to corrupt any existing pins you have, but consistent tests without consistent data is challenging.

```bash
npx @ipfs-shipyard/pinning-service-compliance -s <pinning_service_endpoint> <auth_token>
```

## Development

### Run the script

```bash
npm ci
npm run build

npm start -- -s $API_ENDPOINT $ACCESS_TOKEN
 # or multiple endpoints
npm start -- -s $API_ENDPOINT1 $ACCESS_TOKEN1 -s $API_ENDPOINT2 $ACCESS_TOKEN2
```

### Debugging

To debug problems, you should use the `-d` flag, and the `dev-start` script:

```bash
npm run dev-start -- -s $API_ENDPOINT $ACCESS_TOKEN
```

## FAQ

### What is a Compliance Check?
A compliance check consists of:

1. An API call
2. A Payload
3. An expected response
4. A summary

### How to avoid typing secrets by hand?

To avoid setting secrets by hand:

```bash
cp .env-copy .env
```
Then replace all variables with the appropriate endpoints and tokens
