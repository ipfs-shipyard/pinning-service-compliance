
# https://api.estuary.tech/pinning compliance:

## Summary (3/9 successful)

  ✓ Request with no authentication token

  ✓ Request with invalid token

  ✘ Pins post of CID 'baeaaadjsgi4syobtgq3tmnzrgy3a'

  ✘ Can create and then delete a new pin

  ✘ List pin objects (GET /pins) in all states

  ✘ Can create and replace a pin's CID

  ✓ Can create a pin with name='d8d52572-c447-44c0-9327-56b74a6fa19c'

  ✘ Pagination: Get all pins, create new pins (optional), get first and second pages

  ✘ Can delete all pins

## Request with no authentication token - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response object matches api spec schema (success)

  ✓ Returns a 403 (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins
```
{ error: { reason: 'ERR_AUTH_MISSING' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Forbidden (403)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:37 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_AUTH_MISSING"
  }
}
```
## Request with invalid token - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response object matches api spec schema (success)

  ✓ Returns a 403 (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins
```
{ error: { reason: 'ERR_INVALID_TOKEN' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Forbidden (403)
##### Headers
```json
{
  "connection": "close",
  "content-length": "41",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:38 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_INVALID_TOKEN"
  }
}
```
## Pins post of CID 'baeaaadjsgi4syobtgq3tmnzrgy3a' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✓ Pinning status is either queued, pinning, or pinned (success)




#### Joi validation failures

* "origins" must be an array

* "meta" must be an object

* "info" must be an object


### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgi4syobtgq3tmnzrgy3a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548765',
  status: 'queued',
  created: '2022-06-01T21:47:39.279806408Z',
  pin: {
    cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548765',
  status: 'queued',
  created: 2022-06-01T21:47:39.279Z,
  pin: {
    cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:39 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548765",
  "status": "queued",
  "created": "2022-06-01T21:47:39.279806408Z",
  "pin": {
    "cid": "baeaaadjsgi4syobtgq3tmnzrgy3a",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## The newly created pin can be immediately deleted - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202: The Pin was deleted successfully (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548766

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548766
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:47:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can create and then delete a new pin - ✘ FAILED

### Expectations (2/4 successful)

  ✓ Result is not null (success)

  ✘ Response code is 200 (failure)

  ✓ Response is ok (success)

  ✘ Response code is 202: The Pin was deleted successfully (failure)


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

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgmycyobugi2tamzvgi4a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548766',
  status: 'queued',
  created: '2022-06-01T21:47:40.258620498Z',
  pin: {
    cid: 'baeaaadjsgmycyobugi2tamzvgi4a',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548766',
  status: 'queued',
  created: 2022-06-01T21:47:40.258Z,
  pin: {
    cid: 'baeaaadjsgmycyobugi2tamzvgi4a',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548766",
  "status": "queued",
  "created": "2022-06-01T21:47:40.258620498Z",
  "pin": {
    "cid": "baeaaadjsgmycyobugi2tamzvgi4a",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## List pin objects (GET /pins) in all states - ✘ FAILED

### Expectations (2/3 successful)

  ✘ Response object matches api spec schema (failure)

  ✓ Response is ok (success)

  ✓ Response code is 200 (success)




#### Joi validation failures

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object


### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 1,
  results: [
    {
      requestid: '30548765',
      status: 'failed',
      created: '2022-06-01T21:47:39.279806408Z',
      pin: {
        cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
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
      requestid: '30548765',
      status: 'failed',
      created: 2022-06-01T21:47:39.279Z,
      pin: {
        cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "306",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "30548765",
      "status": "failed",
      "created": "2022-06-01T21:47:39.279806408Z",
      "pin": {
        "cid": "baeaaadjsgi4syobtgq3tmnzrgy3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    }
  ]
}
```
## Get original pin via requestid - ✘ FAILED

### Expectations (0/1 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins/30548767

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548767
```
{
  requestid: '30548767',
  status: 'failed',
  created: '2022-06-01T21:47:42.506438916Z',
  pin: {
    cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548767',
  status: 'failed',
  created: 2022-06-01T21:47:42.506Z,
  pin: {
    cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548767",
  "status": "failed",
  "created": "2022-06-01T21:47:42.506438916Z",
  "pin": {
    "cid": "baeaaadjsgmzsymrygaydsmbzgy3a",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins/30548775

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548775
```
{
  requestid: '30548775',
  status: 'failed',
  created: '2022-06-01T21:47:43.387045481Z',
  pin: {
    cid: 'baeaaadbsgm2cynrrgazdinbtgi',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548775',
  status: 'failed',
  created: 2022-06-01T21:47:43.387Z,
  pin: {
    cid: 'baeaaadbsgm2cynrrgazdinbtgi',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548775",
  "status": "failed",
  "created": "2022-06-01T21:47:43.387045481Z",
  "pin": {
    "cid": "baeaaadbsgm2cynrrgazdinbtgi",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Pin's with requestid '30548767' can have cid 'baeaaadjsgmzsymrygaydsmbzgy3a' replaced with 'baeaaadbsgm2cynrrgazdinbtgi' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins/30548767

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbsgm2cynrrgazdinbtgi"}
```
#### Response data from https://api.estuary.tech/pinning/pins/30548767
```
{
  requestid: '30548775',
  status: 'queued',
  created: '2022-06-01T21:47:43.387045481Z',
  pin: {
    cid: 'baeaaadbsgm2cynrrgazdinbtgi',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548775',
  status: 'queued',
  created: 2022-06-01T21:47:43.387Z,
  pin: {
    cid: 'baeaaadbsgm2cynrrgazdinbtgi',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548775",
  "status": "queued",
  "created": "2022-06-01T21:47:43.387045481Z",
  "pin": {
    "cid": "baeaaadbsgm2cynrrgazdinbtgi",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create and replace a pin's CID - ✘ FAILED

### Expectations (6/7 successful)

  ✓ Pin exists (success)

  ✓ Could obtain requestid from new pin (30548767) (success)

  ✓ Response is ok (success)

  ✓ Replaced pin has the new & expected CID (success)

  ✓ Replaced pin has a different requestid (success)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgmzsymrygaydsmbzgy3a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548767',
  status: 'queued',
  created: '2022-06-01T21:47:42.506438916Z',
  pin: {
    cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548767',
  status: 'queued',
  created: 2022-06-01T21:47:42.506Z,
  pin: {
    cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548767",
  "status": "queued",
  "created": "2022-06-01T21:47:42.506438916Z",
  "pin": {
    "cid": "baeaaadjsgmzsymrygaydsmbzgy3a",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can retrieve pin with name 'd8d52572-c447-44c0-9327-56b74a6fa19c' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=d8d52572-c447-44c0-9327-56b74a6fa19c&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=d8d52572-c447-44c0-9327-56b74a6fa19c&match=exact
```
{
  count: 1,
  results: [
    {
      requestid: '30548782',
      status: 'failed',
      created: '2022-06-01T21:47:45.424832802Z',
      pin: {
        cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
        name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
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
      requestid: '30548782',
      status: 'failed',
      created: 2022-06-01T21:47:45.424Z,
      pin: {
        cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
        name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "342",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "30548782",
      "status": "failed",
      "created": "2022-06-01T21:47:45.424832802Z",
      "pin": {
        "cid": "baeaaadjsgm3cyojugy4tenzrhe2q",
        "name": "d8d52572-c447-44c0-9327-56b74a6fa19c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    }
  ]
}
```
## Can retrieve pin with name 'D8D52572-C447-44C0-9327-56B74A6FA19C' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=D8D52572-C447-44C0-9327-56B74A6FA19C&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=D8D52572-C447-44C0-9327-56B74A6FA19C&match=iexact
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
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can retrieve pin with name 'c447-44c0-9327-56b' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=c447-44c0-9327-56b&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=c447-44c0-9327-56b&match=partial
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
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can retrieve pin with name 'C447-44C0-9327-56B' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=C447-44C0-9327-56B&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=C447-44C0-9327-56B&match=ipartial
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
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can create a pin with name='d8d52572-c447-44c0-9327-56b74a6fa19c' - ✓ SUCCESS

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

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgm3cyojugy4tenzrhe2q","name":"d8d52572-c447-44c0-9327-56b74a6fa19c"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548782',
  status: 'queued',
  created: '2022-06-01T21:47:45.424832802Z',
  pin: {
    cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
    name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548782',
  status: 'queued',
  created: 2022-06-01T21:47:45.424Z,
  pin: {
    cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
    name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548782",
  "status": "queued",
  "created": "2022-06-01T21:47:45.424832802Z",
  "pin": {
    "cid": "baeaaadjsgm3cyojugy4tenzrhe2q",
    "name": "d8d52572-c447-44c0-9327-56b74a6fa19c",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjqgyzdqobwga2a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjqgyzdqobwga2a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548785',
  status: 'queued',
  created: '2022-06-01T21:47:50.552254929Z',
  pin: {
    cid: 'baeaaadjsgqysymjqgyzdqobwga2a',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548785',
  status: 'queued',
  created: 2022-06-01T21:47:50.552Z,
  pin: {
    cid: 'baeaaadjsgqysymjqgyzdqobwga2a',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:50 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548785",
  "status": "queued",
  "created": "2022-06-01T21:47:50.552254929Z",
  "pin": {
    "cid": "baeaaadjsgqysymjqgyzdqobwga2a",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjqg42tsnbxge3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjqg42tsnbxge3a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548788',
  status: 'queued',
  created: '2022-06-01T21:47:51.550050769Z',
  pin: {
    cid: 'baeaaadjsgqysymjqg42tsnbxge3a',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548788',
  status: 'queued',
  created: 2022-06-01T21:47:51.550Z,
  pin: {
    cid: 'baeaaadjsgqysymjqg42tsnbxge3a',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:51 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548788",
  "status": "queued",
  "created": "2022-06-01T21:47:51.550050769Z",
  "pin": {
    "cid": "baeaaadjsgqysymjqg42tsnbxge3a",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjqhaztenzwgizq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjqhaztenzwgizq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548792',
  status: 'queued',
  created: '2022-06-01T21:47:52.554319554Z',
  pin: {
    cid: 'baeaaadjsgqysymjqhaztenzwgizq',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548792',
  status: 'queued',
  created: 2022-06-01T21:47:52.554Z,
  pin: {
    cid: 'baeaaadjsgqysymjqhaztenzwgizq',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:52 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548792",
  "status": "queued",
  "created": "2022-06-01T21:47:52.554319554Z",
  "pin": {
    "cid": "baeaaadjsgqysymjqhaztenzwgizq",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjqha4tambxgi4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjqha4tambxgi4q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548793',
  status: 'queued',
  created: '2022-06-01T21:47:53.553271693Z',
  pin: {
    cid: 'baeaaadjsgqysymjqha4tambxgi4q',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548793',
  status: 'queued',
  created: 2022-06-01T21:47:53.553Z,
  pin: {
    cid: 'baeaaadjsgqysymjqha4tambxgi4q',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:53 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548793",
  "status": "queued",
  "created": "2022-06-01T21:47:53.553271693Z",
  "pin": {
    "cid": "baeaaadjsgqysymjqha4tambxgi4q",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjqhe3dqnbugm3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjqhe3dqnbugm3a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548796',
  status: 'queued',
  created: '2022-06-01T21:47:54.549842255Z',
  pin: {
    cid: 'baeaaadjsgqysymjqhe3dqnbugm3a',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548796',
  status: 'queued',
  created: 2022-06-01T21:47:54.549Z,
  pin: {
    cid: 'baeaaadjsgqysymjqhe3dqnbugm3a',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:54 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548796",
  "status": "queued",
  "created": "2022-06-01T21:47:54.549842255Z",
  "pin": {
    "cid": "baeaaadjsgqysymjqhe3dqnbugm3a",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjrgazdoojxgqza' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjrgazdoojxgqza"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548800',
  status: 'queued',
  created: '2022-06-01T21:47:55.556726088Z',
  pin: {
    cid: 'baeaaadjsgqysymjrgazdoojxgqza',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548800',
  status: 'queued',
  created: 2022-06-01T21:47:55.556Z,
  pin: {
    cid: 'baeaaadjsgqysymjrgazdoojxgqza',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:55 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548800",
  "status": "queued",
  "created": "2022-06-01T21:47:55.556726088Z",
  "pin": {
    "cid": "baeaaadjsgqysymjrgazdoojxgqza",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjrga4dknbsgq3q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjrga4dknbsgq3q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548801',
  status: 'queued',
  created: '2022-06-01T21:47:56.556775382Z',
  pin: {
    cid: 'baeaaadjsgqysymjrga4dknbsgq3q',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548801',
  status: 'queued',
  created: 2022-06-01T21:47:56.556Z,
  pin: {
    cid: 'baeaaadjsgqysymjrga4dknbsgq3q',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:56 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548801",
  "status": "queued",
  "created": "2022-06-01T21:47:56.556775382Z",
  "pin": {
    "cid": "baeaaadjsgqysymjrga4dknbsgq3q",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjrgeztqnjwguzq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjrgeztqnjwguzq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548802',
  status: 'queued',
  created: '2022-06-01T21:47:57.554451342Z',
  pin: {
    cid: 'baeaaadjsgqysymjrgeztqnjwguzq',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548802',
  status: 'queued',
  created: 2022-06-01T21:47:57.554Z,
  pin: {
    cid: 'baeaaadjsgqysymjrgeztqnjwguzq',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:57 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548802",
  "status": "queued",
  "created": "2022-06-01T21:47:57.554451342Z",
  "pin": {
    "cid": "baeaaadjsgqysymjrgeztqnjwguzq",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjrgiydimjugu4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjrgiydimjugu4q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548803',
  status: 'queued',
  created: '2022-06-01T21:47:58.554655825Z',
  pin: {
    cid: 'baeaaadjsgqysymjrgiydimjugu4q',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548803',
  status: 'queued',
  created: 2022-06-01T21:47:58.554Z,
  pin: {
    cid: 'baeaaadjsgqysymjrgiydimjugu4q',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:58 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548803",
  "status": "queued",
  "created": "2022-06-01T21:47:58.554655825Z",
  "pin": {
    "cid": "baeaaadjsgqysymjrgiydimjugu4q",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjrgi3dgobwgy2a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjrgi3dgobwgy2a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548804',
  status: 'queued',
  created: '2022-06-01T21:47:59.558722993Z',
  pin: {
    cid: 'baeaaadjsgqysymjrgi3dgobwgy2a',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548804',
  status: 'queued',
  created: 2022-06-01T21:47:59.558Z,
  pin: {
    cid: 'baeaaadjsgqysymjrgi3dgobwgy2a',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:59 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548804",
  "status": "queued",
  "created": "2022-06-01T21:47:59.558722993Z",
  "pin": {
    "cid": "baeaaadjsgqysymjrgi3dgobwgy2a",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgqysymjrgmytkobxgy4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsgqysymjrgmytkobxgy4q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30548806',
  status: 'queued',
  created: '2022-06-01T21:48:00.55802094Z',
  pin: {
    cid: 'baeaaadjsgqysymjrgmytkobxgy4q',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30548806',
  status: 'queued',
  created: 2022-06-01T21:48:00.558Z,
  pin: {
    cid: 'baeaaadjsgqysymjrgmytkobxgy4q',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "281",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:00 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30548806",
  "status": "queued",
  "created": "2022-06-01T21:48:00.55802094Z",
  "pin": {
    "cid": "baeaaadjsgqysymjrgmytkobxgy4q",
    "name": "",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
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

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 15,
  results: [
    {
      requestid: '30548806',
      status: 'failed',
      created: '2022-06-01T21:48:00.55802094Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgmytkobxgy4q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548804',
      status: 'failed',
      created: '2022-06-01T21:47:59.558722993Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgi3dgobwgy2a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548803',
      status: 'failed',
      created: '2022-06-01T21:47:58.554655825Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgiydimjugu4q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548802',
      status: 'failed',
      created: '2022-06-01T21:47:57.554451342Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgeztqnjwguzq',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548801',
      status: 'failed',
      created: '2022-06-01T21:47:56.556775382Z',
      pin: {
        cid: 'baeaaadjsgqysymjrga4dknbsgq3q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548800',
      status: 'failed',
      created: '2022-06-01T21:47:55.556726088Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgazdoojxgqza',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548796',
      status: 'failed',
      created: '2022-06-01T21:47:54.549842255Z',
      pin: {
        cid: 'baeaaadjsgqysymjqhe3dqnbugm3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548793',
      status: 'failed',
      created: '2022-06-01T21:47:53.553271693Z',
      pin: {
        cid: 'baeaaadjsgqysymjqha4tambxgi4q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548792',
      status: 'failed',
      created: '2022-06-01T21:47:52.554319554Z',
      pin: {
        cid: 'baeaaadjsgqysymjqhaztenzwgizq',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548788',
      status: 'failed',
      created: '2022-06-01T21:47:51.550050769Z',
      pin: {
        cid: 'baeaaadjsgqysymjqg42tsnbxge3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548785',
      status: 'failed',
      created: '2022-06-01T21:47:50.552254929Z',
      pin: {
        cid: 'baeaaadjsgqysymjqgyzdqobwga2a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548782',
      status: 'failed',
      created: '2022-06-01T21:47:45.424832802Z',
      pin: {
        cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
        name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548775',
      status: 'failed',
      created: '2022-06-01T21:47:43.387045481Z',
      pin: {
        cid: 'baeaaadbsgm2cynrrgazdinbtgi',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548767',
      status: 'failed',
      created: '2022-06-01T21:47:42.506438916Z',
      pin: {
        cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548765',
      status: 'failed',
      created: '2022-06-01T21:47:39.279806408Z',
      pin: {
        cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
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
      requestid: '30548806',
      status: 'failed',
      created: 2022-06-01T21:48:00.558Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgmytkobxgy4q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548804',
      status: 'failed',
      created: 2022-06-01T21:47:59.558Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgi3dgobwgy2a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548803',
      status: 'failed',
      created: 2022-06-01T21:47:58.554Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgiydimjugu4q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548802',
      status: 'failed',
      created: 2022-06-01T21:47:57.554Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgeztqnjwguzq',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548801',
      status: 'failed',
      created: 2022-06-01T21:47:56.556Z,
      pin: {
        cid: 'baeaaadjsgqysymjrga4dknbsgq3q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548800',
      status: 'failed',
      created: 2022-06-01T21:47:55.556Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgazdoojxgqza',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548796',
      status: 'failed',
      created: 2022-06-01T21:47:54.549Z,
      pin: {
        cid: 'baeaaadjsgqysymjqhe3dqnbugm3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548793',
      status: 'failed',
      created: 2022-06-01T21:47:53.553Z,
      pin: {
        cid: 'baeaaadjsgqysymjqha4tambxgi4q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548792',
      status: 'failed',
      created: 2022-06-01T21:47:52.554Z,
      pin: {
        cid: 'baeaaadjsgqysymjqhaztenzwgizq',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548788',
      status: 'failed',
      created: 2022-06-01T21:47:51.550Z,
      pin: {
        cid: 'baeaaadjsgqysymjqg42tsnbxge3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548785',
      status: 'failed',
      created: 2022-06-01T21:47:50.552Z,
      pin: {
        cid: 'baeaaadjsgqysymjqgyzdqobwga2a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548782',
      status: 'failed',
      created: 2022-06-01T21:47:45.424Z,
      pin: {
        cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
        name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548775',
      status: 'failed',
      created: 2022-06-01T21:47:43.387Z,
      pin: {
        cid: 'baeaaadbsgm2cynrrgazdinbtgi',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548767',
      status: 'failed',
      created: 2022-06-01T21:47:42.506Z,
      pin: {
        cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548765',
      status: 'failed',
      created: 2022-06-01T21:47:39.279Z,
      pin: {
        cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:01 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "30548806",
      "status": "failed",
      "created": "2022-06-01T21:48:00.55802094Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgmytkobxgy4q",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548804",
      "status": "failed",
      "created": "2022-06-01T21:47:59.558722993Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgi3dgobwgy2a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548803",
      "status": "failed",
      "created": "2022-06-01T21:47:58.554655825Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgiydimjugu4q",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548802",
      "status": "failed",
      "created": "2022-06-01T21:47:57.554451342Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgeztqnjwguzq",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548801",
      "status": "failed",
      "created": "2022-06-01T21:47:56.556775382Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrga4dknbsgq3q",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548800",
      "status": "failed",
      "created": "2022-06-01T21:47:55.556726088Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgazdoojxgqza",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548796",
      "status": "failed",
      "created": "2022-06-01T21:47:54.549842255Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqhe3dqnbugm3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548793",
      "status": "failed",
      "created": "2022-06-01T21:47:53.553271693Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqha4tambxgi4q",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548792",
      "status": "failed",
      "created": "2022-06-01T21:47:52.554319554Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqhaztenzwgizq",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548788",
      "status": "failed",
      "created": "2022-06-01T21:47:51.550050769Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqg42tsnbxge3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548785",
      "status": "failed",
      "created": "2022-06-01T21:47:50.552254929Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqgyzdqobwga2a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548782",
      "status": "failed",
      "created": "2022-06-01T21:47:45.424832802Z",
      "pin": {
        "cid": "baeaaadjsgm3cyojugy4tenzrhe2q",
        "name": "d8d52572-c447-44c0-9327-56b74a6fa19c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548775",
      "status": "failed",
      "created": "2022-06-01T21:47:43.387045481Z",
      "pin": {
        "cid": "baeaaadbsgm2cynrrgazdinbtgi",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548767",
      "status": "failed",
      "created": "2022-06-01T21:47:42.506438916Z",
      "pin": {
        "cid": "baeaaadjsgmzsymrygaydsmbzgy3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548765",
      "status": "failed",
      "created": "2022-06-01T21:47:39.279806408Z",
      "pin": {
        "cid": "baeaaadjsgi4syobtgq3tmnzrgy3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
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

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A47%3A39.279Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A47%3A39.279Z
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
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:01 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
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

### Expectations (30/32 successful)

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

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 4,
  results: [
    {
      requestid: '30548782',
      status: 'failed',
      created: '2022-06-01T21:47:45.424832802Z',
      pin: {
        cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
        name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548775',
      status: 'failed',
      created: '2022-06-01T21:47:43.387045481Z',
      pin: {
        cid: 'baeaaadbsgm2cynrrgazdinbtgi',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548767',
      status: 'failed',
      created: '2022-06-01T21:47:42.506438916Z',
      pin: {
        cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548765',
      status: 'failed',
      created: '2022-06-01T21:47:39.279806408Z',
      pin: {
        cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 4,
  results: Set(4) {
    {
      requestid: '30548782',
      status: 'failed',
      created: 2022-06-01T21:47:45.424Z,
      pin: {
        cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
        name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548775',
      status: 'failed',
      created: 2022-06-01T21:47:43.387Z,
      pin: {
        cid: 'baeaaadbsgm2cynrrgazdinbtgi',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548767',
      status: 'failed',
      created: 2022-06-01T21:47:42.506Z,
      pin: {
        cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548765',
      status: 'failed',
      created: 2022-06-01T21:47:39.279Z,
      pin: {
        cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "1186",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:47:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 4,
  "results": [
    {
      "requestid": "30548782",
      "status": "failed",
      "created": "2022-06-01T21:47:45.424832802Z",
      "pin": {
        "cid": "baeaaadjsgm3cyojugy4tenzrhe2q",
        "name": "d8d52572-c447-44c0-9327-56b74a6fa19c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548775",
      "status": "failed",
      "created": "2022-06-01T21:47:43.387045481Z",
      "pin": {
        "cid": "baeaaadbsgm2cynrrgazdinbtgi",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548767",
      "status": "failed",
      "created": "2022-06-01T21:47:42.506438916Z",
      "pin": {
        "cid": "baeaaadjsgmzsymrygaydsmbzgy3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548765",
      "status": "failed",
      "created": "2022-06-01T21:47:39.279806408Z",
      "pin": {
        "cid": "baeaaadjsgi4syobtgq3tmnzrgy3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    }
  ]
}
```
## Can delete pin with requestid '30548806' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548806

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548806
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:03 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548804' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548804

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548804
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:04 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548803' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548803

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548803
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:05 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548802' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548802

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548802
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:06 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548801' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548801

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548801
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:07 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548800' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548800

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548800
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:08 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548796' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548796

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548796
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:09 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548793' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548793

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548793
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:10 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548792' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548792

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548792
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:11 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548788' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548788

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548788
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:12 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548785' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548785

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548785
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:13 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548782' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548782

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548782
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:14 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548775' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548775

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548775
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:15 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548767' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548767

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548767
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30548765' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)

  ✘ Response code is 202 (failure)


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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30548765

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30548765
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
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:48:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Call pinsGet after deletions - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Final pinsGet call returns a count of zero (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
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

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 15,
  results: [
    {
      requestid: '30548806',
      status: 'failed',
      created: '2022-06-01T21:48:00.55802094Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgmytkobxgy4q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548804',
      status: 'failed',
      created: '2022-06-01T21:47:59.558722993Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgi3dgobwgy2a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548803',
      status: 'failed',
      created: '2022-06-01T21:47:58.554655825Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgiydimjugu4q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548802',
      status: 'failed',
      created: '2022-06-01T21:47:57.554451342Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgeztqnjwguzq',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548801',
      status: 'failed',
      created: '2022-06-01T21:47:56.556775382Z',
      pin: {
        cid: 'baeaaadjsgqysymjrga4dknbsgq3q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548800',
      status: 'failed',
      created: '2022-06-01T21:47:55.556726088Z',
      pin: {
        cid: 'baeaaadjsgqysymjrgazdoojxgqza',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548796',
      status: 'failed',
      created: '2022-06-01T21:47:54.549842255Z',
      pin: {
        cid: 'baeaaadjsgqysymjqhe3dqnbugm3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548793',
      status: 'failed',
      created: '2022-06-01T21:47:53.553271693Z',
      pin: {
        cid: 'baeaaadjsgqysymjqha4tambxgi4q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548792',
      status: 'failed',
      created: '2022-06-01T21:47:52.554319554Z',
      pin: {
        cid: 'baeaaadjsgqysymjqhaztenzwgizq',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548788',
      status: 'failed',
      created: '2022-06-01T21:47:51.550050769Z',
      pin: {
        cid: 'baeaaadjsgqysymjqg42tsnbxge3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548785',
      status: 'failed',
      created: '2022-06-01T21:47:50.552254929Z',
      pin: {
        cid: 'baeaaadjsgqysymjqgyzdqobwga2a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548782',
      status: 'failed',
      created: '2022-06-01T21:47:45.424832802Z',
      pin: {
        cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
        name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548775',
      status: 'failed',
      created: '2022-06-01T21:47:43.387045481Z',
      pin: {
        cid: 'baeaaadbsgm2cynrrgazdinbtgi',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548767',
      status: 'failed',
      created: '2022-06-01T21:47:42.506438916Z',
      pin: {
        cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30548765',
      status: 'failed',
      created: '2022-06-01T21:47:39.279806408Z',
      pin: {
        cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
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
      requestid: '30548806',
      status: 'failed',
      created: 2022-06-01T21:48:00.558Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgmytkobxgy4q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548804',
      status: 'failed',
      created: 2022-06-01T21:47:59.558Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgi3dgobwgy2a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548803',
      status: 'failed',
      created: 2022-06-01T21:47:58.554Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgiydimjugu4q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548802',
      status: 'failed',
      created: 2022-06-01T21:47:57.554Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgeztqnjwguzq',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548801',
      status: 'failed',
      created: 2022-06-01T21:47:56.556Z,
      pin: {
        cid: 'baeaaadjsgqysymjrga4dknbsgq3q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548800',
      status: 'failed',
      created: 2022-06-01T21:47:55.556Z,
      pin: {
        cid: 'baeaaadjsgqysymjrgazdoojxgqza',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548796',
      status: 'failed',
      created: 2022-06-01T21:47:54.549Z,
      pin: {
        cid: 'baeaaadjsgqysymjqhe3dqnbugm3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548793',
      status: 'failed',
      created: 2022-06-01T21:47:53.553Z,
      pin: {
        cid: 'baeaaadjsgqysymjqha4tambxgi4q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548792',
      status: 'failed',
      created: 2022-06-01T21:47:52.554Z,
      pin: {
        cid: 'baeaaadjsgqysymjqhaztenzwgizq',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548788',
      status: 'failed',
      created: 2022-06-01T21:47:51.550Z,
      pin: {
        cid: 'baeaaadjsgqysymjqg42tsnbxge3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548785',
      status: 'failed',
      created: 2022-06-01T21:47:50.552Z,
      pin: {
        cid: 'baeaaadjsgqysymjqgyzdqobwga2a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548782',
      status: 'failed',
      created: 2022-06-01T21:47:45.424Z,
      pin: {
        cid: 'baeaaadjsgm3cyojugy4tenzrhe2q',
        name: 'd8d52572-c447-44c0-9327-56b74a6fa19c',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548775',
      status: 'failed',
      created: 2022-06-01T21:47:43.387Z,
      pin: {
        cid: 'baeaaadbsgm2cynrrgazdinbtgi',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548767',
      status: 'failed',
      created: 2022-06-01T21:47:42.506Z,
      pin: {
        cid: 'baeaaadjsgmzsymrygaydsmbzgy3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30548765',
      status: 'failed',
      created: 2022-06-01T21:47:39.279Z,
      pin: {
        cid: 'baeaaadjsgi4syobtgq3tmnzrgy3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:48:02 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "30548806",
      "status": "failed",
      "created": "2022-06-01T21:48:00.55802094Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgmytkobxgy4q",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548804",
      "status": "failed",
      "created": "2022-06-01T21:47:59.558722993Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgi3dgobwgy2a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548803",
      "status": "failed",
      "created": "2022-06-01T21:47:58.554655825Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgiydimjugu4q",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548802",
      "status": "failed",
      "created": "2022-06-01T21:47:57.554451342Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgeztqnjwguzq",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548801",
      "status": "failed",
      "created": "2022-06-01T21:47:56.556775382Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrga4dknbsgq3q",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548800",
      "status": "failed",
      "created": "2022-06-01T21:47:55.556726088Z",
      "pin": {
        "cid": "baeaaadjsgqysymjrgazdoojxgqza",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548796",
      "status": "failed",
      "created": "2022-06-01T21:47:54.549842255Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqhe3dqnbugm3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548793",
      "status": "failed",
      "created": "2022-06-01T21:47:53.553271693Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqha4tambxgi4q",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548792",
      "status": "failed",
      "created": "2022-06-01T21:47:52.554319554Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqhaztenzwgizq",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548788",
      "status": "failed",
      "created": "2022-06-01T21:47:51.550050769Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqg42tsnbxge3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548785",
      "status": "failed",
      "created": "2022-06-01T21:47:50.552254929Z",
      "pin": {
        "cid": "baeaaadjsgqysymjqgyzdqobwga2a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548782",
      "status": "failed",
      "created": "2022-06-01T21:47:45.424832802Z",
      "pin": {
        "cid": "baeaaadjsgm3cyojugy4tenzrhe2q",
        "name": "d8d52572-c447-44c0-9327-56b74a6fa19c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548775",
      "status": "failed",
      "created": "2022-06-01T21:47:43.387045481Z",
      "pin": {
        "cid": "baeaaadbsgm2cynrrgazdinbtgi",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548767",
      "status": "failed",
      "created": "2022-06-01T21:47:42.506438916Z",
      "pin": {
        "cid": "baeaaadjsgmzsymrygaydsmbzgy3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30548765",
      "status": "failed",
      "created": "2022-06-01T21:47:39.279806408Z",
      "pin": {
        "cid": "baeaaadjsgi4syobtgq3tmnzrgy3a",
        "name": "",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    }
  ]
}
```
