# Pinning Service Compliance

## What is Pinning Service Compliance?

It’s a test suite to help our pinning service providers, and ipfs implementers who use those providers, see which services are correctly implementing the pinning services spec. Our primary goal is to ensure that all of the pinning service providers are consistent, so that implementers can depend on the functionality they expect.

The Pinning Service Compliance project originated from https://github.com/ipfs/pinning-services-api-spec/issues/64, so you can read more details and discussion there.

## Latest static reports

* [Estuary](./api.estuary.tech.md)
* [Pinata](./api.pinata.cloud.md)
* [web3.storage](./api.web3.storage.md)
* [nft.storage](./nft.storage.md)

## Run the compliance checker against a different service

```bash
npx -p @ipfs-shipyard/pinning-service-compliance -- pinning-service-compliance -s <pinning_service_endpoint> <auth_token>
```
