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
  "date": "Tue, 07 Jun 2022 00:29:14 GMT",
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
  "date": "Tue, 07 Jun 2022 00:29:19 GMT",
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
## Pins post of CID 'baeaaadbwgqwdsmbrhe3doobygu' - ✓ SUCCESS

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
{"cid":"baeaaadbwgqwdsmbrhe3doobygu"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
  created: '2022-06-07T00:29:24.588Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaadbwgqwdsmbrhe3doobygu', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
  status: 'queued',
  created: 2022-06-07T00:29:24.588Z,
  pin: {
    cid: 'baeaaadbwgqwdsmbrhe3doobygu',
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
  "content-length": "315",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:29:24 GMT",
  "etag": "W/\"13b-jIOwVd6BFd7/wUtXE56x1vWsb2s\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "64d9b5dc-2bdc-42dc-a00e-01b8de4d1643",
  "created": "2022-06-07T00:29:24.588Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadbwgqwdsmbrhe3doobygu",
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

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.pinata.cloud/psa/pins/fba7dc8b-d5e7-4aae-837b-338ec9b8bdfd

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/fba7dc8b-d5e7-4aae-837b-338ec9b8bdfd
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
  "date": "Tue, 07 Jun 2022 00:29:34 GMT",
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
{"cid":"baeaaaczxgawdonrygeydqnrw"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'fba7dc8b-d5e7-4aae-837b-338ec9b8bdfd',
  created: '2022-06-07T00:29:29.590Z',
  delegates: [
    '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
  ],
  pin: { cid: 'baeaaaczxgawdonrygeydqnrw', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'fba7dc8b-d5e7-4aae-837b-338ec9b8bdfd',
  status: 'queued',
  created: 2022-06-07T00:29:29.590Z,
  pin: {
    cid: 'baeaaaczxgawdonrygeydqnrw',
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
  "content-length": "313",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:29:29 GMT",
  "etag": "W/\"139-2PKVyqaEixKPQRhyIhNsp9bWgQg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "fba7dc8b-d5e7-4aae-837b-338ec9b8bdfd",
  "created": "2022-06-07T00:29:29.590Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaaczxgawdonrygeydqnrw",
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
  count: 10,
  results: [
    {
      requestid: 'f8a53232-8f22-4c71-9d24-1f7dead29a21',
      created: '2022-06-06T16:18:32.922Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: {
        cid: 'baeaaadjshazcynjxheydonrtg4ya',
        origins: [],
        meta: {},
        name: '7303e2cd-4f7d-4f1e-933d-7f97391058b4'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '691804b1-c8b8-411e-b04c-011e24ebc682',
      created: '2022-06-06T16:18:58.292Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrsgu2tembsgezq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c2dcb6cb-5b86-4b3a-8936-85d6871ccccf',
      created: '2022-06-06T16:19:08.266Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrsg44dcnzvgaya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6ff24fbb-61fc-4f02-84c7-b75fd220f217',
      created: '2022-06-06T16:19:13.260Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrsha2dkmjyguza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e',
      created: '2022-06-06T16:19:23.273Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrshe4tmmzqg42q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'fca2d731-62bf-40bc-9237-93f9deada697',
      created: '2022-06-07T00:28:36.709Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadbvhawdeobrha4tgmjvg4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60',
      created: '2022-06-07T00:28:56.862Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbxhawdmnjvgmzdcnrqg4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df',
      created: '2022-06-07T00:29:06.979Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadbzgmwdiojuhaztsmbvgi',
        origins: [],
        meta: {},
        name: 'c2a69836-e062-4a9a-b964-8274a6f52199'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
      created: '2022-06-07T00:29:24.588Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbwgqwdsmbrhe3doobygu', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'a4a9009b-02d4-49e7-825f-f49d8c633b88',
      created: '2022-06-07T00:29:32.086Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgiztknbqgi3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
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
      requestid: 'f8a53232-8f22-4c71-9d24-1f7dead29a21',
      status: 'failed',
      created: 2022-06-06T16:18:32.922Z,
      pin: {
        cid: 'baeaaadjshazcynjxheydonrtg4ya',
        name: '7303e2cd-4f7d-4f1e-933d-7f97391058b4',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '691804b1-c8b8-411e-b04c-011e24ebc682',
      status: 'failed',
      created: 2022-06-06T16:18:58.292Z,
      pin: {
        cid: 'baeaaadjtgazsymrsgu2tembsgezq',
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
      requestid: 'c2dcb6cb-5b86-4b3a-8936-85d6871ccccf',
      status: 'failed',
      created: 2022-06-06T16:19:08.266Z,
      pin: {
        cid: 'baeaaadjtgazsymrsg44dcnzvgaya',
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
      requestid: '6ff24fbb-61fc-4f02-84c7-b75fd220f217',
      status: 'failed',
      created: 2022-06-06T16:19:13.260Z,
      pin: {
        cid: 'baeaaadjtgazsymrsha2dkmjyguza',
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
      requestid: 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e',
      status: 'failed',
      created: 2022-06-06T16:19:23.273Z,
      pin: {
        cid: 'baeaaadjtgazsymrshe4tmmzqg42q',
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
      requestid: 'fca2d731-62bf-40bc-9237-93f9deada697',
      status: 'failed',
      created: 2022-06-07T00:28:36.709Z,
      pin: {
        cid: 'baeaaadbvhawdeobrha4tgmjvg4',
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
      requestid: 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60',
      status: 'failed',
      created: 2022-06-07T00:28:56.862Z,
      pin: {
        cid: 'baeaaadbxhawdmnjvgmzdcnrqg4',
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
      requestid: '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df',
      status: 'failed',
      created: 2022-06-07T00:29:06.979Z,
      pin: {
        cid: 'baeaaadbzgmwdiojuhaztsmbvgi',
        name: 'c2a69836-e062-4a9a-b964-8274a6f52199',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
      status: 'failed',
      created: 2022-06-07T00:29:24.588Z,
      pin: {
        cid: 'baeaaadbwgqwdsmbrhe3doobygu',
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
      requestid: 'a4a9009b-02d4-49e7-825f-f49d8c633b88',
      status: 'failed',
      created: 2022-06-07T00:29:32.086Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgiztknbqgi3a',
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
  "content-length": "3319",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:29:34 GMT",
  "etag": "W/\"cf7-P8NEii4gNNyHS1Fo98cZNSP2irQ\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "f8a53232-8f22-4c71-9d24-1f7dead29a21",
      "created": "2022-06-06T16:18:32.922Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjshazcynjxheydonrtg4ya",
        "origins": [],
        "meta": {},
        "name": "7303e2cd-4f7d-4f1e-933d-7f97391058b4"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "691804b1-c8b8-411e-b04c-011e24ebc682",
      "created": "2022-06-06T16:18:58.292Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrsgu2tembsgezq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c2dcb6cb-5b86-4b3a-8936-85d6871ccccf",
      "created": "2022-06-06T16:19:08.266Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrsg44dcnzvgaya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6ff24fbb-61fc-4f02-84c7-b75fd220f217",
      "created": "2022-06-06T16:19:13.260Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrsha2dkmjyguza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "eb139c2d-8c39-400d-8bf6-5bc118e8cb1e",
      "created": "2022-06-06T16:19:23.273Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrshe4tmmzqg42q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "fca2d731-62bf-40bc-9237-93f9deada697",
      "created": "2022-06-07T00:28:36.709Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadbvhawdeobrha4tgmjvg4",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d64cfa4b-c2d9-4f89-9c8a-f578b3120c60",
      "created": "2022-06-07T00:28:56.862Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbxhawdmnjvgmzdcnrqg4",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "90944ea8-03da-4d4e-ba0c-d0f9b4abb2df",
      "created": "2022-06-07T00:29:06.979Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbzgmwdiojuhaztsmbvgi",
        "origins": [],
        "meta": {},
        "name": "c2a69836-e062-4a9a-b964-8274a6f52199"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "64d9b5dc-2bdc-42dc-a00e-01b8de4d1643",
      "created": "2022-06-07T00:29:24.588Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbwgqwdsmbrhe3doobygu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a4a9009b-02d4-49e7-825f-f49d8c633b88",
      "created": "2022-06-07T00:29:32.086Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgiztknbqgi3a",
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

#### Request - GET: https://api.pinata.cloud/psa/pins/dcbc9917-1595-49da-a254-7c4f7cf4cb5b

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/dcbc9917-1595-49da-a254-7c4f7cf4cb5b
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
  "date": "Tue, 07 Jun 2022 00:29:49 GMT",
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




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins/194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca
```
{
  requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
  created: '2022-06-07T00:29:44.957Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadbyguwdimjvgm4dmnzzgm', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'invalid_object' },
  status: 'failed'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
  status: 'failed',
  created: 2022-06-07T00:29:44.957Z,
  pin: {
    cid: 'baeaaadbyguwdimjvgm4dmnzzgm',
    name: undefined,
    origins: [],
    meta: {}
  },
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
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
  "content-length": "318",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:29:54 GMT",
  "etag": "W/\"13e-qXaBGCpzX4fKmbpCHY08Lnd7eoA\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca",
  "created": "2022-06-07T00:29:44.957Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadbyguwdimjvgm4dmnzzgm",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "invalid_object"
  },
  "status": "failed"
}
```
## Pin's with requestid 'dcbc9917-1595-49da-a254-7c4f7cf4cb5b' can have cid 'baeaaadbygawdgmrqgezdemjugy' replaced with 'baeaaadbyguwdimjvgm4dmnzzgm' - ✓ SUCCESS

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

#### Request - POST: https://api.pinata.cloud/psa/pins/dcbc9917-1595-49da-a254-7c4f7cf4cb5b

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbyguwdimjvgm4dmnzzgm"}
```
#### Response data from https://api.pinata.cloud/psa/pins/dcbc9917-1595-49da-a254-7c4f7cf4cb5b
```
{
  requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
  created: '2022-06-07T00:29:44.957Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadbyguwdimjvgm4dmnzzgm', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
  status: 'queued',
  created: 2022-06-07T00:29:44.957Z,
  pin: {
    cid: 'baeaaadbyguwdimjvgm4dmnzzgm',
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
  "content-length": "315",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:29:45 GMT",
  "etag": "W/\"13b-0RqfQAmBh6dAYEqSZ4wkedlcBAY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca",
  "created": "2022-06-07T00:29:44.957Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadbyguwdimjvgm4dmnzzgm",
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

  ✓ Could obtain requestid from new pin (dcbc9917-1595-49da-a254-7c4f7cf4cb5b) (success)

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
{"cid":"baeaaadbygawdgmrqgezdemjugy"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: 'dcbc9917-1595-49da-a254-7c4f7cf4cb5b',
  created: '2022-06-07T00:29:39.933Z',
  delegates: [
    '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
  ],
  pin: { cid: 'baeaaadbygawdgmrqgezdemjugy', origins: [], meta: {} },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'dcbc9917-1595-49da-a254-7c4f7cf4cb5b',
  status: 'queued',
  created: 2022-06-07T00:29:39.933Z,
  pin: {
    cid: 'baeaaadbygawdgmrqgezdemjugy',
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
  "content-length": "315",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:29:39 GMT",
  "etag": "W/\"13b-MNR7KoMgYDeJXb3RdBdTxEuyU30\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "dcbc9917-1595-49da-a254-7c4f7cf4cb5b",
  "created": "2022-06-07T00:29:39.933Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadbygawdgmrqgezdemjugy",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
## Can retrieve pin with name 'd673978d-bced-4da1-bfd5-a952754b1ce1' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=d673978d-bced-4da1-bfd5-a952754b1ce1&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=d673978d-bced-4da1-bfd5-a952754b1ce1&match=exact
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
  "date": "Tue, 07 Jun 2022 00:30:00 GMT",
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
## Can retrieve pin with name 'D673978D-BCED-4DA1-BFD5-A952754B1CE1' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=D673978D-BCED-4DA1-BFD5-A952754B1CE1&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=D673978D-BCED-4DA1-BFD5-A952754B1CE1&match=iexact
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
  "date": "Tue, 07 Jun 2022 00:30:05 GMT",
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
## Can retrieve pin with name 'bced-4da1-bfd5-a95' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=bced-4da1-bfd5-a95&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=bced-4da1-bfd5-a95&match=partial
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
  "date": "Tue, 07 Jun 2022 00:30:10 GMT",
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
## Can retrieve pin with name 'BCED-4DA1-BFD5-A95' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?name=BCED-4DA1-BFD5-A95&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?name=BCED-4DA1-BFD5-A95&match=ipartial
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
  "date": "Tue, 07 Jun 2022 00:30:15 GMT",
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
## Can create a pin with name='d673978d-bced-4da1-bfd5-a952754b1ce1' - ✓ SUCCESS

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
{"cid":"baeaaadjrgaycymzsgu4doojvga2a","name":"d673978d-bced-4da1-bfd5-a952754b1ce1"}
```
#### Response data from https://api.pinata.cloud/psa/pins
```
{
  requestid: '6176d72a-ae34-4f20-89f6-ec48f809ee3f',
  created: '2022-06-07T00:29:55.320Z',
  delegates: [
    '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
  ],
  pin: {
    cid: 'baeaaadjrgaycymzsgu4doojvga2a',
    origins: [],
    meta: {},
    name: 'd673978d-bced-4da1-bfd5-a952754b1ce1'
  },
  info: { pinata_pinjob_status: 'prechecking' },
  status: 'queued'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '6176d72a-ae34-4f20-89f6-ec48f809ee3f',
  status: 'queued',
  created: 2022-06-07T00:29:55.320Z,
  pin: {
    cid: 'baeaaadjrgaycymzsgu4doojvga2a',
    name: 'd673978d-bced-4da1-bfd5-a952754b1ce1',
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
  "content-length": "364",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:29:55 GMT",
  "etag": "W/\"16c-mku0bzoSHaiyjmN8/fdjMOatsl4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "6176d72a-ae34-4f20-89f6-ec48f809ee3f",
  "created": "2022-06-07T00:29:55.320Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjrgaycymzsgu4doojvga2a",
    "origins": [],
    "meta": {},
    "name": "d673978d-bced-4da1-bfd5-a952754b1ce1"
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
      requestid: 'c2dcb6cb-5b86-4b3a-8936-85d6871ccccf',
      created: '2022-06-06T16:19:08.266Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrsg44dcnzvgaya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6ff24fbb-61fc-4f02-84c7-b75fd220f217',
      created: '2022-06-06T16:19:13.260Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrsha2dkmjyguza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e',
      created: '2022-06-06T16:19:23.273Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrshe4tmmzqg42q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'fca2d731-62bf-40bc-9237-93f9deada697',
      created: '2022-06-07T00:28:36.709Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadbvhawdeobrha4tgmjvg4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60',
      created: '2022-06-07T00:28:56.862Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbxhawdmnjvgmzdcnrqg4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df',
      created: '2022-06-07T00:29:06.979Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadbzgmwdiojuhaztsmbvgi',
        origins: [],
        meta: {},
        name: 'c2a69836-e062-4a9a-b964-8274a6f52199'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
      created: '2022-06-07T00:29:24.588Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbwgqwdsmbrhe3doobygu', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'a4a9009b-02d4-49e7-825f-f49d8c633b88',
      created: '2022-06-07T00:29:32.086Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgiztknbqgi3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c9abd787-129e-4092-9d86-2690c067cfea',
      created: '2022-06-07T00:29:37.087Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgm2dmmrugiya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '15bdb5cb-4316-47cb-abfb-8b880cc5cb5f',
      created: '2022-06-07T00:29:42.114Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsguytinjrga4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
      created: '2022-06-07T00:29:44.957Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbyguwdimjvgm4dmnzzgm', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'ef3c66a8-00f3-4025-a8a3-ace4aede5927',
      created: '2022-06-07T00:29:47.121Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgu4danbvga2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd',
      created: '2022-06-07T00:29:52.091Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgy2tkmjygayq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6176d72a-ae34-4f20-89f6-ec48f809ee3f',
      created: '2022-06-07T00:29:55.320Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: {
        cid: 'baeaaadjrgaycymzsgu4doojvga2a',
        origins: [],
        meta: {},
        name: 'd673978d-bced-4da1-bfd5-a952754b1ce1'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '0a503ac1-7182-4303-82ca-3e2085358828',
      created: '2022-06-07T00:29:57.131Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjrgezsynzsg4ytinzqhe3q', origins: [], meta: {} },
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
      requestid: 'c2dcb6cb-5b86-4b3a-8936-85d6871ccccf',
      status: 'failed',
      created: 2022-06-06T16:19:08.266Z,
      pin: {
        cid: 'baeaaadjtgazsymrsg44dcnzvgaya',
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
      requestid: '6ff24fbb-61fc-4f02-84c7-b75fd220f217',
      status: 'failed',
      created: 2022-06-06T16:19:13.260Z,
      pin: {
        cid: 'baeaaadjtgazsymrsha2dkmjyguza',
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
      requestid: 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e',
      status: 'failed',
      created: 2022-06-06T16:19:23.273Z,
      pin: {
        cid: 'baeaaadjtgazsymrshe4tmmzqg42q',
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
      requestid: 'fca2d731-62bf-40bc-9237-93f9deada697',
      status: 'failed',
      created: 2022-06-07T00:28:36.709Z,
      pin: {
        cid: 'baeaaadbvhawdeobrha4tgmjvg4',
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
      requestid: 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60',
      status: 'failed',
      created: 2022-06-07T00:28:56.862Z,
      pin: {
        cid: 'baeaaadbxhawdmnjvgmzdcnrqg4',
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
      requestid: '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df',
      status: 'failed',
      created: 2022-06-07T00:29:06.979Z,
      pin: {
        cid: 'baeaaadbzgmwdiojuhaztsmbvgi',
        name: 'c2a69836-e062-4a9a-b964-8274a6f52199',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
      status: 'failed',
      created: 2022-06-07T00:29:24.588Z,
      pin: {
        cid: 'baeaaadbwgqwdsmbrhe3doobygu',
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
      requestid: 'a4a9009b-02d4-49e7-825f-f49d8c633b88',
      status: 'failed',
      created: 2022-06-07T00:29:32.086Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgiztknbqgi3a',
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
      requestid: 'c9abd787-129e-4092-9d86-2690c067cfea',
      status: 'failed',
      created: 2022-06-07T00:29:37.087Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgm2dmmrugiya',
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
      requestid: '15bdb5cb-4316-47cb-abfb-8b880cc5cb5f',
      status: 'failed',
      created: 2022-06-07T00:29:42.114Z,
      pin: {
        cid: 'baeaaadjrgezsynzsguytinjrga4q',
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
      requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
      status: 'failed',
      created: 2022-06-07T00:29:44.957Z,
      pin: {
        cid: 'baeaaadbyguwdimjvgm4dmnzzgm',
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
      requestid: 'ef3c66a8-00f3-4025-a8a3-ace4aede5927',
      status: 'failed',
      created: 2022-06-07T00:29:47.121Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgu4danbvga2q',
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
      requestid: '9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd',
      status: 'failed',
      created: 2022-06-07T00:29:52.091Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgy2tkmjygayq',
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
      requestid: '6176d72a-ae34-4f20-89f6-ec48f809ee3f',
      status: 'failed',
      created: 2022-06-07T00:29:55.320Z,
      pin: {
        cid: 'baeaaadjrgaycymzsgu4doojvga2a',
        name: 'd673978d-bced-4da1-bfd5-a952754b1ce1',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '0a503ac1-7182-4303-82ca-3e2085358828',
      status: 'failed',
      created: 2022-06-07T00:29:57.131Z,
      pin: {
        cid: 'baeaaadjrgezsynzsg4ytinzqhe3q',
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
  "content-length": "4922",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:30:20 GMT",
  "etag": "W/\"133a-wZ0WsR8fNXBEle2Xg+FplNiSdNw\"",
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
      "requestid": "c2dcb6cb-5b86-4b3a-8936-85d6871ccccf",
      "created": "2022-06-06T16:19:08.266Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrsg44dcnzvgaya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6ff24fbb-61fc-4f02-84c7-b75fd220f217",
      "created": "2022-06-06T16:19:13.260Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrsha2dkmjyguza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "eb139c2d-8c39-400d-8bf6-5bc118e8cb1e",
      "created": "2022-06-06T16:19:23.273Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrshe4tmmzqg42q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "fca2d731-62bf-40bc-9237-93f9deada697",
      "created": "2022-06-07T00:28:36.709Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadbvhawdeobrha4tgmjvg4",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d64cfa4b-c2d9-4f89-9c8a-f578b3120c60",
      "created": "2022-06-07T00:28:56.862Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbxhawdmnjvgmzdcnrqg4",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "90944ea8-03da-4d4e-ba0c-d0f9b4abb2df",
      "created": "2022-06-07T00:29:06.979Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbzgmwdiojuhaztsmbvgi",
        "origins": [],
        "meta": {},
        "name": "c2a69836-e062-4a9a-b964-8274a6f52199"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "64d9b5dc-2bdc-42dc-a00e-01b8de4d1643",
      "created": "2022-06-07T00:29:24.588Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbwgqwdsmbrhe3doobygu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a4a9009b-02d4-49e7-825f-f49d8c633b88",
      "created": "2022-06-07T00:29:32.086Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgiztknbqgi3a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c9abd787-129e-4092-9d86-2690c067cfea",
      "created": "2022-06-07T00:29:37.087Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgm2dmmrugiya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "15bdb5cb-4316-47cb-abfb-8b880cc5cb5f",
      "created": "2022-06-07T00:29:42.114Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsguytinjrga4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca",
      "created": "2022-06-07T00:29:44.957Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbyguwdimjvgm4dmnzzgm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "ef3c66a8-00f3-4025-a8a3-ace4aede5927",
      "created": "2022-06-07T00:29:47.121Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgu4danbvga2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd",
      "created": "2022-06-07T00:29:52.091Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgy2tkmjygayq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6176d72a-ae34-4f20-89f6-ec48f809ee3f",
      "created": "2022-06-07T00:29:55.320Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrgaycymzsgu4doojvga2a",
        "origins": [],
        "meta": {},
        "name": "d673978d-bced-4da1-bfd5-a952754b1ce1"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0a503ac1-7182-4303-82ca-3e2085358828",
      "created": "2022-06-07T00:29:57.131Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsg4ytinzqhe3q",
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
## Pagination: Retrieve the next page of pins - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ The next page of pins doesn't contain any of previous pages pins (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-06T16%3A19%3A08.266Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-06T16%3A19%3A08.266Z
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
  "date": "Tue, 07 Jun 2022 00:30:25 GMT",
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

### Expectations (8/10 successful)

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
  count: 16,
  results: [
    {
      requestid: '691804b1-c8b8-411e-b04c-011e24ebc682',
      created: '2022-06-06T16:18:58.292Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrsgu2tembsgezq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c2dcb6cb-5b86-4b3a-8936-85d6871ccccf',
      created: '2022-06-06T16:19:08.266Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrsg44dcnzvgaya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6ff24fbb-61fc-4f02-84c7-b75fd220f217',
      created: '2022-06-06T16:19:13.260Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrsha2dkmjyguza', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e',
      created: '2022-06-06T16:19:23.273Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrshe4tmmzqg42q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'fca2d731-62bf-40bc-9237-93f9deada697',
      created: '2022-06-07T00:28:36.709Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadbvhawdeobrha4tgmjvg4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60',
      created: '2022-06-07T00:28:56.862Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbxhawdmnjvgmzdcnrqg4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df',
      created: '2022-06-07T00:29:06.979Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadbzgmwdiojuhaztsmbvgi',
        origins: [],
        meta: {},
        name: 'c2a69836-e062-4a9a-b964-8274a6f52199'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
      created: '2022-06-07T00:29:24.588Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbwgqwdsmbrhe3doobygu', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'a4a9009b-02d4-49e7-825f-f49d8c633b88',
      created: '2022-06-07T00:29:32.086Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgiztknbqgi3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c9abd787-129e-4092-9d86-2690c067cfea',
      created: '2022-06-07T00:29:37.087Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgm2dmmrugiya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '15bdb5cb-4316-47cb-abfb-8b880cc5cb5f',
      created: '2022-06-07T00:29:42.114Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsguytinjrga4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
      created: '2022-06-07T00:29:44.957Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbyguwdimjvgm4dmnzzgm', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'ef3c66a8-00f3-4025-a8a3-ace4aede5927',
      created: '2022-06-07T00:29:47.121Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgu4danbvga2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd',
      created: '2022-06-07T00:29:52.091Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgy2tkmjygayq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6176d72a-ae34-4f20-89f6-ec48f809ee3f',
      created: '2022-06-07T00:29:55.320Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: {
        cid: 'baeaaadjrgaycymzsgu4doojvga2a',
        origins: [],
        meta: {},
        name: 'd673978d-bced-4da1-bfd5-a952754b1ce1'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '0a503ac1-7182-4303-82ca-3e2085358828',
      created: '2022-06-07T00:29:57.131Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjrgezsynzsg4ytinzqhe3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 16,
  results: Set(16) {
    {
      requestid: '691804b1-c8b8-411e-b04c-011e24ebc682',
      status: 'failed',
      created: 2022-06-06T16:18:58.292Z,
      pin: {
        cid: 'baeaaadjtgazsymrsgu2tembsgezq',
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
      requestid: 'c2dcb6cb-5b86-4b3a-8936-85d6871ccccf',
      status: 'failed',
      created: 2022-06-06T16:19:08.266Z,
      pin: {
        cid: 'baeaaadjtgazsymrsg44dcnzvgaya',
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
      requestid: '6ff24fbb-61fc-4f02-84c7-b75fd220f217',
      status: 'failed',
      created: 2022-06-06T16:19:13.260Z,
      pin: {
        cid: 'baeaaadjtgazsymrsha2dkmjyguza',
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
      requestid: 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e',
      status: 'failed',
      created: 2022-06-06T16:19:23.273Z,
      pin: {
        cid: 'baeaaadjtgazsymrshe4tmmzqg42q',
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
      requestid: 'fca2d731-62bf-40bc-9237-93f9deada697',
      status: 'failed',
      created: 2022-06-07T00:28:36.709Z,
      pin: {
        cid: 'baeaaadbvhawdeobrha4tgmjvg4',
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
      requestid: 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60',
      status: 'failed',
      created: 2022-06-07T00:28:56.862Z,
      pin: {
        cid: 'baeaaadbxhawdmnjvgmzdcnrqg4',
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
      requestid: '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df',
      status: 'failed',
      created: 2022-06-07T00:29:06.979Z,
      pin: {
        cid: 'baeaaadbzgmwdiojuhaztsmbvgi',
        name: 'c2a69836-e062-4a9a-b964-8274a6f52199',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
      status: 'failed',
      created: 2022-06-07T00:29:24.588Z,
      pin: {
        cid: 'baeaaadbwgqwdsmbrhe3doobygu',
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
      requestid: 'a4a9009b-02d4-49e7-825f-f49d8c633b88',
      status: 'failed',
      created: 2022-06-07T00:29:32.086Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgiztknbqgi3a',
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
      requestid: 'c9abd787-129e-4092-9d86-2690c067cfea',
      status: 'failed',
      created: 2022-06-07T00:29:37.087Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgm2dmmrugiya',
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
      requestid: '15bdb5cb-4316-47cb-abfb-8b880cc5cb5f',
      status: 'failed',
      created: 2022-06-07T00:29:42.114Z,
      pin: {
        cid: 'baeaaadjrgezsynzsguytinjrga4q',
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
      requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
      status: 'failed',
      created: 2022-06-07T00:29:44.957Z,
      pin: {
        cid: 'baeaaadbyguwdimjvgm4dmnzzgm',
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
      requestid: 'ef3c66a8-00f3-4025-a8a3-ace4aede5927',
      status: 'failed',
      created: 2022-06-07T00:29:47.121Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgu4danbvga2q',
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
      requestid: '9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd',
      status: 'failed',
      created: 2022-06-07T00:29:52.091Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgy2tkmjygayq',
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
      requestid: '6176d72a-ae34-4f20-89f6-ec48f809ee3f',
      status: 'failed',
      created: 2022-06-07T00:29:55.320Z,
      pin: {
        cid: 'baeaaadjrgaycymzsgu4doojvga2a',
        name: 'd673978d-bced-4da1-bfd5-a952754b1ce1',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '0a503ac1-7182-4303-82ca-3e2085358828',
      status: 'failed',
      created: 2022-06-07T00:29:57.131Z,
      pin: {
        cid: 'baeaaadjrgezsynzsg4ytinzqhe3q',
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
  "content-length": "5243",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:30:15 GMT",
  "etag": "W/\"147b-fGLPnP4rFLCoEirmMEy8mXv6wro\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 16,
  "results": [
    {
      "requestid": "691804b1-c8b8-411e-b04c-011e24ebc682",
      "created": "2022-06-06T16:18:58.292Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrsgu2tembsgezq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c2dcb6cb-5b86-4b3a-8936-85d6871ccccf",
      "created": "2022-06-06T16:19:08.266Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrsg44dcnzvgaya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6ff24fbb-61fc-4f02-84c7-b75fd220f217",
      "created": "2022-06-06T16:19:13.260Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrsha2dkmjyguza",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "eb139c2d-8c39-400d-8bf6-5bc118e8cb1e",
      "created": "2022-06-06T16:19:23.273Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrshe4tmmzqg42q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "fca2d731-62bf-40bc-9237-93f9deada697",
      "created": "2022-06-07T00:28:36.709Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadbvhawdeobrha4tgmjvg4",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d64cfa4b-c2d9-4f89-9c8a-f578b3120c60",
      "created": "2022-06-07T00:28:56.862Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbxhawdmnjvgmzdcnrqg4",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "90944ea8-03da-4d4e-ba0c-d0f9b4abb2df",
      "created": "2022-06-07T00:29:06.979Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbzgmwdiojuhaztsmbvgi",
        "origins": [],
        "meta": {},
        "name": "c2a69836-e062-4a9a-b964-8274a6f52199"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "64d9b5dc-2bdc-42dc-a00e-01b8de4d1643",
      "created": "2022-06-07T00:29:24.588Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbwgqwdsmbrhe3doobygu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a4a9009b-02d4-49e7-825f-f49d8c633b88",
      "created": "2022-06-07T00:29:32.086Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgiztknbqgi3a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c9abd787-129e-4092-9d86-2690c067cfea",
      "created": "2022-06-07T00:29:37.087Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgm2dmmrugiya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "15bdb5cb-4316-47cb-abfb-8b880cc5cb5f",
      "created": "2022-06-07T00:29:42.114Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsguytinjrga4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca",
      "created": "2022-06-07T00:29:44.957Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbyguwdimjvgm4dmnzzgm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "ef3c66a8-00f3-4025-a8a3-ace4aede5927",
      "created": "2022-06-07T00:29:47.121Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgu4danbvga2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd",
      "created": "2022-06-07T00:29:52.091Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgy2tkmjygayq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6176d72a-ae34-4f20-89f6-ec48f809ee3f",
      "created": "2022-06-07T00:29:55.320Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrgaycymzsgu4doojvga2a",
        "origins": [],
        "meta": {},
        "name": "d673978d-bced-4da1-bfd5-a952754b1ce1"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0a503ac1-7182-4303-82ca-3e2085358828",
      "created": "2022-06-07T00:29:57.131Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsg4ytinzqhe3q",
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
## Can delete pin with requestid 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/eb139c2d-8c39-400d-8bf6-5bc118e8cb1e

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/eb139c2d-8c39-400d-8bf6-5bc118e8cb1e
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
  "date": "Tue, 07 Jun 2022 00:30:35 GMT",
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
## Can delete pin with requestid 'fca2d731-62bf-40bc-9237-93f9deada697' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/fca2d731-62bf-40bc-9237-93f9deada697

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/fca2d731-62bf-40bc-9237-93f9deada697
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
  "date": "Tue, 07 Jun 2022 00:30:40 GMT",
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
## Can delete pin with requestid 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/d64cfa4b-c2d9-4f89-9c8a-f578b3120c60

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/d64cfa4b-c2d9-4f89-9c8a-f578b3120c60
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
  "date": "Tue, 07 Jun 2022 00:30:45 GMT",
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
## Can delete pin with requestid '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/90944ea8-03da-4d4e-ba0c-d0f9b4abb2df

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/90944ea8-03da-4d4e-ba0c-d0f9b4abb2df
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
  "date": "Tue, 07 Jun 2022 00:30:50 GMT",
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
## Can delete pin with requestid '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/64d9b5dc-2bdc-42dc-a00e-01b8de4d1643

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/64d9b5dc-2bdc-42dc-a00e-01b8de4d1643
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
  "date": "Tue, 07 Jun 2022 00:30:55 GMT",
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
## Can delete pin with requestid 'a4a9009b-02d4-49e7-825f-f49d8c633b88' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/a4a9009b-02d4-49e7-825f-f49d8c633b88

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/a4a9009b-02d4-49e7-825f-f49d8c633b88
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
  "date": "Tue, 07 Jun 2022 00:31:00 GMT",
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
## Can delete pin with requestid 'c9abd787-129e-4092-9d86-2690c067cfea' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/c9abd787-129e-4092-9d86-2690c067cfea

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/c9abd787-129e-4092-9d86-2690c067cfea
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
  "date": "Tue, 07 Jun 2022 00:31:05 GMT",
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
## Can delete pin with requestid '15bdb5cb-4316-47cb-abfb-8b880cc5cb5f' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/15bdb5cb-4316-47cb-abfb-8b880cc5cb5f

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/15bdb5cb-4316-47cb-abfb-8b880cc5cb5f
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
  "date": "Tue, 07 Jun 2022 00:31:10 GMT",
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
## Can delete pin with requestid '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca
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
  "date": "Tue, 07 Jun 2022 00:31:15 GMT",
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
## Can delete pin with requestid 'ef3c66a8-00f3-4025-a8a3-ace4aede5927' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/ef3c66a8-00f3-4025-a8a3-ace4aede5927

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/ef3c66a8-00f3-4025-a8a3-ace4aede5927
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
  "date": "Tue, 07 Jun 2022 00:31:20 GMT",
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
## Can delete pin with requestid '9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd
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
  "date": "Tue, 07 Jun 2022 00:31:26 GMT",
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
## Can delete pin with requestid '6176d72a-ae34-4f20-89f6-ec48f809ee3f' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/6176d72a-ae34-4f20-89f6-ec48f809ee3f

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/6176d72a-ae34-4f20-89f6-ec48f809ee3f
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
  "date": "Tue, 07 Jun 2022 00:31:30 GMT",
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
## Can delete pin with requestid '0a503ac1-7182-4303-82ca-3e2085358828' - ✘ FAILED

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

#### Request - DELETE: https://api.pinata.cloud/psa/pins/0a503ac1-7182-4303-82ca-3e2085358828

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.pinata.cloud/psa/pins/0a503ac1-7182-4303-82ca-3e2085358828
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
  "date": "Tue, 07 Jun 2022 00:31:35 GMT",
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
  "date": "Tue, 07 Jun 2022 00:31:40 GMT",
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
## Can delete all pins - ✘ FAILED

### Expectations (14/27 successful)

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
  count: 13,
  results: [
    {
      requestid: 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e',
      created: '2022-06-06T16:19:23.273Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadjtgazsymrshe4tmmzqg42q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'fca2d731-62bf-40bc-9237-93f9deada697',
      created: '2022-06-07T00:28:36.709Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: { cid: 'baeaaadbvhawdeobrha4tgmjvg4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60',
      created: '2022-06-07T00:28:56.862Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbxhawdmnjvgmzdcnrqg4', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df',
      created: '2022-06-07T00:29:06.979Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: {
        cid: 'baeaaadbzgmwdiojuhaztsmbvgi',
        origins: [],
        meta: {},
        name: 'c2a69836-e062-4a9a-b964-8274a6f52199'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
      created: '2022-06-07T00:29:24.588Z',
      delegates: [
        '/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf'
      ],
      pin: { cid: 'baeaaadbwgqwdsmbrhe3doobygu', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'a4a9009b-02d4-49e7-825f-f49d8c633b88',
      created: '2022-06-07T00:29:32.086Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgiztknbqgi3a', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'c9abd787-129e-4092-9d86-2690c067cfea',
      created: '2022-06-07T00:29:37.087Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgm2dmmrugiya', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '15bdb5cb-4316-47cb-abfb-8b880cc5cb5f',
      created: '2022-06-07T00:29:42.114Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsguytinjrga4q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
      created: '2022-06-07T00:29:44.957Z',
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      pin: { cid: 'baeaaadbyguwdimjvgm4dmnzzgm', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: 'ef3c66a8-00f3-4025-a8a3-ace4aede5927',
      created: '2022-06-07T00:29:47.121Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgu4danbvga2q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd',
      created: '2022-06-07T00:29:52.091Z',
      delegates: [
        '/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX'
      ],
      pin: { cid: 'baeaaadjrgezsynzsgy2tkmjygayq', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '6176d72a-ae34-4f20-89f6-ec48f809ee3f',
      created: '2022-06-07T00:29:55.320Z',
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      pin: {
        cid: 'baeaaadjrgaycymzsgu4doojvga2a',
        origins: [],
        meta: {},
        name: 'd673978d-bced-4da1-bfd5-a952754b1ce1'
      },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    },
    {
      requestid: '0a503ac1-7182-4303-82ca-3e2085358828',
      created: '2022-06-07T00:29:57.131Z',
      delegates: [
        '/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9'
      ],
      pin: { cid: 'baeaaadjrgezsynzsg4ytinzqhe3q', origins: [], meta: {} },
      info: { pinata_pinjob_status: 'invalid_object' },
      status: 'failed'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 13,
  results: Set(13) {
    {
      requestid: 'eb139c2d-8c39-400d-8bf6-5bc118e8cb1e',
      status: 'failed',
      created: 2022-06-06T16:19:23.273Z,
      pin: {
        cid: 'baeaaadjtgazsymrshe4tmmzqg42q',
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
      requestid: 'fca2d731-62bf-40bc-9237-93f9deada697',
      status: 'failed',
      created: 2022-06-07T00:28:36.709Z,
      pin: {
        cid: 'baeaaadbvhawdeobrha4tgmjvg4',
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
      requestid: 'd64cfa4b-c2d9-4f89-9c8a-f578b3120c60',
      status: 'failed',
      created: 2022-06-07T00:28:56.862Z,
      pin: {
        cid: 'baeaaadbxhawdmnjvgmzdcnrqg4',
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
      requestid: '90944ea8-03da-4d4e-ba0c-d0f9b4abb2df',
      status: 'failed',
      created: 2022-06-07T00:29:06.979Z,
      pin: {
        cid: 'baeaaadbzgmwdiojuhaztsmbvgi',
        name: 'c2a69836-e062-4a9a-b964-8274a6f52199',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '64d9b5dc-2bdc-42dc-a00e-01b8de4d1643',
      status: 'failed',
      created: 2022-06-07T00:29:24.588Z,
      pin: {
        cid: 'baeaaadbwgqwdsmbrhe3doobygu',
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
      requestid: 'a4a9009b-02d4-49e7-825f-f49d8c633b88',
      status: 'failed',
      created: 2022-06-07T00:29:32.086Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgiztknbqgi3a',
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
      requestid: 'c9abd787-129e-4092-9d86-2690c067cfea',
      status: 'failed',
      created: 2022-06-07T00:29:37.087Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgm2dmmrugiya',
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
      requestid: '15bdb5cb-4316-47cb-abfb-8b880cc5cb5f',
      status: 'failed',
      created: 2022-06-07T00:29:42.114Z,
      pin: {
        cid: 'baeaaadjrgezsynzsguytinjrga4q',
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
      requestid: '194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca',
      status: 'failed',
      created: 2022-06-07T00:29:44.957Z,
      pin: {
        cid: 'baeaaadbyguwdimjvgm4dmnzzgm',
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
      requestid: 'ef3c66a8-00f3-4025-a8a3-ace4aede5927',
      status: 'failed',
      created: 2022-06-07T00:29:47.121Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgu4danbvga2q',
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
      requestid: '9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd',
      status: 'failed',
      created: 2022-06-07T00:29:52.091Z,
      pin: {
        cid: 'baeaaadjrgezsynzsgy2tkmjygayq',
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
      requestid: '6176d72a-ae34-4f20-89f6-ec48f809ee3f',
      status: 'failed',
      created: 2022-06-07T00:29:55.320Z,
      pin: {
        cid: 'baeaaadjrgaycymzsgu4doojvga2a',
        name: 'd673978d-bced-4da1-bfd5-a952754b1ce1',
        origins: [],
        meta: {}
      },
      delegates: [
        '/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5'
      ],
      info: { pinata_pinjob_status: 'invalid_object' }
    },
    {
      requestid: '0a503ac1-7182-4303-82ca-3e2085358828',
      status: 'failed',
      created: 2022-06-07T00:29:57.131Z,
      pin: {
        cid: 'baeaaadjrgezsynzsg4ytinzqhe3q',
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
  "content-length": "4280",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Jun 2022 00:30:30 GMT",
  "etag": "W/\"10b8-pF7cUl5xx9IqmgTrDibgw33b77s\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "count": 13,
  "results": [
    {
      "requestid": "eb139c2d-8c39-400d-8bf6-5bc118e8cb1e",
      "created": "2022-06-06T16:19:23.273Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjtgazsymrshe4tmmzqg42q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "fca2d731-62bf-40bc-9237-93f9deada697",
      "created": "2022-06-07T00:28:36.709Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadbvhawdeobrha4tgmjvg4",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d64cfa4b-c2d9-4f89-9c8a-f578b3120c60",
      "created": "2022-06-07T00:28:56.862Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbxhawdmnjvgmzdcnrqg4",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "90944ea8-03da-4d4e-ba0c-d0f9b4abb2df",
      "created": "2022-06-07T00:29:06.979Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbzgmwdiojuhaztsmbvgi",
        "origins": [],
        "meta": {},
        "name": "c2a69836-e062-4a9a-b964-8274a6f52199"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "64d9b5dc-2bdc-42dc-a00e-01b8de4d1643",
      "created": "2022-06-07T00:29:24.588Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbwgqwdsmbrhe3doobygu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a4a9009b-02d4-49e7-825f-f49d8c633b88",
      "created": "2022-06-07T00:29:32.086Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgiztknbqgi3a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c9abd787-129e-4092-9d86-2690c067cfea",
      "created": "2022-06-07T00:29:37.087Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgm2dmmrugiya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "15bdb5cb-4316-47cb-abfb-8b880cc5cb5f",
      "created": "2022-06-07T00:29:42.114Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsguytinjrga4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "194e5ed3-1cb3-4c57-923b-e8d3ac8b2aca",
      "created": "2022-06-07T00:29:44.957Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadbyguwdimjvgm4dmnzzgm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "ef3c66a8-00f3-4025-a8a3-ace4aede5927",
      "created": "2022-06-07T00:29:47.121Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgu4danbvga2q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9726ae9a-ddb1-47ab-a9d9-d5be4af5bfcd",
      "created": "2022-06-07T00:29:52.091Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsgy2tkmjygayq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6176d72a-ae34-4f20-89f6-ec48f809ee3f",
      "created": "2022-06-07T00:29:55.320Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjrgaycymzsgu4doojvga2a",
        "origins": [],
        "meta": {},
        "name": "d673978d-bced-4da1-bfd5-a952754b1ce1"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0a503ac1-7182-4303-82ca-3e2085358828",
      "created": "2022-06-07T00:29:57.131Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjrgezsynzsg4ytinzqhe3q",
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
