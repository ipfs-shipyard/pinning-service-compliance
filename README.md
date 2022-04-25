# pinning-service-compliance

> The compliance test suite for [IPFS Pinning Service API Spec](https://ipfs.github.io/pinning-services-api-spec/)

## Getting started

### Run the compliance checker against a service:

```bash
npx -p @ipfs-shipyard/pinning-service-compliance -- pinning-service-compliance -s <pinning_service_endpoint> <auth_token>

```

## Development

### Set up your environment variables
```bash
cp .env-copy .env
```
Then replace all variables with the appropriate endpoints and tokens

### Run the script

```bash
npm install
npm run build

node dist/src/index.js -s $API_ENDPOINT $ACCESS_TOKEN
 # or
node dist/src/index.js -s $API_ENDPOINT1 $ACCESS_TOKEN1 -s $API_ENDPOINT2 $ACCESS_TOKEN2
```

## General architecture of the compliance checker

### What is a Compliance Check?
A compliance check consists of:

1. An API call
2. A Payload
3. An expected response
4. A summary

### Testing a github action

Use https://github.com/nektos/act like so:

```bash
act --container-architecture linux/amd64 -W .github/workflows/build-and-publish-reports.yml -v -s PINATA_API_ENDPOINT -s PINATA_API_TOKEN -s WEB3_API_ENDPOINT -s WEB3_API_TOKEN -s ESTUARY_API_ENDPOINT -s ESTUARY_API_TOKEN -s NFT_API_ENDPOINT -s NFT_API_TOKEN -r
```
