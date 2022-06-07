
# https://nft.storage/api compliance:

Execution Date: 2022-06-07T20:31:52.965Z

Revision: [eda2a20](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/eda2a20)

Previous Revision: (Error getting previous revision)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ✘ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ✘ [Request with invalid token](#request-with-invalid-token----failed)

  ✘ [Pins post of CID 'baeaaadjrhezcymjugizdgnzshe2q'](#pins-post-of-cid-baeaaadjrhezcymjugizdgnzshe2q----failed)

  ✓ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ✘ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ✓ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ✓ [Can create a pin with name='7e7e61ca-5e83-4843-b89b-572c9db12aba'](#can-create-a-pin-with-name7e7e61ca-5e83-4843-b89b-572c9db12aba----success)

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
  "cf-ray": "717c2631ffa07c6e-LAX",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:04 GMT",
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
  "cf-ray": "717c2637cb577bfb-LAX",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:05 GMT",
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
## Pins post of CID 'baeaaadjrhezcymjugizdgnzshe2q' - ✘ FAILED

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
{"cid":"baeaaadjrhezcymjugizdgnzshe2q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
  status: 'queued',
  created: '2022-06-07T20:31:07.005+00:00',
  pin: {
    cid: 'baeaaadjrhezcymjugizdgnzshe2q',
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
  requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
  status: 'queued',
  created: 2022-06-07T20:31:07.005Z,
  pin: {
    cid: 'baeaaadjrhezcymjugizdgnzshe2q',
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
  "cf-ray": "717c263e0f2f7d1b-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrhezcymjugizdgnzshe2q",
  "status": "queued",
  "created": "2022-06-07T20:31:07.005+00:00",
  "pin": {
    "cid": "baeaaadjrhezcymjugizdgnzshe2q",
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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrhe2synjxgaztcnzygayq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrhe2synjxgaztcnzygayq
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
  "cf-ray": "717c265e8b887cd7-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:11 GMT",
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
{"cid":"baeaaadjrhe2synjxgaztcnzygayq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrhe2synjxgaztcnzygayq',
  status: 'queued',
  created: '2022-06-07T20:31:09.72+00:00',
  pin: {
    cid: 'baeaaadjrhe2synjxgaztcnzygayq',
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
  requestid: 'baeaaadjrhe2synjxgaztcnzygayq',
  status: 'queued',
  created: 2022-06-07T20:31:09.720Z,
  pin: {
    cid: 'baeaaadjrhe2synjxgaztcnzygayq',
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
  "cf-ray": "717c264eaf8b532b-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrhe2synjxgaztcnzygayq",
  "status": "queued",
  "created": "2022-06-07T20:31:09.72+00:00",
  "pin": {
    "cid": "baeaaadjrhe2synjxgaztcnzygayq",
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
      requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
      status: 'queued',
      created: '2022-06-07T20:31:07.005+00:00',
      pin: {
        cid: 'baeaaadjrhezcymjugizdgnzshe2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdkmbqheydamrrge',
      status: 'queued',
      created: '2022-06-07T20:19:34.738+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqheydamrrge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: '2022-06-07T20:19:33.179+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojygi2tsnjzgu',
      status: 'queued',
      created: '2022-06-07T20:19:31.501+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojygi2tsnjzgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojxgq4tmnzzga',
      status: 'queued',
      created: '2022-06-07T20:19:29.947+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojxgq4tmnzzga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojwgyzdanbygq',
      status: 'queued',
      created: '2022-06-07T20:19:27.897+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojwgyzdanbygq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
      status: 'queued',
      created: '2022-06-07T20:19:19.765+00:00',
      pin: {
        cid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
        meta: null,
        name: '04a185e1-4f40-4cb8-a09e-7e7a4465e2b3',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'queued',
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
      status: 'queued',
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
      requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
      status: 'queued',
      created: 2022-06-07T20:31:07.005Z,
      pin: {
        cid: 'baeaaadjrhezcymjugizdgnzshe2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdkmbqheydamrrge',
      status: 'queued',
      created: 2022-06-07T20:19:34.738Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqheydamrrge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: 2022-06-07T20:19:33.179Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojygi2tsnjzgu',
      status: 'queued',
      created: 2022-06-07T20:19:31.501Z,
      pin: {
        cid: 'baeaaadbygiwdiojygi2tsnjzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojxgq4tmnzzga',
      status: 'queued',
      created: 2022-06-07T20:19:29.947Z,
      pin: {
        cid: 'baeaaadbygiwdiojxgq4tmnzzga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojwgyzdanbygq',
      status: 'queued',
      created: 2022-06-07T20:19:27.897Z,
      pin: {
        cid: 'baeaaadbygiwdiojwgyzdanbygq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
      status: 'queued',
      created: 2022-06-07T20:19:19.765Z,
      pin: {
        cid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
        name: '04a185e1-4f40-4cb8-a09e-7e7a4465e2b3',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'queued',
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
      status: 'queued',
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
  "cf-ray": "717c26632b807bfb-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:12 GMT",
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
      "requestid": "baeaaadjrhezcymjugizdgnzshe2q",
      "status": "queued",
      "created": "2022-06-07T20:31:07.005+00:00",
      "pin": {
        "cid": "baeaaadjrhezcymjugizdgnzshe2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdkmbqheydamrrge",
      "status": "queued",
      "created": "2022-06-07T20:19:34.738+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqheydamrrge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdkmbqgi4tanrqha",
      "status": "queued",
      "created": "2022-06-07T20:19:33.179+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqgi4tanrqha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojygi2tsnjzgu",
      "status": "queued",
      "created": "2022-06-07T20:19:31.501+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojygi2tsnjzgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojxgq4tmnzzga",
      "status": "queued",
      "created": "2022-06-07T20:19:29.947+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojxgq4tmnzzga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojwgyzdanbygq",
      "status": "queued",
      "created": "2022-06-07T20:19:27.897+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojwgyzdanbygq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgqwdmmzxha2dsnbtgq",
      "status": "queued",
      "created": "2022-06-07T20:19:19.765+00:00",
      "pin": {
        "cid": "baeaaadbxgqwdmmzxha2dsnbtgq",
        "meta": null,
        "name": "04a185e1-4f40-4cb8-a09e-7e7a4465e2b3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhewdgobtgu4tqnrqgm",
      "status": "queued",
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
      "status": "queued",
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

#### Request - GET: https://nft.storage/api/pins/baeaaadjrhe4synzzgm2tgmzzgmzq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrhe4synzzgm2tgmzzgmzq
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
  "cf-ray": "717c2686fca07d1b-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:18 GMT",
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

#### Request - GET: https://nft.storage/api/pins/baeaaadjsgaysymjwgyytsnbqgi4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsgaysymjwgyytsnbqgi4a
```
{
  requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
  status: 'queued',
  created: '2022-06-07T20:31:16.343+00:00',
  pin: {
    cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
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
  requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
  status: 'queued',
  created: 2022-06-07T20:31:16.343Z,
  pin: {
    cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
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
  "cf-ray": "717c268d59cc7cd7-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgaysymjwgyytsnbqgi4a",
  "status": "queued",
  "created": "2022-06-07T20:31:16.343+00:00",
  "pin": {
    "cid": "baeaaadjsgaysymjwgyytsnbqgi4a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjrhe4synzzgm2tgmzzgmzq' can have cid 'baeaaadjrhe4synzzgm2tgmzzgmzq' replaced with 'baeaaadjsgaysymjwgyytsnbqgi4a' - ✓ SUCCESS

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

#### Request - POST: https://nft.storage/api/pins/baeaaadjrhe4synzzgm2tgmzzgmzq

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgaysymjwgyytsnbqgi4a"}
```
#### Response data from https://nft.storage/api/pins/baeaaadjrhe4synzzgm2tgmzzgmzq
```
{
  requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
  status: 'queued',
  created: '2022-06-07T20:31:16.343+00:00',
  pin: {
    cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
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
  requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
  status: 'queued',
  created: 2022-06-07T20:31:16.343Z,
  pin: {
    cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
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
  "cf-ray": "717c2671a9b77e8f-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgaysymjwgyytsnbqgi4a",
  "status": "queued",
  "created": "2022-06-07T20:31:16.343+00:00",
  "pin": {
    "cid": "baeaaadjsgaysymjwgyytsnbqgi4a",
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

  ✓ Could obtain requestid from new pin (baeaaadjrhe4synzzgm2tgmzzgmzq) (success)

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
{"cid":"baeaaadjrhe4synzzgm2tgmzzgmzq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrhe4synzzgm2tgmzzgmzq',
  status: 'queued',
  created: '2022-06-07T20:31:13.188+00:00',
  pin: {
    cid: 'baeaaadjrhe4synzzgm2tgmzzgmzq',
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
  requestid: 'baeaaadjrhe4synzzgm2tgmzzgmzq',
  status: 'queued',
  created: 2022-06-07T20:31:13.188Z,
  pin: {
    cid: 'baeaaadjrhe4synzzgm2tgmzzgmzq',
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
  "cf-ray": "717c26694ad27bd7-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:14 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrhe4synzzgm2tgmzzgmzq",
  "status": "queued",
  "created": "2022-06-07T20:31:13.188+00:00",
  "pin": {
    "cid": "baeaaadjrhe4synzzgm2tgmzzgmzq",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can retrieve pin with name '7e7e61ca-5e83-4843-b89b-572c9db12aba' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=7e7e61ca-5e83-4843-b89b-572c9db12aba&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=7e7e61ca-5e83-4843-b89b-572c9db12aba&match=exact
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
  "cf-ray": "717c269cbc987e89-LAX",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:22 GMT",
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
## Can retrieve pin with name '7E7E61CA-5E83-4843-B89B-572C9DB12ABA' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=7E7E61CA-5E83-4843-B89B-572C9DB12ABA&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=7E7E61CA-5E83-4843-B89B-572C9DB12ABA&match=iexact
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
  "cf-ray": "717c26a6c9977d2f-LAX",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:24 GMT",
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
## Can retrieve pin with name '5e83-4843-b89b-572' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=5e83-4843-b89b-572&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=5e83-4843-b89b-572&match=partial
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
  "cf-ray": "717c26b03a047b13-LAX",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:25 GMT",
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
## Can retrieve pin with name '5E83-4843-B89B-572' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=5E83-4843-B89B-572&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=5E83-4843-B89B-572&match=ipartial
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
  "cf-ray": "717c26b7c8537ec9-LAX",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:26 GMT",
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
## Can create a pin with name='7e7e61ca-5e83-4843-b89b-572c9db12aba' - ✓ SUCCESS

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
{"cid":"baeaaadjsga3cynjugqztanrxgeyq","name":"7e7e61ca-5e83-4843-b89b-572c9db12aba"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsga3cynjugqztanrxgeyq',
  status: 'queued',
  created: '2022-06-07T20:31:20.063+00:00',
  pin: {
    cid: 'baeaaadjsga3cynjugqztanrxgeyq',
    meta: null,
    name: '7e7e61ca-5e83-4843-b89b-572c9db12aba',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadjsga3cynjugqztanrxgeyq',
  status: 'queued',
  created: 2022-06-07T20:31:20.063Z,
  pin: {
    cid: 'baeaaadjsga3cynjugqztanrxgeyq',
    name: '7e7e61ca-5e83-4843-b89b-572c9db12aba',
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
  "cf-ray": "717c269349377ee3-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsga3cynjugqztanrxgeyq",
  "status": "queued",
  "created": "2022-06-07T20:31:20.063+00:00",
  "pin": {
    "cid": "baeaaadjsga3cynjugqztanrxgeyq",
    "meta": null,
    "name": "7e7e61ca-5e83-4843-b89b-572c9db12aba",
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsge2cyojtgu3temjqgi4a' - ✓ SUCCESS

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
{"cid":"baeaaadjsge2cyojtgu3temjqgi4a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsge2cyojtgu3temjqgi4a',
  status: 'queued',
  created: '2022-06-07T20:31:28.278+00:00',
  pin: {
    cid: 'baeaaadjsge2cyojtgu3temjqgi4a',
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
  requestid: 'baeaaadjsge2cyojtgu3temjqgi4a',
  status: 'queued',
  created: 2022-06-07T20:31:28.278Z,
  pin: {
    cid: 'baeaaadjsge2cyojtgu3temjqgi4a',
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
  "cf-ray": "717c26c7bf2d7e83-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsge2cyojtgu3temjqgi4a",
  "status": "queued",
  "created": "2022-06-07T20:31:28.278+00:00",
  "pin": {
    "cid": "baeaaadjsge2cyojtgu3temjqgi4a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsge2cyojtgy2tmojxgqza' - ✓ SUCCESS

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
{"cid":"baeaaadjsge2cyojtgy2tmojxgqza"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsge2cyojtgy2tmojxgqza',
  status: 'queued',
  created: '2022-06-07T20:31:30.234+00:00',
  pin: {
    cid: 'baeaaadjsge2cyojtgy2tmojxgqza',
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
  requestid: 'baeaaadjsge2cyojtgy2tmojxgqza',
  status: 'queued',
  created: 2022-06-07T20:31:30.234Z,
  pin: {
    cid: 'baeaaadjsge2cyojtgy2tmojxgqza',
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
  "cf-ray": "717c26d1287e7e89-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsge2cyojtgy2tmojxgqza",
  "status": "queued",
  "created": "2022-06-07T20:31:30.234+00:00",
  "pin": {
    "cid": "baeaaadjsge2cyojtgy2tmojxgqza",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsge2cyojtg4ztamrsgu2a' - ✓ SUCCESS

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
{"cid":"baeaaadjsge2cyojtg4ztamrsgu2a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
  status: 'queued',
  created: '2022-06-07T20:31:31.696+00:00',
  pin: {
    cid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
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
  requestid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
  status: 'queued',
  created: 2022-06-07T20:31:31.696Z,
  pin: {
    cid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
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
  "cf-ray": "717c26dcba1e7d2f-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsge2cyojtg4ztamrsgu2a",
  "status": "queued",
  "created": "2022-06-07T20:31:31.696+00:00",
  "pin": {
    "cid": "baeaaadjsge2cyojtg4ztamrsgu2a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsge2cyojtheztgnjuha4a' - ✓ SUCCESS

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
{"cid":"baeaaadjsge2cyojtheztgnjuha4a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsge2cyojtheztgnjuha4a',
  status: 'queued',
  created: '2022-06-07T20:31:33.454+00:00',
  pin: {
    cid: 'baeaaadjsge2cyojtheztgnjuha4a',
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
  requestid: 'baeaaadjsge2cyojtheztgnjuha4a',
  status: 'queued',
  created: 2022-06-07T20:31:33.454Z,
  pin: {
    cid: 'baeaaadjsge2cyojtheztgnjuha4a',
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
  "cf-ray": "717c26e59f103104-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsge2cyojtheztgnjuha4a",
  "status": "queued",
  "created": "2022-06-07T20:31:33.454+00:00",
  "pin": {
    "cid": "baeaaadjsge2cyojtheztgnjuha4a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsge2cyojthe4tambzhe3q' - ✓ SUCCESS

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
{"cid":"baeaaadjsge2cyojthe4tambzhe3q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsge2cyojthe4tambzhe3q',
  status: 'queued',
  created: '2022-06-07T20:31:36.292+00:00',
  pin: {
    cid: 'baeaaadjsge2cyojthe4tambzhe3q',
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
  requestid: 'baeaaadjsge2cyojthe4tambzhe3q',
  status: 'queued',
  created: 2022-06-07T20:31:36.292Z,
  pin: {
    cid: 'baeaaadjsge2cyojthe4tambzhe3q',
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
  "cf-ray": "717c26f9ea497ceb-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsge2cyojthe4tambzhe3q",
  "status": "queued",
  "created": "2022-06-07T20:31:36.292+00:00",
  "pin": {
    "cid": "baeaaadjsge2cyojthe4tambzhe3q",
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
      requestid: 'baeaaadjsge2cyojthe4tambzhe3q',
      status: 'queued',
      created: '2022-06-07T20:31:36.292+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojthe4tambzhe3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsge2cyojtheztgnjuha4a',
      status: 'queued',
      created: '2022-06-07T20:31:33.454+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojtheztgnjuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
      status: 'queued',
      created: '2022-06-07T20:31:31.696+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsge2cyojtgy2tmojxgqza',
      status: 'queued',
      created: '2022-06-07T20:31:30.234+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojtgy2tmojxgqza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsge2cyojtgu3temjqgi4a',
      status: 'queued',
      created: '2022-06-07T20:31:28.278+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojtgu3temjqgi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsga3cynjugqztanrxgeyq',
      status: 'queued',
      created: '2022-06-07T20:31:20.063+00:00',
      pin: {
        cid: 'baeaaadjsga3cynjugqztanrxgeyq',
        meta: null,
        name: '7e7e61ca-5e83-4843-b89b-572c9db12aba',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
      status: 'queued',
      created: '2022-06-07T20:31:16.343+00:00',
      pin: {
        cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
      status: 'queued',
      created: '2022-06-07T20:31:07.005+00:00',
      pin: {
        cid: 'baeaaadjrhezcymjugizdgnzshe2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdkmbqheydamrrge',
      status: 'queued',
      created: '2022-06-07T20:19:34.738+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqheydamrrge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: '2022-06-07T20:19:33.179+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
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
      requestid: 'baeaaadjsge2cyojthe4tambzhe3q',
      status: 'queued',
      created: 2022-06-07T20:31:36.292Z,
      pin: {
        cid: 'baeaaadjsge2cyojthe4tambzhe3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsge2cyojtheztgnjuha4a',
      status: 'queued',
      created: 2022-06-07T20:31:33.454Z,
      pin: {
        cid: 'baeaaadjsge2cyojtheztgnjuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
      status: 'queued',
      created: 2022-06-07T20:31:31.696Z,
      pin: {
        cid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsge2cyojtgy2tmojxgqza',
      status: 'queued',
      created: 2022-06-07T20:31:30.234Z,
      pin: {
        cid: 'baeaaadjsge2cyojtgy2tmojxgqza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsge2cyojtgu3temjqgi4a',
      status: 'queued',
      created: 2022-06-07T20:31:28.278Z,
      pin: {
        cid: 'baeaaadjsge2cyojtgu3temjqgi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsga3cynjugqztanrxgeyq',
      status: 'queued',
      created: 2022-06-07T20:31:20.063Z,
      pin: {
        cid: 'baeaaadjsga3cynjugqztanrxgeyq',
        name: '7e7e61ca-5e83-4843-b89b-572c9db12aba',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
      status: 'queued',
      created: 2022-06-07T20:31:16.343Z,
      pin: {
        cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
      status: 'queued',
      created: 2022-06-07T20:31:07.005Z,
      pin: {
        cid: 'baeaaadjrhezcymjugizdgnzshe2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdkmbqheydamrrge',
      status: 'queued',
      created: 2022-06-07T20:19:34.738Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqheydamrrge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: 2022-06-07T20:19:33.179Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
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
  "cf-ray": "717c27020ffd7c6b-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:38 GMT",
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
      "requestid": "baeaaadjsge2cyojthe4tambzhe3q",
      "status": "queued",
      "created": "2022-06-07T20:31:36.292+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojthe4tambzhe3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsge2cyojtheztgnjuha4a",
      "status": "queued",
      "created": "2022-06-07T20:31:33.454+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojtheztgnjuha4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsge2cyojtg4ztamrsgu2a",
      "status": "queued",
      "created": "2022-06-07T20:31:31.696+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojtg4ztamrsgu2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsge2cyojtgy2tmojxgqza",
      "status": "queued",
      "created": "2022-06-07T20:31:30.234+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojtgy2tmojxgqza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsge2cyojtgu3temjqgi4a",
      "status": "queued",
      "created": "2022-06-07T20:31:28.278+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojtgu3temjqgi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsga3cynjugqztanrxgeyq",
      "status": "queued",
      "created": "2022-06-07T20:31:20.063+00:00",
      "pin": {
        "cid": "baeaaadjsga3cynjugqztanrxgeyq",
        "meta": null,
        "name": "7e7e61ca-5e83-4843-b89b-572c9db12aba",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgaysymjwgyytsnbqgi4a",
      "status": "queued",
      "created": "2022-06-07T20:31:16.343+00:00",
      "pin": {
        "cid": "baeaaadjsgaysymjwgyytsnbqgi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrhezcymjugizdgnzshe2q",
      "status": "queued",
      "created": "2022-06-07T20:31:07.005+00:00",
      "pin": {
        "cid": "baeaaadjrhezcymjugizdgnzshe2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdkmbqheydamrrge",
      "status": "queued",
      "created": "2022-06-07T20:19:34.738+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqheydamrrge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdkmbqgi4tanrqha",
      "status": "queued",
      "created": "2022-06-07T20:19:33.179+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqgi4tanrqha",
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

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T20%3A19%3A33.179Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T20%3A19%3A33.179Z
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: '2022-06-07T20:19:33.179+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojygi2tsnjzgu',
      status: 'queued',
      created: '2022-06-07T20:19:31.501+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojygi2tsnjzgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojxgq4tmnzzga',
      status: 'queued',
      created: '2022-06-07T20:19:29.947+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojxgq4tmnzzga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojwgyzdanbygq',
      status: 'queued',
      created: '2022-06-07T20:19:27.897+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojwgyzdanbygq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
      status: 'queued',
      created: '2022-06-07T20:19:19.765+00:00',
      pin: {
        cid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
        meta: null,
        name: '04a185e1-4f40-4cb8-a09e-7e7a4465e2b3',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'queued',
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
      status: 'queued',
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
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: 2022-06-07T20:19:33.179Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojygi2tsnjzgu',
      status: 'queued',
      created: 2022-06-07T20:19:31.501Z,
      pin: {
        cid: 'baeaaadbygiwdiojygi2tsnjzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojxgq4tmnzzga',
      status: 'queued',
      created: 2022-06-07T20:19:29.947Z,
      pin: {
        cid: 'baeaaadbygiwdiojxgq4tmnzzga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojwgyzdanbygq',
      status: 'queued',
      created: 2022-06-07T20:19:27.897Z,
      pin: {
        cid: 'baeaaadbygiwdiojwgyzdanbygq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
      status: 'queued',
      created: 2022-06-07T20:19:19.765Z,
      pin: {
        cid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
        name: '04a185e1-4f40-4cb8-a09e-7e7a4465e2b3',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'queued',
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
      status: 'queued',
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
  "cf-ray": "717c27091c125220-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:40 GMT",
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
      "requestid": "baeaaadbygiwdkmbqgi4tanrqha",
      "status": "queued",
      "created": "2022-06-07T20:19:33.179+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqgi4tanrqha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojygi2tsnjzgu",
      "status": "queued",
      "created": "2022-06-07T20:19:31.501+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojygi2tsnjzgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojxgq4tmnzzga",
      "status": "queued",
      "created": "2022-06-07T20:19:29.947+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojxgq4tmnzzga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojwgyzdanbygq",
      "status": "queued",
      "created": "2022-06-07T20:19:27.897+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojwgyzdanbygq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgqwdmmzxha2dsnbtgq",
      "status": "queued",
      "created": "2022-06-07T20:19:19.765+00:00",
      "pin": {
        "cid": "baeaaadbxgqwdmmzxha2dsnbtgq",
        "meta": null,
        "name": "04a185e1-4f40-4cb8-a09e-7e7a4465e2b3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhewdgobtgu4tqnrqgm",
      "status": "queued",
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
      "status": "queued",
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
      requestid: 'baeaaadjsga3cynjugqztanrxgeyq',
      status: 'queued',
      created: '2022-06-07T20:31:20.063+00:00',
      pin: {
        cid: 'baeaaadjsga3cynjugqztanrxgeyq',
        meta: null,
        name: '7e7e61ca-5e83-4843-b89b-572c9db12aba',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
      status: 'queued',
      created: '2022-06-07T20:31:16.343+00:00',
      pin: {
        cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
      status: 'queued',
      created: '2022-06-07T20:31:07.005+00:00',
      pin: {
        cid: 'baeaaadjrhezcymjugizdgnzshe2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdkmbqheydamrrge',
      status: 'queued',
      created: '2022-06-07T20:19:34.738+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqheydamrrge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: '2022-06-07T20:19:33.179+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojygi2tsnjzgu',
      status: 'queued',
      created: '2022-06-07T20:19:31.501+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojygi2tsnjzgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojxgq4tmnzzga',
      status: 'queued',
      created: '2022-06-07T20:19:29.947+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojxgq4tmnzzga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojwgyzdanbygq',
      status: 'queued',
      created: '2022-06-07T20:19:27.897+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojwgyzdanbygq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
      status: 'queued',
      created: '2022-06-07T20:19:19.765+00:00',
      pin: {
        cid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
        meta: null,
        name: '04a185e1-4f40-4cb8-a09e-7e7a4465e2b3',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'queued',
      created: '2022-06-07T20:19:15.705+00:00',
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
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
      requestid: 'baeaaadjsga3cynjugqztanrxgeyq',
      status: 'queued',
      created: 2022-06-07T20:31:20.063Z,
      pin: {
        cid: 'baeaaadjsga3cynjugqztanrxgeyq',
        name: '7e7e61ca-5e83-4843-b89b-572c9db12aba',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
      status: 'queued',
      created: 2022-06-07T20:31:16.343Z,
      pin: {
        cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
      status: 'queued',
      created: 2022-06-07T20:31:07.005Z,
      pin: {
        cid: 'baeaaadjrhezcymjugizdgnzshe2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdkmbqheydamrrge',
      status: 'queued',
      created: 2022-06-07T20:19:34.738Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqheydamrrge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: 2022-06-07T20:19:33.179Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojygi2tsnjzgu',
      status: 'queued',
      created: 2022-06-07T20:19:31.501Z,
      pin: {
        cid: 'baeaaadbygiwdiojygi2tsnjzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojxgq4tmnzzga',
      status: 'queued',
      created: 2022-06-07T20:19:29.947Z,
      pin: {
        cid: 'baeaaadbygiwdiojxgq4tmnzzga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojwgyzdanbygq',
      status: 'queued',
      created: 2022-06-07T20:19:27.897Z,
      pin: {
        cid: 'baeaaadbygiwdiojwgyzdanbygq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
      status: 'queued',
      created: 2022-06-07T20:19:19.765Z,
      pin: {
        cid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
        name: '04a185e1-4f40-4cb8-a09e-7e7a4465e2b3',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'queued',
      created: 2022-06-07T20:19:15.705Z,
      pin: {
        cid: 'baeaaadbwhewdgobtgu4tqnrqgm',
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
  "cf-ray": "717c26c0c8e77cd7-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:27 GMT",
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
      "requestid": "baeaaadjsga3cynjugqztanrxgeyq",
      "status": "queued",
      "created": "2022-06-07T20:31:20.063+00:00",
      "pin": {
        "cid": "baeaaadjsga3cynjugqztanrxgeyq",
        "meta": null,
        "name": "7e7e61ca-5e83-4843-b89b-572c9db12aba",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgaysymjwgyytsnbqgi4a",
      "status": "queued",
      "created": "2022-06-07T20:31:16.343+00:00",
      "pin": {
        "cid": "baeaaadjsgaysymjwgyytsnbqgi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrhezcymjugizdgnzshe2q",
      "status": "queued",
      "created": "2022-06-07T20:31:07.005+00:00",
      "pin": {
        "cid": "baeaaadjrhezcymjugizdgnzshe2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdkmbqheydamrrge",
      "status": "queued",
      "created": "2022-06-07T20:19:34.738+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqheydamrrge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdkmbqgi4tanrqha",
      "status": "queued",
      "created": "2022-06-07T20:19:33.179+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqgi4tanrqha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojygi2tsnjzgu",
      "status": "queued",
      "created": "2022-06-07T20:19:31.501+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojygi2tsnjzgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojxgq4tmnzzga",
      "status": "queued",
      "created": "2022-06-07T20:19:29.947+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojxgq4tmnzzga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojwgyzdanbygq",
      "status": "queued",
      "created": "2022-06-07T20:19:27.897+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojwgyzdanbygq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgqwdmmzxha2dsnbtgq",
      "status": "queued",
      "created": "2022-06-07T20:19:19.765+00:00",
      "pin": {
        "cid": "baeaaadbxgqwdmmzxha2dsnbtgq",
        "meta": null,
        "name": "04a185e1-4f40-4cb8-a09e-7e7a4465e2b3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhewdgobtgu4tqnrqgm",
      "status": "queued",
      "created": "2022-06-07T20:19:15.705+00:00",
      "pin": {
        "cid": "baeaaadbwhewdgobtgu4tqnrqgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Can delete pin with requestid 'baeaaadjsge2cyojthe4tambzhe3q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsge2cyojthe4tambzhe3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsge2cyojthe4tambzhe3q
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
  "cf-ray": "717c271d9cd07ead-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsge2cyojtheztgnjuha4a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsge2cyojtheztgnjuha4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsge2cyojtheztgnjuha4a
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
  "cf-ray": "717c2723dca83209-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsge2cyojtg4ztamrsgu2a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsge2cyojtg4ztamrsgu2a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsge2cyojtg4ztamrsgu2a
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
  "cf-ray": "717c272a0c6e7ceb-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsge2cyojtgy2tmojxgqza' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsge2cyojtgy2tmojxgqza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsge2cyojtgy2tmojxgqza
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
  "cf-ray": "717c27308a9d7c6b-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsge2cyojtgu3temjqgi4a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsge2cyojtgu3temjqgi4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsge2cyojtgu3temjqgi4a
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
  "cf-ray": "717c27369a737ed1-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsga3cynjugqztanrxgeyq' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsga3cynjugqztanrxgeyq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsga3cynjugqztanrxgeyq
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
  "cf-ray": "717c273cdbf6533d-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:47 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsgaysymjwgyytsnbqgi4a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsgaysymjwgyytsnbqgi4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsgaysymjwgyytsnbqgi4a
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
  "cf-ray": "717c27431e5b7be0-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrhezcymjugizdgnzshe2q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrhezcymjugizdgnzshe2q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrhezcymjugizdgnzshe2q
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
  "cf-ray": "717c2749590a7be0-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbygiwdkmbqheydamrrge' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbygiwdkmbqheydamrrge

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbygiwdkmbqheydamrrge
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
  "cf-ray": "717c274fab077aff-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbygiwdkmbqgi4tanrqha' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbygiwdkmbqgi4tanrqha

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbygiwdkmbqgi4tanrqha
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
  "cf-ray": "717c2755df81527b-LAX",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:51 GMT",
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
      requestid: 'baeaaadbygiwdiojygi2tsnjzgu',
      status: 'queued',
      created: '2022-06-07T20:19:31.501+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojygi2tsnjzgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojxgq4tmnzzga',
      status: 'queued',
      created: '2022-06-07T20:19:29.947+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojxgq4tmnzzga',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdiojwgyzdanbygq',
      status: 'queued',
      created: '2022-06-07T20:19:27.897+00:00',
      pin: {
        cid: 'baeaaadbygiwdiojwgyzdanbygq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
      status: 'queued',
      created: '2022-06-07T20:19:19.765+00:00',
      pin: {
        cid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
        meta: null,
        name: '04a185e1-4f40-4cb8-a09e-7e7a4465e2b3',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'queued',
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
      status: 'queued',
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
      requestid: 'baeaaadbygiwdiojygi2tsnjzgu',
      status: 'queued',
      created: 2022-06-07T20:19:31.501Z,
      pin: {
        cid: 'baeaaadbygiwdiojygi2tsnjzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojxgq4tmnzzga',
      status: 'queued',
      created: 2022-06-07T20:19:29.947Z,
      pin: {
        cid: 'baeaaadbygiwdiojxgq4tmnzzga',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdiojwgyzdanbygq',
      status: 'queued',
      created: 2022-06-07T20:19:27.897Z,
      pin: {
        cid: 'baeaaadbygiwdiojwgyzdanbygq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
      status: 'queued',
      created: 2022-06-07T20:19:19.765Z,
      pin: {
        cid: 'baeaaadbxgqwdmmzxha2dsnbtgq',
        name: '04a185e1-4f40-4cb8-a09e-7e7a4465e2b3',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwhewdgobtgu4tqnrqgm',
      status: 'queued',
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
      status: 'queued',
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
  "cf-ray": "717c275c1c837c6b-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:52 GMT",
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
      "requestid": "baeaaadbygiwdiojygi2tsnjzgu",
      "status": "queued",
      "created": "2022-06-07T20:19:31.501+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojygi2tsnjzgu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojxgq4tmnzzga",
      "status": "queued",
      "created": "2022-06-07T20:19:29.947+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojxgq4tmnzzga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdiojwgyzdanbygq",
      "status": "queued",
      "created": "2022-06-07T20:19:27.897+00:00",
      "pin": {
        "cid": "baeaaadbygiwdiojwgyzdanbygq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgqwdmmzxha2dsnbtgq",
      "status": "queued",
      "created": "2022-06-07T20:19:19.765+00:00",
      "pin": {
        "cid": "baeaaadbxgqwdmmzxha2dsnbtgq",
        "meta": null,
        "name": "04a185e1-4f40-4cb8-a09e-7e7a4465e2b3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwhewdgobtgu4tqnrqgm",
      "status": "queued",
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
      "status": "queued",
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
      requestid: 'baeaaadjsge2cyojthe4tambzhe3q',
      status: 'queued',
      created: '2022-06-07T20:31:36.292+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojthe4tambzhe3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsge2cyojtheztgnjuha4a',
      status: 'queued',
      created: '2022-06-07T20:31:33.454+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojtheztgnjuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
      status: 'queued',
      created: '2022-06-07T20:31:31.696+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsge2cyojtgy2tmojxgqza',
      status: 'queued',
      created: '2022-06-07T20:31:30.234+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojtgy2tmojxgqza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsge2cyojtgu3temjqgi4a',
      status: 'queued',
      created: '2022-06-07T20:31:28.278+00:00',
      pin: {
        cid: 'baeaaadjsge2cyojtgu3temjqgi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsga3cynjugqztanrxgeyq',
      status: 'queued',
      created: '2022-06-07T20:31:20.063+00:00',
      pin: {
        cid: 'baeaaadjsga3cynjugqztanrxgeyq',
        meta: null,
        name: '7e7e61ca-5e83-4843-b89b-572c9db12aba',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
      status: 'queued',
      created: '2022-06-07T20:31:16.343+00:00',
      pin: {
        cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
      status: 'queued',
      created: '2022-06-07T20:31:07.005+00:00',
      pin: {
        cid: 'baeaaadjrhezcymjugizdgnzshe2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdkmbqheydamrrge',
      status: 'queued',
      created: '2022-06-07T20:19:34.738+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqheydamrrge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: '2022-06-07T20:19:33.179+00:00',
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
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
      requestid: 'baeaaadjsge2cyojthe4tambzhe3q',
      status: 'queued',
      created: 2022-06-07T20:31:36.292Z,
      pin: {
        cid: 'baeaaadjsge2cyojthe4tambzhe3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsge2cyojtheztgnjuha4a',
      status: 'queued',
      created: 2022-06-07T20:31:33.454Z,
      pin: {
        cid: 'baeaaadjsge2cyojtheztgnjuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
      status: 'queued',
      created: 2022-06-07T20:31:31.696Z,
      pin: {
        cid: 'baeaaadjsge2cyojtg4ztamrsgu2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsge2cyojtgy2tmojxgqza',
      status: 'queued',
      created: 2022-06-07T20:31:30.234Z,
      pin: {
        cid: 'baeaaadjsge2cyojtgy2tmojxgqza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsge2cyojtgu3temjqgi4a',
      status: 'queued',
      created: 2022-06-07T20:31:28.278Z,
      pin: {
        cid: 'baeaaadjsge2cyojtgu3temjqgi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsga3cynjugqztanrxgeyq',
      status: 'queued',
      created: 2022-06-07T20:31:20.063Z,
      pin: {
        cid: 'baeaaadjsga3cynjugqztanrxgeyq',
        name: '7e7e61ca-5e83-4843-b89b-572c9db12aba',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
      status: 'queued',
      created: 2022-06-07T20:31:16.343Z,
      pin: {
        cid: 'baeaaadjsgaysymjwgyytsnbqgi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrhezcymjugizdgnzshe2q',
      status: 'queued',
      created: 2022-06-07T20:31:07.005Z,
      pin: {
        cid: 'baeaaadjrhezcymjugizdgnzshe2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdkmbqheydamrrge',
      status: 'queued',
      created: 2022-06-07T20:19:34.738Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqheydamrrge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbygiwdkmbqgi4tanrqha',
      status: 'queued',
      created: 2022-06-07T20:19:33.179Z,
      pin: {
        cid: 'baeaaadbygiwdkmbqgi4tanrqha',
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
  "cf-ray": "717c2713cb887c80-LAX",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 20:31:41 GMT",
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
      "requestid": "baeaaadjsge2cyojthe4tambzhe3q",
      "status": "queued",
      "created": "2022-06-07T20:31:36.292+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojthe4tambzhe3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsge2cyojtheztgnjuha4a",
      "status": "queued",
      "created": "2022-06-07T20:31:33.454+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojtheztgnjuha4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsge2cyojtg4ztamrsgu2a",
      "status": "queued",
      "created": "2022-06-07T20:31:31.696+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojtg4ztamrsgu2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsge2cyojtgy2tmojxgqza",
      "status": "queued",
      "created": "2022-06-07T20:31:30.234+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojtgy2tmojxgqza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsge2cyojtgu3temjqgi4a",
      "status": "queued",
      "created": "2022-06-07T20:31:28.278+00:00",
      "pin": {
        "cid": "baeaaadjsge2cyojtgu3temjqgi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsga3cynjugqztanrxgeyq",
      "status": "queued",
      "created": "2022-06-07T20:31:20.063+00:00",
      "pin": {
        "cid": "baeaaadjsga3cynjugqztanrxgeyq",
        "meta": null,
        "name": "7e7e61ca-5e83-4843-b89b-572c9db12aba",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgaysymjwgyytsnbqgi4a",
      "status": "queued",
      "created": "2022-06-07T20:31:16.343+00:00",
      "pin": {
        "cid": "baeaaadjsgaysymjwgyytsnbqgi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrhezcymjugizdgnzshe2q",
      "status": "queued",
      "created": "2022-06-07T20:31:07.005+00:00",
      "pin": {
        "cid": "baeaaadjrhezcymjugizdgnzshe2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdkmbqheydamrrge",
      "status": "queued",
      "created": "2022-06-07T20:19:34.738+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqheydamrrge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbygiwdkmbqgi4tanrqha",
      "status": "queued",
      "created": "2022-06-07T20:19:33.179+00:00",
      "pin": {
        "cid": "baeaaadbygiwdkmbqgi4tanrqha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
