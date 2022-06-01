
# https://api.pinata.cloud/psa compliance:

## Summary (4/9 successful)

  ✘ Request with no authentication token
  ✘ Request with invalid token
  ✓ Pins post of CID 'baeaaadjsgi3syobzhe2dqobwguya'
  ✘ Can create and then delete a new pin
  ✓ List pin objects (GET /pins) in all states
  ✓ Can create and replace a pin's CID
  ✓ Can create a pin with name='36004ed0-b88c-4813-9178-826c040c474e'
  ✘ Pagination: Get all pins, create new pins (optional), get first and second pages
  ✘ Can delete all pins

## Request with no authentication token - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response object matches api spec schema (success)
  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

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
  "date": "Wed, 01 Jun 2022 20:57:33 GMT",
  "etag": "W/\"75-8hWiVluTmqi8Bp2+E+MmsFL38tY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"error":{"reason":"KEYS_MUST_BE_STRINGS","details":"pinata_api_key and pinata_secret_api_key must both be strings"}}
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

#### Joi validation failures
No failures

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
  "date": "Wed, 01 Jun 2022 20:57:38 GMT",
  "etag": "W/\"52-hDmJB39hiWxMgXnl95p1Dk5Zk6Q\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"error":{"reason":"INVALID_CREDENTIALS","details":"Invalid/expired credentials"}}
```
## Pins post of CID 'baeaaadjsgi3syobzhe2dqobwguya' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response object matches api spec schema (success)
  ✓ Pinning status is either queued, pinning, or pinned (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjsgi3syobzhe2dqobwguya"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
  created: '2022-06-01T20:57:43.606Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjsgi3syobzhe2dqobwguya', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
  status: 'queued',
  created: 2022-06-01T20:57:43.606Z,
  pin: {
    cid: 'baeaaadjsgi3syobzhe2dqobwguya',
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
  "date": "Wed, 01 Jun 2022 20:57:43 GMT",
  "etag": "W/\"13e-myUBqeiu8f7iGq3WDf9hUvHhsGQ\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"03d6a531-6d07-4361-b60b-b9bc88ddff7a","created":"2022-06-01T20:57:43.606Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3syobzhe2dqobwguya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
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

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/5aebbe78-47cd-4dfb-b5fb-4c8a013f1ce6

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/5aebbe78-47cd-4dfb-b5fb-4c8a013f1ce6
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
  "date": "Wed, 01 Jun 2022 20:57:53 GMT",
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

#### Joi validation failures
No failures

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
{"cid":"baeaaadjsgmzsynbrgiztamjtgi4q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '5aebbe78-47cd-4dfb-b5fb-4c8a013f1ce6',
  created: '2022-06-01T20:57:48.323Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjsgmzsynbrgiztamjtgi4q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '5aebbe78-47cd-4dfb-b5fb-4c8a013f1ce6',
  status: 'queued',
  created: 2022-06-01T20:57:48.323Z,
  pin: {
    cid: 'baeaaadjsgmzsynbrgiztamjtgi4q',
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
  "date": "Wed, 01 Jun 2022 20:57:48 GMT",
  "etag": "W/\"13e-BDABYP4r6r9okCqVYmm1Yw9sH3c\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"5aebbe78-47cd-4dfb-b5fb-4c8a013f1ce6","created":"2022-06-01T20:57:48.323Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjsgmzsynbrgiztamjtgi4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## List pin objects (GET /pins) in all states - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response object matches api spec schema (success)
  ✓ Response is ok (success)
  ✓ Response code is 200 (success)




#### Joi validation failures
No failures

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
      requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
      created: '2022-06-01T20:57:43.606Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3syobzhe2dqobwguya', origins: [], meta: {} },
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
      requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
      status: 'failed',
      created: 2022-06-01T20:57:43.606Z,
      pin: {
        cid: 'baeaaadjsgi3syobzhe2dqobwguya',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
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
  "date": "Wed, 01 Jun 2022 20:57:53 GMT",
  "etag": "W/\"159-MrTrW9NrSRyHWriGKJvkzacCNJA\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":1,"results":[{"requestid":"03d6a531-6d07-4361-b60b-b9bc88ddff7a","created":"2022-06-01T20:57:43.606Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3syobzhe2dqobwguya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"}]}
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

#### Request - GET: https://api.pinata.cloud/psa/pins/b6c4e957-3872-4589-b7ed-bc09a6d7b3a5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/b6c4e957-3872-4589-b7ed-bc09a6d7b3a5
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
  "date": "Wed, 01 Jun 2022 20:58:08 GMT",
  "etag": "W/\"7b-03qFhbIaF85nNkdBlgUb6TE8+WU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"error":{"reason":"OBJECT_NOT_FOUND","details":"Your account does not currently have any record associated with this ID"}}
```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins/0e01ad9a-935b-4a92-8327-e8358bb236d9

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/0e01ad9a-935b-4a92-8327-e8358bb236d9
```
{
  requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
  created: '2022-06-01T20:58:03.755Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'invalid_object' },
  status: 'failed'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
  status: 'failed',
  created: 2022-06-01T20:58:03.755Z,
  pin: {
    cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  info: { pinata_pinjob_status: 'invalid_object' }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "320",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 20:58:13 GMT",
  "etag": "W/\"140-lzkds6kMITNZc+XGzB1L9hwObu8\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"0e01ad9a-935b-4a92-8327-e8358bb236d9","created":"2022-06-01T20:58:03.755Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgq4cymzvgi2dcnztgu4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"}
```
## Pin's with requestid 'b6c4e957-3872-4589-b7ed-bc09a6d7b3a5' can have cid 'baeaaadjsgqzsymjyg4ydsnrxga3q' replaced with 'baeaaadjsgq4cymzvgi2dcnztgu4q' - ✓ SUCCESS

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

