
# https://nft.storage/api compliance:

## Summary (2/9 successful)

  ✘ Request with no authentication token
  ✘ Request with invalid token
  ✘ Pins post of CID 'baeaaadjsgy4cyojvhaytqnzxgi3a'
  ✓ Can create and then delete a new pin
  ✘ List pin objects (GET /pins) in all states
  ✓ Can create and replace a pin's CID
  ✘ Can create a pin with name='171be202-f103-4141-965a-5f88aa3b6ab9'
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
  "cf-ray": "714af0db4b9f6fd1-IAD",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"ok":false,"error":{"code":"EXPECTED_BEARER_STRING","message":"API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`."}}
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
  "cf-ray": "714af0e09858590e-IAD",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"ok":false,"error":{"code":"ERROR_MALFORMED_TOKEN","message":"API Key is malformed or failed to parse."}}
```
## Pins post of CID 'baeaaadjsgy4cyojvhaytqnzxgi3a' - ✘ FAILED

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
{"cid":"baeaaadjsgy4cyojvhaytqnzxgi3a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
  status: 'queued',
  created: '2022-06-01T21:11:19.115+00:00',
  pin: {
    cid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
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
  requestid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
  status: 'queued',
  created: 2022-06-01T21:11:19.115Z,
  pin: {
    cid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
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
  "cf-ray": "714af0e6ed9c828a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:20 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsgy4cyojvhaytqnzxgi3a","status":"queued","created":"2022-06-01T21:11:19.115+00:00","pin":{"cid":"baeaaadjsgy4cyojvhaytqnzxgi3a","meta":null,"name":null,"origins":null},"delegates":[]}
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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbsg4ysynryhe4tamjuha

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbsg4ysynryhe4tamjuha
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
  "cf-ray": "714af0f9883e577c-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:22 GMT",
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
{"cid":"baeaaadbsg4ysynryhe4tamjuha"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbsg4ysynryhe4tamjuha',
  status: 'queued',
  created: '2022-06-01T21:11:20.938+00:00',
  pin: {
    cid: 'baeaaadbsg4ysynryhe4tamjuha',
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
  requestid: 'baeaaadbsg4ysynryhe4tamjuha',
  status: 'queued',
  created: 2022-06-01T21:11:20.938Z,
  pin: {
    cid: 'baeaaadbsg4ysynryhe4tamjuha',
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
  "cf-ray": "714af0ef9a555b95-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbsg4ysynryhe4tamjuha","status":"queued","created":"2022-06-01T21:11:20.938+00:00","pin":{"cid":"baeaaadbsg4ysynryhe4tamjuha","meta":null,"name":null,"origins":null},"delegates":[]}
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
      requestid: 'baeaaadjtgq3cymzxgmytamzqhe3a',
      status: 'queued',
      created: '2022-06-01T21:11:21.894+00:00',
      pin: {
        cid: 'baeaaadjtgq3cymzxgmytamzqhe3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
      status: 'queued',
      created: '2022-06-01T21:11:19.115+00:00',
      pin: {
        cid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgqycyojsgm2tonbsgm3a',
      status: 'queued',
      created: '2022-06-01T21:11:16.798+00:00',
      pin: {
        cid: 'baeaaadjtgqycyojsgm2tonbsgm3a',
        meta: null,
        name: '490e192d-2bca-45da-9c1d-b4f8d9667b93',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgm2syobvha2dcmjshe3a',
      status: 'queued',
      created: '2022-06-01T21:11:12.953+00:00',
      pin: {
        cid: 'baeaaadjtgm2syobvha2dcmjshe3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
      status: 'queued',
      created: '2022-06-01T21:11:05.014+00:00',
      pin: {
        cid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: '2022-05-18T21:31:38.07+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: '2022-05-18T21:31:30.339+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        meta: null,
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: '2022-05-18T21:31:24.604+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: '2022-05-18T21:31:19.662+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: '2022-05-18T21:31:15.265+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
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
      requestid: 'baeaaadjtgq3cymzxgmytamzqhe3a',
      status: 'queued',
      created: 2022-06-01T21:11:21.894Z,
      pin: {
        cid: 'baeaaadjtgq3cymzxgmytamzqhe3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
      status: 'queued',
      created: 2022-06-01T21:11:19.115Z,
      pin: {
        cid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgqycyojsgm2tonbsgm3a',
      status: 'queued',
      created: 2022-06-01T21:11:16.798Z,
      pin: {
        cid: 'baeaaadjtgqycyojsgm2tonbsgm3a',
        name: '490e192d-2bca-45da-9c1d-b4f8d9667b93',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgm2syobvha2dcmjshe3a',
      status: 'queued',
      created: 2022-06-01T21:11:12.953Z,
      pin: {
        cid: 'baeaaadjtgm2syobvha2dcmjshe3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
      status: 'queued',
      created: 2022-06-01T21:11:05.014Z,
      pin: {
        cid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: 2022-05-18T21:31:38.070Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: 2022-05-18T21:31:30.339Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: 2022-05-18T21:31:24.604Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: 2022-05-18T21:31:19.662Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: 2022-05-18T21:31:15.265Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
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
  "cf-ray": "714af0fbe9935c7c-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadjtgq3cymzxgmytamzqhe3a","status":"queued","created":"2022-06-01T21:11:21.894+00:00","pin":{"cid":"baeaaadjtgq3cymzxgmytamzqhe3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsgy4cyojvhaytqnzxgi3a","status":"queued","created":"2022-06-01T21:11:19.115+00:00","pin":{"cid":"baeaaadjsgy4cyojvhaytqnzxgi3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgqycyojsgm2tonbsgm3a","status":"queued","created":"2022-06-01T21:11:16.798+00:00","pin":{"cid":"baeaaadjtgqycyojsgm2tonbsgm3a","meta":null,"name":"490e192d-2bca-45da-9c1d-b4f8d9667b93","origins":null},"delegates":[]},{"requestid":"baeaaadjtgm2syobvha2dcmjshe3a","status":"queued","created":"2022-06-01T21:11:12.953+00:00","pin":{"cid":"baeaaadjtgm2syobvha2dcmjshe3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgi4cymzqgiydqmbsgq4a","status":"queued","created":"2022-06-01T21:11:05.014+00:00","pin":{"cid":"baeaaadjtgi4cymzqgiydqmbsgq4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsnzugyza","status":"failed","created":"2022-05-18T21:31:38.07+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsnzugyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqojsha4a","status":"failed","created":"2022-05-18T21:31:30.339+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqojsha4a","meta":null,"name":"7625cb9a-e5c0-4496-95d3-e75f5e9d5254","origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqmzygyza","status":"failed","created":"2022-05-18T21:31:24.604+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqmzygyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2doobrheyq","status":"failed","created":"2022-05-18T21:31:19.662+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2doobrheyq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2donbrgmza","status":"failed","created":"2022-05-18T21:31:15.265+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2donbrgmza","meta":null,"name":null,"origins":null},"delegates":[]}]}
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

#### Request - GET: https://nft.storage/api/pins/baeaaadjsg42cymjqgm2dmnbzgyya

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsg42cymjqgm2dmnbzgyya
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
  "cf-ray": "714af1187b98828a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"error":{"reason":"NOT_FOUND","details":"pin not found"}}
```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadjsg42synrygiydcmjtgmza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsg42synrygiydcmjtgmza
```
{
  requestid: 'baeaaadjsg42synrygiydcmjtgmza',
  status: 'queued',
  created: '2022-06-01T21:11:26.06+00:00',
  pin: {
    cid: 'baeaaadjsg42synrygiydcmjtgmza',
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
  requestid: 'baeaaadjsg42synrygiydcmjtgmza',
  status: 'queued',
  created: 2022-06-01T21:11:26.060Z,
  pin: {
    cid: 'baeaaadjsg42synrygiydcmjtgmza',
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
  "cf-ray": "714af11ebf885af3-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsg42synrygiydcmjtgmza","status":"queued","created":"2022-06-01T21:11:26.06+00:00","pin":{"cid":"baeaaadjsg42synrygiydcmjtgmza","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Pin's with requestid 'baeaaadjsg42cymjqgm2dmnbzgyya' can have cid 'baeaaadjsg42cymjqgm2dmnbzgyya' replaced with 'baeaaadjsg42synrygiydcmjtgmza' - ✓ SUCCESS

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

#### Request - POST: https://nft.storage/api/pins/baeaaadjsg42cymjqgm2dmnbzgyya

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsg42synrygiydcmjtgmza"}
```
#### Response data from https://nft.storage/api/pins/baeaaadjsg42cymjqgm2dmnbzgyya
```
{
  requestid: 'baeaaadjsg42synrygiydcmjtgmza',
  status: 'queued',
  created: '2022-06-01T21:11:26.06+00:00',
  pin: {
    cid: 'baeaaadjsg42synrygiydcmjtgmza',
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
  requestid: 'baeaaadjsg42synrygiydcmjtgmza',
  status: 'queued',
  created: 2022-06-01T21:11:26.060Z,
  pin: {
    cid: 'baeaaadjsg42synrygiydcmjtgmza',
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
  "cf-ray": "714af10c6a5881b8-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsg42synrygiydcmjtgmza","status":"queued","created":"2022-06-01T21:11:26.06+00:00","pin":{"cid":"baeaaadjsg42synrygiydcmjtgmza","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (baeaaadjsg42cymjqgm2dmnbzgyya) (success)
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
{"cid":"baeaaadjsg42cymjqgm2dmnbzgyya"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsg42cymjqgm2dmnbzgyya',
  status: 'queued',
  created: '2022-06-01T21:11:23.904+00:00',
  pin: {
    cid: 'baeaaadjsg42cymjqgm2dmnbzgyya',
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
  requestid: 'baeaaadjsg42cymjqgm2dmnbzgyya',
  status: 'queued',
  created: 2022-06-01T21:11:23.904Z,
  pin: {
    cid: 'baeaaadjsg42cymjqgm2dmnbzgyya',
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
  "cf-ray": "714af102894b5c76-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsg42cymjqgm2dmnbzgyya","status":"queued","created":"2022-06-01T21:11:23.904+00:00","pin":{"cid":"baeaaadjsg42cymjqgm2dmnbzgyya","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can retrieve pin with name '171be202-f103-4141-965a-5f88aa3b6ab9' via the 'exact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=171be202-f103-4141-965a-5f88aa3b6ab9&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=171be202-f103-4141-965a-5f88aa3b6ab9&match=exact
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
  "cf-ray": "714af12ffbe75b95-IAD",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"VALIDATION_ERROR","details":[{"instanceLocation":"#","keyword":"required","keywordLocation":"#/required","error":"Instance does not have required property \"status\"."}]}
```
## Can retrieve pin with name '171BE202-F103-4141-965A-5F88AA3B6AB9' via the 'iexact' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=171BE202-F103-4141-965A-5F88AA3B6AB9&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=171BE202-F103-4141-965A-5F88AA3B6AB9&match=iexact
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
  "cf-ray": "714af1336bbc5a04-IAD",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"VALIDATION_ERROR","details":[{"instanceLocation":"#","keyword":"required","keywordLocation":"#/required","error":"Instance does not have required property \"status\"."}]}
