
# https://api.estuary.tech/pinning compliance:

Execution Date: 2022-06-14T19:28:45.057Z

Revision: [baaaa8c](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/baaaa8c)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (3/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'baeaaadjrgq2synzxga4tsmjtguzq'](#pins-post-of-cid-baeaaadjrgq2synzxga4tsmjtguzq----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  🟢 [Can create a pin with name='e0f9212f-f5a8-40a0-abda-d8f84b7309ed'](#can-create-a-pin-with-namee0f9212f-f5a8-40a0-abda-d8f84b7309ed----success)

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
  "date": "Tue, 14 Jun 2022 19:28:03 GMT",
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
  "date": "Tue, 14 Jun 2022 19:28:04 GMT",
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
## Pins post of CID 'baeaaadjrgq2synzxga4tsmjtguzq' - ❌ FAILED

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
{"cid":"baeaaadjrgq2synzxga4tsmjtguzq"}
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
  "date": "Tue, 14 Jun 2022 19:28:05 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341013",
  "status": "queued",
  "created": "2022-06-14T19:28:05.731632446Z",
  "pin": {
    "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
  "requestid": "31341013",
  "status": "queued",
  "created": "2022-06-14T19:28:05.731632446Z",
  "pin": {
    "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
  "requestid": "31341013",
  "status": "queued",
  "created": "2022-06-14T19:28:05.731Z",
  "pin": {
    "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
DELETE https://api.estuary.tech/pinning/pins/31341014
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
  "date": "Tue, 14 Jun 2022 19:28:07 GMT",
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
{"cid":"baeaaadjrgq3cyobqhaydonbqgyya"}
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
  "date": "Tue, 14 Jun 2022 19:28:06 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341014",
  "status": "queued",
  "created": "2022-06-14T19:28:06.693455907Z",
  "pin": {
    "cid": "baeaaadjrgq3cyobqhaydonbqgyya",
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
  "requestid": "31341014",
  "status": "queued",
  "created": "2022-06-14T19:28:06.693455907Z",
  "pin": {
    "cid": "baeaaadjrgq3cyobqhaydonbqgyya",
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
  "requestid": "31341014",
  "status": "queued",
  "created": "2022-06-14T19:28:06.693Z",
  "pin": {
    "cid": "baeaaadjrgq3cyobqhaydonbqgyya",
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
  "content-length": "306",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:07 GMT",
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
      "requestid": "31341013",
      "status": "failed",
      "created": "2022-06-14T19:28:05.731632446Z",
      "pin": {
        "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
  "count": 1,
  "results": [
    {
      "requestid": "31341013",
      "status": "failed",
      "created": "2022-06-14T19:28:05.731632446Z",
      "pin": {
        "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
  "count": 1,
  "results": {}
}
```
## Get original pin via requestid - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/31341015
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
  "date": "Tue, 14 Jun 2022 19:28:10 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341015",
  "status": "failed",
  "created": "2022-06-14T19:28:08.778418693Z",
  "pin": {
    "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
  "requestid": "31341015",
  "status": "failed",
  "created": "2022-06-14T19:28:08.778418693Z",
  "pin": {
    "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
  "requestid": "31341015",
  "status": "failed",
  "created": "2022-06-14T19:28:08.778Z",
  "pin": {
    "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
GET https://api.estuary.tech/pinning/pins/31341016
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
  "date": "Tue, 14 Jun 2022 19:28:11 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341016",
  "status": "failed",
  "created": "2022-06-14T19:28:09.783955904Z",
  "pin": {
    "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
  "requestid": "31341016",
  "status": "failed",
  "created": "2022-06-14T19:28:09.783955904Z",
  "pin": {
    "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
  "requestid": "31341016",
  "status": "failed",
  "created": "2022-06-14T19:28:09.783Z",
  "pin": {
    "cid": "baeaaadjrgq4syobvga3dqojxguya",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Pin's with requestid '31341015' can have cid 'baeaaadjrgq4cyobvgyzdambsge4a' replaced with 'baeaaadjrgq4syobvga3dqojxguya' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins/31341015
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
{"cid":"baeaaadjrgq4syobvga3dqojxguya"}
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
  "date": "Tue, 14 Jun 2022 19:28:09 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341016",
  "status": "queued",
  "created": "2022-06-14T19:28:09.783955904Z",
  "pin": {
    "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
  "requestid": "31341016",
  "status": "queued",
  "created": "2022-06-14T19:28:09.783955904Z",
  "pin": {
    "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
  "requestid": "31341016",
  "status": "queued",
  "created": "2022-06-14T19:28:09.783Z",
  "pin": {
    "cid": "baeaaadjrgq4syobvga3dqojxguya",
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

  🟢 Could obtain requestid from new pin (31341015) (success)

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
{"cid":"baeaaadjrgq4cyobvgyzdambsge4a"}
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
  "date": "Tue, 14 Jun 2022 19:28:08 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341015",
  "status": "queued",
  "created": "2022-06-14T19:28:08.778418693Z",
  "pin": {
    "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
  "requestid": "31341015",
  "status": "queued",
  "created": "2022-06-14T19:28:08.778418693Z",
  "pin": {
    "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
  "requestid": "31341015",
  "status": "queued",
  "created": "2022-06-14T19:28:08.778Z",
  "pin": {
    "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can retrieve pin with name 'e0f9212f-f5a8-40a0-abda-d8f84b7309ed' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=e0f9212f-f5a8-40a0-abda-d8f84b7309ed&match=exact
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
  "date": "Tue, 14 Jun 2022 19:28:12 GMT",
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
      "requestid": "31341017",
      "status": "failed",
      "created": "2022-06-14T19:28:11.861066617Z",
      "pin": {
        "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
        "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
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
      "requestid": "31341017",
      "status": "failed",
      "created": "2022-06-14T19:28:11.861066617Z",
      "pin": {
        "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
        "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
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
## Can retrieve pin with name 'E0F9212F-F5A8-40A0-ABDA-D8F84B7309ED' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=E0F9212F-F5A8-40A0-ABDA-D8F84B7309ED&match=iexact
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
  "date": "Tue, 14 Jun 2022 19:28:13 GMT",
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
## Can retrieve pin with name 'f5a8-40a0-abda-d8f' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=f5a8-40a0-abda-d8f&match=partial
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
  "date": "Tue, 14 Jun 2022 19:28:14 GMT",
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
## Can retrieve pin with name 'F5A8-40A0-ABDA-D8F' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=F5A8-40A0-ABDA-D8F&match=ipartial
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
  "date": "Tue, 14 Jun 2022 19:28:15 GMT",
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
## Can create a pin with name='e0f9212f-f5a8-40a0-abda-d8f84b7309ed' - 🟢 SUCCESS

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
{"cid":"baeaaadjrguzcyobvgm4tkmjugaya","name":"e0f9212f-f5a8-40a0-abda-d8f84b7309ed"}
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
  "date": "Tue, 14 Jun 2022 19:28:11 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341017",
  "status": "queued",
  "created": "2022-06-14T19:28:11.861066617Z",
  "pin": {
    "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
    "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
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
  "requestid": "31341017",
  "status": "queued",
  "created": "2022-06-14T19:28:11.861066617Z",
  "pin": {
    "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
    "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
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
  "requestid": "31341017",
  "status": "queued",
  "created": "2022-06-14T19:28:11.861Z",
  "pin": {
    "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
    "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed"
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3symjxg43dmnzs' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3symjxg43dmnzs"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341020",
  "status": "queued",
  "created": "2022-06-14T19:28:16.926515273Z",
  "pin": {
    "cid": "baeaaaczrgu3symjxg43dmnzs",
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
  "requestid": "31341020",
  "status": "queued",
  "created": "2022-06-14T19:28:16.926515273Z",
  "pin": {
    "cid": "baeaaaczrgu3symjxg43dmnzs",
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
  "requestid": "31341020",
  "status": "queued",
  "created": "2022-06-14T19:28:16.926Z",
  "pin": {
    "cid": "baeaaaczrgu3symjxg43dmnzs",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3symrtgmydenzr' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3symrtgmydenzr"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341021",
  "status": "queued",
  "created": "2022-06-14T19:28:17.916019923Z",
  "pin": {
    "cid": "baeaaaczrgu3symrtgmydenzr",
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
  "requestid": "31341021",
  "status": "queued",
  "created": "2022-06-14T19:28:17.916019923Z",
  "pin": {
    "cid": "baeaaaczrgu3symrtgmydenzr",
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
  "requestid": "31341021",
  "status": "queued",
  "created": "2022-06-14T19:28:17.916Z",
  "pin": {
    "cid": "baeaaaczrgu3symrtgmydenzr",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3symrxgq2tcnzr' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3symrxgq2tcnzr"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341022",
  "status": "queued",
  "created": "2022-06-14T19:28:18.924690228Z",
  "pin": {
    "cid": "baeaaaczrgu3symrxgq2tcnzr",
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
  "requestid": "31341022",
  "status": "queued",
  "created": "2022-06-14T19:28:18.924690228Z",
  "pin": {
    "cid": "baeaaaczrgu3symrxgq2tcnzr",
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
  "requestid": "31341022",
  "status": "queued",
  "created": "2022-06-14T19:28:18.924Z",
  "pin": {
    "cid": "baeaaaczrgu3symrxgq2tcnzr",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3symzrge3danzr' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3symzrge3danzr"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341023",
  "status": "queued",
  "created": "2022-06-14T19:28:19.928573313Z",
  "pin": {
    "cid": "baeaaaczrgu3symzrge3danzr",
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
  "requestid": "31341023",
  "status": "queued",
  "created": "2022-06-14T19:28:19.928573313Z",
  "pin": {
    "cid": "baeaaaczrgu3symzrge3danzr",
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
  "requestid": "31341023",
  "status": "queued",
  "created": "2022-06-14T19:28:19.928Z",
  "pin": {
    "cid": "baeaaaczrgu3symzrge3danzr",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3symzwgu2donzr' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3symzwgu2donzr"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "277",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341024",
  "status": "queued",
  "created": "2022-06-14T19:28:20.92724395Z",
  "pin": {
    "cid": "baeaaaczrgu3symzwgu2donzr",
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
  "requestid": "31341024",
  "status": "queued",
  "created": "2022-06-14T19:28:20.92724395Z",
  "pin": {
    "cid": "baeaaaczrgu3symzwgu2donzr",
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
  "requestid": "31341024",
  "status": "queued",
  "created": "2022-06-14T19:28:20.927Z",
  "pin": {
    "cid": "baeaaaczrgu3symzwgu2donzr",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3synbqguzdinzq' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3synbqguzdinzq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "277",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341025",
  "status": "queued",
  "created": "2022-06-14T19:28:21.92266576Z",
  "pin": {
    "cid": "baeaaaczrgu3synbqguzdinzq",
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
  "requestid": "31341025",
  "status": "queued",
  "created": "2022-06-14T19:28:21.92266576Z",
  "pin": {
    "cid": "baeaaaczrgu3synbqguzdinzq",
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
  "requestid": "31341025",
  "status": "queued",
  "created": "2022-06-14T19:28:21.922Z",
  "pin": {
    "cid": "baeaaaczrgu3synbqguzdinzq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3synbthe4dsnzq' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3synbthe4dsnzq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341026",
  "status": "queued",
  "created": "2022-06-14T19:28:22.925507626Z",
  "pin": {
    "cid": "baeaaaczrgu3synbthe4dsnzq",
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
  "requestid": "31341026",
  "status": "queued",
  "created": "2022-06-14T19:28:22.925507626Z",
  "pin": {
    "cid": "baeaaaczrgu3synbthe4dsnzq",
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
  "requestid": "31341026",
  "status": "queued",
  "created": "2022-06-14T19:28:22.925Z",
  "pin": {
    "cid": "baeaaaczrgu3synbthe4dsnzq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3synbxgi2tsnzq' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3synbxgi2tsnzq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341027",
  "status": "queued",
  "created": "2022-06-14T19:28:23.926359258Z",
  "pin": {
    "cid": "baeaaaczrgu3synbxgi2tsnzq",
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
  "requestid": "31341027",
  "status": "queued",
  "created": "2022-06-14T19:28:23.926359258Z",
  "pin": {
    "cid": "baeaaaczrgu3synbxgi2tsnzq",
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
  "requestid": "31341027",
  "status": "queued",
  "created": "2022-06-14T19:28:23.926Z",
  "pin": {
    "cid": "baeaaaczrgu3synbxgi2tsnzq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3synjrgy3dcnzq' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3synjrgy3dcnzq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341028",
  "status": "queued",
  "created": "2022-06-14T19:28:24.926186474Z",
  "pin": {
    "cid": "baeaaaczrgu3synjrgy3dcnzq",
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
  "requestid": "31341028",
  "status": "queued",
  "created": "2022-06-14T19:28:24.926186474Z",
  "pin": {
    "cid": "baeaaaczrgu3synjrgy3dcnzq",
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
  "requestid": "31341028",
  "status": "queued",
  "created": "2022-06-14T19:28:24.926Z",
  "pin": {
    "cid": "baeaaaczrgu3synjrgy3dcnzq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3synjvgaydsnzq' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3synjvgaydsnzq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341029",
  "status": "queued",
  "created": "2022-06-14T19:28:25.935818323Z",
  "pin": {
    "cid": "baeaaaczrgu3synjvgaydsnzq",
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
  "requestid": "31341029",
  "status": "queued",
  "created": "2022-06-14T19:28:25.935818323Z",
  "pin": {
    "cid": "baeaaaczrgu3synjvgaydsnzq",
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
  "requestid": "31341029",
  "status": "queued",
  "created": "2022-06-14T19:28:25.935Z",
  "pin": {
    "cid": "baeaaaczrgu3synjvgaydsnzq",
    "name": ""
  },
  "delegates": [
    "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
  ]
}
```
## Can create new pin for testing pagination cid='baeaaaczrgu3synjygi3tgnzq' - 🟢 SUCCESS

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
{"cid":"baeaaaczrgu3synjygi3tgnzq"}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "278",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 14 Jun 2022 19:28:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{
  "requestid": "31341030",
  "status": "queued",
  "created": "2022-06-14T19:28:26.928228472Z",
  "pin": {
    "cid": "baeaaaczrgu3synjygi3tgnzq",
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
  "requestid": "31341030",
  "status": "queued",
  "created": "2022-06-14T19:28:26.928228472Z",
  "pin": {
    "cid": "baeaaaczrgu3synjygi3tgnzq",
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
  "requestid": "31341030",
  "status": "queued",
  "created": "2022-06-14T19:28:26.928Z",
  "pin": {
    "cid": "baeaaaczrgu3synjygi3tgnzq",
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
  "date": "Tue, 14 Jun 2022 19:28:27 GMT",
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
      "requestid": "31341030",
      "status": "failed",
      "created": "2022-06-14T19:28:26.928228472Z",
      "pin": {
        "cid": "baeaaaczrgu3synjygi3tgnzq",
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
      "requestid": "31341029",
      "status": "failed",
      "created": "2022-06-14T19:28:25.935818323Z",
      "pin": {
        "cid": "baeaaaczrgu3synjvgaydsnzq",
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
      "requestid": "31341028",
      "status": "failed",
      "created": "2022-06-14T19:28:24.926186474Z",
      "pin": {
        "cid": "baeaaaczrgu3synjrgy3dcnzq",
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
      "requestid": "31341027",
      "status": "failed",
      "created": "2022-06-14T19:28:23.926359258Z",
      "pin": {
        "cid": "baeaaaczrgu3synbxgi2tsnzq",
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
      "requestid": "31341026",
      "status": "failed",
      "created": "2022-06-14T19:28:22.925507626Z",
      "pin": {
        "cid": "baeaaaczrgu3synbthe4dsnzq",
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
      "requestid": "31341025",
      "status": "failed",
      "created": "2022-06-14T19:28:21.92266576Z",
      "pin": {
        "cid": "baeaaaczrgu3synbqguzdinzq",
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
      "requestid": "31341024",
      "status": "failed",
      "created": "2022-06-14T19:28:20.92724395Z",
      "pin": {
        "cid": "baeaaaczrgu3symzwgu2donzr",
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
      "requestid": "31341023",
      "status": "failed",
      "created": "2022-06-14T19:28:19.928573313Z",
      "pin": {
        "cid": "baeaaaczrgu3symzrge3danzr",
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
      "requestid": "31341022",
      "status": "failed",
      "created": "2022-06-14T19:28:18.924690228Z",
      "pin": {
        "cid": "baeaaaczrgu3symrxgq2tcnzr",
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
      "requestid": "31341021",
      "status": "failed",
      "created": "2022-06-14T19:28:17.916019923Z",
      "pin": {
        "cid": "baeaaaczrgu3symrtgmydenzr",
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
      "requestid": "31341020",
      "status": "failed",
      "created": "2022-06-14T19:28:16.926515273Z",
      "pin": {
        "cid": "baeaaaczrgu3symjxg43dmnzs",
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
      "requestid": "31341017",
      "status": "failed",
      "created": "2022-06-14T19:28:11.861066617Z",
      "pin": {
        "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
        "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31341016",
      "status": "failed",
      "created": "2022-06-14T19:28:09.783955904Z",
      "pin": {
        "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
      "requestid": "31341015",
      "status": "failed",
      "created": "2022-06-14T19:28:08.778418693Z",
      "pin": {
        "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
      "requestid": "31341013",
      "status": "failed",
      "created": "2022-06-14T19:28:05.731632446Z",
      "pin": {
        "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
      "requestid": "31341030",
      "status": "failed",
      "created": "2022-06-14T19:28:26.928228472Z",
      "pin": {
        "cid": "baeaaaczrgu3synjygi3tgnzq",
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
      "requestid": "31341029",
      "status": "failed",
      "created": "2022-06-14T19:28:25.935818323Z",
      "pin": {
        "cid": "baeaaaczrgu3synjvgaydsnzq",
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
      "requestid": "31341028",
      "status": "failed",
      "created": "2022-06-14T19:28:24.926186474Z",
      "pin": {
        "cid": "baeaaaczrgu3synjrgy3dcnzq",
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
      "requestid": "31341027",
      "status": "failed",
      "created": "2022-06-14T19:28:23.926359258Z",
      "pin": {
        "cid": "baeaaaczrgu3synbxgi2tsnzq",
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
      "requestid": "31341026",
      "status": "failed",
      "created": "2022-06-14T19:28:22.925507626Z",
      "pin": {
        "cid": "baeaaaczrgu3synbthe4dsnzq",
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
      "requestid": "31341025",
      "status": "failed",
      "created": "2022-06-14T19:28:21.92266576Z",
      "pin": {
        "cid": "baeaaaczrgu3synbqguzdinzq",
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
      "requestid": "31341024",
      "status": "failed",
      "created": "2022-06-14T19:28:20.92724395Z",
      "pin": {
        "cid": "baeaaaczrgu3symzwgu2donzr",
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
      "requestid": "31341023",
      "status": "failed",
      "created": "2022-06-14T19:28:19.928573313Z",
      "pin": {
        "cid": "baeaaaczrgu3symzrge3danzr",
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
      "requestid": "31341022",
      "status": "failed",
      "created": "2022-06-14T19:28:18.924690228Z",
      "pin": {
        "cid": "baeaaaczrgu3symrxgq2tcnzr",
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
      "requestid": "31341021",
      "status": "failed",
      "created": "2022-06-14T19:28:17.916019923Z",
      "pin": {
        "cid": "baeaaaczrgu3symrtgmydenzr",
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
      "requestid": "31341020",
      "status": "failed",
      "created": "2022-06-14T19:28:16.926515273Z",
      "pin": {
        "cid": "baeaaaczrgu3symjxg43dmnzs",
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
      "requestid": "31341017",
      "status": "failed",
      "created": "2022-06-14T19:28:11.861066617Z",
      "pin": {
        "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
        "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31341016",
      "status": "failed",
      "created": "2022-06-14T19:28:09.783955904Z",
      "pin": {
        "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
      "requestid": "31341015",
      "status": "failed",
      "created": "2022-06-14T19:28:08.778418693Z",
      "pin": {
        "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
      "requestid": "31341013",
      "status": "failed",
      "created": "2022-06-14T19:28:05.731632446Z",
      "pin": {
        "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-14T19%3A28%3A05.731Z
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
  "date": "Tue, 14 Jun 2022 19:28:28 GMT",
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
  "date": "Tue, 14 Jun 2022 19:28:15 GMT",
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
      "requestid": "31341017",
      "status": "failed",
      "created": "2022-06-14T19:28:11.861066617Z",
      "pin": {
        "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
        "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31341016",
      "status": "failed",
      "created": "2022-06-14T19:28:09.783955904Z",
      "pin": {
        "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
      "requestid": "31341015",
      "status": "failed",
      "created": "2022-06-14T19:28:08.778418693Z",
      "pin": {
        "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
      "requestid": "31341013",
      "status": "failed",
      "created": "2022-06-14T19:28:05.731632446Z",
      "pin": {
        "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
      "requestid": "31341017",
      "status": "failed",
      "created": "2022-06-14T19:28:11.861066617Z",
      "pin": {
        "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
        "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31341016",
      "status": "failed",
      "created": "2022-06-14T19:28:09.783955904Z",
      "pin": {
        "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
      "requestid": "31341015",
      "status": "failed",
      "created": "2022-06-14T19:28:08.778418693Z",
      "pin": {
        "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
      "requestid": "31341013",
      "status": "failed",
      "created": "2022-06-14T19:28:05.731632446Z",
      "pin": {
        "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
## Can delete pin with requestid '31341030' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341030
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
  "date": "Tue, 14 Jun 2022 19:28:30 GMT",
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
## Can delete pin with requestid '31341029' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341029
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
  "date": "Tue, 14 Jun 2022 19:28:31 GMT",
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
## Can delete pin with requestid '31341028' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341028
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
  "date": "Tue, 14 Jun 2022 19:28:32 GMT",
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
## Can delete pin with requestid '31341027' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341027
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
  "date": "Tue, 14 Jun 2022 19:28:33 GMT",
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
## Can delete pin with requestid '31341026' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341026
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
  "date": "Tue, 14 Jun 2022 19:28:34 GMT",
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
## Can delete pin with requestid '31341025' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341025
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
  "date": "Tue, 14 Jun 2022 19:28:35 GMT",
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
## Can delete pin with requestid '31341024' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341024
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
  "date": "Tue, 14 Jun 2022 19:28:36 GMT",
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
## Can delete pin with requestid '31341023' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341023
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
  "date": "Tue, 14 Jun 2022 19:28:37 GMT",
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
## Can delete pin with requestid '31341022' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341022
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
  "date": "Tue, 14 Jun 2022 19:28:38 GMT",
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
## Can delete pin with requestid '31341021' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341021
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
  "date": "Tue, 14 Jun 2022 19:28:39 GMT",
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
## Can delete pin with requestid '31341020' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341020
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
  "date": "Tue, 14 Jun 2022 19:28:40 GMT",
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
## Can delete pin with requestid '31341017' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341017
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
  "date": "Tue, 14 Jun 2022 19:28:41 GMT",
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
## Can delete pin with requestid '31341016' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341016
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
  "date": "Tue, 14 Jun 2022 19:28:42 GMT",
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
## Can delete pin with requestid '31341015' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341015
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
  "date": "Tue, 14 Jun 2022 19:28:43 GMT",
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
## Can delete pin with requestid '31341013' - ❌ FAILED

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
DELETE https://api.estuary.tech/pinning/pins/31341013
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
  "date": "Tue, 14 Jun 2022 19:28:44 GMT",
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
  "date": "Tue, 14 Jun 2022 19:28:45 GMT",
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
  "date": "Tue, 14 Jun 2022 19:28:29 GMT",
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
      "requestid": "31341030",
      "status": "failed",
      "created": "2022-06-14T19:28:26.928228472Z",
      "pin": {
        "cid": "baeaaaczrgu3synjygi3tgnzq",
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
      "requestid": "31341029",
      "status": "failed",
      "created": "2022-06-14T19:28:25.935818323Z",
      "pin": {
        "cid": "baeaaaczrgu3synjvgaydsnzq",
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
      "requestid": "31341028",
      "status": "failed",
      "created": "2022-06-14T19:28:24.926186474Z",
      "pin": {
        "cid": "baeaaaczrgu3synjrgy3dcnzq",
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
      "requestid": "31341027",
      "status": "failed",
      "created": "2022-06-14T19:28:23.926359258Z",
      "pin": {
        "cid": "baeaaaczrgu3synbxgi2tsnzq",
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
      "requestid": "31341026",
      "status": "failed",
      "created": "2022-06-14T19:28:22.925507626Z",
      "pin": {
        "cid": "baeaaaczrgu3synbthe4dsnzq",
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
      "requestid": "31341025",
      "status": "failed",
      "created": "2022-06-14T19:28:21.92266576Z",
      "pin": {
        "cid": "baeaaaczrgu3synbqguzdinzq",
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
      "requestid": "31341024",
      "status": "failed",
      "created": "2022-06-14T19:28:20.92724395Z",
      "pin": {
        "cid": "baeaaaczrgu3symzwgu2donzr",
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
      "requestid": "31341023",
      "status": "failed",
      "created": "2022-06-14T19:28:19.928573313Z",
      "pin": {
        "cid": "baeaaaczrgu3symzrge3danzr",
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
      "requestid": "31341022",
      "status": "failed",
      "created": "2022-06-14T19:28:18.924690228Z",
      "pin": {
        "cid": "baeaaaczrgu3symrxgq2tcnzr",
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
      "requestid": "31341021",
      "status": "failed",
      "created": "2022-06-14T19:28:17.916019923Z",
      "pin": {
        "cid": "baeaaaczrgu3symrtgmydenzr",
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
      "requestid": "31341020",
      "status": "failed",
      "created": "2022-06-14T19:28:16.926515273Z",
      "pin": {
        "cid": "baeaaaczrgu3symjxg43dmnzs",
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
      "requestid": "31341017",
      "status": "failed",
      "created": "2022-06-14T19:28:11.861066617Z",
      "pin": {
        "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
        "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31341016",
      "status": "failed",
      "created": "2022-06-14T19:28:09.783955904Z",
      "pin": {
        "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
      "requestid": "31341015",
      "status": "failed",
      "created": "2022-06-14T19:28:08.778418693Z",
      "pin": {
        "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
      "requestid": "31341013",
      "status": "failed",
      "created": "2022-06-14T19:28:05.731632446Z",
      "pin": {
        "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
      "requestid": "31341030",
      "status": "failed",
      "created": "2022-06-14T19:28:26.928228472Z",
      "pin": {
        "cid": "baeaaaczrgu3synjygi3tgnzq",
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
      "requestid": "31341029",
      "status": "failed",
      "created": "2022-06-14T19:28:25.935818323Z",
      "pin": {
        "cid": "baeaaaczrgu3synjvgaydsnzq",
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
      "requestid": "31341028",
      "status": "failed",
      "created": "2022-06-14T19:28:24.926186474Z",
      "pin": {
        "cid": "baeaaaczrgu3synjrgy3dcnzq",
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
      "requestid": "31341027",
      "status": "failed",
      "created": "2022-06-14T19:28:23.926359258Z",
      "pin": {
        "cid": "baeaaaczrgu3synbxgi2tsnzq",
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
      "requestid": "31341026",
      "status": "failed",
      "created": "2022-06-14T19:28:22.925507626Z",
      "pin": {
        "cid": "baeaaaczrgu3synbthe4dsnzq",
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
      "requestid": "31341025",
      "status": "failed",
      "created": "2022-06-14T19:28:21.92266576Z",
      "pin": {
        "cid": "baeaaaczrgu3synbqguzdinzq",
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
      "requestid": "31341024",
      "status": "failed",
      "created": "2022-06-14T19:28:20.92724395Z",
      "pin": {
        "cid": "baeaaaczrgu3symzwgu2donzr",
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
      "requestid": "31341023",
      "status": "failed",
      "created": "2022-06-14T19:28:19.928573313Z",
      "pin": {
        "cid": "baeaaaczrgu3symzrge3danzr",
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
      "requestid": "31341022",
      "status": "failed",
      "created": "2022-06-14T19:28:18.924690228Z",
      "pin": {
        "cid": "baeaaaczrgu3symrxgq2tcnzr",
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
      "requestid": "31341021",
      "status": "failed",
      "created": "2022-06-14T19:28:17.916019923Z",
      "pin": {
        "cid": "baeaaaczrgu3symrtgmydenzr",
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
      "requestid": "31341020",
      "status": "failed",
      "created": "2022-06-14T19:28:16.926515273Z",
      "pin": {
        "cid": "baeaaaczrgu3symjxg43dmnzs",
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
      "requestid": "31341017",
      "status": "failed",
      "created": "2022-06-14T19:28:11.861066617Z",
      "pin": {
        "cid": "baeaaadjrguzcyobvgm4tkmjugaya",
        "name": "e0f9212f-f5a8-40a0-abda-d8f84b7309ed",
        "origins": null,
        "meta": null
      },
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": null
    },
    {
      "requestid": "31341016",
      "status": "failed",
      "created": "2022-06-14T19:28:09.783955904Z",
      "pin": {
        "cid": "baeaaadjrgq4syobvga3dqojxguya",
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
      "requestid": "31341015",
      "status": "failed",
      "created": "2022-06-14T19:28:08.778418693Z",
      "pin": {
        "cid": "baeaaadjrgq4cyobvgyzdambsge4a",
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
      "requestid": "31341013",
      "status": "failed",
      "created": "2022-06-14T19:28:05.731632446Z",
      "pin": {
        "cid": "baeaaadjrgq2synzxga4tsmjtguzq",
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
