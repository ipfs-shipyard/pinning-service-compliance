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
  "cf-ray": "7175457b1fe37fee-IAD",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:05 GMT",
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
  "cf-ray": "71754580594359b5-IAD",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:06 GMT",
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
## Pins post of CID 'baeaaadjrguycymrrg44tombsgaza' - ✘ FAILED

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
{"cid":"baeaaadjrguycymrrg44tombsgaza"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrguycymrrg44tombsgaza',
  status: 'queued',
  created: '2022-06-07T00:29:07.546+00:00',
  pin: {
    cid: 'baeaaadjrguycymrrg44tombsgaza',
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
  requestid: 'baeaaadjrguycymrrg44tombsgaza',
  status: 'queued',
  created: 2022-06-07T00:29:07.546Z,
  pin: {
    cid: 'baeaaadjrguycymrrg44tombsgaza',
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
  "cf-ray": "717545869a9c597a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrguycymrrg44tombsgaza",
  "status": "queued",
  "created": "2022-06-07T00:29:07.546+00:00",
  "pin": {
    "cid": "baeaaadjrguycymrrg44tombsgaza",
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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrguzcymzugm4dinbqgazq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrguzcymzugm4dinbqgazq
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
  "cf-ray": "71754596cfec5dd4-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:09 GMT",
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
{"cid":"baeaaadjrguzcymzugm4dinbqgazq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrguzcymzugm4dinbqgazq',
  status: 'queued',
  created: '2022-06-07T00:29:08.748+00:00',
  pin: {
    cid: 'baeaaadjrguzcymzugm4dinbqgazq',
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
  requestid: 'baeaaadjrguzcymzugm4dinbqgazq',
  status: 'queued',
  created: 2022-06-07T00:29:08.748Z,
  pin: {
    cid: 'baeaaadjrguzcymzugm4dinbqgazq',
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
  "cf-ray": "7175458f8d3f5b6a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrguzcymzugm4dinbqgazq",
  "status": "queued",
  "created": "2022-06-07T00:29:08.748+00:00",
  "pin": {
    "cid": "baeaaadjrguzcymzugm4dinbqgazq",
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
      requestid: 'baeaaadjrguycymrrg44tombsgaza',
      status: 'queued',
      created: '2022-06-07T00:29:07.546+00:00',
      pin: {
        cid: 'baeaaadjrguycymrrg44tombsgaza',
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
      requestid: 'baeaaadjrguycymrrg44tombsgaza',
      status: 'queued',
      created: 2022-06-07T00:29:07.546Z,
      pin: {
        cid: 'baeaaadjrguycymrrg44tombsgaza',
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
  "cf-ray": "71754599cf3658c0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:11 GMT",
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
      "requestid": "baeaaadjrguycymrrg44tombsgaza",
      "status": "queued",
      "created": "2022-06-07T00:29:07.546+00:00",
      "pin": {
        "cid": "baeaaadjrguycymrrg44tombsgaza",
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

#### Request - GET: https://nft.storage/api/pins/baeaaadjrgu2symzwheydimzvguza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgu2symzwheydimzvguza
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
  "cf-ray": "717545b7eb01597a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:14 GMT",
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

#### Request - GET: https://nft.storage/api/pins/baeaaadjrgu3cynzuhe2tsobyg42q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgu3cynzuhe2tsobyg42q
```
{
  requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
  status: 'queued',
  created: '2022-06-07T00:29:14.051+00:00',
  pin: {
    cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
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
  requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
  status: 'queued',
  created: 2022-06-07T00:29:14.051Z,
  pin: {
    cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
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
  "cf-ray": "717545be2d155db5-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgu3cynzuhe2tsobyg42q",
  "status": "queued",
  "created": "2022-06-07T00:29:14.051+00:00",
  "pin": {
    "cid": "baeaaadjrgu3cynzuhe2tsobyg42q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjrgu2symzwheydimzvguza' can have cid 'baeaaadjrgu2symzwheydimzvguza' replaced with 'baeaaadjrgu3cynzuhe2tsobyg42q' - ✓ SUCCESS

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

#### Request - POST: https://nft.storage/api/pins/baeaaadjrgu2symzwheydimzvguza

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgu3cynzuhe2tsobyg42q"}
```
#### Response data from https://nft.storage/api/pins/baeaaadjrgu2symzwheydimzvguza
```
{
  requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
  status: 'queued',
  created: '2022-06-07T00:29:14.051+00:00',
  pin: {
    cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
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
  requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
  status: 'queued',
  created: 2022-06-07T00:29:14.051Z,
  pin: {
    cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
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
  "cf-ray": "717545aafda25a34-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:14 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgu3cynzuhe2tsobyg42q",
  "status": "queued",
  "created": "2022-06-07T00:29:14.051+00:00",
  "pin": {
    "cid": "baeaaadjrgu3cynzuhe2tsobyg42q",
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

  ✓ Could obtain requestid from new pin (baeaaadjrgu2symzwheydimzvguza) (success)

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
{"cid":"baeaaadjrgu2symzwheydimzvguza"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgu2symzwheydimzvguza',
  status: 'queued',
  created: '2022-06-07T00:29:11.983+00:00',
  pin: {
    cid: 'baeaaadjrgu2symzwheydimzvguza',
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
  requestid: 'baeaaadjrgu2symzwheydimzvguza',
  status: 'queued',
  created: 2022-06-07T00:29:11.983Z,
  pin: {
    cid: 'baeaaadjrgu2symzwheydimzvguza',
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
  "cf-ray": "717545a25efc5a4c-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgu2symzwheydimzvguza",
  "status": "queued",
  "created": "2022-06-07T00:29:11.983+00:00",
  "pin": {
    "cid": "baeaaadjrgu2symzwheydimzvguza",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can retrieve pin with name '62cffe35-af7d-472f-bfa9-cb9f36b623e1' via the 'exact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=62cffe35-af7d-472f-bfa9-cb9f36b623e1&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=62cffe35-af7d-472f-bfa9-cb9f36b623e1&match=exact
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
  "cf-ray": "717545d4ffc55a4c-IAD",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:19 GMT",
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
## Can retrieve pin with name '62CFFE35-AF7D-472F-BFA9-CB9F36B623E1' via the 'iexact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=62CFFE35-AF7D-472F-BFA9-CB9F36B623E1&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=62CFFE35-AF7D-472F-BFA9-CB9F36B623E1&match=iexact
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
  "cf-ray": "717545d9bad05a34-IAD",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:20 GMT",
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
## Can retrieve pin with name 'af7d-472f-bfa9-cb9' via the 'partial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=af7d-472f-bfa9-cb9&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=af7d-472f-bfa9-cb9&match=partial
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
  "cf-ray": "717545dff9d7579a-IAD",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:21 GMT",
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
## Can retrieve pin with name 'AF7D-472F-BFA9-CB9' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=AF7D-472F-BFA9-CB9&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=AF7D-472F-BFA9-CB9&match=ipartial
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
  "cf-ray": "717545e638a85a27-IAD",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:22 GMT",
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
## Can create a pin with name='62cffe35-af7d-472f-bfa9-cb9f36b623e1' - ✘ FAILED

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
{"cid":"baeaaadjrgyysymrsgaytanjzha2a","name":"62cffe35-af7d-472f-bfa9-cb9f36b623e1"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgyysymrsgaytanjzha2a',
  status: 'queued',
  created: '2022-06-07T00:29:17.485+00:00',
  pin: {
    cid: 'baeaaadjrgyysymrsgaytanjzha2a',
    meta: null,
    name: '62cffe35-af7d-472f-bfa9-cb9f36b623e1',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadjrgyysymrsgaytanjzha2a',
  status: 'queued',
  created: 2022-06-07T00:29:17.485Z,
  pin: {
    cid: 'baeaaadjrgyysymrsgaytanjzha2a',
    name: '62cffe35-af7d-472f-bfa9-cb9f36b623e1',
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
  "cf-ray": "717545c6e979824e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgyysymrsgaytanjzha2a",
  "status": "queued",
  "created": "2022-06-07T00:29:17.485+00:00",
  "pin": {
    "cid": "baeaaadjrgyysymrsgaytanjzha2a",
    "meta": null,
    "name": "62cffe35-af7d-472f-bfa9-cb9f36b623e1",
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgy3synzwg4ztqmbqgmyq' - ✓ SUCCESS

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
{"cid":"baeaaadjrgy3synzwg4ztqmbqgmyq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
  status: 'queued',
  created: '2022-06-07T00:29:24.353+00:00',
  pin: {
    cid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
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
  requestid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
  status: 'queued',
  created: 2022-06-07T00:29:24.353Z,
  pin: {
    cid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
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
  "cf-ray": "717545efdf959c1e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgy3synzwg4ztqmbqgmyq",
  "status": "queued",
  "created": "2022-06-07T00:29:24.353+00:00",
  "pin": {
    "cid": "baeaaadjrgy3synzwg4ztqmbqgmyq",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgy3synzwhaydkojzgm3q' - ✓ SUCCESS

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
{"cid":"baeaaadjrgy3synzwhaydkojzgm3q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgy3synzwhaydkojzgm3q',
  status: 'queued',
  created: '2022-06-07T00:29:25.817+00:00',
  pin: {
    cid: 'baeaaadjrgy3synzwhaydkojzgm3q',
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
  requestid: 'baeaaadjrgy3synzwhaydkojzgm3q',
  status: 'queued',
  created: 2022-06-07T00:29:25.817Z,
  pin: {
    cid: 'baeaaadjrgy3synzwhaydkojzgm3q',
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
  "cf-ray": "717545f84f1c81af-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgy3synzwhaydkojzgm3q",
  "status": "queued",
  "created": "2022-06-07T00:29:25.817+00:00",
  "pin": {
    "cid": "baeaaadjrgy3synzwhaydkojzgm3q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgy3synzwha3dsnzugqza' - ✓ SUCCESS

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
{"cid":"baeaaadjrgy3synzwha3dsnzugqza"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgy3synzwha3dsnzugqza',
  status: 'queued',
  created: '2022-06-07T00:29:26.944+00:00',
  pin: {
    cid: 'baeaaadjrgy3synzwha3dsnzugqza',
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
  requestid: 'baeaaadjrgy3synzwha3dsnzugqza',
  status: 'queued',
  created: 2022-06-07T00:29:26.944Z,
  pin: {
    cid: 'baeaaadjrgy3synzwha3dsnzugqza',
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
  "cf-ray": "71754601ecc35752-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgy3synzwha3dsnzugqza",
  "status": "queued",
  "created": "2022-06-07T00:29:26.944+00:00",
  "pin": {
    "cid": "baeaaadjrgy3synzwha3dsnzugqza",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgy3synzxga2danbxgu3q' - ✓ SUCCESS

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
{"cid":"baeaaadjrgy3synzxga2danbxgu3q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgy3synzxga2danbxgu3q',
  status: 'queued',
  created: '2022-06-07T00:29:28.549+00:00',
  pin: {
    cid: 'baeaaadjrgy3synzxga2danbxgu3q',
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
  requestid: 'baeaaadjrgy3synzxga2danbxgu3q',
  status: 'queued',
  created: 2022-06-07T00:29:28.549Z,
  pin: {
    cid: 'baeaaadjrgy3synzxga2danbxgu3q',
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
  "cf-ray": "7175460a8a265a27-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgy3synzxga2danbxgu3q",
  "status": "queued",
  "created": "2022-06-07T00:29:28.549+00:00",
  "pin": {
    "cid": "baeaaadjrgy3synzxga2danbxgu3q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgy3synzxga4tenrrgyyq' - ✓ SUCCESS

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
{"cid":"baeaaadjrgy3synzxga4tenrrgyyq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgy3synzxga4tenrrgyyq',
  status: 'queued',
  created: '2022-06-07T00:29:29.42+00:00',
  pin: {
    cid: 'baeaaadjrgy3synzxga4tenrrgyyq',
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
  requestid: 'baeaaadjrgy3synzxga4tenrrgyyq',
  status: 'queued',
  created: 2022-06-07T00:29:29.420Z,
  pin: {
    cid: 'baeaaadjrgy3synzxga4tenrrgyyq',
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
  "cf-ray": "717546125de857f6-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgy3synzxga4tenrrgyyq",
  "status": "queued",
  "created": "2022-06-07T00:29:29.42+00:00",
  "pin": {
    "cid": "baeaaadjrgy3synzxga4tenrrgyyq",
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
      requestid: 'baeaaadjrgy3synzxga4tenrrgyyq',
      status: 'queued',
      created: '2022-06-07T00:29:29.42+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzxga4tenrrgyyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy3synzxga2danbxgu3q',
      status: 'queued',
      created: '2022-06-07T00:29:28.549+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzxga2danbxgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy3synzwha3dsnzugqza',
      status: 'queued',
      created: '2022-06-07T00:29:26.944+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzwha3dsnzugqza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy3synzwhaydkojzgm3q',
      status: 'queued',
      created: '2022-06-07T00:29:25.817+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzwhaydkojzgm3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
      status: 'queued',
      created: '2022-06-07T00:29:24.353+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgyysymrsgaytanjzha2a',
      status: 'queued',
      created: '2022-06-07T00:29:17.485+00:00',
      pin: {
        cid: 'baeaaadjrgyysymrsgaytanjzha2a',
        meta: null,
        name: '62cffe35-af7d-472f-bfa9-cb9f36b623e1',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
      status: 'queued',
      created: '2022-06-07T00:29:14.051+00:00',
      pin: {
        cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrguycymrrg44tombsgaza',
      status: 'queued',
      created: '2022-06-07T00:29:07.546+00:00',
      pin: {
        cid: 'baeaaadjrguycymrrg44tombsgaza',
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
      requestid: 'baeaaadjrgy3synzxga4tenrrgyyq',
      status: 'queued',
      created: 2022-06-07T00:29:29.420Z,
      pin: {
        cid: 'baeaaadjrgy3synzxga4tenrrgyyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy3synzxga2danbxgu3q',
      status: 'queued',
      created: 2022-06-07T00:29:28.549Z,
      pin: {
        cid: 'baeaaadjrgy3synzxga2danbxgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy3synzwha3dsnzugqza',
      status: 'queued',
      created: 2022-06-07T00:29:26.944Z,
      pin: {
        cid: 'baeaaadjrgy3synzwha3dsnzugqza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy3synzwhaydkojzgm3q',
      status: 'queued',
      created: 2022-06-07T00:29:25.817Z,
      pin: {
        cid: 'baeaaadjrgy3synzwhaydkojzgm3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
      status: 'queued',
      created: 2022-06-07T00:29:24.353Z,
      pin: {
        cid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgyysymrsgaytanjzha2a',
      status: 'queued',
      created: 2022-06-07T00:29:17.485Z,
      pin: {
        cid: 'baeaaadjrgyysymrsgaytanjzha2a',
        name: '62cffe35-af7d-472f-bfa9-cb9f36b623e1',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
      status: 'queued',
      created: 2022-06-07T00:29:14.051Z,
      pin: {
        cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrguycymrrg44tombsgaza',
      status: 'queued',
      created: 2022-06-07T00:29:07.546Z,
      pin: {
        cid: 'baeaaadjrguycymrrg44tombsgaza',
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
  "cf-ray": "717546179b225c59-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:31 GMT",
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
      "requestid": "baeaaadjrgy3synzxga4tenrrgyyq",
      "status": "queued",
      "created": "2022-06-07T00:29:29.42+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzxga4tenrrgyyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy3synzxga2danbxgu3q",
      "status": "queued",
      "created": "2022-06-07T00:29:28.549+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzxga2danbxgu3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy3synzwha3dsnzugqza",
      "status": "queued",
      "created": "2022-06-07T00:29:26.944+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzwha3dsnzugqza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy3synzwhaydkojzgm3q",
      "status": "queued",
      "created": "2022-06-07T00:29:25.817+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzwhaydkojzgm3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy3synzwg4ztqmbqgmyq",
      "status": "queued",
      "created": "2022-06-07T00:29:24.353+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzwg4ztqmbqgmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgyysymrsgaytanjzha2a",
      "status": "queued",
      "created": "2022-06-07T00:29:17.485+00:00",
      "pin": {
        "cid": "baeaaadjrgyysymrsgaytanjzha2a",
        "meta": null,
        "name": "62cffe35-af7d-472f-bfa9-cb9f36b623e1",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgu3cynzuhe2tsobyg42q",
      "status": "queued",
      "created": "2022-06-07T00:29:14.051+00:00",
      "pin": {
        "cid": "baeaaadjrgu3cynzuhe2tsobyg42q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguycymrrg44tombsgaza",
      "status": "queued",
      "created": "2022-06-07T00:29:07.546+00:00",
      "pin": {
        "cid": "baeaaadjrguycymrrg44tombsgaza",
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
## Pagination: Retrieve the next page of pins - ✘ FAILED

### Expectations (2/3 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✘ The next page of pins doesn't contain any of previous pages pins (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A23%3A25.283Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A23%3A25.283Z
```
{
  count: 10,
  results: [
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
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dqnjzgeyq',
      status: 'failed',
      created: '2022-05-18T18:31:27.052+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzha3dqnjzgeyq',
        meta: null,
        name: 'b2add825-ee46-42f1-80d2-1ff8de9d735d',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dqmbvha2q',
      status: 'failed',
      created: '2022-05-18T18:31:21.772+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzha3dqmbvha2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzha3donbqha2a',
      status: 'failed',
      created: '2022-05-18T18:31:14.981+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzha3donbqha2a',
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
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dqnjzgeyq',
      status: 'failed',
      created: 2022-05-18T18:31:27.052Z,
      pin: {
        cid: 'baeaaadjrgy2teobzha3dqnjzgeyq',
        name: 'b2add825-ee46-42f1-80d2-1ff8de9d735d',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dqmbvha2q',
      status: 'failed',
      created: 2022-05-18T18:31:21.772Z,
      pin: {
        cid: 'baeaaadjrgy2teobzha3dqmbvha2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzha3donbqha2a',
      status: 'failed',
      created: 2022-05-18T18:31:14.981Z,
      pin: {
        cid: 'baeaaadjrgy2teobzha3donbqha2a',
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
  "cf-ray": "7175461e690659c7-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:32 GMT",
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
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dqnjzgeyq",
      "status": "failed",
      "created": "2022-05-18T18:31:27.052+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dqnjzgeyq",
        "meta": null,
        "name": "b2add825-ee46-42f1-80d2-1ff8de9d735d",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dqmbvha2q",
      "status": "failed",
      "created": "2022-05-18T18:31:21.772+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dqmbvha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
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
      requestid: 'baeaaadjrgyysymrsgaytanjzha2a',
      status: 'queued',
      created: '2022-06-07T00:29:17.485+00:00',
      pin: {
        cid: 'baeaaadjrgyysymrsgaytanjzha2a',
        meta: null,
        name: '62cffe35-af7d-472f-bfa9-cb9f36b623e1',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
      status: 'queued',
      created: '2022-06-07T00:29:14.051+00:00',
      pin: {
        cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrguycymrrg44tombsgaza',
      status: 'queued',
      created: '2022-06-07T00:29:07.546+00:00',
      pin: {
        cid: 'baeaaadjrguycymrrg44tombsgaza',
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
      requestid: 'baeaaadjrgyysymrsgaytanjzha2a',
      status: 'queued',
      created: 2022-06-07T00:29:17.485Z,
      pin: {
        cid: 'baeaaadjrgyysymrsgaytanjzha2a',
        name: '62cffe35-af7d-472f-bfa9-cb9f36b623e1',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
      status: 'queued',
      created: 2022-06-07T00:29:14.051Z,
      pin: {
        cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrguycymrrg44tombsgaza',
      status: 'queued',
      created: 2022-06-07T00:29:07.546Z,
      pin: {
        cid: 'baeaaadjrguycymrrg44tombsgaza',
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
  "cf-ray": "717545e83b8a57f6-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:23 GMT",
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
      "requestid": "baeaaadjrgyysymrsgaytanjzha2a",
      "status": "queued",
      "created": "2022-06-07T00:29:17.485+00:00",
      "pin": {
        "cid": "baeaaadjrgyysymrsgaytanjzha2a",
        "meta": null,
        "name": "62cffe35-af7d-472f-bfa9-cb9f36b623e1",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgu3cynzuhe2tsobyg42q",
      "status": "queued",
      "created": "2022-06-07T00:29:14.051+00:00",
      "pin": {
        "cid": "baeaaadjrgu3cynzuhe2tsobyg42q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguycymrrg44tombsgaza",
      "status": "queued",
      "created": "2022-06-07T00:29:07.546+00:00",
      "pin": {
        "cid": "baeaaadjrguycymrrg44tombsgaza",
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
## Can delete pin with requestid 'baeaaadjrgy3synzxga4tenrrgyyq' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy3synzxga4tenrrgyyq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy3synzxga4tenrrgyyq
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
  "cf-ray": "7175462ebe1acf08-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy3synzxga2danbxgu3q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy3synzxga2danbxgu3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy3synzxga2danbxgu3q
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
  "cf-ray": "71754634df855dc7-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy3synzwha3dsnzugqza' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy3synzwha3dsnzugqza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy3synzwha3dsnzugqza
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
  "cf-ray": "7175463b3c5457f6-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy3synzwhaydkojzgm3q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy3synzwhaydkojzgm3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy3synzwhaydkojzgm3q
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
  "cf-ray": "7175464158ad81c4-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy3synzwg4ztqmbqgmyq' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy3synzwg4ztqmbqgmyq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy3synzwg4ztqmbqgmyq
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
  "cf-ray": "71754647b8fb59c7-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgyysymrsgaytanjzha2a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgyysymrsgaytanjzha2a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgyysymrsgaytanjzha2a
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
  "cf-ray": "7175464ddf6a584e-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgu3cynzuhe2tsobyg42q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgu3cynzuhe2tsobyg42q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgu3cynzuhe2tsobyg42q
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
  "cf-ray": "717546541f6a596d-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrguycymrrg44tombsgaza' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrguycymrrg44tombsgaza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrguycymrrg44tombsgaza
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
  "cf-ray": "7175465a5fa781d6-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqheydanrvgyya' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqheydanrvgyya

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqheydanrvgyya
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
  "cf-ray": "717546609fef57f6-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqheydanbrge3q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqheydanbrge3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqheydanbrge3q
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
  "cf-ray": "71754666da935aec-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:43 GMT",
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
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dqnjzgeyq',
      status: 'failed',
      created: '2022-05-18T18:31:27.052+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzha3dqnjzgeyq',
        meta: null,
        name: 'b2add825-ee46-42f1-80d2-1ff8de9d735d',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dqmbvha2q',
      status: 'failed',
      created: '2022-05-18T18:31:21.772+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzha3dqmbvha2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzha3donbqha2a',
      status: 'failed',
      created: '2022-05-18T18:31:14.981+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzha3donbqha2a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dombxgaza',
      status: 'failed',
      created: '2022-05-18T18:31:12.22+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzha3dombxgaza',
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
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dqnjzgeyq',
      status: 'failed',
      created: 2022-05-18T18:31:27.052Z,
      pin: {
        cid: 'baeaaadjrgy2teobzha3dqnjzgeyq',
        name: 'b2add825-ee46-42f1-80d2-1ff8de9d735d',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dqmbvha2q',
      status: 'failed',
      created: 2022-05-18T18:31:21.772Z,
      pin: {
        cid: 'baeaaadjrgy2teobzha3dqmbvha2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzha3donbqha2a',
      status: 'failed',
      created: 2022-05-18T18:31:14.981Z,
      pin: {
        cid: 'baeaaadjrgy2teobzha3donbqha2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzha3dombxgaza',
      status: 'failed',
      created: 2022-05-18T18:31:12.220Z,
      pin: {
        cid: 'baeaaadjrgy2teobzha3dombxgaza',
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
  "cf-ray": "7175466d1a6e5ae7-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:44 GMT",
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
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dqnjzgeyq",
      "status": "failed",
      "created": "2022-05-18T18:31:27.052+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dqnjzgeyq",
        "meta": null,
        "name": "b2add825-ee46-42f1-80d2-1ff8de9d735d",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dqmbvha2q",
      "status": "failed",
      "created": "2022-05-18T18:31:21.772+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dqmbvha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
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
      requestid: 'baeaaadjrgy3synzxga4tenrrgyyq',
      status: 'queued',
      created: '2022-06-07T00:29:29.42+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzxga4tenrrgyyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy3synzxga2danbxgu3q',
      status: 'queued',
      created: '2022-06-07T00:29:28.549+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzxga2danbxgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy3synzwha3dsnzugqza',
      status: 'queued',
      created: '2022-06-07T00:29:26.944+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzwha3dsnzugqza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy3synzwhaydkojzgm3q',
      status: 'queued',
      created: '2022-06-07T00:29:25.817+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzwhaydkojzgm3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
      status: 'queued',
      created: '2022-06-07T00:29:24.353+00:00',
      pin: {
        cid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgyysymrsgaytanjzha2a',
      status: 'queued',
      created: '2022-06-07T00:29:17.485+00:00',
      pin: {
        cid: 'baeaaadjrgyysymrsgaytanjzha2a',
        meta: null,
        name: '62cffe35-af7d-472f-bfa9-cb9f36b623e1',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
      status: 'queued',
      created: '2022-06-07T00:29:14.051+00:00',
      pin: {
        cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrguycymrrg44tombsgaza',
      status: 'queued',
      created: '2022-06-07T00:29:07.546+00:00',
      pin: {
        cid: 'baeaaadjrguycymrrg44tombsgaza',
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
      requestid: 'baeaaadjrgy3synzxga4tenrrgyyq',
      status: 'queued',
      created: 2022-06-07T00:29:29.420Z,
      pin: {
        cid: 'baeaaadjrgy3synzxga4tenrrgyyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy3synzxga2danbxgu3q',
      status: 'queued',
      created: 2022-06-07T00:29:28.549Z,
      pin: {
        cid: 'baeaaadjrgy3synzxga2danbxgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy3synzwha3dsnzugqza',
      status: 'queued',
      created: 2022-06-07T00:29:26.944Z,
      pin: {
        cid: 'baeaaadjrgy3synzwha3dsnzugqza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy3synzwhaydkojzgm3q',
      status: 'queued',
      created: 2022-06-07T00:29:25.817Z,
      pin: {
        cid: 'baeaaadjrgy3synzwhaydkojzgm3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
      status: 'queued',
      created: 2022-06-07T00:29:24.353Z,
      pin: {
        cid: 'baeaaadjrgy3synzwg4ztqmbqgmyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgyysymrsgaytanjzha2a',
      status: 'queued',
      created: 2022-06-07T00:29:17.485Z,
      pin: {
        cid: 'baeaaadjrgyysymrsgaytanjzha2a',
        name: '62cffe35-af7d-472f-bfa9-cb9f36b623e1',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
      status: 'queued',
      created: 2022-06-07T00:29:14.051Z,
      pin: {
        cid: 'baeaaadjrgu3cynzuhe2tsobyg42q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrguycymrrg44tombsgaza',
      status: 'queued',
      created: 2022-06-07T00:29:07.546Z,
      pin: {
        cid: 'baeaaadjrguycymrrg44tombsgaza',
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
  "cf-ray": "717546264ebf596d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:29:33 GMT",
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
      "requestid": "baeaaadjrgy3synzxga4tenrrgyyq",
      "status": "queued",
      "created": "2022-06-07T00:29:29.42+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzxga4tenrrgyyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy3synzxga2danbxgu3q",
      "status": "queued",
      "created": "2022-06-07T00:29:28.549+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzxga2danbxgu3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy3synzwha3dsnzugqza",
      "status": "queued",
      "created": "2022-06-07T00:29:26.944+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzwha3dsnzugqza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy3synzwhaydkojzgm3q",
      "status": "queued",
      "created": "2022-06-07T00:29:25.817+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzwhaydkojzgm3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy3synzwg4ztqmbqgmyq",
      "status": "queued",
      "created": "2022-06-07T00:29:24.353+00:00",
      "pin": {
        "cid": "baeaaadjrgy3synzwg4ztqmbqgmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgyysymrsgaytanjzha2a",
      "status": "queued",
      "created": "2022-06-07T00:29:17.485+00:00",
      "pin": {
        "cid": "baeaaadjrgyysymrsgaytanjzha2a",
        "meta": null,
        "name": "62cffe35-af7d-472f-bfa9-cb9f36b623e1",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgu3cynzuhe2tsobyg42q",
      "status": "queued",
      "created": "2022-06-07T00:29:14.051+00:00",
      "pin": {
        "cid": "baeaaadjrgu3cynzuhe2tsobyg42q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguycymrrg44tombsgaza",
      "status": "queued",
      "created": "2022-06-07T00:29:07.546+00:00",
      "pin": {
        "cid": "baeaaadjrguycymrrg44tombsgaza",
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
