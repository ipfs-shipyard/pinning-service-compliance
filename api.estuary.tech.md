
# https://api.estuary.tech/pinning compliance:

Execution Date: 2022-06-14T23:01:20.219Z

Revision: [3b27f0e](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/3b27f0e)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (3/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'baeaaadjtga2symzygu4dgmbyg44q'](#pins-post-of-cid-baeaaadjtga2symzygu4dgmbyg44q----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  🟢 [Can create a pin with name='ac29823a-2497-4660-96eb-69f6f6a41d2c'](#can-create-a-pin-with-nameac29823a-2497-4660-96eb-69f6f6a41d2c----success)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Returns a 403 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{}
```
##### Body
```json

```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:43 GMT",
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

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_AUTH_MISSING"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Request with invalid token - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Returns a 403 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "41",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:44 GMT",
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

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_INVALID_TOKEN"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'baeaaadjtga2symzygu4dgmbyg44q' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

  
### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtga2symzygu4dgmbyg44q"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350697",
  "status": "queued",
  "created": "2022-06-14T23:00:44.957435833Z",
  "pin": {
    "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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

##### Body (as JSON)
```json
{
  "requestid": "31350697",
  "status": "queued",
  "created": "2022-06-14T23:00:44.957435833Z",
  "pin": {
    "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350697",
  "status": "queued",
  "created": "2022-06-14T23:00:44.957Z",
  "pin": {
    "cid": "baeaaadjtga2symzygu4dgmbyg44q",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## The newly created pin can be immediately deleted - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350698
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:00:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can create and then delete a new pin - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Result is not null (success)

  ❌ Response code is 200 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbtga3cynbyg42tqojxgi"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350698",
  "status": "queued",
  "created": "2022-06-14T23:00:46.087855941Z",
  "pin": {
    "cid": "baeaaadbtga3cynbyg42tqojxgi",
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

##### Body (as JSON)
```json
{
  "requestid": "31350698",
  "status": "queued",
  "created": "2022-06-14T23:00:46.087855941Z",
  "pin": {
    "cid": "baeaaadbtga3cynbyg42tqojxgi",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350698",
  "status": "queued",
  "created": "2022-06-14T23:00:46.087Z",
  "pin": {
    "cid": "baeaaadbtga3cynbyg42tqojxgi",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## List pin objects (GET /pins) in all states - ❌ FAILED

### Expectations (2/3 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)




#### Response object doesn't match expected schema:

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

  
### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 11,
  "results": [
    {
      "requestid": "31350697",
      "status": "queued",
      "created": "2022-06-14T23:00:44.957435833Z",
      "pin": {
        "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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
      "requestid": "31350685",
      "status": "failed",
      "created": "2022-06-14T23:00:34.76593221Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgy4tamrxge2a",
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
      "requestid": "31350684",
      "status": "failed",
      "created": "2022-06-14T23:00:33.763706243Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgy2dqnjrga4q",
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
      "requestid": "31350683",
      "status": "failed",
      "created": "2022-06-14T23:00:32.764317428Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgu4tgnzxgaza",
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
      "requestid": "31350682",
      "status": "failed",
      "created": "2022-06-14T23:00:31.763197563Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgu2tinjyhe3q",
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
      "requestid": "31350681",
      "status": "failed",
      "created": "2022-06-14T23:00:30.763152765Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsguydmmzvheyq",
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
      "requestid": "31350680",
      "status": "failed",
      "created": "2022-06-14T23:00:29.763743076Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgqzdenzshaya",
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
      "requestid": "31350675",
      "status": "failed",
      "created": "2022-06-14T23:00:24.693851376Z",
      "pin": {
        "cid": "baeaaadbsgmzcyojtg4ydanzrg4",
        "name": "7a591bd0-4165-4da6-9e23-b70323f53fa7",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31350673",
      "status": "failed",
      "created": "2022-06-14T23:00:22.681780324Z",
      "pin": {
        "cid": "baeaaadbsgi4synzwgm2dknrtge",
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
      "requestid": "31350672",
      "status": "failed",
      "created": "2022-06-14T23:00:21.614803031Z",
      "pin": {
        "cid": "baeaaadjsgi4cymjqgi3tkmbqg4zq",
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
      "requestid": "31350668",
      "status": "failed",
      "created": "2022-06-14T23:00:18.590103976Z",
      "pin": {
        "cid": "baeaaadjsgi2cyojzg4ytgojwg4za",
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

##### Body (as JSON)
```json
{
  "count": 11,
  "results": [
    {
      "requestid": "31350697",
      "status": "queued",
      "created": "2022-06-14T23:00:44.957435833Z",
      "pin": {
        "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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
      "requestid": "31350685",
      "status": "failed",
      "created": "2022-06-14T23:00:34.76593221Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgy4tamrxge2a",
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
      "requestid": "31350684",
      "status": "failed",
      "created": "2022-06-14T23:00:33.763706243Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgy2dqnjrga4q",
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
      "requestid": "31350683",
      "status": "failed",
      "created": "2022-06-14T23:00:32.764317428Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgu4tgnzxgaza",
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
      "requestid": "31350682",
      "status": "failed",
      "created": "2022-06-14T23:00:31.763197563Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgu2tinjyhe3q",
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
      "requestid": "31350681",
      "status": "failed",
      "created": "2022-06-14T23:00:30.763152765Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsguydmmzvheyq",
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
      "requestid": "31350680",
      "status": "failed",
      "created": "2022-06-14T23:00:29.763743076Z",
      "pin": {
        "cid": "baeaaadjsgm3cymrsgqzdenzshaya",
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
      "requestid": "31350675",
      "status": "failed",
      "created": "2022-06-14T23:00:24.693851376Z",
      "pin": {
        "cid": "baeaaadbsgmzcyojtg4ydanzrg4",
        "name": "7a591bd0-4165-4da6-9e23-b70323f53fa7",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31350673",
      "status": "failed",
      "created": "2022-06-14T23:00:22.681780324Z",
      "pin": {
        "cid": "baeaaadbsgi4synzwgm2dknrtge",
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
      "requestid": "31350672",
      "status": "failed",
      "created": "2022-06-14T23:00:21.614803031Z",
      "pin": {
        "cid": "baeaaadjsgi4cymjqgi3tkmbqg4zq",
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
      "requestid": "31350668",
      "status": "failed",
      "created": "2022-06-14T23:00:18.590103976Z",
      "pin": {
        "cid": "baeaaadjsgi2cyojzg4ytgojwg4za",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 11,
  "results": {}
}
```
## Get original pin via requestid - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/31350699
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350699",
  "status": "queued",
  "created": "2022-06-14T23:00:48.090914193Z",
  "pin": {
    "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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

##### Body (as JSON)
```json
{
  "requestid": "31350699",
  "status": "queued",
  "created": "2022-06-14T23:00:48.090914193Z",
  "pin": {
    "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350699",
  "status": "queued",
  "created": "2022-06-14T23:00:48.090Z",
  "pin": {
    "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Get new pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/31350700
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:51 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350700",
  "status": "queued",
  "created": "2022-06-14T23:00:48.960687403Z",
  "pin": {
    "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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

##### Body (as JSON)
```json
{
  "requestid": "31350700",
  "status": "queued",
  "created": "2022-06-14T23:00:48.960687403Z",
  "pin": {
    "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350700",
  "status": "queued",
  "created": "2022-06-14T23:00:48.960Z",
  "pin": {
    "cid": "baeaaadjtga4symjxgm2tkmbthezq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Pin's with requestid '31350699' can have cid 'baeaaadjtga4cymjwguztcnbqgi2a' replaced with 'baeaaadjtga4symjxgm2tkmbthezq' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins/31350699
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtga4symjxgm2tkmbthezq"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350700",
  "status": "queued",
  "created": "2022-06-14T23:00:48.960687403Z",
  "pin": {
    "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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

##### Body (as JSON)
```json
{
  "requestid": "31350700",
  "status": "queued",
  "created": "2022-06-14T23:00:48.960687403Z",
  "pin": {
    "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350700",
  "status": "queued",
  "created": "2022-06-14T23:00:48.960Z",
  "pin": {
    "cid": "baeaaadjtga4symjxgm2tkmbthezq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create and replace a pin's CID - ❌ FAILED

### Expectations (6/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (31350699) (success)

  🟢 Response is ok (success)

  🟢 Replaced pin has the new & expected CID (success)

  🟢 Replaced pin has a different requestid (success)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtga4cymjwguztcnbqgi2a"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350699",
  "status": "queued",
  "created": "2022-06-14T23:00:48.090914193Z",
  "pin": {
    "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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

##### Body (as JSON)
```json
{
  "requestid": "31350699",
  "status": "queued",
  "created": "2022-06-14T23:00:48.090914193Z",
  "pin": {
    "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350699",
  "status": "queued",
  "created": "2022-06-14T23:00:48.090Z",
  "pin": {
    "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can retrieve pin with name 'ac29823a-2497-4660-96eb-69f6f6a41d2c' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=ac29823a-2497-4660-96eb-69f6f6a41d2c&match=exact
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "342",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:52 GMT",
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
      "requestid": "31350701",
      "status": "queued",
      "created": "2022-06-14T23:00:51.111070801Z",
      "pin": {
        "cid": "baeaaadjtgezcymjxga4timzzg4za",
        "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
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

##### Body (as JSON)
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "31350701",
      "status": "queued",
      "created": "2022-06-14T23:00:51.111070801Z",
      "pin": {
        "cid": "baeaaadjtgezcymjxga4timzzg4za",
        "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 1,
  "results": {}
}
```
## Can retrieve pin with name 'AC29823A-2497-4660-96EB-69F6F6A41D2C' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=AC29823A-2497-4660-96EB-69F6F6A41D2C&match=iexact
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:53 GMT",
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

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Can retrieve pin with name '2497-4660-96eb-69f' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=2497-4660-96eb-69f&match=partial
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:54 GMT",
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

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Can retrieve pin with name '2497-4660-96EB-69F' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=2497-4660-96EB-69F&match=ipartial
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:55 GMT",
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

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Can create a pin with name='ac29823a-2497-4660-96eb-69f6f6a41d2c' - 🟢 SUCCESS

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

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtgezcymjxga4timzzg4za","name":"ac29823a-2497-4660-96eb-69f6f6a41d2c"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:51 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350701",
  "status": "queued",
  "created": "2022-06-14T23:00:51.111070801Z",
  "pin": {
    "cid": "baeaaadjtgezcymjxga4timzzg4za",
    "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```

##### Body (as JSON)
```json
{
  "requestid": "31350701",
  "status": "queued",
  "created": "2022-06-14T23:00:51.111070801Z",
  "pin": {
    "cid": "baeaaadjtgezcymjxga4timzzg4za",
    "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
    "origins": null,
    "meta": null
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ],
  "info": null
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350701",
  "status": "queued",
  "created": "2022-06-14T23:00:51.111Z",
  "pin": {
    "cid": "baeaaadjtgezcymjxga4timzzg4za",
    "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c"
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrrg44dmmztg44q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrrg44dmmztg44q"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:56 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350705",
  "status": "queued",
  "created": "2022-06-14T23:00:56.136842982Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrg44dmmztg44q",
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

##### Body (as JSON)
```json
{
  "requestid": "31350705",
  "status": "queued",
  "created": "2022-06-14T23:00:56.136842982Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrg44dmmztg44q",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350705",
  "status": "queued",
  "created": "2022-06-14T23:00:56.136Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrg44dmmztg44q",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrrha3temzxhaya' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrrha3temzxhaya"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:57 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350706",
  "status": "queued",
  "created": "2022-06-14T23:00:57.137504335Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrha3temzxhaya",
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

##### Body (as JSON)
```json
{
  "requestid": "31350706",
  "status": "queued",
  "created": "2022-06-14T23:00:57.137504335Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrha3temzxhaya",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350706",
  "status": "queued",
  "created": "2022-06-14T23:00:57.137Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrha3temzxhaya",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrrheztiojzhayq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrrheztiojzhayq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:58 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350707",
  "status": "queued",
  "created": "2022-06-14T23:00:58.135709748Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrheztiojzhayq",
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

##### Body (as JSON)
```json
{
  "requestid": "31350707",
  "status": "queued",
  "created": "2022-06-14T23:00:58.135709748Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrheztiojzhayq",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350707",
  "status": "queued",
  "created": "2022-06-14T23:00:58.135Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrheztiojzhayq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrrhe4taojuhaza' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrrhe4taojuhaza"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:59 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350708",
  "status": "queued",
  "created": "2022-06-14T23:00:59.133540841Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrhe4taojuhaza",
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

##### Body (as JSON)
```json
{
  "requestid": "31350708",
  "status": "queued",
  "created": "2022-06-14T23:00:59.133540841Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrhe4taojuhaza",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350708",
  "status": "queued",
  "created": "2022-06-14T23:00:59.133Z",
  "pin": {
    "cid": "baeaaadjtge3cymrrhe4taojuhaza",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrsga3tkojuhazq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrsga3tkojuhazq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:00 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350710",
  "status": "queued",
  "created": "2022-06-14T23:01:00.134338817Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsga3tkojuhazq",
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

##### Body (as JSON)
```json
{
  "requestid": "31350710",
  "status": "queued",
  "created": "2022-06-14T23:01:00.134338817Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsga3tkojuhazq",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350710",
  "status": "queued",
  "created": "2022-06-14T23:01:00.134Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsga3tkojuhazq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrsgeztombxha2a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrsgeztombxha2a"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:01 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350713",
  "status": "queued",
  "created": "2022-06-14T23:01:01.138347466Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgeztombxha2a",
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

##### Body (as JSON)
```json
{
  "requestid": "31350713",
  "status": "queued",
  "created": "2022-06-14T23:01:01.138347466Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgeztombxha2a",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350713",
  "status": "queued",
  "created": "2022-06-14T23:01:01.138Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgeztombxha2a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrsge4dsmrqha2a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrsge4dsmrqha2a"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:02 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350715",
  "status": "queued",
  "created": "2022-06-14T23:01:02.1368535Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsge4dsmrqha2a",
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

##### Body (as JSON)
```json
{
  "requestid": "31350715",
  "status": "queued",
  "created": "2022-06-14T23:01:02.1368535Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsge4dsmrqha2a",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350715",
  "status": "queued",
  "created": "2022-06-14T23:01:02.136Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsge4dsmrqha2a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrsgi2dgojuha2q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrsgi2dgojuha2q"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:03 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350716",
  "status": "queued",
  "created": "2022-06-14T23:01:03.136245916Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgi2dgojuha2q",
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

##### Body (as JSON)
```json
{
  "requestid": "31350716",
  "status": "queued",
  "created": "2022-06-14T23:01:03.136245916Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgi2dgojuha2q",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350716",
  "status": "queued",
  "created": "2022-06-14T23:01:03.136Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgi2dgojuha2q",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjtge3cymrsgmzdanjrha3a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjtge3cymrsgmzdanjrha3a"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "282",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:04 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31350717",
  "status": "queued",
  "created": "2022-06-14T23:01:04.135378059Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgmzdanjrha3a",
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

##### Body (as JSON)
```json
{
  "requestid": "31350717",
  "status": "queued",
  "created": "2022-06-14T23:01:04.135378059Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgmzdanjrha3a",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "31350717",
  "status": "queued",
  "created": "2022-06-14T23:01:04.135Z",
  "pin": {
    "cid": "baeaaadjtge3cymrsgmzdanjrha3a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Pagination: First page of pins - ❌ FAILED

### Expectations (2/5 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is greater than or equal to 15 (failure)

  ❌ Count is greater than the number of pins returned (failure)

  ❌ Number of pins returned defaults to 10 (failure)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:05 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 13,
  "results": [
    {
      "requestid": "31350717",
      "status": "queued",
      "created": "2022-06-14T23:01:04.135378059Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgmzdanjrha3a",
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
      "requestid": "31350716",
      "status": "queued",
      "created": "2022-06-14T23:01:03.136245916Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgi2dgojuha2q",
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
      "requestid": "31350715",
      "status": "queued",
      "created": "2022-06-14T23:01:02.1368535Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsge4dsmrqha2a",
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
      "requestid": "31350713",
      "status": "queued",
      "created": "2022-06-14T23:01:01.138347466Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgeztombxha2a",
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
      "requestid": "31350710",
      "status": "queued",
      "created": "2022-06-14T23:01:00.134338817Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsga3tkojuhazq",
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
      "requestid": "31350708",
      "status": "queued",
      "created": "2022-06-14T23:00:59.133540841Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrhe4taojuhaza",
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
      "requestid": "31350707",
      "status": "queued",
      "created": "2022-06-14T23:00:58.135709748Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrheztiojzhayq",
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
      "requestid": "31350706",
      "status": "queued",
      "created": "2022-06-14T23:00:57.137504335Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrha3temzxhaya",
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
      "requestid": "31350705",
      "status": "queued",
      "created": "2022-06-14T23:00:56.136842982Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrg44dmmztg44q",
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
      "requestid": "31350701",
      "status": "queued",
      "created": "2022-06-14T23:00:51.111070801Z",
      "pin": {
        "cid": "baeaaadjtgezcymjxga4timzzg4za",
        "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31350700",
      "status": "queued",
      "created": "2022-06-14T23:00:48.960687403Z",
      "pin": {
        "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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
      "requestid": "31350699",
      "status": "queued",
      "created": "2022-06-14T23:00:48.090914193Z",
      "pin": {
        "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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
      "requestid": "31350697",
      "status": "queued",
      "created": "2022-06-14T23:00:44.957435833Z",
      "pin": {
        "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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

##### Body (as JSON)
```json
{
  "count": 13,
  "results": [
    {
      "requestid": "31350717",
      "status": "queued",
      "created": "2022-06-14T23:01:04.135378059Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgmzdanjrha3a",
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
      "requestid": "31350716",
      "status": "queued",
      "created": "2022-06-14T23:01:03.136245916Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgi2dgojuha2q",
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
      "requestid": "31350715",
      "status": "queued",
      "created": "2022-06-14T23:01:02.1368535Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsge4dsmrqha2a",
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
      "requestid": "31350713",
      "status": "queued",
      "created": "2022-06-14T23:01:01.138347466Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgeztombxha2a",
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
      "requestid": "31350710",
      "status": "queued",
      "created": "2022-06-14T23:01:00.134338817Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsga3tkojuhazq",
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
      "requestid": "31350708",
      "status": "queued",
      "created": "2022-06-14T23:00:59.133540841Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrhe4taojuhaza",
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
      "requestid": "31350707",
      "status": "queued",
      "created": "2022-06-14T23:00:58.135709748Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrheztiojzhayq",
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
      "requestid": "31350706",
      "status": "queued",
      "created": "2022-06-14T23:00:57.137504335Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrha3temzxhaya",
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
      "requestid": "31350705",
      "status": "queued",
      "created": "2022-06-14T23:00:56.136842982Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrg44dmmztg44q",
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
      "requestid": "31350701",
      "status": "queued",
      "created": "2022-06-14T23:00:51.111070801Z",
      "pin": {
        "cid": "baeaaadjtgezcymjxga4timzzg4za",
        "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31350700",
      "status": "queued",
      "created": "2022-06-14T23:00:48.960687403Z",
      "pin": {
        "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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
      "requestid": "31350699",
      "status": "queued",
      "created": "2022-06-14T23:00:48.090914193Z",
      "pin": {
        "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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
      "requestid": "31350697",
      "status": "queued",
      "created": "2022-06-14T23:00:44.957435833Z",
      "pin": {
        "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 13,
  "results": {}
}
```
## Pagination: Retrieve the next page of pins - 🟢 SUCCESS

### Expectations (3/3 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 The next page of pins doesn't contain any of previous pages pins (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-14T23%3A00%3A44.957Z
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:05 GMT",
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

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (25/28 successful)

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

  ❌ Count is greater than or equal to 15 (failure)

  ❌ Count is greater than the number of pins returned (failure)

  ❌ Number of pins returned defaults to 10 (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 The next page of pins doesn't contain any of previous pages pins (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "1752",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:55 GMT",
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
      "requestid": "31350701",
      "status": "queued",
      "created": "2022-06-14T23:00:51.111070801Z",
      "pin": {
        "cid": "baeaaadjtgezcymjxga4timzzg4za",
        "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31350700",
      "status": "queued",
      "created": "2022-06-14T23:00:48.960687403Z",
      "pin": {
        "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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
      "requestid": "31350699",
      "status": "queued",
      "created": "2022-06-14T23:00:48.090914193Z",
      "pin": {
        "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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
      "requestid": "31350697",
      "status": "queued",
      "created": "2022-06-14T23:00:44.957435833Z",
      "pin": {
        "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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
      "requestid": "31350672",
      "status": "failed",
      "created": "2022-06-14T23:00:21.614803031Z",
      "pin": {
        "cid": "baeaaadjsgi4cymjqgi3tkmbqg4zq",
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
      "requestid": "31350668",
      "status": "failed",
      "created": "2022-06-14T23:00:18.590103976Z",
      "pin": {
        "cid": "baeaaadjsgi2cyojzg4ytgojwg4za",
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

##### Body (as JSON)
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "31350701",
      "status": "queued",
      "created": "2022-06-14T23:00:51.111070801Z",
      "pin": {
        "cid": "baeaaadjtgezcymjxga4timzzg4za",
        "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31350700",
      "status": "queued",
      "created": "2022-06-14T23:00:48.960687403Z",
      "pin": {
        "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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
      "requestid": "31350699",
      "status": "queued",
      "created": "2022-06-14T23:00:48.090914193Z",
      "pin": {
        "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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
      "requestid": "31350697",
      "status": "queued",
      "created": "2022-06-14T23:00:44.957435833Z",
      "pin": {
        "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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
      "requestid": "31350672",
      "status": "failed",
      "created": "2022-06-14T23:00:21.614803031Z",
      "pin": {
        "cid": "baeaaadjsgi4cymjqgi3tkmbqg4zq",
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
      "requestid": "31350668",
      "status": "failed",
      "created": "2022-06-14T23:00:18.590103976Z",
      "pin": {
        "cid": "baeaaadjsgi2cyojzg4ytgojwg4za",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 6,
  "results": {}
}
```
## Can delete pin with requestid '31350717' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350717
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:07 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350716' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350716
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:08 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350715' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350715
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:09 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350713' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350713
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:10 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350710' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350710
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:11 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350708' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350708
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:12 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350707' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350707
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:13 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350706' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350706
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:14 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350705' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350705
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:15 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350701' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350701
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350700' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350700
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350699' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350699
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '31350697' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/31350697
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 14 Jun 2022 23:01:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns a count of zero (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:20 GMT",
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

##### Body (as JSON)
```json
{
  "count": 0,
  "results": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 0,
  "results": {}
}
```
## Can delete all pins - ❌ FAILED

### Expectations (14/27 successful)

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

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```

#### Response
```
200 OK
```
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:06 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 13,
  "results": [
    {
      "requestid": "31350717",
      "status": "queued",
      "created": "2022-06-14T23:01:04.135378059Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgmzdanjrha3a",
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
      "requestid": "31350716",
      "status": "queued",
      "created": "2022-06-14T23:01:03.136245916Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgi2dgojuha2q",
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
      "requestid": "31350715",
      "status": "queued",
      "created": "2022-06-14T23:01:02.1368535Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsge4dsmrqha2a",
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
      "requestid": "31350713",
      "status": "queued",
      "created": "2022-06-14T23:01:01.138347466Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgeztombxha2a",
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
      "requestid": "31350710",
      "status": "queued",
      "created": "2022-06-14T23:01:00.134338817Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsga3tkojuhazq",
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
      "requestid": "31350708",
      "status": "queued",
      "created": "2022-06-14T23:00:59.133540841Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrhe4taojuhaza",
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
      "requestid": "31350707",
      "status": "queued",
      "created": "2022-06-14T23:00:58.135709748Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrheztiojzhayq",
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
      "requestid": "31350706",
      "status": "queued",
      "created": "2022-06-14T23:00:57.137504335Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrha3temzxhaya",
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
      "requestid": "31350705",
      "status": "queued",
      "created": "2022-06-14T23:00:56.136842982Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrg44dmmztg44q",
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
      "requestid": "31350701",
      "status": "queued",
      "created": "2022-06-14T23:00:51.111070801Z",
      "pin": {
        "cid": "baeaaadjtgezcymjxga4timzzg4za",
        "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31350700",
      "status": "queued",
      "created": "2022-06-14T23:00:48.960687403Z",
      "pin": {
        "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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
      "requestid": "31350699",
      "status": "queued",
      "created": "2022-06-14T23:00:48.090914193Z",
      "pin": {
        "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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
      "requestid": "31350697",
      "status": "queued",
      "created": "2022-06-14T23:00:44.957435833Z",
      "pin": {
        "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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

##### Body (as JSON)
```json
{
  "count": 13,
  "results": [
    {
      "requestid": "31350717",
      "status": "queued",
      "created": "2022-06-14T23:01:04.135378059Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgmzdanjrha3a",
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
      "requestid": "31350716",
      "status": "queued",
      "created": "2022-06-14T23:01:03.136245916Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgi2dgojuha2q",
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
      "requestid": "31350715",
      "status": "queued",
      "created": "2022-06-14T23:01:02.1368535Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsge4dsmrqha2a",
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
      "requestid": "31350713",
      "status": "queued",
      "created": "2022-06-14T23:01:01.138347466Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsgeztombxha2a",
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
      "requestid": "31350710",
      "status": "queued",
      "created": "2022-06-14T23:01:00.134338817Z",
      "pin": {
        "cid": "baeaaadjtge3cymrsga3tkojuhazq",
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
      "requestid": "31350708",
      "status": "queued",
      "created": "2022-06-14T23:00:59.133540841Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrhe4taojuhaza",
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
      "requestid": "31350707",
      "status": "queued",
      "created": "2022-06-14T23:00:58.135709748Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrheztiojzhayq",
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
      "requestid": "31350706",
      "status": "queued",
      "created": "2022-06-14T23:00:57.137504335Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrha3temzxhaya",
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
      "requestid": "31350705",
      "status": "queued",
      "created": "2022-06-14T23:00:56.136842982Z",
      "pin": {
        "cid": "baeaaadjtge3cymrrg44dmmztg44q",
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
      "requestid": "31350701",
      "status": "queued",
      "created": "2022-06-14T23:00:51.111070801Z",
      "pin": {
        "cid": "baeaaadjtgezcymjxga4timzzg4za",
        "name": "ac29823a-2497-4660-96eb-69f6f6a41d2c",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31350700",
      "status": "queued",
      "created": "2022-06-14T23:00:48.960687403Z",
      "pin": {
        "cid": "baeaaadjtga4symjxgm2tkmbthezq",
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
      "requestid": "31350699",
      "status": "queued",
      "created": "2022-06-14T23:00:48.090914193Z",
      "pin": {
        "cid": "baeaaadjtga4cymjwguztcnbqgi2a",
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
      "requestid": "31350697",
      "status": "queued",
      "created": "2022-06-14T23:00:44.957435833Z",
      "pin": {
        "cid": "baeaaadjtga2symzygu4dgmbyg44q",
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
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 13,
  "results": {}
}
```
