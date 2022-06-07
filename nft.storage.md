
# https://nft.storage/api compliance:

Execution Date: 2022-06-07T23:41:54.288Z

Revision: [9dfaf6c](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/9dfaf6c)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ✘ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ✘ [Request with invalid token](#request-with-invalid-token----failed)

  ✘ [Pins post of CID 'baeaaadjshe3cynzsge4temzqgu4a'](#pins-post-of-cid-baeaaadjshe3cynzsge4temzqgu4a----failed)

  ✓ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ✘ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ✓ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ✓ [Can create a pin with name='0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61'](#can-create-a-pin-with-name0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61----success)

  ✘ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ✘ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Response object doesn't match expected schema:

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
  "cf-ray": "717d3ca2cc850bcf-DFW",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:09 GMT",
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

#### Response object doesn't match expected schema:

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
  "cf-ray": "717d3ca7efe22845-DFW",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:09 GMT",
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
## Pins post of CID 'baeaaadjshe3cynzsge4temzqgu4a' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✓ Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

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
{"cid":"baeaaadjshe3cynzsge4temzqgu4a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
  status: 'queued',
  created: '2022-06-07T23:41:11.669+00:00',
  pin: {
    cid: 'baeaaadjshe3cynzsge4temzqgu4a',
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
  requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
  status: 'queued',
  created: 2022-06-07T23:41:11.669Z,
  pin: {
    cid: 'baeaaadjshe3cynzsge4temzqgu4a',
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
  "cf-ray": "717d3cae2ff2aa4b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjshe3cynzsge4temzqgu4a",
  "status": "queued",
  "created": "2022-06-07T23:41:11.669+00:00",
  "pin": {
    "cid": "baeaaadjshe3cynzsge4temzqgu4a",
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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjshe4synrwgizdimbrgy3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjshe4synrwgizdimbrgy3q
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
  "cf-ray": "717d3cc6992c2877-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:15 GMT",
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
{"cid":"baeaaadjshe4synrwgizdimbrgy3q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjshe4synrwgizdimbrgy3q',
  status: 'queued',
  created: '2022-06-07T23:41:13.364+00:00',
  pin: {
    cid: 'baeaaadjshe4synrwgizdimbrgy3q',
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
  requestid: 'baeaaadjshe4synrwgizdimbrgy3q',
  status: 'queued',
  created: 2022-06-07T23:41:13.364Z,
  pin: {
    cid: 'baeaaadjshe4synrwgizdimbrgy3q',
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
  "cf-ray": "717d3cbc0d13aa7c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:14 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjshe4synrwgizdimbrgy3q",
  "status": "queued",
  "created": "2022-06-07T23:41:13.364+00:00",
  "pin": {
    "cid": "baeaaadjshe4synrwgizdimbrgy3q",
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




#### Response object doesn't match expected schema:

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
      requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
      status: 'queued',
      created: '2022-06-07T23:41:11.669+00:00',
      pin: {
        cid: 'baeaaadjshe3cynzsge4temzqgu4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'pinning',
      created: '2022-06-07T20:19:15.705+00:00',
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: '2022-06-07T20:19:06.553+00:00',
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
      requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
      status: 'queued',
      created: 2022-06-07T23:41:11.669Z,
      pin: {
        cid: 'baeaaadjshe3cynzsge4temzqgu4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'pinning',
      created: 2022-06-07T20:19:15.705Z,
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: 2022-06-07T20:19:06.553Z,
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
  "cf-ray": "717d3cca78ca0b7a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:16 GMT",
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
      "requestid": "baeaaadjshe3cynzsge4temzqgu4a",
      "status": "queued",
      "created": "2022-06-07T23:41:11.669+00:00",
      "pin": {
        "cid": "baeaaadjshe3cynzsge4temzqgu4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhewdgobtgu4tqnrqgm",
      "status": "pinning",
      "created": "2022-06-07T20:19:15.705+00:00",
      "pin": {
        "cid": "baeaaadbwhewdgobtgu4tqnrqgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgawdgmbtge4dcnjz",
      "status": "pinning",
      "created": "2022-06-07T20:19:06.553+00:00",
      "pin": {
        "cid": "baeaaaczwgawdgmbtge4dcnjz",
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


### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadjtgazsynbvgiydmmrsgqza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtgazsynbvgiydmmrsgqza
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
  "cf-ray": "717d3cf48c62aa7c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:22 GMT",
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





### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadjtga2synrugy3dkojsgu3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtga2synrugy3dkojsgu3q
```
{
  requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
  status: 'queued',
  created: '2022-06-07T23:41:20.718+00:00',
  pin: {
    cid: 'baeaaadjtga2synrugy3dkojsgu3q',
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
  requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
  status: 'queued',
  created: 2022-06-07T23:41:20.718Z,
  pin: {
    cid: 'baeaaadjtga2synrugy3dkojsgu3q',
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
  "cf-ray": "717d3cfadbf10b7a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtga2synrugy3dkojsgu3q",
  "status": "queued",
  "created": "2022-06-07T23:41:20.718+00:00",
  "pin": {
    "cid": "baeaaadjtga2synrugy3dkojsgu3q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjtgazsynbvgiydmmrsgqza' can have cid 'baeaaadjtgazsynbvgiydmmrsgqza' replaced with 'baeaaadjtga2synrugy3dkojsgu3q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://nft.storage/api/pins/baeaaadjtgazsynbvgiydmmrsgqza

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtga2synrugy3dkojsgu3q"}
```
#### Response data from https://nft.storage/api/pins/baeaaadjtgazsynbvgiydmmrsgqza
```
{
  requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
  status: 'queued',
  created: '2022-06-07T23:41:20.718+00:00',
  pin: {
    cid: 'baeaaadjtga2synrugy3dkojsgu3q',
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
  requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
  status: 'queued',
  created: 2022-06-07T23:41:20.718Z,
  pin: {
    cid: 'baeaaadjtga2synrugy3dkojsgu3q',
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
  "cf-ray": "717d3ce16a810e6a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtga2synrugy3dkojsgu3q",
  "status": "queued",
  "created": "2022-06-07T23:41:20.718+00:00",
  "pin": {
    "cid": "baeaaadjtga2synrugy3dkojsgu3q",
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

  ✓ Could obtain requestid from new pin (baeaaadjtgazsynbvgiydmmrsgqza) (success)

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
{"cid":"baeaaadjtgazsynbvgiydmmrsgqza"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjtgazsynbvgiydmmrsgqza',
  status: 'queued',
  created: '2022-06-07T23:41:17.411+00:00',
  pin: {
    cid: 'baeaaadjtgazsynbvgiydmmrsgqza',
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
  requestid: 'baeaaadjtgazsynbvgiydmmrsgqza',
  status: 'queued',
  created: 2022-06-07T23:41:17.411Z,
  pin: {
    cid: 'baeaaadjtgazsynbvgiydmmrsgqza',
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
  "cf-ray": "717d3cd3dced2845-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgazsynbvgiydmmrsgqza",
  "status": "queued",
  "created": "2022-06-07T23:41:17.411+00:00",
  "pin": {
    "cid": "baeaaadjtgazsynbvgiydmmrsgqza",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can retrieve pin with name '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61&match=exact
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "717d3d0e5c380f46-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:27 GMT",
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
## Can retrieve pin with name '0A2A4B6C-8ED9-4AAB-BC1C-5AF509CFED61' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=0A2A4B6C-8ED9-4AAB-BC1C-5AF509CFED61&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=0A2A4B6C-8ED9-4AAB-BC1C-5AF509CFED61&match=iexact
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "717d3d168e010b8a-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:28 GMT",
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
## Can retrieve pin with name '8ed9-4aab-bc1c-5af' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=8ed9-4aab-bc1c-5af&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=8ed9-4aab-bc1c-5af&match=partial
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "717d3d1f1d1faa7c-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:29 GMT",
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
## Can retrieve pin with name '8ED9-4AAB-BC1C-5AF' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=8ED9-4AAB-BC1C-5AF&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=8ED9-4AAB-BC1C-5AF&match=ipartial
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "717d3d25eced0e6a-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:31 GMT",
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
## Can create a pin with name='0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61' - ✓ SUCCESS

### Expectations (11/11 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Name matches name provided during creation (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





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
{"cid":"baeaaadjtgeycyojthazdcmzug44a","name":"0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjtgeycyojthazdcmzug44a',
  status: 'queued',
  created: '2022-06-07T23:41:25.103+00:00',
  pin: {
    cid: 'baeaaadjtgeycyojthazdcmzug44a',
    meta: null,
    name: '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadjtgeycyojthazdcmzug44a',
  status: 'queued',
  created: 2022-06-07T23:41:25.103Z,
  pin: {
    cid: 'baeaaadjtgeycyojthazdcmzug44a',
    name: '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61',
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
  "cf-ray": "717d3d028beb9f0c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgeycyojthazdcmzug44a",
  "status": "queued",
  "created": "2022-06-07T23:41:25.103+00:00",
  "pin": {
    "cid": "baeaaadjtgeycyojthazdcmzug44a",
    "meta": null,
    "name": "0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61",
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtge4symjzgi2dcmrsha3q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





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
{"cid":"baeaaadjtge4symjzgi2dcmrsha3q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjtge4symjzgi2dcmrsha3q',
  status: 'queued',
  created: '2022-06-07T23:41:33.245+00:00',
  pin: {
    cid: 'baeaaadjtge4symjzgi2dcmrsha3q',
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
  requestid: 'baeaaadjtge4symjzgi2dcmrsha3q',
  status: 'queued',
  created: 2022-06-07T23:41:33.245Z,
  pin: {
    cid: 'baeaaadjtge4symjzgi2dcmrsha3q',
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
  "cf-ray": "717d3d36183faa1f-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtge4symjzgi2dcmrsha3q",
  "status": "queued",
  "created": "2022-06-07T23:41:33.245+00:00",
  "pin": {
    "cid": "baeaaadjtge4symjzgi2dcmrsha3q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtge4symjzgmztgnzthezq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





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
{"cid":"baeaaadjtge4symjzgmztgnzthezq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjtge4symjzgmztgnzthezq',
  status: 'queued',
  created: '2022-06-07T23:41:34.723+00:00',
  pin: {
    cid: 'baeaaadjtge4symjzgmztgnzthezq',
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
  requestid: 'baeaaadjtge4symjzgmztgnzthezq',
  status: 'queued',
  created: 2022-06-07T23:41:34.723Z,
  pin: {
    cid: 'baeaaadjtge4symjzgmztgnzthezq',
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
  "cf-ray": "717d3d4258ae0f46-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtge4symjzgmztgnzthezq",
  "status": "queued",
  "created": "2022-06-07T23:41:34.723+00:00",
  "pin": {
    "cid": "baeaaadjtge4symjzgmztgnzthezq",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtge4symjzgqzdcojvhe4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





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
{"cid":"baeaaadjtge4symjzgqzdcojvhe4q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjtge4symjzgqzdcojvhe4q',
  status: 'queued',
  created: '2022-06-07T23:41:36.055+00:00',
  pin: {
    cid: 'baeaaadjtge4symjzgqzdcojvhe4q',
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
  requestid: 'baeaaadjtge4symjzgqzdcojvhe4q',
  status: 'queued',
  created: 2022-06-07T23:41:36.055Z,
  pin: {
    cid: 'baeaaadjtge4symjzgqzdcojvhe4q',
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
  "cf-ray": "717d3d4a2c960b8a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtge4symjzgqzdcojvhe4q",
  "status": "queued",
  "created": "2022-06-07T23:41:36.055+00:00",
  "pin": {
    "cid": "baeaaadjtge4symjzgqzdcojvhe4q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtge4symjzgyzdcmjugeyq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





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
{"cid":"baeaaadjtge4symjzgyzdcmjugeyq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjtge4symjzgyzdcmjugeyq',
  status: 'queued',
  created: '2022-06-07T23:41:37.319+00:00',
  pin: {
    cid: 'baeaaadjtge4symjzgyzdcmjugeyq',
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
  requestid: 'baeaaadjtge4symjzgyzdcmjugeyq',
  status: 'queued',
  created: 2022-06-07T23:41:37.319Z,
  pin: {
    cid: 'baeaaadjtge4symjzgyzdcmjugeyq',
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
  "cf-ray": "717d3d516a80aa8e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtge4symjzgyzdcmjugeyq",
  "status": "queued",
  "created": "2022-06-07T23:41:37.319+00:00",
  "pin": {
    "cid": "baeaaadjtge4symjzgyzdcmjugeyq",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtge4symjzgy3tsnbxge2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





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
{"cid":"baeaaadjtge4symjzgy3tsnbxge2q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjtge4symjzgy3tsnbxge2q',
  status: 'queued',
  created: '2022-06-07T23:41:38.814+00:00',
  pin: {
    cid: 'baeaaadjtge4symjzgy3tsnbxge2q',
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
  requestid: 'baeaaadjtge4symjzgy3tsnbxge2q',
  status: 'queued',
  created: 2022-06-07T23:41:38.814Z,
  pin: {
    cid: 'baeaaadjtge4symjzgy3tsnbxge2q',
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
  "cf-ray": "717d3d5bd93c0e6a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtge4symjzgy3tsnbxge2q",
  "status": "queued",
  "created": "2022-06-07T23:41:38.814+00:00",
  "pin": {
    "cid": "baeaaadjtge4symjzgy3tsnbxge2q",
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
      requestid: 'baeaaadjtge4symjzgy3tsnbxge2q',
      status: 'queued',
      created: '2022-06-07T23:41:38.814+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgy3tsnbxge2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtge4symjzgyzdcmjugeyq',
      status: 'queued',
      created: '2022-06-07T23:41:37.319+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgyzdcmjugeyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtge4symjzgqzdcojvhe4q',
      status: 'queued',
      created: '2022-06-07T23:41:36.055+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgqzdcojvhe4q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtge4symjzgmztgnzthezq',
      status: 'queued',
      created: '2022-06-07T23:41:34.723+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgmztgnzthezq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtge4symjzgi2dcmrsha3q',
      status: 'queued',
      created: '2022-06-07T23:41:33.245+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgi2dcmrsha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgeycyojthazdcmzug44a',
      status: 'queued',
      created: '2022-06-07T23:41:25.103+00:00',
      pin: {
        cid: 'baeaaadjtgeycyojthazdcmzug44a',
        meta: null,
        name: '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
      status: 'queued',
      created: '2022-06-07T23:41:20.718+00:00',
      pin: {
        cid: 'baeaaadjtga2synrugy3dkojsgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
      status: 'queued',
      created: '2022-06-07T23:41:11.669+00:00',
      pin: {
        cid: 'baeaaadjshe3cynzsge4temzqgu4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'pinning',
      created: '2022-06-07T20:19:15.705+00:00',
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: '2022-06-07T20:19:06.553+00:00',
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
      requestid: 'baeaaadjtge4symjzgy3tsnbxge2q',
      status: 'queued',
      created: 2022-06-07T23:41:38.814Z,
      pin: {
        cid: 'baeaaadjtge4symjzgy3tsnbxge2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtge4symjzgyzdcmjugeyq',
      status: 'queued',
      created: 2022-06-07T23:41:37.319Z,
      pin: {
        cid: 'baeaaadjtge4symjzgyzdcmjugeyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtge4symjzgqzdcojvhe4q',
      status: 'queued',
      created: 2022-06-07T23:41:36.055Z,
      pin: {
        cid: 'baeaaadjtge4symjzgqzdcojvhe4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtge4symjzgmztgnzthezq',
      status: 'queued',
      created: 2022-06-07T23:41:34.723Z,
      pin: {
        cid: 'baeaaadjtge4symjzgmztgnzthezq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtge4symjzgi2dcmrsha3q',
      status: 'queued',
      created: 2022-06-07T23:41:33.245Z,
      pin: {
        cid: 'baeaaadjtge4symjzgi2dcmrsha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgeycyojthazdcmzug44a',
      status: 'queued',
      created: 2022-06-07T23:41:25.103Z,
      pin: {
        cid: 'baeaaadjtgeycyojthazdcmzug44a',
        name: '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
      status: 'queued',
      created: 2022-06-07T23:41:20.718Z,
      pin: {
        cid: 'baeaaadjtga2synrugy3dkojsgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
      status: 'queued',
      created: 2022-06-07T23:41:11.669Z,
      pin: {
        cid: 'baeaaadjshe3cynzsge4temzqgu4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'pinning',
      created: 2022-06-07T20:19:15.705Z,
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: 2022-06-07T20:19:06.553Z,
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
  "cf-ray": "717d3d649c1a66dd-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:40 GMT",
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
      "requestid": "baeaaadjtge4symjzgy3tsnbxge2q",
      "status": "queued",
      "created": "2022-06-07T23:41:38.814+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgy3tsnbxge2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge4symjzgyzdcmjugeyq",
      "status": "queued",
      "created": "2022-06-07T23:41:37.319+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgyzdcmjugeyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge4symjzgqzdcojvhe4q",
      "status": "queued",
      "created": "2022-06-07T23:41:36.055+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgqzdcojvhe4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge4symjzgmztgnzthezq",
      "status": "queued",
      "created": "2022-06-07T23:41:34.723+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgmztgnzthezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge4symjzgi2dcmrsha3q",
      "status": "queued",
      "created": "2022-06-07T23:41:33.245+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgi2dcmrsha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgeycyojthazdcmzug44a",
      "status": "queued",
      "created": "2022-06-07T23:41:25.103+00:00",
      "pin": {
        "cid": "baeaaadjtgeycyojthazdcmzug44a",
        "meta": null,
        "name": "0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtga2synrugy3dkojsgu3q",
      "status": "queued",
      "created": "2022-06-07T23:41:20.718+00:00",
      "pin": {
        "cid": "baeaaadjtga2synrugy3dkojsgu3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjshe3cynzsge4temzqgu4a",
      "status": "queued",
      "created": "2022-06-07T23:41:11.669+00:00",
      "pin": {
        "cid": "baeaaadjshe3cynzsge4temzqgu4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhewdgobtgu4tqnrqgm",
      "status": "pinning",
      "created": "2022-06-07T20:19:15.705+00:00",
      "pin": {
        "cid": "baeaaadbwhewdgobtgu4tqnrqgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgawdgmbtge4dcnjz",
      "status": "pinning",
      "created": "2022-06-07T20:19:06.553+00:00",
      "pin": {
        "cid": "baeaaaczwgawdgmbtge4dcnjz",
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





### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T20%3A19%3A06.553Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T20%3A19%3A06.553Z
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: '2022-06-07T20:19:06.553+00:00',
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: 2022-06-07T20:19:06.553Z,
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
  "cf-ray": "717d3d6b5d0728b3-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:42 GMT",
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
      "requestid": "baeaaaczwgawdgmbtge4dcnjz",
      "status": "pinning",
      "created": "2022-06-07T20:19:06.553+00:00",
      "pin": {
        "cid": "baeaaaczwgawdgmbtge4dcnjz",
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
      requestid: 'baeaaadjtgeycyojthazdcmzug44a',
      status: 'queued',
      created: '2022-06-07T23:41:25.103+00:00',
      pin: {
        cid: 'baeaaadjtgeycyojthazdcmzug44a',
        meta: null,
        name: '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
      status: 'queued',
      created: '2022-06-07T23:41:20.718+00:00',
      pin: {
        cid: 'baeaaadjtga2synrugy3dkojsgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
      status: 'queued',
      created: '2022-06-07T23:41:11.669+00:00',
      pin: {
        cid: 'baeaaadjshe3cynzsge4temzqgu4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'pinning',
      created: '2022-06-07T20:19:15.705+00:00',
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: '2022-06-07T20:19:06.553+00:00',
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
      requestid: 'baeaaadjtgeycyojthazdcmzug44a',
      status: 'queued',
      created: 2022-06-07T23:41:25.103Z,
      pin: {
        cid: 'baeaaadjtgeycyojthazdcmzug44a',
        name: '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
      status: 'queued',
      created: 2022-06-07T23:41:20.718Z,
      pin: {
        cid: 'baeaaadjtga2synrugy3dkojsgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
      status: 'queued',
      created: 2022-06-07T23:41:11.669Z,
      pin: {
        cid: 'baeaaadjshe3cynzsge4temzqgu4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'pinning',
      created: 2022-06-07T20:19:15.705Z,
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: 2022-06-07T20:19:06.553Z,
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
  "cf-ray": "717d3d2eba690b7a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:32 GMT",
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
      "requestid": "baeaaadjtgeycyojthazdcmzug44a",
      "status": "queued",
      "created": "2022-06-07T23:41:25.103+00:00",
      "pin": {
        "cid": "baeaaadjtgeycyojthazdcmzug44a",
        "meta": null,
        "name": "0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtga2synrugy3dkojsgu3q",
      "status": "queued",
      "created": "2022-06-07T23:41:20.718+00:00",
      "pin": {
        "cid": "baeaaadjtga2synrugy3dkojsgu3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjshe3cynzsge4temzqgu4a",
      "status": "queued",
      "created": "2022-06-07T23:41:11.669+00:00",
      "pin": {
        "cid": "baeaaadjshe3cynzsge4temzqgu4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhewdgobtgu4tqnrqgm",
      "status": "pinning",
      "created": "2022-06-07T20:19:15.705+00:00",
      "pin": {
        "cid": "baeaaadbwhewdgobtgu4tqnrqgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgawdgmbtge4dcnjz",
      "status": "pinning",
      "created": "2022-06-07T20:19:06.553+00:00",
      "pin": {
        "cid": "baeaaaczwgawdgmbtge4dcnjz",
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
## Can delete pin with requestid 'baeaaadjtge4symjzgy3tsnbxge2q' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtge4symjzgy3tsnbxge2q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtge4symjzgy3tsnbxge2q
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
  "cf-ray": "717d3d7a8a42a9f8-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjtge4symjzgyzdcmjugeyq' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtge4symjzgyzdcmjugeyq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtge4symjzgyzdcmjugeyq
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
  "cf-ray": "717d3d80dbefaa03-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjtge4symjzgqzdcojvhe4q' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtge4symjzgqzdcojvhe4q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtge4symjzgqzdcojvhe4q
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
  "cf-ray": "717d3d8718df9f31-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjtge4symjzgmztgnzthezq' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtge4symjzgmztgnzthezq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtge4symjzgmztgnzthezq
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
  "cf-ray": "717d3d8d4f992851-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjtge4symjzgi2dcmrsha3q' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtge4symjzgi2dcmrsha3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtge4symjzgi2dcmrsha3q
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
  "cf-ray": "717d3d9388462848-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:47 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjtgeycyojthazdcmzug44a' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtgeycyojthazdcmzug44a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtgeycyojthazdcmzug44a
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
  "cf-ray": "717d3d99c909284b-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjtga2synrugy3dkojsgu3q' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtga2synrugy3dkojsgu3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtga2synrugy3dkojsgu3q
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
  "cf-ray": "717d3da02c9928b3-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjshe3cynzsge4temzqgu4a' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjshe3cynzsge4temzqgu4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjshe3cynzsge4temzqgu4a
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
  "cf-ray": "717d3da64df7aa7c-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbwhewdgobtgu4tqnrqgm' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwhewdgobtgu4tqnrqgm

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwhewdgobtgu4tqnrqgm
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
  "cf-ray": "717d3daca83faa03-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaaczwgawdgmbtge4dcnjz' - ✓ SUCCESS

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


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaaczwgawdgmbtge4dcnjz

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaaczwgawdgmbtge4dcnjz
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
  "cf-ray": "717d3db2ce0b9f06-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:52 GMT",
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
  "cf-ray": "717d3db90a4b2851-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:54 GMT",
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
      requestid: 'baeaaadjtge4symjzgy3tsnbxge2q',
      status: 'queued',
      created: '2022-06-07T23:41:38.814+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgy3tsnbxge2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtge4symjzgyzdcmjugeyq',
      status: 'queued',
      created: '2022-06-07T23:41:37.319+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgyzdcmjugeyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtge4symjzgqzdcojvhe4q',
      status: 'queued',
      created: '2022-06-07T23:41:36.055+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgqzdcojvhe4q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtge4symjzgmztgnzthezq',
      status: 'queued',
      created: '2022-06-07T23:41:34.723+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgmztgnzthezq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtge4symjzgi2dcmrsha3q',
      status: 'queued',
      created: '2022-06-07T23:41:33.245+00:00',
      pin: {
        cid: 'baeaaadjtge4symjzgi2dcmrsha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgeycyojthazdcmzug44a',
      status: 'queued',
      created: '2022-06-07T23:41:25.103+00:00',
      pin: {
        cid: 'baeaaadjtgeycyojthazdcmzug44a',
        meta: null,
        name: '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
      status: 'queued',
      created: '2022-06-07T23:41:20.718+00:00',
      pin: {
        cid: 'baeaaadjtga2synrugy3dkojsgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
      status: 'queued',
      created: '2022-06-07T23:41:11.669+00:00',
      pin: {
        cid: 'baeaaadjshe3cynzsge4temzqgu4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'pinning',
      created: '2022-06-07T20:19:15.705+00:00',
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: '2022-06-07T20:19:06.553+00:00',
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
      requestid: 'baeaaadjtge4symjzgy3tsnbxge2q',
      status: 'queued',
      created: 2022-06-07T23:41:38.814Z,
      pin: {
        cid: 'baeaaadjtge4symjzgy3tsnbxge2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtge4symjzgyzdcmjugeyq',
      status: 'queued',
      created: 2022-06-07T23:41:37.319Z,
      pin: {
        cid: 'baeaaadjtge4symjzgyzdcmjugeyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtge4symjzgqzdcojvhe4q',
      status: 'queued',
      created: 2022-06-07T23:41:36.055Z,
      pin: {
        cid: 'baeaaadjtge4symjzgqzdcojvhe4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtge4symjzgmztgnzthezq',
      status: 'queued',
      created: 2022-06-07T23:41:34.723Z,
      pin: {
        cid: 'baeaaadjtge4symjzgmztgnzthezq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtge4symjzgi2dcmrsha3q',
      status: 'queued',
      created: 2022-06-07T23:41:33.245Z,
      pin: {
        cid: 'baeaaadjtge4symjzgi2dcmrsha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgeycyojthazdcmzug44a',
      status: 'queued',
      created: 2022-06-07T23:41:25.103Z,
      pin: {
        cid: 'baeaaadjtgeycyojthazdcmzug44a',
        name: '0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtga2synrugy3dkojsgu3q',
      status: 'queued',
      created: 2022-06-07T23:41:20.718Z,
      pin: {
        cid: 'baeaaadjtga2synrugy3dkojsgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjshe3cynzsge4temzqgu4a',
      status: 'queued',
      created: 2022-06-07T23:41:11.669Z,
      pin: {
        cid: 'baeaaadjshe3cynzsge4temzqgu4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'pinning',
      created: 2022-06-07T20:19:15.705Z,
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaaczwgawdgmbtge4dcnjz',
      status: 'pinning',
      created: 2022-06-07T20:19:06.553Z,
      pin: {
        cid: 'baeaaaczwgawdgmbtge4dcnjz',
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
  "cf-ray": "717d3d739dbcaa7c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:43 GMT",
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
      "requestid": "baeaaadjtge4symjzgy3tsnbxge2q",
      "status": "queued",
      "created": "2022-06-07T23:41:38.814+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgy3tsnbxge2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge4symjzgyzdcmjugeyq",
      "status": "queued",
      "created": "2022-06-07T23:41:37.319+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgyzdcmjugeyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge4symjzgqzdcojvhe4q",
      "status": "queued",
      "created": "2022-06-07T23:41:36.055+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgqzdcojvhe4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge4symjzgmztgnzthezq",
      "status": "queued",
      "created": "2022-06-07T23:41:34.723+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgmztgnzthezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge4symjzgi2dcmrsha3q",
      "status": "queued",
      "created": "2022-06-07T23:41:33.245+00:00",
      "pin": {
        "cid": "baeaaadjtge4symjzgi2dcmrsha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgeycyojthazdcmzug44a",
      "status": "queued",
      "created": "2022-06-07T23:41:25.103+00:00",
      "pin": {
        "cid": "baeaaadjtgeycyojthazdcmzug44a",
        "meta": null,
        "name": "0a2a4b6c-8ed9-4aab-bc1c-5af509cfed61",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtga2synrugy3dkojsgu3q",
      "status": "queued",
      "created": "2022-06-07T23:41:20.718+00:00",
      "pin": {
        "cid": "baeaaadjtga2synrugy3dkojsgu3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjshe3cynzsge4temzqgu4a",
      "status": "queued",
      "created": "2022-06-07T23:41:11.669+00:00",
      "pin": {
        "cid": "baeaaadjshe3cynzsge4temzqgu4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhewdgobtgu4tqnrqgm",
      "status": "pinning",
      "created": "2022-06-07T20:19:15.705+00:00",
      "pin": {
        "cid": "baeaaadbwhewdgobtgu4tqnrqgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgawdgmbtge4dcnjz",
      "status": "pinning",
      "created": "2022-06-07T20:19:06.553+00:00",
      "pin": {
        "cid": "baeaaaczwgawdgmbtge4dcnjz",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
