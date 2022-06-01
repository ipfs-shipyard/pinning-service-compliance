
# https://api.estuary.tech/pinning compliance:

## Summary (3/9 successful)

  ✓ Request with no authentication token
  ✓ Request with invalid token
  ✘ Pins post of CID 'baeaaadjrhezsynbzgizdsmrugu3q'
  ✘ Can create and then delete a new pin
  ✘ List pin objects (GET /pins) in all states
  ✘ Can create and replace a pin's CID
  ✓ Can create a pin with name='441f081a-26d0-40d7-8ba0-802ec430da3a'
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
  "date": "Wed, 01 Jun 2022 20:50:09 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"error":{"reason":"ERR_AUTH_MISSING"}}

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
  "date": "Wed, 01 Jun 2022 20:50:10 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"error":{"reason":"ERR_INVALID_TOKEN"}}

```
## Pins post of CID 'baeaaadjrhezsynbzgizdsmrugu3q' - ✘ FAILED

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
{"cid":"baeaaadjrhezsynbzgizdsmrugu3q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543139',
  status: 'queued',
  created: '2022-06-01T20:50:11.465287931Z',
  pin: {
    cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
  requestid: '30543139',
  status: 'queued',
  created: 2022-06-01T20:50:11.465Z,
  pin: {
    cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
  "date": "Wed, 01 Jun 2022 20:50:11 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543139","status":"queued","created":"2022-06-01T20:50:11.465287931Z","pin":{"cid":"baeaaadjrhezsynbzgizdsmrugu3q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543143

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543143
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
  "date": "Wed, 01 Jun 2022 20:50:13 GMT",
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
{"cid":"baeaaadjrhe2cynjrge4toobvha3q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543143',
  status: 'queued',
  created: '2022-06-01T20:50:12.432799828Z',
  pin: {
    cid: 'baeaaadjrhe2cynjrge4toobvha3q',
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
  requestid: '30543143',
  status: 'queued',
  created: 2022-06-01T20:50:12.432Z,
  pin: {
    cid: 'baeaaadjrhe2cynjrge4toobvha3q',
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
  "date": "Wed, 01 Jun 2022 20:50:12 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543143","status":"queued","created":"2022-06-01T20:50:12.432799828Z","pin":{"cid":"baeaaadjrhe2cynjrge4toobvha3q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

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
      requestid: '30543139',
      status: 'failed',
      created: '2022-06-01T20:50:11.465287931Z',
      pin: {
        cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
      requestid: '30543139',
      status: 'failed',
      created: 2022-06-01T20:50:11.465Z,
      pin: {
        cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
  "date": "Wed, 01 Jun 2022 20:50:13 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":1,"results":[{"requestid":"30543139","status":"failed","created":"2022-06-01T20:50:11.465287931Z","pin":{"cid":"baeaaadjrhezsynbzgizdsmrugu3q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Get original pin via requestid - ✘ FAILED

### Expectations (0/1 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins/30543146

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543146
```
{
  requestid: '30543146',
  status: 'failed',
  created: '2022-06-01T20:50:14.695170374Z',
  pin: {
    cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
  requestid: '30543146',
  status: 'failed',
  created: 2022-06-01T20:50:14.695Z,
  pin: {
    cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
  "date": "Wed, 01 Jun 2022 20:50:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543146","status":"failed","created":"2022-06-01T20:50:14.695170374Z","pin":{"cid":"baeaaadjrhe3cyobsgi4tmnrtha4q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins/30543147

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543147
```
{
  requestid: '30543147',
  status: 'failed',
  created: '2022-06-01T20:50:15.653126703Z',
  pin: {
    cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
  requestid: '30543147',
  status: 'failed',
  created: 2022-06-01T20:50:15.653Z,
  pin: {
    cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
  "date": "Wed, 01 Jun 2022 20:50:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543147","status":"failed","created":"2022-06-01T20:50:15.653126703Z","pin":{"cid":"baeaaadjrhe3synztgy4tamjyg42a","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Pin's with requestid '30543146' can have cid 'baeaaadjrhe3cyobsgi4tmnrtha4q' replaced with 'baeaaadjrhe3synztgy4tamjyg42a' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)
  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins/30543146

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrhe3synztgy4tamjyg42a"}
```
#### Response data from https://api.estuary.tech/pinning/pins/30543146
```
{
  requestid: '30543147',
  status: 'queued',
  created: '2022-06-01T20:50:15.653126703Z',
  pin: {
    cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
  requestid: '30543147',
  status: 'queued',
  created: 2022-06-01T20:50:15.653Z,
  pin: {
    cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
  "date": "Wed, 01 Jun 2022 20:50:15 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543147","status":"queued","created":"2022-06-01T20:50:15.653126703Z","pin":{"cid":"baeaaadjrhe3synztgy4tamjyg42a","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create and replace a pin's CID - ✘ FAILED

### Expectations (6/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (30543146) (success)
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
{"cid":"baeaaadjrhe3cyobsgi4tmnrtha4q"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543146',
  status: 'queued',
  created: '2022-06-01T20:50:14.695170374Z',
  pin: {
    cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
  requestid: '30543146',
  status: 'queued',
  created: 2022-06-01T20:50:14.695Z,
  pin: {
    cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
  "date": "Wed, 01 Jun 2022 20:50:14 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543146","status":"queued","created":"2022-06-01T20:50:14.695170374Z","pin":{"cid":"baeaaadjrhe3cyobsgi4tmnrtha4q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can retrieve pin with name '441f081a-26d0-40d7-8ba0-802ec430da3a' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=441f081a-26d0-40d7-8ba0-802ec430da3a&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=441f081a-26d0-40d7-8ba0-802ec430da3a&match=exact
```
{
  count: 1,
  results: [
    {
      requestid: '30543148',
      status: 'failed',
      created: '2022-06-01T20:50:17.811806623Z',
      pin: {
        cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
        name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
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
      requestid: '30543148',
      status: 'failed',
      created: 2022-06-01T20:50:17.811Z,
      pin: {
        cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
        name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
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
  "date": "Wed, 01 Jun 2022 20:50:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":1,"results":[{"requestid":"30543148","status":"failed","created":"2022-06-01T20:50:17.811806623Z","pin":{"cid":"baeaaadjsgaycynzqgq3doobsgy2a","name":"441f081a-26d0-40d7-8ba0-802ec430da3a","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Can retrieve pin with name '441F081A-26D0-40D7-8BA0-802EC430DA3A' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=441F081A-26D0-40D7-8BA0-802EC430DA3A&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=441F081A-26D0-40D7-8BA0-802EC430DA3A&match=iexact
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
  "date": "Wed, 01 Jun 2022 20:50:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can retrieve pin with name '26d0-40d7-8ba0-802' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=26d0-40d7-8ba0-802&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=26d0-40d7-8ba0-802&match=partial
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
  "date": "Wed, 01 Jun 2022 20:50:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can retrieve pin with name '26D0-40D7-8BA0-802' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=26D0-40D7-8BA0-802&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=26D0-40D7-8BA0-802&match=ipartial
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
  "date": "Wed, 01 Jun 2022 20:50:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can create a pin with name='441f081a-26d0-40d7-8ba0-802ec430da3a' - ✓ SUCCESS

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
{"cid":"baeaaadjsgaycynzqgq3doobsgy2a","name":"441f081a-26d0-40d7-8ba0-802ec430da3a"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543148',
  status: 'queued',
  created: '2022-06-01T20:50:17.811806623Z',
  pin: {
    cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
    name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
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
  requestid: '30543148',
  status: 'queued',
  created: 2022-06-01T20:50:17.811Z,
  pin: {
    cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
    name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
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
  "date": "Wed, 01 Jun 2022 20:50:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543148","status":"queued","created":"2022-06-01T20:50:17.811806623Z","pin":{"cid":"baeaaadjsgaycynzqgq3doobsgy2a","name":"441f081a-26d0-40d7-8ba0-802ec430da3a","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjugizdqmjrg4' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjugizdqmjrg4"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543149',
  status: 'queued',
  created: '2022-06-01T20:50:23.004563262Z',
  pin: {
    cid: 'baeaaadbsga2symjugizdqmjrg4',
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
  requestid: '30543149',
  status: 'queued',
  created: 2022-06-01T20:50:23.004Z,
  pin: {
    cid: 'baeaaadbsga2symjugizdqmjrg4',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543149","status":"queued","created":"2022-06-01T20:50:23.004563262Z","pin":{"cid":"baeaaadbsga2symjugizdqmjrg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjvgeztonzrgu' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjvgeztonzrgu"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543150',
  status: 'queued',
  created: '2022-06-01T20:50:23.977126628Z',
  pin: {
    cid: 'baeaaadbsga2symjvgeztonzrgu',
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
  requestid: '30543150',
  status: 'queued',
  created: 2022-06-01T20:50:23.977Z,
  pin: {
    cid: 'baeaaadbsga2symjvgeztonzrgu',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543150","status":"queued","created":"2022-06-01T20:50:23.977126628Z","pin":{"cid":"baeaaadbsga2symjvgeztonzrgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjvgy4tsmzrgq' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjvgy4tsmzrgq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543153',
  status: 'queued',
  created: '2022-06-01T20:50:24.999178089Z',
  pin: {
    cid: 'baeaaadbsga2symjvgy4tsmzrgq',
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
  requestid: '30543153',
  status: 'queued',
  created: 2022-06-01T20:50:24.999Z,
  pin: {
    cid: 'baeaaadbsga2symjvgy4tsmzrgq',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543153","status":"queued","created":"2022-06-01T20:50:24.999178089Z","pin":{"cid":"baeaaadbsga2symjvgy4tsmzrgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjwgmytombrgm' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjwgmytombrgm"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543154',
  status: 'queued',
  created: '2022-06-01T20:50:25.977656691Z',
  pin: {
    cid: 'baeaaadbsga2symjwgmytombrgm',
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
  requestid: '30543154',
  status: 'queued',
  created: 2022-06-01T20:50:25.977Z,
  pin: {
    cid: 'baeaaadbsga2symjwgmytombrgm',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543154","status":"queued","created":"2022-06-01T20:50:25.977656691Z","pin":{"cid":"baeaaadbsga2symjwgmytombrgm","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjwhe4tonbrgi' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjwhe4tonbrgi"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543157',
  status: 'queued',
  created: '2022-06-01T20:50:26.977366376Z',
  pin: {
    cid: 'baeaaadbsga2symjwhe4tonbrgi',
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
  requestid: '30543157',
  status: 'queued',
  created: 2022-06-01T20:50:26.977Z,
  pin: {
    cid: 'baeaaadbsga2symjwhe4tonbrgi',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543157","status":"queued","created":"2022-06-01T20:50:26.977366376Z","pin":{"cid":"baeaaadbsga2symjwhe4tonbrgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjxgu4tinrrge' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjxgu4tinrrge"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543158',
  status: 'queued',
  created: '2022-06-01T20:50:27.987560214Z',
  pin: {
    cid: 'baeaaadbsga2symjxgu4tinrrge',
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
  requestid: '30543158',
  status: 'queued',
  created: 2022-06-01T20:50:27.987Z,
  pin: {
    cid: 'baeaaadbsga2symjxgu4tinrrge',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543158","status":"queued","created":"2022-06-01T20:50:27.987560214Z","pin":{"cid":"baeaaadbsga2symjxgu4tinrrge","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjyga3dgmrrga' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjyga3dgmrrga"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543159',
  status: 'queued',
  created: '2022-06-01T20:50:28.979187553Z',
  pin: {
    cid: 'baeaaadbsga2symjyga3dgmrrga',
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
  requestid: '30543159',
  status: 'queued',
  created: 2022-06-01T20:50:28.979Z,
  pin: {
    cid: 'baeaaadbsga2symjyga3dgmrrga',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543159","status":"queued","created":"2022-06-01T20:50:28.979187553Z","pin":{"cid":"baeaaadbsga2symjyga3dgmrrga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjyhaydknbqha' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjyhaydknbqha"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543160',
  status: 'queued',
  created: '2022-06-01T20:50:30.042833609Z',
  pin: {
    cid: 'baeaaadbsga2symjyhaydknbqha',
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
  requestid: '30543160',
  status: 'queued',
  created: 2022-06-01T20:50:30.042Z,
  pin: {
    cid: 'baeaaadbsga2symjyhaydknbqha',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543160","status":"queued","created":"2022-06-01T20:50:30.042833609Z","pin":{"cid":"baeaaadbsga2symjyhaydknbqha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symjzgq4tknzqg4' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symjzgq4tknzqg4"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543161',
  status: 'queued',
  created: '2022-06-01T20:50:30.981576699Z',
  pin: {
    cid: 'baeaaadbsga2symjzgq4tknzqg4',
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
  requestid: '30543161',
  status: 'queued',
  created: 2022-06-01T20:50:30.981Z,
  pin: {
    cid: 'baeaaadbsga2symjzgq4tknzqg4',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543161","status":"queued","created":"2022-06-01T20:50:30.981576699Z","pin":{"cid":"baeaaadbsga2symjzgq4tknzqg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symrqgazdcmzqgy' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symrqgazdcmzqgy"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543162',
  status: 'queued',
  created: '2022-06-01T20:50:31.991688261Z',
  pin: {
    cid: 'baeaaadbsga2symrqgazdcmzqgy',
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
  requestid: '30543162',
  status: 'queued',
  created: 2022-06-01T20:50:31.991Z,
  pin: {
    cid: 'baeaaadbsga2symrqgazdcmzqgy',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:31 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543162","status":"queued","created":"2022-06-01T20:50:31.991688261Z","pin":{"cid":"baeaaadbsga2symrqgazdcmzqgy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbsga2symrqgq4dambqgu' - ✓ SUCCESS

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
{"cid":"baeaaadbsga2symrqgq4dambqgu"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543163',
  status: 'queued',
  created: '2022-06-01T20:50:33.086054611Z',
  pin: {
    cid: 'baeaaadbsga2symrqgq4dambqgu',
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
  requestid: '30543163',
  status: 'queued',
  created: 2022-06-01T20:50:33.086Z,
  pin: {
    cid: 'baeaaadbsga2symrqgq4dambqgu',
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
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:33 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543163","status":"queued","created":"2022-06-01T20:50:33.086054611Z","pin":{"cid":"baeaaadbsga2symrqgq4dambqgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

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
      requestid: '30543163',
      status: 'failed',
      created: '2022-06-01T20:50:33.086054611Z',
      pin: {
        cid: 'baeaaadbsga2symrqgq4dambqgu',
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
      requestid: '30543162',
      status: 'failed',
      created: '2022-06-01T20:50:31.991688261Z',
      pin: {
        cid: 'baeaaadbsga2symrqgazdcmzqgy',
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
      requestid: '30543161',
      status: 'failed',
      created: '2022-06-01T20:50:30.981576699Z',
      pin: {
        cid: 'baeaaadbsga2symjzgq4tknzqg4',
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
      requestid: '30543160',
      status: 'failed',
      created: '2022-06-01T20:50:30.042833609Z',
      pin: {
        cid: 'baeaaadbsga2symjyhaydknbqha',
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
      requestid: '30543159',
      status: 'failed',
      created: '2022-06-01T20:50:28.979187553Z',
      pin: {
        cid: 'baeaaadbsga2symjyga3dgmrrga',
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
      requestid: '30543158',
      status: 'failed',
      created: '2022-06-01T20:50:27.987560214Z',
      pin: {
        cid: 'baeaaadbsga2symjxgu4tinrrge',
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
      requestid: '30543157',
      status: 'failed',
      created: '2022-06-01T20:50:26.977366376Z',
      pin: {
        cid: 'baeaaadbsga2symjwhe4tonbrgi',
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
      requestid: '30543154',
      status: 'failed',
      created: '2022-06-01T20:50:25.977656691Z',
      pin: {
        cid: 'baeaaadbsga2symjwgmytombrgm',
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
      requestid: '30543153',
      status: 'failed',
      created: '2022-06-01T20:50:24.999178089Z',
      pin: {
        cid: 'baeaaadbsga2symjvgy4tsmzrgq',
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
      requestid: '30543150',
      status: 'failed',
      created: '2022-06-01T20:50:23.977126628Z',
      pin: {
        cid: 'baeaaadbsga2symjvgeztonzrgu',
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
      requestid: '30543149',
      status: 'failed',
      created: '2022-06-01T20:50:23.004563262Z',
      pin: {
        cid: 'baeaaadbsga2symjugizdqmjrg4',
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
      requestid: '30543148',
      status: 'failed',
      created: '2022-06-01T20:50:17.811806623Z',
      pin: {
        cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
        name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30543147',
      status: 'failed',
      created: '2022-06-01T20:50:15.653126703Z',
      pin: {
        cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
      requestid: '30543146',
      status: 'failed',
      created: '2022-06-01T20:50:14.695170374Z',
      pin: {
        cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
      requestid: '30543139',
      status: 'failed',
      created: '2022-06-01T20:50:11.465287931Z',
      pin: {
        cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
      requestid: '30543163',
      status: 'failed',
      created: 2022-06-01T20:50:33.086Z,
      pin: {
        cid: 'baeaaadbsga2symrqgq4dambqgu',
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
      requestid: '30543162',
      status: 'failed',
      created: 2022-06-01T20:50:31.991Z,
      pin: {
        cid: 'baeaaadbsga2symrqgazdcmzqgy',
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
      requestid: '30543161',
      status: 'failed',
      created: 2022-06-01T20:50:30.981Z,
      pin: {
        cid: 'baeaaadbsga2symjzgq4tknzqg4',
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
      requestid: '30543160',
      status: 'failed',
      created: 2022-06-01T20:50:30.042Z,
      pin: {
        cid: 'baeaaadbsga2symjyhaydknbqha',
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
      requestid: '30543159',
      status: 'failed',
      created: 2022-06-01T20:50:28.979Z,
      pin: {
        cid: 'baeaaadbsga2symjyga3dgmrrga',
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
      requestid: '30543158',
      status: 'failed',
      created: 2022-06-01T20:50:27.987Z,
      pin: {
        cid: 'baeaaadbsga2symjxgu4tinrrge',
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
      requestid: '30543157',
      status: 'failed',
      created: 2022-06-01T20:50:26.977Z,
      pin: {
        cid: 'baeaaadbsga2symjwhe4tonbrgi',
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
      requestid: '30543154',
      status: 'failed',
      created: 2022-06-01T20:50:25.977Z,
      pin: {
        cid: 'baeaaadbsga2symjwgmytombrgm',
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
      requestid: '30543153',
      status: 'failed',
      created: 2022-06-01T20:50:24.999Z,
      pin: {
        cid: 'baeaaadbsga2symjvgy4tsmzrgq',
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
      requestid: '30543150',
      status: 'failed',
      created: 2022-06-01T20:50:23.977Z,
      pin: {
        cid: 'baeaaadbsga2symjvgeztonzrgu',
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
      requestid: '30543149',
      status: 'failed',
      created: 2022-06-01T20:50:23.004Z,
      pin: {
        cid: 'baeaaadbsga2symjugizdqmjrg4',
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
      requestid: '30543148',
      status: 'failed',
      created: 2022-06-01T20:50:17.811Z,
      pin: {
        cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
        name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30543147',
      status: 'failed',
      created: 2022-06-01T20:50:15.653Z,
      pin: {
        cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
      requestid: '30543146',
      status: 'failed',
      created: 2022-06-01T20:50:14.695Z,
      pin: {
        cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
      requestid: '30543139',
      status: 'failed',
      created: 2022-06-01T20:50:11.465Z,
      pin: {
        cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
  "date": "Wed, 01 Jun 2022 20:50:33 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{"count":15,"results":[{"requestid":"30543163","status":"failed","created":"2022-06-01T20:50:33.086054611Z","pin":{"cid":"baeaaadbsga2symrqgq4dambqgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543162","status":"failed","created":"2022-06-01T20:50:31.991688261Z","pin":{"cid":"baeaaadbsga2symrqgazdcmzqgy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543161","status":"failed","created":"2022-06-01T20:50:30.981576699Z","pin":{"cid":"baeaaadbsga2symjzgq4tknzqg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543160","status":"failed","created":"2022-06-01T20:50:30.042833609Z","pin":{"cid":"baeaaadbsga2symjyhaydknbqha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543159","status":"failed","created":"2022-06-01T20:50:28.979187553Z","pin":{"cid":"baeaaadbsga2symjyga3dgmrrga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543158","status":"failed","created":"2022-06-01T20:50:27.987560214Z","pin":{"cid":"baeaaadbsga2symjxgu4tinrrge","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543157","status":"failed","created":"2022-06-01T20:50:26.977366376Z","pin":{"cid":"baeaaadbsga2symjwhe4tonbrgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543154","status":"failed","created":"2022-06-01T20:50:25.977656691Z","pin":{"cid":"baeaaadbsga2symjwgmytombrgm","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543153","status":"failed","created":"2022-06-01T20:50:24.999178089Z","pin":{"cid":"baeaaadbsga2symjvgy4tsmzrgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543150","status":"failed","created":"2022-06-01T20:50:23.977126628Z","pin":{"cid":"baeaaadbsga2symjvgeztonzrgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543149","status":"failed","created":"2022-06-01T20:50:23.004563262Z","pin":{"cid":"baeaaadbsga2symjugizdqmjrg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543148","status":"failed","created":"2022-06-01T20:50:17.811806623Z","pin":{"cid":"baeaaadjsgaycynzqgq3doobsgy2a","name":"441f081a-26d0-40d7-8ba0-802ec430da3a","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543147","status":"failed","created":"2022-06-01T20:50:15.653126703Z","pin":{"cid":"baeaaadjrhe3synztgy4tamjyg42a","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543146","status":"failed","created":"2022-06-01T20:50:14.695170374Z","pin":{"cid":"baeaaadjrhe3cyobsgi4tmnrtha4q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543139","status":"failed","created":"2022-06-01T20:50:11.465287931Z","pin":{"cid":"baeaaadjrhezsynbzgizdsmrugu3q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Pagination: Retrieve the next page of pins - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ The next page of pins doesn't contain any of previous pages pins (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A50%3A11.465Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A50%3A11.465Z
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
  "date": "Wed, 01 Jun 2022 20:50:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

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
      requestid: '30543148',
      status: 'failed',
      created: '2022-06-01T20:50:17.811806623Z',
      pin: {
        cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
        name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30543147',
      status: 'failed',
      created: '2022-06-01T20:50:15.653126703Z',
      pin: {
        cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
      requestid: '30543146',
      status: 'failed',
      created: '2022-06-01T20:50:14.695170374Z',
      pin: {
        cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
      requestid: '30543139',
      status: 'failed',
      created: '2022-06-01T20:50:11.465287931Z',
      pin: {
        cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
      requestid: '30543148',
      status: 'failed',
      created: 2022-06-01T20:50:17.811Z,
      pin: {
        cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
        name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30543147',
      status: 'failed',
      created: 2022-06-01T20:50:15.653Z,
      pin: {
        cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
      requestid: '30543146',
      status: 'failed',
      created: 2022-06-01T20:50:14.695Z,
      pin: {
        cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
      requestid: '30543139',
      status: 'failed',
      created: 2022-06-01T20:50:11.465Z,
      pin: {
        cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
  "content-length": "1188",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:50:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":4,"results":[{"requestid":"30543148","status":"failed","created":"2022-06-01T20:50:17.811806623Z","pin":{"cid":"baeaaadjsgaycynzqgq3doobsgy2a","name":"441f081a-26d0-40d7-8ba0-802ec430da3a","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543147","status":"failed","created":"2022-06-01T20:50:15.653126703Z","pin":{"cid":"baeaaadjrhe3synztgy4tamjyg42a","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543146","status":"failed","created":"2022-06-01T20:50:14.695170374Z","pin":{"cid":"baeaaadjrhe3cyobsgi4tmnrtha4q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543139","status":"failed","created":"2022-06-01T20:50:11.465287931Z","pin":{"cid":"baeaaadjrhezsynbzgizdsmrugu3q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Can delete pin with requestid '30543163' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543163

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543163
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
  "date": "Wed, 01 Jun 2022 20:50:36 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543162' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543162

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543162
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
  "date": "Wed, 01 Jun 2022 20:50:37 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543161' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543161

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543161
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
  "date": "Wed, 01 Jun 2022 20:50:38 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543160' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543160

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543160
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
  "date": "Wed, 01 Jun 2022 20:50:39 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543159' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543159

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543159
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
  "date": "Wed, 01 Jun 2022 20:50:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543158' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543158

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543158
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
  "date": "Wed, 01 Jun 2022 20:50:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543157' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543157

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543157
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
  "date": "Wed, 01 Jun 2022 20:50:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543154' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543154

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543154
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
  "date": "Wed, 01 Jun 2022 20:50:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543153' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543153

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543153
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
  "date": "Wed, 01 Jun 2022 20:50:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543150' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543150

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543150
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
  "date": "Wed, 01 Jun 2022 20:50:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543149' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543149

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543149
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
  "date": "Wed, 01 Jun 2022 20:50:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543148' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543148

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543148
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
  "date": "Wed, 01 Jun 2022 20:50:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543147' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543147

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543147
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
  "date": "Wed, 01 Jun 2022 20:50:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543146' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543146

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543146
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
  "date": "Wed, 01 Jun 2022 20:50:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543139' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543139

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543139
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
  "date": "Wed, 01 Jun 2022 20:50:50 GMT",
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
  "date": "Wed, 01 Jun 2022 20:50:51 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
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
      requestid: '30543163',
      status: 'failed',
      created: '2022-06-01T20:50:33.086054611Z',
      pin: {
        cid: 'baeaaadbsga2symrqgq4dambqgu',
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
      requestid: '30543162',
      status: 'failed',
      created: '2022-06-01T20:50:31.991688261Z',
      pin: {
        cid: 'baeaaadbsga2symrqgazdcmzqgy',
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
      requestid: '30543161',
      status: 'failed',
      created: '2022-06-01T20:50:30.981576699Z',
      pin: {
        cid: 'baeaaadbsga2symjzgq4tknzqg4',
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
      requestid: '30543160',
      status: 'failed',
      created: '2022-06-01T20:50:30.042833609Z',
      pin: {
        cid: 'baeaaadbsga2symjyhaydknbqha',
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
      requestid: '30543159',
      status: 'failed',
      created: '2022-06-01T20:50:28.979187553Z',
      pin: {
        cid: 'baeaaadbsga2symjyga3dgmrrga',
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
      requestid: '30543158',
      status: 'failed',
      created: '2022-06-01T20:50:27.987560214Z',
      pin: {
        cid: 'baeaaadbsga2symjxgu4tinrrge',
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
      requestid: '30543157',
      status: 'failed',
      created: '2022-06-01T20:50:26.977366376Z',
      pin: {
        cid: 'baeaaadbsga2symjwhe4tonbrgi',
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
      requestid: '30543154',
      status: 'failed',
      created: '2022-06-01T20:50:25.977656691Z',
      pin: {
        cid: 'baeaaadbsga2symjwgmytombrgm',
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
      requestid: '30543153',
      status: 'failed',
      created: '2022-06-01T20:50:24.999178089Z',
      pin: {
        cid: 'baeaaadbsga2symjvgy4tsmzrgq',
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
      requestid: '30543150',
      status: 'failed',
      created: '2022-06-01T20:50:23.977126628Z',
      pin: {
        cid: 'baeaaadbsga2symjvgeztonzrgu',
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
      requestid: '30543149',
      status: 'failed',
      created: '2022-06-01T20:50:23.004563262Z',
      pin: {
        cid: 'baeaaadbsga2symjugizdqmjrg4',
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
      requestid: '30543148',
      status: 'failed',
      created: '2022-06-01T20:50:17.811806623Z',
      pin: {
        cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
        name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30543147',
      status: 'failed',
      created: '2022-06-01T20:50:15.653126703Z',
      pin: {
        cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
      requestid: '30543146',
      status: 'failed',
      created: '2022-06-01T20:50:14.695170374Z',
      pin: {
        cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
      requestid: '30543139',
      status: 'failed',
      created: '2022-06-01T20:50:11.465287931Z',
      pin: {
        cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
      requestid: '30543163',
      status: 'failed',
      created: 2022-06-01T20:50:33.086Z,
      pin: {
        cid: 'baeaaadbsga2symrqgq4dambqgu',
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
      requestid: '30543162',
      status: 'failed',
      created: 2022-06-01T20:50:31.991Z,
      pin: {
        cid: 'baeaaadbsga2symrqgazdcmzqgy',
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
      requestid: '30543161',
      status: 'failed',
      created: 2022-06-01T20:50:30.981Z,
      pin: {
        cid: 'baeaaadbsga2symjzgq4tknzqg4',
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
      requestid: '30543160',
      status: 'failed',
      created: 2022-06-01T20:50:30.042Z,
      pin: {
        cid: 'baeaaadbsga2symjyhaydknbqha',
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
      requestid: '30543159',
      status: 'failed',
      created: 2022-06-01T20:50:28.979Z,
      pin: {
        cid: 'baeaaadbsga2symjyga3dgmrrga',
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
      requestid: '30543158',
      status: 'failed',
      created: 2022-06-01T20:50:27.987Z,
      pin: {
        cid: 'baeaaadbsga2symjxgu4tinrrge',
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
      requestid: '30543157',
      status: 'failed',
      created: 2022-06-01T20:50:26.977Z,
      pin: {
        cid: 'baeaaadbsga2symjwhe4tonbrgi',
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
      requestid: '30543154',
      status: 'failed',
      created: 2022-06-01T20:50:25.977Z,
      pin: {
        cid: 'baeaaadbsga2symjwgmytombrgm',
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
      requestid: '30543153',
      status: 'failed',
      created: 2022-06-01T20:50:24.999Z,
      pin: {
        cid: 'baeaaadbsga2symjvgy4tsmzrgq',
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
      requestid: '30543150',
      status: 'failed',
      created: 2022-06-01T20:50:23.977Z,
      pin: {
        cid: 'baeaaadbsga2symjvgeztonzrgu',
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
      requestid: '30543149',
      status: 'failed',
      created: 2022-06-01T20:50:23.004Z,
      pin: {
        cid: 'baeaaadbsga2symjugizdqmjrg4',
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
      requestid: '30543148',
      status: 'failed',
      created: 2022-06-01T20:50:17.811Z,
      pin: {
        cid: 'baeaaadjsgaycynzqgq3doobsgy2a',
        name: '441f081a-26d0-40d7-8ba0-802ec430da3a',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30543147',
      status: 'failed',
      created: 2022-06-01T20:50:15.653Z,
      pin: {
        cid: 'baeaaadjrhe3synztgy4tamjyg42a',
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
      requestid: '30543146',
      status: 'failed',
      created: 2022-06-01T20:50:14.695Z,
      pin: {
        cid: 'baeaaadjrhe3cyobsgi4tmnrtha4q',
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
      requestid: '30543139',
      status: 'failed',
      created: 2022-06-01T20:50:11.465Z,
      pin: {
        cid: 'baeaaadjrhezsynbzgizdsmrugu3q',
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
  "date": "Wed, 01 Jun 2022 20:50:35 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{"count":15,"results":[{"requestid":"30543163","status":"failed","created":"2022-06-01T20:50:33.086054611Z","pin":{"cid":"baeaaadbsga2symrqgq4dambqgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543162","status":"failed","created":"2022-06-01T20:50:31.991688261Z","pin":{"cid":"baeaaadbsga2symrqgazdcmzqgy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543161","status":"failed","created":"2022-06-01T20:50:30.981576699Z","pin":{"cid":"baeaaadbsga2symjzgq4tknzqg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543160","status":"failed","created":"2022-06-01T20:50:30.042833609Z","pin":{"cid":"baeaaadbsga2symjyhaydknbqha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543159","status":"failed","created":"2022-06-01T20:50:28.979187553Z","pin":{"cid":"baeaaadbsga2symjyga3dgmrrga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543158","status":"failed","created":"2022-06-01T20:50:27.987560214Z","pin":{"cid":"baeaaadbsga2symjxgu4tinrrge","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543157","status":"failed","created":"2022-06-01T20:50:26.977366376Z","pin":{"cid":"baeaaadbsga2symjwhe4tonbrgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543154","status":"failed","created":"2022-06-01T20:50:25.977656691Z","pin":{"cid":"baeaaadbsga2symjwgmytombrgm","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543153","status":"failed","created":"2022-06-01T20:50:24.999178089Z","pin":{"cid":"baeaaadbsga2symjvgy4tsmzrgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543150","status":"failed","created":"2022-06-01T20:50:23.977126628Z","pin":{"cid":"baeaaadbsga2symjvgeztonzrgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543149","status":"failed","created":"2022-06-01T20:50:23.004563262Z","pin":{"cid":"baeaaadbsga2symjugizdqmjrg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543148","status":"failed","created":"2022-06-01T20:50:17.811806623Z","pin":{"cid":"baeaaadjsgaycynzqgq3doobsgy2a","name":"441f081a-26d0-40d7-8ba0-802ec430da3a","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543147","status":"failed","created":"2022-06-01T20:50:15.653126703Z","pin":{"cid":"baeaaadjrhe3synztgy4tamjyg42a","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543146","status":"failed","created":"2022-06-01T20:50:14.695170374Z","pin":{"cid":"baeaaadjrhe3cyobsgi4tmnrtha4q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543139","status":"failed","created":"2022-06-01T20:50:11.465287931Z","pin":{"cid":"baeaaadjrhezsynbzgizdsmrugu3q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
