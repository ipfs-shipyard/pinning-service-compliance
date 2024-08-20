# @ipfs-shipyard/pinning-service-compliance

[![codecov](https://img.shields.io/codecov/c/github/ipfs-shipyard/pinning-service-compliance.svg?style=flat-square)](https://codecov.io/gh/ipfs-shipyard/pinning-service-compliance)
[![CI](https://img.shields.io/github/actions/workflow/status/ipfs-shipyard/pinning-service-compliance/js-test-and-release.yml?branch=main\&style=flat-square)](https://github.com/ipfs-shipyard/pinning-service-compliance/actions/workflows/js-test-and-release.yml?query=branch%3Amain)

> The compliance test suite for [IPFS Pinning Service API Spec](https://ipfs.github.io/pinning-services-api-spec/)

## Getting started

### Run the compliance checker against a service:

***Disclaimer***: It is recommended to use an `auth_token` separate from your production/live services. The compliance checks will do their best not to corrupt any existing pins you have, but consistent tests without consistent data is challenging.

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

# License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](https://github.com/ipfs-shipyard/pinning-service-compliance/LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](https://github.com/ipfs-shipyard/pinning-service-compliance/LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

# Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
