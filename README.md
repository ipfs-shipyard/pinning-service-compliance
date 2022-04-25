# pinning-service-compliance

> The compliance test suite for [IPFS Pinning Service API Spec](https://ipfs.github.io/pinning-services-api-spec/)

## Getting started

### Run the compliance checker against a service:

```bash
npx -p @ipfs-shipyard/pinning-service-compliance -- pinning-service-compliance -s <pinning_service_endpoint> <auth_token>
```

## Development

### Run the script

```bash
npm install
npm run build

node dist/src/index.js -s $API_ENDPOINT $ACCESS_TOKEN
 # or
node dist/src/index.js -s $API_ENDPOINT1 $ACCESS_TOKEN1 -s $API_ENDPOINT2 $ACCESS_TOKEN2
```

## FAQ

### What is a Compliance Check?
A compliance check consists of:

1. An API call
2. A Payload
3. An expected response
4. A summary

### How to avoid typing secrets by  hand?

To avoid setting secrets by hand:

```bash
cp .env-copy .env
```
Then replace all variables with the appropriate endpoints and tokens
