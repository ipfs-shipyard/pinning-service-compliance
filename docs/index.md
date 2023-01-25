<script src="./telemetry.js"></script>

# Pinning Service Compliance Reports

## Latest reports

Periodically tested:

* [Crust](./pin.crustcode.com.md)
* [Estuary](./api.estuary.tech.md)
* [Filebase](./api.filebase.io.md)
* [Pinata](./api.pinata.cloud.md)
* [web3.storage](./api.web3.storage.md)
* [nft.storage](./nft.storage.md)

Want to add your service to the list? [Open an issue](https://github.com/ipfs-shipyard/pinning-service-compliance/issues/new).


## About

### What is Pinning Service Compliance?

It’s a test suite to help our pinning service providers, and IPFS implementers who use those providers, see which services are correctly implementing the [IPFS Pinning Service API Spec](https://ipfs.github.io/pinning-services-api-spec/).  Our primary goal is to ensure that all of the pinning service providers are consistent, and users can depend on the functionality they expect.

The Pinning Service Compliance project originated from [pinning-services-api-spec/issues/64](https://github.com/ipfs/pinning-services-api-spec/issues/64).

### How to run the compliance checker against my own pinning service?

***Disclaimer***: It is recommended to use an `auth_token` separate from your production/live services. The compliance checks will do their best not to corrupt any existing pins you have, but consistent tests without consistent data is challenging.

[pinning-service-compliance](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-compliance) package is available on NPM:

```bash
npx @ipfs-shipyard/pinning-service-compliance -s <pinning_service_endpoint> <auth_token>
```

### Bugs? Suggestions?

Sources and issues: [ipfs-shipyard/pinning-service-compliance](https://github.com/ipfs-shipyard/pinning-service-compliance)
