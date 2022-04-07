# pinning-service-compliance

## Getting started

### Set up your environment variables
```bash
cp .env-copy .env
```
Then replace all variables with the appropriate endpoints and tokens

### Run the script
```bash
npm install
npm run setup

ts-node src/cli/index.ts -s $PINATA_API_ENDPOINT $PINATA_API_TOKEN -s $ESTUARY_API_ENDPOINT $ESTUARY_API_TOKEN -s $NFT_API_ENDPOINT $NFT_API_TOKEN -s $WEB3_API_ENDPOINT $WEB3_API_TOKEN
```

## General architecture of the compliance checker

### What is a Compliance Check?
A compliance check consists of:

1. An API call
2. A Payload
3. An expected response
4. A summary

## Troubleshooting / Debugging
If you're using VScode, you can follow these steps:

```bash
cp .vscode/launch-copy.json .vscode/launch.json
```
Replace your endpoint and token, and then start the "Debug compliance checker" launch config.

## TODO:
### Eventually add Crustio
https://wiki.crust.network/docs/en/buildIPFSW3AuthPin
