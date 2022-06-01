
# https://api.pinata.cloud/psa compliance:

## Summary (4/9 successful)

  ✘ Request with no authentication token
  ✘ Request with invalid token
  ✓ Pins post of CID 'baeaaadjrg4ycymjygy3dgmzugm2a'
  ✘ Can create and then delete a new pin
  ✓ List pin objects (GET /pins) in all states
  ✓ Can create and replace a pin's CID
  ✓ Can create a pin with name='d4a88894-8903-40e0-8764-7fb24d1286df'
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
  "date": "Wed, 01 Jun 2022 21:11:20 GMT",
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
  "date": "Wed, 01 Jun 2022 21:11:25 GMT",
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
## Pins post of CID 'baeaaadjrg4ycymjygy3dgmzugm2a' - ✓ SUCCESS

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
{"cid":"baeaaadjrg4ycymjygy3dgmzugm2a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
  created: '2022-06-01T21:11:30.308Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjrg4ycymjygy3dgmzugm2a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
  status: 'queued',
  created: 2022-06-01T21:11:30.308Z,
  pin: {
    cid: 'baeaaadjrg4ycymjygy3dgmzugm2a',
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
  "date": "Wed, 01 Jun 2022 21:11:30 GMT",
  "etag": "W/\"13e-nXukSFrP6Ga/sldyAALfKiQqZ1c\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"cd96f768-0650-4981-bfe7-bcc1fbf7c96d","created":"2022-06-01T21:11:30.308Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjrg4ycymjygy3dgmzugm2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/cb670d6e-e924-445c-9f5e-e1f28398fcf1

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/cb670d6e-e924-445c-9f5e-e1f28398fcf1
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
  "date": "Wed, 01 Jun 2022 21:11:35 GMT",
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
{"cid":"baeaaadjrg42synjsgq3tkmbrge2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'cb670d6e-e924-445c-9f5e-e1f28398fcf1',
  created: '2022-06-01T21:11:35.300Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: { cid: 'baeaaadjrg42synjsgq3tkmbrge2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'cb670d6e-e924-445c-9f5e-e1f28398fcf1',
  status: 'queued',
  created: 2022-06-01T21:11:35.300Z,
  pin: {
    cid: 'baeaaadjrg42synjsgq3tkmbrge2q',
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
  "date": "Wed, 01 Jun 2022 21:11:35 GMT",
  "etag": "W/\"13e-wArtb32y6pO+5YLzmVBMbbGcW8E\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"cb670d6e-e924-445c-9f5e-e1f28398fcf1","created":"2022-06-01T21:11:35.300Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjrg42synjsgq3tkmbrge2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
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
  count: 3,
  results: [
    {
      requestid: '0e6b408f-bade-40b2-b274-d3afc16b0ec0',
      created: '2022-06-01T21:11:19.306Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaaczxgywdinbxgeytamrr', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
      created: '2022-06-01T21:11:30.308Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrg4ycymjygy3dgmzugm2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '38a690cb-8be6-4fb6-949f-f46862077ee9',
      created: '2022-06-01T21:11:39.705Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaaczzg4wdgnrqhe4tqmjq', origins: [], meta: {} },
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
      requestid: '0e6b408f-bade-40b2-b274-d3afc16b0ec0',
      status: 'failed',
      created: 2022-06-01T21:11:19.306Z,
      pin: {
        cid: 'baeaaaczxgywdinbxgeytamrr',
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
      requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
      status: 'failed',
      created: 2022-06-01T21:11:30.308Z,
      pin: {
        cid: 'baeaaadjrg4ycymjygy3dgmzugm2a',
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
      requestid: '38a690cb-8be6-4fb6-949f-f46862077ee9',
      status: 'failed',
      created: 2022-06-01T21:11:39.705Z,
      pin: {
        cid: 'baeaaaczzg4wdgnrqhe4tqmjq',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
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
  "content-length": "978",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 21:11:40 GMT",
  "etag": "W/\"3d2-ZObeSgO1hJm1ZlOqUlYQrjY8mh4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":3,"results":[{"requestid":"0e6b408f-bade-40b2-b274-d3afc16b0ec0","created":"2022-06-01T21:11:19.306Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaaczxgywdinbxgeytamrr","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"cd96f768-0650-4981-bfe7-bcc1fbf7c96d","created":"2022-06-01T21:11:30.308Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjrg4ycymjygy3dgmzugm2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"38a690cb-8be6-4fb6-949f-f46862077ee9","created":"2022-06-01T21:11:39.705Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaaczzg4wdgnrqhe4tqmjq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"}]}
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

#### Request - GET: https://api.pinata.cloud/psa/pins/e45a3ba7-dd66-442f-90d1-34d636fbd369

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/e45a3ba7-dd66-442f-90d1-34d636fbd369
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
  "date": "Wed, 01 Jun 2022 21:11:55 GMT",
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

#### Request - GET: https://api.pinata.cloud/psa/pins/99c576b6-48f6-4dd3-921f-b39002007cde

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/99c576b6-48f6-4dd3-921f-b39002007cde
```
{
  requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
  created: '2022-06-01T21:11:50.181Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrheycymzxg43donjugq4q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
  status: 'queued',
  created: 2022-06-01T21:11:50.181Z,
  pin: {
    cid: 'baeaaadjrheycymzxg43donjugq4q',
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
  "date": "Wed, 01 Jun 2022 21:12:00 GMT",
  "etag": "W/\"13d-buhPXeCbFULGZWN3dk3Q8SNwFk0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"99c576b6-48f6-4dd3-921f-b39002007cde","created":"2022-06-01T21:11:50.181Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrheycymzxg43donjugq4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Pin's with requestid 'e45a3ba7-dd66-442f-90d1-34d636fbd369' can have cid 'baeaaadjrha2symrxge3dgmrxhe2q' replaced with 'baeaaadjrheycymzxg43donjugq4q' - ✓ SUCCESS

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

#### Request - POST: https://api.pinata.cloud/psa/pins/e45a3ba7-dd66-442f-90d1-34d636fbd369

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrheycymzxg43donjugq4q"}
```
#### Response data from https://api.pinata.cloud/psa/pins/e45a3ba7-dd66-442f-90d1-34d636fbd369
```
{
  requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
  created: '2022-06-01T21:11:50.181Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrheycymzxg43donjugq4q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
  status: 'queued',
  created: 2022-06-01T21:11:50.181Z,
  pin: {
    cid: 'baeaaadjrheycymzxg43donjugq4q',
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
  "date": "Wed, 01 Jun 2022 21:11:50 GMT",
  "etag": "W/\"13d-buhPXeCbFULGZWN3dk3Q8SNwFk0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"99c576b6-48f6-4dd3-921f-b39002007cde","created":"2022-06-01T21:11:50.181Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrheycymzxg43donjugq4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (e45a3ba7-dd66-442f-90d1-34d636fbd369) (success)
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
{"cid":"baeaaadjrha2symrxge3dgmrxhe2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'e45a3ba7-dd66-442f-90d1-34d636fbd369',
  created: '2022-06-01T21:11:45.165Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadjrha2symrxge3dgmrxhe2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'e45a3ba7-dd66-442f-90d1-34d636fbd369',
  status: 'queued',
  created: 2022-06-01T21:11:45.165Z,
  pin: {
    cid: 'baeaaadjrha2symrxge3dgmrxhe2q',
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
  "date": "Wed, 01 Jun 2022 21:11:45 GMT",
  "etag": "W/\"13d-mKW6Sokvtqha95Lz1JWXvr/15KU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"e45a3ba7-dd66-442f-90d1-34d636fbd369","created":"2022-06-01T21:11:45.165Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrha2symrxge3dgmrxhe2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can retrieve pin with name 'd4a88894-8903-40e0-8764-7fb24d1286df' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=d4a88894-8903-40e0-8764-7fb24d1286df&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=d4a88894-8903-40e0-8764-7fb24d1286df&match=exact
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
  "date": "Wed, 01 Jun 2022 21:12:05 GMT",
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
## Can retrieve pin with name 'D4A88894-8903-40E0-8764-7FB24D1286DF' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=D4A88894-8903-40E0-8764-7FB24D1286DF&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=D4A88894-8903-40E0-8764-7FB24D1286DF&match=iexact
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
  "date": "Wed, 01 Jun 2022 21:12:10 GMT",
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
## Can retrieve pin with name '8903-40e0-8764-7fb' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=8903-40e0-8764-7fb&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=8903-40e0-8764-7fb&match=partial
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
  "date": "Wed, 01 Jun 2022 21:12:15 GMT",
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
## Can retrieve pin with name '8903-40E0-8764-7FB' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=8903-40E0-8764-7FB&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=8903-40E0-8764-7FB&match=ipartial
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
  "date": "Wed, 01 Jun 2022 21:12:20 GMT",
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
## Can create a pin with name='d4a88894-8903-40e0-8764-7fb24d1286df' - ✓ SUCCESS

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
{"cid":"baeaaadjsga2symrzha4tmnrsgi3a","name":"d4a88894-8903-40e0-8764-7fb24d1286df"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '55a1cb01-6c04-42bb-b1ea-1453483e5c10',
  created: '2022-06-01T21:12:00.489Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: {
    cid: 'baeaaadjsga2symrzha4tmnrsgi3a',
    origins: [],
    meta: {},
    name: 'd4a88894-8903-40e0-8764-7fb24d1286df'
  },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '55a1cb01-6c04-42bb-b1ea-1453483e5c10',
  status: 'queued',
  created: 2022-06-01T21:12:00.489Z,
  pin: {
    cid: 'baeaaadjsga2symrzha4tmnrsgi3a',
    name: 'd4a88894-8903-40e0-8764-7fb24d1286df',
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
  "date": "Wed, 01 Jun 2022 21:12:00 GMT",
  "etag": "W/\"16a-VYTb3u2beKMrgSuZ2tXEtmsoG0Y\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"55a1cb01-6c04-42bb-b1ea-1453483e5c10","created":"2022-06-01T21:12:00.489Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsga2symrzha4tmnrsgi3a","origins":[],"meta":{},"name":"d4a88894-8903-40e0-8764-7fb24d1286df"},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjsgi3cymzuhe2tsnryg43q' - ✓ SUCCESS

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
{"cid":"baeaaadjsgi3cymzuhe2tsnryg43q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '08e23d92-74c7-4096-b26d-6ca22f43109a',
  created: '2022-06-01T21:12:26.262Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsgi3cymzuhe2tsnryg43q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '08e23d92-74c7-4096-b26d-6ca22f43109a',
  status: 'queued',
  created: 2022-06-01T21:12:26.262Z,
  pin: {
    cid: 'baeaaadjsgi3cymzuhe2tsnryg43q',
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
  "date": "Wed, 01 Jun 2022 21:12:26 GMT",
  "etag": "W/\"13c-V58sXkaHTyCA9bQGU4JhI8DwRlI\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"08e23d92-74c7-4096-b26d-6ca22f43109a","created":"2022-06-01T21:12:26.262Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsgi3cymzuhe2tsnryg43q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjsgi3cymzvgazdimjqg4ya' - ✓ SUCCESS

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
{"cid":"baeaaadjsgi3cymzvgazdimjqg4ya"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '51aef8d8-4978-44a0-84f7-59f443ef3332',
  created: '2022-06-01T21:12:31.252Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadjsgi3cymzvgazdimjqg4ya', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '51aef8d8-4978-44a0-84f7-59f443ef3332',
  status: 'queued',
  created: 2022-06-01T21:12:31.252Z,
  pin: {
    cid: 'baeaaadjsgi3cymzvgazdimjqg4ya',
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
  "date": "Wed, 01 Jun 2022 21:12:31 GMT",
  "etag": "W/\"13d-NQlJkDSTi06fO22S6gEAqtbekWA\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"51aef8d8-4978-44a0-84f7-59f443ef3332","created":"2022-06-01T21:12:31.252Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgi3cymzvgazdimjqg4ya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjsgi3cymzvga3dsnzygy2q' - ✓ SUCCESS

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
{"cid":"baeaaadjsgi3cymzvga3dsnzygy2q"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '144e4da9-88ed-4e10-9dc6-4002833e87e8',
  created: '2022-06-01T21:12:36.252Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjsgi3cymzvga3dsnzygy2q', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '144e4da9-88ed-4e10-9dc6-4002833e87e8',
  status: 'queued',
  created: 2022-06-01T21:12:36.252Z,
  pin: {
    cid: 'baeaaadjsgi3cymzvga3dsnzygy2q',
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
  "date": "Wed, 01 Jun 2022 21:12:36 GMT",
  "etag": "W/\"13e-HOn30zKij9NbZuz7+2L7QujVIiQ\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"144e4da9-88ed-4e10-9dc6-4002833e87e8","created":"2022-06-01T21:12:36.252Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvga3dsnzygy2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjsgi3cymzvgeytcnbugyya' - ✓ SUCCESS

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
{"cid":"baeaaadjsgi3cymzvgeytcnbugyya"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785',
  created: '2022-06-01T21:12:41.230Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjsgi3cymzvgeytcnbugyya', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785',
  status: 'queued',
  created: 2022-06-01T21:12:41.230Z,
  pin: {
    cid: 'baeaaadjsgi3cymzvgeytcnbugyya',
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
  "date": "Wed, 01 Jun 2022 21:12:41 GMT",
  "etag": "W/\"13e-gkz88Fheb/hx4wtYXuiuzjlwFpg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785","created":"2022-06-01T21:12:41.230Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvgeytcnbugyya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjsgi3cymzvge3tgnjzgu2a' - ✓ SUCCESS

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
{"cid":"baeaaadjsgi3cymzvge3tgnjzgu2a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'ebc9c9a6-7c4b-4821-8ef2-71411e0edf46',
  created: '2022-06-01T21:12:46.269Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjsgi3cymzvge3tgnjzgu2a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'ebc9c9a6-7c4b-4821-8ef2-71411e0edf46',
  status: 'queued',
  created: 2022-06-01T21:12:46.269Z,
  pin: {
    cid: 'baeaaadjsgi3cymzvge3tgnjzgu2a',
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
  "date": "Wed, 01 Jun 2022 21:12:46 GMT",
  "etag": "W/\"13e-h0XZbJStAZW2R2GCJNdxXw5C2Jg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"ebc9c9a6-7c4b-4821-8ef2-71411e0edf46","created":"2022-06-01T21:12:46.269Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvge3tgnjzgu2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjsgi3cymzvgi4taobvgqyq' - ✓ SUCCESS

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
{"cid":"baeaaadjsgi3cymzvgi4taobvgqyq"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '6de9480d-935e-4187-96de-a60aa0366080',
  created: '2022-06-01T21:12:51.271Z',
  delegates: [
    '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
  ],
  pin: { cid: 'baeaaadjsgi3cymzvgi4taobvgqyq', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '6de9480d-935e-4187-96de-a60aa0366080',
  status: 'queued',
  created: 2022-06-01T21:12:51.271Z,
  pin: {
    cid: 'baeaaadjsgi3cymzvgi4taobvgqyq',
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
  "date": "Wed, 01 Jun 2022 21:12:51 GMT",
  "etag": "W/\"13e-+J+cl/XfsjNWURDsTC7W1W+GT0g\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"6de9480d-935e-4187-96de-a60aa0366080","created":"2022-06-01T21:12:51.271Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvgi4taobvgqyq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
```
## Can create new pin for testing pagination cid='baeaaadjsgi3cymzvgmztenrsgm3a' - ✓ SUCCESS

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
{"cid":"baeaaadjsgi3cymzvgmztenrsgm3a"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '1c043641-638f-4b99-a0fc-7c9f829e23f6',
  created: '2022-06-01T21:12:56.305Z',
  delegates: [
    '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
  ],
  pin: { cid: 'baeaaadjsgi3cymzvgmztenrsgm3a', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '1c043641-638f-4b99-a0fc-7c9f829e23f6',
  status: 'queued',
  created: 2022-06-01T21:12:56.305Z,
  pin: {
    cid: 'baeaaadjsgi3cymzvgmztenrsgm3a',
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
  "date": "Wed, 01 Jun 2022 21:12:56 GMT",
  "etag": "W/\"13c-OP+PQPZc7BL9Z2YdJeeW3GVcfWM\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"requestid":"1c043641-638f-4b99-a0fc-7c9f829e23f6","created":"2022-06-01T21:12:56.305Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsgi3cymzvgmztenrsgm3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}
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
  count: 22,
  results: [
    {
      requestid: '0e6b408f-bade-40b2-b274-d3afc16b0ec0',
      created: '2022-06-01T21:11:19.306Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaaczxgywdinbxgeytamrr', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
      created: '2022-06-01T21:11:30.308Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrg4ycymjygy3dgmzugm2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '38a690cb-8be6-4fb6-949f-f46862077ee9',
      created: '2022-06-01T21:11:39.705Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaaczzg4wdgnrqhe4tqmjq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'a9e877e4-c2de-4009-a15a-28de055831b4',
      created: '2022-06-01T21:11:50.011Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadjrgeysynbxgu3dsnjtgqzq',
        origins: [],
        meta: {},
        name: 'f50c3c12-b866-4a65-ba53-83b6a3f5ecf1'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
      created: '2022-06-01T21:11:50.181Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrheycymzxg43donjugq4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '55a1cb01-6c04-42bb-b1ea-1453483e5c10',
      created: '2022-06-01T21:12:00.489Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: {
        cid: 'baeaaadjsga2symrzha4tmnrsgi3a',
        origins: [],
        meta: {},
        name: 'd4a88894-8903-40e0-8764-7fb24d1286df'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '38dd9d83-e2b3-4e64-8e29-c8502bd6c934',
      created: '2022-06-01T21:12:15.332Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadbrgmzcyobwgmydqmbvha', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c6a18df9-cf05-4cfe-9939-6f1e1fd194a5',
      created: '2022-06-01T21:12:20.369Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbrgmzcyobxgi4tcnjvge', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'b39ac3fe-030e-4ff9-8a47-a177cdfb1894',
      created: '2022-06-01T21:12:25.364Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbrgmzcyobygaytmnrug4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '08e23d92-74c7-4096-b26d-6ca22f43109a',
      created: '2022-06-01T21:12:26.262Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsgi3cymzuhe2tsnryg43q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d',
      created: '2022-06-01T21:12:30.343Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbrgmzcyobygy2dkojugm', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '51aef8d8-4978-44a0-84f7-59f443ef3332',
      created: '2022-06-01T21:12:31.252Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvgazdimjqg4ya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '2d7c571f-5aa9-4adf-aa5d-b50d218810b1',
      created: '2022-06-01T21:12:35.357Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadbrgmzcyobzgqzdsnbtha', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '144e4da9-88ed-4e10-9dc6-4002833e87e8',
      created: '2022-06-01T21:12:36.252Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvga3dsnzygy2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6be2e0ae-5da6-4b33-ad54-2656d8482a3b',
      created: '2022-06-01T21:12:40.349Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbrgmzcyojqhaztaobshe', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785',
      created: '2022-06-01T21:12:41.230Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvgeytcnbugyya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '7ce29e4e-de14-4c34-bd31-0f03d2a65710',
      created: '2022-06-01T21:12:45.361Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadbrgmzcyojrgy2domrsgq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'ebc9c9a6-7c4b-4821-8ef2-71411e0edf46',
      created: '2022-06-01T21:12:46.269Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvge3tgnjzgu2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '1f96da38-b28a-43e2-a1ad-36744381ef71',
      created: '2022-06-01T21:12:50.563Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbrgmzcyojsgmzdgmjrhe', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6de9480d-935e-4187-96de-a60aa0366080',
      created: '2022-06-01T21:12:51.271Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvgi4taobvgqyq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '4743e7ab-ff0a-433e-9d50-9d85cd3204d1',
      created: '2022-06-01T21:12:55.382Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbrgmzcyojtga2dmojrgu', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '1c043641-638f-4b99-a0fc-7c9f829e23f6',
      created: '2022-06-01T21:12:56.305Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvgmztenrsgm3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 22,
  results: Set(22) {
    {
      requestid: '0e6b408f-bade-40b2-b274-d3afc16b0ec0',
      status: 'failed',
      created: 2022-06-01T21:11:19.306Z,
      pin: {
        cid: 'baeaaaczxgywdinbxgeytamrr',
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
      requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
      status: 'failed',
      created: 2022-06-01T21:11:30.308Z,
      pin: {
        cid: 'baeaaadjrg4ycymjygy3dgmzugm2a',
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
      requestid: '38a690cb-8be6-4fb6-949f-f46862077ee9',
      status: 'failed',
      created: 2022-06-01T21:11:39.705Z,
      pin: {
        cid: 'baeaaaczzg4wdgnrqhe4tqmjq',
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
      requestid: 'a9e877e4-c2de-4009-a15a-28de055831b4',
      status: 'failed',
      created: 2022-06-01T21:11:50.011Z,
      pin: {
        cid: 'baeaaadjrgeysynbxgu3dsnjtgqzq',
        name: 'f50c3c12-b866-4a65-ba53-83b6a3f5ecf1',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
      status: 'failed',
      created: 2022-06-01T21:11:50.181Z,
      pin: {
        cid: 'baeaaadjrheycymzxg43donjugq4q',
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
      requestid: '55a1cb01-6c04-42bb-b1ea-1453483e5c10',
      status: 'failed',
      created: 2022-06-01T21:12:00.489Z,
      pin: {
        cid: 'baeaaadjsga2symrzha4tmnrsgi3a',
        name: 'd4a88894-8903-40e0-8764-7fb24d1286df',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '38dd9d83-e2b3-4e64-8e29-c8502bd6c934',
      status: 'failed',
      created: 2022-06-01T21:12:15.332Z,
      pin: {
        cid: 'baeaaadbrgmzcyobwgmydqmbvha',
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
      requestid: 'c6a18df9-cf05-4cfe-9939-6f1e1fd194a5',
      status: 'failed',
      created: 2022-06-01T21:12:20.369Z,
      pin: {
        cid: 'baeaaadbrgmzcyobxgi4tcnjvge',
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
      requestid: 'b39ac3fe-030e-4ff9-8a47-a177cdfb1894',
      status: 'failed',
      created: 2022-06-01T21:12:25.364Z,
      pin: {
        cid: 'baeaaadbrgmzcyobygaytmnrug4',
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
      requestid: '08e23d92-74c7-4096-b26d-6ca22f43109a',
      status: 'failed',
      created: 2022-06-01T21:12:26.262Z,
      pin: {
        cid: 'baeaaadjsgi3cymzuhe2tsnryg43q',
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
      requestid: 'c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d',
      status: 'failed',
      created: 2022-06-01T21:12:30.343Z,
      pin: {
        cid: 'baeaaadbrgmzcyobygy2dkojugm',
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
      requestid: '51aef8d8-4978-44a0-84f7-59f443ef3332',
      status: 'failed',
      created: 2022-06-01T21:12:31.252Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvgazdimjqg4ya',
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
      requestid: '2d7c571f-5aa9-4adf-aa5d-b50d218810b1',
      status: 'failed',
      created: 2022-06-01T21:12:35.357Z,
      pin: {
        cid: 'baeaaadbrgmzcyobzgqzdsnbtha',
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
      requestid: '144e4da9-88ed-4e10-9dc6-4002833e87e8',
      status: 'failed',
      created: 2022-06-01T21:12:36.252Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvga3dsnzygy2q',
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
      requestid: '6be2e0ae-5da6-4b33-ad54-2656d8482a3b',
      status: 'failed',
      created: 2022-06-01T21:12:40.349Z,
      pin: {
        cid: 'baeaaadbrgmzcyojqhaztaobshe',
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
      requestid: 'e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785',
      status: 'failed',
      created: 2022-06-01T21:12:41.230Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvgeytcnbugyya',
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
      requestid: '7ce29e4e-de14-4c34-bd31-0f03d2a65710',
      status: 'failed',
      created: 2022-06-01T21:12:45.361Z,
      pin: {
        cid: 'baeaaadbrgmzcyojrgy2domrsgq',
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
      requestid: 'ebc9c9a6-7c4b-4821-8ef2-71411e0edf46',
      status: 'failed',
      created: 2022-06-01T21:12:46.269Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvge3tgnjzgu2a',
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
      requestid: '1f96da38-b28a-43e2-a1ad-36744381ef71',
      status: 'failed',
      created: 2022-06-01T21:12:50.563Z,
      pin: {
        cid: 'baeaaadbrgmzcyojsgmzdgmjrhe',
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
      requestid: '6de9480d-935e-4187-96de-a60aa0366080',
      status: 'failed',
      created: 2022-06-01T21:12:51.271Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvgi4taobvgqyq',
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
      requestid: '4743e7ab-ff0a-433e-9d50-9d85cd3204d1',
      status: 'failed',
      created: 2022-06-01T21:12:55.382Z,
      pin: {
        cid: 'baeaaadbrgmzcyojtga2dmojrgu',
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
      requestid: '1c043641-638f-4b99-a0fc-7c9f829e23f6',
      status: 'failed',
      created: 2022-06-01T21:12:56.305Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvgmztenrsgm3a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
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
  "content-length": "7154",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 21:13:01 GMT",
  "etag": "W/\"1bf2-xCOqQ6Y5d5U4uuHflJCq6bFkSA4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":22,"results":[{"requestid":"0e6b408f-bade-40b2-b274-d3afc16b0ec0","created":"2022-06-01T21:11:19.306Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaaczxgywdinbxgeytamrr","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"cd96f768-0650-4981-bfe7-bcc1fbf7c96d","created":"2022-06-01T21:11:30.308Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjrg4ycymjygy3dgmzugm2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"38a690cb-8be6-4fb6-949f-f46862077ee9","created":"2022-06-01T21:11:39.705Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaaczzg4wdgnrqhe4tqmjq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"a9e877e4-c2de-4009-a15a-28de055831b4","created":"2022-06-01T21:11:50.011Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrgeysynbxgu3dsnjtgqzq","origins":[],"meta":{},"name":"f50c3c12-b866-4a65-ba53-83b6a3f5ecf1"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"99c576b6-48f6-4dd3-921f-b39002007cde","created":"2022-06-01T21:11:50.181Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrheycymzxg43donjugq4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"55a1cb01-6c04-42bb-b1ea-1453483e5c10","created":"2022-06-01T21:12:00.489Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsga2symrzha4tmnrsgi3a","origins":[],"meta":{},"name":"d4a88894-8903-40e0-8764-7fb24d1286df"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"38dd9d83-e2b3-4e64-8e29-c8502bd6c934","created":"2022-06-01T21:12:15.332Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadbrgmzcyobwgmydqmbvha","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"c6a18df9-cf05-4cfe-9939-6f1e1fd194a5","created":"2022-06-01T21:12:20.369Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadbrgmzcyobxgi4tcnjvge","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"b39ac3fe-030e-4ff9-8a47-a177cdfb1894","created":"2022-06-01T21:12:25.364Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadbrgmzcyobygaytmnrug4","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"08e23d92-74c7-4096-b26d-6ca22f43109a","created":"2022-06-01T21:12:26.262Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsgi3cymzuhe2tsnryg43q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d","created":"2022-06-01T21:12:30.343Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadbrgmzcyobygy2dkojugm","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"51aef8d8-4978-44a0-84f7-59f443ef3332","created":"2022-06-01T21:12:31.252Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgi3cymzvgazdimjqg4ya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"2d7c571f-5aa9-4adf-aa5d-b50d218810b1","created":"2022-06-01T21:12:35.357Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadbrgmzcyobzgqzdsnbtha","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"144e4da9-88ed-4e10-9dc6-4002833e87e8","created":"2022-06-01T21:12:36.252Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvga3dsnzygy2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"6be2e0ae-5da6-4b33-ad54-2656d8482a3b","created":"2022-06-01T21:12:40.349Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadbrgmzcyojqhaztaobshe","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785","created":"2022-06-01T21:12:41.230Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvgeytcnbugyya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"7ce29e4e-de14-4c34-bd31-0f03d2a65710","created":"2022-06-01T21:12:45.361Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadbrgmzcyojrgy2domrsgq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"ebc9c9a6-7c4b-4821-8ef2-71411e0edf46","created":"2022-06-01T21:12:46.269Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvge3tgnjzgu2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"1f96da38-b28a-43e2-a1ad-36744381ef71","created":"2022-06-01T21:12:50.563Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadbrgmzcyojsgmzdgmjrhe","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"6de9480d-935e-4187-96de-a60aa0366080","created":"2022-06-01T21:12:51.271Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvgi4taobvgqyq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"4743e7ab-ff0a-433e-9d50-9d85cd3204d1","created":"2022-06-01T21:12:55.382Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadbrgmzcyojtga2dmojrgu","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"1c043641-638f-4b99-a0fc-7c9f829e23f6","created":"2022-06-01T21:12:56.305Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsgi3cymzvgmztenrsgm3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"}]}
```
## Pagination: Retrieve the next page of pins - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ The next page of pins doesn't contain any of previous pages pins (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A11%3A19.306Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A11%3A19.306Z
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
  "date": "Wed, 01 Jun 2022 21:13:01 GMT",
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

### Expectations (22/24 successful)

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
  count: 8,
  results: [
    {
      requestid: '0e6b408f-bade-40b2-b274-d3afc16b0ec0',
      created: '2022-06-01T21:11:19.306Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaaczxgywdinbxgeytamrr', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
      created: '2022-06-01T21:11:30.308Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrg4ycymjygy3dgmzugm2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '38a690cb-8be6-4fb6-949f-f46862077ee9',
      created: '2022-06-01T21:11:39.705Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaaczzg4wdgnrqhe4tqmjq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'a9e877e4-c2de-4009-a15a-28de055831b4',
      created: '2022-06-01T21:11:50.011Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadjrgeysynbxgu3dsnjtgqzq',
        origins: [],
        meta: {},
        name: 'f50c3c12-b866-4a65-ba53-83b6a3f5ecf1'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
      created: '2022-06-01T21:11:50.181Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrheycymzxg43donjugq4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '55a1cb01-6c04-42bb-b1ea-1453483e5c10',
      created: '2022-06-01T21:12:00.489Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: {
        cid: 'baeaaadjsga2symrzha4tmnrsgi3a',
        origins: [],
        meta: {},
        name: 'd4a88894-8903-40e0-8764-7fb24d1286df'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '38dd9d83-e2b3-4e64-8e29-c8502bd6c934',
      created: '2022-06-01T21:12:15.332Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadbrgmzcyobwgmydqmbvha', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    },
    {
      requestid: 'c6a18df9-cf05-4cfe-9939-6f1e1fd194a5',
      created: '2022-06-01T21:12:20.369Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbrgmzcyobxgi4tcnjvge', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'prechecking' },
      status: 'queued'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 8,
  results: Set(8) {
    {
      requestid: '0e6b408f-bade-40b2-b274-d3afc16b0ec0',
      status: 'failed',
      created: 2022-06-01T21:11:19.306Z,
      pin: {
        cid: 'baeaaaczxgywdinbxgeytamrr',
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
      requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
      status: 'failed',
      created: 2022-06-01T21:11:30.308Z,
      pin: {
        cid: 'baeaaadjrg4ycymjygy3dgmzugm2a',
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
      requestid: '38a690cb-8be6-4fb6-949f-f46862077ee9',
      status: 'failed',
      created: 2022-06-01T21:11:39.705Z,
      pin: {
        cid: 'baeaaaczzg4wdgnrqhe4tqmjq',
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
      requestid: 'a9e877e4-c2de-4009-a15a-28de055831b4',
      status: 'failed',
      created: 2022-06-01T21:11:50.011Z,
      pin: {
        cid: 'baeaaadjrgeysynbxgu3dsnjtgqzq',
        name: 'f50c3c12-b866-4a65-ba53-83b6a3f5ecf1',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
      status: 'failed',
      created: 2022-06-01T21:11:50.181Z,
      pin: {
        cid: 'baeaaadjrheycymzxg43donjugq4q',
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
      requestid: '55a1cb01-6c04-42bb-b1ea-1453483e5c10',
      status: 'failed',
      created: 2022-06-01T21:12:00.489Z,
      pin: {
        cid: 'baeaaadjsga2symrzha4tmnrsgi3a',
        name: 'd4a88894-8903-40e0-8764-7fb24d1286df',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '38dd9d83-e2b3-4e64-8e29-c8502bd6c934',
      status: 'queued',
      created: 2022-06-01T21:12:15.332Z,
      pin: {
        cid: 'baeaaadbrgmzcyobwgmydqmbvha',
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
      requestid: 'c6a18df9-cf05-4cfe-9939-6f1e1fd194a5',
      status: 'queued',
      created: 2022-06-01T21:12:20.369Z,
      pin: {
        cid: 'baeaaadbrgmzcyobxgi4tcnjvge',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
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
  "content-length": "2665",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 21:12:21 GMT",
  "etag": "W/\"a69-8d4vOtswCBgSJwf6MCcaJDSJ+qM\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":8,"results":[{"requestid":"0e6b408f-bade-40b2-b274-d3afc16b0ec0","created":"2022-06-01T21:11:19.306Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaaczxgywdinbxgeytamrr","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"cd96f768-0650-4981-bfe7-bcc1fbf7c96d","created":"2022-06-01T21:11:30.308Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjrg4ycymjygy3dgmzugm2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"38a690cb-8be6-4fb6-949f-f46862077ee9","created":"2022-06-01T21:11:39.705Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaaczzg4wdgnrqhe4tqmjq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"a9e877e4-c2de-4009-a15a-28de055831b4","created":"2022-06-01T21:11:50.011Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrgeysynbxgu3dsnjtgqzq","origins":[],"meta":{},"name":"f50c3c12-b866-4a65-ba53-83b6a3f5ecf1"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"99c576b6-48f6-4dd3-921f-b39002007cde","created":"2022-06-01T21:11:50.181Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrheycymzxg43donjugq4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"55a1cb01-6c04-42bb-b1ea-1453483e5c10","created":"2022-06-01T21:12:00.489Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsga2symrzha4tmnrsgi3a","origins":[],"meta":{},"name":"d4a88894-8903-40e0-8764-7fb24d1286df"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"38dd9d83-e2b3-4e64-8e29-c8502bd6c934","created":"2022-06-01T21:12:15.332Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadbrgmzcyobwgmydqmbvha","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"},{"requestid":"c6a18df9-cf05-4cfe-9939-6f1e1fd194a5","created":"2022-06-01T21:12:20.369Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadbrgmzcyobxgi4tcnjvge","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"prechecking"},"status":"queued"}]}
```
## Can delete pin with requestid '0e6b408f-bade-40b2-b274-d3afc16b0ec0' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/0e6b408f-bade-40b2-b274-d3afc16b0ec0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/0e6b408f-bade-40b2-b274-d3afc16b0ec0
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
  "date": "Wed, 01 Jun 2022 21:13:11 GMT",
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
## Can delete pin with requestid 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/cd96f768-0650-4981-bfe7-bcc1fbf7c96d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/cd96f768-0650-4981-bfe7-bcc1fbf7c96d
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
  "date": "Wed, 01 Jun 2022 21:13:16 GMT",
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
## Can delete pin with requestid '38a690cb-8be6-4fb6-949f-f46862077ee9' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/38a690cb-8be6-4fb6-949f-f46862077ee9

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/38a690cb-8be6-4fb6-949f-f46862077ee9
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
  "date": "Wed, 01 Jun 2022 21:13:21 GMT",
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
## Can delete pin with requestid 'a9e877e4-c2de-4009-a15a-28de055831b4' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/a9e877e4-c2de-4009-a15a-28de055831b4

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/a9e877e4-c2de-4009-a15a-28de055831b4
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
  "date": "Wed, 01 Jun 2022 21:13:26 GMT",
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
## Can delete pin with requestid '99c576b6-48f6-4dd3-921f-b39002007cde' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/99c576b6-48f6-4dd3-921f-b39002007cde

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/99c576b6-48f6-4dd3-921f-b39002007cde
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
  "date": "Wed, 01 Jun 2022 21:13:31 GMT",
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
## Can delete pin with requestid '55a1cb01-6c04-42bb-b1ea-1453483e5c10' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/55a1cb01-6c04-42bb-b1ea-1453483e5c10

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/55a1cb01-6c04-42bb-b1ea-1453483e5c10
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
  "date": "Wed, 01 Jun 2022 21:13:36 GMT",
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
## Can delete pin with requestid '38dd9d83-e2b3-4e64-8e29-c8502bd6c934' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/38dd9d83-e2b3-4e64-8e29-c8502bd6c934

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/38dd9d83-e2b3-4e64-8e29-c8502bd6c934
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
  "date": "Wed, 01 Jun 2022 21:13:41 GMT",
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
## Can delete pin with requestid 'c6a18df9-cf05-4cfe-9939-6f1e1fd194a5' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/c6a18df9-cf05-4cfe-9939-6f1e1fd194a5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/c6a18df9-cf05-4cfe-9939-6f1e1fd194a5
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
  "date": "Wed, 01 Jun 2022 21:13:46 GMT",
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
## Can delete pin with requestid 'b39ac3fe-030e-4ff9-8a47-a177cdfb1894' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/b39ac3fe-030e-4ff9-8a47-a177cdfb1894

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/b39ac3fe-030e-4ff9-8a47-a177cdfb1894
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
  "date": "Wed, 01 Jun 2022 21:13:51 GMT",
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
## Can delete pin with requestid '08e23d92-74c7-4096-b26d-6ca22f43109a' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/08e23d92-74c7-4096-b26d-6ca22f43109a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/08e23d92-74c7-4096-b26d-6ca22f43109a
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
  "date": "Wed, 01 Jun 2022 21:13:56 GMT",
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
## Can delete pin with requestid 'c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d
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
  "date": "Wed, 01 Jun 2022 21:14:01 GMT",
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
## Can delete pin with requestid '51aef8d8-4978-44a0-84f7-59f443ef3332' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/51aef8d8-4978-44a0-84f7-59f443ef3332

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/51aef8d8-4978-44a0-84f7-59f443ef3332
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
  "date": "Wed, 01 Jun 2022 21:14:06 GMT",
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
## Can delete pin with requestid '2d7c571f-5aa9-4adf-aa5d-b50d218810b1' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/2d7c571f-5aa9-4adf-aa5d-b50d218810b1

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/2d7c571f-5aa9-4adf-aa5d-b50d218810b1
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
  "date": "Wed, 01 Jun 2022 21:14:12 GMT",
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
## Can delete pin with requestid '144e4da9-88ed-4e10-9dc6-4002833e87e8' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/144e4da9-88ed-4e10-9dc6-4002833e87e8

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/144e4da9-88ed-4e10-9dc6-4002833e87e8
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
  "date": "Wed, 01 Jun 2022 21:14:16 GMT",
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
## Can delete pin with requestid '6be2e0ae-5da6-4b33-ad54-2656d8482a3b' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/6be2e0ae-5da6-4b33-ad54-2656d8482a3b

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/6be2e0ae-5da6-4b33-ad54-2656d8482a3b
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
  "date": "Wed, 01 Jun 2022 21:14:21 GMT",
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
## Can delete pin with requestid 'e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785
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
  "date": "Wed, 01 Jun 2022 21:14:26 GMT",
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
## Can delete pin with requestid '7ce29e4e-de14-4c34-bd31-0f03d2a65710' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/7ce29e4e-de14-4c34-bd31-0f03d2a65710

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/7ce29e4e-de14-4c34-bd31-0f03d2a65710
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
  "date": "Wed, 01 Jun 2022 21:14:31 GMT",
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
## Can delete pin with requestid 'ebc9c9a6-7c4b-4821-8ef2-71411e0edf46' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/ebc9c9a6-7c4b-4821-8ef2-71411e0edf46

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/ebc9c9a6-7c4b-4821-8ef2-71411e0edf46
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
  "date": "Wed, 01 Jun 2022 21:14:36 GMT",
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
## Can delete pin with requestid '1f96da38-b28a-43e2-a1ad-36744381ef71' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/1f96da38-b28a-43e2-a1ad-36744381ef71

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/1f96da38-b28a-43e2-a1ad-36744381ef71
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
  "date": "Wed, 01 Jun 2022 21:14:41 GMT",
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
## Can delete pin with requestid '6de9480d-935e-4187-96de-a60aa0366080' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/6de9480d-935e-4187-96de-a60aa0366080

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/6de9480d-935e-4187-96de-a60aa0366080
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
  "date": "Wed, 01 Jun 2022 21:14:46 GMT",
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
## Can delete pin with requestid '4743e7ab-ff0a-433e-9d50-9d85cd3204d1' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/4743e7ab-ff0a-433e-9d50-9d85cd3204d1

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/4743e7ab-ff0a-433e-9d50-9d85cd3204d1
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
  "date": "Wed, 01 Jun 2022 21:14:51 GMT",
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
## Can delete pin with requestid '1c043641-638f-4b99-a0fc-7c9f829e23f6' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/1c043641-638f-4b99-a0fc-7c9f829e23f6

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/1c043641-638f-4b99-a0fc-7c9f829e23f6
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
  "date": "Wed, 01 Jun 2022 21:14:56 GMT",
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
  "date": "Wed, 01 Jun 2022 21:15:01 GMT",
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

### Expectations (23/45 successful)

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
  count: 22,
  results: [
    {
      requestid: '0e6b408f-bade-40b2-b274-d3afc16b0ec0',
      created: '2022-06-01T21:11:19.306Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaaczxgywdinbxgeytamrr', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
      created: '2022-06-01T21:11:30.308Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadjrg4ycymjygy3dgmzugm2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '38a690cb-8be6-4fb6-949f-f46862077ee9',
      created: '2022-06-01T21:11:39.705Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaaczzg4wdgnrqhe4tqmjq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'a9e877e4-c2de-4009-a15a-28de055831b4',
      created: '2022-06-01T21:11:50.011Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadjrgeysynbxgu3dsnjtgqzq',
        origins: [],
        meta: {},
        name: 'f50c3c12-b866-4a65-ba53-83b6a3f5ecf1'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
      created: '2022-06-01T21:11:50.181Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrheycymzxg43donjugq4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '55a1cb01-6c04-42bb-b1ea-1453483e5c10',
      created: '2022-06-01T21:12:00.489Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: {
        cid: 'baeaaadjsga2symrzha4tmnrsgi3a',
        origins: [],
        meta: {},
        name: 'd4a88894-8903-40e0-8764-7fb24d1286df'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '38dd9d83-e2b3-4e64-8e29-c8502bd6c934',
      created: '2022-06-01T21:12:15.332Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadbrgmzcyobwgmydqmbvha', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c6a18df9-cf05-4cfe-9939-6f1e1fd194a5',
      created: '2022-06-01T21:12:20.369Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbrgmzcyobxgi4tcnjvge', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'b39ac3fe-030e-4ff9-8a47-a177cdfb1894',
      created: '2022-06-01T21:12:25.364Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbrgmzcyobygaytmnrug4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '08e23d92-74c7-4096-b26d-6ca22f43109a',
      created: '2022-06-01T21:12:26.262Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsgi3cymzuhe2tsnryg43q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d',
      created: '2022-06-01T21:12:30.343Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbrgmzcyobygy2dkojugm', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '51aef8d8-4978-44a0-84f7-59f443ef3332',
      created: '2022-06-01T21:12:31.252Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvgazdimjqg4ya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '2d7c571f-5aa9-4adf-aa5d-b50d218810b1',
      created: '2022-06-01T21:12:35.357Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadbrgmzcyobzgqzdsnbtha', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '144e4da9-88ed-4e10-9dc6-4002833e87e8',
      created: '2022-06-01T21:12:36.252Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvga3dsnzygy2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6be2e0ae-5da6-4b33-ad54-2656d8482a3b',
      created: '2022-06-01T21:12:40.349Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbrgmzcyojqhaztaobshe', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785',
      created: '2022-06-01T21:12:41.230Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvgeytcnbugyya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '7ce29e4e-de14-4c34-bd31-0f03d2a65710',
      created: '2022-06-01T21:12:45.361Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadbrgmzcyojrgy2domrsgq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'ebc9c9a6-7c4b-4821-8ef2-71411e0edf46',
      created: '2022-06-01T21:12:46.269Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvge3tgnjzgu2a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '1f96da38-b28a-43e2-a1ad-36744381ef71',
      created: '2022-06-01T21:12:50.563Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbrgmzcyojsgmzdgmjrhe', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6de9480d-935e-4187-96de-a60aa0366080',
      created: '2022-06-01T21:12:51.271Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvgi4taobvgqyq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '4743e7ab-ff0a-433e-9d50-9d85cd3204d1',
      created: '2022-06-01T21:12:55.382Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbrgmzcyojtga2dmojrgu', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '1c043641-638f-4b99-a0fc-7c9f829e23f6',
      created: '2022-06-01T21:12:56.305Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjsgi3cymzvgmztenrsgm3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 22,
  results: Set(22) {
    {
      requestid: '0e6b408f-bade-40b2-b274-d3afc16b0ec0',
      status: 'failed',
      created: 2022-06-01T21:11:19.306Z,
      pin: {
        cid: 'baeaaaczxgywdinbxgeytamrr',
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
      requestid: 'cd96f768-0650-4981-bfe7-bcc1fbf7c96d',
      status: 'failed',
      created: 2022-06-01T21:11:30.308Z,
      pin: {
        cid: 'baeaaadjrg4ycymjygy3dgmzugm2a',
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
      requestid: '38a690cb-8be6-4fb6-949f-f46862077ee9',
      status: 'failed',
      created: 2022-06-01T21:11:39.705Z,
      pin: {
        cid: 'baeaaaczzg4wdgnrqhe4tqmjq',
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
      requestid: 'a9e877e4-c2de-4009-a15a-28de055831b4',
      status: 'failed',
      created: 2022-06-01T21:11:50.011Z,
      pin: {
        cid: 'baeaaadjrgeysynbxgu3dsnjtgqzq',
        name: 'f50c3c12-b866-4a65-ba53-83b6a3f5ecf1',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '99c576b6-48f6-4dd3-921f-b39002007cde',
      status: 'failed',
      created: 2022-06-01T21:11:50.181Z,
      pin: {
        cid: 'baeaaadjrheycymzxg43donjugq4q',
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
      requestid: '55a1cb01-6c04-42bb-b1ea-1453483e5c10',
      status: 'failed',
      created: 2022-06-01T21:12:00.489Z,
      pin: {
        cid: 'baeaaadjsga2symrzha4tmnrsgi3a',
        name: 'd4a88894-8903-40e0-8764-7fb24d1286df',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '38dd9d83-e2b3-4e64-8e29-c8502bd6c934',
      status: 'failed',
      created: 2022-06-01T21:12:15.332Z,
      pin: {
        cid: 'baeaaadbrgmzcyobwgmydqmbvha',
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
      requestid: 'c6a18df9-cf05-4cfe-9939-6f1e1fd194a5',
      status: 'failed',
      created: 2022-06-01T21:12:20.369Z,
      pin: {
        cid: 'baeaaadbrgmzcyobxgi4tcnjvge',
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
      requestid: 'b39ac3fe-030e-4ff9-8a47-a177cdfb1894',
      status: 'failed',
      created: 2022-06-01T21:12:25.364Z,
      pin: {
        cid: 'baeaaadbrgmzcyobygaytmnrug4',
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
      requestid: '08e23d92-74c7-4096-b26d-6ca22f43109a',
      status: 'failed',
      created: 2022-06-01T21:12:26.262Z,
      pin: {
        cid: 'baeaaadjsgi3cymzuhe2tsnryg43q',
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
      requestid: 'c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d',
      status: 'failed',
      created: 2022-06-01T21:12:30.343Z,
      pin: {
        cid: 'baeaaadbrgmzcyobygy2dkojugm',
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
      requestid: '51aef8d8-4978-44a0-84f7-59f443ef3332',
      status: 'failed',
      created: 2022-06-01T21:12:31.252Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvgazdimjqg4ya',
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
      requestid: '2d7c571f-5aa9-4adf-aa5d-b50d218810b1',
      status: 'failed',
      created: 2022-06-01T21:12:35.357Z,
      pin: {
        cid: 'baeaaadbrgmzcyobzgqzdsnbtha',
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
      requestid: '144e4da9-88ed-4e10-9dc6-4002833e87e8',
      status: 'failed',
      created: 2022-06-01T21:12:36.252Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvga3dsnzygy2q',
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
      requestid: '6be2e0ae-5da6-4b33-ad54-2656d8482a3b',
      status: 'failed',
      created: 2022-06-01T21:12:40.349Z,
      pin: {
        cid: 'baeaaadbrgmzcyojqhaztaobshe',
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
      requestid: 'e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785',
      status: 'failed',
      created: 2022-06-01T21:12:41.230Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvgeytcnbugyya',
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
      requestid: '7ce29e4e-de14-4c34-bd31-0f03d2a65710',
      status: 'failed',
      created: 2022-06-01T21:12:45.361Z,
      pin: {
        cid: 'baeaaadbrgmzcyojrgy2domrsgq',
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
      requestid: 'ebc9c9a6-7c4b-4821-8ef2-71411e0edf46',
      status: 'failed',
      created: 2022-06-01T21:12:46.269Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvge3tgnjzgu2a',
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
      requestid: '1f96da38-b28a-43e2-a1ad-36744381ef71',
      status: 'failed',
      created: 2022-06-01T21:12:50.563Z,
      pin: {
        cid: 'baeaaadbrgmzcyojsgmzdgmjrhe',
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
      requestid: '6de9480d-935e-4187-96de-a60aa0366080',
      status: 'failed',
      created: 2022-06-01T21:12:51.271Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvgi4taobvgqyq',
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
      requestid: '4743e7ab-ff0a-433e-9d50-9d85cd3204d1',
      status: 'failed',
      created: 2022-06-01T21:12:55.382Z,
      pin: {
        cid: 'baeaaadbrgmzcyojtga2dmojrgu',
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
      requestid: '1c043641-638f-4b99-a0fc-7c9f829e23f6',
      status: 'failed',
      created: 2022-06-01T21:12:56.305Z,
      pin: {
        cid: 'baeaaadjsgi3cymzvgmztenrsgm3a',
        name: undefined,
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
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
  "content-length": "7154",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 01 Jun 2022 21:13:06 GMT",
  "etag": "W/\"1bf2-xCOqQ6Y5d5U4uuHflJCq6bFkSA4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{"count":22,"results":[{"requestid":"0e6b408f-bade-40b2-b274-d3afc16b0ec0","created":"2022-06-01T21:11:19.306Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaaczxgywdinbxgeytamrr","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"cd96f768-0650-4981-bfe7-bcc1fbf7c96d","created":"2022-06-01T21:11:30.308Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadjrg4ycymjygy3dgmzugm2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"38a690cb-8be6-4fb6-949f-f46862077ee9","created":"2022-06-01T21:11:39.705Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaaczzg4wdgnrqhe4tqmjq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"a9e877e4-c2de-4009-a15a-28de055831b4","created":"2022-06-01T21:11:50.011Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrgeysynbxgu3dsnjtgqzq","origins":[],"meta":{},"name":"f50c3c12-b866-4a65-ba53-83b6a3f5ecf1"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"99c576b6-48f6-4dd3-921f-b39002007cde","created":"2022-06-01T21:11:50.181Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadjrheycymzxg43donjugq4q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"55a1cb01-6c04-42bb-b1ea-1453483e5c10","created":"2022-06-01T21:12:00.489Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsga2symrzha4tmnrsgi3a","origins":[],"meta":{},"name":"d4a88894-8903-40e0-8764-7fb24d1286df"},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"38dd9d83-e2b3-4e64-8e29-c8502bd6c934","created":"2022-06-01T21:12:15.332Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadbrgmzcyobwgmydqmbvha","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"c6a18df9-cf05-4cfe-9939-6f1e1fd194a5","created":"2022-06-01T21:12:20.369Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadbrgmzcyobxgi4tcnjvge","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"b39ac3fe-030e-4ff9-8a47-a177cdfb1894","created":"2022-06-01T21:12:25.364Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadbrgmzcyobygaytmnrug4","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"08e23d92-74c7-4096-b26d-6ca22f43109a","created":"2022-06-01T21:12:26.262Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsgi3cymzuhe2tsnryg43q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"c9fcdbbc-2b32-4aa5-97e0-8276ba7b9e5d","created":"2022-06-01T21:12:30.343Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadbrgmzcyobygy2dkojugm","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"51aef8d8-4978-44a0-84f7-59f443ef3332","created":"2022-06-01T21:12:31.252Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadjsgi3cymzvgazdimjqg4ya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"2d7c571f-5aa9-4adf-aa5d-b50d218810b1","created":"2022-06-01T21:12:35.357Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadbrgmzcyobzgqzdsnbtha","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"144e4da9-88ed-4e10-9dc6-4002833e87e8","created":"2022-06-01T21:12:36.252Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvga3dsnzygy2q","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"6be2e0ae-5da6-4b33-ad54-2656d8482a3b","created":"2022-06-01T21:12:40.349Z","delegates":["/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"],"pin":{"cid":"baeaaadbrgmzcyojqhaztaobshe","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"e351ce49-c9c2-4c4f-9bf3-f12e9f4e2785","created":"2022-06-01T21:12:41.230Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvgeytcnbugyya","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"7ce29e4e-de14-4c34-bd31-0f03d2a65710","created":"2022-06-01T21:12:45.361Z","delegates":["/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"],"pin":{"cid":"baeaaadbrgmzcyojrgy2domrsgq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"ebc9c9a6-7c4b-4821-8ef2-71411e0edf46","created":"2022-06-01T21:12:46.269Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvge3tgnjzgu2a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"1f96da38-b28a-43e2-a1ad-36744381ef71","created":"2022-06-01T21:12:50.563Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadbrgmzcyojsgmzdgmjrhe","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"6de9480d-935e-4187-96de-a60aa0366080","created":"2022-06-01T21:12:51.271Z","delegates":["/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"],"pin":{"cid":"baeaaadjsgi3cymzvgi4taobvgqyq","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"4743e7ab-ff0a-433e-9d50-9d85cd3204d1","created":"2022-06-01T21:12:55.382Z","delegates":["/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"],"pin":{"cid":"baeaaadbrgmzcyojtga2dmojrgu","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"},{"requestid":"1c043641-638f-4b99-a0fc-7c9f829e23f6","created":"2022-06-01T21:12:56.305Z","delegates":["/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"],"pin":{"cid":"baeaaadjsgi3cymzvgmztenrsgm3a","origins":[],"meta":{}},"info":{"pinata_pinjob_status":"invalid_object"},"status":"failed"}]}
```