```
## Can retrieve pin with name 'f103-4141-965a-5f8' via the 'partial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=f103-4141-965a-5f8&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=f103-4141-965a-5f8&match=partial
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
  "cf-ray": "714af139aec05a22-IAD",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"VALIDATION_ERROR","details":[{"instanceLocation":"#","keyword":"required","keywordLocation":"#/required","error":"Instance does not have required property \"status\"."}]}
```
## Can retrieve pin with name 'F103-4141-965A-5F8' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

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

#### Request - GET: https://nft.storage/api/pins?name=F103-4141-965A-5F8&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=F103-4141-965A-5F8&match=ipartial
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
  "cf-ray": "714af13fef7d5a45-IAD",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:33 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"VALIDATION_ERROR","details":[{"instanceLocation":"#","keyword":"required","keywordLocation":"#/required","error":"Instance does not have required property \"status\"."}]}
```
## Can create a pin with name='171be202-f103-4141-965a-5f88aa3b6ab9' - ✘ FAILED

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
{"cid":"baeaaadjsg44syojsgeytqmzugeya","name":"171be202-f103-4141-965a-5f88aa3b6ab9"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsg44syojsgeytqmzugeya',
  status: 'queued',
  created: '2022-06-01T21:11:29.37+00:00',
  pin: {
    cid: 'baeaaadjsg44syojsgeytqmzugeya',
    meta: null,
    name: '171be202-f103-4141-965a-5f88aa3b6ab9',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadjsg44syojsgeytqmzugeya',
  status: 'queued',
  created: 2022-06-01T21:11:29.370Z,
  pin: {
    cid: 'baeaaadjsg44syojsgeytqmzugeya',
    name: '171be202-f103-4141-965a-5f88aa3b6ab9',
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
  "cf-ray": "714af126e81357c4-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsg44syojsgeytqmzugeya","status":"queued","created":"2022-06-01T21:11:29.37+00:00","pin":{"cid":"baeaaadjsg44syojsgeytqmzugeya","meta":null,"name":"171be202-f103-4141-965a-5f88aa3b6ab9","origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjsha2synrvgm2tamzyg43q' - ✓ SUCCESS

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
{"cid":"baeaaadjsha2synrvgm2tamzyg43q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsha2synrvgm2tamzyg43q',
  status: 'queued',
  created: '2022-06-01T21:11:35.278+00:00',
  pin: {
    cid: 'baeaaadjsha2synrvgm2tamzyg43q',
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
  requestid: 'baeaaadjsha2synrvgm2tamzyg43q',
  status: 'queued',
  created: 2022-06-01T21:11:35.278Z,
  pin: {
    cid: 'baeaaadjsha2synrvgm2tamzyg43q',
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
  "cf-ray": "714af14add5d5af3-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsha2synrvgm2tamzyg43q","status":"queued","created":"2022-06-01T21:11:35.278+00:00","pin":{"cid":"baeaaadjsha2synrvgm2tamzyg43q","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjsha2synrvgqytemryhayq' - ✓ SUCCESS

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
{"cid":"baeaaadjsha2synrvgqytemryhayq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsha2synrvgqytemryhayq',
  status: 'queued',
  created: '2022-06-01T21:11:36.69+00:00',
  pin: {
    cid: 'baeaaadjsha2synrvgqytemryhayq',
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
  requestid: 'baeaaadjsha2synrvgqytemryhayq',
  status: 'queued',
  created: 2022-06-01T21:11:36.690Z,
  pin: {
    cid: 'baeaaadjsha2synrvgqytemryhayq',
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
  "cf-ray": "714af152780d3805-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsha2synrvgqytemryhayq","status":"queued","created":"2022-06-01T21:11:36.69+00:00","pin":{"cid":"baeaaadjsha2synrvgqytemryhayq","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjsha2synrvgq3tenrrha2q' - ✓ SUCCESS

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
{"cid":"baeaaadjsha2synrvgq3tenrrha2q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsha2synrvgq3tenrrha2q',
  status: 'queued',
  created: '2022-06-01T21:11:38.284+00:00',
  pin: {
    cid: 'baeaaadjsha2synrvgq3tenrrha2q',
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
  requestid: 'baeaaadjsha2synrvgq3tenrrha2q',
  status: 'queued',
  created: 2022-06-01T21:11:38.284Z,
  pin: {
    cid: 'baeaaadjsha2synrvgq3tenrrha2q',
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
  "cf-ray": "714af15c1a11cf30-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsha2synrvgq3tenrrha2q","status":"queued","created":"2022-06-01T21:11:38.284+00:00","pin":{"cid":"baeaaadjsha2synrvgq3tenrrha2q","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjsha2synrvgyzdsmjxhe3a' - ✓ SUCCESS

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
{"cid":"baeaaadjsha2synrvgyzdsmjxhe3a"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
  status: 'queued',
  created: '2022-06-01T21:11:39.845+00:00',
  pin: {
    cid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
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
  requestid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
  status: 'queued',
  created: 2022-06-01T21:11:39.845Z,
  pin: {
    cid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
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
  "cf-ray": "714af1677ba65a04-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsha2synrvgyzdsmjxhe3a","status":"queued","created":"2022-06-01T21:11:39.845+00:00","pin":{"cid":"baeaaadjsha2synrvgyzdsmjxhe3a","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadjsha2synrvgy3toobrhe4q' - ✓ SUCCESS

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
{"cid":"baeaaadjsha2synrvgy3toobrhe4q"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadjsha2synrvgy3toobrhe4q',
  status: 'queued',
  created: '2022-06-01T21:11:41.129+00:00',
  pin: {
    cid: 'baeaaadjsha2synrvgy3toobrhe4q',
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
  requestid: 'baeaaadjsha2synrvgy3toobrhe4q',
  status: 'queued',
  created: 2022-06-01T21:11:41.129Z,
  pin: {
    cid: 'baeaaadjsha2synrvgy3toobrhe4q',
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
  "cf-ray": "714af16e9cd4802a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadjsha2synrvgy3toobrhe4q","status":"queued","created":"2022-06-01T21:11:41.129+00:00","pin":{"cid":"baeaaadjsha2synrvgy3toobrhe4q","meta":null,"name":null,"origins":null},"delegates":[]}
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
      requestid: 'baeaaadjsha2synrvgy3toobrhe4q',
      status: 'queued',
      created: '2022-06-01T21:11:41.129+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgy3toobrhe4q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
      status: 'queued',
      created: '2022-06-01T21:11:39.845+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsha2synrvgq3tenrrha2q',
      status: 'queued',
      created: '2022-06-01T21:11:38.284+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgq3tenrrha2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsha2synrvgqytemryhayq',
      status: 'queued',
      created: '2022-06-01T21:11:36.69+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgqytemryhayq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsha2synrvgm2tamzyg43q',
      status: 'queued',
      created: '2022-06-01T21:11:35.278+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgm2tamzyg43q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
      status: 'queued',
      created: '2022-06-01T21:11:05.014+00:00',
      pin: {
        cid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: '2022-05-18T21:31:38.07+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: '2022-05-18T21:31:30.339+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        meta: null,
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: '2022-05-18T21:31:24.604+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: '2022-05-18T21:31:19.662+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
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
      requestid: 'baeaaadjsha2synrvgy3toobrhe4q',
      status: 'queued',
      created: 2022-06-01T21:11:41.129Z,
      pin: {
        cid: 'baeaaadjsha2synrvgy3toobrhe4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
      status: 'queued',
      created: 2022-06-01T21:11:39.845Z,
      pin: {
        cid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsha2synrvgq3tenrrha2q',
      status: 'queued',
      created: 2022-06-01T21:11:38.284Z,
      pin: {
        cid: 'baeaaadjsha2synrvgq3tenrrha2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsha2synrvgqytemryhayq',
      status: 'queued',
      created: 2022-06-01T21:11:36.690Z,
      pin: {
        cid: 'baeaaadjsha2synrvgqytemryhayq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsha2synrvgm2tamzyg43q',
      status: 'queued',
      created: 2022-06-01T21:11:35.278Z,
      pin: {
        cid: 'baeaaadjsha2synrvgm2tamzyg43q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
      status: 'queued',
      created: 2022-06-01T21:11:05.014Z,
      pin: {
        cid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: 2022-05-18T21:31:38.070Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: 2022-05-18T21:31:30.339Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: 2022-05-18T21:31:24.604Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: 2022-05-18T21:31:19.662Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
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
  "cf-ray": "714af17988179c58-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadjsha2synrvgy3toobrhe4q","status":"queued","created":"2022-06-01T21:11:41.129+00:00","pin":{"cid":"baeaaadjsha2synrvgy3toobrhe4q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsha2synrvgyzdsmjxhe3a","status":"queued","created":"2022-06-01T21:11:39.845+00:00","pin":{"cid":"baeaaadjsha2synrvgyzdsmjxhe3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsha2synrvgq3tenrrha2q","status":"queued","created":"2022-06-01T21:11:38.284+00:00","pin":{"cid":"baeaaadjsha2synrvgq3tenrrha2q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsha2synrvgqytemryhayq","status":"queued","created":"2022-06-01T21:11:36.69+00:00","pin":{"cid":"baeaaadjsha2synrvgqytemryhayq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsha2synrvgm2tamzyg43q","status":"queued","created":"2022-06-01T21:11:35.278+00:00","pin":{"cid":"baeaaadjsha2synrvgm2tamzyg43q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgi4cymzqgiydqmbsgq4a","status":"queued","created":"2022-06-01T21:11:05.014+00:00","pin":{"cid":"baeaaadjtgi4cymzqgiydqmbsgq4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsnzugyza","status":"failed","created":"2022-05-18T21:31:38.07+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsnzugyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqojsha4a","status":"failed","created":"2022-05-18T21:31:30.339+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqojsha4a","meta":null,"name":"7625cb9a-e5c0-4496-95d3-e75f5e9d5254","origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqmzygyza","status":"failed","created":"2022-05-18T21:31:24.604+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqmzygyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2doobrheyq","status":"failed","created":"2022-05-18T21:31:19.662+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2doobrheyq","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
## Pagination: Retrieve the next page of pins - ✘ FAILED

### Expectations (2/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✘ The next page of pins doesn't contain any of previous pages pins (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A31%3A19.662Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A31%3A19.662Z
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: '2022-05-18T21:31:19.662+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: '2022-05-18T21:31:15.265+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: '2022-05-18T21:23:51.114+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
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
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: 2022-05-18T21:31:19.662Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: 2022-05-18T21:31:15.265Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: 2022-05-18T21:23:51.114Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
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
  "cf-ray": "714af17fe8035a10-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadjrgy2teojqhe2doobrheyq","status":"failed","created":"2022-05-18T21:31:19.662+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2doobrheyq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2donbrgmza","status":"failed","created":"2022-05-18T21:31:15.265+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2donbrgmza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydgmbwgiza","status":"failed","created":"2022-05-18T21:23:51.114+00:00","pin":{"cid":"baeaaadjrgy2teojqheydgmbwgiza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydeobuha4a","status":"failed","created":"2022-05-18T21:23:49.32+00:00","pin":{"cid":"baeaaadjrgy2teojqheydeobuha4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydenrwgi2q","status":"failed","created":"2022-05-18T21:23:47.372+00:00","pin":{"cid":"baeaaadjrgy2teojqheydenrwgi2q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydenbuha3q","status":"failed","created":"2022-05-18T21:23:45.071+00:00","pin":{"cid":"baeaaadjrgy2teojqheydenbuha3q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydemrwg42a","status":"failed","created":"2022-05-18T21:23:43.329+00:00","pin":{"cid":"baeaaadjrgy2teojqheydemrwg42a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydembwge4a","status":"failed","created":"2022-05-18T21:23:41.335+00:00","pin":{"cid":"baeaaadjrgy2teojqheydembwge4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydcobwheza","status":"failed","created":"2022-05-18T21:23:39.276+00:00","pin":{"cid":"baeaaadjrgy2teojqheydcobwheza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydcnrwgu4q","status":"failed","created":"2022-05-18T21:23:37.19+00:00","pin":{"cid":"baeaaadjrgy2teojqheydcnrwgu4q","meta":null,"name":null,"origins":null},"delegates":[]}]}
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
      requestid: 'baeaaadjtgq3cymzxgyydqnbygm4a',
      status: 'queued',
      created: '2022-06-01T21:11:26.08+00:00',
      pin: {
        cid: 'baeaaadjtgq3cymzxgyydqnbygm4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsg42synrygiydcmjtgmza',
      status: 'queued',
      created: '2022-06-01T21:11:26.06+00:00',
      pin: {
        cid: 'baeaaadjsg42synrygiydcmjtgmza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgq3cymzxgq2diobxge2q',
      status: 'queued',
      created: '2022-06-01T21:11:24.294+00:00',
      pin: {
        cid: 'baeaaadjtgq3cymzxgq2diobxge2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgq3cymzxgm3tqnrtga3a',
      status: 'queued',
      created: '2022-06-01T21:11:23.09+00:00',
      pin: {
        cid: 'baeaaadjtgq3cymzxgm3tqnrtga3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgq3cymzxgmytamzqhe3a',
      status: 'queued',
      created: '2022-06-01T21:11:21.894+00:00',
      pin: {
        cid: 'baeaaadjtgq3cymzxgmytamzqhe3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
      status: 'queued',
      created: '2022-06-01T21:11:19.115+00:00',
      pin: {
        cid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgqycyojsgm2tonbsgm3a',
      status: 'queued',
      created: '2022-06-01T21:11:16.798+00:00',
      pin: {
        cid: 'baeaaadjtgqycyojsgm2tonbsgm3a',
        meta: null,
        name: '490e192d-2bca-45da-9c1d-b4f8d9667b93',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgm2syobvha2dcmjshe3a',
      status: 'queued',
      created: '2022-06-01T21:11:12.953+00:00',
      pin: {
        cid: 'baeaaadjtgm2syobvha2dcmjshe3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
      status: 'queued',
      created: '2022-06-01T21:11:05.014+00:00',
      pin: {
        cid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: '2022-05-18T21:31:38.07+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
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
      requestid: 'baeaaadjtgq3cymzxgyydqnbygm4a',
      status: 'queued',
      created: 2022-06-01T21:11:26.080Z,
      pin: {
        cid: 'baeaaadjtgq3cymzxgyydqnbygm4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsg42synrygiydcmjtgmza',
      status: 'queued',
      created: 2022-06-01T21:11:26.060Z,
      pin: {
        cid: 'baeaaadjsg42synrygiydcmjtgmza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgq3cymzxgq2diobxge2q',
      status: 'queued',
      created: 2022-06-01T21:11:24.294Z,
      pin: {
        cid: 'baeaaadjtgq3cymzxgq2diobxge2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgq3cymzxgm3tqnrtga3a',
      status: 'queued',
      created: 2022-06-01T21:11:23.090Z,
      pin: {
        cid: 'baeaaadjtgq3cymzxgm3tqnrtga3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgq3cymzxgmytamzqhe3a',
      status: 'queued',
      created: 2022-06-01T21:11:21.894Z,
      pin: {
        cid: 'baeaaadjtgq3cymzxgmytamzqhe3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
      status: 'queued',
      created: 2022-06-01T21:11:19.115Z,
      pin: {
        cid: 'baeaaadjsgy4cyojvhaytqnzxgi3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgqycyojsgm2tonbsgm3a',
      status: 'queued',
      created: 2022-06-01T21:11:16.798Z,
      pin: {
        cid: 'baeaaadjtgqycyojsgm2tonbsgm3a',
        name: '490e192d-2bca-45da-9c1d-b4f8d9667b93',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgm2syobvha2dcmjshe3a',
      status: 'queued',
      created: 2022-06-01T21:11:12.953Z,
      pin: {
        cid: 'baeaaadjtgm2syobvha2dcmjshe3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
      status: 'queued',
      created: 2022-06-01T21:11:05.014Z,
      pin: {
        cid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: 2022-05-18T21:31:38.070Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
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
  "cf-ray": "714af143acf75794-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadjtgq3cymzxgyydqnbygm4a","status":"queued","created":"2022-06-01T21:11:26.08+00:00","pin":{"cid":"baeaaadjtgq3cymzxgyydqnbygm4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsg42synrygiydcmjtgmza","status":"queued","created":"2022-06-01T21:11:26.06+00:00","pin":{"cid":"baeaaadjsg42synrygiydcmjtgmza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgq3cymzxgq2diobxge2q","status":"queued","created":"2022-06-01T21:11:24.294+00:00","pin":{"cid":"baeaaadjtgq3cymzxgq2diobxge2q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgq3cymzxgm3tqnrtga3a","status":"queued","created":"2022-06-01T21:11:23.09+00:00","pin":{"cid":"baeaaadjtgq3cymzxgm3tqnrtga3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgq3cymzxgmytamzqhe3a","status":"queued","created":"2022-06-01T21:11:21.894+00:00","pin":{"cid":"baeaaadjtgq3cymzxgmytamzqhe3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsgy4cyojvhaytqnzxgi3a","status":"queued","created":"2022-06-01T21:11:19.115+00:00","pin":{"cid":"baeaaadjsgy4cyojvhaytqnzxgi3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgqycyojsgm2tonbsgm3a","status":"queued","created":"2022-06-01T21:11:16.798+00:00","pin":{"cid":"baeaaadjtgqycyojsgm2tonbsgm3a","meta":null,"name":"490e192d-2bca-45da-9c1d-b4f8d9667b93","origins":null},"delegates":[]},{"requestid":"baeaaadjtgm2syobvha2dcmjshe3a","status":"queued","created":"2022-06-01T21:11:12.953+00:00","pin":{"cid":"baeaaadjtgm2syobvha2dcmjshe3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgi4cymzqgiydqmbsgq4a","status":"queued","created":"2022-06-01T21:11:05.014+00:00","pin":{"cid":"baeaaadjtgi4cymzqgiydqmbsgq4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsnzugyza","status":"failed","created":"2022-05-18T21:31:38.07+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsnzugyza","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
## Can delete pin with requestid 'baeaaadjsha2synrvgy3toobrhe4q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsha2synrvgy3toobrhe4q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsha2synrvgy3toobrhe4q
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
  "cf-ray": "714af18e5d26cf30-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsha2synrvgyzdsmjxhe3a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsha2synrvgyzdsmjxhe3a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsha2synrvgyzdsmjxhe3a
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
  "cf-ray": "714af19489745985-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:47 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsha2synrvgq3tenrrha2q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsha2synrvgq3tenrrha2q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsha2synrvgq3tenrrha2q
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
  "cf-ray": "714af19acfdd5986-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsha2synrvgqytemryhayq' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsha2synrvgqytemryhayq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsha2synrvgqytemryhayq
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
  "cf-ray": "714af1a118d85a6a-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjsha2synrvgm2tamzyg43q' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjsha2synrvgm2tamzyg43q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjsha2synrvgm2tamzyg43q
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
  "cf-ray": "714af1a75aa38278-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjtgi4cymzqgiydqmbsgq4a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjtgi4cymzqgiydqmbsgq4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjtgi4cymzqgiydqmbsgq4a
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
  "cf-ray": "714af1ada8d77fe2-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqhe2dsnzugyza' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqhe2dsnzugyza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqhe2dsnzugyza
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
  "cf-ray": "714af1b3ec8d3805-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqhe2dqojsha4a' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqhe2dqojsha4a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqhe2dqojsha4a
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
  "cf-ray": "714af1ba1e1a6fbc-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqhe2dqmzygyza' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqhe2dqmzygyza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqhe2dqmzygyza
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
  "cf-ray": "714af1c05cbb5dda-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:54 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqhe2doobrheyq' - ✓ SUCCESS

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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqhe2doobrheyq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqhe2doobrheyq
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
  "cf-ray": "714af1c69d015b16-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:54 GMT",
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
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: '2022-05-18T21:31:15.265+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: '2022-05-18T21:23:51.114+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
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
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: 2022-05-18T21:31:15.265Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: 2022-05-18T21:23:51.114Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
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
  "cf-ray": "714af1ccf98e5a6a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadjrgy2teojqhe2donbrgmza","status":"failed","created":"2022-05-18T21:31:15.265+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2donbrgmza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydgmbwgiza","status":"failed","created":"2022-05-18T21:23:51.114+00:00","pin":{"cid":"baeaaadjrgy2teojqheydgmbwgiza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydeobuha4a","status":"failed","created":"2022-05-18T21:23:49.32+00:00","pin":{"cid":"baeaaadjrgy2teojqheydeobuha4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydenrwgi2q","status":"failed","created":"2022-05-18T21:23:47.372+00:00","pin":{"cid":"baeaaadjrgy2teojqheydenrwgi2q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydenbuha3q","status":"failed","created":"2022-05-18T21:23:45.071+00:00","pin":{"cid":"baeaaadjrgy2teojqheydenbuha3q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydemrwg42a","status":"failed","created":"2022-05-18T21:23:43.329+00:00","pin":{"cid":"baeaaadjrgy2teojqheydemrwg42a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydembwge4a","status":"failed","created":"2022-05-18T21:23:41.335+00:00","pin":{"cid":"baeaaadjrgy2teojqheydembwge4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydcobwheza","status":"failed","created":"2022-05-18T21:23:39.276+00:00","pin":{"cid":"baeaaadjrgy2teojqheydcobwheza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydcnrwgu4q","status":"failed","created":"2022-05-18T21:23:37.19+00:00","pin":{"cid":"baeaaadjrgy2teojqheydcnrwgu4q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydcnbqge2q","status":"failed","created":"2022-05-18T21:23:34.814+00:00","pin":{"cid":"baeaaadjrgy2teojqheydcnbqge2q","meta":null,"name":null,"origins":null},"delegates":[]}]}
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
      requestid: 'baeaaadjsha2synrvgy3toobrhe4q',
      status: 'queued',
      created: '2022-06-01T21:11:41.129+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgy3toobrhe4q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
      status: 'queued',
      created: '2022-06-01T21:11:39.845+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsha2synrvgq3tenrrha2q',
      status: 'queued',
      created: '2022-06-01T21:11:38.284+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgq3tenrrha2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsha2synrvgqytemryhayq',
      status: 'queued',
      created: '2022-06-01T21:11:36.69+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgqytemryhayq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjsha2synrvgm2tamzyg43q',
      status: 'queued',
      created: '2022-06-01T21:11:35.278+00:00',
      pin: {
        cid: 'baeaaadjsha2synrvgm2tamzyg43q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
      status: 'queued',
      created: '2022-06-01T21:11:05.014+00:00',
      pin: {
        cid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: '2022-05-18T21:31:38.07+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: '2022-05-18T21:31:30.339+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        meta: null,
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: '2022-05-18T21:31:24.604+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: '2022-05-18T21:31:19.662+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
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
      requestid: 'baeaaadjsha2synrvgy3toobrhe4q',
      status: 'queued',
      created: 2022-06-01T21:11:41.129Z,
      pin: {
        cid: 'baeaaadjsha2synrvgy3toobrhe4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
      status: 'queued',
      created: 2022-06-01T21:11:39.845Z,
      pin: {
        cid: 'baeaaadjsha2synrvgyzdsmjxhe3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsha2synrvgq3tenrrha2q',
      status: 'queued',
      created: 2022-06-01T21:11:38.284Z,
      pin: {
        cid: 'baeaaadjsha2synrvgq3tenrrha2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsha2synrvgqytemryhayq',
      status: 'queued',
      created: 2022-06-01T21:11:36.690Z,
      pin: {
        cid: 'baeaaadjsha2synrvgqytemryhayq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjsha2synrvgm2tamzyg43q',
      status: 'queued',
      created: 2022-06-01T21:11:35.278Z,
      pin: {
        cid: 'baeaaadjsha2synrvgm2tamzyg43q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
      status: 'queued',
      created: 2022-06-01T21:11:05.014Z,
      pin: {
        cid: 'baeaaadjtgi4cymzqgiydqmbsgq4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: 2022-05-18T21:31:38.070Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: 2022-05-18T21:31:30.339Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: 2022-05-18T21:31:24.604Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: 2022-05-18T21:31:19.662Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
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
  "cf-ray": "714af1869daf3805-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadjsha2synrvgy3toobrhe4q","status":"queued","created":"2022-06-01T21:11:41.129+00:00","pin":{"cid":"baeaaadjsha2synrvgy3toobrhe4q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsha2synrvgyzdsmjxhe3a","status":"queued","created":"2022-06-01T21:11:39.845+00:00","pin":{"cid":"baeaaadjsha2synrvgyzdsmjxhe3a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsha2synrvgq3tenrrha2q","status":"queued","created":"2022-06-01T21:11:38.284+00:00","pin":{"cid":"baeaaadjsha2synrvgq3tenrrha2q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsha2synrvgqytemryhayq","status":"queued","created":"2022-06-01T21:11:36.69+00:00","pin":{"cid":"baeaaadjsha2synrvgqytemryhayq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjsha2synrvgm2tamzyg43q","status":"queued","created":"2022-06-01T21:11:35.278+00:00","pin":{"cid":"baeaaadjsha2synrvgm2tamzyg43q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjtgi4cymzqgiydqmbsgq4a","status":"queued","created":"2022-06-01T21:11:05.014+00:00","pin":{"cid":"baeaaadjtgi4cymzqgiydqmbsgq4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsnzugyza","status":"failed","created":"2022-05-18T21:31:38.07+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsnzugyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqojsha4a","status":"failed","created":"2022-05-18T21:31:30.339+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqojsha4a","meta":null,"name":"7625cb9a-e5c0-4496-95d3-e75f5e9d5254","origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqmzygyza","status":"failed","created":"2022-05-18T21:31:24.604+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqmzygyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2doobrheyq","status":"failed","created":"2022-05-18T21:31:19.662+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2doobrheyq","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
