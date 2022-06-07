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
  "cf-ray": "71755539af2f6787-DFW",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:39:50 GMT",
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
  "cf-ray": "7175553e8cc766f5-DFW",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:39:51 GMT",
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
## Pins post of CID 'baeaaadjrga2cymjrheytgmbugi3a' - ✘ FAILED

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
{"cid":"baeaaadjrga2cymjrheytgmbugi3a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
  status: 'queued',
  created: '2022-06-07T00:39:52.423+00:00',
  pin: {
    cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
  requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
  status: 'queued',
  created: 2022-06-07T00:39:52.423Z,
  pin: {
    cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
  "cf-ray": "71755544ebe29eb6-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:39:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrga2cymjrheytgmbugi3a",
  "status": "queued",
  "created": "2022-06-07T00:39:52.423+00:00",
  "pin": {
    "cid": "baeaaadjrga2cymjrheytgmbugi3a",
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

#### Request - DELETE: https://nft.storage/api/pins/baeaaaczrga3symzyhaytenbt

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaaczrga3symzyhaytenbt
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
  "cf-ray": "7175555dea3f0c2b-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:39:56 GMT",
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
{"cid":"baeaaaczrga3symzyhaytenbt"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaaczrga3symzyhaytenbt',
  status: 'queued',
  created: '2022-06-07T00:39:54.479+00:00',
  pin: {
    cid: 'baeaaaczrga3symzyhaytenbt',
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
  requestid: 'baeaaaczrga3symzyhaytenbt',
  status: 'queued',
  created: 2022-06-07T00:39:54.479Z,
  pin: {
    cid: 'baeaaaczrga3symzyhaytenbt',
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
  "cf-ray": "717555525ce6ec4e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:39:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaaczrga3symzyhaytenbt",
  "status": "queued",
  "created": "2022-06-07T00:39:54.479+00:00",
  "pin": {
    "cid": "baeaaaczrga3symzyhaytenbt",
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
      requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
      status: 'queued',
      created: '2022-06-07T00:39:52.423+00:00',
      pin: {
        cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
      requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
      status: 'queued',
      created: 2022-06-07T00:39:52.423Z,
      pin: {
        cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
  "cf-ray": "717555624ae766f5-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:39:57 GMT",
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
      "requestid": "baeaaadjrga2cymjrheytgmbugi3a",
      "status": "queued",
      "created": "2022-06-07T00:39:52.423+00:00",
      "pin": {
        "cid": "baeaaadjrga2cymjrheytgmbugi3a",
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

#### Request - GET: https://nft.storage/api/pins/baeaaadjrgeycyobzgi3tonjugq4q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgeycyobzgi3tonjugq4q
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
  "cf-ray": "71755586894d0c2b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:02 GMT",
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

#### Request - GET: https://nft.storage/api/pins/baeaaadjrgezcynjzga2denzvgi3a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgezcynjzga2denzvgi3a
```
{
  requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
  status: 'queued',
  created: '2022-06-07T00:40:01.088+00:00',
  pin: {
    cid: 'baeaaadjrgezcynjzga2denzvgi3a',
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
  requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
  status: 'queued',
  created: 2022-06-07T00:40:01.088Z,
  pin: {
    cid: 'baeaaadjrgezcynjzga2denzvgi3a',
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
  "cf-ray": "7175558cdec49f1f-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgezcynjzga2denzvgi3a",
  "status": "queued",
  "created": "2022-06-07T00:40:01.088+00:00",
  "pin": {
    "cid": "baeaaadjrgezcynjzga2denzvgi3a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjrgeycyobzgi3tonjugq4q' can have cid 'baeaaadjrgeycyobzgi3tonjugq4q' replaced with 'baeaaadjrgezcynjzga2denzvgi3a' - ✓ SUCCESS

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

#### Request - POST: https://nft.storage/api/pins/baeaaadjrgeycyobzgi3tonjugq4q

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgezcynjzga2denzvgi3a"}
```
#### Response data from https://nft.storage/api/pins/baeaaadjrgeycyobzgi3tonjugq4q
```
{
  requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
  status: 'queued',
  created: '2022-06-07T00:40:01.088+00:00',
  pin: {
    cid: 'baeaaadjrgezcynjzga2denzvgi3a',
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
  requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
  status: 'queued',
  created: 2022-06-07T00:40:01.088Z,
  pin: {
    cid: 'baeaaadjrgezcynjzga2denzvgi3a',
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
  "cf-ray": "717555756d9baa73-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:02 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgezcynjzga2denzvgi3a",
  "status": "queued",
  "created": "2022-06-07T00:40:01.088+00:00",
  "pin": {
    "cid": "baeaaadjrgezcynjzga2denzvgi3a",
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

  ✓ Could obtain requestid from new pin (baeaaadjrgeycyobzgi3tonjugq4q) (success)

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
{"cid":"baeaaadjrgeycyobzgi3tonjugq4q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgeycyobzgi3tonjugq4q',
  status: 'queued',
  created: '2022-06-07T00:39:58.267+00:00',
  pin: {
    cid: 'baeaaadjrgeycyobzgi3tonjugq4q',
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
  requestid: 'baeaaadjrgeycyobzgi3tonjugq4q',
  status: 'queued',
  created: 2022-06-07T00:39:58.267Z,
  pin: {
    cid: 'baeaaadjrgeycyobzgi3tonjugq4q',
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
  "cf-ray": "7175556aaba69eca-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:39:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgeycyobzgi3tonjugq4q",
  "status": "queued",
  "created": "2022-06-07T00:39:58.267+00:00",
  "pin": {
    "cid": "baeaaadjrgeycyobzgi3tonjugq4q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can retrieve pin with name '94c40024-01d3-4153-9d34-a6f48ad5a693' via the 'exact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=94c40024-01d3-4153-9d34-a6f48ad5a693&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=94c40024-01d3-4153-9d34-a6f48ad5a693&match=exact
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
  "cf-ray": "717555a3e9656796-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:07 GMT",
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
## Can retrieve pin with name '94C40024-01D3-4153-9D34-A6F48AD5A693' via the 'iexact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=94C40024-01D3-4153-9D34-A6F48AD5A693&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=94C40024-01D3-4153-9D34-A6F48AD5A693&match=iexact
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
  "cf-ray": "717555a95fd50c2b-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:08 GMT",
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
## Can retrieve pin with name '01d3-4153-9d34-a6f' via the 'partial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=01d3-4153-9d34-a6f&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=01d3-4153-9d34-a6f&match=partial
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
  "cf-ray": "717555af7ac06719-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:09 GMT",
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
## Can retrieve pin with name '01D3-4153-9D34-A6F' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=01D3-4153-9D34-A6F&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=01D3-4153-9D34-A6F&match=ipartial
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
  "cf-ray": "717555b5c8746749-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:10 GMT",
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
## Can create a pin with name='94c40024-01d3-4153-9d34-a6f48ad5a693' - ✘ FAILED

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
{"cid":"baeaaadjrge3syobzge3tkmjsg42q","name":"94c40024-01d3-4153-9d34-a6f48ad5a693"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrge3syobzge3tkmjsg42q',
  status: 'queued',
  created: '2022-06-07T00:40:05.792+00:00',
  pin: {
    cid: 'baeaaadjrge3syobzge3tkmjsg42q',
    meta: null,
    name: '94c40024-01d3-4153-9d34-a6f48ad5a693',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadjrge3syobzge3tkmjsg42q',
  status: 'queued',
  created: 2022-06-07T00:40:05.792Z,
  pin: {
    cid: 'baeaaadjrge3syobzge3tkmjsg42q',
    name: '94c40024-01d3-4153-9d34-a6f48ad5a693',
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
  "cf-ray": "717555967b45678d-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrge3syobzge3tkmjsg42q",
  "status": "queued",
  "created": "2022-06-07T00:40:05.792+00:00",
  "pin": {
    "cid": "baeaaadjrge3syobzge3tkmjsg42q",
    "meta": null,
    "name": "94c40024-01d3-4153-9d34-a6f48ad5a693",
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2cyobvgmytqojvha3a' - ✓ SUCCESS

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
{"cid":"baeaaadjrgi2cyobvgmytqojvha3a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgi2cyobvgmytqojvha3a',
  status: 'queued',
  created: '2022-06-07T00:40:12.349+00:00',
  pin: {
    cid: 'baeaaadjrgi2cyobvgmytqojvha3a',
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
  requestid: 'baeaaadjrgi2cyobvgmytqojvha3a',
  status: 'queued',
  created: 2022-06-07T00:40:12.349Z,
  pin: {
    cid: 'baeaaadjrgi2cyobvgmytqojvha3a',
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
  "cf-ray": "717555c1ff470b7e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2cyobvgmytqojvha3a",
  "status": "queued",
  "created": "2022-06-07T00:40:12.349+00:00",
  "pin": {
    "cid": "baeaaadjrgi2cyobvgmytqojvha3a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2cyobvgm4tanryhe3a' - ✓ SUCCESS

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
{"cid":"baeaaadjrgi2cyobvgm4tanryhe3a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
  status: 'queued',
  created: '2022-06-07T00:40:14.122+00:00',
  pin: {
    cid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
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
  requestid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
  status: 'queued',
  created: 2022-06-07T00:40:14.122Z,
  pin: {
    cid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
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
  "cf-ray": "717555cd886067a2-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2cyobvgm4tanryhe3a",
  "status": "queued",
  "created": "2022-06-07T00:40:14.122+00:00",
  "pin": {
    "cid": "baeaaadjrgi2cyobvgm4tanryhe3a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2cyobvgq3dcobyga2q' - ✓ SUCCESS

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
{"cid":"baeaaadjrgi2cyobvgq3dcobyga2q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
  status: 'queued',
  created: '2022-06-07T00:40:15.77+00:00',
  pin: {
    cid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
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
  requestid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
  status: 'queued',
  created: 2022-06-07T00:40:15.770Z,
  pin: {
    cid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
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
  "cf-ray": "717555d82f25aa6d-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2cyobvgq3dcobyga2q",
  "status": "queued",
  "created": "2022-06-07T00:40:15.77+00:00",
  "pin": {
    "cid": "baeaaadjrgi2cyobvgq3dcobyga2q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2cyobvgyzdoojugi4a' - ✓ SUCCESS

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
{"cid":"baeaaadjrgi2cyobvgyzdoojugi4a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
  status: 'queued',
  created: '2022-06-07T00:40:17.321+00:00',
  pin: {
    cid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
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
  requestid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
  status: 'queued',
  created: 2022-06-07T00:40:17.321Z,
  pin: {
    cid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
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
  "cf-ray": "717555e2787a6749-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2cyobvgyzdoojugi4a",
  "status": "queued",
  "created": "2022-06-07T00:40:17.321+00:00",
  "pin": {
    "cid": "baeaaadjrgi2cyobvgyzdoojugi4a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2cyobvgy3tsobugm2q' - ✓ SUCCESS

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
{"cid":"baeaaadjrgi2cyobvgy3tsobugm2q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
  status: 'queued',
  created: '2022-06-07T00:40:18.869+00:00',
  pin: {
    cid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
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
  requestid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
  status: 'queued',
  created: 2022-06-07T00:40:18.869Z,
  pin: {
    cid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
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
  "cf-ray": "717555eb2be99f16-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:20 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2cyobvgy3tsobugm2q",
  "status": "queued",
  "created": "2022-06-07T00:40:18.869+00:00",
  "pin": {
    "cid": "baeaaadjrgi2cyobvgy3tsobugm2q",
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
      requestid: 'baeaaadbtgy4cyojwhe3demjtgi',
      status: 'queued',
      created: '2022-06-07T00:40:19.395+00:00',
      pin: {
        cid: 'baeaaadbtgy4cyojwhe3demjtgi',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
      status: 'queued',
      created: '2022-06-07T00:40:18.869+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
      status: 'queued',
      created: '2022-06-07T00:40:17.321+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbtgy4cyojwgeydanjthe',
      status: 'queued',
      created: '2022-06-07T00:40:17.124+00:00',
      pin: {
        cid: 'baeaaadbtgy4cyojwgeydanjthe',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
      status: 'queued',
      created: '2022-06-07T00:40:15.77+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
      status: 'queued',
      created: '2022-06-07T00:40:14.122+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgmytqojvha3a',
      status: 'queued',
      created: '2022-06-07T00:40:12.349+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgmytqojvha3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgyysymjvg44tonbzgq3a',
      status: 'queued',
      created: '2022-06-07T00:40:10.269+00:00',
      pin: {
        cid: 'baeaaadjtgyysymjvg44tonbzgq3a',
        meta: null,
        name: 'c5a55a78-5ae9-44ec-bba3-a55d239ab874',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrge3syobzge3tkmjsg42q',
      status: 'queued',
      created: '2022-06-07T00:40:05.792+00:00',
      pin: {
        cid: 'baeaaadjrge3syobzge3tkmjsg42q',
        meta: null,
        name: '94c40024-01d3-4153-9d34-a6f48ad5a693',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgu2syobzgm4tmojqga4a',
      status: 'queued',
      created: '2022-06-07T00:40:05.532+00:00',
      pin: {
        cid: 'baeaaadjtgu2syobzgm4tmojqga4a',
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
      requestid: 'baeaaadbtgy4cyojwhe3demjtgi',
      status: 'queued',
      created: 2022-06-07T00:40:19.395Z,
      pin: {
        cid: 'baeaaadbtgy4cyojwhe3demjtgi',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
      status: 'queued',
      created: 2022-06-07T00:40:18.869Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
      status: 'queued',
      created: 2022-06-07T00:40:17.321Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbtgy4cyojwgeydanjthe',
      status: 'queued',
      created: 2022-06-07T00:40:17.124Z,
      pin: {
        cid: 'baeaaadbtgy4cyojwgeydanjthe',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
      status: 'queued',
      created: 2022-06-07T00:40:15.770Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
      status: 'queued',
      created: 2022-06-07T00:40:14.122Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgmytqojvha3a',
      status: 'queued',
      created: 2022-06-07T00:40:12.349Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgmytqojvha3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgyysymjvg44tonbzgq3a',
      status: 'queued',
      created: 2022-06-07T00:40:10.269Z,
      pin: {
        cid: 'baeaaadjtgyysymjvg44tonbzgq3a',
        name: 'c5a55a78-5ae9-44ec-bba3-a55d239ab874',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrge3syobzge3tkmjsg42q',
      status: 'queued',
      created: 2022-06-07T00:40:05.792Z,
      pin: {
        cid: 'baeaaadjrge3syobzge3tkmjsg42q',
        name: '94c40024-01d3-4153-9d34-a6f48ad5a693',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgu2syobzgm4tmojqga4a',
      status: 'queued',
      created: 2022-06-07T00:40:05.532Z,
      pin: {
        cid: 'baeaaadjtgu2syobzgm4tmojqga4a',
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
  "cf-ray": "717555f5e812aa9f-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:21 GMT",
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
      "requestid": "baeaaadbtgy4cyojwhe3demjtgi",
      "status": "queued",
      "created": "2022-06-07T00:40:19.395+00:00",
      "pin": {
        "cid": "baeaaadbtgy4cyojwhe3demjtgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgy3tsobugm2q",
      "status": "queued",
      "created": "2022-06-07T00:40:18.869+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgy3tsobugm2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgyzdoojugi4a",
      "status": "queued",
      "created": "2022-06-07T00:40:17.321+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgyzdoojugi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbtgy4cyojwgeydanjthe",
      "status": "queued",
      "created": "2022-06-07T00:40:17.124+00:00",
      "pin": {
        "cid": "baeaaadbtgy4cyojwgeydanjthe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgq3dcobyga2q",
      "status": "queued",
      "created": "2022-06-07T00:40:15.77+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgq3dcobyga2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgm4tanryhe3a",
      "status": "queued",
      "created": "2022-06-07T00:40:14.122+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgm4tanryhe3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgmytqojvha3a",
      "status": "queued",
      "created": "2022-06-07T00:40:12.349+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgmytqojvha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgyysymjvg44tonbzgq3a",
      "status": "queued",
      "created": "2022-06-07T00:40:10.269+00:00",
      "pin": {
        "cid": "baeaaadjtgyysymjvg44tonbzgq3a",
        "meta": null,
        "name": "c5a55a78-5ae9-44ec-bba3-a55d239ab874",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge3syobzge3tkmjsg42q",
      "status": "queued",
      "created": "2022-06-07T00:40:05.792+00:00",
      "pin": {
        "cid": "baeaaadjrge3syobzge3tkmjsg42q",
        "meta": null,
        "name": "94c40024-01d3-4153-9d34-a6f48ad5a693",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgu2syobzgm4tmojqga4a",
      "status": "queued",
      "created": "2022-06-07T00:40:05.532+00:00",
      "pin": {
        "cid": "baeaaadjtgu2syobzgm4tmojqga4a",
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

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T00%3A40%3A05.532Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T00%3A40%3A05.532Z
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjtgu2syobzgm4tmojqga4a',
      status: 'queued',
      created: '2022-06-07T00:40:05.532+00:00',
      pin: {
        cid: 'baeaaadjtgu2syobzgm4tmojqga4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
      status: 'queued',
      created: '2022-06-07T00:40:01.088+00:00',
      pin: {
        cid: 'baeaaadjrgezcynjzga2denzvgi3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
      status: 'queued',
      created: '2022-06-07T00:39:56.435+00:00',
      pin: {
        cid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
      status: 'queued',
      created: '2022-06-07T00:39:52.423+00:00',
      pin: {
        cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
      requestid: 'baeaaadjtgu2syobzgm4tmojqga4a',
      status: 'queued',
      created: 2022-06-07T00:40:05.532Z,
      pin: {
        cid: 'baeaaadjtgu2syobzgm4tmojqga4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
      status: 'queued',
      created: 2022-06-07T00:40:01.088Z,
      pin: {
        cid: 'baeaaadjrgezcynjzga2denzvgi3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
      status: 'queued',
      created: 2022-06-07T00:39:56.435Z,
      pin: {
        cid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
      status: 'queued',
      created: 2022-06-07T00:39:52.423Z,
      pin: {
        cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
  "cf-ray": "717555fe6a9e0ec6-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:22 GMT",
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
      "requestid": "baeaaadjtgu2syobzgm4tmojqga4a",
      "status": "queued",
      "created": "2022-06-07T00:40:05.532+00:00",
      "pin": {
        "cid": "baeaaadjtgu2syobzgm4tmojqga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgezcynjzga2denzvgi3a",
      "status": "queued",
      "created": "2022-06-07T00:40:01.088+00:00",
      "pin": {
        "cid": "baeaaadjrgezcynjzga2denzvgi3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgq3cynzzgq3tsnzuhe3q",
      "status": "queued",
      "created": "2022-06-07T00:39:56.435+00:00",
      "pin": {
        "cid": "baeaaadjtgq3cynzzgq3tsnzuhe3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga2cymjrheytgmbugi3a",
      "status": "queued",
      "created": "2022-06-07T00:39:52.423+00:00",
      "pin": {
        "cid": "baeaaadjrga2cymjrheytgmbugi3a",
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
      requestid: 'baeaaadjtgyysymjvg44tonbzgq3a',
      status: 'queued',
      created: '2022-06-07T00:40:10.269+00:00',
      pin: {
        cid: 'baeaaadjtgyysymjvg44tonbzgq3a',
        meta: null,
        name: 'c5a55a78-5ae9-44ec-bba3-a55d239ab874',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrge3syobzge3tkmjsg42q',
      status: 'queued',
      created: '2022-06-07T00:40:05.792+00:00',
      pin: {
        cid: 'baeaaadjrge3syobzge3tkmjsg42q',
        meta: null,
        name: '94c40024-01d3-4153-9d34-a6f48ad5a693',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgu2syobzgm4tmojqga4a',
      status: 'queued',
      created: '2022-06-07T00:40:05.532+00:00',
      pin: {
        cid: 'baeaaadjtgu2syobzgm4tmojqga4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
      status: 'queued',
      created: '2022-06-07T00:40:01.088+00:00',
      pin: {
        cid: 'baeaaadjrgezcynjzga2denzvgi3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
      status: 'queued',
      created: '2022-06-07T00:39:56.435+00:00',
      pin: {
        cid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
      status: 'queued',
      created: '2022-06-07T00:39:52.423+00:00',
      pin: {
        cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
      requestid: 'baeaaadjtgyysymjvg44tonbzgq3a',
      status: 'queued',
      created: 2022-06-07T00:40:10.269Z,
      pin: {
        cid: 'baeaaadjtgyysymjvg44tonbzgq3a',
        name: 'c5a55a78-5ae9-44ec-bba3-a55d239ab874',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrge3syobzge3tkmjsg42q',
      status: 'queued',
      created: 2022-06-07T00:40:05.792Z,
      pin: {
        cid: 'baeaaadjrge3syobzge3tkmjsg42q',
        name: '94c40024-01d3-4153-9d34-a6f48ad5a693',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgu2syobzgm4tmojqga4a',
      status: 'queued',
      created: 2022-06-07T00:40:05.532Z,
      pin: {
        cid: 'baeaaadjtgu2syobzgm4tmojqga4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
      status: 'queued',
      created: 2022-06-07T00:40:01.088Z,
      pin: {
        cid: 'baeaaadjrgezcynjzga2denzvgi3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
      status: 'queued',
      created: 2022-06-07T00:39:56.435Z,
      pin: {
        cid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
      status: 'queued',
      created: 2022-06-07T00:39:52.423Z,
      pin: {
        cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
  "cf-ray": "717555b85b328186-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:11 GMT",
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
      "requestid": "baeaaadjtgyysymjvg44tonbzgq3a",
      "status": "queued",
      "created": "2022-06-07T00:40:10.269+00:00",
      "pin": {
        "cid": "baeaaadjtgyysymjvg44tonbzgq3a",
        "meta": null,
        "name": "c5a55a78-5ae9-44ec-bba3-a55d239ab874",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge3syobzge3tkmjsg42q",
      "status": "queued",
      "created": "2022-06-07T00:40:05.792+00:00",
      "pin": {
        "cid": "baeaaadjrge3syobzge3tkmjsg42q",
        "meta": null,
        "name": "94c40024-01d3-4153-9d34-a6f48ad5a693",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgu2syobzgm4tmojqga4a",
      "status": "queued",
      "created": "2022-06-07T00:40:05.532+00:00",
      "pin": {
        "cid": "baeaaadjtgu2syobzgm4tmojqga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgezcynjzga2denzvgi3a",
      "status": "queued",
      "created": "2022-06-07T00:40:01.088+00:00",
      "pin": {
        "cid": "baeaaadjrgezcynjzga2denzvgi3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgq3cynzzgq3tsnzuhe3q",
      "status": "queued",
      "created": "2022-06-07T00:39:56.435+00:00",
      "pin": {
        "cid": "baeaaadjtgq3cynzzgq3tsnzuhe3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga2cymjrheytgmbugi3a",
      "status": "queued",
      "created": "2022-06-07T00:39:52.423+00:00",
      "pin": {
        "cid": "baeaaadjrga2cymjrheytgmbugi3a",
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
## Can delete pin with requestid 'baeaaadbtgy4cyojxgyytkmzsgy' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbtgy4cyojxgyytkmzsgy

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbtgy4cyojxgyytkmzsgy
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
  "cf-ray": "7175560d4ae06749-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbtgy4cyojwhe3demjtgi' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbtgy4cyojwhe3demjtgi

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbtgy4cyojwhe3demjtgi
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
  "cf-ray": "7175561369e7a9f7-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgi2cyobvgy3tsobugm2q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgi2cyobvgy3tsobugm2q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgi2cyobvgy3tsobugm2q
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
  "cf-ray": "71755619ae9c0b9d-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgi2cyobvgyzdoojugi4a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgi2cyobvgyzdoojugi4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgi2cyobvgyzdoojugi4a
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
  "cf-ray": "717556200ba12f01-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbtgy4cyojwgeydanjthe' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbtgy4cyojwgeydanjthe

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbtgy4cyojwgeydanjthe
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
  "cf-ray": "717556265eac9e9a-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgi2cyobvgq3dcobyga2q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgi2cyobvgq3dcobyga2q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgi2cyobvgq3dcobyga2q
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
  "cf-ray": "7175562c6d170ee2-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgi2cyobvgm4tanryhe3a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgi2cyobvgm4tanryhe3a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgi2cyobvgm4tanryhe3a
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
  "cf-ray": "71755632c84d0eda-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgi2cyobvgmytqojvha3a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgi2cyobvgmytqojvha3a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgi2cyobvgmytqojvha3a
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
  "cf-ray": "71755638eac5287f-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjtgyysymjvg44tonbzgq3a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtgyysymjvg44tonbzgq3a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtgyysymjvg44tonbzgq3a
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
  "cf-ray": "7175563f5a700b9d-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrge3syobzge3tkmjsg42q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrge3syobzge3tkmjsg42q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrge3syobzge3tkmjsg42q
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
  "cf-ray": "71755645b8252f01-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:33 GMT",
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
      requestid: 'baeaaadjtgu2syobzgm4tmojqga4a',
      status: 'queued',
      created: '2022-06-07T00:40:05.532+00:00',
      pin: {
        cid: 'baeaaadjtgu2syobzgm4tmojqga4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
      status: 'queued',
      created: '2022-06-07T00:40:01.088+00:00',
      pin: {
        cid: 'baeaaadjrgezcynjzga2denzvgi3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
      status: 'queued',
      created: '2022-06-07T00:39:56.435+00:00',
      pin: {
        cid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
      status: 'queued',
      created: '2022-06-07T00:39:52.423+00:00',
      pin: {
        cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
      requestid: 'baeaaadjtgu2syobzgm4tmojqga4a',
      status: 'queued',
      created: 2022-06-07T00:40:05.532Z,
      pin: {
        cid: 'baeaaadjtgu2syobzgm4tmojqga4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgezcynjzga2denzvgi3a',
      status: 'queued',
      created: 2022-06-07T00:40:01.088Z,
      pin: {
        cid: 'baeaaadjrgezcynjzga2denzvgi3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
      status: 'queued',
      created: 2022-06-07T00:39:56.435Z,
      pin: {
        cid: 'baeaaadjtgq3cynzzgq3tsnzuhe3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrga2cymjrheytgmbugi3a',
      status: 'queued',
      created: 2022-06-07T00:39:52.423Z,
      pin: {
        cid: 'baeaaadjrga2cymjrheytgmbugi3a',
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
  "cf-ray": "7175564bca599f0a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:35 GMT",
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
      "requestid": "baeaaadjtgu2syobzgm4tmojqga4a",
      "status": "queued",
      "created": "2022-06-07T00:40:05.532+00:00",
      "pin": {
        "cid": "baeaaadjtgu2syobzgm4tmojqga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgezcynjzga2denzvgi3a",
      "status": "queued",
      "created": "2022-06-07T00:40:01.088+00:00",
      "pin": {
        "cid": "baeaaadjrgezcynjzga2denzvgi3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgq3cynzzgq3tsnzuhe3q",
      "status": "queued",
      "created": "2022-06-07T00:39:56.435+00:00",
      "pin": {
        "cid": "baeaaadjtgq3cynzzgq3tsnzuhe3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga2cymjrheytgmbugi3a",
      "status": "queued",
      "created": "2022-06-07T00:39:52.423+00:00",
      "pin": {
        "cid": "baeaaadjrga2cymjrheytgmbugi3a",
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
      requestid: 'baeaaadbtgy4cyojxgyytkmzsgy',
      status: 'queued',
      created: '2022-06-07T00:40:21.281+00:00',
      pin: {
        cid: 'baeaaadbtgy4cyojxgyytkmzsgy',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbtgy4cyojwhe3demjtgi',
      status: 'queued',
      created: '2022-06-07T00:40:19.395+00:00',
      pin: {
        cid: 'baeaaadbtgy4cyojwhe3demjtgi',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
      status: 'queued',
      created: '2022-06-07T00:40:18.869+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
      status: 'queued',
      created: '2022-06-07T00:40:17.321+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbtgy4cyojwgeydanjthe',
      status: 'queued',
      created: '2022-06-07T00:40:17.124+00:00',
      pin: {
        cid: 'baeaaadbtgy4cyojwgeydanjthe',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
      status: 'queued',
      created: '2022-06-07T00:40:15.77+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
      status: 'queued',
      created: '2022-06-07T00:40:14.122+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgi2cyobvgmytqojvha3a',
      status: 'queued',
      created: '2022-06-07T00:40:12.349+00:00',
      pin: {
        cid: 'baeaaadjrgi2cyobvgmytqojvha3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgyysymjvg44tonbzgq3a',
      status: 'queued',
      created: '2022-06-07T00:40:10.269+00:00',
      pin: {
        cid: 'baeaaadjtgyysymjvg44tonbzgq3a',
        meta: null,
        name: 'c5a55a78-5ae9-44ec-bba3-a55d239ab874',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrge3syobzge3tkmjsg42q',
      status: 'queued',
      created: '2022-06-07T00:40:05.792+00:00',
      pin: {
        cid: 'baeaaadjrge3syobzge3tkmjsg42q',
        meta: null,
        name: '94c40024-01d3-4153-9d34-a6f48ad5a693',
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
      requestid: 'baeaaadbtgy4cyojxgyytkmzsgy',
      status: 'queued',
      created: 2022-06-07T00:40:21.281Z,
      pin: {
        cid: 'baeaaadbtgy4cyojxgyytkmzsgy',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbtgy4cyojwhe3demjtgi',
      status: 'queued',
      created: 2022-06-07T00:40:19.395Z,
      pin: {
        cid: 'baeaaadbtgy4cyojwhe3demjtgi',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
      status: 'queued',
      created: 2022-06-07T00:40:18.869Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgy3tsobugm2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
      status: 'queued',
      created: 2022-06-07T00:40:17.321Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgyzdoojugi4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbtgy4cyojwgeydanjthe',
      status: 'queued',
      created: 2022-06-07T00:40:17.124Z,
      pin: {
        cid: 'baeaaadbtgy4cyojwgeydanjthe',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
      status: 'queued',
      created: 2022-06-07T00:40:15.770Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgq3dcobyga2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
      status: 'queued',
      created: 2022-06-07T00:40:14.122Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgm4tanryhe3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgi2cyobvgmytqojvha3a',
      status: 'queued',
      created: 2022-06-07T00:40:12.349Z,
      pin: {
        cid: 'baeaaadjrgi2cyobvgmytqojvha3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgyysymjvg44tonbzgq3a',
      status: 'queued',
      created: 2022-06-07T00:40:10.269Z,
      pin: {
        cid: 'baeaaadjtgyysymjvg44tonbzgq3a',
        name: 'c5a55a78-5ae9-44ec-bba3-a55d239ab874',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrge3syobzge3tkmjsg42q',
      status: 'queued',
      created: 2022-06-07T00:40:05.792Z,
      pin: {
        cid: 'baeaaadjrge3syobzge3tkmjsg42q',
        name: '94c40024-01d3-4153-9d34-a6f48ad5a693',
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
  "cf-ray": "71755605f8139ed0-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:23 GMT",
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
      "requestid": "baeaaadbtgy4cyojxgyytkmzsgy",
      "status": "queued",
      "created": "2022-06-07T00:40:21.281+00:00",
      "pin": {
        "cid": "baeaaadbtgy4cyojxgyytkmzsgy",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbtgy4cyojwhe3demjtgi",
      "status": "queued",
      "created": "2022-06-07T00:40:19.395+00:00",
      "pin": {
        "cid": "baeaaadbtgy4cyojwhe3demjtgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgy3tsobugm2q",
      "status": "queued",
      "created": "2022-06-07T00:40:18.869+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgy3tsobugm2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgyzdoojugi4a",
      "status": "queued",
      "created": "2022-06-07T00:40:17.321+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgyzdoojugi4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbtgy4cyojwgeydanjthe",
      "status": "queued",
      "created": "2022-06-07T00:40:17.124+00:00",
      "pin": {
        "cid": "baeaaadbtgy4cyojwgeydanjthe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgq3dcobyga2q",
      "status": "queued",
      "created": "2022-06-07T00:40:15.77+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgq3dcobyga2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgm4tanryhe3a",
      "status": "queued",
      "created": "2022-06-07T00:40:14.122+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgm4tanryhe3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2cyobvgmytqojvha3a",
      "status": "queued",
      "created": "2022-06-07T00:40:12.349+00:00",
      "pin": {
        "cid": "baeaaadjrgi2cyobvgmytqojvha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgyysymjvg44tonbzgq3a",
      "status": "queued",
      "created": "2022-06-07T00:40:10.269+00:00",
      "pin": {
        "cid": "baeaaadjtgyysymjvg44tonbzgq3a",
        "meta": null,
        "name": "c5a55a78-5ae9-44ec-bba3-a55d239ab874",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge3syobzge3tkmjsg42q",
      "status": "queued",
      "created": "2022-06-07T00:40:05.792+00:00",
      "pin": {
        "cid": "baeaaadjrge3syobzge3tkmjsg42q",
        "meta": null,
        "name": "94c40024-01d3-4153-9d34-a6f48ad5a693",
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
