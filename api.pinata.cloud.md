
# https://api.pinata.cloud/psa compliance:

Execution Date: 2022-06-07T23:41:52.457Z

Revision: [9dfaf6c](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/9dfaf6c)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.pinata.cloud.md)

## Summary (4/9 successful)

  ✘ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ✘ [Request with invalid token](#request-with-invalid-token----failed)

  ✓ [Pins post of CID 'baeaaadjrgyysyojvg44tqnbyg4zq'](#pins-post-of-cid-baeaaadjrgyysyojvg44tqnbyg4zq----success)

  ✘ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ✓ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  ✓ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ✓ [Can create a pin with name='d96f3607-39a7-410e-93f5-60d3c8d2b875'](#can-create-a-pin-with-named96f3607-39a7-410e-93f5-60d3c8d2b875----success)

  ✘ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ✘ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response object matches api spec schema (success)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://api.pinata.cloud/psa/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  error: {
    reason: 'KEYS_MUST_BE_STRINGS',
    details: 'pinata_api_key and pinata_secret_api_key must both be strings'
  }
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "117",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:09 GMT",
  "etag": "W/\"75-8hWiVluTmqi8Bp2+E+MmsFL38tY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "KEYS_MUST_BE_STRINGS",
    "details": "pinata_api_key and pinata_secret_api_key must both be strings"
  }
}
```
## Request with invalid token - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response object matches api spec schema (success)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  error: {
    reason: 'INVALID_CREDENTIALS',
    details: 'Invalid/expired credentials'
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:10 GMT",
  "etag": "W/\"52-hDmJB39hiWxMgXnl95p1Dk5Zk6Q\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "INVALID_CREDENTIALS",
    "details": "Invalid/expired credentials"
  }
}
```
## Pins post of CID 'baeaaadjrgyysyojvg44tqnbyg4zq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response object matches api spec schema (success)

  ✓ Pinning status is either queued, pinning, or pinned (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgyysyojvg44tqnbyg4zq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
  created: '2022-06-07T23:41:12.026Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjrgyysyojvg44tqnbyg4zq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
  status: 'queued',
  created: 2022-06-07T23:41:12.026Z,
  pin: {
    cid: 'baeaaadjrgyysyojvg44tqnbyg4zq',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:12 GMT",
  "etag": "W/\"13e-UFn8DlKN7wepsSW+yTen/jWE+sU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "933008cf-c83d-44da-8324-e5c7f4ea52c5",
  "created": "2022-06-07T23:41:12.026Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjrgyysyojvg44tqnbyg4zq",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## The newly created pin can be immediately deleted - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202: The Pin was deleted successfully (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/dd8f40fe-98e4-41f3-8a0f-2e7eb73ebbef

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/dd8f40fe-98e4-41f3-8a0f-2e7eb73ebbef
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:13 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can create and then delete a new pin - ✘ FAILED

### Expectations (3/4 successful)

  ✓ Result is not null (success)

  ✓ Response code is 200 (success)

  ✓ Response is ok (success)

  ✘ Response code is 202: The Pin was deleted successfully (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgyzsymjqg42toobtgq3q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'dd8f40fe-98e4-41f3-8a0f-2e7eb73ebbef',
  created: '2022-06-07T23:41:13.026Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjrgyzsymjqg42toobtgq3q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'dd8f40fe-98e4-41f3-8a0f-2e7eb73ebbef',
  status: 'queued',
  created: 2022-06-07T23:41:13.026Z,
  pin: {
    cid: 'baeaaadjrgyzsymjqg42toobtgq3q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:13 GMT",
  "etag": "W/\"13d-0iLDM0gfx6YCtILGphTFBz1Rz/Y\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "dd8f40fe-98e4-41f3-8a0f-2e7eb73ebbef",
  "created": "2022-06-07T23:41:13.026Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjrgyzsymjqg42toobtgq3q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## List pin objects (GET /pins) in all states - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response object matches api spec schema (success)

  ✓ Response is ok (success)

  ✓ Response code is 200 (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 1,
  results: [
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      created: '2022-06-07T23:41:12.026Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrgyysyojvg44tqnbyg4zq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 1,
  results: Set(1) {
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      status: 'queued',
      created: 2022-06-07T23:41:12.026Z,
      pin: {
        cid: 'baeaaadjrgyysyojvg44tqnbyg4zq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "342",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:14 GMT",
  "etag": "W/\"156-s6OC1NI9yaCY6G6etxhPtjeuXfc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "933008cf-c83d-44da-8324-e5c7f4ea52c5",
      "created": "2022-06-07T23:41:12.026Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrgyysyojvg44tqnbyg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
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

#### Request - GET: https://api.pinata.cloud/psa/pins/384be226-4048-4455-ab42-a0777d1d3dae

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/384be226-4048-4455-ab42-a0777d1d3dae
```
{
  error: {
    reason: 'OBJECT_NOT_FOUND',
    details: 'Your account does not currently have any record associated with this ID'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Not Found (404)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "123",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:17 GMT",
  "etag": "W/\"7b-03qFhbIaF85nNkdBlgUb6TE8+WU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "OBJECT_NOT_FOUND",
    "details": "Your account does not currently have any record associated with this ID"
  }
}
```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins/1e396066-d709-42df-9bc8-1c0ad4c9c1fd

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/1e396066-d709-42df-9bc8-1c0ad4c9c1fd
```
{
  requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
  created: '2022-06-07T23:41:16.174Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrgy3cymrwgiytcojvga2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
  status: 'queued',
  created: 2022-06-07T23:41:16.174Z,
  pin: {
    cid: 'baeaaadjrgy3cymrwgiytcojvga2q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:18 GMT",
  "etag": "W/\"13d-okMjrHTCzy2YFshHgmnWzyQoF5w\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "1e396066-d709-42df-9bc8-1c0ad4c9c1fd",
  "created": "2022-06-07T23:41:16.174Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjrgy3cymrwgiytcojvga2q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Pin's with requestid '384be226-4048-4455-ab42-a0777d1d3dae' can have cid 'baeaaadjrgy2symjtgiydqobtg4ya' replaced with 'baeaaadjrgy3cymrwgiytcojvga2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://api.pinata.cloud/psa/pins/384be226-4048-4455-ab42-a0777d1d3dae

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgy3cymrwgiytcojvga2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins/384be226-4048-4455-ab42-a0777d1d3dae
```
{
  requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
  created: '2022-06-07T23:41:16.174Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrgy3cymrwgiytcojvga2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
  status: 'queued',
  created: 2022-06-07T23:41:16.174Z,
  pin: {
    cid: 'baeaaadjrgy3cymrwgiytcojvga2q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:16 GMT",
  "etag": "W/\"13d-okMjrHTCzy2YFshHgmnWzyQoF5w\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "1e396066-d709-42df-9bc8-1c0ad4c9c1fd",
  "created": "2022-06-07T23:41:16.174Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjrgy3cymrwgiytcojvga2q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)

  ✓ Could obtain requestid from new pin (384be226-4048-4455-ab42-a0777d1d3dae) (success)

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

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgy2symjtgiydqobtg4ya"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '384be226-4048-4455-ab42-a0777d1d3dae',
  created: '2022-06-07T23:41:15.188Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrgy2symjtgiydqobtg4ya', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '384be226-4048-4455-ab42-a0777d1d3dae',
  status: 'queued',
  created: 2022-06-07T23:41:15.188Z,
  pin: {
    cid: 'baeaaadjrgy2symjtgiydqobtg4ya',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:15 GMT",
  "etag": "W/\"13d-YM0kc52Cs25uDc8bGpl8UHwl2VU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "384be226-4048-4455-ab42-a0777d1d3dae",
  "created": "2022-06-07T23:41:15.188Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjrgy2symjtgiydqobtg4ya",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can retrieve pin with name 'd96f3607-39a7-410e-93f5-60d3c8d2b875' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=d96f3607-39a7-410e-93f5-60d3c8d2b875&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=d96f3607-39a7-410e-93f5-60d3c8d2b875&match=exact
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:19 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can retrieve pin with name 'D96F3607-39A7-410E-93F5-60D3C8D2B875' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=D96F3607-39A7-410E-93F5-60D3C8D2B875&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=D96F3607-39A7-410E-93F5-60D3C8D2B875&match=iexact
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:20 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can retrieve pin with name '39a7-410e-93f5-60d' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=39a7-410e-93f5-60d&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=39a7-410e-93f5-60d&match=partial
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:21 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can retrieve pin with name '39A7-410E-93F5-60D' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=39A7-410E-93F5-60D&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=39A7-410E-93F5-60D&match=ipartial
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:22 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can create a pin with name='d96f3607-39a7-410e-93f5-60d3c8d2b875' - ✓ SUCCESS

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

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgy4symjrhaytamrxhazq","name":"d96f3607-39a7-410e-93f5-60d3c8d2b875"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c',
  created: '2022-06-07T23:41:18.271Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: {
    cid: 'baeaaadjrgy4symjrhaytamrxhazq',
    origins: [],
    meta: {},
    name: 'd96f3607-39a7-410e-93f5-60d3c8d2b875'
  },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c',
  status: 'queued',
  created: 2022-06-07T23:41:18.271Z,
  pin: {
    cid: 'baeaaadjrgy4symjrhaytamrxhazq',
    name: 'd96f3607-39a7-410e-93f5-60d3c8d2b875',
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "364",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:18 GMT",
  "etag": "W/\"16c-iQZu6VlmAzN+YO4MT79d8NRI+5U\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "b05b9869-67ba-4ac3-a268-4a4d7d7ae99c",
  "created": "2022-06-07T23:41:18.271Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjrgy4symjrhaytamrxhazq",
    "origins": [],
    "meta": {},
    "name": "d96f3607-39a7-410e-93f5-60d3c8d2b875"
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbvhe2doobugm2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbvhe2doobugm2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '646bdf17-aacf-40b1-8660-7af078cedb27',
  created: '2022-06-07T23:41:23.365Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjrg4zsynbvhe2doobugm2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '646bdf17-aacf-40b1-8660-7af078cedb27',
  status: 'queued',
  created: 2022-06-07T23:41:23.365Z,
  pin: {
    cid: 'baeaaadjrg4zsynbvhe2doobugm2q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:23 GMT",
  "etag": "W/\"13d-b8CoyOhOLZUOcUlzuFheTZHbQkY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "646bdf17-aacf-40b1-8660-7af078cedb27",
  "created": "2022-06-07T23:41:23.365Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbvhe2doobugm2q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwga2dkobugq4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwga2dkobugq4q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'a7876504-4e11-4a90-a0f7-f2b33d2605a3',
  created: '2022-06-07T23:41:24.455Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwga2dkobugq4q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'a7876504-4e11-4a90-a0f7-f2b33d2605a3',
  status: 'queued',
  created: 2022-06-07T23:41:24.455Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwga2dkobugq4q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "316",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:24 GMT",
  "etag": "W/\"13c-oFe/a+3oHM+hj98DT5rAWpcASjg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "a7876504-4e11-4a90-a0f7-f2b33d2605a3",
  "created": "2022-06-07T23:41:24.455Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwga2dkobugq4q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgeytcmbwgu4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgeytcmbwgu4a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '13330816-1925-4eec-b0b6-0a703fbe34df',
  created: '2022-06-07T23:41:25.371Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgeytcmbwgu4a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '13330816-1925-4eec-b0b6-0a703fbe34df',
  status: 'queued',
  created: 2022-06-07T23:41:25.371Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgeytcmbwgu4a',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:25 GMT",
  "etag": "W/\"13d-ORbwT4mfrAsNwp9pZI4g4dfTWQ8\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "13330816-1925-4eec-b0b6-0a703fbe34df",
  "created": "2022-06-07T23:41:25.371Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgeytcmbwgu4a",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgiydcmbug4yq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgiydcmbug4yq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'e2da4cb2-85f1-4f29-8e75-c51c806457df',
  created: '2022-06-07T23:41:26.438Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgiydcmbug4yq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'e2da4cb2-85f1-4f29-8e75-c51c806457df',
  status: 'queued',
  created: 2022-06-07T23:41:26.438Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgiydcmbug4yq',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "316",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:26 GMT",
  "etag": "W/\"13c-KQEqueZcOHcASFeO6g00gIyntE4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "e2da4cb2-85f1-4f29-8e75-c51c806457df",
  "created": "2022-06-07T23:41:26.438Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgiydcmbug4yq",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgi4dmmjzhazq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgi4dmmjzhazq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '6712499c-770a-46ac-a21f-496888919b78',
  created: '2022-06-07T23:41:27.376Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgi4dmmjzhazq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '6712499c-770a-46ac-a21f-496888919b78',
  status: 'queued',
  created: 2022-06-07T23:41:27.376Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgi4dmmjzhazq',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:27 GMT",
  "etag": "W/\"13e-f3V+2GkAjQhMh31JUn5+gmv/L9g\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "6712499c-770a-46ac-a21f-496888919b78",
  "created": "2022-06-07T23:41:27.376Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgi4dmmjzhazq",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgm2deojrheyq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgm2deojrheyq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '9b4ee5a7-ef6e-438d-80c8-daf421f28542',
  created: '2022-06-07T23:41:28.367Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgm2deojrheyq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '9b4ee5a7-ef6e-438d-80c8-daf421f28542',
  status: 'queued',
  created: 2022-06-07T23:41:28.367Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgm2deojrheyq',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:28 GMT",
  "etag": "W/\"13d-9OF5+uyIUZP7NwtmuLWihjxfKIA\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "9b4ee5a7-ef6e-438d-80c8-daf421f28542",
  "created": "2022-06-07T23:41:28.367Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgm2deojrheyq",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgm4tkobuhe4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgm4tkobuhe4a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '12f38dd0-313a-46b0-b182-418874a63542',
  created: '2022-06-07T23:41:29.379Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgm4tkobuhe4a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '12f38dd0-313a-46b0-b182-418874a63542',
  status: 'queued',
  created: 2022-06-07T23:41:29.379Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgm4tkobuhe4a',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:29 GMT",
  "etag": "W/\"13d-wje9a8gITsJr+0SvyruOqdX94qk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "12f38dd0-313a-46b0-b182-418874a63542",
  "created": "2022-06-07T23:41:29.379Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgm4tkobuhe4a",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgq2tqnjyga3q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgq2tqnjyga3q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'd27a6fb1-2b69-49ab-966b-65045f08905b',
  created: '2022-06-07T23:41:30.377Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgq2tqnjyga3q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'd27a6fb1-2b69-49ab-966b-65045f08905b',
  status: 'queued',
  created: 2022-06-07T23:41:30.377Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgq2tqnjyga3q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:30 GMT",
  "etag": "W/\"13e-r4dUCBhVAXxp41KnufSRDxE7lqY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "d27a6fb1-2b69-49ab-966b-65045f08905b",
  "created": "2022-06-07T23:41:30.377Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgq2tqnjyga3q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgu2dembrge4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgu2dembrge4q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '071ca3ed-d6cb-4b69-b0ad-5690f984481f',
  created: '2022-06-07T23:41:31.368Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgu2dembrge4q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '071ca3ed-d6cb-4b69-b0ad-5690f984481f',
  status: 'queued',
  created: 2022-06-07T23:41:31.368Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgu2dembrge4q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:31 GMT",
  "etag": "W/\"13d-Ect06RUf5blOXuQajHSYxF6KJww\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "071ca3ed-d6cb-4b69-b0ad-5690f984481f",
  "created": "2022-06-07T23:41:31.368Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgu2dembrge4q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgu4tenzzgi3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgu4tenzzgi3a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '1325593f-b5bb-4d1d-8745-d7806d1d230a',
  created: '2022-06-07T23:41:32.383Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgu4tenzzgi3a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '1325593f-b5bb-4d1d-8745-d7806d1d230a',
  status: 'queued',
  created: 2022-06-07T23:41:32.383Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgu4tenzzgi3a',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:32 GMT",
  "etag": "W/\"13d-230DfNiT+XVynaVHHSVq8jWDqmc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "1325593f-b5bb-4d1d-8745-d7806d1d230a",
  "created": "2022-06-07T23:41:32.383Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgu4tenzzgi3a",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwgy2tiobvgm2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwgy2tiobvgm2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '071e0d03-18ce-406a-9685-f903b4f70f56',
  created: '2022-06-07T23:41:33.398Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwgy2tiobvgm2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '071e0d03-18ce-406a-9685-f903b4f70f56',
  status: 'queued',
  created: 2022-06-07T23:41:33.398Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwgy2tiobvgm2q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:33 GMT",
  "etag": "W/\"13d-s6vCyHu0D62ACCVS9r91ZJ8FWzI\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "071e0d03-18ce-406a-9685-f903b4f70f56",
  "created": "2022-06-07T23:41:33.398Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwgy2tiobvgm2q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjrg4zsynbwg4ydmmbvgqza' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.pinata.cloud/psa/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrg4zsynbwg4ydmmbvgqza"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'b1684fcf-3b25-49a9-8dd7-80847c913443',
  created: '2022-06-07T23:41:34.528Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjrg4zsynbwg4ydmmbvgqza', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'b1684fcf-3b25-49a9-8dd7-80847c913443',
  status: 'queued',
  created: 2022-06-07T23:41:34.528Z,
  pin: {
    cid: 'baeaaadjrg4zsynbwg4ydmmbvgqza',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  info: { pinata_pinjob_status: 'prechecking' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "316",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:34 GMT",
  "etag": "W/\"13c-+2J/0owHlvSHg2ia0KNNkGO0brU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "b1684fcf-3b25-49a9-8dd7-80847c913443",
  "created": "2022-06-07T23:41:34.528Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjrg4zsynbwg4ydmmbvgqza",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Pagination: First page of pins - ✘ FAILED

### Expectations (3/5 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Count is greater than or equal to 15 (success)

  ✘ Count is greater than the number of pins returned (failure)

  ✘ Number of pins returned defaults to 10 (failure)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 15,
  results: [
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      created: '2022-06-07T23:41:12.026Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrgyysyojvg44tqnbyg4zq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
      created: '2022-06-07T23:41:16.174Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrgy3cymrwgiytcojvga2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c',
      created: '2022-06-07T23:41:18.271Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: {
        cid: 'baeaaadjrgy4symjrhaytamrxhazq',
        origins: [],
        meta: {},
        name: 'd96f3607-39a7-410e-93f5-60d3c8d2b875'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '646bdf17-aacf-40b1-8660-7af078cedb27',
      created: '2022-06-07T23:41:23.365Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjrg4zsynbvhe2doobugm2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'a7876504-4e11-4a90-a0f7-f2b33d2605a3',
      created: '2022-06-07T23:41:24.455Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwga2dkobugq4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '13330816-1925-4eec-b0b6-0a703fbe34df',
      created: '2022-06-07T23:41:25.371Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgeytcmbwgu4a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'e2da4cb2-85f1-4f29-8e75-c51c806457df',
      created: '2022-06-07T23:41:26.438Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgiydcmbug4yq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6712499c-770a-46ac-a21f-496888919b78',
      created: '2022-06-07T23:41:27.376Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgi4dmmjzhazq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '9b4ee5a7-ef6e-438d-80c8-daf421f28542',
      created: '2022-06-07T23:41:28.367Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgm2deojrheyq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '12f38dd0-313a-46b0-b182-418874a63542',
      created: '2022-06-07T23:41:29.379Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgm4tkobuhe4a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'd27a6fb1-2b69-49ab-966b-65045f08905b',
      created: '2022-06-07T23:41:30.377Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgq2tqnjyga3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '071ca3ed-d6cb-4b69-b0ad-5690f984481f',
      created: '2022-06-07T23:41:31.368Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgu2dembrge4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '1325593f-b5bb-4d1d-8745-d7806d1d230a',
      created: '2022-06-07T23:41:32.383Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgu4tenzzgi3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '071e0d03-18ce-406a-9685-f903b4f70f56',
      created: '2022-06-07T23:41:33.398Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgy2tiobvgm2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'b1684fcf-3b25-49a9-8dd7-80847c913443',
      created: '2022-06-07T23:41:34.528Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwg4ydmmbvgqza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 15,
  results: Set(15) {
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      status: 'queued',
      created: 2022-06-07T23:41:12.026Z,
      pin: {
        cid: 'baeaaadjrgyysyojvg44tqnbyg4zq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
      status: 'failed',
      created: 2022-06-07T23:41:16.174Z,
      pin: {
        cid: 'baeaaadjrgy3cymrwgiytcojvga2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c',
      status: 'failed',
      created: 2022-06-07T23:41:18.271Z,
      pin: {
        cid: 'baeaaadjrgy4symjrhaytamrxhazq',
        name: 'd96f3607-39a7-410e-93f5-60d3c8d2b875',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '646bdf17-aacf-40b1-8660-7af078cedb27',
      status: 'queued',
      created: 2022-06-07T23:41:23.365Z,
      pin: {
        cid: 'baeaaadjrg4zsynbvhe2doobugm2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: 'a7876504-4e11-4a90-a0f7-f2b33d2605a3',
      status: 'failed',
      created: 2022-06-07T23:41:24.455Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwga2dkobugq4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '13330816-1925-4eec-b0b6-0a703fbe34df',
      status: 'failed',
      created: 2022-06-07T23:41:25.371Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgeytcmbwgu4a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: 'e2da4cb2-85f1-4f29-8e75-c51c806457df',
      status: 'failed',
      created: 2022-06-07T23:41:26.438Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgiydcmbug4yq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '6712499c-770a-46ac-a21f-496888919b78',
      status: 'failed',
      created: 2022-06-07T23:41:27.376Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgi4dmmjzhazq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '9b4ee5a7-ef6e-438d-80c8-daf421f28542',
      status: 'failed',
      created: 2022-06-07T23:41:28.367Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgm2deojrheyq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '12f38dd0-313a-46b0-b182-418874a63542',
      status: 'failed',
      created: 2022-06-07T23:41:29.379Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgm4tkobuhe4a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: 'd27a6fb1-2b69-49ab-966b-65045f08905b',
      status: 'queued',
      created: 2022-06-07T23:41:30.377Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgq2tqnjyga3q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '071ca3ed-d6cb-4b69-b0ad-5690f984481f',
      status: 'queued',
      created: 2022-06-07T23:41:31.368Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgu2dembrge4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '1325593f-b5bb-4d1d-8745-d7806d1d230a',
      status: 'failed',
      created: 2022-06-07T23:41:32.383Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgu4tenzzgi3a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '071e0d03-18ce-406a-9685-f903b4f70f56',
      status: 'queued',
      created: 2022-06-07T23:41:33.398Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgy2tiobvgm2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: 'b1684fcf-3b25-49a9-8dd7-80847c913443',
      status: 'queued',
      created: 2022-06-07T23:41:34.528Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwg4ydmmbvgqza',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "4868",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:35 GMT",
  "etag": "W/\"1304-pCR9wfC0BDaLTnjnAq0BBou1Cpo\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "933008cf-c83d-44da-8324-e5c7f4ea52c5",
      "created": "2022-06-07T23:41:12.026Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrgyysyojvg44tqnbyg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "1e396066-d709-42df-9bc8-1c0ad4c9c1fd",
      "created": "2022-06-07T23:41:16.174Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrgy3cymrwgiytcojvga2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "b05b9869-67ba-4ac3-a268-4a4d7d7ae99c",
      "created": "2022-06-07T23:41:18.271Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgy4symjrhaytamrxhazq",
        "origins": [],
        "meta": {},
        "name": "d96f3607-39a7-410e-93f5-60d3c8d2b875"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "646bdf17-aacf-40b1-8660-7af078cedb27",
      "created": "2022-06-07T23:41:23.365Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbvhe2doobugm2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "a7876504-4e11-4a90-a0f7-f2b33d2605a3",
      "created": "2022-06-07T23:41:24.455Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwga2dkobugq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "13330816-1925-4eec-b0b6-0a703fbe34df",
      "created": "2022-06-07T23:41:25.371Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgeytcmbwgu4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "e2da4cb2-85f1-4f29-8e75-c51c806457df",
      "created": "2022-06-07T23:41:26.438Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgiydcmbug4yq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6712499c-770a-46ac-a21f-496888919b78",
      "created": "2022-06-07T23:41:27.376Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgi4dmmjzhazq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9b4ee5a7-ef6e-438d-80c8-daf421f28542",
      "created": "2022-06-07T23:41:28.367Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgm2deojrheyq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "12f38dd0-313a-46b0-b182-418874a63542",
      "created": "2022-06-07T23:41:29.379Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgm4tkobuhe4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d27a6fb1-2b69-49ab-966b-65045f08905b",
      "created": "2022-06-07T23:41:30.377Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgq2tqnjyga3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "071ca3ed-d6cb-4b69-b0ad-5690f984481f",
      "created": "2022-06-07T23:41:31.368Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgu2dembrge4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "1325593f-b5bb-4d1d-8745-d7806d1d230a",
      "created": "2022-06-07T23:41:32.383Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgu4tenzzgi3a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "071e0d03-18ce-406a-9685-f903b4f70f56",
      "created": "2022-06-07T23:41:33.398Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgy2tiobvgm2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "b1684fcf-3b25-49a9-8dd7-80847c913443",
      "created": "2022-06-07T23:41:34.528Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwg4ydmmbvgqza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    }
  ]
}
```
## Pagination: Retrieve the next page of pins - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ The next page of pins doesn't contain any of previous pages pins (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T23%3A41%3A12.026Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T23%3A41%3A12.026Z
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:35 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ✘ FAILED

### Expectations (32/34 successful)

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

  ✓ Count is greater than or equal to 15 (success)

  ✘ Count is greater than the number of pins returned (failure)

  ✘ Number of pins returned defaults to 10 (failure)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ The next page of pins doesn't contain any of previous pages pins (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 3,
  results: [
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      created: '2022-06-07T23:41:12.026Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrgyysyojvg44tqnbyg4zq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
      created: '2022-06-07T23:41:16.174Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrgy3cymrwgiytcojvga2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c',
      created: '2022-06-07T23:41:18.271Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: {
        cid: 'baeaaadjrgy4symjrhaytamrxhazq',
        origins: [],
        meta: {},
        name: 'd96f3607-39a7-410e-93f5-60d3c8d2b875'
      },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 3,
  results: Set(3) {
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      status: 'queued',
      created: 2022-06-07T23:41:12.026Z,
      pin: {
        cid: 'baeaaadjrgyysyojvg44tqnbyg4zq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
      status: 'queued',
      created: 2022-06-07T23:41:16.174Z,
      pin: {
        cid: 'baeaaadjrgy3cymrwgiytcojvga2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c',
      status: 'queued',
      created: 2022-06-07T23:41:18.271Z,
      pin: {
        cid: 'baeaaadjrgy4symjrhaytamrxhazq',
        name: 'd96f3607-39a7-410e-93f5-60d3c8d2b875',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "1025",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:22 GMT",
  "etag": "W/\"401-Qd28XebMT77CC2sJUi8TxDHuOwU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "933008cf-c83d-44da-8324-e5c7f4ea52c5",
      "created": "2022-06-07T23:41:12.026Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrgyysyojvg44tqnbyg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "1e396066-d709-42df-9bc8-1c0ad4c9c1fd",
      "created": "2022-06-07T23:41:16.174Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrgy3cymrwgiytcojvga2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "b05b9869-67ba-4ac3-a268-4a4d7d7ae99c",
      "created": "2022-06-07T23:41:18.271Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgy4symjrhaytamrxhazq",
        "origins": [],
        "meta": {},
        "name": "d96f3607-39a7-410e-93f5-60d3c8d2b875"
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    }
  ]
}
```
## Can delete pin with requestid '933008cf-c83d-44da-8324-e5c7f4ea52c5' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/933008cf-c83d-44da-8324-e5c7f4ea52c5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/933008cf-c83d-44da-8324-e5c7f4ea52c5
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:37 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '1e396066-d709-42df-9bc8-1c0ad4c9c1fd' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/1e396066-d709-42df-9bc8-1c0ad4c9c1fd

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/1e396066-d709-42df-9bc8-1c0ad4c9c1fd
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:38 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/b05b9869-67ba-4ac3-a268-4a4d7d7ae99c

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/b05b9869-67ba-4ac3-a268-4a4d7d7ae99c
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:39 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '646bdf17-aacf-40b1-8660-7af078cedb27' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/646bdf17-aacf-40b1-8660-7af078cedb27

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/646bdf17-aacf-40b1-8660-7af078cedb27
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:40 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid 'a7876504-4e11-4a90-a0f7-f2b33d2605a3' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/a7876504-4e11-4a90-a0f7-f2b33d2605a3

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/a7876504-4e11-4a90-a0f7-f2b33d2605a3
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:41 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '13330816-1925-4eec-b0b6-0a703fbe34df' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/13330816-1925-4eec-b0b6-0a703fbe34df

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/13330816-1925-4eec-b0b6-0a703fbe34df
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:42 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid 'e2da4cb2-85f1-4f29-8e75-c51c806457df' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/e2da4cb2-85f1-4f29-8e75-c51c806457df

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/e2da4cb2-85f1-4f29-8e75-c51c806457df
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:43 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '6712499c-770a-46ac-a21f-496888919b78' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/6712499c-770a-46ac-a21f-496888919b78

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/6712499c-770a-46ac-a21f-496888919b78
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:44 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '9b4ee5a7-ef6e-438d-80c8-daf421f28542' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/9b4ee5a7-ef6e-438d-80c8-daf421f28542

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/9b4ee5a7-ef6e-438d-80c8-daf421f28542
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:45 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '12f38dd0-313a-46b0-b182-418874a63542' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/12f38dd0-313a-46b0-b182-418874a63542

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/12f38dd0-313a-46b0-b182-418874a63542
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:46 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid 'd27a6fb1-2b69-49ab-966b-65045f08905b' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/d27a6fb1-2b69-49ab-966b-65045f08905b

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/d27a6fb1-2b69-49ab-966b-65045f08905b
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:47 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '071ca3ed-d6cb-4b69-b0ad-5690f984481f' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/071ca3ed-d6cb-4b69-b0ad-5690f984481f

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/071ca3ed-d6cb-4b69-b0ad-5690f984481f
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:48 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '1325593f-b5bb-4d1d-8745-d7806d1d230a' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/1325593f-b5bb-4d1d-8745-d7806d1d230a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/1325593f-b5bb-4d1d-8745-d7806d1d230a
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:49 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid '071e0d03-18ce-406a-9685-f903b4f70f56' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/071e0d03-18ce-406a-9685-f903b4f70f56

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/071e0d03-18ce-406a-9685-f903b4f70f56
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:50 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Can delete pin with requestid 'b1684fcf-3b25-49a9-8dd7-80847c913443' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/b1684fcf-3b25-49a9-8dd7-80847c913443

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/b1684fcf-3b25-49a9-8dd7-80847c913443
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:51 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```
## Call pinsGet after deletions - ✘ FAILED

### Expectations (0/1 successful)

  ✘ Final pinsGet call returns a count of zero (failure)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 1,
  results: [
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      created: '2022-06-07T23:41:12.026Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrgyysyojvg44tqnbyg4zq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 1,
  results: Set(1) {
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      status: 'failed',
      created: 2022-06-07T23:41:12.026Z,
      pin: {
        cid: 'baeaaadjrgyysyojvg44tqnbyg4zq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "345",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:52 GMT",
  "etag": "W/\"159-FJZW0xoPpfHlvrOt+0cR4g1oVhk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "933008cf-c83d-44da-8324-e5c7f4ea52c5",
      "created": "2022-06-07T23:41:12.026Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrgyysyojvg44tqnbyg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    }
  ]
}
```
## Can delete all pins - ✘ FAILED

### Expectations (15/31 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)

  ✘ Final pinsGet call returns a count of zero (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 15,
  results: [
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      created: '2022-06-07T23:41:12.026Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrgyysyojvg44tqnbyg4zq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
      created: '2022-06-07T23:41:16.174Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrgy3cymrwgiytcojvga2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c',
      created: '2022-06-07T23:41:18.271Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: {
        cid: 'baeaaadjrgy4symjrhaytamrxhazq',
        origins: [],
        meta: {},
        name: 'd96f3607-39a7-410e-93f5-60d3c8d2b875'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '646bdf17-aacf-40b1-8660-7af078cedb27',
      created: '2022-06-07T23:41:23.365Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjrg4zsynbvhe2doobugm2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'a7876504-4e11-4a90-a0f7-f2b33d2605a3',
      created: '2022-06-07T23:41:24.455Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwga2dkobugq4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '13330816-1925-4eec-b0b6-0a703fbe34df',
      created: '2022-06-07T23:41:25.371Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgeytcmbwgu4a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'e2da4cb2-85f1-4f29-8e75-c51c806457df',
      created: '2022-06-07T23:41:26.438Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgiydcmbug4yq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6712499c-770a-46ac-a21f-496888919b78',
      created: '2022-06-07T23:41:27.376Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgi4dmmjzhazq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '9b4ee5a7-ef6e-438d-80c8-daf421f28542',
      created: '2022-06-07T23:41:28.367Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgm2deojrheyq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '12f38dd0-313a-46b0-b182-418874a63542',
      created: '2022-06-07T23:41:29.379Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgm4tkobuhe4a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'd27a6fb1-2b69-49ab-966b-65045f08905b',
      created: '2022-06-07T23:41:30.377Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgq2tqnjyga3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '071ca3ed-d6cb-4b69-b0ad-5690f984481f',
      created: '2022-06-07T23:41:31.368Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgu2dembrge4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '1325593f-b5bb-4d1d-8745-d7806d1d230a',
      created: '2022-06-07T23:41:32.383Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgu4tenzzgi3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '071e0d03-18ce-406a-9685-f903b4f70f56',
      created: '2022-06-07T23:41:33.398Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwgy2tiobvgm2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'b1684fcf-3b25-49a9-8dd7-80847c913443',
      created: '2022-06-07T23:41:34.528Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrg4zsynbwg4ydmmbvgqza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 15,
  results: Set(15) {
    {
      requestid: '933008cf-c83d-44da-8324-e5c7f4ea52c5',
      status: 'queued',
      created: 2022-06-07T23:41:12.026Z,
      pin: {
        cid: 'baeaaadjrgyysyojvg44tqnbyg4zq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '1e396066-d709-42df-9bc8-1c0ad4c9c1fd',
      status: 'failed',
      created: 2022-06-07T23:41:16.174Z,
      pin: {
        cid: 'baeaaadjrgy3cymrwgiytcojvga2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: 'b05b9869-67ba-4ac3-a268-4a4d7d7ae99c',
      status: 'failed',
      created: 2022-06-07T23:41:18.271Z,
      pin: {
        cid: 'baeaaadjrgy4symjrhaytamrxhazq',
        name: 'd96f3607-39a7-410e-93f5-60d3c8d2b875',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '646bdf17-aacf-40b1-8660-7af078cedb27',
      status: 'queued',
      created: 2022-06-07T23:41:23.365Z,
      pin: {
        cid: 'baeaaadjrg4zsynbvhe2doobugm2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: 'a7876504-4e11-4a90-a0f7-f2b33d2605a3',
      status: 'failed',
      created: 2022-06-07T23:41:24.455Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwga2dkobugq4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '13330816-1925-4eec-b0b6-0a703fbe34df',
      status: 'failed',
      created: 2022-06-07T23:41:25.371Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgeytcmbwgu4a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: 'e2da4cb2-85f1-4f29-8e75-c51c806457df',
      status: 'failed',
      created: 2022-06-07T23:41:26.438Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgiydcmbug4yq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '6712499c-770a-46ac-a21f-496888919b78',
      status: 'failed',
      created: 2022-06-07T23:41:27.376Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgi4dmmjzhazq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '9b4ee5a7-ef6e-438d-80c8-daf421f28542',
      status: 'failed',
      created: 2022-06-07T23:41:28.367Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgm2deojrheyq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '12f38dd0-313a-46b0-b182-418874a63542',
      status: 'failed',
      created: 2022-06-07T23:41:29.379Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgm4tkobuhe4a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: 'd27a6fb1-2b69-49ab-966b-65045f08905b',
      status: 'queued',
      created: 2022-06-07T23:41:30.377Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgq2tqnjyga3q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '071ca3ed-d6cb-4b69-b0ad-5690f984481f',
      status: 'queued',
      created: 2022-06-07T23:41:31.368Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgu2dembrge4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '1325593f-b5bb-4d1d-8745-d7806d1d230a',
      status: 'failed',
      created: 2022-06-07T23:41:32.383Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgu4tenzzgi3a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '071e0d03-18ce-406a-9685-f903b4f70f56',
      status: 'queued',
      created: 2022-06-07T23:41:33.398Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwgy2tiobvgm2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: 'b1684fcf-3b25-49a9-8dd7-80847c913443',
      status: 'queued',
      created: 2022-06-07T23:41:34.528Z,
      pin: {
        cid: 'baeaaadjrg4zsynbwg4ydmmbvgqza',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "4868",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 23:41:36 GMT",
  "etag": "W/\"1304-pCR9wfC0BDaLTnjnAq0BBou1Cpo\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "933008cf-c83d-44da-8324-e5c7f4ea52c5",
      "created": "2022-06-07T23:41:12.026Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrgyysyojvg44tqnbyg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "1e396066-d709-42df-9bc8-1c0ad4c9c1fd",
      "created": "2022-06-07T23:41:16.174Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrgy3cymrwgiytcojvga2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "b05b9869-67ba-4ac3-a268-4a4d7d7ae99c",
      "created": "2022-06-07T23:41:18.271Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgy4symjrhaytamrxhazq",
        "origins": [],
        "meta": {},
        "name": "d96f3607-39a7-410e-93f5-60d3c8d2b875"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "646bdf17-aacf-40b1-8660-7af078cedb27",
      "created": "2022-06-07T23:41:23.365Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbvhe2doobugm2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "a7876504-4e11-4a90-a0f7-f2b33d2605a3",
      "created": "2022-06-07T23:41:24.455Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwga2dkobugq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "13330816-1925-4eec-b0b6-0a703fbe34df",
      "created": "2022-06-07T23:41:25.371Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgeytcmbwgu4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "e2da4cb2-85f1-4f29-8e75-c51c806457df",
      "created": "2022-06-07T23:41:26.438Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgiydcmbug4yq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6712499c-770a-46ac-a21f-496888919b78",
      "created": "2022-06-07T23:41:27.376Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgi4dmmjzhazq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9b4ee5a7-ef6e-438d-80c8-daf421f28542",
      "created": "2022-06-07T23:41:28.367Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgm2deojrheyq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "12f38dd0-313a-46b0-b182-418874a63542",
      "created": "2022-06-07T23:41:29.379Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgm4tkobuhe4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d27a6fb1-2b69-49ab-966b-65045f08905b",
      "created": "2022-06-07T23:41:30.377Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgq2tqnjyga3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "071ca3ed-d6cb-4b69-b0ad-5690f984481f",
      "created": "2022-06-07T23:41:31.368Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgu2dembrge4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "1325593f-b5bb-4d1d-8745-d7806d1d230a",
      "created": "2022-06-07T23:41:32.383Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgu4tenzzgi3a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "071e0d03-18ce-406a-9685-f903b4f70f56",
      "created": "2022-06-07T23:41:33.398Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwgy2tiobvgm2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "b1684fcf-3b25-49a9-8dd7-80847c913443",
      "created": "2022-06-07T23:41:34.528Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrg4zsynbwg4ydmmbvgqza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    }
  ]
}
```
