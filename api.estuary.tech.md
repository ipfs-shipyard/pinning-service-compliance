
# https://api.estuary.tech/pinning compliance:

Execution Date: 2022-06-14T19:13:03.145Z

Revision: [45771db](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/45771db)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (3/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'baeaaadjtha2synryhe4tqnjugiyq'](#pins-post-of-cid-baeaaadjtha2synryhe4tqnjugiyq----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  🟢 [Can create a pin with name='bc3abcf3-603f-4388-a3bc-1258af9e2301'](#can-create-a-pin-with-namebc3abcf3-603f-4388-a3bc-1258af9e2301----success)

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
  "date": "Tue, 14 Jun 2022 19:12:21 GMT",
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
  "date": "Tue, 14 Jun 2022 19:12:22 GMT",
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
## Pins post of CID 'baeaaadjtha2synryhe4tqnjugiyq' - ❌ FAILED

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
{"cid":"baeaaadjtha2synryhe4tqnjugiyq"}
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
  "date": "Tue, 14 Jun 2022 19:12:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340812",
  "status": "queued",
  "created": "2022-06-14T19:12:23.238911232Z",
  "pin": {
    "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
  "requestid": "31340812",
  "status": "queued",
  "created": "2022-06-14T19:12:23.238911232Z",
  "pin": {
    "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
  "requestid": "31340812",
  "status": "queued",
  "created": "2022-06-14T19:12:23.238Z",
  "pin": {
    "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
DELETE https://api.estuary.tech/pinning/pins/31340813
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
  "date": "Tue, 14 Jun 2022 19:12:25 GMT",
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
{"cid":"baeaaadjtha3cynzugq3daojzgezq"}
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
  "date": "Tue, 14 Jun 2022 19:12:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340813",
  "status": "queued",
  "created": "2022-06-14T19:12:24.212935459Z",
  "pin": {
    "cid": "baeaaadjtha3cynzugq3daojzgezq",
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
  "requestid": "31340813",
  "status": "queued",
  "created": "2022-06-14T19:12:24.212935459Z",
  "pin": {
    "cid": "baeaaadjtha3cynzugq3daojzgezq",
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
  "requestid": "31340813",
  "status": "queued",
  "created": "2022-06-14T19:12:24.212Z",
  "pin": {
    "cid": "baeaaadjtha3cynzugq3daojzgezq",
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
  "date": "Tue, 14 Jun 2022 19:12:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{
  "count": 8,
  "results": [
    {
      "requestid": "31340812",
      "status": "failed",
      "created": "2022-06-14T19:12:23.238911232Z",
      "pin": {
        "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
      "requestid": "31340803",
      "status": "failed",
      "created": "2022-06-14T19:12:06.601652188Z",
      "pin": {
        "cid": "baeaaadjrhe2cynrrgiytkmzugi4a",
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
      "requestid": "31340802",
      "status": "failed",
      "created": "2022-06-14T19:12:05.583183851Z",
      "pin": {
        "cid": "baeaaadjrhe2cynrrge3dcnrvge4a",
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
      "requestid": "31340801",
      "status": "failed",
      "created": "2022-06-14T19:12:04.631842133Z",
      "pin": {
        "cid": "baeaaadjrhe2cynrrga3tsojygaza",
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
      "requestid": "31340800",
      "status": "failed",
      "created": "2022-06-14T19:11:59.397005872Z",
      "pin": {
        "cid": "baeaaadjrheycymjygq4tenjtgq4a",
        "name": "1ba52890-6413-4b5e-8cda-631d5143f274",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31340799",
      "status": "failed",
      "created": "2022-06-14T19:11:57.302168693Z",
      "pin": {
        "cid": "baeaaadjrha3symjxhaydinbugmza",
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
      "requestid": "31340798",
      "status": "failed",
      "created": "2022-06-14T19:11:56.138034459Z",
      "pin": {
        "cid": "baeaaadjrha3cymrrha2tgmrugm4a",
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
      "requestid": "31340796",
      "status": "failed",
      "created": "2022-06-14T19:11:53.135330163Z",
      "pin": {
        "cid": "baeaaadjrhazsymjwgi3dgojvge4a",
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
  "count": 8,
  "results": [
    {
      "requestid": "31340812",
      "status": "failed",
      "created": "2022-06-14T19:12:23.238911232Z",
      "pin": {
        "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
      "requestid": "31340803",
      "status": "failed",
      "created": "2022-06-14T19:12:06.601652188Z",
      "pin": {
        "cid": "baeaaadjrhe2cynrrgiytkmzugi4a",
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
      "requestid": "31340802",
      "status": "failed",
      "created": "2022-06-14T19:12:05.583183851Z",
      "pin": {
        "cid": "baeaaadjrhe2cynrrge3dcnrvge4a",
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
      "requestid": "31340801",
      "status": "failed",
      "created": "2022-06-14T19:12:04.631842133Z",
      "pin": {
        "cid": "baeaaadjrhe2cynrrga3tsojygaza",
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
      "requestid": "31340800",
      "status": "failed",
      "created": "2022-06-14T19:11:59.397005872Z",
      "pin": {
        "cid": "baeaaadjrheycymjygq4tenjtgq4a",
        "name": "1ba52890-6413-4b5e-8cda-631d5143f274",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31340799",
      "status": "failed",
      "created": "2022-06-14T19:11:57.302168693Z",
      "pin": {
        "cid": "baeaaadjrha3symjxhaydinbugmza",
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
      "requestid": "31340798",
      "status": "failed",
      "created": "2022-06-14T19:11:56.138034459Z",
      "pin": {
        "cid": "baeaaadjrha3cymrrha2tgmrugm4a",
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
      "requestid": "31340796",
      "status": "failed",
      "created": "2022-06-14T19:11:53.135330163Z",
      "pin": {
        "cid": "baeaaadjrhazsymjwgi3dgojvge4a",
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
  "count": 8,
  "results": {}
}
```
## Get original pin via requestid - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/31340814
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
  "date": "Tue, 14 Jun 2022 19:12:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340814",
  "status": "failed",
  "created": "2022-06-14T19:12:26.410078615Z",
  "pin": {
    "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
  "requestid": "31340814",
  "status": "failed",
  "created": "2022-06-14T19:12:26.410078615Z",
  "pin": {
    "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
  "requestid": "31340814",
  "status": "failed",
  "created": "2022-06-14T19:12:26.410Z",
  "pin": {
    "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
GET https://api.estuary.tech/pinning/pins/31340815
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
  "date": "Tue, 14 Jun 2022 19:12:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340815",
  "status": "failed",
  "created": "2022-06-14T19:12:27.421877672Z",
  "pin": {
    "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
  "requestid": "31340815",
  "status": "failed",
  "created": "2022-06-14T19:12:27.421877672Z",
  "pin": {
    "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
  "requestid": "31340815",
  "status": "failed",
  "created": "2022-06-14T19:12:27.421Z",
  "pin": {
    "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Pin's with requestid '31340814' can have cid 'baeaaadjtha4cyojygyzdmnbugu4a' replaced with 'baeaaadjtha4syojqhe2dgmbrg43a' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins/31340814
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
{"cid":"baeaaadjtha4syojqhe2dgmbrg43a"}
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
  "date": "Tue, 14 Jun 2022 19:12:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340815",
  "status": "queued",
  "created": "2022-06-14T19:12:27.421877672Z",
  "pin": {
    "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
  "requestid": "31340815",
  "status": "queued",
  "created": "2022-06-14T19:12:27.421877672Z",
  "pin": {
    "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
  "requestid": "31340815",
  "status": "queued",
  "created": "2022-06-14T19:12:27.421Z",
  "pin": {
    "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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

  🟢 Could obtain requestid from new pin (31340814) (success)

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
{"cid":"baeaaadjtha4cyojygyzdmnbugu4a"}
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
  "date": "Tue, 14 Jun 2022 19:12:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340814",
  "status": "queued",
  "created": "2022-06-14T19:12:26.410078615Z",
  "pin": {
    "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
  "requestid": "31340814",
  "status": "queued",
  "created": "2022-06-14T19:12:26.410078615Z",
  "pin": {
    "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
  "requestid": "31340814",
  "status": "queued",
  "created": "2022-06-14T19:12:26.410Z",
  "pin": {
    "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can retrieve pin with name 'bc3abcf3-603f-4388-a3bc-1258af9e2301' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=bc3abcf3-603f-4388-a3bc-1258af9e2301&match=exact
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
  "date": "Tue, 14 Jun 2022 19:12:30 GMT",
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
      "requestid": "31340816",
      "status": "failed",
      "created": "2022-06-14T19:12:29.678477438Z",
      "pin": {
        "cid": "baeaaadjthezcyojsgi3tamjtha4q",
        "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
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
      "requestid": "31340816",
      "status": "failed",
      "created": "2022-06-14T19:12:29.678477438Z",
      "pin": {
        "cid": "baeaaadjthezcyojsgi3tamjtha4q",
        "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
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
## Can retrieve pin with name 'BC3ABCF3-603F-4388-A3BC-1258AF9E2301' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=BC3ABCF3-603F-4388-A3BC-1258AF9E2301&match=iexact
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
  "date": "Tue, 14 Jun 2022 19:12:31 GMT",
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
## Can retrieve pin with name '603f-4388-a3bc-125' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=603f-4388-a3bc-125&match=partial
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
  "date": "Tue, 14 Jun 2022 19:12:32 GMT",
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
## Can retrieve pin with name '603F-4388-A3BC-125' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=603F-4388-A3BC-125&match=ipartial
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
  "date": "Tue, 14 Jun 2022 19:12:33 GMT",
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
## Can create a pin with name='bc3abcf3-603f-4388-a3bc-1258af9e2301' - 🟢 SUCCESS

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
{"cid":"baeaaadjthezcyojsgi3tamjtha4q","name":"bc3abcf3-603f-4388-a3bc-1258af9e2301"}
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
  "date": "Tue, 14 Jun 2022 19:12:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340816",
  "status": "queued",
  "created": "2022-06-14T19:12:29.678477438Z",
  "pin": {
    "cid": "baeaaadjthezcyojsgi3tamjtha4q",
    "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
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
  "requestid": "31340816",
  "status": "queued",
  "created": "2022-06-14T19:12:29.678477438Z",
  "pin": {
    "cid": "baeaaadjthezcyojsgi3tamjtha4q",
    "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
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
  "requestid": "31340816",
  "status": "queued",
  "created": "2022-06-14T19:12:29.678Z",
  "pin": {
    "cid": "baeaaadjthezcyojsgi3tamjtha4q",
    "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301"
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqge2tsojtgaza' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqge2tsojtgaza"}
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
  "date": "Tue, 14 Jun 2022 19:12:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340817",
  "status": "queued",
  "created": "2022-06-14T19:12:34.861480626Z",
  "pin": {
    "cid": "baeaaadjthe3synbqge2tsojtgaza",
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
  "requestid": "31340817",
  "status": "queued",
  "created": "2022-06-14T19:12:34.861480626Z",
  "pin": {
    "cid": "baeaaadjthe3synbqge2tsojtgaza",
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
  "requestid": "31340817",
  "status": "queued",
  "created": "2022-06-14T19:12:34.861Z",
  "pin": {
    "cid": "baeaaadjthe3synbqge2tsojtgaza",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgizdgnbqgaya' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgizdgnbqgaya"}
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
  "date": "Tue, 14 Jun 2022 19:12:35 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340818",
  "status": "queued",
  "created": "2022-06-14T19:12:35.846278507Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgizdgnbqgaya",
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
  "requestid": "31340818",
  "status": "queued",
  "created": "2022-06-14T19:12:35.846278507Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgizdgnbqgaya",
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
  "requestid": "31340818",
  "status": "queued",
  "created": "2022-06-14T19:12:35.846Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgizdgnbqgaya",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgi3tomrwhe4a' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgi3tomrwhe4a"}
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
  "date": "Tue, 14 Jun 2022 19:12:36 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340819",
  "status": "queued",
  "created": "2022-06-14T19:12:36.847084542Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgi3tomrwhe4a",
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
  "requestid": "31340819",
  "status": "queued",
  "created": "2022-06-14T19:12:36.847084542Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgi3tomrwhe4a",
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
  "requestid": "31340819",
  "status": "queued",
  "created": "2022-06-14T19:12:36.847Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgi3tomrwhe4a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgmzdamzuhe3a' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgmzdamzuhe3a"}
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
  "date": "Tue, 14 Jun 2022 19:12:37 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340820",
  "status": "queued",
  "created": "2022-06-14T19:12:37.845614781Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgmzdamzuhe3a",
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
  "requestid": "31340820",
  "status": "queued",
  "created": "2022-06-14T19:12:37.845614781Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgmzdamzuhe3a",
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
  "requestid": "31340820",
  "status": "queued",
  "created": "2022-06-14T19:12:37.845Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgmzdamzuhe3a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgm3doojuhe2q' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgm3doojuhe2q"}
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
  "date": "Tue, 14 Jun 2022 19:12:38 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340821",
  "status": "queued",
  "created": "2022-06-14T19:12:38.861419818Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgm3doojuhe2q",
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
  "requestid": "31340821",
  "status": "queued",
  "created": "2022-06-14T19:12:38.861419818Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgm3doojuhe2q",
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
  "requestid": "31340821",
  "status": "queued",
  "created": "2022-06-14T19:12:38.861Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgm3doojuhe2q",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgqydsmbwhezq' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgqydsmbwhezq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "281",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:12:39 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340822",
  "status": "queued",
  "created": "2022-06-14T19:12:39.85583316Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgqydsmbwhezq",
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
  "requestid": "31340822",
  "status": "queued",
  "created": "2022-06-14T19:12:39.85583316Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgqydsmbwhezq",
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
  "requestid": "31340822",
  "status": "queued",
  "created": "2022-06-14T19:12:39.855Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgqydsmbwhezq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgq2diobwheza' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgq2diobwheza"}
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
  "date": "Tue, 14 Jun 2022 19:12:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340823",
  "status": "queued",
  "created": "2022-06-14T19:12:40.902074535Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgq2diobwheza",
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
  "requestid": "31340823",
  "status": "queued",
  "created": "2022-06-14T19:12:40.902074535Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgq2diobwheza",
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
  "requestid": "31340823",
  "status": "queued",
  "created": "2022-06-14T19:12:40.902Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgq2diobwheza",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgq4dqmjuheya' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgq4dqmjuheya"}
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
  "date": "Tue, 14 Jun 2022 19:12:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340824",
  "status": "queued",
  "created": "2022-06-14T19:12:41.845926643Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgq4dqmjuheya",
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
  "requestid": "31340824",
  "status": "queued",
  "created": "2022-06-14T19:12:41.845926643Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgq4dqmjuheya",
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
  "requestid": "31340824",
  "status": "queued",
  "created": "2022-06-14T19:12:41.845Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgq4dqmjuheya",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqguzdgmbrha4q' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqguzdgmbrha4q"}
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
  "date": "Tue, 14 Jun 2022 19:12:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340825",
  "status": "queued",
  "created": "2022-06-14T19:12:42.857239771Z",
  "pin": {
    "cid": "baeaaadjthe3synbqguzdgmbrha4q",
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
  "requestid": "31340825",
  "status": "queued",
  "created": "2022-06-14T19:12:42.857239771Z",
  "pin": {
    "cid": "baeaaadjthe3synbqguzdgmbrha4q",
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
  "requestid": "31340825",
  "status": "queued",
  "created": "2022-06-14T19:12:42.857Z",
  "pin": {
    "cid": "baeaaadjthe3synbqguzdgmbrha4q",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgu2tknruha4a' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgu2tknruha4a"}
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
  "date": "Tue, 14 Jun 2022 19:12:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340826",
  "status": "queued",
  "created": "2022-06-14T19:12:43.848391104Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgu2tknruha4a",
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
  "requestid": "31340826",
  "status": "queued",
  "created": "2022-06-14T19:12:43.848391104Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgu2tknruha4a",
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
  "requestid": "31340826",
  "status": "queued",
  "created": "2022-06-14T19:12:43.848Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgu2tknruha4a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaadjthe3synbqgu4dqmzzha3a' - 🟢 SUCCESS

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
{"cid":"baeaaadjthe3synbqgu4dqmzzha3a"}
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
  "date": "Tue, 14 Jun 2022 19:12:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31340827",
  "status": "queued",
  "created": "2022-06-14T19:12:44.858198377Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgu4dqmzzha3a",
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
  "requestid": "31340827",
  "status": "queued",
  "created": "2022-06-14T19:12:44.858198377Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgu4dqmzzha3a",
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
  "requestid": "31340827",
  "status": "queued",
  "created": "2022-06-14T19:12:44.858Z",
  "pin": {
    "cid": "baeaaadjthe3synbqgu4dqmzzha3a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
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
  "date": "Tue, 14 Jun 2022 19:12:45 GMT",
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
      "requestid": "31340827",
      "status": "failed",
      "created": "2022-06-14T19:12:44.858198377Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgu4dqmzzha3a",
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
      "requestid": "31340826",
      "status": "failed",
      "created": "2022-06-14T19:12:43.848391104Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgu2tknruha4a",
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
      "requestid": "31340825",
      "status": "failed",
      "created": "2022-06-14T19:12:42.857239771Z",
      "pin": {
        "cid": "baeaaadjthe3synbqguzdgmbrha4q",
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
      "requestid": "31340824",
      "status": "failed",
      "created": "2022-06-14T19:12:41.845926643Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgq4dqmjuheya",
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
      "requestid": "31340823",
      "status": "failed",
      "created": "2022-06-14T19:12:40.902074535Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgq2diobwheza",
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
      "requestid": "31340822",
      "status": "failed",
      "created": "2022-06-14T19:12:39.85583316Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgqydsmbwhezq",
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
      "requestid": "31340821",
      "status": "failed",
      "created": "2022-06-14T19:12:38.861419818Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgm3doojuhe2q",
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
      "requestid": "31340820",
      "status": "failed",
      "created": "2022-06-14T19:12:37.845614781Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgmzdamzuhe3a",
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
      "requestid": "31340819",
      "status": "failed",
      "created": "2022-06-14T19:12:36.847084542Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgi3tomrwhe4a",
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
      "requestid": "31340818",
      "status": "failed",
      "created": "2022-06-14T19:12:35.846278507Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgizdgnbqgaya",
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
      "requestid": "31340817",
      "status": "failed",
      "created": "2022-06-14T19:12:34.861480626Z",
      "pin": {
        "cid": "baeaaadjthe3synbqge2tsojtgaza",
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
      "requestid": "31340816",
      "status": "failed",
      "created": "2022-06-14T19:12:29.678477438Z",
      "pin": {
        "cid": "baeaaadjthezcyojsgi3tamjtha4q",
        "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31340815",
      "status": "failed",
      "created": "2022-06-14T19:12:27.421877672Z",
      "pin": {
        "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
      "requestid": "31340814",
      "status": "failed",
      "created": "2022-06-14T19:12:26.410078615Z",
      "pin": {
        "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
      "requestid": "31340812",
      "status": "failed",
      "created": "2022-06-14T19:12:23.238911232Z",
      "pin": {
        "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
  "count": 15,
  "results": [
    {
      "requestid": "31340827",
      "status": "failed",
      "created": "2022-06-14T19:12:44.858198377Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgu4dqmzzha3a",
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
      "requestid": "31340826",
      "status": "failed",
      "created": "2022-06-14T19:12:43.848391104Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgu2tknruha4a",
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
      "requestid": "31340825",
      "status": "failed",
      "created": "2022-06-14T19:12:42.857239771Z",
      "pin": {
        "cid": "baeaaadjthe3synbqguzdgmbrha4q",
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
      "requestid": "31340824",
      "status": "failed",
      "created": "2022-06-14T19:12:41.845926643Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgq4dqmjuheya",
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
      "requestid": "31340823",
      "status": "failed",
      "created": "2022-06-14T19:12:40.902074535Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgq2diobwheza",
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
      "requestid": "31340822",
      "status": "failed",
      "created": "2022-06-14T19:12:39.85583316Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgqydsmbwhezq",
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
      "requestid": "31340821",
      "status": "failed",
      "created": "2022-06-14T19:12:38.861419818Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgm3doojuhe2q",
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
      "requestid": "31340820",
      "status": "failed",
      "created": "2022-06-14T19:12:37.845614781Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgmzdamzuhe3a",
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
      "requestid": "31340819",
      "status": "failed",
      "created": "2022-06-14T19:12:36.847084542Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgi3tomrwhe4a",
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
      "requestid": "31340818",
      "status": "failed",
      "created": "2022-06-14T19:12:35.846278507Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgizdgnbqgaya",
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
      "requestid": "31340817",
      "status": "failed",
      "created": "2022-06-14T19:12:34.861480626Z",
      "pin": {
        "cid": "baeaaadjthe3synbqge2tsojtgaza",
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
      "requestid": "31340816",
      "status": "failed",
      "created": "2022-06-14T19:12:29.678477438Z",
      "pin": {
        "cid": "baeaaadjthezcyojsgi3tamjtha4q",
        "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31340815",
      "status": "failed",
      "created": "2022-06-14T19:12:27.421877672Z",
      "pin": {
        "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
      "requestid": "31340814",
      "status": "failed",
      "created": "2022-06-14T19:12:26.410078615Z",
      "pin": {
        "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
      "requestid": "31340812",
      "status": "failed",
      "created": "2022-06-14T19:12:23.238911232Z",
      "pin": {
        "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
  "count": 15,
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
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-14T19%3A12%3A23.238Z
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
  "date": "Tue, 14 Jun 2022 19:12:46 GMT",
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

### Expectations (30/32 successful)

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
  "content-length": "1188",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:12:33 GMT",
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
      "requestid": "31340816",
      "status": "failed",
      "created": "2022-06-14T19:12:29.678477438Z",
      "pin": {
        "cid": "baeaaadjthezcyojsgi3tamjtha4q",
        "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31340815",
      "status": "failed",
      "created": "2022-06-14T19:12:27.421877672Z",
      "pin": {
        "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
      "requestid": "31340814",
      "status": "failed",
      "created": "2022-06-14T19:12:26.410078615Z",
      "pin": {
        "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
      "requestid": "31340812",
      "status": "failed",
      "created": "2022-06-14T19:12:23.238911232Z",
      "pin": {
        "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
  "count": 4,
  "results": [
    {
      "requestid": "31340816",
      "status": "failed",
      "created": "2022-06-14T19:12:29.678477438Z",
      "pin": {
        "cid": "baeaaadjthezcyojsgi3tamjtha4q",
        "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31340815",
      "status": "failed",
      "created": "2022-06-14T19:12:27.421877672Z",
      "pin": {
        "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
      "requestid": "31340814",
      "status": "failed",
      "created": "2022-06-14T19:12:26.410078615Z",
      "pin": {
        "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
      "requestid": "31340812",
      "status": "failed",
      "created": "2022-06-14T19:12:23.238911232Z",
      "pin": {
        "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
  "count": 4,
  "results": {}
}
```
## Can delete pin with requestid '31340827' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340827
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
  "date": "Tue, 14 Jun 2022 19:12:48 GMT",
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
## Can delete pin with requestid '31340826' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340826
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
  "date": "Tue, 14 Jun 2022 19:12:49 GMT",
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
## Can delete pin with requestid '31340825' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340825
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
  "date": "Tue, 14 Jun 2022 19:12:50 GMT",
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
## Can delete pin with requestid '31340824' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340824
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
  "date": "Tue, 14 Jun 2022 19:12:51 GMT",
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
## Can delete pin with requestid '31340823' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340823
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
  "date": "Tue, 14 Jun 2022 19:12:52 GMT",
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
## Can delete pin with requestid '31340822' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340822
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
  "date": "Tue, 14 Jun 2022 19:12:53 GMT",
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
## Can delete pin with requestid '31340821' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340821
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
  "date": "Tue, 14 Jun 2022 19:12:54 GMT",
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
## Can delete pin with requestid '31340820' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340820
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
  "date": "Tue, 14 Jun 2022 19:12:55 GMT",
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
## Can delete pin with requestid '31340819' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340819
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
  "date": "Tue, 14 Jun 2022 19:12:56 GMT",
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
## Can delete pin with requestid '31340818' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340818
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
  "date": "Tue, 14 Jun 2022 19:12:57 GMT",
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
## Can delete pin with requestid '31340817' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340817
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
  "date": "Tue, 14 Jun 2022 19:12:58 GMT",
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
## Can delete pin with requestid '31340816' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340816
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
  "date": "Tue, 14 Jun 2022 19:12:59 GMT",
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
## Can delete pin with requestid '31340815' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340815
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
  "date": "Tue, 14 Jun 2022 19:13:00 GMT",
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
## Can delete pin with requestid '31340814' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340814
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
  "date": "Tue, 14 Jun 2022 19:13:01 GMT",
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
## Can delete pin with requestid '31340812' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31340812
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
  "date": "Tue, 14 Jun 2022 19:13:02 GMT",
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
  "date": "Tue, 14 Jun 2022 19:13:03 GMT",
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
  "date": "Tue, 14 Jun 2022 19:12:47 GMT",
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
      "requestid": "31340827",
      "status": "failed",
      "created": "2022-06-14T19:12:44.858198377Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgu4dqmzzha3a",
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
      "requestid": "31340826",
      "status": "failed",
      "created": "2022-06-14T19:12:43.848391104Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgu2tknruha4a",
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
      "requestid": "31340825",
      "status": "failed",
      "created": "2022-06-14T19:12:42.857239771Z",
      "pin": {
        "cid": "baeaaadjthe3synbqguzdgmbrha4q",
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
      "requestid": "31340824",
      "status": "failed",
      "created": "2022-06-14T19:12:41.845926643Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgq4dqmjuheya",
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
      "requestid": "31340823",
      "status": "failed",
      "created": "2022-06-14T19:12:40.902074535Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgq2diobwheza",
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
      "requestid": "31340822",
      "status": "failed",
      "created": "2022-06-14T19:12:39.85583316Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgqydsmbwhezq",
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
      "requestid": "31340821",
      "status": "failed",
      "created": "2022-06-14T19:12:38.861419818Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgm3doojuhe2q",
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
      "requestid": "31340820",
      "status": "failed",
      "created": "2022-06-14T19:12:37.845614781Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgmzdamzuhe3a",
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
      "requestid": "31340819",
      "status": "failed",
      "created": "2022-06-14T19:12:36.847084542Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgi3tomrwhe4a",
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
      "requestid": "31340818",
      "status": "failed",
      "created": "2022-06-14T19:12:35.846278507Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgizdgnbqgaya",
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
      "requestid": "31340817",
      "status": "failed",
      "created": "2022-06-14T19:12:34.861480626Z",
      "pin": {
        "cid": "baeaaadjthe3synbqge2tsojtgaza",
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
      "requestid": "31340816",
      "status": "failed",
      "created": "2022-06-14T19:12:29.678477438Z",
      "pin": {
        "cid": "baeaaadjthezcyojsgi3tamjtha4q",
        "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31340815",
      "status": "failed",
      "created": "2022-06-14T19:12:27.421877672Z",
      "pin": {
        "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
      "requestid": "31340814",
      "status": "failed",
      "created": "2022-06-14T19:12:26.410078615Z",
      "pin": {
        "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
      "requestid": "31340812",
      "status": "failed",
      "created": "2022-06-14T19:12:23.238911232Z",
      "pin": {
        "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
  "count": 15,
  "results": [
    {
      "requestid": "31340827",
      "status": "failed",
      "created": "2022-06-14T19:12:44.858198377Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgu4dqmzzha3a",
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
      "requestid": "31340826",
      "status": "failed",
      "created": "2022-06-14T19:12:43.848391104Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgu2tknruha4a",
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
      "requestid": "31340825",
      "status": "failed",
      "created": "2022-06-14T19:12:42.857239771Z",
      "pin": {
        "cid": "baeaaadjthe3synbqguzdgmbrha4q",
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
      "requestid": "31340824",
      "status": "failed",
      "created": "2022-06-14T19:12:41.845926643Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgq4dqmjuheya",
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
      "requestid": "31340823",
      "status": "failed",
      "created": "2022-06-14T19:12:40.902074535Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgq2diobwheza",
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
      "requestid": "31340822",
      "status": "failed",
      "created": "2022-06-14T19:12:39.85583316Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgqydsmbwhezq",
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
      "requestid": "31340821",
      "status": "failed",
      "created": "2022-06-14T19:12:38.861419818Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgm3doojuhe2q",
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
      "requestid": "31340820",
      "status": "failed",
      "created": "2022-06-14T19:12:37.845614781Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgmzdamzuhe3a",
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
      "requestid": "31340819",
      "status": "failed",
      "created": "2022-06-14T19:12:36.847084542Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgi3tomrwhe4a",
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
      "requestid": "31340818",
      "status": "failed",
      "created": "2022-06-14T19:12:35.846278507Z",
      "pin": {
        "cid": "baeaaadjthe3synbqgizdgnbqgaya",
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
      "requestid": "31340817",
      "status": "failed",
      "created": "2022-06-14T19:12:34.861480626Z",
      "pin": {
        "cid": "baeaaadjthe3synbqge2tsojtgaza",
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
      "requestid": "31340816",
      "status": "failed",
      "created": "2022-06-14T19:12:29.678477438Z",
      "pin": {
        "cid": "baeaaadjthezcyojsgi3tamjtha4q",
        "name": "bc3abcf3-603f-4388-a3bc-1258af9e2301",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31340815",
      "status": "failed",
      "created": "2022-06-14T19:12:27.421877672Z",
      "pin": {
        "cid": "baeaaadjtha4syojqhe2dgmbrg43a",
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
      "requestid": "31340814",
      "status": "failed",
      "created": "2022-06-14T19:12:26.410078615Z",
      "pin": {
        "cid": "baeaaadjtha4cyojygyzdmnbugu4a",
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
      "requestid": "31340812",
      "status": "failed",
      "created": "2022-06-14T19:12:23.238911232Z",
      "pin": {
        "cid": "baeaaadjtha2synryhe4tqnjugiyq",
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
  "count": 15,
  "results": {}
}
```
