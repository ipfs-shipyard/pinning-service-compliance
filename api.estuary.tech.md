
<script src="./telemetry.js"></script>
# https://api.estuary.tech/pinning compliance:

Execution Date: 2023-02-08T18:55:30.752Z

Revision: [fb91968](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/fb91968)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (5/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou'](#pins-post-of-cid-bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='d144e490-8eea-4f29-9f07-a1426a8f9b72'](#can-create-a-pin-with-named144e490-8eea-4f29-9f07-a1426a8f9b72----success)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----failed)

## Request with no authentication token - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Response code is 401 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "date": "Wed, 08 Feb 2023 18:50:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "date": "Wed, 08 Feb 2023 18:50:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Pins post of CID 'bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou' - ❌ FAILED

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
{"cid":"bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:50:50 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522525",
  "status": "queued",
  "created": "2023-02-08T18:50:50.715530291Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522525,
    "createdAt": "2023-02-08T18:50:50.715530291Z",
    "updatedAt": "2023-02-08T18:50:50.715530291Z",
    "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522525",
  "status": "queued",
  "created": "2023-02-08T18:50:50.715530291Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522525,
    "createdAt": "2023-02-08T18:50:50.715530291Z",
    "updatedAt": "2023-02-08T18:50:50.715530291Z",
    "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522525",
  "status": "queued",
  "created": "2023-02-08T18:50:50.715Z",
  "pin": {
    "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
DELETE https://api.estuary.tech/pinning/pins/121522526
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
  "date": "Wed, 08 Feb 2023 18:50:51 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
{"cid":"bafkreibiifiztvrd5zhbget5sxqvtnnwvbgxvv3iygdnlhydssow2jrav4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:50:50 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522526",
  "status": "queued",
  "created": "2023-02-08T18:50:50.946342943Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibiifiztvrd5zhbget5sxqvtnnwvbgxvv3iygdnlhydssow2jrav4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522526,
    "createdAt": "2023-02-08T18:50:50.946342943Z",
    "updatedAt": "2023-02-08T18:50:50.946342943Z",
    "cid": "bafkreibiifiztvrd5zhbget5sxqvtnnwvbgxvv3iygdnlhydssow2jrav4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522526",
  "status": "queued",
  "created": "2023-02-08T18:50:50.946342943Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibiifiztvrd5zhbget5sxqvtnnwvbgxvv3iygdnlhydssow2jrav4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522526,
    "createdAt": "2023-02-08T18:50:50.946342943Z",
    "updatedAt": "2023-02-08T18:50:50.946342943Z",
    "cid": "bafkreibiifiztvrd5zhbget5sxqvtnnwvbgxvv3iygdnlhydssow2jrav4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522526",
  "status": "queued",
  "created": "2023-02-08T18:50:50.946Z",
  "pin": {
    "cid": "bafkreibiifiztvrd5zhbget5sxqvtnnwvbgxvv3iygdnlhydssow2jrav4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## List pin objects (GET /pins) in all states - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Response code is 200 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "72",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "unexpected EOF"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "unexpected EOF"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Get original pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/121522645
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
  "date": "Wed, 08 Feb 2023 18:51:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_CONTENT_NOT_FOUND",
    "details": "content with ID(121522645) was not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_CONTENT_NOT_FOUND",
    "details": "content with ID(121522645) was not found"
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
GET https://api.estuary.tech/pinning/pins/121522646
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
  "content-length": "1385",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522646",
  "status": "queued",
  "created": "2023-02-08T18:51:43.330601Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522646,
    "createdAt": "2023-02-08T18:51:43.330601Z",
    "updatedAt": "2023-02-08T18:51:43.330601Z",
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522646",
  "status": "queued",
  "created": "2023-02-08T18:51:43.330601Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522646,
    "createdAt": "2023-02-08T18:51:43.330601Z",
    "updatedAt": "2023-02-08T18:51:43.330601Z",
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522646",
  "status": "queued",
  "created": "2023-02-08T18:51:43.330Z",
  "pin": {
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Pin's with requestid '121522645' can have cid 'bafkreiaww5xbrjoq23erpp25ljkw7k7hsulica42p4v6dot3lbnuskm7wm' replaced with 'bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins/121522645
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
{"cid":"bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522646",
  "status": "queued",
  "created": "2023-02-08T18:51:43.330601799Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522646,
    "createdAt": "2023-02-08T18:51:43.330601799Z",
    "updatedAt": "2023-02-08T18:51:43.330601799Z",
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522646",
  "status": "queued",
  "created": "2023-02-08T18:51:43.330601799Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522646,
    "createdAt": "2023-02-08T18:51:43.330601799Z",
    "updatedAt": "2023-02-08T18:51:43.330601799Z",
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522646",
  "status": "queued",
  "created": "2023-02-08T18:51:43.330Z",
  "pin": {
    "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (121522645) (success)

  🟢 Response is ok (success)

  🟢 Replaced pin has the new & expected CID (success)

  🟢 Replaced pin has a different requestid (success)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
{"cid":"bafkreiaww5xbrjoq23erpp25ljkw7k7hsulica42p4v6dot3lbnuskm7wm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522645",
  "status": "queued",
  "created": "2023-02-08T18:51:42.354308575Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiaww5xbrjoq23erpp25ljkw7k7hsulica42p4v6dot3lbnuskm7wm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522645,
    "createdAt": "2023-02-08T18:51:42.354308575Z",
    "updatedAt": "2023-02-08T18:51:42.354308575Z",
    "cid": "bafkreiaww5xbrjoq23erpp25ljkw7k7hsulica42p4v6dot3lbnuskm7wm",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522645",
  "status": "queued",
  "created": "2023-02-08T18:51:42.354308575Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiaww5xbrjoq23erpp25ljkw7k7hsulica42p4v6dot3lbnuskm7wm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522645,
    "createdAt": "2023-02-08T18:51:42.354308575Z",
    "updatedAt": "2023-02-08T18:51:42.354308575Z",
    "cid": "bafkreiaww5xbrjoq23erpp25ljkw7k7hsulica42p4v6dot3lbnuskm7wm",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522645",
  "status": "queued",
  "created": "2023-02-08T18:51:42.354Z",
  "pin": {
    "cid": "bafkreiaww5xbrjoq23erpp25ljkw7k7hsulica42p4v6dot3lbnuskm7wm",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can retrieve pin with name 'd144e490-8eea-4f29-9f07-a1426a8f9b72' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=d144e490-8eea-4f29-9f07-a1426a8f9b72&match=exact
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
  "content-length": "1481",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
## Can retrieve pin with name 'D144E490-8EEA-4F29-9F07-A1426A8F9B72' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=D144E490-8EEA-4F29-9F07-A1426A8F9B72&match=iexact
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
  "content-length": "1481",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
## Can retrieve pin with name '8eea-4f29-9f07-a14' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=8eea-4f29-9f07-a14&match=partial
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
  "content-length": "1481",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
## Can retrieve pin with name '8EEA-4F29-9F07-A14' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=8EEA-4F29-9F07-A14&match=ipartial
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
  "content-length": "1481",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
## Can create a pin with name='d144e490-8eea-4f29-9f07-a1426a8f9b72' - 🟢 SUCCESS

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
{"cid":"bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa","name":"d144e490-8eea-4f29-9f07-a1426a8f9b72","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1466",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:51:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522653",
  "status": "queued",
  "created": "2023-02-08T18:51:45.516628208Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
    "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522653,
    "createdAt": "2023-02-08T18:51:45.516628208Z",
    "updatedAt": "2023-02-08T18:51:45.516628208Z",
    "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
    "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522653",
  "status": "queued",
  "created": "2023-02-08T18:51:45.516628208Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
    "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522653,
    "createdAt": "2023-02-08T18:51:45.516628208Z",
    "updatedAt": "2023-02-08T18:51:45.516628208Z",
    "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
    "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522653",
  "status": "queued",
  "created": "2023-02-08T18:51:45.516Z",
  "pin": {
    "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
    "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe' - 🟢 SUCCESS

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
{"cid":"bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:39 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522771",
  "status": "queued",
  "created": "2023-02-08T18:52:39.874155531Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522771,
    "createdAt": "2023-02-08T18:52:39.874155531Z",
    "updatedAt": "2023-02-08T18:52:39.874155531Z",
    "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522771",
  "status": "queued",
  "created": "2023-02-08T18:52:39.874155531Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522771,
    "createdAt": "2023-02-08T18:52:39.874155531Z",
    "updatedAt": "2023-02-08T18:52:39.874155531Z",
    "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522771",
  "status": "queued",
  "created": "2023-02-08T18:52:39.874Z",
  "pin": {
    "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4' - 🟢 SUCCESS

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
{"cid":"bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522772",
  "status": "queued",
  "created": "2023-02-08T18:52:40.875064784Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522772,
    "createdAt": "2023-02-08T18:52:40.875064784Z",
    "updatedAt": "2023-02-08T18:52:40.875064784Z",
    "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522772",
  "status": "queued",
  "created": "2023-02-08T18:52:40.875064784Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522772,
    "createdAt": "2023-02-08T18:52:40.875064784Z",
    "updatedAt": "2023-02-08T18:52:40.875064784Z",
    "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522772",
  "status": "queued",
  "created": "2023-02-08T18:52:40.875Z",
  "pin": {
    "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby' - 🟢 SUCCESS

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
{"cid":"bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522773",
  "status": "queued",
  "created": "2023-02-08T18:52:41.880515161Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522773,
    "createdAt": "2023-02-08T18:52:41.880515161Z",
    "updatedAt": "2023-02-08T18:52:41.880515161Z",
    "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522773",
  "status": "queued",
  "created": "2023-02-08T18:52:41.880515161Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522773,
    "createdAt": "2023-02-08T18:52:41.880515161Z",
    "updatedAt": "2023-02-08T18:52:41.880515161Z",
    "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522773",
  "status": "queued",
  "created": "2023-02-08T18:52:41.880Z",
  "pin": {
    "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy' - 🟢 SUCCESS

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
{"cid":"bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522774",
  "status": "queued",
  "created": "2023-02-08T18:52:42.877625847Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522774,
    "createdAt": "2023-02-08T18:52:42.877625847Z",
    "updatedAt": "2023-02-08T18:52:42.877625847Z",
    "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522774",
  "status": "queued",
  "created": "2023-02-08T18:52:42.877625847Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522774,
    "createdAt": "2023-02-08T18:52:42.877625847Z",
    "updatedAt": "2023-02-08T18:52:42.877625847Z",
    "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522774",
  "status": "queued",
  "created": "2023-02-08T18:52:42.877Z",
  "pin": {
    "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue' - 🟢 SUCCESS

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
{"cid":"bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522775",
  "status": "queued",
  "created": "2023-02-08T18:52:43.824343853Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522775,
    "createdAt": "2023-02-08T18:52:43.824343853Z",
    "updatedAt": "2023-02-08T18:52:43.824343853Z",
    "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522775",
  "status": "queued",
  "created": "2023-02-08T18:52:43.824343853Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522775,
    "createdAt": "2023-02-08T18:52:43.824343853Z",
    "updatedAt": "2023-02-08T18:52:43.824343853Z",
    "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522775",
  "status": "queued",
  "created": "2023-02-08T18:52:43.824Z",
  "pin": {
    "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i' - 🟢 SUCCESS

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
{"cid":"bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522777",
  "status": "queued",
  "created": "2023-02-08T18:52:44.847607977Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522777,
    "createdAt": "2023-02-08T18:52:44.847607977Z",
    "updatedAt": "2023-02-08T18:52:44.847607977Z",
    "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522777",
  "status": "queued",
  "created": "2023-02-08T18:52:44.847607977Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522777,
    "createdAt": "2023-02-08T18:52:44.847607977Z",
    "updatedAt": "2023-02-08T18:52:44.847607977Z",
    "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522777",
  "status": "queued",
  "created": "2023-02-08T18:52:44.847Z",
  "pin": {
    "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4' - 🟢 SUCCESS

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
{"cid":"bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522782",
  "status": "queued",
  "created": "2023-02-08T18:52:45.826287812Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522782,
    "createdAt": "2023-02-08T18:52:45.826287812Z",
    "updatedAt": "2023-02-08T18:52:45.826287812Z",
    "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522782",
  "status": "queued",
  "created": "2023-02-08T18:52:45.826287812Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522782,
    "createdAt": "2023-02-08T18:52:45.826287812Z",
    "updatedAt": "2023-02-08T18:52:45.826287812Z",
    "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522782",
  "status": "queued",
  "created": "2023-02-08T18:52:45.826Z",
  "pin": {
    "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4' - 🟢 SUCCESS

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
{"cid":"bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522783",
  "status": "queued",
  "created": "2023-02-08T18:52:46.825499701Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522783,
    "createdAt": "2023-02-08T18:52:46.825499701Z",
    "updatedAt": "2023-02-08T18:52:46.825499701Z",
    "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522783",
  "status": "queued",
  "created": "2023-02-08T18:52:46.825499701Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522783,
    "createdAt": "2023-02-08T18:52:46.825499701Z",
    "updatedAt": "2023-02-08T18:52:46.825499701Z",
    "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522783",
  "status": "queued",
  "created": "2023-02-08T18:52:46.825Z",
  "pin": {
    "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja' - 🟢 SUCCESS

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
{"cid":"bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1391",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522784",
  "status": "queued",
  "created": "2023-02-08T18:52:47.82509733Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522784,
    "createdAt": "2023-02-08T18:52:47.82509733Z",
    "updatedAt": "2023-02-08T18:52:47.82509733Z",
    "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522784",
  "status": "queued",
  "created": "2023-02-08T18:52:47.82509733Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522784,
    "createdAt": "2023-02-08T18:52:47.82509733Z",
    "updatedAt": "2023-02-08T18:52:47.82509733Z",
    "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522784",
  "status": "queued",
  "created": "2023-02-08T18:52:47.825Z",
  "pin": {
    "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou' - 🟢 SUCCESS

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
{"cid":"bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522785",
  "status": "queued",
  "created": "2023-02-08T18:52:48.828777945Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522785,
    "createdAt": "2023-02-08T18:52:48.828777945Z",
    "updatedAt": "2023-02-08T18:52:48.828777945Z",
    "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522785",
  "status": "queued",
  "created": "2023-02-08T18:52:48.828777945Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522785,
    "createdAt": "2023-02-08T18:52:48.828777945Z",
    "updatedAt": "2023-02-08T18:52:48.828777945Z",
    "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522785",
  "status": "queued",
  "created": "2023-02-08T18:52:48.828Z",
  "pin": {
    "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e' - 🟢 SUCCESS

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
{"cid":"bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522786",
  "status": "queued",
  "created": "2023-02-08T18:52:49.882123613Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522786,
    "createdAt": "2023-02-08T18:52:49.882123613Z",
    "updatedAt": "2023-02-08T18:52:49.882123613Z",
    "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522786",
  "status": "queued",
  "created": "2023-02-08T18:52:49.882123613Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522786,
    "createdAt": "2023-02-08T18:52:49.882123613Z",
    "updatedAt": "2023-02-08T18:52:49.882123613Z",
    "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522786",
  "status": "queued",
  "created": "2023-02-08T18:52:49.882Z",
  "pin": {
    "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4' - 🟢 SUCCESS

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
{"cid":"bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:50 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522787",
  "status": "queued",
  "created": "2023-02-08T18:52:50.885395298Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522787,
    "createdAt": "2023-02-08T18:52:50.885395298Z",
    "updatedAt": "2023-02-08T18:52:50.885395298Z",
    "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522787",
  "status": "queued",
  "created": "2023-02-08T18:52:50.885395298Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522787,
    "createdAt": "2023-02-08T18:52:50.885395298Z",
    "updatedAt": "2023-02-08T18:52:50.885395298Z",
    "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522787",
  "status": "queued",
  "created": "2023-02-08T18:52:50.885Z",
  "pin": {
    "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve' - 🟢 SUCCESS

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
{"cid":"bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:51 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522788",
  "status": "queued",
  "created": "2023-02-08T18:52:51.829309415Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522788,
    "createdAt": "2023-02-08T18:52:51.829309415Z",
    "updatedAt": "2023-02-08T18:52:51.829309415Z",
    "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522788",
  "status": "queued",
  "created": "2023-02-08T18:52:51.829309415Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522788,
    "createdAt": "2023-02-08T18:52:51.829309415Z",
    "updatedAt": "2023-02-08T18:52:51.829309415Z",
    "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522788",
  "status": "queued",
  "created": "2023-02-08T18:52:51.829Z",
  "pin": {
    "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy' - 🟢 SUCCESS

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
{"cid":"bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:52 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522793",
  "status": "queued",
  "created": "2023-02-08T18:52:52.830623485Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522793,
    "createdAt": "2023-02-08T18:52:52.830623485Z",
    "updatedAt": "2023-02-08T18:52:52.830623485Z",
    "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522793",
  "status": "queued",
  "created": "2023-02-08T18:52:52.830623485Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522793,
    "createdAt": "2023-02-08T18:52:52.830623485Z",
    "updatedAt": "2023-02-08T18:52:52.830623485Z",
    "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522793",
  "status": "queued",
  "created": "2023-02-08T18:52:52.830Z",
  "pin": {
    "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy' - 🟢 SUCCESS

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
{"cid":"bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1394",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:53 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "requestid": "121522795",
  "status": "queued",
  "created": "2023-02-08T18:52:53.831254259Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522795,
    "createdAt": "2023-02-08T18:52:53.831254259Z",
    "updatedAt": "2023-02-08T18:52:53.831254259Z",
    "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522795",
  "status": "queued",
  "created": "2023-02-08T18:52:53.831254259Z",
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "content": {
    "id": 121522795,
    "createdAt": "2023-02-08T18:52:53.831254259Z",
    "updatedAt": "2023-02-08T18:52:53.831254259Z",
    "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
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
    "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "requestid": "121522795",
  "status": "queued",
  "created": "2023-02-08T18:52:53.831Z",
  "pin": {
    "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
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
  "date": "Wed, 08 Feb 2023 18:52:54 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "count": 59,
  "results": [
    {
      "requestid": "121522795",
      "status": "queued",
      "created": "2023-02-08T18:52:53.831254Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522795,
        "createdAt": "2023-02-08T18:52:53.831254Z",
        "updatedAt": "2023-02-08T18:52:53.831254Z",
        "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522793",
      "status": "queued",
      "created": "2023-02-08T18:52:52.830623Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522793,
        "createdAt": "2023-02-08T18:52:52.830623Z",
        "updatedAt": "2023-02-08T18:52:52.830623Z",
        "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522788",
      "status": "queued",
      "created": "2023-02-08T18:52:51.829309Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522788,
        "createdAt": "2023-02-08T18:52:51.829309Z",
        "updatedAt": "2023-02-08T18:52:51.829309Z",
        "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522787",
      "status": "queued",
      "created": "2023-02-08T18:52:50.885395Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522787,
        "createdAt": "2023-02-08T18:52:50.885395Z",
        "updatedAt": "2023-02-08T18:52:50.885395Z",
        "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522786",
      "status": "queued",
      "created": "2023-02-08T18:52:49.882123Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522786,
        "createdAt": "2023-02-08T18:52:49.882123Z",
        "updatedAt": "2023-02-08T18:52:49.882123Z",
        "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522785",
      "status": "queued",
      "created": "2023-02-08T18:52:48.828777Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522785,
        "createdAt": "2023-02-08T18:52:48.828777Z",
        "updatedAt": "2023-02-08T18:52:48.828777Z",
        "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522784",
      "status": "queued",
      "created": "2023-02-08T18:52:47.825097Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522784,
        "createdAt": "2023-02-08T18:52:47.825097Z",
        "updatedAt": "2023-02-08T18:52:47.825097Z",
        "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522783",
      "status": "queued",
      "created": "2023-02-08T18:52:46.825499Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522783,
        "createdAt": "2023-02-08T18:52:46.825499Z",
        "updatedAt": "2023-02-08T18:52:46.825499Z",
        "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522782",
      "status": "queued",
      "created": "2023-02-08T18:52:45.826287Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522782,
        "createdAt": "2023-02-08T18:52:45.826287Z",
        "updatedAt": "2023-02-08T18:52:45.826287Z",
        "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522777",
      "status": "queued",
      "created": "2023-02-08T18:52:44.847607Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522777,
        "createdAt": "2023-02-08T18:52:44.847607Z",
        "updatedAt": "2023-02-08T18:52:44.847607Z",
        "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "count": 59,
  "results": [
    {
      "requestid": "121522795",
      "status": "queued",
      "created": "2023-02-08T18:52:53.831254Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522795,
        "createdAt": "2023-02-08T18:52:53.831254Z",
        "updatedAt": "2023-02-08T18:52:53.831254Z",
        "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522793",
      "status": "queued",
      "created": "2023-02-08T18:52:52.830623Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522793,
        "createdAt": "2023-02-08T18:52:52.830623Z",
        "updatedAt": "2023-02-08T18:52:52.830623Z",
        "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522788",
      "status": "queued",
      "created": "2023-02-08T18:52:51.829309Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522788,
        "createdAt": "2023-02-08T18:52:51.829309Z",
        "updatedAt": "2023-02-08T18:52:51.829309Z",
        "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522787",
      "status": "queued",
      "created": "2023-02-08T18:52:50.885395Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522787,
        "createdAt": "2023-02-08T18:52:50.885395Z",
        "updatedAt": "2023-02-08T18:52:50.885395Z",
        "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522786",
      "status": "queued",
      "created": "2023-02-08T18:52:49.882123Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522786,
        "createdAt": "2023-02-08T18:52:49.882123Z",
        "updatedAt": "2023-02-08T18:52:49.882123Z",
        "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522785",
      "status": "queued",
      "created": "2023-02-08T18:52:48.828777Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522785,
        "createdAt": "2023-02-08T18:52:48.828777Z",
        "updatedAt": "2023-02-08T18:52:48.828777Z",
        "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522784",
      "status": "queued",
      "created": "2023-02-08T18:52:47.825097Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522784,
        "createdAt": "2023-02-08T18:52:47.825097Z",
        "updatedAt": "2023-02-08T18:52:47.825097Z",
        "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522783",
      "status": "queued",
      "created": "2023-02-08T18:52:46.825499Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522783,
        "createdAt": "2023-02-08T18:52:46.825499Z",
        "updatedAt": "2023-02-08T18:52:46.825499Z",
        "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522782",
      "status": "queued",
      "created": "2023-02-08T18:52:45.826287Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522782,
        "createdAt": "2023-02-08T18:52:45.826287Z",
        "updatedAt": "2023-02-08T18:52:45.826287Z",
        "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522777",
      "status": "queued",
      "created": "2023-02-08T18:52:44.847607Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522777,
        "createdAt": "2023-02-08T18:52:44.847607Z",
        "updatedAt": "2023-02-08T18:52:44.847607Z",
        "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "count": 59,
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
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-02-08T18%3A52%3A44.847Z
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
  "date": "Wed, 08 Feb 2023 18:53:12 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "count": 49,
  "results": [
    {
      "requestid": "121522775",
      "status": "queued",
      "created": "2023-02-08T18:52:43.824343Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522775,
        "createdAt": "2023-02-08T18:52:43.824343Z",
        "updatedAt": "2023-02-08T18:52:43.824343Z",
        "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522774",
      "status": "queued",
      "created": "2023-02-08T18:52:42.877625Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522774,
        "createdAt": "2023-02-08T18:52:42.877625Z",
        "updatedAt": "2023-02-08T18:52:42.877625Z",
        "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522773",
      "status": "queued",
      "created": "2023-02-08T18:52:41.880515Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522773,
        "createdAt": "2023-02-08T18:52:41.880515Z",
        "updatedAt": "2023-02-08T18:52:41.880515Z",
        "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522772",
      "status": "queued",
      "created": "2023-02-08T18:52:40.875064Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522772,
        "createdAt": "2023-02-08T18:52:40.875064Z",
        "updatedAt": "2023-02-08T18:52:40.875064Z",
        "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522771",
      "status": "queued",
      "created": "2023-02-08T18:52:39.874155Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522771,
        "createdAt": "2023-02-08T18:52:39.874155Z",
        "updatedAt": "2023-02-08T18:52:39.874155Z",
        "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522646",
      "status": "queued",
      "created": "2023-02-08T18:51:43.330601Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522646,
        "createdAt": "2023-02-08T18:51:43.330601Z",
        "updatedAt": "2023-02-08T18:51:43.330601Z",
        "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522525",
      "status": "queued",
      "created": "2023-02-08T18:50:50.71553Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522525,
        "createdAt": "2023-02-08T18:50:50.71553Z",
        "updatedAt": "2023-02-08T18:50:50.71553Z",
        "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "92956308",
      "status": "failed",
      "created": "2023-01-25T23:09:18.991181Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibd72v3wwvswe2jhg4he7vtigcq5qy3osimwzbppo7mywv2q5etjq",
        "name": "c114c5fa-4b32-4cd1-a5d2-6f49351bb455",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 92956308,
        "createdAt": "2023-01-25T23:09:18.991181Z",
        "updatedAt": "2023-01-25T23:09:18.991181Z",
        "cid": "bafkreibd72v3wwvswe2jhg4he7vtigcq5qy3osimwzbppo7mywv2q5etjq",
        "name": "c114c5fa-4b32-4cd1-a5d2-6f49351bb455",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "92956302",
      "status": "failed",
      "created": "2023-01-25T23:09:16.921247Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreighdpky36x7meiad3oceflo33py5p7xr2qjadjsmmwsykdbvqtnmm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 92956302,
        "createdAt": "2023-01-25T23:09:16.921247Z",
        "updatedAt": "2023-01-25T23:09:16.921247Z",
        "cid": "bafkreighdpky36x7meiad3oceflo33py5p7xr2qjadjsmmwsykdbvqtnmm",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "count": 49,
  "results": [
    {
      "requestid": "121522775",
      "status": "queued",
      "created": "2023-02-08T18:52:43.824343Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522775,
        "createdAt": "2023-02-08T18:52:43.824343Z",
        "updatedAt": "2023-02-08T18:52:43.824343Z",
        "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522774",
      "status": "queued",
      "created": "2023-02-08T18:52:42.877625Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522774,
        "createdAt": "2023-02-08T18:52:42.877625Z",
        "updatedAt": "2023-02-08T18:52:42.877625Z",
        "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522773",
      "status": "queued",
      "created": "2023-02-08T18:52:41.880515Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522773,
        "createdAt": "2023-02-08T18:52:41.880515Z",
        "updatedAt": "2023-02-08T18:52:41.880515Z",
        "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522772",
      "status": "queued",
      "created": "2023-02-08T18:52:40.875064Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522772,
        "createdAt": "2023-02-08T18:52:40.875064Z",
        "updatedAt": "2023-02-08T18:52:40.875064Z",
        "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522771",
      "status": "queued",
      "created": "2023-02-08T18:52:39.874155Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522771,
        "createdAt": "2023-02-08T18:52:39.874155Z",
        "updatedAt": "2023-02-08T18:52:39.874155Z",
        "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522646",
      "status": "queued",
      "created": "2023-02-08T18:51:43.330601Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522646,
        "createdAt": "2023-02-08T18:51:43.330601Z",
        "updatedAt": "2023-02-08T18:51:43.330601Z",
        "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522525",
      "status": "queued",
      "created": "2023-02-08T18:50:50.71553Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522525,
        "createdAt": "2023-02-08T18:50:50.71553Z",
        "updatedAt": "2023-02-08T18:50:50.71553Z",
        "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "92956308",
      "status": "failed",
      "created": "2023-01-25T23:09:18.991181Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibd72v3wwvswe2jhg4he7vtigcq5qy3osimwzbppo7mywv2q5etjq",
        "name": "c114c5fa-4b32-4cd1-a5d2-6f49351bb455",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 92956308,
        "createdAt": "2023-01-25T23:09:18.991181Z",
        "updatedAt": "2023-01-25T23:09:18.991181Z",
        "cid": "bafkreibd72v3wwvswe2jhg4he7vtigcq5qy3osimwzbppo7mywv2q5etjq",
        "name": "c114c5fa-4b32-4cd1-a5d2-6f49351bb455",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "92956302",
      "status": "failed",
      "created": "2023-01-25T23:09:16.921247Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreighdpky36x7meiad3oceflo33py5p7xr2qjadjsmmwsykdbvqtnmm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 92956302,
        "createdAt": "2023-01-25T23:09:16.921247Z",
        "updatedAt": "2023-01-25T23:09:16.921247Z",
        "cid": "bafkreighdpky36x7meiad3oceflo33py5p7xr2qjadjsmmwsykdbvqtnmm",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "count": 49,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (38/40 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

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

  🟢 Response is ok (success)

  🟢 Result is not null (success)

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


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ TypeError: Cannot read properties of null (reading 'count')
    at testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:32:65)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)


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
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "72",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:52:39 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "unexpected EOF"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "unexpected EOF"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can delete pin with requestid '121522795' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522795
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
  "date": "Wed, 08 Feb 2023 18:53:13 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522793' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522793
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
  "date": "Wed, 08 Feb 2023 18:53:14 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522788' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522788
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
  "date": "Wed, 08 Feb 2023 18:53:15 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522787' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522787
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
  "date": "Wed, 08 Feb 2023 18:53:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522786' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522786
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
  "date": "Wed, 08 Feb 2023 18:53:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522785' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522785
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
  "date": "Wed, 08 Feb 2023 18:53:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522784' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522784
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
  "date": "Wed, 08 Feb 2023 18:53:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522783' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522783
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
  "date": "Wed, 08 Feb 2023 18:53:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522782' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522782
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
  "date": "Wed, 08 Feb 2023 18:53:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522777' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522777
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
  "date": "Wed, 08 Feb 2023 18:53:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522775' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522775
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
  "date": "Wed, 08 Feb 2023 18:53:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522774' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522774
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
  "date": "Wed, 08 Feb 2023 18:53:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522773' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522773
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
  "date": "Wed, 08 Feb 2023 18:53:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522772' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522772
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
  "date": "Wed, 08 Feb 2023 18:53:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522771' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522771
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
  "date": "Wed, 08 Feb 2023 18:53:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522653' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522653
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
  "date": "Wed, 08 Feb 2023 18:53:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522646' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522646
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
  "date": "Wed, 08 Feb 2023 18:53:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Can delete pin with requestid '121522525' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/121522525
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
  "date": "Wed, 08 Feb 2023 18:53:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
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
## Get all Pins created before 'Wed Jan 25 2023 23:09:16 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-01-25T23%3A09%3A16.921Z
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
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "72",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:54:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "unexpected EOF"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "unexpected EOF"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Get all Pins created before 'Wed Feb 08 2023 18:52:44 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (8/8 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-02-08T18%3A52%3A44.847Z
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
  "date": "Wed, 08 Feb 2023 18:53:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "count": 49,
  "results": [
    {
      "requestid": "121522775",
      "status": "queued",
      "created": "2023-02-08T18:52:43.824343Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522775,
        "createdAt": "2023-02-08T18:52:43.824343Z",
        "updatedAt": "2023-02-08T18:52:43.824343Z",
        "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522774",
      "status": "queued",
      "created": "2023-02-08T18:52:42.877625Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522774,
        "createdAt": "2023-02-08T18:52:42.877625Z",
        "updatedAt": "2023-02-08T18:52:42.877625Z",
        "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522773",
      "status": "queued",
      "created": "2023-02-08T18:52:41.880515Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522773,
        "createdAt": "2023-02-08T18:52:41.880515Z",
        "updatedAt": "2023-02-08T18:52:41.880515Z",
        "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522772",
      "status": "queued",
      "created": "2023-02-08T18:52:40.875064Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522772,
        "createdAt": "2023-02-08T18:52:40.875064Z",
        "updatedAt": "2023-02-08T18:52:40.875064Z",
        "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522771",
      "status": "queued",
      "created": "2023-02-08T18:52:39.874155Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522771,
        "createdAt": "2023-02-08T18:52:39.874155Z",
        "updatedAt": "2023-02-08T18:52:39.874155Z",
        "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522646",
      "status": "queued",
      "created": "2023-02-08T18:51:43.330601Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522646,
        "createdAt": "2023-02-08T18:51:43.330601Z",
        "updatedAt": "2023-02-08T18:51:43.330601Z",
        "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522525",
      "status": "queued",
      "created": "2023-02-08T18:50:50.71553Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522525,
        "createdAt": "2023-02-08T18:50:50.71553Z",
        "updatedAt": "2023-02-08T18:50:50.71553Z",
        "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "92956308",
      "status": "failed",
      "created": "2023-01-25T23:09:18.991181Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibd72v3wwvswe2jhg4he7vtigcq5qy3osimwzbppo7mywv2q5etjq",
        "name": "c114c5fa-4b32-4cd1-a5d2-6f49351bb455",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 92956308,
        "createdAt": "2023-01-25T23:09:18.991181Z",
        "updatedAt": "2023-01-25T23:09:18.991181Z",
        "cid": "bafkreibd72v3wwvswe2jhg4he7vtigcq5qy3osimwzbppo7mywv2q5etjq",
        "name": "c114c5fa-4b32-4cd1-a5d2-6f49351bb455",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "92956302",
      "status": "failed",
      "created": "2023-01-25T23:09:16.921247Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreighdpky36x7meiad3oceflo33py5p7xr2qjadjsmmwsykdbvqtnmm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 92956302,
        "createdAt": "2023-01-25T23:09:16.921247Z",
        "updatedAt": "2023-01-25T23:09:16.921247Z",
        "cid": "bafkreighdpky36x7meiad3oceflo33py5p7xr2qjadjsmmwsykdbvqtnmm",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "count": 49,
  "results": [
    {
      "requestid": "121522775",
      "status": "queued",
      "created": "2023-02-08T18:52:43.824343Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522775,
        "createdAt": "2023-02-08T18:52:43.824343Z",
        "updatedAt": "2023-02-08T18:52:43.824343Z",
        "cid": "bafkreics7hxjeyhucyw6xoqquua5ifw2g5yawoqgcbr5j6xbt5mbfsl2ue",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522774",
      "status": "queued",
      "created": "2023-02-08T18:52:42.877625Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522774,
        "createdAt": "2023-02-08T18:52:42.877625Z",
        "updatedAt": "2023-02-08T18:52:42.877625Z",
        "cid": "bafkreig53omikufhy6dsqwrtjony65pme2ddi2jgxw3bodpnxf6texpuzy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522773",
      "status": "queued",
      "created": "2023-02-08T18:52:41.880515Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522773,
        "createdAt": "2023-02-08T18:52:41.880515Z",
        "updatedAt": "2023-02-08T18:52:41.880515Z",
        "cid": "bafkreif755udox53dcidmgeg7ls4tgis7oov2l3bm7augkkt5t7p3sflby",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522772",
      "status": "queued",
      "created": "2023-02-08T18:52:40.875064Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522772,
        "createdAt": "2023-02-08T18:52:40.875064Z",
        "updatedAt": "2023-02-08T18:52:40.875064Z",
        "cid": "bafkreibmqpierfqm75pbnnhwvaohcalt3hhaowkhv7ngxuzr4vruaipfq4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522771",
      "status": "queued",
      "created": "2023-02-08T18:52:39.874155Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522771,
        "createdAt": "2023-02-08T18:52:39.874155Z",
        "updatedAt": "2023-02-08T18:52:39.874155Z",
        "cid": "bafkreif7nqn2qert2mnmdtq5otmgudjfyd34kyjm5ynpczfbzmj7v4boqe",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522653",
      "status": "queued",
      "created": "2023-02-08T18:51:45.516628Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522653,
        "createdAt": "2023-02-08T18:51:45.516628Z",
        "updatedAt": "2023-02-08T18:51:45.516628Z",
        "cid": "bafkreih64wfh7swfs6xxjaocipubdnbzofl2rcrncutrlt7oy24wjhz3xa",
        "name": "d144e490-8eea-4f29-9f07-a1426a8f9b72",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522646",
      "status": "queued",
      "created": "2023-02-08T18:51:43.330601Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522646,
        "createdAt": "2023-02-08T18:51:43.330601Z",
        "updatedAt": "2023-02-08T18:51:43.330601Z",
        "cid": "bafkreiagvrrhag5n2ieiu6do66zo6jjn2mfvtpesb4pphkx4cnntx5m75u",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522525",
      "status": "queued",
      "created": "2023-02-08T18:50:50.71553Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522525,
        "createdAt": "2023-02-08T18:50:50.71553Z",
        "updatedAt": "2023-02-08T18:50:50.71553Z",
        "cid": "bafkreiflurtrckk6r7kyuwk2sdrfyih4w6txtkbckiqswqim3ol4rf7aou",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "92956308",
      "status": "failed",
      "created": "2023-01-25T23:09:18.991181Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibd72v3wwvswe2jhg4he7vtigcq5qy3osimwzbppo7mywv2q5etjq",
        "name": "c114c5fa-4b32-4cd1-a5d2-6f49351bb455",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 92956308,
        "createdAt": "2023-01-25T23:09:18.991181Z",
        "updatedAt": "2023-01-25T23:09:18.991181Z",
        "cid": "bafkreibd72v3wwvswe2jhg4he7vtigcq5qy3osimwzbppo7mywv2q5etjq",
        "name": "c114c5fa-4b32-4cd1-a5d2-6f49351bb455",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "92956302",
      "status": "failed",
      "created": "2023-01-25T23:09:16.921247Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreighdpky36x7meiad3oceflo33py5p7xr2qjadjsmmwsykdbvqtnmm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 92956302,
        "createdAt": "2023-01-25T23:09:16.921247Z",
        "updatedAt": "2023-01-25T23:09:16.921247Z",
        "cid": "bafkreighdpky36x7meiad3oceflo33py5p7xr2qjadjsmmwsykdbvqtnmm",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "count": 49,
  "results": {}
}
```
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '0' (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "72",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 08 Feb 2023 18:55:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "unexpected EOF"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "unexpected EOF"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can delete all pins created during compliance checks - ❌ FAILED

### Expectations (18/19 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '0' (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
  "date": "Wed, 08 Feb 2023 18:53:12 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.0"
}
```
##### Body
```json
{
  "count": 59,
  "results": [
    {
      "requestid": "121522795",
      "status": "queued",
      "created": "2023-02-08T18:52:53.831254Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522795,
        "createdAt": "2023-02-08T18:52:53.831254Z",
        "updatedAt": "2023-02-08T18:52:53.831254Z",
        "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522793",
      "status": "queued",
      "created": "2023-02-08T18:52:52.830623Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522793,
        "createdAt": "2023-02-08T18:52:52.830623Z",
        "updatedAt": "2023-02-08T18:52:52.830623Z",
        "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522788",
      "status": "queued",
      "created": "2023-02-08T18:52:51.829309Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522788,
        "createdAt": "2023-02-08T18:52:51.829309Z",
        "updatedAt": "2023-02-08T18:52:51.829309Z",
        "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522787",
      "status": "queued",
      "created": "2023-02-08T18:52:50.885395Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522787,
        "createdAt": "2023-02-08T18:52:50.885395Z",
        "updatedAt": "2023-02-08T18:52:50.885395Z",
        "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522786",
      "status": "queued",
      "created": "2023-02-08T18:52:49.882123Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522786,
        "createdAt": "2023-02-08T18:52:49.882123Z",
        "updatedAt": "2023-02-08T18:52:49.882123Z",
        "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522785",
      "status": "queued",
      "created": "2023-02-08T18:52:48.828777Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522785,
        "createdAt": "2023-02-08T18:52:48.828777Z",
        "updatedAt": "2023-02-08T18:52:48.828777Z",
        "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522784",
      "status": "queued",
      "created": "2023-02-08T18:52:47.825097Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522784,
        "createdAt": "2023-02-08T18:52:47.825097Z",
        "updatedAt": "2023-02-08T18:52:47.825097Z",
        "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522783",
      "status": "queued",
      "created": "2023-02-08T18:52:46.825499Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522783,
        "createdAt": "2023-02-08T18:52:46.825499Z",
        "updatedAt": "2023-02-08T18:52:46.825499Z",
        "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522782",
      "status": "queued",
      "created": "2023-02-08T18:52:45.826287Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522782,
        "createdAt": "2023-02-08T18:52:45.826287Z",
        "updatedAt": "2023-02-08T18:52:45.826287Z",
        "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522777",
      "status": "queued",
      "created": "2023-02-08T18:52:44.847607Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522777,
        "createdAt": "2023-02-08T18:52:44.847607Z",
        "updatedAt": "2023-02-08T18:52:44.847607Z",
        "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "count": 59,
  "results": [
    {
      "requestid": "121522795",
      "status": "queued",
      "created": "2023-02-08T18:52:53.831254Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522795,
        "createdAt": "2023-02-08T18:52:53.831254Z",
        "updatedAt": "2023-02-08T18:52:53.831254Z",
        "cid": "bafkreidi2w5wvl7zcx7ynxygmatizy3ddacqaq7zxnad252vi3zjgpqcdy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522793",
      "status": "queued",
      "created": "2023-02-08T18:52:52.830623Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522793,
        "createdAt": "2023-02-08T18:52:52.830623Z",
        "updatedAt": "2023-02-08T18:52:52.830623Z",
        "cid": "bafkreih3hjmfe27nvspdlydmltyevdwc3uj7dudxsxphwisvq4qmmbqhsy",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522788",
      "status": "queued",
      "created": "2023-02-08T18:52:51.829309Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522788,
        "createdAt": "2023-02-08T18:52:51.829309Z",
        "updatedAt": "2023-02-08T18:52:51.829309Z",
        "cid": "bafkreig3rnehddjefcp5ir3aa7xlenjbogtyyl2ka5ngdvdthdtws2epve",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522787",
      "status": "queued",
      "created": "2023-02-08T18:52:50.885395Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522787,
        "createdAt": "2023-02-08T18:52:50.885395Z",
        "updatedAt": "2023-02-08T18:52:50.885395Z",
        "cid": "bafkreibrne3zq5jmqx4f6cp3jckl2urxtcoaduqygqvkhbsqfdcsj2nfd4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522786",
      "status": "queued",
      "created": "2023-02-08T18:52:49.882123Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522786,
        "createdAt": "2023-02-08T18:52:49.882123Z",
        "updatedAt": "2023-02-08T18:52:49.882123Z",
        "cid": "bafkreigelrmmgozjxwifcqqyl4yrcclk62ncua54h35objobhckz3zf64e",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522785",
      "status": "queued",
      "created": "2023-02-08T18:52:48.828777Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522785,
        "createdAt": "2023-02-08T18:52:48.828777Z",
        "updatedAt": "2023-02-08T18:52:48.828777Z",
        "cid": "bafkreibz66lxtnqxrppqlgxaotqjjypkvktharly56u6d6vcfbxvgdn6ou",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522784",
      "status": "queued",
      "created": "2023-02-08T18:52:47.825097Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522784,
        "createdAt": "2023-02-08T18:52:47.825097Z",
        "updatedAt": "2023-02-08T18:52:47.825097Z",
        "cid": "bafkreic62ndq56wcmq65ghdrqzjkfhukrc7fnuq6ycuqisulvxf3obgyja",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522783",
      "status": "queued",
      "created": "2023-02-08T18:52:46.825499Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522783,
        "createdAt": "2023-02-08T18:52:46.825499Z",
        "updatedAt": "2023-02-08T18:52:46.825499Z",
        "cid": "bafkreihe3puammulvf74adhxbj3phwemg6bkenaxw63lsklhq2l6t6d4q4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522782",
      "status": "queued",
      "created": "2023-02-08T18:52:45.826287Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522782,
        "createdAt": "2023-02-08T18:52:45.826287Z",
        "updatedAt": "2023-02-08T18:52:45.826287Z",
        "cid": "bafkreifynaeht7cyzeiu2juunsowh4zmtnad2yq57bpaajup67z5kkw6o4",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "121522777",
      "status": "queued",
      "created": "2023-02-08T18:52:44.847607Z",
      "delegates": [
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 121522777,
        "createdAt": "2023-02-08T18:52:44.847607Z",
        "updatedAt": "2023-02-08T18:52:44.847607Z",
        "cid": "bafkreiatm2gt6nsf4nc4ucr3hzc5tpiewjieuvwdl3orviecel234ulo4i",
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
        "location": "SHUTTLEdd6d5754-eb26-439a-a753-7d6e824325e7HANDLE",
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
  "count": 59,
  "results": {}
}
```
