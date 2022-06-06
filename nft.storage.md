
# https://nft.storage/api compliance:

Date: 2022-06-06T16:17:49.665Z

Revision: Revision: [7bf0131](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/7bf0131)

## Summary (2/9 successful)

  ✘ Request with no authentication token

  ✘ Request with invalid token

  ✘ Pins post of CID 'baeaaadbvgmwdonbxgq3timbqgu'

  ✓ Can create and then delete a new pin

  ✘ List pin objects (GET /pins) in all states

  ✓ Can create and replace a pin's CID

  ✘ Can create a pin with name='a1f81e3d-969c-4834-b038-13ff64ca2103'

  ✘ Pagination: Get all pins, create new pins (optional), get first and second pages

  ✘ Can delete all pins

## Request with no authentication token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
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
  "cf-ray": "717275dbff29aa2e-DFW",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:17:49 GMT",
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
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
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
  "cf-ray": "717275e11870aa2e-DFW",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:17:50 GMT",
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
## Pins post of CID 'baeaaadbvgmwdonbxgq3timbqgu' - ✘ FAILED

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
{"cid":"baeaaadbvgmwdonbxgq3timbqgu"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
  status: 'queued',
  created: '2022-06-06T16:17:52.027+00:00',
  pin: {
    cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
  requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
  status: 'queued',
  created: 2022-06-06T16:17:52.027Z,
  pin: {
    cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
  "cf-ray": "717275e75ada0bcf-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:17:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbvgmwdonbxgq3timbqgu",
  "status": "queued",
  "created": "2022-06-06T16:17:52.027+00:00",
  "pin": {
    "cid": "baeaaadbvgmwdonbxgq3timbqgu",
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbvgywdqnrygy3dcnrzga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbvgywdqnrygy3dcnrzga
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
  "cf-ray": "71727600cfecd272-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:17:56 GMT",
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
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
{"cid":"baeaaadbvgywdqnrygy3dcnrzga"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbvgywdqnrygy3dcnrzga',
  status: 'queued',
  created: '2022-06-06T16:17:54.017+00:00',
  pin: {
    cid: 'baeaaadbvgywdqnrygy3dcnrzga',
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
  requestid: 'baeaaadbvgywdqnrygy3dcnrzga',
  status: 'queued',
  created: 2022-06-06T16:17:54.017Z,
  pin: {
    cid: 'baeaaadbvgywdqnrygy3dcnrzga',
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
  "cf-ray": "717275f528e1aa58-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:17:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbvgywdqnrygy3dcnrzga",
  "status": "queued",
  "created": "2022-06-06T16:17:54.017+00:00",
  "pin": {
    "cid": "baeaaadbvgywdqnrygy3dcnrzga",
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
      requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
      status: 'queued',
      created: '2022-06-06T16:17:52.027+00:00',
      pin: {
        cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
    },
    {
      requestid: 'baeaaadjrgy2teojqheydamjvhayq',
      status: 'failed',
      created: '2022-05-18T21:23:22.497+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydamjvhayq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tsnzwha3q',
      status: 'failed',
      created: '2022-05-18T21:23:18.723+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tsnzwha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqojvge4a',
      status: 'failed',
      created: '2022-05-18T21:23:10.669+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqojvge4a',
        meta: null,
        name: '7fd9988a-c556-4de4-8e3f-ae9083c3ff93',
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
      requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
      status: 'queued',
      created: 2022-06-06T16:17:52.027Z,
      pin: {
        cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
    },
    {
      requestid: 'baeaaadjrgy2teojqheydamjvhayq',
      status: 'failed',
      created: 2022-05-18T21:23:22.497Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydamjvhayq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tsnzwha3q',
      status: 'failed',
      created: 2022-05-18T21:23:18.723Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tsnzwha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqojvge4a',
      status: 'failed',
      created: 2022-05-18T21:23:10.669Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqojvge4a',
        name: '7fd9988a-c556-4de4-8e3f-ae9083c3ff93',
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
  "cf-ray": "717276062c619f10-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:17:57 GMT",
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
      "requestid": "baeaaadbvgmwdonbxgq3timbqgu",
      "status": "queued",
      "created": "2022-06-06T16:17:52.027+00:00",
      "pin": {
        "cid": "baeaaadbvgmwdonbxgq3timbqgu",
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
    },
    {
      "requestid": "baeaaadjrgy2teojqheydamjvhayq",
      "status": "failed",
      "created": "2022-05-18T21:23:22.497+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydamjvhayq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tsnzwha3q",
      "status": "failed",
      "created": "2022-05-18T21:23:18.723+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tsnzwha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tqojvge4a",
      "status": "failed",
      "created": "2022-05-18T21:23:10.669+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tqojvge4a",
        "meta": null,
        "name": "7fd9988a-c556-4de4-8e3f-ae9083c3ff93",
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
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadbwgewdenzvgi3tamzqhe

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgewdenzvgi3tamzqhe
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
  "cf-ray": "7172762cfcbd9ef8-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:02 GMT",
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

#### Request - GET: https://nft.storage/api/pins/baeaaadbwgmwdenryguydgmjtgq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgmwdenryguydgmjtgq
```
{
  requestid: 'baeaaadbwgmwdenryguydgmjtgq',
  status: 'queued',
  created: '2022-06-06T16:18:01.252+00:00',
  pin: {
    cid: 'baeaaadbwgmwdenryguydgmjtgq',
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
  requestid: 'baeaaadbwgmwdenryguydgmjtgq',
  status: 'queued',
  created: 2022-06-06T16:18:01.252Z,
  pin: {
    cid: 'baeaaadbwgmwdenryguydgmjtgq',
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
  "cf-ray": "717276334fef9f10-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgmwdenryguydgmjtgq",
  "status": "queued",
  "created": "2022-06-06T16:18:01.252+00:00",
  "pin": {
    "cid": "baeaaadbwgmwdenryguydgmjtgq",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadbwgewdenzvgi3tamzqhe' can have cid 'baeaaadbwgewdenzvgi3tamzqhe' replaced with 'baeaaadbwgmwdenryguydgmjtgq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins/baeaaadbwgewdenzvgi3tamzqhe

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgmwdenryguydgmjtgq"}
```
#### Response data from https://nft.storage/api/pins/baeaaadbwgewdenzvgi3tamzqhe
```
{
  requestid: 'baeaaadbwgmwdenryguydgmjtgq',
  status: 'queued',
  created: '2022-06-06T16:18:01.252+00:00',
  pin: {
    cid: 'baeaaadbwgmwdenryguydgmjtgq',
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
  requestid: 'baeaaadbwgmwdenryguydgmjtgq',
  status: 'queued',
  created: 2022-06-06T16:18:01.252Z,
  pin: {
    cid: 'baeaaadbwgmwdenryguydgmjtgq',
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
  "cf-ray": "7172761d1c8d0bcf-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:02 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgmwdenryguydgmjtgq",
  "status": "queued",
  "created": "2022-06-06T16:18:01.252+00:00",
  "pin": {
    "cid": "baeaaadbwgmwdenryguydgmjtgq",
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

  ✓ Could obtain requestid from new pin (baeaaadbwgewdenzvgi3tamzqhe) (success)

  ✓ Response is ok (success)

  ✓ Replaced pin has the new & expected CID (success)

  ✓ Replaced pin has a different requestid (success)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
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
{"cid":"baeaaadbwgewdenzvgi3tamzqhe"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbwgewdenzvgi3tamzqhe',
  status: 'queued',
  created: '2022-06-06T16:17:58.356+00:00',
  pin: {
    cid: 'baeaaadbwgewdenzvgi3tamzqhe',
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
  requestid: 'baeaaadbwgewdenzvgi3tamzqhe',
  status: 'queued',
  created: 2022-06-06T16:17:58.356Z,
  pin: {
    cid: 'baeaaadbwgewdenzvgi3tamzqhe',
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
  "cf-ray": "71727610af146731-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:17:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgewdenzvgi3tamzqhe",
  "status": "queued",
  "created": "2022-06-06T16:17:58.356+00:00",
  "pin": {
    "cid": "baeaaadbwgewdenzvgi3tamzqhe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can retrieve pin with name 'a1f81e3d-969c-4834-b038-13ff64ca2103' via the 'exact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=a1f81e3d-969c-4834-b038-13ff64ca2103&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=a1f81e3d-969c-4834-b038-13ff64ca2103&match=exact
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
  "cf-ray": "717276477e2aaa9f-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:07 GMT",
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
## Can retrieve pin with name 'A1F81E3D-969C-4834-B038-13FF64CA2103' via the 'iexact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=A1F81E3D-969C-4834-B038-13FF64CA2103&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=A1F81E3D-969C-4834-B038-13FF64CA2103&match=iexact
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
  "cf-ray": "7172764b28bbaa85-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:07 GMT",
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
## Can retrieve pin with name '969c-4834-b038-13f' via the 'partial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=969c-4834-b038-13f&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=969c-4834-b038-13f&match=partial
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
  "cf-ray": "7172764e38da0ed6-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:07 GMT",
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
## Can retrieve pin with name '969C-4834-B038-13F' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=969C-4834-B038-13F&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=969C-4834-B038-13F&match=ipartial
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
  "cf-ray": "717276545f0467ae-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:09 GMT",
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
## Can create a pin with name='a1f81e3d-969c-4834-b038-13ff64ca2103' - ✘ FAILED

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
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:119:44
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
{"cid":"baeaaadbwhawdcmbtg44dimjuga","name":"a1f81e3d-969c-4834-b038-13ff64ca2103"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbwhawdcmbtg44dimjuga',
  status: 'queued',
  created: '2022-06-06T16:18:05.517+00:00',
  pin: {
    cid: 'baeaaadbwhawdcmbtg44dimjuga',
    meta: null,
    name: 'a1f81e3d-969c-4834-b038-13ff64ca2103',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbwhawdcmbtg44dimjuga',
  status: 'queued',
  created: 2022-06-06T16:18:05.517Z,
  pin: {
    cid: 'baeaaadbwhawdcmbtg44dimjuga',
    name: 'a1f81e3d-969c-4834-b038-13ff64ca2103',
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
  "cf-ray": "7172763b5b129eb8-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwhawdcmbtg44dimjuga",
  "status": "queued",
  "created": "2022-06-06T16:18:05.517+00:00",
  "pin": {
    "cid": "baeaaadbwhawdcmbtg44dimjuga",
    "meta": null,
    "name": "a1f81e3d-969c-4834-b038-13ff64ca2103",
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgmwdsnjxge2dknbxgi' - ✓ SUCCESS

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
{"cid":"baeaaadbxgmwdsnjxge2dknbxgi"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxgmwdsnjxge2dknbxgi',
  status: 'queued',
  created: '2022-06-06T16:18:11.034+00:00',
  pin: {
    cid: 'baeaaadbxgmwdsnjxge2dknbxgi',
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
  requestid: 'baeaaadbxgmwdsnjxge2dknbxgi',
  status: 'queued',
  created: 2022-06-06T16:18:11.034Z,
  pin: {
    cid: 'baeaaadbxgmwdsnjxge2dknbxgi',
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
  "cf-ray": "7172765fed060bbb-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgmwdsnjxge2dknbxgi",
  "status": "queued",
  "created": "2022-06-06T16:18:11.034+00:00",
  "pin": {
    "cid": "baeaaadbxgmwdsnjxge2dknbxgi",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgmwdsnjxhe2dgojyge' - ✓ SUCCESS

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
{"cid":"baeaaadbxgmwdsnjxhe2dgojyge"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxgmwdsnjxhe2dgojyge',
  status: 'queued',
  created: '2022-06-06T16:18:12.672+00:00',
  pin: {
    cid: 'baeaaadbxgmwdsnjxhe2dgojyge',
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
  requestid: 'baeaaadbxgmwdsnjxhe2dgojyge',
  status: 'queued',
  created: 2022-06-06T16:18:12.672Z,
  pin: {
    cid: 'baeaaadbxgmwdsnjxhe2dgojyge',
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
  "cf-ray": "71727669e83d9f0c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgmwdsnjxhe2dgojyge",
  "status": "queued",
  "created": "2022-06-06T16:18:12.672+00:00",
  "pin": {
    "cid": "baeaaadbxgmwdsnjxhe2dgojyge",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgmwdsnjygy4diobzga' - ✓ SUCCESS

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
{"cid":"baeaaadbxgmwdsnjygy4diobzga"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxgmwdsnjygy4diobzga',
  status: 'queued',
  created: '2022-06-06T16:18:14.751+00:00',
  pin: {
    cid: 'baeaaadbxgmwdsnjygy4diobzga',
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
  requestid: 'baeaaadbxgmwdsnjygy4diobzga',
  status: 'queued',
  created: 2022-06-06T16:18:14.751Z,
  pin: {
    cid: 'baeaaadbxgmwdsnjygy4diobzga',
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
  "cf-ray": "71727675cfb3aa9f-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgmwdsnjygy4diobzga",
  "status": "queued",
  "created": "2022-06-06T16:18:14.751+00:00",
  "pin": {
    "cid": "baeaaadbxgmwdsnjygy4diobzga",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgmwdsnrqgq2dkmbrga' - ✓ SUCCESS

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
{"cid":"baeaaadbxgmwdsnrqgq2dkmbrga"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
  status: 'queued',
  created: '2022-06-06T16:18:16.019+00:00',
  pin: {
    cid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
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
  requestid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
  status: 'queued',
  created: 2022-06-06T16:18:16.019Z,
  pin: {
    cid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
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
  "cf-ray": "717276809ee567ae-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgmwdsnrqgq2dkmbrga",
  "status": "queued",
  "created": "2022-06-06T16:18:16.019+00:00",
  "pin": {
    "cid": "baeaaadbxgmwdsnrqgq2dkmbrga",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbxgmwdsnrqhe4tsmjrgy' - ✓ SUCCESS

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
{"cid":"baeaaadbxgmwdsnrqhe4tsmjrgy"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
  status: 'queued',
  created: '2022-06-06T16:18:17.367+00:00',
  pin: {
    cid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
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
  requestid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
  status: 'queued',
  created: 2022-06-06T16:18:17.367Z,
  pin: {
    cid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
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
  "cf-ray": "717276877cffd27a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbxgmwdsnrqhe4tsmjrgy",
  "status": "queued",
  "created": "2022-06-06T16:18:17.367+00:00",
  "pin": {
    "cid": "baeaaadbxgmwdsnrqhe4tsmjrgy",
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
      requestid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
      status: 'queued',
      created: '2022-06-06T16:18:17.367+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
      status: 'queued',
      created: '2022-06-06T16:18:16.019+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgmwdsnjygy4diobzga',
      status: 'queued',
      created: '2022-06-06T16:18:14.751+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnjygy4diobzga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgmwdsnjxhe2dgojyge',
      status: 'queued',
      created: '2022-06-06T16:18:12.672+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnjxhe2dgojyge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgmwdsnjxge2dknbxgi',
      status: 'queued',
      created: '2022-06-06T16:18:11.034+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnjxge2dknbxgi',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhawdcmbtg44dimjuga',
      status: 'queued',
      created: '2022-06-06T16:18:05.517+00:00',
      pin: {
        cid: 'baeaaadbwhawdcmbtg44dimjuga',
        meta: null,
        name: 'a1f81e3d-969c-4834-b038-13ff64ca2103',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwgmwdenryguydgmjtgq',
      status: 'queued',
      created: '2022-06-06T16:18:01.252+00:00',
      pin: {
        cid: 'baeaaadbwgmwdenryguydgmjtgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
      status: 'queued',
      created: '2022-06-06T16:17:52.027+00:00',
      pin: {
        cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
      requestid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
      status: 'queued',
      created: 2022-06-06T16:18:17.367Z,
      pin: {
        cid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
      status: 'queued',
      created: 2022-06-06T16:18:16.019Z,
      pin: {
        cid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgmwdsnjygy4diobzga',
      status: 'queued',
      created: 2022-06-06T16:18:14.751Z,
      pin: {
        cid: 'baeaaadbxgmwdsnjygy4diobzga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgmwdsnjxhe2dgojyge',
      status: 'queued',
      created: 2022-06-06T16:18:12.672Z,
      pin: {
        cid: 'baeaaadbxgmwdsnjxhe2dgojyge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgmwdsnjxge2dknbxgi',
      status: 'queued',
      created: 2022-06-06T16:18:11.034Z,
      pin: {
        cid: 'baeaaadbxgmwdsnjxge2dknbxgi',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhawdcmbtg44dimjuga',
      status: 'queued',
      created: 2022-06-06T16:18:05.517Z,
      pin: {
        cid: 'baeaaadbwhawdcmbtg44dimjuga',
        name: 'a1f81e3d-969c-4834-b038-13ff64ca2103',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwgmwdenryguydgmjtgq',
      status: 'queued',
      created: 2022-06-06T16:18:01.252Z,
      pin: {
        cid: 'baeaaadbwgmwdenryguydgmjtgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
      status: 'queued',
      created: 2022-06-06T16:17:52.027Z,
      pin: {
        cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
  "cf-ray": "7172769238ee0bbb-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:19 GMT",
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
      "requestid": "baeaaadbxgmwdsnrqhe4tsmjrgy",
      "status": "queued",
      "created": "2022-06-06T16:18:17.367+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnrqhe4tsmjrgy",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgmwdsnrqgq2dkmbrga",
      "status": "queued",
      "created": "2022-06-06T16:18:16.019+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnrqgq2dkmbrga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgmwdsnjygy4diobzga",
      "status": "queued",
      "created": "2022-06-06T16:18:14.751+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnjygy4diobzga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgmwdsnjxhe2dgojyge",
      "status": "queued",
      "created": "2022-06-06T16:18:12.672+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnjxhe2dgojyge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgmwdsnjxge2dknbxgi",
      "status": "queued",
      "created": "2022-06-06T16:18:11.034+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnjxge2dknbxgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhawdcmbtg44dimjuga",
      "status": "queued",
      "created": "2022-06-06T16:18:05.517+00:00",
      "pin": {
        "cid": "baeaaadbwhawdcmbtg44dimjuga",
        "meta": null,
        "name": "a1f81e3d-969c-4834-b038-13ff64ca2103",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdenryguydgmjtgq",
      "status": "queued",
      "created": "2022-06-06T16:18:01.252+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdenryguydgmjtgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgmwdonbxgq3timbqgu",
      "status": "queued",
      "created": "2022-06-06T16:17:52.027+00:00",
      "pin": {
        "cid": "baeaaadbvgmwdonbxgq3timbqgu",
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

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A23%3A34.814Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A23%3A34.814Z
```
{
  count: 10,
  results: [
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
    },
    {
      requestid: 'baeaaadjrgy2teojqheydamjvhayq',
      status: 'failed',
      created: '2022-05-18T21:23:22.497+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydamjvhayq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tsnzwha3q',
      status: 'failed',
      created: '2022-05-18T21:23:18.723+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tsnzwha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqojvge4a',
      status: 'failed',
      created: '2022-05-18T21:23:10.669+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqojvge4a',
        meta: null,
        name: '7fd9988a-c556-4de4-8e3f-ae9083c3ff93',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqnbvgq4a',
      status: 'failed',
      created: '2022-05-18T21:23:05.572+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqnbvgq4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4toojsgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:00.192+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4toojsgi2q',
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
    },
    {
      requestid: 'baeaaadjrgy2teojqheydamjvhayq',
      status: 'failed',
      created: 2022-05-18T21:23:22.497Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydamjvhayq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tsnzwha3q',
      status: 'failed',
      created: 2022-05-18T21:23:18.723Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tsnzwha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqojvge4a',
      status: 'failed',
      created: 2022-05-18T21:23:10.669Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqojvge4a',
        name: '7fd9988a-c556-4de4-8e3f-ae9083c3ff93',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqnbvgq4a',
      status: 'failed',
      created: 2022-05-18T21:23:05.572Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqnbvgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4toojsgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:00.192Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4toojsgi2q',
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
  "cf-ray": "717276989b989404-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:20 GMT",
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
    },
    {
      "requestid": "baeaaadjrgy2teojqheydamjvhayq",
      "status": "failed",
      "created": "2022-05-18T21:23:22.497+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydamjvhayq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tsnzwha3q",
      "status": "failed",
      "created": "2022-05-18T21:23:18.723+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tsnzwha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tqojvge4a",
      "status": "failed",
      "created": "2022-05-18T21:23:10.669+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tqojvge4a",
        "meta": null,
        "name": "7fd9988a-c556-4de4-8e3f-ae9083c3ff93",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tqnbvgq4a",
      "status": "failed",
      "created": "2022-05-18T21:23:05.572+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tqnbvgq4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4toojsgi2q",
      "status": "failed",
      "created": "2022-05-18T21:23:00.192+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4toojsgi2q",
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
      requestid: 'baeaaadbwhawdcmbtg44dimjuga',
      status: 'queued',
      created: '2022-06-06T16:18:05.517+00:00',
      pin: {
        cid: 'baeaaadbwhawdcmbtg44dimjuga',
        meta: null,
        name: 'a1f81e3d-969c-4834-b038-13ff64ca2103',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwgmwdenryguydgmjtgq',
      status: 'queued',
      created: '2022-06-06T16:18:01.252+00:00',
      pin: {
        cid: 'baeaaadbwgmwdenryguydgmjtgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
      status: 'queued',
      created: '2022-06-06T16:17:52.027+00:00',
      pin: {
        cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
    },
    {
      requestid: 'baeaaadjrgy2teojqheydamjvhayq',
      status: 'failed',
      created: '2022-05-18T21:23:22.497+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydamjvhayq',
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
      requestid: 'baeaaadbwhawdcmbtg44dimjuga',
      status: 'queued',
      created: 2022-06-06T16:18:05.517Z,
      pin: {
        cid: 'baeaaadbwhawdcmbtg44dimjuga',
        name: 'a1f81e3d-969c-4834-b038-13ff64ca2103',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwgmwdenryguydgmjtgq',
      status: 'queued',
      created: 2022-06-06T16:18:01.252Z,
      pin: {
        cid: 'baeaaadbwgmwdenryguydgmjtgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
      status: 'queued',
      created: 2022-06-06T16:17:52.027Z,
      pin: {
        cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
    },
    {
      requestid: 'baeaaadjrgy2teojqheydamjvhayq',
      status: 'failed',
      created: 2022-05-18T21:23:22.497Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydamjvhayq',
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
  "cf-ray": "717276581e17a9fb-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:10 GMT",
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
      "requestid": "baeaaadbwhawdcmbtg44dimjuga",
      "status": "queued",
      "created": "2022-06-06T16:18:05.517+00:00",
      "pin": {
        "cid": "baeaaadbwhawdcmbtg44dimjuga",
        "meta": null,
        "name": "a1f81e3d-969c-4834-b038-13ff64ca2103",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdenryguydgmjtgq",
      "status": "queued",
      "created": "2022-06-06T16:18:01.252+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdenryguydgmjtgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgmwdonbxgq3timbqgu",
      "status": "queued",
      "created": "2022-06-06T16:17:52.027+00:00",
      "pin": {
        "cid": "baeaaadbvgmwdonbxgq3timbqgu",
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
    },
    {
      "requestid": "baeaaadjrgy2teojqheydamjvhayq",
      "status": "failed",
      "created": "2022-05-18T21:23:22.497+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydamjvhayq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Can delete pin with requestid 'baeaaadbxgmwdsnrqhe4tsmjrgy' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxgmwdsnrqhe4tsmjrgy

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxgmwdsnrqhe4tsmjrgy
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
  "cf-ray": "717276a738e19eee-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:22 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxgmwdsnrqgq2dkmbrga' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxgmwdsnrqgq2dkmbrga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxgmwdsnrqgq2dkmbrga
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
  "cf-ray": "717276ad595a0b71-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxgmwdsnjygy4diobzga' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxgmwdsnjygy4diobzga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxgmwdsnjygy4diobzga
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
  "cf-ray": "717276b3aac4aa73-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxgmwdsnjxhe2dgojyge' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxgmwdsnjxhe2dgojyge

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxgmwdsnjxhe2dgojyge
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
  "cf-ray": "717276b9edeeaa40-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxgmwdsnjxge2dknbxgi' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxgmwdsnjxge2dknbxgi

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxgmwdsnjxge2dknbxgi
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
  "cf-ray": "717276c02b772897-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbwhawdcmbtg44dimjuga' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwhawdcmbtg44dimjuga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwhawdcmbtg44dimjuga
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
  "cf-ray": "717276c66d2c0bd8-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbwgmwdenryguydgmjtgq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwgmwdenryguydgmjtgq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgmwdenryguydgmjtgq
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
  "cf-ray": "717276ccaedc676d-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbvgmwdonbxgq3timbqgu' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbvgmwdonbxgq3timbqgu

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbvgmwdonbxgq3timbqgu
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
  "cf-ray": "717276d2ec778157-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqheydcnrwgu4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqheydcnrwgu4q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqheydcnrwgu4q
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
  "cf-ray": "717276d94d22aa73-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqheydcnbqge2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqheydcnbqge2q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqheydcnbqge2q
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
  "cf-ray": "717276df6c6caa1c-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:31 GMT",
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
    },
    {
      requestid: 'baeaaadjrgy2teojqheydamjvhayq',
      status: 'failed',
      created: '2022-05-18T21:23:22.497+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydamjvhayq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tsnzwha3q',
      status: 'failed',
      created: '2022-05-18T21:23:18.723+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tsnzwha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqojvge4a',
      status: 'failed',
      created: '2022-05-18T21:23:10.669+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqojvge4a',
        meta: null,
        name: '7fd9988a-c556-4de4-8e3f-ae9083c3ff93',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqnbvgq4a',
      status: 'failed',
      created: '2022-05-18T21:23:05.572+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqnbvgq4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4toojsgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:00.192+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4toojsgi2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tonrsha3q',
      status: 'failed',
      created: '2022-05-18T21:22:57.638+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqha4tonrsha3q',
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
    },
    {
      requestid: 'baeaaadjrgy2teojqheydamjvhayq',
      status: 'failed',
      created: 2022-05-18T21:23:22.497Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydamjvhayq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tsnzwha3q',
      status: 'failed',
      created: 2022-05-18T21:23:18.723Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tsnzwha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqojvge4a',
      status: 'failed',
      created: 2022-05-18T21:23:10.669Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqojvge4a',
        name: '7fd9988a-c556-4de4-8e3f-ae9083c3ff93',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tqnbvgq4a',
      status: 'failed',
      created: 2022-05-18T21:23:05.572Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tqnbvgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4toojsgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:00.192Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4toojsgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqha4tonrsha3q',
      status: 'failed',
      created: 2022-05-18T21:22:57.638Z,
      pin: {
        cid: 'baeaaadjrgy2teojqha4tonrsha3q',
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
  "cf-ray": "717276e5dee52897-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:33 GMT",
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
    },
    {
      "requestid": "baeaaadjrgy2teojqheydamjvhayq",
      "status": "failed",
      "created": "2022-05-18T21:23:22.497+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqheydamjvhayq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tsnzwha3q",
      "status": "failed",
      "created": "2022-05-18T21:23:18.723+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tsnzwha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tqojvge4a",
      "status": "failed",
      "created": "2022-05-18T21:23:10.669+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tqojvge4a",
        "meta": null,
        "name": "7fd9988a-c556-4de4-8e3f-ae9083c3ff93",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tqnbvgq4a",
      "status": "failed",
      "created": "2022-05-18T21:23:05.572+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tqnbvgq4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4toojsgi2q",
      "status": "failed",
      "created": "2022-05-18T21:23:00.192+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4toojsgi2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teojqha4tonrsha3q",
      "status": "failed",
      "created": "2022-05-18T21:22:57.638+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teojqha4tonrsha3q",
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
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
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:279:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

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
      requestid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
      status: 'queued',
      created: '2022-06-06T16:18:17.367+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
      status: 'queued',
      created: '2022-06-06T16:18:16.019+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgmwdsnjygy4diobzga',
      status: 'queued',
      created: '2022-06-06T16:18:14.751+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnjygy4diobzga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgmwdsnjxhe2dgojyge',
      status: 'queued',
      created: '2022-06-06T16:18:12.672+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnjxhe2dgojyge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgmwdsnjxge2dknbxgi',
      status: 'queued',
      created: '2022-06-06T16:18:11.034+00:00',
      pin: {
        cid: 'baeaaadbxgmwdsnjxge2dknbxgi',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhawdcmbtg44dimjuga',
      status: 'queued',
      created: '2022-06-06T16:18:05.517+00:00',
      pin: {
        cid: 'baeaaadbwhawdcmbtg44dimjuga',
        meta: null,
        name: 'a1f81e3d-969c-4834-b038-13ff64ca2103',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwgmwdenryguydgmjtgq',
      status: 'queued',
      created: '2022-06-06T16:18:01.252+00:00',
      pin: {
        cid: 'baeaaadbwgmwdenryguydgmjtgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
      status: 'queued',
      created: '2022-06-06T16:17:52.027+00:00',
      pin: {
        cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
      requestid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
      status: 'queued',
      created: 2022-06-06T16:18:17.367Z,
      pin: {
        cid: 'baeaaadbxgmwdsnrqhe4tsmjrgy',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
      status: 'queued',
      created: 2022-06-06T16:18:16.019Z,
      pin: {
        cid: 'baeaaadbxgmwdsnrqgq2dkmbrga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgmwdsnjygy4diobzga',
      status: 'queued',
      created: 2022-06-06T16:18:14.751Z,
      pin: {
        cid: 'baeaaadbxgmwdsnjygy4diobzga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgmwdsnjxhe2dgojyge',
      status: 'queued',
      created: 2022-06-06T16:18:12.672Z,
      pin: {
        cid: 'baeaaadbxgmwdsnjxhe2dgojyge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgmwdsnjxge2dknbxgi',
      status: 'queued',
      created: 2022-06-06T16:18:11.034Z,
      pin: {
        cid: 'baeaaadbxgmwdsnjxge2dknbxgi',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhawdcmbtg44dimjuga',
      status: 'queued',
      created: 2022-06-06T16:18:05.517Z,
      pin: {
        cid: 'baeaaadbwhawdcmbtg44dimjuga',
        name: 'a1f81e3d-969c-4834-b038-13ff64ca2103',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwgmwdenryguydgmjtgq',
      status: 'queued',
      created: 2022-06-06T16:18:01.252Z,
      pin: {
        cid: 'baeaaadbwgmwdenryguydgmjtgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbvgmwdonbxgq3timbqgu',
      status: 'queued',
      created: 2022-06-06T16:17:52.027Z,
      pin: {
        cid: 'baeaaadbvgmwdonbxgq3timbqgu',
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
  "cf-ray": "7172769fb90a93da-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 06 Jun 2022 16:18:21 GMT",
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
      "requestid": "baeaaadbxgmwdsnrqhe4tsmjrgy",
      "status": "queued",
      "created": "2022-06-06T16:18:17.367+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnrqhe4tsmjrgy",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgmwdsnrqgq2dkmbrga",
      "status": "queued",
      "created": "2022-06-06T16:18:16.019+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnrqgq2dkmbrga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgmwdsnjygy4diobzga",
      "status": "queued",
      "created": "2022-06-06T16:18:14.751+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnjygy4diobzga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgmwdsnjxhe2dgojyge",
      "status": "queued",
      "created": "2022-06-06T16:18:12.672+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnjxhe2dgojyge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgmwdsnjxge2dknbxgi",
      "status": "queued",
      "created": "2022-06-06T16:18:11.034+00:00",
      "pin": {
        "cid": "baeaaadbxgmwdsnjxge2dknbxgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhawdcmbtg44dimjuga",
      "status": "queued",
      "created": "2022-06-06T16:18:05.517+00:00",
      "pin": {
        "cid": "baeaaadbwhawdcmbtg44dimjuga",
        "meta": null,
        "name": "a1f81e3d-969c-4834-b038-13ff64ca2103",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgmwdenryguydgmjtgq",
      "status": "queued",
      "created": "2022-06-06T16:18:01.252+00:00",
      "pin": {
        "cid": "baeaaadbwgmwdenryguydgmjtgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgmwdonbxgq3timbqgu",
      "status": "queued",
      "created": "2022-06-06T16:17:52.027+00:00",
      "pin": {
        "cid": "baeaaadbvgmwdonbxgq3timbqgu",
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
    }
  ]
}
```
