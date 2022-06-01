
# https://nft.storage/api compliance:

## Summary (2/9 successful)

  ✘ Request with no authentication token

  ✘ Request with invalid token

  ✘ Pins post of CID 'baeaaadbzgawdimzqha2tgmbwha'

  ✓ Can create and then delete a new pin

  ✘ List pin objects (GET /pins) in all states

  ✓ Can create and replace a pin's CID

  ✘ Can create a pin with name='6df0b402-26d9-4616-88e6-9cdd6f92e70c'

  ✘ Pagination: Get all pins, create new pins (optional), get first and second pages

  ✘ Can delete all pins

## Request with no authentication token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures

* "reason" is required

* "code" is not allowed

* "message" is not allowed

* "ok" is not allowed


### Details

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
```
{
  ok: false,
  error: {
    code: 'EXPECTED_BEARER_STRING',
    message: 'API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`.'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b25e1da15aa33-DFW",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:29 GMT",
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
## Request with invalid token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures

* "reason" is required

* "code" is not allowed

* "message" is not allowed

* "ok" is not allowed


### Details

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
```
{
  ok: false,
  error: {
    code: 'ERROR_MALFORMED_TOKEN',
    message: 'API Key is malformed or failed to parse.'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b25e72e16aa22-DFW",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:30 GMT",
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
## Pins post of CID 'baeaaadbzgawdimzqha2tgmbwha' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✓ Pinning status is either queued, pinning, or pinned (success)




#### Joi validation failures

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items


### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzgawdimzqha2tgmbwha"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbzgawdimzqha2tgmbwha',
  status: 'queued',
  created: '2022-06-01T21:47:31.306+00:00',
  pin: {
    cid: 'baeaaadbzgawdimzqha2tgmbwha',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbzgawdimzqha2tgmbwha',
  status: 'queued',
  created: 2022-06-01T21:47:31.306Z,
  pin: {
    cid: 'baeaaadbzgawdimzqha2tgmbwha',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b25ed4fd4aa04-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:33 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbzgawdimzqha2tgmbwha",
  "status": "queued",
  "created": "2022-06-01T21:47:31.306+00:00",
  "pin": {
    "cid": "baeaaadbzgawdimzqha2tgmbwha",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## The newly created pin can be immediately deleted - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202: The Pin was deleted successfully (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbzgqwdgnbug4ydomzuha

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbzgqwdgnbug4ydomzuha
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b260cfd669eb0-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can create and then delete a new pin - ✓ SUCCESS

### Expectations (4/4 successful)

  ✓ Result is not null (success)

  ✓ Response code is 200 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202: The Pin was deleted successfully (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzgqwdgnbug4ydomzuha"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbzgqwdgnbug4ydomzuha',
  status: 'queued',
  created: '2022-06-01T21:47:34.633+00:00',
  pin: {
    cid: 'baeaaadbzgqwdgnbug4ydomzuha',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbzgqwdgnbug4ydomzuha',
  status: 'queued',
  created: 2022-06-01T21:47:34.633Z,
  pin: {
    cid: 'baeaaadbzgqwdgnbug4ydomzuha',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26018fd166fb-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbzgqwdgnbug4ydomzuha",
  "status": "queued",
  "created": "2022-06-01T21:47:34.633+00:00",
  "pin": {
    "cid": "baeaaadbzgqwdgnbug4ydomzuha",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## List pin objects (GET /pins) in all states - ✘ FAILED

### Expectations (2/3 successful)

  ✘ Response object matches api spec schema (failure)

  ✓ Response is ok (success)

  ✓ Response code is 200 (success)




#### Joi validation failures

* "name" must be a string

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

* "name" must be a string

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

* "name" must be a string

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

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items


### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbzgawdimzqha2tgmbwha',
      status: 'queued',
      created: '2022-06-01T21:47:31.306+00:00',
      pin: {
        cid: 'baeaaadbzgawdimzqha2tgmbwha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: '2022-05-18T21:23:49.32+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:47.372+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: '2022-05-18T21:23:45.071+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: '2022-05-18T21:23:43.329+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydembwge4a',
      status: 'failed',
      created: '2022-05-18T21:23:41.335+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydembwge4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcobwheza',
      status: 'failed',
      created: '2022-05-18T21:23:39.276+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcobwheza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnrwgu4q',
      status: 'failed',
      created: '2022-05-18T21:23:37.19+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnrwgu4q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnbqge2q',
      status: 'failed',
      created: '2022-05-18T21:23:34.814+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnbqge2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcmjqge2a',
      status: 'failed',
      created: '2022-05-18T21:23:32.304+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcmjqge2a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadbzgawdimzqha2tgmbwha',
      status: 'queued',
      created: 2022-06-01T21:47:31.306Z,
      pin: {
        cid: 'baeaaadbzgawdimzqha2tgmbwha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: 2022-05-18T21:23:49.320Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:47.372Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: 2022-05-18T21:23:45.071Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: 2022-05-18T21:23:43.329Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydembwge4a',
      status: 'failed',
      created: 2022-05-18T21:23:41.335Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydembwge4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcobwheza',
      status: 'failed',
      created: 2022-05-18T21:23:39.276Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcobwheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnrwgu4q',
      status: 'failed',
      created: 2022-05-18T21:23:37.190Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnrwgu4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnbqge2q',
      status: 'failed',
      created: 2022-05-18T21:23:34.814Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnbqge2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcmjqge2a',
      status: 'failed',
      created: 2022-05-18T21:23:32.304Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcmjqge2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26110fc6aa88-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:37 GMT",
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
      "requestid": "baeaaadbzgawdimzqha2tgmbwha",
      "status": "queued",
      "created": "2022-06-01T21:47:31.306+00:00",
      "pin": {
        "cid": "baeaaadbzgawdimzqha2tgmbwha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydeobuha4a",
      "status": "failed",
      "created": "2022-05-18T21:23:49.32+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydeobuha4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydenrwgi2q",
      "status": "failed",
      "created": "2022-05-18T21:23:47.372+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenrwgi2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydenbuha3q",
      "status": "failed",
      "created": "2022-05-18T21:23:45.071+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenbuha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydemrwg42a",
      "status": "failed",
      "created": "2022-05-18T21:23:43.329+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydemrwg42a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydembwge4a",
      "status": "failed",
      "created": "2022-05-18T21:23:41.335+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydembwge4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcobwheza",
      "status": "failed",
      "created": "2022-05-18T21:23:39.276+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcobwheza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcnrwgu4q",
      "status": "failed",
      "created": "2022-05-18T21:23:37.19+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcnrwgu4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcnbqge2q",
      "status": "failed",
      "created": "2022-05-18T21:23:34.814+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcnbqge2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcmjqge2a",
      "status": "failed",
      "created": "2022-05-18T21:23:32.304+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcmjqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Get original pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadbzhawdenrvgiztqnbrga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbzhawdenrvgiztqnbrga
```
{ error: { reason: 'NOT_FOUND', details: 'pin not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Not Found (404)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26365a8d9f01-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:42 GMT",
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
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadbzhewdqnrsge3dcnzwgm

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbzhewdqnrsge3dcnzwgm
```
{
  requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
  status: 'queued',
  created: '2022-06-01T21:47:41.099+00:00',
  pin: {
    cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
  status: 'queued',
  created: 2022-06-01T21:47:41.099Z,
  pin: {
    cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b263cc8d49f12-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbzhewdqnrsge3dcnzwgm",
  "status": "queued",
  "created": "2022-06-01T21:47:41.099+00:00",
  "pin": {
    "cid": "baeaaadbzhewdqnrsge3dcnzwgm",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadbzhawdenrvgiztqnbrga' can have cid 'baeaaadbzhawdenrvgiztqnbrga' replaced with 'baeaaadbzhewdqnrsge3dcnzwgm' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins/baeaaadbzhawdenrvgiztqnbrga

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzhewdqnrsge3dcnzwgm"}
```
#### Response data from https://nft.storage/api/pins/baeaaadbzhawdenrvgiztqnbrga
```
{
  requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
  status: 'queued',
  created: '2022-06-01T21:47:41.099+00:00',
  pin: {
    cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
  status: 'queued',
  created: 2022-06-01T21:47:41.099Z,
  pin: {
    cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b262429600f0a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbzhewdqnrsge3dcnzwgm",
  "status": "queued",
  "created": "2022-06-01T21:47:41.099+00:00",
  "pin": {
    "cid": "baeaaadbzhewdqnrsge3dcnzwgm",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)

  ✓ Could obtain requestid from new pin (baeaaadbzhawdenrvgiztqnbrga) (success)

  ✓ Response is ok (success)

  ✓ Replaced pin has the new & expected CID (success)

  ✓ Replaced pin has a different requestid (success)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzhawdenrvgiztqnbrga"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbzhawdenrvgiztqnbrga',
  status: 'queued',
  created: '2022-06-01T21:47:38.424+00:00',
  pin: {
    cid: 'baeaaadbzhawdenrvgiztqnbrga',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbzhawdenrvgiztqnbrga',
  status: 'queued',
  created: 2022-06-01T21:47:38.424Z,
  pin: {
    cid: 'baeaaadbzhawdenrvgiztqnbrga',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b261a1d80677b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbzhawdenrvgiztqnbrga",
  "status": "queued",
  "created": "2022-06-01T21:47:38.424+00:00",
  "pin": {
    "cid": "baeaaadbzhawdenrvgiztqnbrga",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can retrieve pin with name '6df0b402-26d9-4616-88e6-9cdd6f92e70c' via the 'exact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=6df0b402-26d9-4616-88e6-9cdd6f92e70c&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=6df0b402-26d9-4616-88e6-9cdd6f92e70c&match=exact
```
{
  reason: 'VALIDATION_ERROR',
  details: [
    {
      instanceLocation: '#',
      keyword: 'required',
      keywordLocation: '#/required',
      error: 'Instance does not have required property "status".'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26502bc72897-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "VALIDATION_ERROR",
  "details": [
    {
      "instanceLocation": "#",
      "keyword": "required",
      "keywordLocation": "#/required",
      "error": "Instance does not have required property \"status\"."
    }
  ]
}
```
## Can retrieve pin with name '6DF0B402-26D9-4616-88E6-9CDD6F92E70C' via the 'iexact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=6DF0B402-26D9-4616-88E6-9CDD6F92E70C&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=6DF0B402-26D9-4616-88E6-9CDD6F92E70C&match=iexact
```
{
  reason: 'VALIDATION_ERROR',
  details: [
    {
      instanceLocation: '#',
      keyword: 'required',
      keywordLocation: '#/required',
      error: 'Instance does not have required property "status".'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b2652b88bd26a-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:47 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "VALIDATION_ERROR",
  "details": [
    {
      "instanceLocation": "#",
      "keyword": "required",
      "keywordLocation": "#/required",
      "error": "Instance does not have required property \"status\"."
    }
  ]
}
```
## Can retrieve pin with name '26d9-4616-88e6-9cd' via the 'partial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=26d9-4616-88e6-9cd&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=26d9-4616-88e6-9cd&match=partial
```
{
  reason: 'VALIDATION_ERROR',
  details: [
    {
      instanceLocation: '#',
      keyword: 'required',
      keywordLocation: '#/required',
      error: 'Instance does not have required property "status".'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b2658fe169e9b-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "VALIDATION_ERROR",
  "details": [
    {
      "instanceLocation": "#",
      "keyword": "required",
      "keywordLocation": "#/required",
      "error": "Instance does not have required property \"status\"."
    }
  ]
}
```
## Can retrieve pin with name '26D9-4616-88E6-9CD' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=26D9-4616-88E6-9CD&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=26D9-4616-88E6-9CD&match=ipartial
```
{
  reason: 'VALIDATION_ERROR',
  details: [
    {
      instanceLocation: '#',
      keyword: 'required',
      keywordLocation: '#/required',
      error: 'Instance does not have required property "status".'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b265f1faaaa73-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "VALIDATION_ERROR",
  "details": [
    {
      "instanceLocation": "#",
      "keyword": "required",
      "keywordLocation": "#/required",
      "error": "Instance does not have required property \"status\"."
    }
  ]
}
```
## Can create a pin with name='6df0b402-26d9-4616-88e6-9cdd6f92e70c' - ✘ FAILED

### Expectations (3/11 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Name matches name provided during creation (success)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrga2symzrhaydeobthe2q","name":"6df0b402-26d9-4616-88e6-9cdd6f92e70c"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrga2symzrhaydeobthe2q',
  status: 'queued',
  created: '2022-06-01T21:47:45.508+00:00',
  pin: {
    cid: 'baeaaadjrga2symzrhaydeobthe2q',
    meta: null,
    name: '6df0b402-26d9-4616-88e6-9cdd6f92e70c',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadjrga2symzrhaydeobthe2q',
  status: 'queued',
  created: 2022-06-01T21:47:45.508Z,
  pin: {
    cid: 'baeaaadjrga2symzrhaydeobthe2q',
    name: '6df0b402-26d9-4616-88e6-9cdd6f92e70c',
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b264619259ee2-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrga2symzrhaydeobthe2q",
  "status": "queued",
  "created": "2022-06-01T21:47:45.508+00:00",
  "pin": {
    "cid": "baeaaadjrga2symzrhaydeobthe2q",
    "meta": null,
    "name": "6df0b402-26d9-4616-88e6-9cdd6f92e70c",
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbrgeysymzqhe4deojuha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbrgeysymzqhe4deojuha"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbrgeysymzqhe4deojuha',
  status: 'queued',
  created: '2022-06-01T21:47:51.881+00:00',
  pin: {
    cid: 'baeaaadbrgeysymzqhe4deojuha',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbrgeysymzqhe4deojuha',
  status: 'queued',
  created: 2022-06-01T21:47:51.881Z,
  pin: {
    cid: 'baeaaadbrgeysymzqhe4deojuha',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b2669ddea9401-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbrgeysymzqhe4deojuha",
  "status": "queued",
  "created": "2022-06-01T21:47:51.881+00:00",
  "pin": {
    "cid": "baeaaadbrgeysymzqhe4deojuha",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbrgeysymzrhaydcmjwgu' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbrgeysymzrhaydcmjwgu"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbrgeysymzrhaydcmjwgu',
  status: 'queued',
  created: '2022-06-01T21:47:53.499+00:00',
  pin: {
    cid: 'baeaaadbrgeysymzrhaydcmjwgu',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbrgeysymzrhaydcmjwgu',
  status: 'queued',
  created: 2022-06-01T21:47:53.499Z,
  pin: {
    cid: 'baeaaadbrgeysymzrhaydcmjwgu',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b2678cf7c2897-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:54 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbrgeysymzrhaydcmjwgu",
  "status": "queued",
  "created": "2022-06-01T21:47:53.499+00:00",
  "pin": {
    "cid": "baeaaadbrgeysymzrhaydcmjwgu",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbrgeysymzsgq4dmnbxha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbrgeysymzsgq4dmnbxha"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbrgeysymzsgq4dmnbxha',
  status: 'queued',
  created: '2022-06-01T21:47:55.495+00:00',
  pin: {
    cid: 'baeaaadbrgeysymzsgq4dmnbxha',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbrgeysymzsgq4dmnbxha',
  status: 'queued',
  created: 2022-06-01T21:47:55.495Z,
  pin: {
    cid: 'baeaaadbrgeysymzsgq4dmnbxha',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26826af093ec-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbrgeysymzsgq4dmnbxha",
  "status": "queued",
  "created": "2022-06-01T21:47:55.495+00:00",
  "pin": {
    "cid": "baeaaadbrgeysymzsgq4dmnbxha",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbrgeysymzugiytqnjrgm' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbrgeysymzugiytqnjrgm"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbrgeysymzugiytqnjrgm',
  status: 'queued',
  created: '2022-06-01T21:47:57.14+00:00',
  pin: {
    cid: 'baeaaadbrgeysymzugiytqnjrgm',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbrgeysymzugiytqnjrgm',
  status: 'queued',
  created: 2022-06-01T21:47:57.140Z,
  pin: {
    cid: 'baeaaadbrgeysymzugiytqnjrgm',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b268fcab1aa73-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbrgeysymzugiytqnjrgm",
  "status": "queued",
  "created": "2022-06-01T21:47:57.14+00:00",
  "pin": {
    "cid": "baeaaadbrgeysymzugiytqnjrgm",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbrgeysymzug44dcojsgq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbrgeysymzug44dcojsgq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbrgeysymzug44dcojsgq',
  status: 'queued',
  created: '2022-06-01T21:47:58.609+00:00',
  pin: {
    cid: 'baeaaadbrgeysymzug44dcojsgq',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbrgeysymzug44dcojsgq',
  status: 'queued',
  created: 2022-06-01T21:47:58.609Z,
  pin: {
    cid: 'baeaaadbrgeysymzug44dcojsgq',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b2698cff3aa51-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbrgeysymzug44dcojsgq",
  "status": "queued",
  "created": "2022-06-01T21:47:58.609+00:00",
  "pin": {
    "cid": "baeaaadbrgeysymzug44dcojsgq",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pagination: First page of pins - ✘ FAILED

### Expectations (3/5 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✘ Count is greater than or equal to 15 (failure)

  ✘ Count is greater than the number of pins returned (failure)

  ✓ Number of pins returned defaults to 10 (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbrgeysymzug44dcojsgq',
      status: 'queued',
      created: '2022-06-01T21:47:58.609+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzug44dcojsgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbrgeysymzugiytqnjrgm',
      status: 'queued',
      created: '2022-06-01T21:47:57.14+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzugiytqnjrgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbrgeysymzsgq4dmnbxha',
      status: 'queued',
      created: '2022-06-01T21:47:55.495+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzsgq4dmnbxha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbrgeysymzrhaydcmjwgu',
      status: 'queued',
      created: '2022-06-01T21:47:53.499+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzrhaydcmjwgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbrgeysymzqhe4deojuha',
      status: 'queued',
      created: '2022-06-01T21:47:51.881+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzqhe4deojuha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrga2symzrhaydeobthe2q',
      status: 'queued',
      created: '2022-06-01T21:47:45.508+00:00',
      pin: {
        cid: 'baeaaadjrga2symzrhaydeobthe2q',
        meta: null,
        name: '6df0b402-26d9-4616-88e6-9cdd6f92e70c',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
      status: 'queued',
      created: '2022-06-01T21:47:41.099+00:00',
      pin: {
        cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbzgawdimzqha2tgmbwha',
      status: 'queued',
      created: '2022-06-01T21:47:31.306+00:00',
      pin: {
        cid: 'baeaaadbzgawdimzqha2tgmbwha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: '2022-05-18T21:23:49.32+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:47.372+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadbrgeysymzug44dcojsgq',
      status: 'queued',
      created: 2022-06-01T21:47:58.609Z,
      pin: {
        cid: 'baeaaadbrgeysymzug44dcojsgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbrgeysymzugiytqnjrgm',
      status: 'queued',
      created: 2022-06-01T21:47:57.140Z,
      pin: {
        cid: 'baeaaadbrgeysymzugiytqnjrgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbrgeysymzsgq4dmnbxha',
      status: 'queued',
      created: 2022-06-01T21:47:55.495Z,
      pin: {
        cid: 'baeaaadbrgeysymzsgq4dmnbxha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbrgeysymzrhaydcmjwgu',
      status: 'queued',
      created: 2022-06-01T21:47:53.499Z,
      pin: {
        cid: 'baeaaadbrgeysymzrhaydcmjwgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbrgeysymzqhe4deojuha',
      status: 'queued',
      created: 2022-06-01T21:47:51.881Z,
      pin: {
        cid: 'baeaaadbrgeysymzqhe4deojuha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrga2symzrhaydeobthe2q',
      status: 'queued',
      created: 2022-06-01T21:47:45.508Z,
      pin: {
        cid: 'baeaaadjrga2symzrhaydeobthe2q',
        name: '6df0b402-26d9-4616-88e6-9cdd6f92e70c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
      status: 'queued',
      created: 2022-06-01T21:47:41.099Z,
      pin: {
        cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbzgawdimzqha2tgmbwha',
      status: 'queued',
      created: 2022-06-01T21:47:31.306Z,
      pin: {
        cid: 'baeaaadbzgawdimzqha2tgmbwha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: 2022-05-18T21:23:49.320Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:47.372Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26a2ed670f42-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:01 GMT",
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
      "requestid": "baeaaadbrgeysymzug44dcojsgq",
      "status": "queued",
      "created": "2022-06-01T21:47:58.609+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzug44dcojsgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgeysymzugiytqnjrgm",
      "status": "queued",
      "created": "2022-06-01T21:47:57.14+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzugiytqnjrgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgeysymzsgq4dmnbxha",
      "status": "queued",
      "created": "2022-06-01T21:47:55.495+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzsgq4dmnbxha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgeysymzrhaydcmjwgu",
      "status": "queued",
      "created": "2022-06-01T21:47:53.499+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzrhaydcmjwgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgeysymzqhe4deojuha",
      "status": "queued",
      "created": "2022-06-01T21:47:51.881+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzqhe4deojuha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga2symzrhaydeobthe2q",
      "status": "queued",
      "created": "2022-06-01T21:47:45.508+00:00",
      "pin": {
        "cid": "baeaaadjrga2symzrhaydeobthe2q",
        "meta": null,
        "name": "6df0b402-26d9-4616-88e6-9cdd6f92e70c",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhewdqnrsge3dcnzwgm",
      "status": "queued",
      "created": "2022-06-01T21:47:41.099+00:00",
      "pin": {
        "cid": "baeaaadbzhewdqnrsge3dcnzwgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdimzqha2tgmbwha",
      "status": "queued",
      "created": "2022-06-01T21:47:31.306+00:00",
      "pin": {
        "cid": "baeaaadbzgawdimzqha2tgmbwha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydeobuha4a",
      "status": "failed",
      "created": "2022-05-18T21:23:49.32+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydeobuha4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydenrwgi2q",
      "status": "failed",
      "created": "2022-05-18T21:23:47.372+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenrwgi2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Pagination: Retrieve the next page of pins - ✘ FAILED

### Expectations (2/3 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✘ The next page of pins doesn't contain any of previous pages pins (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A23%3A47.372Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A23%3A47.372Z
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:47.372+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: '2022-05-18T21:23:45.071+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: '2022-05-18T21:23:43.329+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydembwge4a',
      status: 'failed',
      created: '2022-05-18T21:23:41.335+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydembwge4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcobwheza',
      status: 'failed',
      created: '2022-05-18T21:23:39.276+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcobwheza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnrwgu4q',
      status: 'failed',
      created: '2022-05-18T21:23:37.19+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnrwgu4q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnbqge2q',
      status: 'failed',
      created: '2022-05-18T21:23:34.814+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnbqge2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcmjqge2a',
      status: 'failed',
      created: '2022-05-18T21:23:32.304+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcmjqge2a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydaobxgi4a',
      status: 'failed',
      created: '2022-05-18T21:23:29.56+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydaobxgi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydanrvgyya',
      status: 'failed',
      created: '2022-05-18T21:23:27.279+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydanrvgyya',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:47.372Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: 2022-05-18T21:23:45.071Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: 2022-05-18T21:23:43.329Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydembwge4a',
      status: 'failed',
      created: 2022-05-18T21:23:41.335Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydembwge4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcobwheza',
      status: 'failed',
      created: 2022-05-18T21:23:39.276Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcobwheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnrwgu4q',
      status: 'failed',
      created: 2022-05-18T21:23:37.190Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnrwgu4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnbqge2q',
      status: 'failed',
      created: 2022-05-18T21:23:34.814Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnbqge2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcmjqge2a',
      status: 'failed',
      created: 2022-05-18T21:23:32.304Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcmjqge2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydaobxgi4a',
      status: 'failed',
      created: 2022-05-18T21:23:29.560Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydaobxgi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydanrvgyya',
      status: 'failed',
      created: 2022-05-18T21:23:27.279Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydanrvgyya',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26ab5fd80efa-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:02 GMT",
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
      "requestid": "baeaaadjrgy2teojqheydenrwgi2q",
      "status": "failed",
      "created": "2022-05-18T21:23:47.372+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenrwgi2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydenbuha3q",
      "status": "failed",
      "created": "2022-05-18T21:23:45.071+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenbuha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydemrwg42a",
      "status": "failed",
      "created": "2022-05-18T21:23:43.329+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydemrwg42a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydembwge4a",
      "status": "failed",
      "created": "2022-05-18T21:23:41.335+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydembwge4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcobwheza",
      "status": "failed",
      "created": "2022-05-18T21:23:39.276+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcobwheza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcnrwgu4q",
      "status": "failed",
      "created": "2022-05-18T21:23:37.19+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcnrwgu4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcnbqge2q",
      "status": "failed",
      "created": "2022-05-18T21:23:34.814+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcnbqge2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcmjqge2a",
      "status": "failed",
      "created": "2022-05-18T21:23:32.304+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcmjqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydaobxgi4a",
      "status": "failed",
      "created": "2022-05-18T21:23:29.56+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydaobxgi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydanrvgyya",
      "status": "failed",
      "created": "2022-05-18T21:23:27.279+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydanrvgyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ✘ FAILED

### Expectations (17/20 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✘ Count is greater than or equal to 15 (failure)

  ✘ Count is greater than the number of pins returned (failure)

  ✓ Number of pins returned defaults to 10 (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✘ The next page of pins doesn't contain any of previous pages pins (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjrga2symzrhaydeobthe2q',
      status: 'queued',
      created: '2022-06-01T21:47:45.508+00:00',
      pin: {
        cid: 'baeaaadjrga2symzrhaydeobthe2q',
        meta: null,
        name: '6df0b402-26d9-4616-88e6-9cdd6f92e70c',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
      status: 'queued',
      created: '2022-06-01T21:47:41.099+00:00',
      pin: {
        cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbzgawdimzqha2tgmbwha',
      status: 'queued',
      created: '2022-06-01T21:47:31.306+00:00',
      pin: {
        cid: 'baeaaadbzgawdimzqha2tgmbwha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: '2022-05-18T21:23:49.32+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:47.372+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: '2022-05-18T21:23:45.071+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: '2022-05-18T21:23:43.329+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydembwge4a',
      status: 'failed',
      created: '2022-05-18T21:23:41.335+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydembwge4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcobwheza',
      status: 'failed',
      created: '2022-05-18T21:23:39.276+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcobwheza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnrwgu4q',
      status: 'failed',
      created: '2022-05-18T21:23:37.19+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnrwgu4q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadjrga2symzrhaydeobthe2q',
      status: 'queued',
      created: 2022-06-01T21:47:45.508Z,
      pin: {
        cid: 'baeaaadjrga2symzrhaydeobthe2q',
        name: '6df0b402-26d9-4616-88e6-9cdd6f92e70c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
      status: 'queued',
      created: 2022-06-01T21:47:41.099Z,
      pin: {
        cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbzgawdimzqha2tgmbwha',
      status: 'queued',
      created: 2022-06-01T21:47:31.306Z,
      pin: {
        cid: 'baeaaadbzgawdimzqha2tgmbwha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: 2022-05-18T21:23:49.320Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:47.372Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: 2022-05-18T21:23:45.071Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: 2022-05-18T21:23:43.329Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydembwge4a',
      status: 'failed',
      created: 2022-05-18T21:23:41.335Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydembwge4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcobwheza',
      status: 'failed',
      created: 2022-05-18T21:23:39.276Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcobwheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnrwgu4q',
      status: 'failed',
      created: 2022-05-18T21:23:37.190Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnrwgu4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b2661ad15aa82-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:50 GMT",
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
      "requestid": "baeaaadjrga2symzrhaydeobthe2q",
      "status": "queued",
      "created": "2022-06-01T21:47:45.508+00:00",
      "pin": {
        "cid": "baeaaadjrga2symzrhaydeobthe2q",
        "meta": null,
        "name": "6df0b402-26d9-4616-88e6-9cdd6f92e70c",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhewdqnrsge3dcnzwgm",
      "status": "queued",
      "created": "2022-06-01T21:47:41.099+00:00",
      "pin": {
        "cid": "baeaaadbzhewdqnrsge3dcnzwgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdimzqha2tgmbwha",
      "status": "queued",
      "created": "2022-06-01T21:47:31.306+00:00",
      "pin": {
        "cid": "baeaaadbzgawdimzqha2tgmbwha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydeobuha4a",
      "status": "failed",
      "created": "2022-05-18T21:23:49.32+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydeobuha4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydenrwgi2q",
      "status": "failed",
      "created": "2022-05-18T21:23:47.372+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenrwgi2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydenbuha3q",
      "status": "failed",
      "created": "2022-05-18T21:23:45.071+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenbuha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydemrwg42a",
      "status": "failed",
      "created": "2022-05-18T21:23:43.329+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydemrwg42a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydembwge4a",
      "status": "failed",
      "created": "2022-05-18T21:23:41.335+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydembwge4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcobwheza",
      "status": "failed",
      "created": "2022-05-18T21:23:39.276+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcobwheza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcnrwgu4q",
      "status": "failed",
      "created": "2022-05-18T21:23:37.19+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcnrwgu4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Can delete pin with requestid 'baeaaadbrgeysymzug44dcojsgq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbrgeysymzug44dcojsgq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbrgeysymzug44dcojsgq
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26befa9d0ed6-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbrgeysymzugiytqnjrgm' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbrgeysymzugiytqnjrgm

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbrgeysymzugiytqnjrgm
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26c54d62aa51-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbrgeysymzsgq4dmnbxha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbrgeysymzsgq4dmnbxha

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbrgeysymzsgq4dmnbxha
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26cb892628b3-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbrgeysymzrhaydcmjwgu' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbrgeysymzrhaydcmjwgu

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbrgeysymzrhaydcmjwgu
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26d1ce4a9ef5-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:07 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbrgeysymzqhe4deojuha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbrgeysymzqhe4deojuha

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbrgeysymzqhe4deojuha
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26d839aa0efa-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrga2symzrhaydeobthe2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrga2symzrhaydeobthe2q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrga2symzrhaydeobthe2q
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26de380b9ed6-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbzhewdqnrsge3dcnzwgm' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbzhewdqnrsge3dcnzwgm

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbzhewdqnrsge3dcnzwgm
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26e46d080ed6-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbzgawdimzqha2tgmbwha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbzgawdimzqha2tgmbwha

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbzgawdimzqha2tgmbwha
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26eafd7caa51-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqheydeobuha4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqheydeobuha4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqheydeobuha4a
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26f10d1f93e0-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqheydenrwgi2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqheydenrwgi2q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqheydenrwgi2q
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26f7489128b3-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Call pinsGet after deletions - ✘ FAILED

### Expectations (0/1 successful)

  ✘ Final pinsGet call returns a count of zero (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: '2022-05-18T21:23:45.071+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: '2022-05-18T21:23:43.329+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydembwge4a',
      status: 'failed',
      created: '2022-05-18T21:23:41.335+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydembwge4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcobwheza',
      status: 'failed',
      created: '2022-05-18T21:23:39.276+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcobwheza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnrwgu4q',
      status: 'failed',
      created: '2022-05-18T21:23:37.19+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnrwgu4q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnbqge2q',
      status: 'failed',
      created: '2022-05-18T21:23:34.814+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnbqge2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcmjqge2a',
      status: 'failed',
      created: '2022-05-18T21:23:32.304+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydcmjqge2a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydaobxgi4a',
      status: 'failed',
      created: '2022-05-18T21:23:29.56+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydaobxgi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydanrvgyya',
      status: 'failed',
      created: '2022-05-18T21:23:27.279+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydanrvgyya',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydanbrge3q',
      status: 'failed',
      created: '2022-05-18T21:23:25.283+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydanbrge3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: 2022-05-18T21:23:45.071Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: 2022-05-18T21:23:43.329Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydembwge4a',
      status: 'failed',
      created: 2022-05-18T21:23:41.335Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydembwge4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcobwheza',
      status: 'failed',
      created: 2022-05-18T21:23:39.276Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcobwheza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnrwgu4q',
      status: 'failed',
      created: 2022-05-18T21:23:37.190Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnrwgu4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcnbqge2q',
      status: 'failed',
      created: 2022-05-18T21:23:34.814Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcnbqge2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydcmjqge2a',
      status: 'failed',
      created: 2022-05-18T21:23:32.304Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydcmjqge2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydaobxgi4a',
      status: 'failed',
      created: 2022-05-18T21:23:29.560Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydaobxgi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydanrvgyya',
      status: 'failed',
      created: 2022-05-18T21:23:27.279Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydanrvgyya',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydanbrge3q',
      status: 'failed',
      created: 2022-05-18T21:23:25.283Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydanbrge3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26fdbdfc0efa-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:15 GMT",
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
      "requestid": "baeaaadjrgy2teojqheydenbuha3q",
      "status": "failed",
      "created": "2022-05-18T21:23:45.071+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenbuha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydemrwg42a",
      "status": "failed",
      "created": "2022-05-18T21:23:43.329+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydemrwg42a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydembwge4a",
      "status": "failed",
      "created": "2022-05-18T21:23:41.335+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydembwge4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcobwheza",
      "status": "failed",
      "created": "2022-05-18T21:23:39.276+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcobwheza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcnrwgu4q",
      "status": "failed",
      "created": "2022-05-18T21:23:37.19+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcnrwgu4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcnbqge2q",
      "status": "failed",
      "created": "2022-05-18T21:23:34.814+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcnbqge2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydcmjqge2a",
      "status": "failed",
      "created": "2022-05-18T21:23:32.304+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydcmjqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydaobxgi4a",
      "status": "failed",
      "created": "2022-05-18T21:23:29.56+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydaobxgi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydanrvgyya",
      "status": "failed",
      "created": "2022-05-18T21:23:27.279+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydanrvgyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydanbrge3q",
      "status": "failed",
      "created": "2022-05-18T21:23:25.283+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydanbrge3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Can delete all pins - ✘ FAILED

### Expectations (20/21 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✘ Final pinsGet call returns a count of zero (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbrgeysymzug44dcojsgq',
      status: 'queued',
      created: '2022-06-01T21:47:58.609+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzug44dcojsgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbrgeysymzugiytqnjrgm',
      status: 'queued',
      created: '2022-06-01T21:47:57.14+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzugiytqnjrgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbrgeysymzsgq4dmnbxha',
      status: 'queued',
      created: '2022-06-01T21:47:55.495+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzsgq4dmnbxha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbrgeysymzrhaydcmjwgu',
      status: 'queued',
      created: '2022-06-01T21:47:53.499+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzrhaydcmjwgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbrgeysymzqhe4deojuha',
      status: 'queued',
      created: '2022-06-01T21:47:51.881+00:00',
      pin: {
        cid: 'baeaaadbrgeysymzqhe4deojuha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrga2symzrhaydeobthe2q',
      status: 'queued',
      created: '2022-06-01T21:47:45.508+00:00',
      pin: {
        cid: 'baeaaadjrga2symzrhaydeobthe2q',
        meta: null,
        name: '6df0b402-26d9-4616-88e6-9cdd6f92e70c',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
      status: 'queued',
      created: '2022-06-01T21:47:41.099+00:00',
      pin: {
        cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbzgawdimzqha2tgmbwha',
      status: 'queued',
      created: '2022-06-01T21:47:31.306+00:00',
      pin: {
        cid: 'baeaaadbzgawdimzqha2tgmbwha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: '2022-05-18T21:23:49.32+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:47.372+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadbrgeysymzug44dcojsgq',
      status: 'queued',
      created: 2022-06-01T21:47:58.609Z,
      pin: {
        cid: 'baeaaadbrgeysymzug44dcojsgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbrgeysymzugiytqnjrgm',
      status: 'queued',
      created: 2022-06-01T21:47:57.140Z,
      pin: {
        cid: 'baeaaadbrgeysymzugiytqnjrgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbrgeysymzsgq4dmnbxha',
      status: 'queued',
      created: 2022-06-01T21:47:55.495Z,
      pin: {
        cid: 'baeaaadbrgeysymzsgq4dmnbxha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbrgeysymzrhaydcmjwgu',
      status: 'queued',
      created: 2022-06-01T21:47:53.499Z,
      pin: {
        cid: 'baeaaadbrgeysymzrhaydcmjwgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbrgeysymzqhe4deojuha',
      status: 'queued',
      created: 2022-06-01T21:47:51.881Z,
      pin: {
        cid: 'baeaaadbrgeysymzqhe4deojuha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrga2symzrhaydeobthe2q',
      status: 'queued',
      created: 2022-06-01T21:47:45.508Z,
      pin: {
        cid: 'baeaaadjrga2symzrhaydeobthe2q',
        name: '6df0b402-26d9-4616-88e6-9cdd6f92e70c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbzhewdqnrsge3dcnzwgm',
      status: 'queued',
      created: 2022-06-01T21:47:41.099Z,
      pin: {
        cid: 'baeaaadbzhewdqnrsge3dcnzwgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbzgawdimzqha2tgmbwha',
      status: 'queued',
      created: 2022-06-01T21:47:31.306Z,
      pin: {
        cid: 'baeaaadbzgawdimzqha2tgmbwha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: 2022-05-18T21:23:49.320Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:47.372Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714b26b52e97aa1c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:04 GMT",
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
      "requestid": "baeaaadbrgeysymzug44dcojsgq",
      "status": "queued",
      "created": "2022-06-01T21:47:58.609+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzug44dcojsgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgeysymzugiytqnjrgm",
      "status": "queued",
      "created": "2022-06-01T21:47:57.14+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzugiytqnjrgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgeysymzsgq4dmnbxha",
      "status": "queued",
      "created": "2022-06-01T21:47:55.495+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzsgq4dmnbxha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgeysymzrhaydcmjwgu",
      "status": "queued",
      "created": "2022-06-01T21:47:53.499+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzrhaydcmjwgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgeysymzqhe4deojuha",
      "status": "queued",
      "created": "2022-06-01T21:47:51.881+00:00",
      "pin": {
        "cid": "baeaaadbrgeysymzqhe4deojuha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga2symzrhaydeobthe2q",
      "status": "queued",
      "created": "2022-06-01T21:47:45.508+00:00",
      "pin": {
        "cid": "baeaaadjrga2symzrhaydeobthe2q",
        "meta": null,
        "name": "6df0b402-26d9-4616-88e6-9cdd6f92e70c",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhewdqnrsge3dcnzwgm",
      "status": "queued",
      "created": "2022-06-01T21:47:41.099+00:00",
      "pin": {
        "cid": "baeaaadbzhewdqnrsge3dcnzwgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdimzqha2tgmbwha",
      "status": "queued",
      "created": "2022-06-01T21:47:31.306+00:00",
      "pin": {
        "cid": "baeaaadbzgawdimzqha2tgmbwha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydeobuha4a",
      "status": "failed",
      "created": "2022-05-18T21:23:49.32+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydeobuha4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqheydenrwgi2q",
      "status": "failed",
      "created": "2022-05-18T21:23:47.372+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydenrwgi2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
