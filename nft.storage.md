
# https://nft.storage/api compliance:

Execution Date: 2022-06-21T21:10:56.694Z

Revision: [0f359a9](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/0f359a9)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (2/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'baeaaaczvgiwdcnjsgmydqmjx'](#pins-post-of-cid-baeaaaczvgiwdcnjsgmydqmjx----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7'](#can-create-a-pin-with-name72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----failed)

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
  "cf-ray": "71efbaa80e9c9eb8-DFW",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:07 GMT",
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
  "cf-ray": "71efbaae49e99ef2-DFW",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:08 GMT",
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
## Pins post of CID 'baeaaaczvgiwdcnjsgmydqmjx' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "origins" must be an array

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
{"cid":"baeaaaczvgiwdcnjsgmydqmjx","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbab488049f28-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
  "status": "queued",
  "created": "2022-06-21T21:10:09.868+00:00",
  "pin": {
    "cid": "baeaaaczvgiwdcnjsgmydqmjx",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
  "status": "queued",
  "created": "2022-06-21T21:10:09.868+00:00",
  "pin": {
    "cid": "baeaaaczvgiwdcnjsgmydqmjx",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
  "status": "queued",
  "created": "2022-06-21T21:10:09.868Z",
  "pin": {
    "cid": "baeaaaczvgiwdcnjsgmydqmjx",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbvgqwdmmjvgyztsmjxgi
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
  "cf-ray": "71efbac9ee1228d1-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:13 GMT",
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
## Can create and then delete a new pin - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Result is not null (success)

  🟢 Response code is 200 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
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
{"cid":"baeaaadbvgqwdmmjvgyztsmjxgi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbac0996f6784-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbvgqwdmmjvgyztsmjxgi",
  "status": "queued",
  "created": "2022-06-21T21:10:11.86+00:00",
  "pin": {
    "cid": "baeaaadbvgqwdmmjvgyztsmjxgi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbvgqwdmmjvgyztsmjxgi",
  "status": "queued",
  "created": "2022-06-21T21:10:11.86+00:00",
  "pin": {
    "cid": "baeaaadbvgqwdmmjvgyztsmjxgi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbvgqwdmmjvgyztsmjxgi",
  "status": "queued",
  "created": "2022-06-21T21:10:11.860Z",
  "pin": {
    "cid": "baeaaadbvgqwdmmjvgyztsmjxgi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## List pin objects (GET /pins) in all states - ❌ FAILED

### Expectations (2/3 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)




#### Response object doesn't match expected schema:

* "name" must be a string

* "origins" must be an array

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

  
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
  "cf-ray": "71efbacd79a19ee6-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:16 GMT",
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
      "requestid": "baeaaaczxgiwdqmzqgeydkobq",
      "status": "queued",
      "created": "2022-06-21T21:10:11.01+00:00",
      "pin": {
        "cid": "baeaaaczxgiwdqmzqgeydkobq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdiobxheztmnjtga",
      "status": "queued",
      "created": "2022-06-21T21:10:02.458+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdiobxheztmnjtga",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
      "requestid": "baeaaaczxgiwdqmzqgeydkobq",
      "status": "queued",
      "created": "2022-06-21T21:10:11.01+00:00",
      "pin": {
        "cid": "baeaaaczxgiwdqmzqgeydkobq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdiobxheztmnjtga",
      "status": "queued",
      "created": "2022-06-21T21:10:02.458+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdiobxheztmnjtga",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
GET https://nft.storage/api/pins/baeaaadbvhewdinjrhe2tinrzha
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
  "cf-ray": "71efbaff0f9b8185-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:21 GMT",
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
GET https://nft.storage/api/pins/baeaaadbwgewdmmzygy4tanjxgm
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
  "cf-ray": "71efbb05499e9ee6-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
  "status": "queued",
  "created": "2022-06-21T21:10:19.607+00:00",
  "pin": {
    "cid": "baeaaadbwgewdmmzygy4tanjxgm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
  "status": "queued",
  "created": "2022-06-21T21:10:19.607+00:00",
  "pin": {
    "cid": "baeaaadbwgewdmmzygy4tanjxgm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
  "status": "queued",
  "created": "2022-06-21T21:10:19.607Z",
  "pin": {
    "cid": "baeaaadbwgewdmmzygy4tanjxgm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadbvhewdinjrhe2tinrzha' can have cid 'baeaaadbvhewdinjrhe2tinrzha' replaced with 'baeaaadbwgewdmmzygy4tanjxgm' - 🟢 SUCCESS

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
POST https://nft.storage/api/pins/baeaaadbvhewdinjrhe2tinrzha
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
{"cid":"baeaaadbwgewdmmzygy4tanjxgm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbaec791daa52-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
  "status": "queued",
  "created": "2022-06-21T21:10:19.607+00:00",
  "pin": {
    "cid": "baeaaadbwgewdmmzygy4tanjxgm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
  "status": "queued",
  "created": "2022-06-21T21:10:19.607+00:00",
  "pin": {
    "cid": "baeaaadbwgewdmmzygy4tanjxgm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
  "status": "queued",
  "created": "2022-06-21T21:10:19.607Z",
  "pin": {
    "cid": "baeaaadbwgewdmmzygy4tanjxgm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (baeaaadbvhewdinjrhe2tinrzha) (success)

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
{"cid":"baeaaadbvhewdinjrhe2tinrzha","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbadeda960bac-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbvhewdinjrhe2tinrzha",
  "status": "queued",
  "created": "2022-06-21T21:10:17.04+00:00",
  "pin": {
    "cid": "baeaaadbvhewdinjrhe2tinrzha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbvhewdinjrhe2tinrzha",
  "status": "queued",
  "created": "2022-06-21T21:10:17.04+00:00",
  "pin": {
    "cid": "baeaaadbvhewdinjrhe2tinrzha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbvhewdinjrhe2tinrzha",
  "status": "queued",
  "created": "2022-06-21T21:10:17.040Z",
  "pin": {
    "cid": "baeaaadbvhewdinjrhe2tinrzha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can retrieve pin with name '72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7&match=exact
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
  "cf-ray": "71efbb17f8899ed1-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:26 GMT",
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
## Can retrieve pin with name '72B15D0E-2A3C-44EA-9484-3BAA9DDBF3A7' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=72B15D0E-2A3C-44EA-9484-3BAA9DDBF3A7&match=iexact
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
  "cf-ray": "71efbb22a99a8173-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:28 GMT",
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
## Can retrieve pin with name '2a3c-44ea-9484-3ba' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=2a3c-44ea-9484-3ba&match=partial
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
  "cf-ray": "71efbb2a8ca50f32-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:29 GMT",
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
## Can retrieve pin with name '2A3C-44EA-9484-3BA' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=2A3C-44EA-9484-3BA&match=ipartial
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
  "cf-ray": "71efbb327ca6aaa3-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:32 GMT",
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
## Can create a pin with name='72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7' - ❌ FAILED

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
{"cid":"baeaaadbwgywdmmzygy2dcojqhe","name":"72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbb0bc8000b71-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
  "status": "queued",
  "created": "2022-06-21T21:10:23.894+00:00",
  "pin": {
    "cid": "baeaaadbwgywdmmzygy2dcojqhe",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
  "status": "queued",
  "created": "2022-06-21T21:10:23.894+00:00",
  "pin": {
    "cid": "baeaaadbwgywdmmzygy2dcojqhe",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
  "status": "queued",
  "created": "2022-06-21T21:10:23.894Z",
  "pin": {
    "cid": "baeaaadbwgywdmmzygy2dcojqhe",
    "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgywdoojvgi4dimbsge' - 🟢 SUCCESS

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
{"cid":"baeaaadbxgywdoojvgi4dimbsge","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbb4b3ae393dd-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgywdoojvgi4dimbsge",
  "status": "queued",
  "created": "2022-06-21T21:10:33.944+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojvgi4dimbsge",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbxgywdoojvgi4dimbsge",
  "status": "queued",
  "created": "2022-06-21T21:10:33.944+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojvgi4dimbsge",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbxgywdoojvgi4dimbsge",
  "status": "queued",
  "created": "2022-06-21T21:10:33.944Z",
  "pin": {
    "cid": "baeaaadbxgywdoojvgi4dimbsge",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgywdoojwgezdqnbtha' - 🟢 SUCCESS

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
{"cid":"baeaaadbxgywdoojwgezdqnbtha","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbb570e999f12-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgywdoojwgezdqnbtha",
  "status": "queued",
  "created": "2022-06-21T21:10:35.89+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojwgezdqnbtha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbxgywdoojwgezdqnbtha",
  "status": "queued",
  "created": "2022-06-21T21:10:35.89+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojwgezdqnbtha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbxgywdoojwgezdqnbtha",
  "status": "queued",
  "created": "2022-06-21T21:10:35.890Z",
  "pin": {
    "cid": "baeaaadbxgywdoojwgezdqnbtha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgywdoojwhezdemjvgq' - 🟢 SUCCESS

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
{"cid":"baeaaadbxgywdoojwhezdemjvgq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbb63c8aa282e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgywdoojwhezdemjvgq",
  "status": "queued",
  "created": "2022-06-21T21:10:37.836+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojwhezdemjvgq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbxgywdoojwhezdemjvgq",
  "status": "queued",
  "created": "2022-06-21T21:10:37.836+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojwhezdemjvgq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbxgywdoojwhezdemjvgq",
  "status": "queued",
  "created": "2022-06-21T21:10:37.836Z",
  "pin": {
    "cid": "baeaaadbxgywdoojwhezdemjvgq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgywdoojxguzdcnzwgy' - 🟢 SUCCESS

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
{"cid":"baeaaadbxgywdoojxguzdcnzwgy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbb6d9d06aa6d-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgywdoojxguzdcnzwgy",
  "status": "queued",
  "created": "2022-06-21T21:10:39.731+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojxguzdcnzwgy",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbxgywdoojxguzdcnzwgy",
  "status": "queued",
  "created": "2022-06-21T21:10:39.731+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojxguzdcnzwgy",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbxgywdoojxguzdcnzwgy",
  "status": "queued",
  "created": "2022-06-21T21:10:39.731Z",
  "pin": {
    "cid": "baeaaadbxgywdoojxguzdcnzwgy",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgywdoojzguztknzqha' - 🟢 SUCCESS

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
{"cid":"baeaaadbxgywdoojzguztknzqha","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71efbb781e82a9f1-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgywdoojzguztknzqha",
  "status": "queued",
  "created": "2022-06-21T21:10:41.241+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojzguztknzqha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadbxgywdoojzguztknzqha",
  "status": "queued",
  "created": "2022-06-21T21:10:41.241+00:00",
  "pin": {
    "cid": "baeaaadbxgywdoojzguztknzqha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadbxgywdoojzguztknzqha",
  "status": "queued",
  "created": "2022-06-21T21:10:41.241Z",
  "pin": {
    "cid": "baeaaadbxgywdoojzguztknzqha",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "cf-ray": "71efbb818db70bc7-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:43 GMT",
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
      "requestid": "baeaaadbxgywdoojzguztknzqha",
      "status": "queued",
      "created": "2022-06-21T21:10:41.241+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojzguztknzqha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojxguzdcnzwgy",
      "status": "queued",
      "created": "2022-06-21T21:10:39.731+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojxguzdcnzwgy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojwhezdemjvgq",
      "status": "queued",
      "created": "2022-06-21T21:10:37.836+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojwhezdemjvgq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojwgezdqnbtha",
      "status": "queued",
      "created": "2022-06-21T21:10:35.89+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojwgezdqnbtha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojvgi4dimbsge",
      "status": "queued",
      "created": "2022-06-21T21:10:33.944+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojvgi4dimbsge",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
      "status": "queued",
      "created": "2022-06-21T21:10:23.894+00:00",
      "pin": {
        "cid": "baeaaadbwgywdmmzygy2dcojqhe",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
      "status": "queued",
      "created": "2022-06-21T21:10:19.607+00:00",
      "pin": {
        "cid": "baeaaadbwgewdmmzygy4tanjxgm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxg4wdkmrzhe3dcmjtg4",
      "status": "queued",
      "created": "2022-06-21T21:10:15.414+00:00",
      "pin": {
        "cid": "baeaaadbxg4wdkmrzhe3dcmjtg4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72e512e3-fc2a-492d-ab3d-63b29951ea40",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczxgiwdqmzqgeydkobq",
      "status": "queued",
      "created": "2022-06-21T21:10:11.01+00:00",
      "pin": {
        "cid": "baeaaaczxgiwdqmzqgeydkobq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
      "requestid": "baeaaadbxgywdoojzguztknzqha",
      "status": "queued",
      "created": "2022-06-21T21:10:41.241+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojzguztknzqha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojxguzdcnzwgy",
      "status": "queued",
      "created": "2022-06-21T21:10:39.731+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojxguzdcnzwgy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojwhezdemjvgq",
      "status": "queued",
      "created": "2022-06-21T21:10:37.836+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojwhezdemjvgq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojwgezdqnbtha",
      "status": "queued",
      "created": "2022-06-21T21:10:35.89+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojwgezdqnbtha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojvgi4dimbsge",
      "status": "queued",
      "created": "2022-06-21T21:10:33.944+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojvgi4dimbsge",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
      "status": "queued",
      "created": "2022-06-21T21:10:23.894+00:00",
      "pin": {
        "cid": "baeaaadbwgywdmmzygy2dcojqhe",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
      "status": "queued",
      "created": "2022-06-21T21:10:19.607+00:00",
      "pin": {
        "cid": "baeaaadbwgewdmmzygy4tanjxgm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxg4wdkmrzhe3dcmjtg4",
      "status": "queued",
      "created": "2022-06-21T21:10:15.414+00:00",
      "pin": {
        "cid": "baeaaadbxg4wdkmrzhe3dcmjtg4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72e512e3-fc2a-492d-ab3d-63b29951ea40",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczxgiwdqmzqgeydkobq",
      "status": "queued",
      "created": "2022-06-21T21:10:11.01+00:00",
      "pin": {
        "cid": "baeaaaczxgiwdqmzqgeydkobq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-21T21%3A10%3A09.868Z
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
  "cf-ray": "71efbb89fd49aa58-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 7,
  "results": [
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdiobxheztmnjtga",
      "status": "queued",
      "created": "2022-06-21T21:10:02.458+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdiobxheztmnjtga",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
  "count": 7,
  "results": [
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdiobxheztmnjtga",
      "status": "queued",
      "created": "2022-06-21T21:10:02.458+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdiobxheztmnjtga",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
  "count": 7,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (17/20 successful)

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
  "cf-ray": "71efbb42ab10aa5e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:33 GMT",
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
      "requestid": "baeaaadbygywdcmzrgeztonjzge",
      "status": "queued",
      "created": "2022-06-21T21:10:30.974+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmzrgeztonjzge",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygywdcmrzgm4dgmrzgy",
      "status": "queued",
      "created": "2022-06-21T21:10:29.223+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmrzgm4dgmrzgy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygywdcmryheytkobzha",
      "status": "queued",
      "created": "2022-06-21T21:10:27.805+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmryheytkobzha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygywdcmrygi2dmmrqga",
      "status": "queued",
      "created": "2022-06-21T21:10:26.508+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmrygi2dmmrqga",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygywdcmrxgm3danbqgm",
      "status": "queued",
      "created": "2022-06-21T21:10:24.454+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmrxgm3danbqgm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
      "status": "queued",
      "created": "2022-06-21T21:10:23.894+00:00",
      "pin": {
        "cid": "baeaaadbwgywdmmzygy2dcojqhe",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
      "status": "queued",
      "created": "2022-06-21T21:10:19.607+00:00",
      "pin": {
        "cid": "baeaaadbwgewdmmzygy4tanjxgm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxg4wdkmrzhe3dcmjtg4",
      "status": "queued",
      "created": "2022-06-21T21:10:15.414+00:00",
      "pin": {
        "cid": "baeaaadbxg4wdkmrzhe3dcmjtg4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72e512e3-fc2a-492d-ab3d-63b29951ea40",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczxgiwdqmzqgeydkobq",
      "status": "queued",
      "created": "2022-06-21T21:10:11.01+00:00",
      "pin": {
        "cid": "baeaaaczxgiwdqmzqgeydkobq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
      "requestid": "baeaaadbygywdcmzrgeztonjzge",
      "status": "queued",
      "created": "2022-06-21T21:10:30.974+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmzrgeztonjzge",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygywdcmrzgm4dgmrzgy",
      "status": "queued",
      "created": "2022-06-21T21:10:29.223+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmrzgm4dgmrzgy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygywdcmryheytkobzha",
      "status": "queued",
      "created": "2022-06-21T21:10:27.805+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmryheytkobzha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygywdcmrygi2dmmrqga",
      "status": "queued",
      "created": "2022-06-21T21:10:26.508+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmrygi2dmmrqga",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygywdcmrxgm3danbqgm",
      "status": "queued",
      "created": "2022-06-21T21:10:24.454+00:00",
      "pin": {
        "cid": "baeaaadbygywdcmrxgm3danbqgm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
      "status": "queued",
      "created": "2022-06-21T21:10:23.894+00:00",
      "pin": {
        "cid": "baeaaadbwgywdmmzygy2dcojqhe",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
      "status": "queued",
      "created": "2022-06-21T21:10:19.607+00:00",
      "pin": {
        "cid": "baeaaadbwgewdmmzygy4tanjxgm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxg4wdkmrzhe3dcmjtg4",
      "status": "queued",
      "created": "2022-06-21T21:10:15.414+00:00",
      "pin": {
        "cid": "baeaaadbxg4wdkmrzhe3dcmjtg4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72e512e3-fc2a-492d-ab3d-63b29951ea40",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczxgiwdqmzqgeydkobq",
      "status": "queued",
      "created": "2022-06-21T21:10:11.01+00:00",
      "pin": {
        "cid": "baeaaaczxgiwdqmzqgeydkobq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
## Can delete pin with requestid 'baeaaadbxgywdoojzguztknzqha' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbxgywdoojzguztknzqha
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
  "cf-ray": "71efbb994b999e9b-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:46 GMT",
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
## Can delete pin with requestid 'baeaaadbxgywdoojxguzdcnzwgy' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbxgywdoojxguzdcnzwgy
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
  "cf-ray": "71efbb9f8f8566f5-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:47 GMT",
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
## Can delete pin with requestid 'baeaaadbxgywdoojwhezdemjvgq' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbxgywdoojwhezdemjvgq
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
  "cf-ray": "71efbba5cfab66b9-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:48 GMT",
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
## Can delete pin with requestid 'baeaaadbxgywdoojwgezdqnbtha' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbxgywdoojwgezdqnbtha
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
  "cf-ray": "71efbbac0ca39ebc-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:49 GMT",
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
## Can delete pin with requestid 'baeaaadbxgywdoojvgi4dimbsge' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbxgywdoojvgi4dimbsge
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
  "cf-ray": "71efbbb24a240bef-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:50 GMT",
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
## Can delete pin with requestid 'baeaaadbwgywdmmzygy2dcojqhe' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbwgywdmmzygy2dcojqhe
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
  "cf-ray": "71efbbb88c18284b-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:51 GMT",
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
## Can delete pin with requestid 'baeaaadbwgewdmmzygy4tanjxgm' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbwgewdmmzygy4tanjxgm
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
  "cf-ray": "71efbbbeca9e93dd-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:52 GMT",
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
## Can delete pin with requestid 'baeaaaczvgiwdcnjsgmydqmjx' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaaczvgiwdcnjsgmydqmjx
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
  "cf-ray": "71efbbc50ec2aa39-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:53 GMT",
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
## Get all Pins created before 'Mon Jun 20 2022 17:45:24 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-20T17%3A45%3A24.975Z
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
  "cf-ray": "71efbbcb4a24ec9a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:55 GMT",
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
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '6' (failure)





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
  "cf-ray": "71efbbd53d1caa33-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:56 GMT",
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
## Can delete all pins created during compliance checks - ❌ FAILED

### Expectations (8/9 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '6' (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


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
  "cf-ray": "71efbb91ddea28d1-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 21 Jun 2022 21:10:45 GMT",
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
      "requestid": "baeaaadbxgywdoojzguztknzqha",
      "status": "queued",
      "created": "2022-06-21T21:10:41.241+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojzguztknzqha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojxguzdcnzwgy",
      "status": "queued",
      "created": "2022-06-21T21:10:39.731+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojxguzdcnzwgy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojwhezdemjvgq",
      "status": "queued",
      "created": "2022-06-21T21:10:37.836+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojwhezdemjvgq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojwgezdqnbtha",
      "status": "queued",
      "created": "2022-06-21T21:10:35.89+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojwgezdqnbtha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojvgi4dimbsge",
      "status": "queued",
      "created": "2022-06-21T21:10:33.944+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojvgi4dimbsge",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
      "status": "queued",
      "created": "2022-06-21T21:10:23.894+00:00",
      "pin": {
        "cid": "baeaaadbwgywdmmzygy2dcojqhe",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
      "status": "queued",
      "created": "2022-06-21T21:10:19.607+00:00",
      "pin": {
        "cid": "baeaaadbwgewdmmzygy4tanjxgm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdiobxheztmnjtga",
      "status": "queued",
      "created": "2022-06-21T21:10:02.458+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdiobxheztmnjtga",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
      "requestid": "baeaaadbxgywdoojzguztknzqha",
      "status": "queued",
      "created": "2022-06-21T21:10:41.241+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojzguztknzqha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojxguzdcnzwgy",
      "status": "queued",
      "created": "2022-06-21T21:10:39.731+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojxguzdcnzwgy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojwhezdemjvgq",
      "status": "queued",
      "created": "2022-06-21T21:10:37.836+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojwhezdemjvgq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojwgezdqnbtha",
      "status": "queued",
      "created": "2022-06-21T21:10:35.89+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojwgezdqnbtha",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgywdoojvgi4dimbsge",
      "status": "queued",
      "created": "2022-06-21T21:10:33.944+00:00",
      "pin": {
        "cid": "baeaaadbxgywdoojvgi4dimbsge",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgywdmmzygy2dcojqhe",
      "status": "queued",
      "created": "2022-06-21T21:10:23.894+00:00",
      "pin": {
        "cid": "baeaaadbwgywdmmzygy2dcojqhe",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "72b15d0e-2a3c-44ea-9484-3baa9ddbf3a7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgewdmmzygy4tanjxgm",
      "status": "queued",
      "created": "2022-06-21T21:10:19.607+00:00",
      "pin": {
        "cid": "baeaaadbwgewdmmzygy4tanjxgm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczvgiwdcnjsgmydqmjx",
      "status": "queued",
      "created": "2022-06-21T21:10:09.868+00:00",
      "pin": {
        "cid": "baeaaaczvgiwdcnjsgmydqmjx",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdiobxheztmnjtga",
      "status": "queued",
      "created": "2022-06-21T21:10:02.458+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdiobxheztmnjtga",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