#### Request - POST: https://api.pinata.cloud/psa/pins/b6c4e957-3872-4589-b7ed-bc09a6d7b3a5

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgq4cymzvgi2dcnztgu4q"}
```
#### Response data from https://api.pinata.cloud/psa/pins/b6c4e957-3872-4589-b7ed-bc09a6d7b3a5
```
{
  requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
  created: '2022-06-01T20:58:03.755Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
  status: 'queued',
  created: 2022-06-01T20:58:03.755Z,
  pin: {
    cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q',
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
  "date": "Wed, 01 Jun 2022 20:58:03 GMT",
  "etag": "W/\"13d-Zirc7IC0oFg3+HCPQcSra8j2VSo\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"0e01ad9a-935b-4a92-8327-e8358bb236d9","created":"2022-06-01T20:58:03.755Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgq4cymzvgi2dcnztgu4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (b6c4e957-3872-4589-b7ed-bc09a6d7b3a5) (success)
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
{"cid":"baeaaadjsgqzsymjyg4ydsnrxga3q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'b6c4e957-3872-4589-b7ed-bc09a6d7b3a5',
  created: '2022-06-01T20:57:58.576Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjsgqzsymjyg4ydsnrxga3q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'b6c4e957-3872-4589-b7ed-bc09a6d7b3a5',
  status: 'queued',
  created: 2022-06-01T20:57:58.576Z,
  pin: {
    cid: 'baeaaadjsgqzsymjyg4ydsnrxga3q',
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
  "date": "Wed, 01 Jun 2022 20:57:58 GMT",
  "etag": "W/\"13d-aywWQVV5viWKfJruhZN1EJA3U/s\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"b6c4e957-3872-4589-b7ed-bc09a6d7b3a5","created":"2022-06-01T20:57:58.576Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgqzsymjyg4ydsnrxga3q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can retrieve pin with name '36004ed0-b88c-4813-9178-826c040c474e' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=36004ed0-b88c-4813-9178-826c040c474e&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=36004ed0-b88c-4813-9178-826c040c474e&match=exact
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
  "date": "Wed, 01 Jun 2022 20:58:18 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":0,"results":[]}
```
## Can retrieve pin with name '36004ED0-B88C-4813-9178-826C040C474E' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=36004ED0-B88C-4813-9178-826C040C474E&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=36004ED0-B88C-4813-9178-826C040C474E&match=iexact
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
  "date": "Wed, 01 Jun 2022 20:58:23 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":0,"results":[]}
```
## Can retrieve pin with name 'b88c-4813-9178-826' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=b88c-4813-9178-826&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=b88c-4813-9178-826&match=partial
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
  "date": "Wed, 01 Jun 2022 20:58:28 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":0,"results":[]}
```
## Can retrieve pin with name 'B88C-4813-9178-826' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=B88C-4813-9178-826&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=B88C-4813-9178-826&match=ipartial
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
  "date": "Wed, 01 Jun 2022 20:58:33 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":0,"results":[]}
```
## Can create a pin with name='36004ed0-b88c-4813-9178-826c040c474e' - ✓ SUCCESS

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
{"cid":"baeaaadjsgyzsymrrgqydiobqge2a","name":"36004ed0-b88c-4813-9178-826c040c474e"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da',
  created: '2022-06-01T20:58:13.803Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: {
    cid: 'baeaaadjsgyzsymrrgqydiobqge2a',
    origins: [],
    meta: {},
    name: '36004ed0-b88c-4813-9178-826c040c474e'
  },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da',
  status: 'queued',
  created: 2022-06-01T20:58:13.803Z,
  pin: {
    cid: 'baeaaadjsgyzsymrrgqydiobqge2a',
    name: '36004ed0-b88c-4813-9178-826c040c474e',
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
  "content-length": "363",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 20:58:13 GMT",
  "etag": "W/\"16b-IlnVIrgTka8lUxXUl1FARkhpdNY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"2317eb4b-8ad9-4267-8a7a-63b6eb4da4da","created":"2022-06-01T20:58:13.803Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjsgyzsymrrgqydiobqge2a","origins":[],"meta":{},"name":"36004ed0-b88c-4813-9178-826c040c474e"},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrgi2tqmrxheza' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrgi2tqmrxheza"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '155a42be-c887-4b99-bbf2-0301ef2d6f0a',
  created: '2022-06-01T20:58:39.054Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjshazsyojrgi2tqmrxheza', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '155a42be-c887-4b99-bbf2-0301ef2d6f0a',
  status: 'queued',
  created: 2022-06-01T20:58:39.054Z,
  pin: {
    cid: 'baeaaadjshazsyojrgi2tqmrxheza',
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
  "date": "Wed, 01 Jun 2022 20:58:39 GMT",
  "etag": "W/\"13e-MSkI4wwVPmyxKJCdAtdfdwZGChw\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"155a42be-c887-4b99-bbf2-0301ef2d6f0a","created":"2022-06-01T20:58:39.054Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgi2tqmrxheza","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrgmzdinjqhezq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrgmzdinjqhezq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '161bad2e-372d-46d6-b59a-eb0f44cf5bbf',
  created: '2022-06-01T20:58:44.036Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjshazsyojrgmzdinjqhezq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '161bad2e-372d-46d6-b59a-eb0f44cf5bbf',
  status: 'queued',
  created: 2022-06-01T20:58:44.036Z,
  pin: {
    cid: 'baeaaadjshazsyojrgmzdinjqhezq',
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
  "date": "Wed, 01 Jun 2022 20:58:44 GMT",
  "etag": "W/\"13e-y1XZwh0S5FQgoZBdo883auwm6AY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"161bad2e-372d-46d6-b59a-eb0f44cf5bbf","created":"2022-06-01T20:58:44.036Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjshazsyojrgmzdinjqhezq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrgm3tqmrzhezq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrgm3tqmrzhezq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'fc447b14-07e8-410d-b85a-9ac9d49a6b2f',
  created: '2022-06-01T20:58:49.154Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjshazsyojrgm3tqmrzhezq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'fc447b14-07e8-410d-b85a-9ac9d49a6b2f',
  status: 'queued',
  created: 2022-06-01T20:58:49.154Z,
  pin: {
    cid: 'baeaaadjshazsyojrgm3tqmrzhezq',
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
  "date": "Wed, 01 Jun 2022 20:58:49 GMT",
  "etag": "W/\"13c-VZY2YfzrdNMXq0wCoU3UvhTrAs8\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"fc447b14-07e8-410d-b85a-9ac9d49a6b2f","created":"2022-06-01T20:58:49.154Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjshazsyojrgm3tqmrzhezq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrgqzdgmbshe2a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrgqzdgmbshe2a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90',
  created: '2022-06-01T20:58:54.080Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjshazsyojrgqzdgmbshe2a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90',
  status: 'queued',
  created: 2022-06-01T20:58:54.080Z,
  pin: {
    cid: 'baeaaadjshazsyojrgqzdgmbshe2a',
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
  "date": "Wed, 01 Jun 2022 20:58:54 GMT",
  "etag": "W/\"13c-KWiJun5uOL7k5AsuTEGqKI3KPqo\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90","created":"2022-06-01T20:58:54.080Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjshazsyojrgqzdgmbshe2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrgq4dqmrvhe2a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrgq4dqmrvhe2a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'dc7e03be-f712-4276-8cff-f0766ff058b6',
  created: '2022-06-01T20:58:59.059Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjshazsyojrgq4dqmrvhe2a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'dc7e03be-f712-4276-8cff-f0766ff058b6',
  status: 'queued',
  created: 2022-06-01T20:58:59.059Z,
  pin: {
    cid: 'baeaaadjshazsyojrgq4dqmrvhe2a',
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
  "date": "Wed, 01 Jun 2022 20:58:59 GMT",
  "etag": "W/\"13d-sVvtgOAIZODgNPPzLxgPHVyZAcw\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"dc7e03be-f712-4276-8cff-f0766ff058b6","created":"2022-06-01T20:58:59.059Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrgq4dqmrvhe2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrgyytcnrzhe2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrgyytcnrzhe2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '472b299b-657a-4c24-849d-47b549d9e456',
  created: '2022-06-01T20:59:04.046Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjshazsyojrgyytcnrzhe2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '472b299b-657a-4c24-849d-47b549d9e456',
  status: 'queued',
  created: 2022-06-01T20:59:04.046Z,
  pin: {
    cid: 'baeaaadjshazsyojrgyytcnrzhe2q',
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
  "date": "Wed, 01 Jun 2022 20:59:04 GMT",
  "etag": "W/\"13d-klUjo+eSq/OJY5++7S8rDQsQZYk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"472b299b-657a-4c24-849d-47b549d9e456","created":"2022-06-01T20:59:04.046Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjshazsyojrgyytcnrzhe2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrgy2tqmjrhe2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrgy2tqmjrhe2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '5d839212-6769-4ec9-a197-02af84879650',
  created: '2022-06-01T20:59:09.057Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjshazsyojrgy2tqmjrhe2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '5d839212-6769-4ec9-a197-02af84879650',
  status: 'queued',
  created: 2022-06-01T20:59:09.057Z,
  pin: {
    cid: 'baeaaadjshazsyojrgy2tqmjrhe2q',
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
  "date": "Wed, 01 Jun 2022 20:59:09 GMT",
  "etag": "W/\"13e-6hRJo/SXUqh+UEN+8145kpCuJyY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"5d839212-6769-4ec9-a197-02af84879650","created":"2022-06-01T20:59:09.057Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgy2tqmjrhe2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrgy4tqnjrhe3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrgy4tqnjrhe3a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '856eb0df-fc6c-4de7-bd50-7d8f3e75555f',
  created: '2022-06-01T20:59:14.070Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjshazsyojrgy4tqnjrhe3a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '856eb0df-fc6c-4de7-bd50-7d8f3e75555f',
  status: 'queued',
  created: 2022-06-01T20:59:14.070Z,
  pin: {
    cid: 'baeaaadjshazsyojrgy4tqnjrhe3a',
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
  "date": "Wed, 01 Jun 2022 20:59:14 GMT",
  "etag": "W/\"13e-cnaJiW1a/R33iHaVt07701U89GE\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"856eb0df-fc6c-4de7-bd50-7d8f3e75555f","created":"2022-06-01T20:59:14.070Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgy4tqnjrhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrg42tcmzyhe3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrg42tcmzyhe3a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '4204124c-446c-48d4-aad3-cf8cfdd5c8eb',
  created: '2022-06-01T20:59:19.182Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjshazsyojrg42tcmzyhe3a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '4204124c-446c-48d4-aad3-cf8cfdd5c8eb',
  status: 'queued',
  created: 2022-06-01T20:59:19.182Z,
  pin: {
    cid: 'baeaaadjshazsyojrg42tcmzyhe3a',
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
  "date": "Wed, 01 Jun 2022 20:59:19 GMT",
  "etag": "W/\"13e-W/rByz8FFquNSPs6lRf/Tfg+JxA\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"4204124c-446c-48d4-aad3-cf8cfdd5c8eb","created":"2022-06-01T20:59:19.182Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrg42tcmzyhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrg44dqobrhe3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrg44dqobrhe3a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d',
  created: '2022-06-01T20:59:24.089Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjshazsyojrg44dqobrhe3a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d',
  status: 'queued',
  created: 2022-06-01T20:59:24.089Z,
  pin: {
    cid: 'baeaaadjshazsyojrg44dqobrhe3a',
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
  "date": "Wed, 01 Jun 2022 20:59:24 GMT",
  "etag": "W/\"13d-hBnZEkVQa6D3jfckWhXdS/B7PXI\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d","created":"2022-06-01T20:59:24.089Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrg44dqobrhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrhazdkmjvhe3q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrhazdkmjvhe3q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'e868a11b-953a-4f26-9783-d4d2bd332ea5',
  created: '2022-06-01T20:59:29.091Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjshazsyojrhazdkmjvhe3q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'e868a11b-953a-4f26-9783-d4d2bd332ea5',
  status: 'queued',
  created: 2022-06-01T20:59:29.091Z,
  pin: {
    cid: 'baeaaadjshazsyojrhazdkmjvhe3q',
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
  "date": "Wed, 01 Jun 2022 20:59:29 GMT",
  "etag": "W/\"13d-hXx+CLYo+Kb1HG5W35bAYepBUE0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"e868a11b-953a-4f26-9783-d4d2bd332ea5","created":"2022-06-01T20:59:29.091Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjshazsyojrhazdkmjvhe3q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjshazsyojrha3dcnrvhe3q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

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
{"cid":"baeaaadjshazsyojrha3dcnrvhe3q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '0f068c92-4f6f-4722-ae67-92338921f060',
  created: '2022-06-01T20:59:34.867Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjshazsyojrha3dcnrvhe3q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '0f068c92-4f6f-4722-ae67-92338921f060',
  status: 'queued',
  created: 2022-06-01T20:59:34.867Z,
  pin: {
    cid: 'baeaaadjshazsyojrha3dcnrvhe3q',
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
  "date": "Wed, 01 Jun 2022 20:59:34 GMT",
  "etag": "W/\"13d-k7Gyi+SnHC9C2+u2cdmienQG+hs\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"0f068c92-4f6f-4722-ae67-92338921f060","created":"2022-06-01T20:59:34.867Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrha3dcnrvhe3q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Pagination: First page of pins - ✘ FAILED

### Expectations (3/5 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Count is greater than or equal to 15 (success)
  ✘ Count is greater than the number of pins returned (failure)
  ✘ Number of pins returned defaults to 10 (failure)




#### Joi validation failures
No failures

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
      requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
      created: '2022-06-01T20:57:43.606Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3syobzhe2dqobwguya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
      created: '2022-06-01T20:58:03.755Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da',
      created: '2022-06-01T20:58:13.803Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadjsgyzsymrrgqydiobqge2a',
        origins: [],
        meta: {},
        name: '36004ed0-b88c-4813-9178-826c040c474e'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '155a42be-c887-4b99-bbf2-0301ef2d6f0a',
      created: '2022-06-01T20:58:39.054Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjshazsyojrgi2tqmrxheza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '161bad2e-372d-46d6-b59a-eb0f44cf5bbf',
      created: '2022-06-01T20:58:44.036Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjshazsyojrgmzdinjqhezq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'fc447b14-07e8-410d-b85a-9ac9d49a6b2f',
      created: '2022-06-01T20:58:49.154Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjshazsyojrgm3tqmrzhezq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90',
      created: '2022-06-01T20:58:54.080Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjshazsyojrgqzdgmbshe2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'dc7e03be-f712-4276-8cff-f0766ff058b6',
      created: '2022-06-01T20:58:59.059Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjshazsyojrgq4dqmrvhe2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '472b299b-657a-4c24-849d-47b549d9e456',
      created: '2022-06-01T20:59:04.046Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjshazsyojrgyytcnrzhe2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '5d839212-6769-4ec9-a197-02af84879650',
      created: '2022-06-01T20:59:09.057Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjshazsyojrgy2tqmjrhe2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '856eb0df-fc6c-4de7-bd50-7d8f3e75555f',
      created: '2022-06-01T20:59:14.070Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjshazsyojrgy4tqnjrhe3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '4204124c-446c-48d4-aad3-cf8cfdd5c8eb',
      created: '2022-06-01T20:59:19.182Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjshazsyojrg42tcmzyhe3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d',
      created: '2022-06-01T20:59:24.089Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjshazsyojrg44dqobrhe3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'e868a11b-953a-4f26-9783-d4d2bd332ea5',
      created: '2022-06-01T20:59:29.091Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjshazsyojrhazdkmjvhe3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '0f068c92-4f6f-4722-ae67-92338921f060',
      created: '2022-06-01T20:59:34.867Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjshazsyojrha3dcnrvhe3q', origins: [], meta: {} },
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
      requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
      status: 'failed',
      created: 2022-06-01T20:57:43.606Z,
      pin: {
        cid: 'baeaaadjsgi3syobzhe2dqobwguya',
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
      requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
      status: 'failed',
      created: 2022-06-01T20:58:03.755Z,
      pin: {
        cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da',
      status: 'failed',
      created: 2022-06-01T20:58:13.803Z,
      pin: {
        cid: 'baeaaadjsgyzsymrrgqydiobqge2a',
        name: '36004ed0-b88c-4813-9178-826c040c474e',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '155a42be-c887-4b99-bbf2-0301ef2d6f0a',
      status: 'failed',
      created: 2022-06-01T20:58:39.054Z,
      pin: {
        cid: 'baeaaadjshazsyojrgi2tqmrxheza',
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
      requestid: '161bad2e-372d-46d6-b59a-eb0f44cf5bbf',
      status: 'failed',
      created: 2022-06-01T20:58:44.036Z,
      pin: {
        cid: 'baeaaadjshazsyojrgmzdinjqhezq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: 'fc447b14-07e8-410d-b85a-9ac9d49a6b2f',
      status: 'failed',
      created: 2022-06-01T20:58:49.154Z,
      pin: {
        cid: 'baeaaadjshazsyojrgm3tqmrzhezq',
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
      requestid: '4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90',
      status: 'failed',
      created: 2022-06-01T20:58:54.080Z,
      pin: {
        cid: 'baeaaadjshazsyojrgqzdgmbshe2a',
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
      requestid: 'dc7e03be-f712-4276-8cff-f0766ff058b6',
      status: 'failed',
      created: 2022-06-01T20:58:59.059Z,
      pin: {
        cid: 'baeaaadjshazsyojrgq4dqmrvhe2a',
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
      requestid: '472b299b-657a-4c24-849d-47b549d9e456',
      status: 'failed',
      created: 2022-06-01T20:59:04.046Z,
      pin: {
        cid: 'baeaaadjshazsyojrgyytcnrzhe2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '5d839212-6769-4ec9-a197-02af84879650',
      status: 'failed',
      created: 2022-06-01T20:59:09.057Z,
      pin: {
        cid: 'baeaaadjshazsyojrgy2tqmjrhe2q',
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
      requestid: '856eb0df-fc6c-4de7-bd50-7d8f3e75555f',
      status: 'failed',
      created: 2022-06-01T20:59:14.070Z,
      pin: {
        cid: 'baeaaadjshazsyojrgy4tqnjrhe3a',
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
      requestid: '4204124c-446c-48d4-aad3-cf8cfdd5c8eb',
      status: 'failed',
      created: 2022-06-01T20:59:19.182Z,
      pin: {
        cid: 'baeaaadjshazsyojrg42tcmzyhe3a',
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
      requestid: '389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d',
      status: 'failed',
      created: 2022-06-01T20:59:24.089Z,
      pin: {
        cid: 'baeaaadjshazsyojrg44dqobrhe3a',
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
      requestid: 'e868a11b-953a-4f26-9783-d4d2bd332ea5',
      status: 'failed',
      created: 2022-06-01T20:59:29.091Z,
      pin: {
        cid: 'baeaaadjshazsyojrhazdkmjvhe3q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '0f068c92-4f6f-4722-ae67-92338921f060',
      status: 'queued',
      created: 2022-06-01T20:59:34.867Z,
      pin: {
        cid: 'baeaaadjshazsyojrha3dcnrvhe3q',
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
  "content-length": "4886",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 20:59:39 GMT",
  "etag": "W/\"1316-Yjhrxfp/4TPKOz7zOmY7eRdZU2E\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":15,"results":[{"requestid":"03d6a531-6d07-4361-b60b-b9bc88ddff7a","created":"2022-06-01T20:57:43.606Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3syobzhe2dqobwguya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"0e01ad9a-935b-4a92-8327-e8358bb236d9","created":"2022-06-01T20:58:03.755Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgq4cymzvgi2dcnztgu4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"2317eb4b-8ad9-4267-8a7a-63b6eb4da4da","created":"2022-06-01T20:58:13.803Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjsgyzsymrrgqydiobqge2a","origins":[],"meta":{},"name":"36004ed0-b88c-4813-9178-826c040c474e"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"155a42be-c887-4b99-bbf2-0301ef2d6f0a","created":"2022-06-01T20:58:39.054Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgi2tqmrxheza","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"161bad2e-372d-46d6-b59a-eb0f44cf5bbf","created":"2022-06-01T20:58:44.036Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjshazsyojrgmzdinjqhezq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"fc447b14-07e8-410d-b85a-9ac9d49a6b2f","created":"2022-06-01T20:58:49.154Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjshazsyojrgm3tqmrzhezq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90","created":"2022-06-01T20:58:54.080Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjshazsyojrgqzdgmbshe2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"dc7e03be-f712-4276-8cff-f0766ff058b6","created":"2022-06-01T20:58:59.059Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrgq4dqmrvhe2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"472b299b-657a-4c24-849d-47b549d9e456","created":"2022-06-01T20:59:04.046Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjshazsyojrgyytcnrzhe2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"5d839212-6769-4ec9-a197-02af84879650","created":"2022-06-01T20:59:09.057Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgy2tqmjrhe2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"856eb0df-fc6c-4de7-bd50-7d8f3e75555f","created":"2022-06-01T20:59:14.070Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgy4tqnjrhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"4204124c-446c-48d4-aad3-cf8cfdd5c8eb","created":"2022-06-01T20:59:19.182Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrg42tcmzyhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d","created":"2022-06-01T20:59:24.089Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrg44dqobrhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"e868a11b-953a-4f26-9783-d4d2bd332ea5","created":"2022-06-01T20:59:29.091Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjshazsyojrhazdkmjvhe3q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"0f068c92-4f6f-4722-ae67-92338921f060","created":"2022-06-01T20:59:34.867Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrha3dcnrvhe3q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}]}
```
## Pagination: Retrieve the next page of pins - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ The next page of pins doesn't contain any of previous pages pins (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A57%3A43.606Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A57%3A43.606Z
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
  "date": "Wed, 01 Jun 2022 20:59:39 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":0,"results":[]}
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




#### Joi validation failures
No failures

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
      requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
      created: '2022-06-01T20:57:43.606Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3syobzhe2dqobwguya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
      created: '2022-06-01T20:58:03.755Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da',
      created: '2022-06-01T20:58:13.803Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadjsgyzsymrrgqydiobqge2a',
        origins: [],
        meta: {},
        name: '36004ed0-b88c-4813-9178-826c040c474e'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
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
      requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
      status: 'failed',
      created: 2022-06-01T20:57:43.606Z,
      pin: {
        cid: 'baeaaadjsgi3syobzhe2dqobwguya',
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
      requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
      status: 'failed',
      created: 2022-06-01T20:58:03.755Z,
      pin: {
        cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da',
      status: 'failed',
      created: 2022-06-01T20:58:13.803Z,
      pin: {
        cid: 'baeaaadjsgyzsymrrgqydiobqge2a',
        name: '36004ed0-b88c-4813-9178-826c040c474e',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
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
  "content-length": "1033",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 20:58:34 GMT",
  "etag": "W/\"409-wdLwrSbV/6zQHedBAG8n3wcRls4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":3,"results":[{"requestid":"03d6a531-6d07-4361-b60b-b9bc88ddff7a","created":"2022-06-01T20:57:43.606Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3syobzhe2dqobwguya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"0e01ad9a-935b-4a92-8327-e8358bb236d9","created":"2022-06-01T20:58:03.755Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgq4cymzvgi2dcnztgu4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"2317eb4b-8ad9-4267-8a7a-63b6eb4da4da","created":"2022-06-01T20:58:13.803Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjsgyzsymrrgqydiobqge2a","origins":[],"meta":{},"name":"36004ed0-b88c-4813-9178-826c040c474e"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"}]}
```
## Can delete pin with requestid '03d6a531-6d07-4361-b60b-b9bc88ddff7a' - ✘ FAILED

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

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/03d6a531-6d07-4361-b60b-b9bc88ddff7a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/03d6a531-6d07-4361-b60b-b9bc88ddff7a
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
  "date": "Wed, 01 Jun 2022 20:59:49 GMT",
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
## Can delete pin with requestid '0e01ad9a-935b-4a92-8327-e8358bb236d9' - ✘ FAILED

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

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/0e01ad9a-935b-4a92-8327-e8358bb236d9

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/0e01ad9a-935b-4a92-8327-e8358bb236d9
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
  "date": "Wed, 01 Jun 2022 20:59:54 GMT",
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
## Can delete pin with requestid '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/2317eb4b-8ad9-4267-8a7a-63b6eb4da4da

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/2317eb4b-8ad9-4267-8a7a-63b6eb4da4da
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
  "date": "Wed, 01 Jun 2022 20:59:59 GMT",
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
## Can delete pin with requestid '155a42be-c887-4b99-bbf2-0301ef2d6f0a' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/155a42be-c887-4b99-bbf2-0301ef2d6f0a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/155a42be-c887-4b99-bbf2-0301ef2d6f0a
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
  "date": "Wed, 01 Jun 2022 21:00:04 GMT",
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
## Can delete pin with requestid '161bad2e-372d-46d6-b59a-eb0f44cf5bbf' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/161bad2e-372d-46d6-b59a-eb0f44cf5bbf

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/161bad2e-372d-46d6-b59a-eb0f44cf5bbf
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
  "date": "Wed, 01 Jun 2022 21:00:09 GMT",
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
## Can delete pin with requestid 'fc447b14-07e8-410d-b85a-9ac9d49a6b2f' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/fc447b14-07e8-410d-b85a-9ac9d49a6b2f

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/fc447b14-07e8-410d-b85a-9ac9d49a6b2f
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
  "date": "Wed, 01 Jun 2022 21:00:14 GMT",
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
## Can delete pin with requestid '4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90
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
  "date": "Wed, 01 Jun 2022 21:00:19 GMT",
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
## Can delete pin with requestid 'dc7e03be-f712-4276-8cff-f0766ff058b6' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/dc7e03be-f712-4276-8cff-f0766ff058b6

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/dc7e03be-f712-4276-8cff-f0766ff058b6
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
  "date": "Wed, 01 Jun 2022 21:00:24 GMT",
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
## Can delete pin with requestid '472b299b-657a-4c24-849d-47b549d9e456' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/472b299b-657a-4c24-849d-47b549d9e456

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/472b299b-657a-4c24-849d-47b549d9e456
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
  "date": "Wed, 01 Jun 2022 21:00:29 GMT",
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
## Can delete pin with requestid '5d839212-6769-4ec9-a197-02af84879650' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/5d839212-6769-4ec9-a197-02af84879650

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/5d839212-6769-4ec9-a197-02af84879650
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
  "date": "Wed, 01 Jun 2022 21:00:34 GMT",
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
## Can delete pin with requestid '856eb0df-fc6c-4de7-bd50-7d8f3e75555f' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/856eb0df-fc6c-4de7-bd50-7d8f3e75555f

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/856eb0df-fc6c-4de7-bd50-7d8f3e75555f
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
  "date": "Wed, 01 Jun 2022 21:00:39 GMT",
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
## Can delete pin with requestid '4204124c-446c-48d4-aad3-cf8cfdd5c8eb' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/4204124c-446c-48d4-aad3-cf8cfdd5c8eb

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/4204124c-446c-48d4-aad3-cf8cfdd5c8eb
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
  "date": "Wed, 01 Jun 2022 21:00:44 GMT",
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
## Can delete pin with requestid '389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d
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
  "date": "Wed, 01 Jun 2022 21:00:49 GMT",
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
## Can delete pin with requestid 'e868a11b-953a-4f26-9783-d4d2bd332ea5' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/e868a11b-953a-4f26-9783-d4d2bd332ea5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/e868a11b-953a-4f26-9783-d4d2bd332ea5
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
  "date": "Wed, 01 Jun 2022 21:00:54 GMT",
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
## Can delete pin with requestid '0f068c92-4f6f-4722-ae67-92338921f060' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/0f068c92-4f6f-4722-ae67-92338921f060

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/0f068c92-4f6f-4722-ae67-92338921f060
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
  "date": "Wed, 01 Jun 2022 21:00:59 GMT",
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
## Call pinsGet after deletions - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Final pinsGet call returns a count of zero (success)




#### Joi validation failures
No failures

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
  "date": "Wed, 01 Jun 2022 21:01:04 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":0,"results":[]}
```
## Can delete all pins - ✘ FAILED

### Expectations (16/31 successful)

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
  ✓ Final pinsGet call returns a count of zero (success)


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
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
* SyntaxError - Unexpected token O in JSON at position 0
  * SyntaxError: Unexpected token O in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)

#### Joi validation failures
No failures

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
      requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
      created: '2022-06-01T20:57:43.606Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3syobzhe2dqobwguya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
      created: '2022-06-01T20:58:03.755Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da',
      created: '2022-06-01T20:58:13.803Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadjsgyzsymrrgqydiobqge2a',
        origins: [],
        meta: {},
        name: '36004ed0-b88c-4813-9178-826c040c474e'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '155a42be-c887-4b99-bbf2-0301ef2d6f0a',
      created: '2022-06-01T20:58:39.054Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjshazsyojrgi2tqmrxheza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '161bad2e-372d-46d6-b59a-eb0f44cf5bbf',
      created: '2022-06-01T20:58:44.036Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjshazsyojrgmzdinjqhezq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'fc447b14-07e8-410d-b85a-9ac9d49a6b2f',
      created: '2022-06-01T20:58:49.154Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjshazsyojrgm3tqmrzhezq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90',
      created: '2022-06-01T20:58:54.080Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjshazsyojrgqzdgmbshe2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'dc7e03be-f712-4276-8cff-f0766ff058b6',
      created: '2022-06-01T20:58:59.059Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjshazsyojrgq4dqmrvhe2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '472b299b-657a-4c24-849d-47b549d9e456',
      created: '2022-06-01T20:59:04.046Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjshazsyojrgyytcnrzhe2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '5d839212-6769-4ec9-a197-02af84879650',
      created: '2022-06-01T20:59:09.057Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjshazsyojrgy2tqmjrhe2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '856eb0df-fc6c-4de7-bd50-7d8f3e75555f',
      created: '2022-06-01T20:59:14.070Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjshazsyojrgy4tqnjrhe3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '4204124c-446c-48d4-aad3-cf8cfdd5c8eb',
      created: '2022-06-01T20:59:19.182Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjshazsyojrg42tcmzyhe3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d',
      created: '2022-06-01T20:59:24.089Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjshazsyojrg44dqobrhe3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'e868a11b-953a-4f26-9783-d4d2bd332ea5',
      created: '2022-06-01T20:59:29.091Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjshazsyojrhazdkmjvhe3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '0f068c92-4f6f-4722-ae67-92338921f060',
      created: '2022-06-01T20:59:34.867Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjshazsyojrha3dcnrvhe3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
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
      requestid: '03d6a531-6d07-4361-b60b-b9bc88ddff7a',
      status: 'failed',
      created: 2022-06-01T20:57:43.606Z,
      pin: {
        cid: 'baeaaadjsgi3syobzhe2dqobwguya',
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
      requestid: '0e01ad9a-935b-4a92-8327-e8358bb236d9',
      status: 'failed',
      created: 2022-06-01T20:58:03.755Z,
      pin: {
        cid: 'baeaaadjsgq4cymzvgi2dcnztgu4q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '2317eb4b-8ad9-4267-8a7a-63b6eb4da4da',
      status: 'failed',
      created: 2022-06-01T20:58:13.803Z,
      pin: {
        cid: 'baeaaadjsgyzsymrrgqydiobqge2a',
        name: '36004ed0-b88c-4813-9178-826c040c474e',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '155a42be-c887-4b99-bbf2-0301ef2d6f0a',
      status: 'failed',
      created: 2022-06-01T20:58:39.054Z,
      pin: {
        cid: 'baeaaadjshazsyojrgi2tqmrxheza',
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
      requestid: '161bad2e-372d-46d6-b59a-eb0f44cf5bbf',
      status: 'failed',
      created: 2022-06-01T20:58:44.036Z,
      pin: {
        cid: 'baeaaadjshazsyojrgmzdinjqhezq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: 'fc447b14-07e8-410d-b85a-9ac9d49a6b2f',
      status: 'failed',
      created: 2022-06-01T20:58:49.154Z,
      pin: {
        cid: 'baeaaadjshazsyojrgm3tqmrzhezq',
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
      requestid: '4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90',
      status: 'failed',
      created: 2022-06-01T20:58:54.080Z,
      pin: {
        cid: 'baeaaadjshazsyojrgqzdgmbshe2a',
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
      requestid: 'dc7e03be-f712-4276-8cff-f0766ff058b6',
      status: 'failed',
      created: 2022-06-01T20:58:59.059Z,
      pin: {
        cid: 'baeaaadjshazsyojrgq4dqmrvhe2a',
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
      requestid: '472b299b-657a-4c24-849d-47b549d9e456',
      status: 'failed',
      created: 2022-06-01T20:59:04.046Z,
      pin: {
        cid: 'baeaaadjshazsyojrgyytcnrzhe2q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '5d839212-6769-4ec9-a197-02af84879650',
      status: 'failed',
      created: 2022-06-01T20:59:09.057Z,
      pin: {
        cid: 'baeaaadjshazsyojrgy2tqmjrhe2q',
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
      requestid: '856eb0df-fc6c-4de7-bd50-7d8f3e75555f',
      status: 'failed',
      created: 2022-06-01T20:59:14.070Z,
      pin: {
        cid: 'baeaaadjshazsyojrgy4tqnjrhe3a',
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
      requestid: '4204124c-446c-48d4-aad3-cf8cfdd5c8eb',
      status: 'failed',
      created: 2022-06-01T20:59:19.182Z,
      pin: {
        cid: 'baeaaadjshazsyojrg42tcmzyhe3a',
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
      requestid: '389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d',
      status: 'failed',
      created: 2022-06-01T20:59:24.089Z,
      pin: {
        cid: 'baeaaadjshazsyojrg44dqobrhe3a',
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
      requestid: 'e868a11b-953a-4f26-9783-d4d2bd332ea5',
      status: 'failed',
      created: 2022-06-01T20:59:29.091Z,
      pin: {
        cid: 'baeaaadjshazsyojrhazdkmjvhe3q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '0f068c92-4f6f-4722-ae67-92338921f060',
      status: 'failed',
      created: 2022-06-01T20:59:34.867Z,
      pin: {
        cid: 'baeaaadjshazsyojrha3dcnrvhe3q',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
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
  "content-length": "4889",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 20:59:44 GMT",
  "etag": "W/\"1319-R1H326950KAt3fjDehGYUbYYzsE\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":15,"results":[{"requestid":"03d6a531-6d07-4361-b60b-b9bc88ddff7a","created":"2022-06-01T20:57:43.606Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3syobzhe2dqobwguya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"0e01ad9a-935b-4a92-8327-e8358bb236d9","created":"2022-06-01T20:58:03.755Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgq4cymzvgi2dcnztgu4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"2317eb4b-8ad9-4267-8a7a-63b6eb4da4da","created":"2022-06-01T20:58:13.803Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjsgyzsymrrgqydiobqge2a","origins":[],"meta":{},"name":"36004ed0-b88c-4813-9178-826c040c474e"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"155a42be-c887-4b99-bbf2-0301ef2d6f0a","created":"2022-06-01T20:58:39.054Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgi2tqmrxheza","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"161bad2e-372d-46d6-b59a-eb0f44cf5bbf","created":"2022-06-01T20:58:44.036Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjshazsyojrgmzdinjqhezq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"fc447b14-07e8-410d-b85a-9ac9d49a6b2f","created":"2022-06-01T20:58:49.154Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjshazsyojrgm3tqmrzhezq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"4cb89b4e-12d7-4005-ac25-4e3c1a8e0e90","created":"2022-06-01T20:58:54.080Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjshazsyojrgqzdgmbshe2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"dc7e03be-f712-4276-8cff-f0766ff058b6","created":"2022-06-01T20:58:59.059Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrgq4dqmrvhe2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"472b299b-657a-4c24-849d-47b549d9e456","created":"2022-06-01T20:59:04.046Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjshazsyojrgyytcnrzhe2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"5d839212-6769-4ec9-a197-02af84879650","created":"2022-06-01T20:59:09.057Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgy2tqmjrhe2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"856eb0df-fc6c-4de7-bd50-7d8f3e75555f","created":"2022-06-01T20:59:14.070Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrgy4tqnjrhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"4204124c-446c-48d4-aad3-cf8cfdd5c8eb","created":"2022-06-01T20:59:19.182Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjshazsyojrg42tcmzyhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"389f26e3-ac1d-4ed1-b78e-2aba1f1b9f8d","created":"2022-06-01T20:59:24.089Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrg44dqobrhe3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"e868a11b-953a-4f26-9783-d4d2bd332ea5","created":"2022-06-01T20:59:29.091Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjshazsyojrhazdkmjvhe3q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"0f068c92-4f6f-4722-ae67-92338921f060","created":"2022-06-01T20:59:34.867Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjshazsyojrha3dcnrvhe3q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"}]}
```
