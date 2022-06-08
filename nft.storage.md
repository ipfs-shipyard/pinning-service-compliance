
# https://nft.storage/api compliance:

Execution Date: 2022-06-08T19:43:26.626Z

Revision: [933fbc6](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/933fbc6)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'baeaaadjsgm4synbqgqztsmbxg4ya'](#pins-post-of-cid-baeaaadjsgm4synbqgqztsmbxg4ya----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='fc507f29-5e51-4fe7-9f77-83385549cb74'](#can-create-a-pin-with-namefc507f29-5e51-4fe7-9f77-83385549cb74----success)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response object matches api spec schema (failure)

  ❌ Returns a 403 (failure)


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

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
```json
{
  ok: false,
  error: {
    code: 'EXPECTED_BEARER_STRING',
    message: 'API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`.'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841cd169ed5d8c-IAD",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:46 GMT",
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
## Request with invalid token - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response object matches api spec schema (failure)

  ❌ Returns a 403 (failure)


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
```json
{
  ok: false,
  error: {
    code: 'ERROR_MALFORMED_TOKEN',
    message: 'API Key is malformed or failed to parse.'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841cd67ce05db0-IAD",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:47 GMT",
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
## Pins post of CID 'baeaaadjsgm4synbqgqztsmbxg4ya' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




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
{"cid":"baeaaadjsgm4synbqgqztsmbxg4ya"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
  status: 'queued',
  created: '2022-06-08T19:42:48.367+00:00',
  pin: {
    cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
  status: 'queued',
  created: 2022-06-08T19:42:48.367Z,
  pin: {
    cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
  "cf-ray": "71841cdcbeaf81df-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgm4synbqgqztsmbxg4ya",
  "status": "queued",
  "created": "2022-06-08T19:42:48.367+00:00",
  "pin": {
    "cid": "baeaaadjsgm4synbqgqztsmbxg4ya",
    "meta": null,
    "name": null,
    "origins": null
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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsgqysynjtgy3dqnbvgm3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsgqysynjtgy3dqnbvgm3q
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841cec993c6fda-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

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
{"cid":"baeaaadjsgqysynjtgy3dqnbvgm3q"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadjsgqysynjtgy3dqnbvgm3q',
  status: 'queued',
  created: '2022-06-08T19:42:49.518+00:00',
  pin: {
    cid: 'baeaaadjsgqysynjtgy3dqnbvgm3q',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadjsgqysynjtgy3dqnbvgm3q',
  status: 'queued',
  created: 2022-06-08T19:42:49.518Z,
  pin: {
    cid: 'baeaaadjsgqysynjtgy3dqnbvgm3q',
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
  "cf-ray": "71841ce5fa8156da-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgqysynjtgy3dqnbvgm3q",
  "status": "queued",
  "created": "2022-06-08T19:42:49.518+00:00",
  "pin": {
    "cid": "baeaaadjsgqysynjtgy3dqnbvgm3q",
    "meta": null,
    "name": null,
    "origins": null
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
```json
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
      status: 'queued',
      created: '2022-06-08T19:42:48.367+00:00',
      pin: {
        cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmobtgmya',
      status: 'failed',
      created: '2022-05-18T18:22:49.602+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmobtgmya',
        meta: null,
        name: '419bd736-5c02-4f09-b8ab-dd071d0b27e7',
        origins: null
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
      status: 'queued',
      created: 2022-06-08T19:42:48.367Z,
      pin: {
        cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmobtgmya',
      status: 'failed',
      created: 2022-05-18T18:22:49.602Z,
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmobtgmya',
        name: '419bd736-5c02-4f09-b8ab-dd071d0b27e7',
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
  "cf-ray": "71841cef69a856b0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:52 GMT",
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
      "requestid": "baeaaadjsgm4synbqgqztsmbxg4ya",
      "status": "queued",
      "created": "2022-06-08T19:42:48.367+00:00",
      "pin": {
        "cid": "baeaaadjsgm4synbqgqztsmbxg4ya",
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
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    }
  ]
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

#### Request - GET: https://nft.storage/api/pins/baeaaadjsgq2cynrrge2tmojyge3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsgq2cynrrge2tmojyge3q
```json
{ error: { reason: 'NOT_FOUND', details: 'pin not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```json
null
```
#### Response - Not Found (404)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d0efe935d80-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:56 GMT",
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
## Get new pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadjsgq2syojygy4deojygq3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsgq2syojygy4deojygq3q
```json
{
  requestid: 'baeaaadjsgq2syojygy4deojygq3q',
  status: 'queued',
  created: '2022-06-08T19:42:54.995+00:00',
  pin: {
    cid: 'baeaaadjsgq2syojygy4deojygq3q',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadjsgq2syojygy4deojygq3q',
  status: 'queued',
  created: 2022-06-08T19:42:54.995Z,
  pin: {
    cid: 'baeaaadjsgq2syojygy4deojygq3q',
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
  "cf-ray": "71841d153b18824e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:57 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgq2syojygy4deojygq3q",
  "status": "queued",
  "created": "2022-06-08T19:42:54.995+00:00",
  "pin": {
    "cid": "baeaaadjsgq2syojygy4deojygq3q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjsgq2cynrrge2tmojyge3q' can have cid 'baeaaadjsgq2cynrrge2tmojyge3q' replaced with 'baeaaadjsgq2syojygy4deojygq3q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://nft.storage/api/pins/baeaaadjsgq2cynrrge2tmojyge3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgq2syojygy4deojygq3q"}
```
#### Response data from https://nft.storage/api/pins/baeaaadjsgq2cynrrge2tmojyge3q
```json
{
  requestid: 'baeaaadjsgq2syojygy4deojygq3q',
  status: 'queued',
  created: '2022-06-08T19:42:54.995+00:00',
  pin: {
    cid: 'baeaaadjsgq2syojygy4deojygq3q',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadjsgq2syojygy4deojygq3q',
  status: 'queued',
  created: 2022-06-08T19:42:54.995Z,
  pin: {
    cid: 'baeaaadjsgq2syojygy4deojygq3q',
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
  "cf-ray": "71841d01ce7a57f4-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgq2syojygy4deojygq3q",
  "status": "queued",
  "created": "2022-06-08T19:42:54.995+00:00",
  "pin": {
    "cid": "baeaaadjsgq2syojygy4deojygq3q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (baeaaadjsgq2cynrrge2tmojyge3q) (success)

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
{"cid":"baeaaadjsgq2cynrrge2tmojyge3q"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadjsgq2cynrrge2tmojyge3q',
  status: 'queued',
  created: '2022-06-08T19:42:52.948+00:00',
  pin: {
    cid: 'baeaaadjsgq2cynrrge2tmojyge3q',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadjsgq2cynrrge2tmojyge3q',
  status: 'queued',
  created: 2022-06-08T19:42:52.948Z,
  pin: {
    cid: 'baeaaadjsgq2cynrrge2tmojyge3q',
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
  "cf-ray": "71841cf92e829c85-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgq2cynrrge2tmojyge3q",
  "status": "queued",
  "created": "2022-06-08T19:42:52.948+00:00",
  "pin": {
    "cid": "baeaaadjsgq2cynrrge2tmojyge3q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can retrieve pin with name 'fc507f29-5e51-4fe7-9f77-83385549cb74' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=fc507f29-5e51-4fe7-9f77-83385549cb74&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=fc507f29-5e51-4fe7-9f77-83385549cb74&match=exact
```json
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d24da737fae-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:00 GMT",
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
## Can retrieve pin with name 'FC507F29-5E51-4FE7-9F77-83385549CB74' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=FC507F29-5E51-4FE7-9F77-83385549CB74&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=FC507F29-5E51-4FE7-9F77-83385549CB74&match=iexact
```json
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d2aef345710-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:01 GMT",
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
## Can retrieve pin with name '5e51-4fe7-9f77-833' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=5e51-4fe7-9f77-833&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=5e51-4fe7-9f77-833&match=partial
```json
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d30cb6f5c1d-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:02 GMT",
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
## Can retrieve pin with name '5E51-4FE7-9F77-833' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=5E51-4FE7-9F77-833&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=5E51-4FE7-9F77-833&match=ipartial
```json
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d3879d17ffa-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:03 GMT",
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
## Can create a pin with name='fc507f29-5e51-4fe7-9f77-83385549cb74' - 🟢 SUCCESS

### Expectations (11/11 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsguycymjyg43tknrxg42q","name":"fc507f29-5e51-4fe7-9f77-83385549cb74"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadjsguycymjyg43tknrxg42q',
  status: 'queued',
  created: '2022-06-08T19:42:58.209+00:00',
  pin: {
    cid: 'baeaaadjsguycymjyg43tknrxg42q',
    meta: null,
    name: 'fc507f29-5e51-4fe7-9f77-83385549cb74',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadjsguycymjyg43tknrxg42q',
  status: 'queued',
  created: 2022-06-08T19:42:58.209Z,
  pin: {
    cid: 'baeaaadjsguycymjyg43tknrxg42q',
    name: 'fc507f29-5e51-4fe7-9f77-83385549cb74',
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
  "cf-ray": "71841d1c1deb56b6-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:42:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsguycymjyg43tknrxg42q",
  "status": "queued",
  "created": "2022-06-08T19:42:58.209+00:00",
  "pin": {
    "cid": "baeaaadjsguycymjyg43tknrxg42q",
    "meta": null,
    "name": "fc507f29-5e51-4fe7-9f77-83385549cb74",
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbsgu3synzwg43dgnjxga' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadbsgu3synzwg43dgnjxga"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadbsgu3synzwg43dgnjxga',
  status: 'queued',
  created: '2022-06-08T19:43:05.425+00:00',
  pin: {
    cid: 'baeaaadbsgu3synzwg43dgnjxga',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadbsgu3synzwg43dgnjxga',
  status: 'queued',
  created: 2022-06-08T19:43:05.425Z,
  pin: {
    cid: 'baeaaadbsgu3synzwg43dgnjxga',
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
  "cf-ray": "71841d471ce85770-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbsgu3synzwg43dgnjxga",
  "status": "queued",
  "created": "2022-06-08T19:43:05.425+00:00",
  "pin": {
    "cid": "baeaaadbsgu3synzwg43dgnjxga",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbsgu3synzxgu3tamrshe' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadbsgu3synzxgu3tamrshe"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadbsgu3synzxgu3tamrshe',
  status: 'queued',
  created: '2022-06-08T19:43:06.723+00:00',
  pin: {
    cid: 'baeaaadbsgu3synzxgu3tamrshe',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadbsgu3synzxgu3tamrshe',
  status: 'queued',
  created: 2022-06-08T19:43:06.723Z,
  pin: {
    cid: 'baeaaadbsgu3synzxgu3tamrshe',
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
  "cf-ray": "71841d50abf87fae-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:07 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbsgu3synzxgu3tamrshe",
  "status": "queued",
  "created": "2022-06-08T19:43:06.723+00:00",
  "pin": {
    "cid": "baeaaadbsgu3synzxgu3tamrshe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbsgu3synzygi3donryga' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadbsgu3synzygi3donryga"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadbsgu3synzygi3donryga',
  status: 'queued',
  created: '2022-06-08T19:43:08.122+00:00',
  pin: {
    cid: 'baeaaadbsgu3synzygi3donryga',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadbsgu3synzygi3donryga',
  status: 'queued',
  created: 2022-06-08T19:43:08.122Z,
  pin: {
    cid: 'baeaaadbsgu3synzygi3donryga',
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
  "cf-ray": "71841d582bd26ff5-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbsgu3synzygi3donryga",
  "status": "queued",
  "created": "2022-06-08T19:43:08.122+00:00",
  "pin": {
    "cid": "baeaaadbsgu3synzygi3donryga",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbsgu3syobqgaytcobqg4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadbsgu3syobqgaytcobqg4"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadbsgu3syobqgaytcobqg4',
  status: 'queued',
  created: '2022-06-08T19:43:09.597+00:00',
  pin: {
    cid: 'baeaaadbsgu3syobqgaytcobqg4',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadbsgu3syobqgaytcobqg4',
  status: 'queued',
  created: 2022-06-08T19:43:09.597Z,
  pin: {
    cid: 'baeaaadbsgu3syobqgaytcobqg4',
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
  "cf-ray": "71841d60b9225985-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbsgu3syobqgaytcobqg4",
  "status": "queued",
  "created": "2022-06-08T19:43:09.597+00:00",
  "pin": {
    "cid": "baeaaadbsgu3syobqgaytcobqg4",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbsgu3syobqg44tanbwgq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadbsgu3syobqg44tanbwgq"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  requestid: 'baeaaadbsgu3syobqg44tanbwgq',
  status: 'queued',
  created: '2022-06-08T19:43:11.005+00:00',
  pin: {
    cid: 'baeaaadbsgu3syobqg44tanbwgq',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'baeaaadbsgu3syobqg44tanbwgq',
  status: 'queued',
  created: 2022-06-08T19:43:11.005Z,
  pin: {
    cid: 'baeaaadbsgu3syobqg44tanbwgq',
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
  "cf-ray": "71841d6a2d1b56da-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbsgu3syobqg44tanbwgq",
  "status": "queued",
  "created": "2022-06-08T19:43:11.005+00:00",
  "pin": {
    "cid": "baeaaadbsgu3syobqg44tanbwgq",
    "meta": null,
    "name": null,
    "origins": null
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
```json
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbsgu3syobqg44tanbwgq',
      status: 'queued',
      created: '2022-06-08T19:43:11.005+00:00',
      pin: {
        cid: 'baeaaadbsgu3syobqg44tanbwgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbsgu3syobqgaytcobqg4',
      status: 'queued',
      created: '2022-06-08T19:43:09.597+00:00',
      pin: {
        cid: 'baeaaadbsgu3syobqgaytcobqg4',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbsgu3synzygi3donryga',
      status: 'queued',
      created: '2022-06-08T19:43:08.122+00:00',
      pin: {
        cid: 'baeaaadbsgu3synzygi3donryga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbsgu3synzxgu3tamrshe',
      status: 'queued',
      created: '2022-06-08T19:43:06.723+00:00',
      pin: {
        cid: 'baeaaadbsgu3synzxgu3tamrshe',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbsgu3synzwg43dgnjxga',
      status: 'queued',
      created: '2022-06-08T19:43:05.425+00:00',
      pin: {
        cid: 'baeaaadbsgu3synzwg43dgnjxga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsguycymjyg43tknrxg42q',
      status: 'queued',
      created: '2022-06-08T19:42:58.209+00:00',
      pin: {
        cid: 'baeaaadjsguycymjyg43tknrxg42q',
        meta: null,
        name: 'fc507f29-5e51-4fe7-9f77-83385549cb74',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgq2syojygy4deojygq3q',
      status: 'queued',
      created: '2022-06-08T19:42:54.995+00:00',
      pin: {
        cid: 'baeaaadjsgq2syojygy4deojygq3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
      status: 'queued',
      created: '2022-06-08T19:42:48.367+00:00',
      pin: {
        cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadbsgu3syobqg44tanbwgq',
      status: 'queued',
      created: 2022-06-08T19:43:11.005Z,
      pin: {
        cid: 'baeaaadbsgu3syobqg44tanbwgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbsgu3syobqgaytcobqg4',
      status: 'queued',
      created: 2022-06-08T19:43:09.597Z,
      pin: {
        cid: 'baeaaadbsgu3syobqgaytcobqg4',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbsgu3synzygi3donryga',
      status: 'queued',
      created: 2022-06-08T19:43:08.122Z,
      pin: {
        cid: 'baeaaadbsgu3synzygi3donryga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbsgu3synzxgu3tamrshe',
      status: 'queued',
      created: 2022-06-08T19:43:06.723Z,
      pin: {
        cid: 'baeaaadbsgu3synzxgu3tamrshe',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbsgu3synzwg43dgnjxga',
      status: 'queued',
      created: 2022-06-08T19:43:05.425Z,
      pin: {
        cid: 'baeaaadbsgu3synzwg43dgnjxga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsguycymjyg43tknrxg42q',
      status: 'queued',
      created: 2022-06-08T19:42:58.209Z,
      pin: {
        cid: 'baeaaadjsguycymjyg43tknrxg42q',
        name: 'fc507f29-5e51-4fe7-9f77-83385549cb74',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgq2syojygy4deojygq3q',
      status: 'queued',
      created: 2022-06-08T19:42:54.995Z,
      pin: {
        cid: 'baeaaadjsgq2syojygy4deojygq3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
      status: 'queued',
      created: 2022-06-08T19:42:48.367Z,
      pin: {
        cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
  "cf-ray": "71841d72ac4f5770-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:12 GMT",
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
      "requestid": "baeaaadbsgu3syobqg44tanbwgq",
      "status": "queued",
      "created": "2022-06-08T19:43:11.005+00:00",
      "pin": {
        "cid": "baeaaadbsgu3syobqg44tanbwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgu3syobqgaytcobqg4",
      "status": "queued",
      "created": "2022-06-08T19:43:09.597+00:00",
      "pin": {
        "cid": "baeaaadbsgu3syobqgaytcobqg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgu3synzygi3donryga",
      "status": "queued",
      "created": "2022-06-08T19:43:08.122+00:00",
      "pin": {
        "cid": "baeaaadbsgu3synzygi3donryga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgu3synzxgu3tamrshe",
      "status": "queued",
      "created": "2022-06-08T19:43:06.723+00:00",
      "pin": {
        "cid": "baeaaadbsgu3synzxgu3tamrshe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgu3synzwg43dgnjxga",
      "status": "queued",
      "created": "2022-06-08T19:43:05.425+00:00",
      "pin": {
        "cid": "baeaaadbsgu3synzwg43dgnjxga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsguycymjyg43tknrxg42q",
      "status": "queued",
      "created": "2022-06-08T19:42:58.209+00:00",
      "pin": {
        "cid": "baeaaadjsguycymjyg43tknrxg42q",
        "meta": null,
        "name": "fc507f29-5e51-4fe7-9f77-83385549cb74",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2syojygy4deojygq3q",
      "status": "queued",
      "created": "2022-06-08T19:42:54.995+00:00",
      "pin": {
        "cid": "baeaaadjsgq2syojygy4deojygq3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgm4synbqgqztsmbxg4ya",
      "status": "queued",
      "created": "2022-06-08T19:42:48.367+00:00",
      "pin": {
        "cid": "baeaaadjsgm4synbqgqztsmbxg4ya",
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
    }
  ]
}
```
## Pagination: Retrieve the next page of pins - ❌ FAILED

### Expectations (2/3 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A23%3A05.572Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A23%3A05.572Z
```json
{
  count: 10,
  results: [
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
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmobtgmya',
      status: 'failed',
      created: '2022-05-18T18:22:49.602+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmobtgmya',
        meta: null,
        name: '419bd736-5c02-4f09-b8ab-dd071d0b27e7',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmmzqge2a',
      status: 'failed',
      created: '2022-05-18T18:22:43.927+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmmzqge2a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytknrygu2q',
      status: 'failed',
      created: '2022-05-18T18:22:38.204+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzhaytknrygu2q',
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
```json
{
  count: 10,
  results: Set(10) {
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
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmobtgmya',
      status: 'failed',
      created: 2022-05-18T18:22:49.602Z,
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmobtgmya',
        name: '419bd736-5c02-4f09-b8ab-dd071d0b27e7',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmmzqge2a',
      status: 'failed',
      created: 2022-05-18T18:22:43.927Z,
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmmzqge2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytknrygu2q',
      status: 'failed',
      created: 2022-05-18T18:22:38.204Z,
      pin: {
        cid: 'baeaaadjrgy2teobzhaytknrygu2q',
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
  "cf-ray": "71841d789faf8027-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:14 GMT",
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
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
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
```json
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjsguycymjyg43tknrxg42q',
      status: 'queued',
      created: '2022-06-08T19:42:58.209+00:00',
      pin: {
        cid: 'baeaaadjsguycymjyg43tknrxg42q',
        meta: null,
        name: 'fc507f29-5e51-4fe7-9f77-83385549cb74',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgq2syojygy4deojygq3q',
      status: 'queued',
      created: '2022-06-08T19:42:54.995+00:00',
      pin: {
        cid: 'baeaaadjsgq2syojygy4deojygq3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
      status: 'queued',
      created: '2022-06-08T19:42:48.367+00:00',
      pin: {
        cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
```json
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadjsguycymjyg43tknrxg42q',
      status: 'queued',
      created: 2022-06-08T19:42:58.209Z,
      pin: {
        cid: 'baeaaadjsguycymjyg43tknrxg42q',
        name: 'fc507f29-5e51-4fe7-9f77-83385549cb74',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgq2syojygy4deojygq3q',
      status: 'queued',
      created: 2022-06-08T19:42:54.995Z,
      pin: {
        cid: 'baeaaadjsgq2syojygy4deojygq3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
      status: 'queued',
      created: 2022-06-08T19:42:48.367Z,
      pin: {
        cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
  "cf-ray": "71841d405ced824b-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:04 GMT",
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
      "requestid": "baeaaadjsguycymjyg43tknrxg42q",
      "status": "queued",
      "created": "2022-06-08T19:42:58.209+00:00",
      "pin": {
        "cid": "baeaaadjsguycymjyg43tknrxg42q",
        "meta": null,
        "name": "fc507f29-5e51-4fe7-9f77-83385549cb74",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2syojygy4deojygq3q",
      "status": "queued",
      "created": "2022-06-08T19:42:54.995+00:00",
      "pin": {
        "cid": "baeaaadjsgq2syojygy4deojygq3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgm4synbqgqztsmbxg4ya",
      "status": "queued",
      "created": "2022-06-08T19:42:48.367+00:00",
      "pin": {
        "cid": "baeaaadjsgm4synbqgqztsmbxg4ya",
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
## Can delete pin with requestid 'baeaaadbsgu3syobqg44tanbwgq' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbsgu3syobqg44tanbwgq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbsgu3syobqg44tanbwgq
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d8a5a515974-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbsgu3syobqgaytcobqg4' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbsgu3syobqgaytcobqg4

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbsgu3syobqgaytcobqg4
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d907f948233-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbsgu3synzygi3donryga' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbsgu3synzygi3donryga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbsgu3synzygi3donryga
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d96bb5f575e-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbsgu3synzxgu3tamrshe' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbsgu3synzxgu3tamrshe

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbsgu3synzxgu3tamrshe
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841d9cfeb557dc-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbsgu3synzwg43dgnjxga' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbsgu3synzwg43dgnjxga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbsgu3synzwg43dgnjxga
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841da33b7c5740-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsguycymjyg43tknrxg42q' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsguycymjyg43tknrxg42q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsguycymjyg43tknrxg42q
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841da97cd99c7e-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:20 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsgq2syojygy4deojygq3q' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsgq2syojygy4deojygq3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsgq2syojygy4deojygq3q
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841dafde2e5974-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsgm4synbqgqztsmbxg4ya' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsgm4synbqgqztsmbxg4ya

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsgm4synbqgqztsmbxg4ya
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841db5fa068233-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:22 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqha4tqojvge4a' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqha4tqojvge4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqha4tqojvge4a
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841dbc3d22e0e2-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqha4tqnbvgq4a' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqha4tqnbvgq4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqha4tqnbvgq4a
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71841dc27d345c34-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns a count of zero (failure)





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
```json
{
  count: 10,
  results: [
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
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmobtgmya',
      status: 'failed',
      created: '2022-05-18T18:22:49.602+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmobtgmya',
        meta: null,
        name: '419bd736-5c02-4f09-b8ab-dd071d0b27e7',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmmzqge2a',
      status: 'failed',
      created: '2022-05-18T18:22:43.927+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmmzqge2a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytknrygu2q',
      status: 'failed',
      created: '2022-05-18T18:22:38.204+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzhaytknrygu2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytknbqg4ya',
      status: 'failed',
      created: '2022-05-18T18:22:35.326+00:00',
      pin: {
        cid: 'baeaaadjrgy2teobzhaytknbqg4ya',
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
```json
{
  count: 10,
  results: Set(10) {
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
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmobtgmya',
      status: 'failed',
      created: 2022-05-18T18:22:49.602Z,
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmobtgmya',
        name: '419bd736-5c02-4f09-b8ab-dd071d0b27e7',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytmmzqge2a',
      status: 'failed',
      created: 2022-05-18T18:22:43.927Z,
      pin: {
        cid: 'baeaaadjrgy2teobzhaytmmzqge2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytknrygu2q',
      status: 'failed',
      created: 2022-05-18T18:22:38.204Z,
      pin: {
        cid: 'baeaaadjrgy2teobzhaytknrygu2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teobzhaytknbqg4ya',
      status: 'failed',
      created: 2022-05-18T18:22:35.326Z,
      pin: {
        cid: 'baeaaadjrgy2teobzhaytknbqg4ya',
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
  "cf-ray": "71841dc8cfa39c55-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:26 GMT",
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
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
```json
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbsgu3syobqg44tanbwgq',
      status: 'queued',
      created: '2022-06-08T19:43:11.005+00:00',
      pin: {
        cid: 'baeaaadbsgu3syobqg44tanbwgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbsgu3syobqgaytcobqg4',
      status: 'queued',
      created: '2022-06-08T19:43:09.597+00:00',
      pin: {
        cid: 'baeaaadbsgu3syobqgaytcobqg4',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbsgu3synzygi3donryga',
      status: 'queued',
      created: '2022-06-08T19:43:08.122+00:00',
      pin: {
        cid: 'baeaaadbsgu3synzygi3donryga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbsgu3synzxgu3tamrshe',
      status: 'queued',
      created: '2022-06-08T19:43:06.723+00:00',
      pin: {
        cid: 'baeaaadbsgu3synzxgu3tamrshe',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbsgu3synzwg43dgnjxga',
      status: 'queued',
      created: '2022-06-08T19:43:05.425+00:00',
      pin: {
        cid: 'baeaaadbsgu3synzwg43dgnjxga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsguycymjyg43tknrxg42q',
      status: 'queued',
      created: '2022-06-08T19:42:58.209+00:00',
      pin: {
        cid: 'baeaaadjsguycymjyg43tknrxg42q',
        meta: null,
        name: 'fc507f29-5e51-4fe7-9f77-83385549cb74',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgq2syojygy4deojygq3q',
      status: 'queued',
      created: '2022-06-08T19:42:54.995+00:00',
      pin: {
        cid: 'baeaaadjsgq2syojygy4deojygq3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
      status: 'queued',
      created: '2022-06-08T19:42:48.367+00:00',
      pin: {
        cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  count: 10,
  results: Set(10) {
    {
      requestid: 'baeaaadbsgu3syobqg44tanbwgq',
      status: 'queued',
      created: 2022-06-08T19:43:11.005Z,
      pin: {
        cid: 'baeaaadbsgu3syobqg44tanbwgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbsgu3syobqgaytcobqg4',
      status: 'queued',
      created: 2022-06-08T19:43:09.597Z,
      pin: {
        cid: 'baeaaadbsgu3syobqgaytcobqg4',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbsgu3synzygi3donryga',
      status: 'queued',
      created: 2022-06-08T19:43:08.122Z,
      pin: {
        cid: 'baeaaadbsgu3synzygi3donryga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbsgu3synzxgu3tamrshe',
      status: 'queued',
      created: 2022-06-08T19:43:06.723Z,
      pin: {
        cid: 'baeaaadbsgu3synzxgu3tamrshe',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbsgu3synzwg43dgnjxga',
      status: 'queued',
      created: 2022-06-08T19:43:05.425Z,
      pin: {
        cid: 'baeaaadbsgu3synzwg43dgnjxga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsguycymjyg43tknrxg42q',
      status: 'queued',
      created: 2022-06-08T19:42:58.209Z,
      pin: {
        cid: 'baeaaadjsguycymjyg43tknrxg42q',
        name: 'fc507f29-5e51-4fe7-9f77-83385549cb74',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgq2syojygy4deojygq3q',
      status: 'queued',
      created: 2022-06-08T19:42:54.995Z,
      pin: {
        cid: 'baeaaadjsgq2syojygy4deojygq3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
      status: 'queued',
      created: 2022-06-08T19:42:48.367Z,
      pin: {
        cid: 'baeaaadjsgm4synbqgqztsmbxg4ya',
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
  "cf-ray": "71841d81bf7081d6-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 08 Jun 2022 19:43:15 GMT",
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
      "requestid": "baeaaadbsgu3syobqg44tanbwgq",
      "status": "queued",
      "created": "2022-06-08T19:43:11.005+00:00",
      "pin": {
        "cid": "baeaaadbsgu3syobqg44tanbwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgu3syobqgaytcobqg4",
      "status": "queued",
      "created": "2022-06-08T19:43:09.597+00:00",
      "pin": {
        "cid": "baeaaadbsgu3syobqgaytcobqg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgu3synzygi3donryga",
      "status": "queued",
      "created": "2022-06-08T19:43:08.122+00:00",
      "pin": {
        "cid": "baeaaadbsgu3synzygi3donryga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgu3synzxgu3tamrshe",
      "status": "queued",
      "created": "2022-06-08T19:43:06.723+00:00",
      "pin": {
        "cid": "baeaaadbsgu3synzxgu3tamrshe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgu3synzwg43dgnjxga",
      "status": "queued",
      "created": "2022-06-08T19:43:05.425+00:00",
      "pin": {
        "cid": "baeaaadbsgu3synzwg43dgnjxga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsguycymjyg43tknrxg42q",
      "status": "queued",
      "created": "2022-06-08T19:42:58.209+00:00",
      "pin": {
        "cid": "baeaaadjsguycymjyg43tknrxg42q",
        "meta": null,
        "name": "fc507f29-5e51-4fe7-9f77-83385549cb74",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2syojygy4deojygq3q",
      "status": "queued",
      "created": "2022-06-08T19:42:54.995+00:00",
      "pin": {
        "cid": "baeaaadjsgq2syojygy4deojygq3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgm4synbqgqztsmbxg4ya",
      "status": "queued",
      "created": "2022-06-08T19:42:48.367+00:00",
      "pin": {
        "cid": "baeaaadjsgm4synbqgqztsmbxg4ya",
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
    }
  ]
}
```
