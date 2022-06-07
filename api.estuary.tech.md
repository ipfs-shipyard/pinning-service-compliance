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
  "date": "Tue, 07 Jun 2022 00:39:49 GMT",
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
  "date": "Tue, 07 Jun 2022 00:39:49 GMT",
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
## Pins post of CID 'baeaaadjsgq3symrrgu3dgnzxguzq' - ✘ FAILED

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
{"cid":"baeaaadjsgq3symrrgu3dgnzxguzq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874914',
  status: 'queued',
  created: '2022-06-07T00:39:50.99739332Z',
  pin: {
    cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  requestid: '30874914',
  status: 'queued',
  created: 2022-06-07T00:39:50.997Z,
  pin: {
    cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  "date": "Tue, 07 Jun 2022 00:39:50 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874914",
  "status": "queued",
  "created": "2022-06-07T00:39:50.99739332Z",
  "pin": {
    "cid": "baeaaadjsgq3symrrgu3dgnzxguzq",
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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874915

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874915
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
  "date": "Tue, 07 Jun 2022 00:39:53 GMT",
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
{"cid":"baeaaadjsgq4cymrrg44timbsha2a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874915',
  status: 'queued',
  created: '2022-06-07T00:39:52.070346927Z',
  pin: {
    cid: 'baeaaadjsgq4cymrrg44timbsha2a',
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
  requestid: '30874915',
  status: 'queued',
  created: 2022-06-07T00:39:52.070Z,
  pin: {
    cid: 'baeaaadjsgq4cymrrg44timbsha2a',
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
  "date": "Tue, 07 Jun 2022 00:39:52 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874915",
  "status": "queued",
  "created": "2022-06-07T00:39:52.070346927Z",
  "pin": {
    "cid": "baeaaadjsgq4cymrrg44timbsha2a",
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
      requestid: '30874914',
      status: 'failed',
      created: '2022-06-07T00:39:50.99739332Z',
      pin: {
        cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
      requestid: '30874914',
      status: 'failed',
      created: 2022-06-07T00:39:50.997Z,
      pin: {
        cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  "content-length": "305",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:39:53 GMT",
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
      "requestid": "30874914",
      "status": "failed",
      "created": "2022-06-07T00:39:50.99739332Z",
      "pin": {
        "cid": "baeaaadjsgq3symrrgu3dgnzxguzq",
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

#### Request - GET: https://api.estuary.tech/pinning/pins/30874916

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874916
```
{
  requestid: '30874916',
  status: 'failed',
  created: '2022-06-07T00:39:54.195547773Z',
  pin: {
    cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
  requestid: '30874916',
  status: 'failed',
  created: 2022-06-07T00:39:54.195Z,
  pin: {
    cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
  "date": "Tue, 07 Jun 2022 00:39:56 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874916",
  "status": "failed",
  "created": "2022-06-07T00:39:54.195547773Z",
  "pin": {
    "cid": "baeaaadjsguycynbsgq3donrqg4yq",
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

#### Request - GET: https://api.estuary.tech/pinning/pins/30874917

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874917
```
{
  requestid: '30874917',
  status: 'failed',
  created: '2022-06-07T00:39:55.197875891Z',
  pin: {
    cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
  requestid: '30874917',
  status: 'failed',
  created: 2022-06-07T00:39:55.197Z,
  pin: {
    cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
  "date": "Tue, 07 Jun 2022 00:39:57 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874917",
  "status": "failed",
  "created": "2022-06-07T00:39:55.197875891Z",
  "pin": {
    "cid": "baeaaadjsguysynbrgaytiobrg4ya",
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
## Pin's with requestid '30874916' can have cid 'baeaaadjsguycynbsgq3donrqg4yq' replaced with 'baeaaadjsguysynbrgaytiobrg4ya' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins/30874916

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjsguysynbrgaytiobrg4ya"}
```
#### Response data from https://api.estuary.tech/pinning/pins/30874916
```
{
  requestid: '30874917',
  status: 'queued',
  created: '2022-06-07T00:39:55.197875891Z',
  pin: {
    cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
  requestid: '30874917',
  status: 'queued',
  created: 2022-06-07T00:39:55.197Z,
  pin: {
    cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
  "date": "Tue, 07 Jun 2022 00:39:55 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874917",
  "status": "queued",
  "created": "2022-06-07T00:39:55.197875891Z",
  "pin": {
    "cid": "baeaaadjsguysynbrgaytiobrg4ya",
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

  ✓ Could obtain requestid from new pin (30874916) (success)

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
{"cid":"baeaaadjsguycynbsgq3donrqg4yq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874916',
  status: 'queued',
  created: '2022-06-07T00:39:54.195547773Z',
  pin: {
    cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
  requestid: '30874916',
  status: 'queued',
  created: 2022-06-07T00:39:54.195Z,
  pin: {
    cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
  "date": "Tue, 07 Jun 2022 00:39:54 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874916",
  "status": "queued",
  "created": "2022-06-07T00:39:54.195547773Z",
  "pin": {
    "cid": "baeaaadjsguycynbsgq3donrqg4yq",
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
## Can retrieve pin with name '4acc4596-4188-4fa3-8d2a-a693524c0d35' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=4acc4596-4188-4fa3-8d2a-a693524c0d35&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=4acc4596-4188-4fa3-8d2a-a693524c0d35&match=exact
```
{
  count: 1,
  results: [
    {
      requestid: '30874919',
      status: 'failed',
      created: '2022-06-07T00:39:57.259620644Z',
      pin: {
        cid: 'baeaaadjsgu2cynbrgi4demzuheza',
        name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
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
      requestid: '30874919',
      status: 'failed',
      created: 2022-06-07T00:39:57.259Z,
      pin: {
        cid: 'baeaaadjsgu2cynbrgi4demzuheza',
        name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
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
  "date": "Tue, 07 Jun 2022 00:39:58 GMT",
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
      "requestid": "30874919",
      "status": "failed",
      "created": "2022-06-07T00:39:57.259620644Z",
      "pin": {
        "cid": "baeaaadjsgu2cynbrgi4demzuheza",
        "name": "4acc4596-4188-4fa3-8d2a-a693524c0d35",
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
## Can retrieve pin with name '4ACC4596-4188-4FA3-8D2A-A693524C0D35' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=4ACC4596-4188-4FA3-8D2A-A693524C0D35&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=4ACC4596-4188-4FA3-8D2A-A693524C0D35&match=iexact
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
  "date": "Tue, 07 Jun 2022 00:39:59 GMT",
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
## Can retrieve pin with name '4188-4fa3-8d2a-a69' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=4188-4fa3-8d2a-a69&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=4188-4fa3-8d2a-a69&match=partial
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
  "date": "Tue, 07 Jun 2022 00:40:00 GMT",
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
## Can retrieve pin with name '4188-4FA3-8D2A-A69' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=4188-4FA3-8D2A-A69&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=4188-4FA3-8D2A-A69&match=ipartial
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
  "date": "Tue, 07 Jun 2022 00:40:01 GMT",
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
## Can create a pin with name='4acc4596-4188-4fa3-8d2a-a693524c0d35' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu2cynbrgi4demzuheza","name":"4acc4596-4188-4fa3-8d2a-a693524c0d35"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874919',
  status: 'queued',
  created: '2022-06-07T00:39:57.259620644Z',
  pin: {
    cid: 'baeaaadjsgu2cynbrgi4demzuheza',
    name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
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
  requestid: '30874919',
  status: 'queued',
  created: 2022-06-07T00:39:57.259Z,
  pin: {
    cid: 'baeaaadjsgu2cynbrgi4demzuheza',
    name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
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
  "date": "Tue, 07 Jun 2022 00:39:57 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874919",
  "status": "queued",
  "created": "2022-06-07T00:39:57.259620644Z",
  "pin": {
    "cid": "baeaaadjsgu2cynbrgi4demzuheza",
    "name": "4acc4596-4188-4fa3-8d2a-a693524c0d35",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjuge3tqojwguyq' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjuge3tqojwguyq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874928',
  status: 'queued',
  created: '2022-06-07T00:40:02.325693362Z',
  pin: {
    cid: 'baeaaadjsgu4cynjuge3tqojwguyq',
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
  requestid: '30874928',
  status: 'queued',
  created: 2022-06-07T00:40:02.325Z,
  pin: {
    cid: 'baeaaadjsgu4cynjuge3tqojwguyq',
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
  "date": "Tue, 07 Jun 2022 00:40:02 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874928",
  "status": "queued",
  "created": "2022-06-07T00:40:02.325693362Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjuge3tqojwguyq",
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
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjugiztonjvgq2a' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjugiztonjvgq2a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874929',
  status: 'queued',
  created: '2022-06-07T00:40:03.324243519Z',
  pin: {
    cid: 'baeaaadjsgu4cynjugiztonjvgq2a',
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
  requestid: '30874929',
  status: 'queued',
  created: 2022-06-07T00:40:03.324Z,
  pin: {
    cid: 'baeaaadjsgu4cynjugiztonjvgq2a',
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
  "date": "Tue, 07 Jun 2022 00:40:03 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874929",
  "status": "queued",
  "created": "2022-06-07T00:40:03.324243519Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjugiztonjvgq2a",
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
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjugi4dambygm4a' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjugi4dambygm4a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874932',
  status: 'queued',
  created: '2022-06-07T00:40:04.323740078Z',
  pin: {
    cid: 'baeaaadjsgu4cynjugi4dambygm4a',
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
  requestid: '30874932',
  status: 'queued',
  created: 2022-06-07T00:40:04.323Z,
  pin: {
    cid: 'baeaaadjsgu4cynjugi4dambygm4a',
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
  "date": "Tue, 07 Jun 2022 00:40:04 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874932",
  "status": "queued",
  "created": "2022-06-07T00:40:04.323740078Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjugi4dambygm4a",
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
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjugmzdemrzgmzq' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjugmzdemrzgmzq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874934',
  status: 'queued',
  created: '2022-06-07T00:40:05.325002779Z',
  pin: {
    cid: 'baeaaadjsgu4cynjugmzdemrzgmzq',
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
  requestid: '30874934',
  status: 'queued',
  created: 2022-06-07T00:40:05.325Z,
  pin: {
    cid: 'baeaaadjsgu4cynjugmzdemrzgmzq',
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
  "date": "Tue, 07 Jun 2022 00:40:05 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874934",
  "status": "queued",
  "created": "2022-06-07T00:40:05.325002779Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjugmzdemrzgmzq",
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
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjugm3tombvgi3a' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjugm3tombvgi3a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874935',
  status: 'queued',
  created: '2022-06-07T00:40:06.325956507Z',
  pin: {
    cid: 'baeaaadjsgu4cynjugm3tombvgi3a',
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
  requestid: '30874935',
  status: 'queued',
  created: 2022-06-07T00:40:06.325Z,
  pin: {
    cid: 'baeaaadjsgu4cynjugm3tombvgi3a',
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
  "date": "Tue, 07 Jun 2022 00:40:06 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874935",
  "status": "queued",
  "created": "2022-06-07T00:40:06.325956507Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjugm3tombvgi3a",
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
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjugqytmmrrgiyq' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjugqytmmrrgiyq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874936',
  status: 'queued',
  created: '2022-06-07T00:40:07.328364879Z',
  pin: {
    cid: 'baeaaadjsgu4cynjugqytmmrrgiyq',
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
  requestid: '30874936',
  status: 'queued',
  created: 2022-06-07T00:40:07.328Z,
  pin: {
    cid: 'baeaaadjsgu4cynjugqytmmrrgiyq',
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
  "date": "Tue, 07 Jun 2022 00:40:07 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874936",
  "status": "queued",
  "created": "2022-06-07T00:40:07.328364879Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjugqytmmrrgiyq",
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
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjugq2tanzrge3q' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjugq2tanzrge3q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874938',
  status: 'queued',
  created: '2022-06-07T00:40:08.334751018Z',
  pin: {
    cid: 'baeaaadjsgu4cynjugq2tanzrge3q',
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
  requestid: '30874938',
  status: 'queued',
  created: 2022-06-07T00:40:08.334Z,
  pin: {
    cid: 'baeaaadjsgu4cynjugq2tanzrge3q',
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
  "date": "Tue, 07 Jun 2022 00:40:08 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874938",
  "status": "queued",
  "created": "2022-06-07T00:40:08.334751018Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjugq2tanzrge3q",
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
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjugq4dgobygezq' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjugq4dgobygezq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874940',
  status: 'queued',
  created: '2022-06-07T00:40:09.328746463Z',
  pin: {
    cid: 'baeaaadjsgu4cynjugq4dgobygezq',
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
  requestid: '30874940',
  status: 'queued',
  created: 2022-06-07T00:40:09.328Z,
  pin: {
    cid: 'baeaaadjsgu4cynjugq4dgobygezq',
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
  "date": "Tue, 07 Jun 2022 00:40:09 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874940",
  "status": "queued",
  "created": "2022-06-07T00:40:09.328746463Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjugq4dgobygezq",
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
## Can create new pin for testing pagination cid='baeaaadjsgu4cynjuguztcmbxga3q' - ✓ SUCCESS

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
{"cid":"baeaaadjsgu4cynjuguztcmbxga3q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30874941',
  status: 'queued',
  created: '2022-06-07T00:40:10.328900082Z',
  pin: {
    cid: 'baeaaadjsgu4cynjuguztcmbxga3q',
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
  requestid: '30874941',
  status: 'queued',
  created: 2022-06-07T00:40:10.328Z,
  pin: {
    cid: 'baeaaadjsgu4cynjuguztcmbxga3q',
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
  "date": "Tue, 07 Jun 2022 00:40:10 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "30874941",
  "status": "queued",
  "created": "2022-06-07T00:40:10.328900082Z",
  "pin": {
    "cid": "baeaaadjsgu4cynjuguztcmbxga3q",
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
  count: 18,
  results: [
    {
      requestid: '30874941',
      status: 'failed',
      created: '2022-06-07T00:40:10.328900082Z',
      pin: {
        cid: 'baeaaadjsgu4cynjuguztcmbxga3q',
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
      requestid: '30874940',
      status: 'failed',
      created: '2022-06-07T00:40:09.328746463Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugq4dgobygezq',
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
      requestid: '30874939',
      status: 'failed',
      created: '2022-06-07T00:40:08.779406403Z',
      pin: {
        cid: 'baeaaadjrheysynrxga2dcmbsgyza',
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
      requestid: '30874938',
      status: 'failed',
      created: '2022-06-07T00:40:08.334751018Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugq2tanzrge3q',
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
      requestid: '30874936',
      status: 'failed',
      created: '2022-06-07T00:40:07.328364879Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugqytmmrrgiyq',
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
      requestid: '30874935',
      status: 'failed',
      created: '2022-06-07T00:40:06.325956507Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugm3tombvgi3a',
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
      requestid: '30874934',
      status: 'failed',
      created: '2022-06-07T00:40:05.325002779Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugmzdemrzgmzq',
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
      requestid: '30874932',
      status: 'failed',
      created: '2022-06-07T00:40:04.323740078Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugi4dambygm4a',
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
      requestid: '30874931',
      status: 'failed',
      created: '2022-06-07T00:40:03.650886816Z',
      pin: {
        cid: 'baeaaadjrha3synbsgm4dmmbqgq2a',
        name: 'ad57d87e-ae1c-45ed-8a13-7b973a0855b7',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30874929',
      status: 'failed',
      created: '2022-06-07T00:40:03.324243519Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugiztonjvgq2a',
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
      requestid: '30874928',
      status: 'failed',
      created: '2022-06-07T00:40:02.325693362Z',
      pin: {
        cid: 'baeaaadjsgu4cynjuge3tqojwguyq',
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
      requestid: '30874927',
      status: 'failed',
      created: '2022-06-07T00:40:01.58195483Z',
      pin: {
        cid: 'baeaaadjrha2cynbxhe3donjsgmyq',
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
      requestid: '30874926',
      status: 'failed',
      created: '2022-06-07T00:40:00.591919984Z',
      pin: {
        cid: 'baeaaadjrhazsynbtga2dgmzzgu4q',
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
      requestid: '30874920',
      status: 'failed',
      created: '2022-06-07T00:39:57.571597371Z',
      pin: {
        cid: 'baeaaadjrhaycynbvgy3tomrsgi2a',
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
      requestid: '30874919',
      status: 'failed',
      created: '2022-06-07T00:39:57.259620644Z',
      pin: {
        cid: 'baeaaadjsgu2cynbrgi4demzuheza',
        name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30874917',
      status: 'failed',
      created: '2022-06-07T00:39:55.197875891Z',
      pin: {
        cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
      requestid: '30874916',
      status: 'failed',
      created: '2022-06-07T00:39:54.195547773Z',
      pin: {
        cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
      requestid: '30874914',
      status: 'failed',
      created: '2022-06-07T00:39:50.99739332Z',
      pin: {
        cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  count: 18,
  results: Set(18) {
    {
      requestid: '30874941',
      status: 'failed',
      created: 2022-06-07T00:40:10.328Z,
      pin: {
        cid: 'baeaaadjsgu4cynjuguztcmbxga3q',
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
      requestid: '30874940',
      status: 'failed',
      created: 2022-06-07T00:40:09.328Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugq4dgobygezq',
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
      requestid: '30874939',
      status: 'failed',
      created: 2022-06-07T00:40:08.779Z,
      pin: {
        cid: 'baeaaadjrheysynrxga2dcmbsgyza',
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
      requestid: '30874938',
      status: 'failed',
      created: 2022-06-07T00:40:08.334Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugq2tanzrge3q',
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
      requestid: '30874936',
      status: 'failed',
      created: 2022-06-07T00:40:07.328Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugqytmmrrgiyq',
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
      requestid: '30874935',
      status: 'failed',
      created: 2022-06-07T00:40:06.325Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugm3tombvgi3a',
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
      requestid: '30874934',
      status: 'failed',
      created: 2022-06-07T00:40:05.325Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugmzdemrzgmzq',
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
      requestid: '30874932',
      status: 'failed',
      created: 2022-06-07T00:40:04.323Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugi4dambygm4a',
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
      requestid: '30874931',
      status: 'failed',
      created: 2022-06-07T00:40:03.650Z,
      pin: {
        cid: 'baeaaadjrha3synbsgm4dmmbqgq2a',
        name: 'ad57d87e-ae1c-45ed-8a13-7b973a0855b7',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30874929',
      status: 'failed',
      created: 2022-06-07T00:40:03.324Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugiztonjvgq2a',
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
      requestid: '30874928',
      status: 'failed',
      created: 2022-06-07T00:40:02.325Z,
      pin: {
        cid: 'baeaaadjsgu4cynjuge3tqojwguyq',
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
      requestid: '30874927',
      status: 'failed',
      created: 2022-06-07T00:40:01.581Z,
      pin: {
        cid: 'baeaaadjrha2cynbxhe3donjsgmyq',
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
      requestid: '30874926',
      status: 'failed',
      created: 2022-06-07T00:40:00.591Z,
      pin: {
        cid: 'baeaaadjrhazsynbtga2dgmzzgu4q',
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
      requestid: '30874920',
      status: 'failed',
      created: 2022-06-07T00:39:57.571Z,
      pin: {
        cid: 'baeaaadjrhaycynbvgy3tomrsgi2a',
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
      requestid: '30874919',
      status: 'failed',
      created: 2022-06-07T00:39:57.259Z,
      pin: {
        cid: 'baeaaadjsgu2cynbrgi4demzuheza',
        name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30874917',
      status: 'failed',
      created: 2022-06-07T00:39:55.197Z,
      pin: {
        cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
      requestid: '30874916',
      status: 'failed',
      created: 2022-06-07T00:39:54.195Z,
      pin: {
        cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
      requestid: '30874914',
      status: 'failed',
      created: 2022-06-07T00:39:50.997Z,
      pin: {
        cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  "date": "Tue, 07 Jun 2022 00:40:11 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 18,
  "results": [
    {
      "requestid": "30874941",
      "status": "failed",
      "created": "2022-06-07T00:40:10.328900082Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjuguztcmbxga3q",
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
      "requestid": "30874940",
      "status": "failed",
      "created": "2022-06-07T00:40:09.328746463Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugq4dgobygezq",
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
      "requestid": "30874939",
      "status": "failed",
      "created": "2022-06-07T00:40:08.779406403Z",
      "pin": {
        "cid": "baeaaadjrheysynrxga2dcmbsgyza",
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
      "requestid": "30874938",
      "status": "failed",
      "created": "2022-06-07T00:40:08.334751018Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugq2tanzrge3q",
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
      "requestid": "30874936",
      "status": "failed",
      "created": "2022-06-07T00:40:07.328364879Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugqytmmrrgiyq",
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
      "requestid": "30874935",
      "status": "failed",
      "created": "2022-06-07T00:40:06.325956507Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugm3tombvgi3a",
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
      "requestid": "30874934",
      "status": "failed",
      "created": "2022-06-07T00:40:05.325002779Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugmzdemrzgmzq",
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
      "requestid": "30874932",
      "status": "failed",
      "created": "2022-06-07T00:40:04.323740078Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugi4dambygm4a",
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
      "requestid": "30874931",
      "status": "failed",
      "created": "2022-06-07T00:40:03.650886816Z",
      "pin": {
        "cid": "baeaaadjrha3synbsgm4dmmbqgq2a",
        "name": "ad57d87e-ae1c-45ed-8a13-7b973a0855b7",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30874929",
      "status": "failed",
      "created": "2022-06-07T00:40:03.324243519Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugiztonjvgq2a",
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
      "requestid": "30874928",
      "status": "failed",
      "created": "2022-06-07T00:40:02.325693362Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjuge3tqojwguyq",
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
      "requestid": "30874927",
      "status": "failed",
      "created": "2022-06-07T00:40:01.58195483Z",
      "pin": {
        "cid": "baeaaadjrha2cynbxhe3donjsgmyq",
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
      "requestid": "30874926",
      "status": "failed",
      "created": "2022-06-07T00:40:00.591919984Z",
      "pin": {
        "cid": "baeaaadjrhazsynbtga2dgmzzgu4q",
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
      "requestid": "30874920",
      "status": "failed",
      "created": "2022-06-07T00:39:57.571597371Z",
      "pin": {
        "cid": "baeaaadjrhaycynbvgy3tomrsgi2a",
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
      "requestid": "30874919",
      "status": "failed",
      "created": "2022-06-07T00:39:57.259620644Z",
      "pin": {
        "cid": "baeaaadjsgu2cynbrgi4demzuheza",
        "name": "4acc4596-4188-4fa3-8d2a-a693524c0d35",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30874917",
      "status": "failed",
      "created": "2022-06-07T00:39:55.197875891Z",
      "pin": {
        "cid": "baeaaadjsguysynbrgaytiobrg4ya",
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
      "requestid": "30874916",
      "status": "failed",
      "created": "2022-06-07T00:39:54.195547773Z",
      "pin": {
        "cid": "baeaaadjsguycynbsgq3donrqg4yq",
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
      "requestid": "30874914",
      "status": "failed",
      "created": "2022-06-07T00:39:50.99739332Z",
      "pin": {
        "cid": "baeaaadjsgq3symrrgu3dgnzxguzq",
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

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T00%3A39%3A50.997Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T00%3A39%3A50.997Z
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
  "date": "Tue, 07 Jun 2022 00:40:11 GMT",
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

### Expectations (26/28 successful)

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
  count: 6,
  results: [
    {
      requestid: '30874926',
      status: 'failed',
      created: '2022-06-07T00:40:00.591919984Z',
      pin: {
        cid: 'baeaaadjrhazsynbtga2dgmzzgu4q',
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
      requestid: '30874920',
      status: 'failed',
      created: '2022-06-07T00:39:57.571597371Z',
      pin: {
        cid: 'baeaaadjrhaycynbvgy3tomrsgi2a',
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
      requestid: '30874919',
      status: 'failed',
      created: '2022-06-07T00:39:57.259620644Z',
      pin: {
        cid: 'baeaaadjsgu2cynbrgi4demzuheza',
        name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30874917',
      status: 'failed',
      created: '2022-06-07T00:39:55.197875891Z',
      pin: {
        cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
      requestid: '30874916',
      status: 'failed',
      created: '2022-06-07T00:39:54.195547773Z',
      pin: {
        cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
      requestid: '30874914',
      status: 'failed',
      created: '2022-06-07T00:39:50.99739332Z',
      pin: {
        cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  count: 6,
  results: Set(6) {
    {
      requestid: '30874926',
      status: 'failed',
      created: 2022-06-07T00:40:00.591Z,
      pin: {
        cid: 'baeaaadjrhazsynbtga2dgmzzgu4q',
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
      requestid: '30874920',
      status: 'failed',
      created: 2022-06-07T00:39:57.571Z,
      pin: {
        cid: 'baeaaadjrhaycynbvgy3tomrsgi2a',
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
      requestid: '30874919',
      status: 'failed',
      created: 2022-06-07T00:39:57.259Z,
      pin: {
        cid: 'baeaaadjsgu2cynbrgi4demzuheza',
        name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30874917',
      status: 'failed',
      created: 2022-06-07T00:39:55.197Z,
      pin: {
        cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
      requestid: '30874916',
      status: 'failed',
      created: 2022-06-07T00:39:54.195Z,
      pin: {
        cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
      requestid: '30874914',
      status: 'failed',
      created: 2022-06-07T00:39:50.997Z,
      pin: {
        cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  "content-length": "1751",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:01 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "30874926",
      "status": "failed",
      "created": "2022-06-07T00:40:00.591919984Z",
      "pin": {
        "cid": "baeaaadjrhazsynbtga2dgmzzgu4q",
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
      "requestid": "30874920",
      "status": "failed",
      "created": "2022-06-07T00:39:57.571597371Z",
      "pin": {
        "cid": "baeaaadjrhaycynbvgy3tomrsgi2a",
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
      "requestid": "30874919",
      "status": "failed",
      "created": "2022-06-07T00:39:57.259620644Z",
      "pin": {
        "cid": "baeaaadjsgu2cynbrgi4demzuheza",
        "name": "4acc4596-4188-4fa3-8d2a-a693524c0d35",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30874917",
      "status": "failed",
      "created": "2022-06-07T00:39:55.197875891Z",
      "pin": {
        "cid": "baeaaadjsguysynbrgaytiobrg4ya",
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
      "requestid": "30874916",
      "status": "failed",
      "created": "2022-06-07T00:39:54.195547773Z",
      "pin": {
        "cid": "baeaaadjsguycynbsgq3donrqg4yq",
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
      "requestid": "30874914",
      "status": "failed",
      "created": "2022-06-07T00:39:50.99739332Z",
      "pin": {
        "cid": "baeaaadjsgq3symrrgu3dgnzxguzq",
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
## Can delete pin with requestid '30874940' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874940

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874940
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:13 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874939' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874939

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874939
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:14 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874938' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874938

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874938
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:15 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874936' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874936

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874936
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874935' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874935

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874935
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874934' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874934

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874934
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874932' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874932

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874932
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874931' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874931

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874931
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874929' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874929

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874929
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874928' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874928

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874928
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874927' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874927

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874927
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874926' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874926

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874926
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874920' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874920

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874920
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874919' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874919

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874919
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874917' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874917

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874917
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874916' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874916

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874916
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
```
## Can delete pin with requestid '30874914' - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30874914

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30874914
```
{ error: { reason: 'record not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Internal Server Error (500)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 07 Jun 2022 00:40:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "error": {
    "reason": "record not found"
  }
}
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
  "date": "Tue, 07 Jun 2022 00:40:30 GMT",
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

### Expectations (1/35 successful)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✘ Response is ok (failure)

  ✘ Response code is 202 (failure)

  ✓ Final pinsGet call returns a count of zero (success)


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
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

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
  count: 17,
  results: [
    {
      requestid: '30874940',
      status: 'failed',
      created: '2022-06-07T00:40:09.328746463Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugq4dgobygezq',
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
      requestid: '30874939',
      status: 'failed',
      created: '2022-06-07T00:40:08.779406403Z',
      pin: {
        cid: 'baeaaadjrheysynrxga2dcmbsgyza',
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
      requestid: '30874938',
      status: 'failed',
      created: '2022-06-07T00:40:08.334751018Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugq2tanzrge3q',
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
      requestid: '30874936',
      status: 'failed',
      created: '2022-06-07T00:40:07.328364879Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugqytmmrrgiyq',
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
      requestid: '30874935',
      status: 'failed',
      created: '2022-06-07T00:40:06.325956507Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugm3tombvgi3a',
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
      requestid: '30874934',
      status: 'failed',
      created: '2022-06-07T00:40:05.325002779Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugmzdemrzgmzq',
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
      requestid: '30874932',
      status: 'failed',
      created: '2022-06-07T00:40:04.323740078Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugi4dambygm4a',
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
      requestid: '30874931',
      status: 'failed',
      created: '2022-06-07T00:40:03.650886816Z',
      pin: {
        cid: 'baeaaadjrha3synbsgm4dmmbqgq2a',
        name: 'ad57d87e-ae1c-45ed-8a13-7b973a0855b7',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30874929',
      status: 'failed',
      created: '2022-06-07T00:40:03.324243519Z',
      pin: {
        cid: 'baeaaadjsgu4cynjugiztonjvgq2a',
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
      requestid: '30874928',
      status: 'failed',
      created: '2022-06-07T00:40:02.325693362Z',
      pin: {
        cid: 'baeaaadjsgu4cynjuge3tqojwguyq',
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
      requestid: '30874927',
      status: 'failed',
      created: '2022-06-07T00:40:01.58195483Z',
      pin: {
        cid: 'baeaaadjrha2cynbxhe3donjsgmyq',
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
      requestid: '30874926',
      status: 'failed',
      created: '2022-06-07T00:40:00.591919984Z',
      pin: {
        cid: 'baeaaadjrhazsynbtga2dgmzzgu4q',
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
      requestid: '30874920',
      status: 'failed',
      created: '2022-06-07T00:39:57.571597371Z',
      pin: {
        cid: 'baeaaadjrhaycynbvgy3tomrsgi2a',
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
      requestid: '30874919',
      status: 'failed',
      created: '2022-06-07T00:39:57.259620644Z',
      pin: {
        cid: 'baeaaadjsgu2cynbrgi4demzuheza',
        name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30874917',
      status: 'failed',
      created: '2022-06-07T00:39:55.197875891Z',
      pin: {
        cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
      requestid: '30874916',
      status: 'failed',
      created: '2022-06-07T00:39:54.195547773Z',
      pin: {
        cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
      requestid: '30874914',
      status: 'failed',
      created: '2022-06-07T00:39:50.99739332Z',
      pin: {
        cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  count: 17,
  results: Set(17) {
    {
      requestid: '30874940',
      status: 'failed',
      created: 2022-06-07T00:40:09.328Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugq4dgobygezq',
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
      requestid: '30874939',
      status: 'failed',
      created: 2022-06-07T00:40:08.779Z,
      pin: {
        cid: 'baeaaadjrheysynrxga2dcmbsgyza',
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
      requestid: '30874938',
      status: 'failed',
      created: 2022-06-07T00:40:08.334Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugq2tanzrge3q',
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
      requestid: '30874936',
      status: 'failed',
      created: 2022-06-07T00:40:07.328Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugqytmmrrgiyq',
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
      requestid: '30874935',
      status: 'failed',
      created: 2022-06-07T00:40:06.325Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugm3tombvgi3a',
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
      requestid: '30874934',
      status: 'failed',
      created: 2022-06-07T00:40:05.325Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugmzdemrzgmzq',
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
      requestid: '30874932',
      status: 'failed',
      created: 2022-06-07T00:40:04.323Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugi4dambygm4a',
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
      requestid: '30874931',
      status: 'failed',
      created: 2022-06-07T00:40:03.650Z,
      pin: {
        cid: 'baeaaadjrha3synbsgm4dmmbqgq2a',
        name: 'ad57d87e-ae1c-45ed-8a13-7b973a0855b7',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30874929',
      status: 'failed',
      created: 2022-06-07T00:40:03.324Z,
      pin: {
        cid: 'baeaaadjsgu4cynjugiztonjvgq2a',
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
      requestid: '30874928',
      status: 'failed',
      created: 2022-06-07T00:40:02.325Z,
      pin: {
        cid: 'baeaaadjsgu4cynjuge3tqojwguyq',
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
      requestid: '30874927',
      status: 'failed',
      created: 2022-06-07T00:40:01.581Z,
      pin: {
        cid: 'baeaaadjrha2cynbxhe3donjsgmyq',
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
      requestid: '30874926',
      status: 'failed',
      created: 2022-06-07T00:40:00.591Z,
      pin: {
        cid: 'baeaaadjrhazsynbtga2dgmzzgu4q',
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
      requestid: '30874920',
      status: 'failed',
      created: 2022-06-07T00:39:57.571Z,
      pin: {
        cid: 'baeaaadjrhaycynbvgy3tomrsgi2a',
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
      requestid: '30874919',
      status: 'failed',
      created: 2022-06-07T00:39:57.259Z,
      pin: {
        cid: 'baeaaadjsgu2cynbrgi4demzuheza',
        name: '4acc4596-4188-4fa3-8d2a-a693524c0d35',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30874917',
      status: 'failed',
      created: 2022-06-07T00:39:55.197Z,
      pin: {
        cid: 'baeaaadjsguysynbrgaytiobrg4ya',
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
      requestid: '30874916',
      status: 'failed',
      created: 2022-06-07T00:39:54.195Z,
      pin: {
        cid: 'baeaaadjsguycynbsgq3donrqg4yq',
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
      requestid: '30874914',
      status: 'failed',
      created: 2022-06-07T00:39:50.997Z,
      pin: {
        cid: 'baeaaadjsgq3symrrgu3dgnzxguzq',
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
  "date": "Tue, 07 Jun 2022 00:40:12 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 17,
  "results": [
    {
      "requestid": "30874940",
      "status": "failed",
      "created": "2022-06-07T00:40:09.328746463Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugq4dgobygezq",
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
      "requestid": "30874939",
      "status": "failed",
      "created": "2022-06-07T00:40:08.779406403Z",
      "pin": {
        "cid": "baeaaadjrheysynrxga2dcmbsgyza",
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
      "requestid": "30874938",
      "status": "failed",
      "created": "2022-06-07T00:40:08.334751018Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugq2tanzrge3q",
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
      "requestid": "30874936",
      "status": "failed",
      "created": "2022-06-07T00:40:07.328364879Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugqytmmrrgiyq",
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
      "requestid": "30874935",
      "status": "failed",
      "created": "2022-06-07T00:40:06.325956507Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugm3tombvgi3a",
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
      "requestid": "30874934",
      "status": "failed",
      "created": "2022-06-07T00:40:05.325002779Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugmzdemrzgmzq",
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
      "requestid": "30874932",
      "status": "failed",
      "created": "2022-06-07T00:40:04.323740078Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugi4dambygm4a",
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
      "requestid": "30874931",
      "status": "failed",
      "created": "2022-06-07T00:40:03.650886816Z",
      "pin": {
        "cid": "baeaaadjrha3synbsgm4dmmbqgq2a",
        "name": "ad57d87e-ae1c-45ed-8a13-7b973a0855b7",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30874929",
      "status": "failed",
      "created": "2022-06-07T00:40:03.324243519Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjugiztonjvgq2a",
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
      "requestid": "30874928",
      "status": "failed",
      "created": "2022-06-07T00:40:02.325693362Z",
      "pin": {
        "cid": "baeaaadjsgu4cynjuge3tqojwguyq",
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
      "requestid": "30874927",
      "status": "failed",
      "created": "2022-06-07T00:40:01.58195483Z",
      "pin": {
        "cid": "baeaaadjrha2cynbxhe3donjsgmyq",
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
      "requestid": "30874926",
      "status": "failed",
      "created": "2022-06-07T00:40:00.591919984Z",
      "pin": {
        "cid": "baeaaadjrhazsynbtga2dgmzzgu4q",
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
      "requestid": "30874920",
      "status": "failed",
      "created": "2022-06-07T00:39:57.571597371Z",
      "pin": {
        "cid": "baeaaadjrhaycynbvgy3tomrsgi2a",
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
      "requestid": "30874919",
      "status": "failed",
      "created": "2022-06-07T00:39:57.259620644Z",
      "pin": {
        "cid": "baeaaadjsgu2cynbrgi4demzuheza",
        "name": "4acc4596-4188-4fa3-8d2a-a693524c0d35",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "30874917",
      "status": "failed",
      "created": "2022-06-07T00:39:55.197875891Z",
      "pin": {
        "cid": "baeaaadjsguysynbrgaytiobrg4ya",
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
      "requestid": "30874916",
      "status": "failed",
      "created": "2022-06-07T00:39:54.195547773Z",
      "pin": {
        "cid": "baeaaadjsguycynbsgq3donrqg4yq",
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
      "requestid": "30874914",
      "status": "failed",
      "created": "2022-06-07T00:39:50.99739332Z",
      "pin": {
        "cid": "baeaaadjsgq3symrrgu3dgnzxguzq",
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
