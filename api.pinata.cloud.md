
# https://api.pinata.cloud/psa compliance:

Execution Date: 2022-06-08T19:43:31.443Z

Revision: [933fbc6](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/933fbc6)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.pinata.cloud.md)

## Summary (4/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  🟢 [Pins post of CID 'baeaaadjsgyzcymjygiydemrsguza'](#pins-post-of-cid-baeaaadjsgyzcymjygiydemrsguza----success)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='59b52ddf-85ff-428e-bcf1-6049145e2333'](#can-create-a-pin-with-name59b52ddf-85ff-428e-bcf1-6049145e2333----success)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response object matches api spec schema (success)

  ❌ Returns a 403 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
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
```json
{
  error: {
    reason: 'KEYS_MUST_BE_STRINGS',
    details: 'pinata_api_key and pinata_secret_api_key must both be strings'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:42:48 GMT",
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
## Request with invalid token - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response object matches api spec schema (success)

  ❌ Returns a 403 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
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
```json
{
  error: {
    reason: 'INVALID_CREDENTIALS',
    details: 'Invalid/expired credentials'
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:42:49 GMT",
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
## Pins post of CID 'baeaaadjsgyzcymjygiydemrsguza' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Pinning status is either queued, pinning, or pinned (success)





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
{"cid":"baeaaadjsgyzcymjygiydemrsguza"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
  created: '2022-06-08T19:42:50.516Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjsgyzcymjygiydemrsguza', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
  status: 'queued',
  created: 2022-06-08T19:42:50.516Z,
  pin: {
    cid: 'baeaaadjsgyzcymjygiydemrsguza',
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
  "date": "Wed, 08 Jun 2022 19:42:50 GMT",
  "etag": "W/\"13d-j23c+Zvw8oBN1D2sLYti/+01GmE\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "a517edec-18a2-49a3-9a43-0b62161e1fcc",
  "created": "2022-06-08T19:42:50.516Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjsgyzcymjygiydemrsguza",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## The newly created pin can be immediately deleted - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/f03738ec-5a28-4b5d-ad03-456f7cef05ba

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/f03738ec-5a28-4b5d-ad03-456f7cef05ba
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:42:52 GMT",
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
## Can create and then delete a new pin - ❌ FAILED

### Expectations (3/4 successful)

  🟢 Result is not null (success)

  🟢 Response code is 200 (success)

  🟢 Response is ok (success)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
{"cid":"baeaaadjsgyzsynbugq4dsnrsgu3q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: 'f03738ec-5a28-4b5d-ad03-456f7cef05ba',
  created: '2022-06-08T19:42:51.461Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsgyzsynbugq4dsnrsgu3q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'f03738ec-5a28-4b5d-ad03-456f7cef05ba',
  status: 'queued',
  created: 2022-06-08T19:42:51.461Z,
  pin: {
    cid: 'baeaaadjsgyzsynbugq4dsnrsgu3q',
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
  "date": "Wed, 08 Jun 2022 19:42:51 GMT",
  "etag": "W/\"13c-TaJxD85LyfF9OqwDViMrcH8CkOg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "f03738ec-5a28-4b5d-ad03-456f7cef05ba",
  "created": "2022-06-08T19:42:51.461Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsgyzsynbugq4dsnrsgu3q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (3/3 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)





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
```json
{
  count: 1,
  results: [
    {
      requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
      created: '2022-06-08T19:42:50.516Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsgyzcymjygiydemrsguza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  count: 1,
  results: Set(1) {
    {
      requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
      status: 'queued',
      created: 2022-06-08T19:42:50.516Z,
      pin: {
        cid: 'baeaaadjsgyzcymjygiydemrsguza',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
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
  "content-length": "341",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:42:52 GMT",
  "etag": "W/\"155-QlJ6wMIp82N54pxEquR4MJDoWFU\"",
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
      "requestid": "a517edec-18a2-49a3-9a43-0b62161e1fcc",
      "created": "2022-06-08T19:42:50.516Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsgyzcymjygiydemrsguza",
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
## Get original pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://api.pinata.cloud/psa/pins/6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34
```json
{
  error: {
    reason: 'OBJECT_NOT_FOUND',
    details: 'Your account does not currently have any record associated with this ID'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:42:55 GMT",
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
## Get new pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins/58d54560-3dff-497d-99ef-fdff25b44bf0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/58d54560-3dff-497d-99ef-fdff25b44bf0
```json
{
  requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
  created: '2022-06-08T19:42:54.731Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsgy3cynrqg43dinbygaya', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
  status: 'queued',
  created: 2022-06-08T19:42:54.731Z,
  pin: {
    cid: 'baeaaadjsgy3cynrqg43dinbygaya',
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
  "date": "Wed, 08 Jun 2022 19:42:56 GMT",
  "etag": "W/\"13c-Km/aL2q81X/aR1ZLK4p/TU1wP5w\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "58d54560-3dff-497d-99ef-fdff25b44bf0",
  "created": "2022-06-08T19:42:54.731Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsgy3cynrqg43dinbygaya",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Pin's with requestid '6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34' can have cid 'baeaaadjsgy2synbzga2toobsg4za' replaced with 'baeaaadjsgy3cynrqg43dinbygaya' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://api.pinata.cloud/psa/pins/6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgy3cynrqg43dinbygaya"}
```
#### Response data from https://api.pinata.cloud/psa/pins/6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34
```json
{
  requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
  created: '2022-06-08T19:42:54.731Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsgy3cynrqg43dinbygaya', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
  status: 'queued',
  created: 2022-06-08T19:42:54.731Z,
  pin: {
    cid: 'baeaaadjsgy3cynrqg43dinbygaya',
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
  "date": "Wed, 08 Jun 2022 19:42:54 GMT",
  "etag": "W/\"13c-Km/aL2q81X/aR1ZLK4p/TU1wP5w\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "58d54560-3dff-497d-99ef-fdff25b44bf0",
  "created": "2022-06-08T19:42:54.731Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsgy3cynrqg43dinbygaya",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34) (success)

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
{"cid":"baeaaadjsgy2synbzga2toobsg4za"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34',
  created: '2022-06-08T19:42:53.706Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsgy2synbzga2toobsg4za', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34',
  status: 'queued',
  created: 2022-06-08T19:42:53.706Z,
  pin: {
    cid: 'baeaaadjsgy2synbzga2toobsg4za',
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
  "date": "Wed, 08 Jun 2022 19:42:53 GMT",
  "etag": "W/\"13c-Vj5e8dQj3K2LuUMz5rXKMiZQow4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "6c1d5ae4-2499-4766-b8fc-28cc0f5b0f34",
  "created": "2022-06-08T19:42:53.706Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsgy2synbzga2toobsg4za",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can retrieve pin with name '59b52ddf-85ff-428e-bcf1-6049145e2333' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=59b52ddf-85ff-428e-bcf1-6049145e2333&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=59b52ddf-85ff-428e-bcf1-6049145e2333&match=exact
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:42:57 GMT",
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
## Can retrieve pin with name '59B52DDF-85FF-428E-BCF1-6049145E2333' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=59B52DDF-85FF-428E-BCF1-6049145E2333&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=59B52DDF-85FF-428E-BCF1-6049145E2333&match=iexact
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:42:58 GMT",
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
## Can retrieve pin with name '85ff-428e-bcf1-604' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=85ff-428e-bcf1-604&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=85ff-428e-bcf1-604&match=partial
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:42:59 GMT",
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
## Can retrieve pin with name '85FF-428E-BCF1-604' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=85FF-428E-BCF1-604&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=85FF-428E-BCF1-604&match=ipartial
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:43:00 GMT",
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
## Can create a pin with name='59b52ddf-85ff-428e-bcf1-6049145e2333' - 🟢 SUCCESS

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
{"cid":"baeaaadjsgy4synbxgqytamjqg42a","name":"59b52ddf-85ff-428e-bcf1-6049145e2333"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '02806959-dcdf-4918-9690-a0dfd3d09a2a',
  created: '2022-06-08T19:42:56.967Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: {
    cid: 'baeaaadjsgy4synbxgqytamjqg42a',
    origins: [],
    meta: {},
    name: '59b52ddf-85ff-428e-bcf1-6049145e2333'
  },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '02806959-dcdf-4918-9690-a0dfd3d09a2a',
  status: 'queued',
  created: 2022-06-08T19:42:56.967Z,
  pin: {
    cid: 'baeaaadjsgy4synbxgqytamjqg42a',
    name: '59b52ddf-85ff-428e-bcf1-6049145e2333',
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
  "content-length": "362",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:42:57 GMT",
  "etag": "W/\"16a-zYmpocVzDD/WW+ocmdcUj32a8Gk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "02806959-dcdf-4918-9690-a0dfd3d09a2a",
  "created": "2022-06-08T19:42:56.967Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsgy4synbxgqytamjqg42a",
    "origins": [],
    "meta": {},
    "name": "59b52ddf-85ff-428e-bcf1-6049145e2333"
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvga3tgobyhe3q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvga3tgobyhe3q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc',
  created: '2022-06-08T19:43:02.175Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvga3tgobyhe3q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc',
  status: 'queued',
  created: 2022-06-08T19:43:02.175Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvga3tgobyhe3q',
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
  "date": "Wed, 08 Jun 2022 19:43:02 GMT",
  "etag": "W/\"13e-hB1taTJYY+NM1SaB76NXXPRgFFs\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc",
  "created": "2022-06-08T19:43:02.175Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvga3tgobyhe3q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgeztomzshe2q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgeztomzshe2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '832e4ff0-8d4b-4e70-b872-818e2dec885b',
  created: '2022-06-08T19:43:03.167Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgeztomzshe2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '832e4ff0-8d4b-4e70-b872-818e2dec885b',
  status: 'queued',
  created: 2022-06-08T19:43:03.167Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgeztomzshe2q',
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
  "date": "Wed, 08 Jun 2022 19:43:03 GMT",
  "etag": "W/\"13e-hOb/E+Ns9aHQG+pu9ZaOp1NlrCg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "832e4ff0-8d4b-4e70-b872-818e2dec885b",
  "created": "2022-06-08T19:43:03.167Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgeztomzshe2q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvge4danrthezq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvge4danrthezq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '27bd9e09-e1a0-4423-be16-7e5bdaf52d1a',
  created: '2022-06-08T19:43:04.182Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvge4danrthezq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '27bd9e09-e1a0-4423-be16-7e5bdaf52d1a',
  status: 'queued',
  created: 2022-06-08T19:43:04.182Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvge4danrthezq',
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
  "date": "Wed, 08 Jun 2022 19:43:04 GMT",
  "etag": "W/\"13c-0yStpGU0M8AKQZcAIV/qsTfkSMc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "27bd9e09-e1a0-4423-be16-7e5bdaf52d1a",
  "created": "2022-06-08T19:43:04.182Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvge4danrthezq",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgiytqnrwheza' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgiytqnrwheza"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '9972c8b0-e2df-430a-bdff-7924bf1162e1',
  created: '2022-06-08T19:43:05.180Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgiytqnrwheza', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '9972c8b0-e2df-430a-bdff-7924bf1162e1',
  status: 'queued',
  created: 2022-06-08T19:43:05.180Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgiytqnrwheza',
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
  "date": "Wed, 08 Jun 2022 19:43:05 GMT",
  "etag": "W/\"13d-1QJw4ZkOaNHp4Rlp81l4pzgvong\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "9972c8b0-e2df-430a-bdff-7924bf1162e1",
  "created": "2022-06-08T19:43:05.180Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgiytqnrwheza",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgi3tknjqheya' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgi3tknjqheya"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: 'e651903b-de7f-41fa-be24-a0e2e3961c5d',
  created: '2022-06-08T19:43:06.197Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgi3tknjqheya', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'e651903b-de7f-41fa-be24-a0e2e3961c5d',
  status: 'queued',
  created: 2022-06-08T19:43:06.197Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgi3tknjqheya',
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
  "date": "Wed, 08 Jun 2022 19:43:06 GMT",
  "etag": "W/\"13d-Ziv33H2nlAxgbaL7E6ggchbwFFE\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "e651903b-de7f-41fa-be24-a0e2e3961c5d",
  "created": "2022-06-08T19:43:06.197Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgi3tknjqheya",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgmytinjwha4q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgmytinjwha4q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '8f2a0024-8020-4168-a991-4c4e3986bdc7',
  created: '2022-06-08T19:43:07.186Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgmytinjwha4q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '8f2a0024-8020-4168-a991-4c4e3986bdc7',
  status: 'queued',
  created: 2022-06-08T19:43:07.186Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgmytinjwha4q',
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
  "date": "Wed, 08 Jun 2022 19:43:07 GMT",
  "etag": "W/\"13e-mfp85HTbqdvsxFVPET2n6Swokjw\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "8f2a0024-8020-4168-a991-4c4e3986bdc7",
  "created": "2022-06-08T19:43:07.186Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgmytinjwha4q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgm2dsmbwha4a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgm2dsmbwha4a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: 'd80e1b24-c446-4773-8e59-513db361433d',
  created: '2022-06-08T19:43:08.212Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgm2dsmbwha4a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'd80e1b24-c446-4773-8e59-513db361433d',
  status: 'queued',
  created: 2022-06-08T19:43:08.212Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgm2dsmbwha4a',
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
  "date": "Wed, 08 Jun 2022 19:43:08 GMT",
  "etag": "W/\"13c-6auskra3I8vF7I6oMBU5nFqNsLE\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "d80e1b24-c446-4773-8e59-513db361433d",
  "created": "2022-06-08T19:43:08.212Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgm2dsmbwha4a",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgm4dgojzha3q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgm4dgojzha3q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '724633f2-40d9-45c7-baf6-6868895a0305',
  created: '2022-06-08T19:43:09.253Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgm4dgojzha3q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '724633f2-40d9-45c7-baf6-6868895a0305',
  status: 'queued',
  created: 2022-06-08T19:43:09.253Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgm4dgojzha3q',
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
  "date": "Wed, 08 Jun 2022 19:43:09 GMT",
  "etag": "W/\"13c-InOf1J4BPiOra764YYnGVV4Ooco\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "724633f2-40d9-45c7-baf6-6868895a0305",
  "created": "2022-06-08T19:43:09.253Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgm4dgojzha3q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgqzdqojwha2q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgqzdqojwha2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '3cc67793-4bc2-4403-b5d8-f4f85470e59e',
  created: '2022-06-08T19:43:10.260Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgqzdqojwha2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '3cc67793-4bc2-4403-b5d8-f4f85470e59e',
  status: 'queued',
  created: 2022-06-08T19:43:10.260Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgqzdqojwha2q',
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
  "date": "Wed, 08 Jun 2022 19:43:10 GMT",
  "etag": "W/\"13d-BkgZqT+Rpp9tkCMdPU2TSfQhBYw\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "3cc67793-4bc2-4403-b5d8-f4f85470e59e",
  "created": "2022-06-08T19:43:10.260Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgqzdqojwha2q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgq3dembuha2a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgq3dembuha2a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '8f5b6d8c-dcdb-4f0a-8439-36bc67da3320',
  created: '2022-06-08T19:43:11.286Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgq3dembuha2a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '8f5b6d8c-dcdb-4f0a-8439-36bc67da3320',
  status: 'queued',
  created: 2022-06-08T19:43:11.286Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgq3dembuha2a',
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
  "date": "Wed, 08 Jun 2022 19:43:11 GMT",
  "etag": "W/\"13d-2iWmx5WZqjSBP1FnIjNpB/ggYCU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "8f5b6d8c-dcdb-4f0a-8439-36bc67da3320",
  "created": "2022-06-08T19:43:11.286Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgq3dembuha2a",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvgq4tinzuhazq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvgq4tinzuhazq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: '7ff50a5f-13c9-4832-821f-3445f20910c7',
  created: '2022-06-08T19:43:12.196Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvgq4tinzuhazq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: '7ff50a5f-13c9-4832-821f-3445f20910c7',
  status: 'queued',
  created: 2022-06-08T19:43:12.196Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvgq4tinzuhazq',
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
  "date": "Wed, 08 Jun 2022 19:43:12 GMT",
  "etag": "W/\"13e-SjHPnkzyeaA1oGQVt/2V2/qVguc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "7ff50a5f-13c9-4832-821f-3445f20910c7",
  "created": "2022-06-08T19:43:12.196Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvgq4tinzuhazq",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can create new pin for testing pagination cid='baeaaadjsg4zsyojvguzdmnrshaza' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjsg4zsyojvguzdmnrshaza"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```json
{
  requestid: 'fb304429-55e6-43b6-a00f-2600f9a43fe5',
  created: '2022-06-08T19:43:13.237Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjsg4zsyojvguzdmnrshaza', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  requestid: 'fb304429-55e6-43b6-a00f-2600f9a43fe5',
  status: 'queued',
  created: 2022-06-08T19:43:13.237Z,
  pin: {
    cid: 'baeaaadjsg4zsyojvguzdmnrshaza',
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
  "date": "Wed, 08 Jun 2022 19:43:13 GMT",
  "etag": "W/\"13d-XSS//MTl1wLh2QPe0K1BPMAEGZ0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "fb304429-55e6-43b6-a00f-2600f9a43fe5",
  "created": "2022-06-08T19:43:13.237Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjsg4zsyojvguzdmnrshaza",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Pagination: First page of pins - ❌ FAILED

### Expectations (3/5 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  ❌ Count is greater than the number of pins returned (failure)

  ❌ Number of pins returned defaults to 10 (failure)





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
```json
{
  count: 15,
  results: [
    {
      requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
      created: '2022-06-08T19:42:50.516Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsgyzcymjygiydemrsguza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
      created: '2022-06-08T19:42:54.731Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsgy3cynrqg43dinbygaya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '02806959-dcdf-4918-9690-a0dfd3d09a2a',
      created: '2022-06-08T19:42:56.967Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: {
        cid: 'baeaaadjsgy4synbxgqytamjqg42a',
        origins: [],
        meta: {},
        name: '59b52ddf-85ff-428e-bcf1-6049145e2333'
      },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc',
      created: '2022-06-08T19:43:02.175Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvga3tgobyhe3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '832e4ff0-8d4b-4e70-b872-818e2dec885b',
      created: '2022-06-08T19:43:03.167Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgeztomzshe2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '27bd9e09-e1a0-4423-be16-7e5bdaf52d1a',
      created: '2022-06-08T19:43:04.182Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvge4danrthezq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '9972c8b0-e2df-430a-bdff-7924bf1162e1',
      created: '2022-06-08T19:43:05.180Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgiytqnrwheza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'e651903b-de7f-41fa-be24-a0e2e3961c5d',
      created: '2022-06-08T19:43:06.197Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgi3tknjqheya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '8f2a0024-8020-4168-a991-4c4e3986bdc7',
      created: '2022-06-08T19:43:07.186Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgmytinjwha4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'd80e1b24-c446-4773-8e59-513db361433d',
      created: '2022-06-08T19:43:08.212Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgm2dsmbwha4a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '724633f2-40d9-45c7-baf6-6868895a0305',
      created: '2022-06-08T19:43:09.253Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgm4dgojzha3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '3cc67793-4bc2-4403-b5d8-f4f85470e59e',
      created: '2022-06-08T19:43:10.260Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgqzdqojwha2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '8f5b6d8c-dcdb-4f0a-8439-36bc67da3320',
      created: '2022-06-08T19:43:11.286Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgq3dembuha2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '7ff50a5f-13c9-4832-821f-3445f20910c7',
      created: '2022-06-08T19:43:12.196Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgq4tinzuhazq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'fb304429-55e6-43b6-a00f-2600f9a43fe5',
      created: '2022-06-08T19:43:13.237Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvguzdmnrshaza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  count: 15,
  results: Set(15) {
    {
      requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
      status: 'queued',
      created: 2022-06-08T19:42:50.516Z,
      pin: {
        cid: 'baeaaadjsgyzcymjygiydemrsguza',
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
      requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
      status: 'queued',
      created: 2022-06-08T19:42:54.731Z,
      pin: {
        cid: 'baeaaadjsgy3cynrqg43dinbygaya',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '02806959-dcdf-4918-9690-a0dfd3d09a2a',
      status: 'queued',
      created: 2022-06-08T19:42:56.967Z,
      pin: {
        cid: 'baeaaadjsgy4synbxgqytamjqg42a',
        name: '59b52ddf-85ff-428e-bcf1-6049145e2333',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc',
      status: 'queued',
      created: 2022-06-08T19:43:02.175Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvga3tgobyhe3q',
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
      requestid: '832e4ff0-8d4b-4e70-b872-818e2dec885b',
      status: 'queued',
      created: 2022-06-08T19:43:03.167Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgeztomzshe2q',
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
      requestid: '27bd9e09-e1a0-4423-be16-7e5bdaf52d1a',
      status: 'queued',
      created: 2022-06-08T19:43:04.182Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvge4danrthezq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '9972c8b0-e2df-430a-bdff-7924bf1162e1',
      status: 'queued',
      created: 2022-06-08T19:43:05.180Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgiytqnrwheza',
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
      requestid: 'e651903b-de7f-41fa-be24-a0e2e3961c5d',
      status: 'queued',
      created: 2022-06-08T19:43:06.197Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgi3tknjqheya',
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
      requestid: '8f2a0024-8020-4168-a991-4c4e3986bdc7',
      status: 'queued',
      created: 2022-06-08T19:43:07.186Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgmytinjwha4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: 'd80e1b24-c446-4773-8e59-513db361433d',
      status: 'queued',
      created: 2022-06-08T19:43:08.212Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgm2dsmbwha4a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '724633f2-40d9-45c7-baf6-6868895a0305',
      status: 'queued',
      created: 2022-06-08T19:43:09.253Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgm4dgojzha3q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '3cc67793-4bc2-4403-b5d8-f4f85470e59e',
      status: 'queued',
      created: 2022-06-08T19:43:10.260Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgqzdqojwha2q',
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
      requestid: '8f5b6d8c-dcdb-4f0a-8439-36bc67da3320',
      status: 'queued',
      created: 2022-06-08T19:43:11.286Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgq3dembuha2a',
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
      requestid: '7ff50a5f-13c9-4832-821f-3445f20910c7',
      status: 'queued',
      created: 2022-06-08T19:43:12.196Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgq4tinzuhazq',
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
      requestid: 'fb304429-55e6-43b6-a00f-2600f9a43fe5',
      status: 'queued',
      created: 2022-06-08T19:43:13.237Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvguzdmnrshaza',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
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
  "content-length": "4839",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:43:14 GMT",
  "etag": "W/\"12e7-qfrtNwrjo7A781Z++U1TcAp29js\"",
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
      "requestid": "a517edec-18a2-49a3-9a43-0b62161e1fcc",
      "created": "2022-06-08T19:42:50.516Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsgyzcymjygiydemrsguza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "58d54560-3dff-497d-99ef-fdff25b44bf0",
      "created": "2022-06-08T19:42:54.731Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgy3cynrqg43dinbygaya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "02806959-dcdf-4918-9690-a0dfd3d09a2a",
      "created": "2022-06-08T19:42:56.967Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgy4synbxgqytamjqg42a",
        "origins": [],
        "meta": {},
        "name": "59b52ddf-85ff-428e-bcf1-6049145e2333"
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc",
      "created": "2022-06-08T19:43:02.175Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvga3tgobyhe3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "832e4ff0-8d4b-4e70-b872-818e2dec885b",
      "created": "2022-06-08T19:43:03.167Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgeztomzshe2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "27bd9e09-e1a0-4423-be16-7e5bdaf52d1a",
      "created": "2022-06-08T19:43:04.182Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvge4danrthezq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "9972c8b0-e2df-430a-bdff-7924bf1162e1",
      "created": "2022-06-08T19:43:05.180Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgiytqnrwheza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "e651903b-de7f-41fa-be24-a0e2e3961c5d",
      "created": "2022-06-08T19:43:06.197Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgi3tknjqheya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "8f2a0024-8020-4168-a991-4c4e3986bdc7",
      "created": "2022-06-08T19:43:07.186Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgmytinjwha4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "d80e1b24-c446-4773-8e59-513db361433d",
      "created": "2022-06-08T19:43:08.212Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgm2dsmbwha4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "724633f2-40d9-45c7-baf6-6868895a0305",
      "created": "2022-06-08T19:43:09.253Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgm4dgojzha3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "3cc67793-4bc2-4403-b5d8-f4f85470e59e",
      "created": "2022-06-08T19:43:10.260Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgqzdqojwha2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "8f5b6d8c-dcdb-4f0a-8439-36bc67da3320",
      "created": "2022-06-08T19:43:11.286Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgq3dembuha2a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "7ff50a5f-13c9-4832-821f-3445f20910c7",
      "created": "2022-06-08T19:43:12.196Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgq4tinzuhazq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "fb304429-55e6-43b6-a00f-2600f9a43fe5",
      "created": "2022-06-08T19:43:13.237Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvguzdmnrshaza",
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
## Pagination: Retrieve the next page of pins - 🟢 SUCCESS

### Expectations (3/3 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 The next page of pins doesn't contain any of previous pages pins (success)





### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-08T19%3A42%3A50.516Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-08T19%3A42%3A50.516Z
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:43:14 GMT",
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
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (32/34 successful)

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

  🟢 Count is greater than or equal to 15 (success)

  ❌ Count is greater than the number of pins returned (failure)

  ❌ Number of pins returned defaults to 10 (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 The next page of pins doesn't contain any of previous pages pins (success)





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
```json
{
  count: 3,
  results: [
    {
      requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
      created: '2022-06-08T19:42:50.516Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsgyzcymjygiydemrsguza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
      created: '2022-06-08T19:42:54.731Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsgy3cynrqg43dinbygaya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '02806959-dcdf-4918-9690-a0dfd3d09a2a',
      created: '2022-06-08T19:42:56.967Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: {
        cid: 'baeaaadjsgy4synbxgqytamjqg42a',
        origins: [],
        meta: {},
        name: '59b52ddf-85ff-428e-bcf1-6049145e2333'
      },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  count: 3,
  results: Set(3) {
    {
      requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
      status: 'queued',
      created: 2022-06-08T19:42:50.516Z,
      pin: {
        cid: 'baeaaadjsgyzcymjygiydemrsguza',
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
      requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
      status: 'queued',
      created: 2022-06-08T19:42:54.731Z,
      pin: {
        cid: 'baeaaadjsgy3cynrqg43dinbygaya',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '02806959-dcdf-4918-9690-a0dfd3d09a2a',
      status: 'queued',
      created: 2022-06-08T19:42:56.967Z,
      pin: {
        cid: 'baeaaadjsgy4synbxgqytamjqg42a',
        name: '59b52ddf-85ff-428e-bcf1-6049145e2333',
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
  "content-length": "1021",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:43:01 GMT",
  "etag": "W/\"3fd-Ydj9nFQHkBydL0LrzxuiRQL2H0c\"",
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
      "requestid": "a517edec-18a2-49a3-9a43-0b62161e1fcc",
      "created": "2022-06-08T19:42:50.516Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsgyzcymjygiydemrsguza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "58d54560-3dff-497d-99ef-fdff25b44bf0",
      "created": "2022-06-08T19:42:54.731Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgy3cynrqg43dinbygaya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "02806959-dcdf-4918-9690-a0dfd3d09a2a",
      "created": "2022-06-08T19:42:56.967Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgy4synbxgqytamjqg42a",
        "origins": [],
        "meta": {},
        "name": "59b52ddf-85ff-428e-bcf1-6049145e2333"
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    }
  ]
}
```
## Can delete pin with requestid 'a517edec-18a2-49a3-9a43-0b62161e1fcc' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/a517edec-18a2-49a3-9a43-0b62161e1fcc

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/a517edec-18a2-49a3-9a43-0b62161e1fcc
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:16 GMT",
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
## Can delete pin with requestid '58d54560-3dff-497d-99ef-fdff25b44bf0' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/58d54560-3dff-497d-99ef-fdff25b44bf0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/58d54560-3dff-497d-99ef-fdff25b44bf0
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:17 GMT",
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
## Can delete pin with requestid '02806959-dcdf-4918-9690-a0dfd3d09a2a' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/02806959-dcdf-4918-9690-a0dfd3d09a2a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/02806959-dcdf-4918-9690-a0dfd3d09a2a
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:18 GMT",
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
## Can delete pin with requestid '0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:19 GMT",
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
## Can delete pin with requestid '832e4ff0-8d4b-4e70-b872-818e2dec885b' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/832e4ff0-8d4b-4e70-b872-818e2dec885b

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/832e4ff0-8d4b-4e70-b872-818e2dec885b
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:20 GMT",
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
## Can delete pin with requestid '27bd9e09-e1a0-4423-be16-7e5bdaf52d1a' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/27bd9e09-e1a0-4423-be16-7e5bdaf52d1a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/27bd9e09-e1a0-4423-be16-7e5bdaf52d1a
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:21 GMT",
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
## Can delete pin with requestid '9972c8b0-e2df-430a-bdff-7924bf1162e1' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/9972c8b0-e2df-430a-bdff-7924bf1162e1

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/9972c8b0-e2df-430a-bdff-7924bf1162e1
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:22 GMT",
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
## Can delete pin with requestid 'e651903b-de7f-41fa-be24-a0e2e3961c5d' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/e651903b-de7f-41fa-be24-a0e2e3961c5d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/e651903b-de7f-41fa-be24-a0e2e3961c5d
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:23 GMT",
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
## Can delete pin with requestid '8f2a0024-8020-4168-a991-4c4e3986bdc7' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/8f2a0024-8020-4168-a991-4c4e3986bdc7

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/8f2a0024-8020-4168-a991-4c4e3986bdc7
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:24 GMT",
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
## Can delete pin with requestid 'd80e1b24-c446-4773-8e59-513db361433d' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/d80e1b24-c446-4773-8e59-513db361433d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/d80e1b24-c446-4773-8e59-513db361433d
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:25 GMT",
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
## Can delete pin with requestid '724633f2-40d9-45c7-baf6-6868895a0305' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/724633f2-40d9-45c7-baf6-6868895a0305

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/724633f2-40d9-45c7-baf6-6868895a0305
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:26 GMT",
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
## Can delete pin with requestid '3cc67793-4bc2-4403-b5d8-f4f85470e59e' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/3cc67793-4bc2-4403-b5d8-f4f85470e59e

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/3cc67793-4bc2-4403-b5d8-f4f85470e59e
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:27 GMT",
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
## Can delete pin with requestid '8f5b6d8c-dcdb-4f0a-8439-36bc67da3320' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/8f5b6d8c-dcdb-4f0a-8439-36bc67da3320

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/8f5b6d8c-dcdb-4f0a-8439-36bc67da3320
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:28 GMT",
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
## Can delete pin with requestid '7ff50a5f-13c9-4832-821f-3445f20910c7' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/7ff50a5f-13c9-4832-821f-3445f20910c7

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/7ff50a5f-13c9-4832-821f-3445f20910c7
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:29 GMT",
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
## Can delete pin with requestid 'fb304429-55e6-43b6-a00f-2600f9a43fe5' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/fb304429-55e6-43b6-a00f-2600f9a43fe5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/fb304429-55e6-43b6-a00f-2600f9a43fe5
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
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
  "date": "Wed, 08 Jun 2022 19:43:30 GMT",
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
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns a count of zero (success)





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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:43:31 GMT",
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
## Can delete all pins - ❌ FAILED

### Expectations (16/31 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Final pinsGet call returns a count of zero (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
```json
{
  count: 15,
  results: [
    {
      requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
      created: '2022-06-08T19:42:50.516Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsgyzcymjygiydemrsguza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
      created: '2022-06-08T19:42:54.731Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsgy3cynrqg43dinbygaya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '02806959-dcdf-4918-9690-a0dfd3d09a2a',
      created: '2022-06-08T19:42:56.967Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: {
        cid: 'baeaaadjsgy4synbxgqytamjqg42a',
        origins: [],
        meta: {},
        name: '59b52ddf-85ff-428e-bcf1-6049145e2333'
      },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc',
      created: '2022-06-08T19:43:02.175Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvga3tgobyhe3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '832e4ff0-8d4b-4e70-b872-818e2dec885b',
      created: '2022-06-08T19:43:03.167Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgeztomzshe2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '27bd9e09-e1a0-4423-be16-7e5bdaf52d1a',
      created: '2022-06-08T19:43:04.182Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvge4danrthezq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '9972c8b0-e2df-430a-bdff-7924bf1162e1',
      created: '2022-06-08T19:43:05.180Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgiytqnrwheza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'e651903b-de7f-41fa-be24-a0e2e3961c5d',
      created: '2022-06-08T19:43:06.197Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgi3tknjqheya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '8f2a0024-8020-4168-a991-4c4e3986bdc7',
      created: '2022-06-08T19:43:07.186Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgmytinjwha4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'd80e1b24-c446-4773-8e59-513db361433d',
      created: '2022-06-08T19:43:08.212Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgm2dsmbwha4a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '724633f2-40d9-45c7-baf6-6868895a0305',
      created: '2022-06-08T19:43:09.253Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgm4dgojzha3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '3cc67793-4bc2-4403-b5d8-f4f85470e59e',
      created: '2022-06-08T19:43:10.260Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgqzdqojwha2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '8f5b6d8c-dcdb-4f0a-8439-36bc67da3320',
      created: '2022-06-08T19:43:11.286Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgq3dembuha2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: '7ff50a5f-13c9-4832-821f-3445f20910c7',
      created: '2022-06-08T19:43:12.196Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvgq4tinzuhazq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'fb304429-55e6-43b6-a00f-2600f9a43fe5',
      created: '2022-06-08T19:43:13.237Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjsg4zsyojvguzdmnrshaza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  count: 15,
  results: Set(15) {
    {
      requestid: 'a517edec-18a2-49a3-9a43-0b62161e1fcc',
      status: 'queued',
      created: 2022-06-08T19:42:50.516Z,
      pin: {
        cid: 'baeaaadjsgyzcymjygiydemrsguza',
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
      requestid: '58d54560-3dff-497d-99ef-fdff25b44bf0',
      status: 'queued',
      created: 2022-06-08T19:42:54.731Z,
      pin: {
        cid: 'baeaaadjsgy3cynrqg43dinbygaya',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '02806959-dcdf-4918-9690-a0dfd3d09a2a',
      status: 'queued',
      created: 2022-06-08T19:42:56.967Z,
      pin: {
        cid: 'baeaaadjsgy4synbxgqytamjqg42a',
        name: '59b52ddf-85ff-428e-bcf1-6049145e2333',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc',
      status: 'queued',
      created: 2022-06-08T19:43:02.175Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvga3tgobyhe3q',
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
      requestid: '832e4ff0-8d4b-4e70-b872-818e2dec885b',
      status: 'queued',
      created: 2022-06-08T19:43:03.167Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgeztomzshe2q',
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
      requestid: '27bd9e09-e1a0-4423-be16-7e5bdaf52d1a',
      status: 'queued',
      created: 2022-06-08T19:43:04.182Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvge4danrthezq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '9972c8b0-e2df-430a-bdff-7924bf1162e1',
      status: 'queued',
      created: 2022-06-08T19:43:05.180Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgiytqnrwheza',
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
      requestid: 'e651903b-de7f-41fa-be24-a0e2e3961c5d',
      status: 'queued',
      created: 2022-06-08T19:43:06.197Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgi3tknjqheya',
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
      requestid: '8f2a0024-8020-4168-a991-4c4e3986bdc7',
      status: 'queued',
      created: 2022-06-08T19:43:07.186Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgmytinjwha4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: 'd80e1b24-c446-4773-8e59-513db361433d',
      status: 'queued',
      created: 2022-06-08T19:43:08.212Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgm2dsmbwha4a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '724633f2-40d9-45c7-baf6-6868895a0305',
      status: 'queued',
      created: 2022-06-08T19:43:09.253Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgm4dgojzha3q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'prechecking' }
    },
    {
      requestid: '3cc67793-4bc2-4403-b5d8-f4f85470e59e',
      status: 'queued',
      created: 2022-06-08T19:43:10.260Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgqzdqojwha2q',
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
      requestid: '8f5b6d8c-dcdb-4f0a-8439-36bc67da3320',
      status: 'queued',
      created: 2022-06-08T19:43:11.286Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgq3dembuha2a',
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
      requestid: '7ff50a5f-13c9-4832-821f-3445f20910c7',
      status: 'queued',
      created: 2022-06-08T19:43:12.196Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvgq4tinzuhazq',
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
      requestid: 'fb304429-55e6-43b6-a00f-2600f9a43fe5',
      status: 'queued',
      created: 2022-06-08T19:43:13.237Z,
      pin: {
        cid: 'baeaaadjsg4zsyojvguzdmnrshaza',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
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
  "content-length": "4839",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Jun 2022 19:43:15 GMT",
  "etag": "W/\"12e7-qfrtNwrjo7A781Z++U1TcAp29js\"",
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
      "requestid": "a517edec-18a2-49a3-9a43-0b62161e1fcc",
      "created": "2022-06-08T19:42:50.516Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsgyzcymjygiydemrsguza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "58d54560-3dff-497d-99ef-fdff25b44bf0",
      "created": "2022-06-08T19:42:54.731Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgy3cynrqg43dinbygaya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "02806959-dcdf-4918-9690-a0dfd3d09a2a",
      "created": "2022-06-08T19:42:56.967Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgy4synbxgqytamjqg42a",
        "origins": [],
        "meta": {},
        "name": "59b52ddf-85ff-428e-bcf1-6049145e2333"
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "0db30f7d-4f14-4454-ba9e-7dba2ae0f2fc",
      "created": "2022-06-08T19:43:02.175Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvga3tgobyhe3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "832e4ff0-8d4b-4e70-b872-818e2dec885b",
      "created": "2022-06-08T19:43:03.167Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgeztomzshe2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "27bd9e09-e1a0-4423-be16-7e5bdaf52d1a",
      "created": "2022-06-08T19:43:04.182Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvge4danrthezq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "9972c8b0-e2df-430a-bdff-7924bf1162e1",
      "created": "2022-06-08T19:43:05.180Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgiytqnrwheza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "e651903b-de7f-41fa-be24-a0e2e3961c5d",
      "created": "2022-06-08T19:43:06.197Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgi3tknjqheya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "8f2a0024-8020-4168-a991-4c4e3986bdc7",
      "created": "2022-06-08T19:43:07.186Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgmytinjwha4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "d80e1b24-c446-4773-8e59-513db361433d",
      "created": "2022-06-08T19:43:08.212Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgm2dsmbwha4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "724633f2-40d9-45c7-baf6-6868895a0305",
      "created": "2022-06-08T19:43:09.253Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgm4dgojzha3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "3cc67793-4bc2-4403-b5d8-f4f85470e59e",
      "created": "2022-06-08T19:43:10.260Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgqzdqojwha2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "8f5b6d8c-dcdb-4f0a-8439-36bc67da3320",
      "created": "2022-06-08T19:43:11.286Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgq3dembuha2a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "7ff50a5f-13c9-4832-821f-3445f20910c7",
      "created": "2022-06-08T19:43:12.196Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvgq4tinzuhazq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "fb304429-55e6-43b6-a00f-2600f9a43fe5",
      "created": "2022-06-08T19:43:13.237Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjsg4zsyojvguzdmnrshaza",
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
