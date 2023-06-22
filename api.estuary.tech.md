
<script src="./telemetry.js"></script>
# https://api.estuary.tech/pinning compliance:

Execution Date: 2023-06-22T09:19:51.385Z

Revision: [3d9aa58](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/3d9aa58)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (8/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4'](#pins-post-of-cid-bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='f0c8114b-bd86-4d2b-b739-042f09fe13e2'](#can-create-a-pin-with-namef0c8114b-bd86-4d2b-b739-042f09fe13e2----success)

  🟢 [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----success)

  🟢 [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----success)

## Request with no authentication token - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Response code is 401 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "77",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_AUTH_MISSING",
    "details": "no api key was specified"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_AUTH_MISSING",
    "details": "no api key was specified"
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

  🟢 Response code is 401 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "76",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_INVALID_TOKEN",
    "details": "api key does not exist"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_INVALID_TOKEN",
    "details": "api key does not exist"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "content" is not allowed

  
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
{"cid":"bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1743",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "requestid": "153308428",
  "status": "queued",
  "created": "2023-06-22T09:19:24.308273134Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308428,
    "createdAt": "2023-06-22T09:19:24.308273134Z",
    "updatedAt": "2023-06-22T09:19:24.308273134Z",
    "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "153308428",
  "status": "queued",
  "created": "2023-06-22T09:19:24.308273134Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308428,
    "createdAt": "2023-06-22T09:19:24.308273134Z",
    "updatedAt": "2023-06-22T09:19:24.308273134Z",
    "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "153308428",
  "status": "queued",
  "created": "2023-06-22T09:19:24.308Z",
  "pin": {
    "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {}
}
```
## The newly created pin can be immediately deleted - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/153308430
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
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Thu, 22 Jun 2023 09:19:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
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
## Can create and then delete a new pin - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Result is not null (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
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
{"cid":"bafkreig7ollv2uzwyqt4awlfllwsgppupjowf2vphycem5pf4jqx4mooea","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1743",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "requestid": "153308430",
  "status": "queued",
  "created": "2023-06-22T09:19:25.200132137Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreig7ollv2uzwyqt4awlfllwsgppupjowf2vphycem5pf4jqx4mooea",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308430,
    "createdAt": "2023-06-22T09:19:25.200132137Z",
    "updatedAt": "2023-06-22T09:19:25.200132137Z",
    "cid": "bafkreig7ollv2uzwyqt4awlfllwsgppupjowf2vphycem5pf4jqx4mooea",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "153308430",
  "status": "queued",
  "created": "2023-06-22T09:19:25.200132137Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreig7ollv2uzwyqt4awlfllwsgppupjowf2vphycem5pf4jqx4mooea",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308430,
    "createdAt": "2023-06-22T09:19:25.200132137Z",
    "updatedAt": "2023-06-22T09:19:25.200132137Z",
    "cid": "bafkreig7ollv2uzwyqt4awlfllwsgppupjowf2vphycem5pf4jqx4mooea",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "153308430",
  "status": "queued",
  "created": "2023-06-22T09:19:25.200Z",
  "pin": {
    "cid": "bafkreig7ollv2uzwyqt4awlfllwsgppupjowf2vphycem5pf4jqx4mooea",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {}
}
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)





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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 78,
  "results": [
    {
      "requestid": "153308429",
      "status": "queued",
      "created": "2023-06-22T09:19:24.359534Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308429,
        "createdAt": "2023-06-22T09:19:24.359534Z",
        "updatedAt": "2023-06-22T09:19:24.359534Z",
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308428",
      "status": "queued",
      "created": "2023-06-22T09:19:24.308273Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308428,
        "createdAt": "2023-06-22T09:19:24.308273Z",
        "updatedAt": "2023-06-22T09:19:24.308273Z",
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981793",
      "status": "failed",
      "created": "2023-06-14T13:14:27.538567Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981793,
        "createdAt": "2023-06-14T13:14:27.538567Z",
        "updatedAt": "2023-06-14T13:14:27.538567Z",
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981759",
      "status": "failed",
      "created": "2023-06-14T13:13:33.256225Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981759,
        "createdAt": "2023-06-14T13:13:33.256225Z",
        "updatedAt": "2023-06-14T13:13:33.256225Z",
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981758",
      "status": "failed",
      "created": "2023-06-14T13:13:30.92411Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981758,
        "createdAt": "2023-06-14T13:13:30.92411Z",
        "updatedAt": "2023-06-14T13:13:30.92411Z",
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981735",
      "status": "failed",
      "created": "2023-06-14T13:12:32.093249Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981735,
        "createdAt": "2023-06-14T13:12:32.093249Z",
        "updatedAt": "2023-06-14T13:12:32.093249Z",
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 78,
  "results": [
    {
      "requestid": "153308429",
      "status": "queued",
      "created": "2023-06-22T09:19:24.359534Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308429,
        "createdAt": "2023-06-22T09:19:24.359534Z",
        "updatedAt": "2023-06-22T09:19:24.359534Z",
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308428",
      "status": "queued",
      "created": "2023-06-22T09:19:24.308273Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308428,
        "createdAt": "2023-06-22T09:19:24.308273Z",
        "updatedAt": "2023-06-22T09:19:24.308273Z",
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981793",
      "status": "failed",
      "created": "2023-06-14T13:14:27.538567Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981793,
        "createdAt": "2023-06-14T13:14:27.538567Z",
        "updatedAt": "2023-06-14T13:14:27.538567Z",
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981759",
      "status": "failed",
      "created": "2023-06-14T13:13:33.256225Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981759,
        "createdAt": "2023-06-14T13:13:33.256225Z",
        "updatedAt": "2023-06-14T13:13:33.256225Z",
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981758",
      "status": "failed",
      "created": "2023-06-14T13:13:30.92411Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981758,
        "createdAt": "2023-06-14T13:13:30.92411Z",
        "updatedAt": "2023-06-14T13:13:30.92411Z",
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981735",
      "status": "failed",
      "created": "2023-06-14T13:12:32.093249Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981735,
        "createdAt": "2023-06-14T13:12:32.093249Z",
        "updatedAt": "2023-06-14T13:12:32.093249Z",
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 78,
  "results": {}
}
```
## Get original pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/153308434
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
404 Not Found
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "98",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_CONTENT_NOT_FOUND",
    "details": "content with ID(153308434) was not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_CONTENT_NOT_FOUND",
    "details": "content with ID(153308434) was not found"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Get new pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/153308437
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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1734",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "requestid": "153308437",
  "status": "queued",
  "created": "2023-06-22T09:19:28.407053Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308437,
    "createdAt": "2023-06-22T09:19:28.407053Z",
    "updatedAt": "2023-06-22T09:19:28.407053Z",
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "153308437",
  "status": "queued",
  "created": "2023-06-22T09:19:28.407053Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308437,
    "createdAt": "2023-06-22T09:19:28.407053Z",
    "updatedAt": "2023-06-22T09:19:28.407053Z",
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "153308437",
  "status": "queued",
  "created": "2023-06-22T09:19:28.407Z",
  "pin": {
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {}
}
```
## Pin's with requestid '153308434' can have cid 'bafkreigpdxqjwgb3lagwrajdezunrmvgzwntzkauyqkqxanjbsz5ue63dy' replaced with 'bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins/153308434
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
{"cid":"bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1743",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "requestid": "153308437",
  "status": "queued",
  "created": "2023-06-22T09:19:28.407053983Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308437,
    "createdAt": "2023-06-22T09:19:28.407053983Z",
    "updatedAt": "2023-06-22T09:19:28.407053983Z",
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "153308437",
  "status": "queued",
  "created": "2023-06-22T09:19:28.407053983Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308437,
    "createdAt": "2023-06-22T09:19:28.407053983Z",
    "updatedAt": "2023-06-22T09:19:28.407053983Z",
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "153308437",
  "status": "queued",
  "created": "2023-06-22T09:19:28.407Z",
  "pin": {
    "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {}
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (153308434) (success)

  🟢 Response is ok (success)

  🟢 Replaced pin has the new & expected CID (success)

  🟢 Replaced pin has a different requestid (success)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
{"cid":"bafkreigpdxqjwgb3lagwrajdezunrmvgzwntzkauyqkqxanjbsz5ue63dy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1740",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "requestid": "153308434",
  "status": "queued",
  "created": "2023-06-22T09:19:27.42004229Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigpdxqjwgb3lagwrajdezunrmvgzwntzkauyqkqxanjbsz5ue63dy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308434,
    "createdAt": "2023-06-22T09:19:27.42004229Z",
    "updatedAt": "2023-06-22T09:19:27.42004229Z",
    "cid": "bafkreigpdxqjwgb3lagwrajdezunrmvgzwntzkauyqkqxanjbsz5ue63dy",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "153308434",
  "status": "queued",
  "created": "2023-06-22T09:19:27.42004229Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigpdxqjwgb3lagwrajdezunrmvgzwntzkauyqkqxanjbsz5ue63dy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308434,
    "createdAt": "2023-06-22T09:19:27.42004229Z",
    "updatedAt": "2023-06-22T09:19:27.42004229Z",
    "cid": "bafkreigpdxqjwgb3lagwrajdezunrmvgzwntzkauyqkqxanjbsz5ue63dy",
    "name": "",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "153308434",
  "status": "queued",
  "created": "2023-06-22T09:19:27.420Z",
  "pin": {
    "cid": "bafkreigpdxqjwgb3lagwrajdezunrmvgzwntzkauyqkqxanjbsz5ue63dy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {}
}
```
## Can retrieve pin with name 'f0c8114b-bd86-4d2b-b739-042f09fe13e2' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=f0c8114b-bd86-4d2b-b739-042f09fe13e2&match=exact
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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1830",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:31 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
## Can retrieve pin with name 'F0C8114B-BD86-4D2B-B739-042F09FE13E2' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=F0C8114B-BD86-4D2B-B739-042F09FE13E2&match=iexact
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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1830",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:32 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
## Can retrieve pin with name 'bd86-4d2b-b739-042' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=bd86-4d2b-b739-042&match=partial
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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1830",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:33 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
## Can retrieve pin with name 'BD86-4D2B-B739-042' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=BD86-4D2B-B739-042&match=ipartial
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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1830",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
## Can create a pin with name='f0c8114b-bd86-4d2b-b739-042f09fe13e2' - 🟢 SUCCESS

### Expectations (19/19 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





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
{"cid":"bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe","name":"f0c8114b-bd86-4d2b-b739-042f09fe13e2","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "1815",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "requestid": "153308440",
  "status": "queued",
  "created": "2023-06-22T09:19:30.509932814Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
    "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308440,
    "createdAt": "2023-06-22T09:19:30.509932814Z",
    "updatedAt": "2023-06-22T09:19:30.509932814Z",
    "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
    "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "153308440",
  "status": "queued",
  "created": "2023-06-22T09:19:30.509932814Z",
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
    "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 153308440,
    "createdAt": "2023-06-22T09:19:30.509932814Z",
    "updatedAt": "2023-06-22T09:19:30.509932814Z",
    "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
    "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
    "userId": 299,
    "description": "",
    "size": 0,
    "type": 0,
    "active": false,
    "offloaded": false,
    "replication": 6,
    "aggregatedIn": 0,
    "aggregate": false,
    "pinning": false,
    "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
    "replace": false,
    "origins": "",
    "failed": false,
    "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
    "dagSplit": false,
    "splitFrom": 0,
    "pinningStatus": "",
    "dealStatus": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "153308440",
  "status": "queued",
  "created": "2023-06-22T09:19:30.509Z",
  "pin": {
    "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
    "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
    "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
  ],
  "info": {}
}
```
## Pagination: First page of pins - 🟢 SUCCESS

### Expectations (5/5 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  🟢 Count is greater than the number of pins returned (success)

  🟢 Number of pins returned defaults to 10 (success)





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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:36 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 82,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308439",
      "status": "queued",
      "created": "2023-06-22T09:19:30.243299Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308439,
        "createdAt": "2023-06-22T09:19:30.243299Z",
        "updatedAt": "2023-06-22T09:19:30.243299Z",
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308437",
      "status": "queued",
      "created": "2023-06-22T09:19:28.407053Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308437,
        "createdAt": "2023-06-22T09:19:28.407053Z",
        "updatedAt": "2023-06-22T09:19:28.407053Z",
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308436",
      "status": "queued",
      "created": "2023-06-22T09:19:28.244787Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308436,
        "createdAt": "2023-06-22T09:19:28.244787Z",
        "updatedAt": "2023-06-22T09:19:28.244787Z",
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308429",
      "status": "queued",
      "created": "2023-06-22T09:19:24.359534Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308429,
        "createdAt": "2023-06-22T09:19:24.359534Z",
        "updatedAt": "2023-06-22T09:19:24.359534Z",
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308428",
      "status": "queued",
      "created": "2023-06-22T09:19:24.308273Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308428,
        "createdAt": "2023-06-22T09:19:24.308273Z",
        "updatedAt": "2023-06-22T09:19:24.308273Z",
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 82,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308439",
      "status": "queued",
      "created": "2023-06-22T09:19:30.243299Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308439,
        "createdAt": "2023-06-22T09:19:30.243299Z",
        "updatedAt": "2023-06-22T09:19:30.243299Z",
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308437",
      "status": "queued",
      "created": "2023-06-22T09:19:28.407053Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308437,
        "createdAt": "2023-06-22T09:19:28.407053Z",
        "updatedAt": "2023-06-22T09:19:28.407053Z",
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308436",
      "status": "queued",
      "created": "2023-06-22T09:19:28.244787Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308436,
        "createdAt": "2023-06-22T09:19:28.244787Z",
        "updatedAt": "2023-06-22T09:19:28.244787Z",
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308429",
      "status": "queued",
      "created": "2023-06-22T09:19:24.359534Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308429,
        "createdAt": "2023-06-22T09:19:24.359534Z",
        "updatedAt": "2023-06-22T09:19:24.359534Z",
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308428",
      "status": "queued",
      "created": "2023-06-22T09:19:24.308273Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308428,
        "createdAt": "2023-06-22T09:19:24.308273Z",
        "updatedAt": "2023-06-22T09:19:24.308273Z",
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 82,
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
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-14T13%3A14%3A28.532Z
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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 72,
  "results": [
    {
      "requestid": "152981793",
      "status": "failed",
      "created": "2023-06-14T13:14:27.538567Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981793,
        "createdAt": "2023-06-14T13:14:27.538567Z",
        "updatedAt": "2023-06-14T13:14:27.538567Z",
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981759",
      "status": "failed",
      "created": "2023-06-14T13:13:33.256225Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981759,
        "createdAt": "2023-06-14T13:13:33.256225Z",
        "updatedAt": "2023-06-14T13:13:33.256225Z",
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981758",
      "status": "failed",
      "created": "2023-06-14T13:13:30.92411Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981758,
        "createdAt": "2023-06-14T13:13:30.92411Z",
        "updatedAt": "2023-06-14T13:13:30.92411Z",
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981735",
      "status": "failed",
      "created": "2023-06-14T13:12:32.093249Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981735,
        "createdAt": "2023-06-14T13:12:32.093249Z",
        "updatedAt": "2023-06-14T13:12:32.093249Z",
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "151714389",
      "status": "failed",
      "created": "2023-05-14T02:51:00.664881Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "origins": [],
        "meta": {}
      },
      "content": {
        "id": 151714389,
        "createdAt": "2023-05-14T02:51:00.664881Z",
        "updatedAt": "2023-05-14T02:51:00.664881Z",
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857730",
      "status": "failed",
      "created": "2023-05-06T01:12:47.89769Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857730,
        "createdAt": "2023-05-06T01:12:47.89769Z",
        "updatedAt": "2023-05-06T01:12:47.89769Z",
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857727",
      "status": "failed",
      "created": "2023-05-06T01:12:46.896662Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibr74lxfjxmrn55sogfvds2zkphro5jl3ujgx5q55xn2btreaghcm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857727,
        "createdAt": "2023-05-06T01:12:46.896662Z",
        "updatedAt": "2023-05-06T01:12:46.896662Z",
        "cid": "bafkreibr74lxfjxmrn55sogfvds2zkphro5jl3ujgx5q55xn2btreaghcm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857726",
      "status": "failed",
      "created": "2023-05-06T01:12:45.893831Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibsajx55bbm3gdlyhhvi7rh5ptnugil7memo2w6howjgqwffeno24",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857726,
        "createdAt": "2023-05-06T01:12:45.893831Z",
        "updatedAt": "2023-05-06T01:12:45.893831Z",
        "cid": "bafkreibsajx55bbm3gdlyhhvi7rh5ptnugil7memo2w6howjgqwffeno24",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857723",
      "status": "failed",
      "created": "2023-05-06T01:12:44.896174Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibonr4nf77pwook2zt2abtavqrtp42xvt66bmqs7mcts745aseaga",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857723,
        "createdAt": "2023-05-06T01:12:44.896174Z",
        "updatedAt": "2023-05-06T01:12:44.896174Z",
        "cid": "bafkreibonr4nf77pwook2zt2abtavqrtp42xvt66bmqs7mcts745aseaga",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857721",
      "status": "failed",
      "created": "2023-05-06T01:12:43.89476Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicndo2prl74u7gzgy6ulhzeuidvmx7teq7hxqpgn5yqw32rua4ipm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857721,
        "createdAt": "2023-05-06T01:12:43.89476Z",
        "updatedAt": "2023-05-06T01:12:43.89476Z",
        "cid": "bafkreicndo2prl74u7gzgy6ulhzeuidvmx7teq7hxqpgn5yqw32rua4ipm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 72,
  "results": [
    {
      "requestid": "152981793",
      "status": "failed",
      "created": "2023-06-14T13:14:27.538567Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981793,
        "createdAt": "2023-06-14T13:14:27.538567Z",
        "updatedAt": "2023-06-14T13:14:27.538567Z",
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981759",
      "status": "failed",
      "created": "2023-06-14T13:13:33.256225Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981759,
        "createdAt": "2023-06-14T13:13:33.256225Z",
        "updatedAt": "2023-06-14T13:13:33.256225Z",
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981758",
      "status": "failed",
      "created": "2023-06-14T13:13:30.92411Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981758,
        "createdAt": "2023-06-14T13:13:30.92411Z",
        "updatedAt": "2023-06-14T13:13:30.92411Z",
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981735",
      "status": "failed",
      "created": "2023-06-14T13:12:32.093249Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981735,
        "createdAt": "2023-06-14T13:12:32.093249Z",
        "updatedAt": "2023-06-14T13:12:32.093249Z",
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "151714389",
      "status": "failed",
      "created": "2023-05-14T02:51:00.664881Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "origins": [],
        "meta": {}
      },
      "content": {
        "id": 151714389,
        "createdAt": "2023-05-14T02:51:00.664881Z",
        "updatedAt": "2023-05-14T02:51:00.664881Z",
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857730",
      "status": "failed",
      "created": "2023-05-06T01:12:47.89769Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857730,
        "createdAt": "2023-05-06T01:12:47.89769Z",
        "updatedAt": "2023-05-06T01:12:47.89769Z",
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857727",
      "status": "failed",
      "created": "2023-05-06T01:12:46.896662Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibr74lxfjxmrn55sogfvds2zkphro5jl3ujgx5q55xn2btreaghcm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857727,
        "createdAt": "2023-05-06T01:12:46.896662Z",
        "updatedAt": "2023-05-06T01:12:46.896662Z",
        "cid": "bafkreibr74lxfjxmrn55sogfvds2zkphro5jl3ujgx5q55xn2btreaghcm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857726",
      "status": "failed",
      "created": "2023-05-06T01:12:45.893831Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibsajx55bbm3gdlyhhvi7rh5ptnugil7memo2w6howjgqwffeno24",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857726,
        "createdAt": "2023-05-06T01:12:45.893831Z",
        "updatedAt": "2023-05-06T01:12:45.893831Z",
        "cid": "bafkreibsajx55bbm3gdlyhhvi7rh5ptnugil7memo2w6howjgqwffeno24",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857723",
      "status": "failed",
      "created": "2023-05-06T01:12:44.896174Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibonr4nf77pwook2zt2abtavqrtp42xvt66bmqs7mcts745aseaga",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857723,
        "createdAt": "2023-05-06T01:12:44.896174Z",
        "updatedAt": "2023-05-06T01:12:44.896174Z",
        "cid": "bafkreibonr4nf77pwook2zt2abtavqrtp42xvt66bmqs7mcts745aseaga",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857721",
      "status": "failed",
      "created": "2023-05-06T01:12:43.89476Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicndo2prl74u7gzgy6ulhzeuidvmx7teq7hxqpgn5yqw32rua4ipm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857721,
        "createdAt": "2023-05-06T01:12:43.89476Z",
        "updatedAt": "2023-05-06T01:12:43.89476Z",
        "cid": "bafkreicndo2prl74u7gzgy6ulhzeuidvmx7teq7hxqpgn5yqw32rua4ipm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 72,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - 🟢 SUCCESS

### Expectations (10/10 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  🟢 Count is greater than the number of pins returned (success)

  🟢 Number of pins returned defaults to 10 (success)

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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:35 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 82,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308439",
      "status": "queued",
      "created": "2023-06-22T09:19:30.243299Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308439,
        "createdAt": "2023-06-22T09:19:30.243299Z",
        "updatedAt": "2023-06-22T09:19:30.243299Z",
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308437",
      "status": "queued",
      "created": "2023-06-22T09:19:28.407053Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308437,
        "createdAt": "2023-06-22T09:19:28.407053Z",
        "updatedAt": "2023-06-22T09:19:28.407053Z",
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308436",
      "status": "queued",
      "created": "2023-06-22T09:19:28.244787Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308436,
        "createdAt": "2023-06-22T09:19:28.244787Z",
        "updatedAt": "2023-06-22T09:19:28.244787Z",
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308429",
      "status": "queued",
      "created": "2023-06-22T09:19:24.359534Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308429,
        "createdAt": "2023-06-22T09:19:24.359534Z",
        "updatedAt": "2023-06-22T09:19:24.359534Z",
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308428",
      "status": "queued",
      "created": "2023-06-22T09:19:24.308273Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308428,
        "createdAt": "2023-06-22T09:19:24.308273Z",
        "updatedAt": "2023-06-22T09:19:24.308273Z",
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 82,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308439",
      "status": "queued",
      "created": "2023-06-22T09:19:30.243299Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308439,
        "createdAt": "2023-06-22T09:19:30.243299Z",
        "updatedAt": "2023-06-22T09:19:30.243299Z",
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308437",
      "status": "queued",
      "created": "2023-06-22T09:19:28.407053Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308437,
        "createdAt": "2023-06-22T09:19:28.407053Z",
        "updatedAt": "2023-06-22T09:19:28.407053Z",
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308436",
      "status": "queued",
      "created": "2023-06-22T09:19:28.244787Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308436,
        "createdAt": "2023-06-22T09:19:28.244787Z",
        "updatedAt": "2023-06-22T09:19:28.244787Z",
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308429",
      "status": "queued",
      "created": "2023-06-22T09:19:24.359534Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308429,
        "createdAt": "2023-06-22T09:19:24.359534Z",
        "updatedAt": "2023-06-22T09:19:24.359534Z",
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308428",
      "status": "queued",
      "created": "2023-06-22T09:19:24.308273Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308428,
        "createdAt": "2023-06-22T09:19:24.308273Z",
        "updatedAt": "2023-06-22T09:19:24.308273Z",
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 82,
  "results": {}
}
```
## Can delete pin with requestid '153308440' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/153308440
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
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Thu, 22 Jun 2023 09:19:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
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
## Can delete pin with requestid '153308437' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/153308437
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
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Thu, 22 Jun 2023 09:19:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
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
## Can delete pin with requestid '153308428' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/153308428
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
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Thu, 22 Jun 2023 09:19:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
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
## Get all Pins created before 'Wed Jun 14 2023 13:14:28 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-14T13%3A14%3A28.532Z
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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 72,
  "results": [
    {
      "requestid": "152981793",
      "status": "failed",
      "created": "2023-06-14T13:14:27.538567Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981793,
        "createdAt": "2023-06-14T13:14:27.538567Z",
        "updatedAt": "2023-06-14T13:14:27.538567Z",
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981759",
      "status": "failed",
      "created": "2023-06-14T13:13:33.256225Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981759,
        "createdAt": "2023-06-14T13:13:33.256225Z",
        "updatedAt": "2023-06-14T13:13:33.256225Z",
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981758",
      "status": "failed",
      "created": "2023-06-14T13:13:30.92411Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981758,
        "createdAt": "2023-06-14T13:13:30.92411Z",
        "updatedAt": "2023-06-14T13:13:30.92411Z",
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981735",
      "status": "failed",
      "created": "2023-06-14T13:12:32.093249Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981735,
        "createdAt": "2023-06-14T13:12:32.093249Z",
        "updatedAt": "2023-06-14T13:12:32.093249Z",
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "151714389",
      "status": "failed",
      "created": "2023-05-14T02:51:00.664881Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "origins": [],
        "meta": {}
      },
      "content": {
        "id": 151714389,
        "createdAt": "2023-05-14T02:51:00.664881Z",
        "updatedAt": "2023-05-14T02:51:00.664881Z",
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857730",
      "status": "failed",
      "created": "2023-05-06T01:12:47.89769Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857730,
        "createdAt": "2023-05-06T01:12:47.89769Z",
        "updatedAt": "2023-05-06T01:12:47.89769Z",
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857727",
      "status": "failed",
      "created": "2023-05-06T01:12:46.896662Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibr74lxfjxmrn55sogfvds2zkphro5jl3ujgx5q55xn2btreaghcm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857727,
        "createdAt": "2023-05-06T01:12:46.896662Z",
        "updatedAt": "2023-05-06T01:12:46.896662Z",
        "cid": "bafkreibr74lxfjxmrn55sogfvds2zkphro5jl3ujgx5q55xn2btreaghcm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857726",
      "status": "failed",
      "created": "2023-05-06T01:12:45.893831Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibsajx55bbm3gdlyhhvi7rh5ptnugil7memo2w6howjgqwffeno24",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857726,
        "createdAt": "2023-05-06T01:12:45.893831Z",
        "updatedAt": "2023-05-06T01:12:45.893831Z",
        "cid": "bafkreibsajx55bbm3gdlyhhvi7rh5ptnugil7memo2w6howjgqwffeno24",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857723",
      "status": "failed",
      "created": "2023-05-06T01:12:44.896174Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibonr4nf77pwook2zt2abtavqrtp42xvt66bmqs7mcts745aseaga",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857723,
        "createdAt": "2023-05-06T01:12:44.896174Z",
        "updatedAt": "2023-05-06T01:12:44.896174Z",
        "cid": "bafkreibonr4nf77pwook2zt2abtavqrtp42xvt66bmqs7mcts745aseaga",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857721",
      "status": "failed",
      "created": "2023-05-06T01:12:43.89476Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicndo2prl74u7gzgy6ulhzeuidvmx7teq7hxqpgn5yqw32rua4ipm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857721,
        "createdAt": "2023-05-06T01:12:43.89476Z",
        "updatedAt": "2023-05-06T01:12:43.89476Z",
        "cid": "bafkreicndo2prl74u7gzgy6ulhzeuidvmx7teq7hxqpgn5yqw32rua4ipm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 72,
  "results": [
    {
      "requestid": "152981793",
      "status": "failed",
      "created": "2023-06-14T13:14:27.538567Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981793,
        "createdAt": "2023-06-14T13:14:27.538567Z",
        "updatedAt": "2023-06-14T13:14:27.538567Z",
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981759",
      "status": "failed",
      "created": "2023-06-14T13:13:33.256225Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981759,
        "createdAt": "2023-06-14T13:13:33.256225Z",
        "updatedAt": "2023-06-14T13:13:33.256225Z",
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981758",
      "status": "failed",
      "created": "2023-06-14T13:13:30.92411Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981758,
        "createdAt": "2023-06-14T13:13:30.92411Z",
        "updatedAt": "2023-06-14T13:13:30.92411Z",
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981735",
      "status": "failed",
      "created": "2023-06-14T13:12:32.093249Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981735,
        "createdAt": "2023-06-14T13:12:32.093249Z",
        "updatedAt": "2023-06-14T13:12:32.093249Z",
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "151714389",
      "status": "failed",
      "created": "2023-05-14T02:51:00.664881Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "origins": [],
        "meta": {}
      },
      "content": {
        "id": 151714389,
        "createdAt": "2023-05-14T02:51:00.664881Z",
        "updatedAt": "2023-05-14T02:51:00.664881Z",
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857730",
      "status": "failed",
      "created": "2023-05-06T01:12:47.89769Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857730,
        "createdAt": "2023-05-06T01:12:47.89769Z",
        "updatedAt": "2023-05-06T01:12:47.89769Z",
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857727",
      "status": "failed",
      "created": "2023-05-06T01:12:46.896662Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibr74lxfjxmrn55sogfvds2zkphro5jl3ujgx5q55xn2btreaghcm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857727,
        "createdAt": "2023-05-06T01:12:46.896662Z",
        "updatedAt": "2023-05-06T01:12:46.896662Z",
        "cid": "bafkreibr74lxfjxmrn55sogfvds2zkphro5jl3ujgx5q55xn2btreaghcm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857726",
      "status": "failed",
      "created": "2023-05-06T01:12:45.893831Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibsajx55bbm3gdlyhhvi7rh5ptnugil7memo2w6howjgqwffeno24",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857726,
        "createdAt": "2023-05-06T01:12:45.893831Z",
        "updatedAt": "2023-05-06T01:12:45.893831Z",
        "cid": "bafkreibsajx55bbm3gdlyhhvi7rh5ptnugil7memo2w6howjgqwffeno24",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857723",
      "status": "failed",
      "created": "2023-05-06T01:12:44.896174Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibonr4nf77pwook2zt2abtavqrtp42xvt66bmqs7mcts745aseaga",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857723,
        "createdAt": "2023-05-06T01:12:44.896174Z",
        "updatedAt": "2023-05-06T01:12:44.896174Z",
        "cid": "bafkreibonr4nf77pwook2zt2abtavqrtp42xvt66bmqs7mcts745aseaga",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857721",
      "status": "failed",
      "created": "2023-05-06T01:12:43.89476Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicndo2prl74u7gzgy6ulhzeuidvmx7teq7hxqpgn5yqw32rua4ipm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857721,
        "createdAt": "2023-05-06T01:12:43.89476Z",
        "updatedAt": "2023-05-06T01:12:43.89476Z",
        "cid": "bafkreicndo2prl74u7gzgy6ulhzeuidvmx7teq7hxqpgn5yqw32rua4ipm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 72,
  "results": {}
}
```
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '76' (success)





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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:51 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 76,
  "results": [
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981793",
      "status": "failed",
      "created": "2023-06-14T13:14:27.538567Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981793,
        "createdAt": "2023-06-14T13:14:27.538567Z",
        "updatedAt": "2023-06-14T13:14:27.538567Z",
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981759",
      "status": "failed",
      "created": "2023-06-14T13:13:33.256225Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981759,
        "createdAt": "2023-06-14T13:13:33.256225Z",
        "updatedAt": "2023-06-14T13:13:33.256225Z",
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981758",
      "status": "failed",
      "created": "2023-06-14T13:13:30.92411Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981758,
        "createdAt": "2023-06-14T13:13:30.92411Z",
        "updatedAt": "2023-06-14T13:13:30.92411Z",
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981735",
      "status": "failed",
      "created": "2023-06-14T13:12:32.093249Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981735,
        "createdAt": "2023-06-14T13:12:32.093249Z",
        "updatedAt": "2023-06-14T13:12:32.093249Z",
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "151714389",
      "status": "failed",
      "created": "2023-05-14T02:51:00.664881Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "origins": [],
        "meta": {}
      },
      "content": {
        "id": 151714389,
        "createdAt": "2023-05-14T02:51:00.664881Z",
        "updatedAt": "2023-05-14T02:51:00.664881Z",
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857730",
      "status": "failed",
      "created": "2023-05-06T01:12:47.89769Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857730,
        "createdAt": "2023-05-06T01:12:47.89769Z",
        "updatedAt": "2023-05-06T01:12:47.89769Z",
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 76,
  "results": [
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981793",
      "status": "failed",
      "created": "2023-06-14T13:14:27.538567Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981793,
        "createdAt": "2023-06-14T13:14:27.538567Z",
        "updatedAt": "2023-06-14T13:14:27.538567Z",
        "cid": "bafkreibmz4urcnwg6mjuv34tenkfhjurbe3eif6lxipmftatrt2qwqpspq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981759",
      "status": "failed",
      "created": "2023-06-14T13:13:33.256225Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981759,
        "createdAt": "2023-06-14T13:13:33.256225Z",
        "updatedAt": "2023-06-14T13:13:33.256225Z",
        "cid": "bafkreigfykrvbjvmf6w7a26sfjpp32vke4hyr4ug455wojqbz6vzh4zki4",
        "name": "74753242-7785-4568-b7ce-ad9aadcfa57b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981758",
      "status": "failed",
      "created": "2023-06-14T13:13:30.92411Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981758,
        "createdAt": "2023-06-14T13:13:30.92411Z",
        "updatedAt": "2023-06-14T13:13:30.92411Z",
        "cid": "bafkreihnry6ezvaxbc4qghpq7imocjqoljxovn6za7el2qrajq5dphkr4a",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981735",
      "status": "failed",
      "created": "2023-06-14T13:12:32.093249Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981735,
        "createdAt": "2023-06-14T13:12:32.093249Z",
        "updatedAt": "2023-06-14T13:12:32.093249Z",
        "cid": "bafkreicvcfli7ilmfp32zjd44fo4fvhaokdmhiyyzgcjxa5l2gdu7hwfca",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "151714389",
      "status": "failed",
      "created": "2023-05-14T02:51:00.664881Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "origins": [],
        "meta": {}
      },
      "content": {
        "id": 151714389,
        "createdAt": "2023-05-14T02:51:00.664881Z",
        "updatedAt": "2023-05-14T02:51:00.664881Z",
        "cid": "Qmd25KXtknxYoYB7Po2FaS6BY1FZ1HGgEtG9RaL6nUFadu",
        "name": "2023-05-13-game.mp4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "150857730",
      "status": "failed",
      "created": "2023-05-06T01:12:47.89769Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 150857730,
        "createdAt": "2023-05-06T01:12:47.89769Z",
        "updatedAt": "2023-05-06T01:12:47.89769Z",
        "cid": "bafkreialjeq2mfl2rzlm2prbfwnukcbk33it6ujioypp76uxisc7qano6i",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 76,
  "results": {}
}
```
## Can delete all pins created during compliance checks - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '76' (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


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
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 82,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308439",
      "status": "queued",
      "created": "2023-06-22T09:19:30.243299Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308439,
        "createdAt": "2023-06-22T09:19:30.243299Z",
        "updatedAt": "2023-06-22T09:19:30.243299Z",
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308437",
      "status": "queued",
      "created": "2023-06-22T09:19:28.407053Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308437,
        "createdAt": "2023-06-22T09:19:28.407053Z",
        "updatedAt": "2023-06-22T09:19:28.407053Z",
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308436",
      "status": "queued",
      "created": "2023-06-22T09:19:28.244787Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308436,
        "createdAt": "2023-06-22T09:19:28.244787Z",
        "updatedAt": "2023-06-22T09:19:28.244787Z",
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308429",
      "status": "queued",
      "created": "2023-06-22T09:19:24.359534Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308429,
        "createdAt": "2023-06-22T09:19:24.359534Z",
        "updatedAt": "2023-06-22T09:19:24.359534Z",
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308428",
      "status": "queued",
      "created": "2023-06-22T09:19:24.308273Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308428,
        "createdAt": "2023-06-22T09:19:24.308273Z",
        "updatedAt": "2023-06-22T09:19:24.308273Z",
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 82,
  "results": [
    {
      "requestid": "153308440",
      "status": "queued",
      "created": "2023-06-22T09:19:30.509932Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308440,
        "createdAt": "2023-06-22T09:19:30.509932Z",
        "updatedAt": "2023-06-22T09:19:30.509932Z",
        "cid": "bafkreifct526bis2wnw3phvupmlaldtyqnft27pyjtvggwatg3piaf5mfe",
        "name": "f0c8114b-bd86-4d2b-b739-042f09fe13e2",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308439",
      "status": "queued",
      "created": "2023-06-22T09:19:30.243299Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308439,
        "createdAt": "2023-06-22T09:19:30.243299Z",
        "updatedAt": "2023-06-22T09:19:30.243299Z",
        "cid": "bafkreibas3h7a3qozsp2nkfr2yjsevydsk3aezlayisuyqqgvhn4rejx74",
        "name": "8704a953-4ad2-4701-af57-ff033c3bba9b",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308437",
      "status": "queued",
      "created": "2023-06-22T09:19:28.407053Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308437,
        "createdAt": "2023-06-22T09:19:28.407053Z",
        "updatedAt": "2023-06-22T09:19:28.407053Z",
        "cid": "bafkreiakupi5gcpo2bdpz3e2kmvay45276n53j35p4gvjkxjhxvskjnwfm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308436",
      "status": "queued",
      "created": "2023-06-22T09:19:28.244787Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308436,
        "createdAt": "2023-06-22T09:19:28.244787Z",
        "updatedAt": "2023-06-22T09:19:28.244787Z",
        "cid": "bafkreigtq5qmzmkdaa3jv76joiznsispm3tkk6fvh7et6lwglhcuiirk5y",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308429",
      "status": "queued",
      "created": "2023-06-22T09:19:24.359534Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308429,
        "createdAt": "2023-06-22T09:19:24.359534Z",
        "updatedAt": "2023-06-22T09:19:24.359534Z",
        "cid": "bafkreig6vhzcy3nc3jxcaimsf5gskqlsifcq4jxjz2xjdlcnfvmzmp4nkq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "153308428",
      "status": "queued",
      "created": "2023-06-22T09:19:24.308273Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/50775/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/1484/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/24857/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 153308428,
        "createdAt": "2023-06-22T09:19:24.308273Z",
        "updatedAt": "2023-06-22T09:19:24.308273Z",
        "cid": "bafkreiag73cnr4xc4igkhiuosbabzyiu3o73njqozxocesrvdekbsmmme4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981797",
      "status": "failed",
      "created": "2023-06-14T13:14:31.492559Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981797,
        "createdAt": "2023-06-14T13:14:31.492559Z",
        "updatedAt": "2023-06-14T13:14:31.492559Z",
        "cid": "bafkreifs4vlkxk55hhm5kt7deb7rozha7cor5txfpwy2xjuutls2gatk4m",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981796",
      "status": "failed",
      "created": "2023-06-14T13:14:30.545066Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981796,
        "createdAt": "2023-06-14T13:14:30.545066Z",
        "updatedAt": "2023-06-14T13:14:30.545066Z",
        "cid": "bafkreibomgofht525pat7u66ufme44ynivemnzxo6pgdlkptfs7n3tlnfi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981795",
      "status": "failed",
      "created": "2023-06-14T13:14:29.507358Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981795,
        "createdAt": "2023-06-14T13:14:29.507358Z",
        "updatedAt": "2023-06-14T13:14:29.507358Z",
        "cid": "bafkreicg24fq3svafxem6zok32byuqzs3wmmd3xx6c2qmryvenr5gjh2ge",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "152981794",
      "status": "failed",
      "created": "2023-06-14T13:14:28.532055Z",
      "delegates": [
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/23079/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/8612/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/57390/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 152981794,
        "createdAt": "2023-06-14T13:14:28.532055Z",
        "updatedAt": "2023-06-14T13:14:28.532055Z",
        "cid": "bafkreicxtxtnzmh2d27emefm5xv7ighdaphzrpti7wpipuo2vmdwr4aqtm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": true,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 82,
  "results": {}
}
```
