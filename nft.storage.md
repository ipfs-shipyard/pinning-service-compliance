
# https://nft.storage/api compliance:

Execution Date: 2022-06-21T20:22:46.173Z

Revision: [5704ec6](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/5704ec6)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (2/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64'](#pins-post-of-cid-bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='bd0b9ea2-584c-4470-8637-d5b3e3c2b14f'](#can-create-a-pin-with-namebd0b9ea2-584c-4470-8637-d5b3e3c2b14f----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Response code is 401 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Response object doesn't match expected schema:

* "reason" is required

* "code" is not allowed

* "message" is not allowed

* "ok" is not allowed

  
### Details

#### Request
```
GET https://nft.storage/api/pins
```
##### Headers
```json
{}
```
##### Body
```json

```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74480f0b5c47-IAD",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "ok": false,
  "error": {
    "code": "EXPECTED_BEARER_STRING",
    "message": "API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`."
  }
}
```

##### Body (as JSON)
```json
{
  "ok": false,
  "error": {
    "code": "EXPECTED_BEARER_STRING",
    "message": "API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`."
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Request with invalid token - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Response code is 401 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Response object doesn't match expected schema:

* "reason" is required

* "code" is not allowed

* "message" is not allowed

* "ok" is not allowed

  
### Details

#### Request
```
GET https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef744e3f915a8d-IAD",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "ok": false,
  "error": {
    "code": "ERROR_MALFORMED_TOKEN",
    "message": "API Key is malformed or failed to parse."
  }
}
```

##### Body (as JSON)
```json
{
  "ok": false,
  "error": {
    "code": "ERROR_MALFORMED_TOKEN",
    "message": "API Key is malformed or failed to parse."
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

  
### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74547c215a04-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:07 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
  "status": "queued",
  "created": "2022-06-21T20:22:07.064+00:00",
  "pin": {
    "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
  "status": "queued",
  "created": "2022-06-21T20:22:07.064+00:00",
  "pin": {
    "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
  "status": "queued",
  "created": "2022-06-21T20:22:07.064Z",
  "pin": {
    "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64"
  },
  "delegates": []
}
```
## The newly created pin can be immediately deleted - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreihfyph4vwsfressrawgddx6qkg2tyigc774562oubtb7jyuy6xiva
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74640fdd5cd6-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can create and then delete a new pin - ❌ FAILED

### Expectations (3/4 successful)

  🟢 Result is not null (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreihfyph4vwsfressrawgddx6qkg2tyigc774562oubtb7jyuy6xiva"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef745b197f580c-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreihfyph4vwsfressrawgddx6qkg2tyigc774562oubtb7jyuy6xiva",
  "status": "queued",
  "created": "2022-06-21T20:22:08.428+00:00",
  "pin": {
    "cid": "bafkreihfyph4vwsfressrawgddx6qkg2tyigc774562oubtb7jyuy6xiva",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreihfyph4vwsfressrawgddx6qkg2tyigc774562oubtb7jyuy6xiva",
  "status": "queued",
  "created": "2022-06-21T20:22:08.428+00:00",
  "pin": {
    "cid": "bafkreihfyph4vwsfressrawgddx6qkg2tyigc774562oubtb7jyuy6xiva",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreihfyph4vwsfressrawgddx6qkg2tyigc774562oubtb7jyuy6xiva",
  "status": "queued",
  "created": "2022-06-21T20:22:08.428Z",
  "pin": {
    "cid": "bafkreihfyph4vwsfressrawgddx6qkg2tyigc774562oubtb7jyuy6xiva"
  },
  "delegates": []
}
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74669a8c81af-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "queued",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "queued",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "queued",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "queued",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "queued",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "queued",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "queued",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "queued",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "queued",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "queued",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 6,
  "results": {}
}
```
## Get original pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
GET https://nft.storage/api/pins/bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
404 Not Found
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef7488b8255a04-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "NOT_FOUND",
    "details": "pin not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "NOT_FOUND",
    "details": "pin not found"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Get new pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request
```
GET https://nft.storage/api/pins/bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef748f0b4f825c-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
  "status": "queued",
  "created": "2022-06-21T20:22:14.451+00:00",
  "pin": {
    "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
  "status": "queued",
  "created": "2022-06-21T20:22:14.451+00:00",
  "pin": {
    "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
  "status": "queued",
  "created": "2022-06-21T20:22:14.451Z",
  "pin": {
    "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e"
  },
  "delegates": []
}
```
## Pin's with requestid 'bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4' can have cid 'bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4' replaced with 'bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
POST https://nft.storage/api/pins/bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef747bdc215a8d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
  "status": "queued",
  "created": "2022-06-21T20:22:14.451+00:00",
  "pin": {
    "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
  "status": "queued",
  "created": "2022-06-21T20:22:14.451+00:00",
  "pin": {
    "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
  "status": "queued",
  "created": "2022-06-21T20:22:14.451Z",
  "pin": {
    "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e"
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4) (success)

  🟢 Response is ok (success)

  🟢 Replaced pin has the new & expected CID (success)

  🟢 Replaced pin has a different requestid (success)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef7470db207fdc-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4",
  "status": "queued",
  "created": "2022-06-21T20:22:11.928+00:00",
  "pin": {
    "cid": "bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4",
  "status": "queued",
  "created": "2022-06-21T20:22:11.928+00:00",
  "pin": {
    "cid": "bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4",
  "status": "queued",
  "created": "2022-06-21T20:22:11.928Z",
  "pin": {
    "cid": "bafkreifu32462ykrd2utze4wfs3zuiacbzkf2jpblgeo2mig5veccr2zs4"
  },
  "delegates": []
}
```
## Can retrieve pin with name 'bd0b9ea2-584c-4470-8637-d5b3e3c2b14f' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=bd0b9ea2-584c-4470-8637-d5b3e3c2b14f&match=exact
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef749d4dee5c17-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Can retrieve pin with name 'BD0B9EA2-584C-4470-8637-D5B3E3C2B14F' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=BD0B9EA2-584C-4470-8637-D5B3E3C2B14F&match=iexact
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74a468b85c41-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Can retrieve pin with name '584c-4470-8637-d5b' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=584c-4470-8637-d5b&match=partial
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74adbdaa5a8d-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Can retrieve pin with name '584C-4470-8637-D5B' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=584C-4470-8637-D5B&match=ipartial
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74b27b2d5a04-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:22 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Can create a pin with name='bd0b9ea2-584c-4470-8637-d5b3e3c2b14f' - ❌ FAILED

### Expectations (11/19 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m","name":"bd0b9ea2-584c-4470-8637-d5b3e3c2b14f"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74958dc38012-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
  "status": "queued",
  "created": "2022-06-21T20:22:17.52+00:00",
  "pin": {
    "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
    "meta": null,
    "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
  "status": "queued",
  "created": "2022-06-21T20:22:17.52+00:00",
  "pin": {
    "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
    "meta": null,
    "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
  "status": "queued",
  "created": "2022-06-21T20:22:17.520Z",
  "pin": {
    "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
    "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74bfdb025770-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
  "status": "queued",
  "created": "2022-06-21T20:22:24.301+00:00",
  "pin": {
    "cid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
  "status": "queued",
  "created": "2022-06-21T20:22:24.301+00:00",
  "pin": {
    "cid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
  "status": "queued",
  "created": "2022-06-21T20:22:24.301Z",
  "pin": {
    "cid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74c71e6b5dce-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
  "status": "queued",
  "created": "2022-06-21T20:22:25.813+00:00",
  "pin": {
    "cid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
  "status": "queued",
  "created": "2022-06-21T20:22:25.813+00:00",
  "pin": {
    "cid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
  "status": "queued",
  "created": "2022-06-21T20:22:25.813Z",
  "pin": {
    "cid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74d0ae9b5c5e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
  "status": "queued",
  "created": "2022-06-21T20:22:26.943+00:00",
  "pin": {
    "cid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
  "status": "queued",
  "created": "2022-06-21T20:22:26.943+00:00",
  "pin": {
    "cid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
  "status": "queued",
  "created": "2022-06-21T20:22:26.943Z",
  "pin": {
    "cid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74d80bd55a8d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
  "status": "queued",
  "created": "2022-06-21T20:22:28.007+00:00",
  "pin": {
    "cid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
  "status": "queued",
  "created": "2022-06-21T20:22:28.007+00:00",
  "pin": {
    "cid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
  "status": "queued",
  "created": "2022-06-21T20:22:28.007Z",
  "pin": {
    "cid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74ddc9178192-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
  "status": "queued",
  "created": "2022-06-21T20:22:29.095+00:00",
  "pin": {
    "cid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
  "status": "queued",
  "created": "2022-06-21T20:22:29.095+00:00",
  "pin": {
    "cid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
  "status": "queued",
  "created": "2022-06-21T20:22:29.095Z",
  "pin": {
    "cid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74e66e605ae0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
  "status": "queued",
  "created": "2022-06-21T20:22:30.366+00:00",
  "pin": {
    "cid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
  "status": "queued",
  "created": "2022-06-21T20:22:30.366+00:00",
  "pin": {
    "cid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
  "status": "queued",
  "created": "2022-06-21T20:22:30.366Z",
  "pin": {
    "cid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74ecff757fff-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
  "status": "queued",
  "created": "2022-06-21T20:22:31.505+00:00",
  "pin": {
    "cid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
  "status": "queued",
  "created": "2022-06-21T20:22:31.505+00:00",
  "pin": {
    "cid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
  "status": "queued",
  "created": "2022-06-21T20:22:31.505Z",
  "pin": {
    "cid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye"
  },
  "delegates": []
}
```
## Pagination: First page of pins - ❌ FAILED

### Expectations (3/5 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is greater than or equal to 15 (failure)

  ❌ Count is greater than the number of pins returned (failure)

  🟢 Number of pins returned defaults to 10 (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74f3ca9f597f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:33 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
      "status": "queued",
      "created": "2022-06-21T20:22:31.505+00:00",
      "pin": {
        "cid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
      "status": "queued",
      "created": "2022-06-21T20:22:30.366+00:00",
      "pin": {
        "cid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
      "status": "queued",
      "created": "2022-06-21T20:22:29.095+00:00",
      "pin": {
        "cid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
      "status": "queued",
      "created": "2022-06-21T20:22:28.007+00:00",
      "pin": {
        "cid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
      "status": "queued",
      "created": "2022-06-21T20:22:26.943+00:00",
      "pin": {
        "cid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
      "status": "queued",
      "created": "2022-06-21T20:22:25.813+00:00",
      "pin": {
        "cid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
      "status": "queued",
      "created": "2022-06-21T20:22:24.301+00:00",
      "pin": {
        "cid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
      "status": "queued",
      "created": "2022-06-21T20:22:17.52+00:00",
      "pin": {
        "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
        "meta": null,
        "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
      "status": "queued",
      "created": "2022-06-21T20:22:14.451+00:00",
      "pin": {
        "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
      "status": "queued",
      "created": "2022-06-21T20:22:31.505+00:00",
      "pin": {
        "cid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
      "status": "queued",
      "created": "2022-06-21T20:22:30.366+00:00",
      "pin": {
        "cid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
      "status": "queued",
      "created": "2022-06-21T20:22:29.095+00:00",
      "pin": {
        "cid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
      "status": "queued",
      "created": "2022-06-21T20:22:28.007+00:00",
      "pin": {
        "cid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
      "status": "queued",
      "created": "2022-06-21T20:22:26.943+00:00",
      "pin": {
        "cid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
      "status": "queued",
      "created": "2022-06-21T20:22:25.813+00:00",
      "pin": {
        "cid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
      "status": "queued",
      "created": "2022-06-21T20:22:24.301+00:00",
      "pin": {
        "cid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
      "status": "queued",
      "created": "2022-06-21T20:22:17.52+00:00",
      "pin": {
        "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
        "meta": null,
        "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
      "status": "queued",
      "created": "2022-06-21T20:22:14.451+00:00",
      "pin": {
        "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
  "results": {}
}
```
## Pagination: Retrieve the next page of pins - ❌ FAILED

### Expectations (2/3 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-21T20%3A22%3A07.064Z
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74f9f938597f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "queued",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "queued",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "queued",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "queued",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "queued",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "queued",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "queued",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "queued",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "queued",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "queued",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 6,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (21/24 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is greater than or equal to 15 (failure)

  ❌ Count is greater than the number of pins returned (failure)

  🟢 Number of pins returned defaults to 10 (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef74b70a195c2e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 8,
  "results": [
    {
      "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
      "status": "queued",
      "created": "2022-06-21T20:22:17.52+00:00",
      "pin": {
        "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
        "meta": null,
        "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
      "status": "queued",
      "created": "2022-06-21T20:22:14.451+00:00",
      "pin": {
        "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "queued",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "queued",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "queued",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "queued",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "queued",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 8,
  "results": [
    {
      "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
      "status": "queued",
      "created": "2022-06-21T20:22:17.52+00:00",
      "pin": {
        "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
        "meta": null,
        "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
      "status": "queued",
      "created": "2022-06-21T20:22:14.451+00:00",
      "pin": {
        "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "queued",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "queued",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "queued",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "queued",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "queued",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 8,
  "results": {}
}
```
## Can delete pin with requestid 'bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef7506b8b46fef-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef750cff0b6fb6-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef751338b27004-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef75197bde5c22-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef751fbd6c597f-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef75260d41597f-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef752c39e35a8d-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef75327f4b6fef-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef7538c9dd6fb6-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef753efad4822c-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns a count of zero (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef7545581b597f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "queued",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "queued",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "queued",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "queued",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "queued",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "queued",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "queued",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "queued",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "queued",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "queued",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 5,
  "results": {}
}
```
## Can delete all pins - ❌ FAILED

### Expectations (20/21 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  ❌ Final pinsGet call returns a count of zero (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71ef75008ec45a8d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 20:22:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
      "status": "queued",
      "created": "2022-06-21T20:22:31.505+00:00",
      "pin": {
        "cid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
      "status": "queued",
      "created": "2022-06-21T20:22:30.366+00:00",
      "pin": {
        "cid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
      "status": "queued",
      "created": "2022-06-21T20:22:29.095+00:00",
      "pin": {
        "cid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
      "status": "queued",
      "created": "2022-06-21T20:22:28.007+00:00",
      "pin": {
        "cid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
      "status": "queued",
      "created": "2022-06-21T20:22:26.943+00:00",
      "pin": {
        "cid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
      "status": "queued",
      "created": "2022-06-21T20:22:25.813+00:00",
      "pin": {
        "cid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
      "status": "queued",
      "created": "2022-06-21T20:22:24.301+00:00",
      "pin": {
        "cid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
      "status": "queued",
      "created": "2022-06-21T20:22:17.52+00:00",
      "pin": {
        "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
        "meta": null,
        "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
      "status": "queued",
      "created": "2022-06-21T20:22:14.451+00:00",
      "pin": {
        "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
      "status": "queued",
      "created": "2022-06-21T20:22:31.505+00:00",
      "pin": {
        "cid": "bafkreif3mbh75b5uof7np7bs2grkex4luwwc3gay73ombi22ye7uqo22ye",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
      "status": "queued",
      "created": "2022-06-21T20:22:30.366+00:00",
      "pin": {
        "cid": "bafkreiegdc35rcy6utt3w33tvlni5sub7ubpcwn6xbypfkarws56hawqh4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
      "status": "queued",
      "created": "2022-06-21T20:22:29.095+00:00",
      "pin": {
        "cid": "bafkreiab5m6fz5tzgcfsicuj6gygvavvo4b3h4ft6bherqner5cjm5srvi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
      "status": "queued",
      "created": "2022-06-21T20:22:28.007+00:00",
      "pin": {
        "cid": "bafkreiflkc6moqdvgne5ywgt6ki2chzoelbp3vl6vdjtns335ttsjgfuim",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
      "status": "queued",
      "created": "2022-06-21T20:22:26.943+00:00",
      "pin": {
        "cid": "bafkreic2mcbnbcs7luboql7b7ia34y2mlkgf4gg7xfr4rnfxkn4axph23u",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
      "status": "queued",
      "created": "2022-06-21T20:22:25.813+00:00",
      "pin": {
        "cid": "bafkreigfqdlxjjowngowjw5koi3sunn5fpey4w2w6qaa5tgkcvrb2xwbx4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
      "status": "queued",
      "created": "2022-06-21T20:22:24.301+00:00",
      "pin": {
        "cid": "bafkreidzhda373prvd5xcikyqyueqx6moadt5xfg5m6uelzajjmforvt24",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
      "status": "queued",
      "created": "2022-06-21T20:22:17.52+00:00",
      "pin": {
        "cid": "bafkreidwuvllrn3n475laos6xtfjtusemkvswdoi6e65ahgtnlnxhrtj6m",
        "meta": null,
        "name": "bd0b9ea2-584c-4470-8637-d5b3e3c2b14f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
      "status": "queued",
      "created": "2022-06-21T20:22:14.451+00:00",
      "pin": {
        "cid": "bafkreigr6fqk5r4cwf7nqf25nc7e7xelo4yhltfcdlteo6vm7bmngxds7e",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
      "status": "queued",
      "created": "2022-06-21T20:22:07.064+00:00",
      "pin": {
        "cid": "bafkreie227cryya2d457udiefg4eey5tls5a2ishjns4ygqpf4gzfjat64",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
  "results": {}
}
```
