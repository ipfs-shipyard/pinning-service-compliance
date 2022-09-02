
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2022-09-02T11:46:23.450Z

Revision: [c7fe568](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/c7fe568)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (9/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu'](#pins-post-of-cid-bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='90541d3a-121b-438b-9195-cefeffe86313'](#can-create-a-pin-with-name90541d3a-121b-438b-9195-cefeffe86313----success)

  🟢 [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----success)

  🟢 [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----success)

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
GET https://api.filebase.io/v1/ipfs/pins
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:49 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8cd82780-0180-4d7a-8ebb-efdf38fe5a38",
  "x-xss-protection": "1; mode=block"
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
GET https://api.filebase.io/v1/ipfs/pins
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:50 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f9fbd609-5fe7-4b0a-955a-3512f3d9a395",
  "x-xss-protection": "1; mode=block"
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
## Pins post of CID 'bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Pinning status is either queued, pinning, or pinned (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:51 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=N943%2BuOURWsVk0gU0yYFX%2FpTV4mFwCmgKCmLLVJ14D9xdnFVqhLljt4x6eiL%2Ff0w5CCZoe2pCmcgrRcHSn866%2FLnEcZzPJoXfqY5kGoNX9SpY6FsswnZsFqzCI3%2FRYxKw0AhUt50p4vI3HUMfvuRcwhxSMOwtoz2f5lhzSIxaDAtLANmBH8cGo5fjjIzrFZBJgzsDgFrRHrJQMUX4G0L193tUengXUnt7UyWenA%3D--kLvHkZdDFrXEwaAZ--vn8XZTFzrGghe%2B0bTsVOHw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:44:51 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a10487be-cf4c-4b73-9849-7703684dcf0d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
  "status": "queued",
  "created": "2022-09-02T07:44:51.000-04:00",
  "pin": {
    "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
    "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
  "status": "queued",
  "created": "2022-09-02T07:44:51.000-04:00",
  "pin": {
    "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
    "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
  "status": "queued",
  "created": "2022-09-02T11:44:51.000Z",
  "pin": {
    "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
    "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDI0
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:44:53 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=9Jl7u%2FJqpttIHWlMGWB6Qh9T7rVqAStIlM8E30acOiUZxBrTGc5gqO4DykaBder%2B3tIBAKqb6Liiu4eBw8Wahxl0Rins6TCnhXCh6e6RdaQLXsDIqlrsvcMkL0DJHcFE6HJIHpRV2vGKJbPUzMqy442zUr7AYHNcItc29Z9kFcUngp6Rrho2jQFr3dB6821fAy%2BYwWGMkI25PvocKmPx%2FeyeHJHkk8CaMMJiD34%3D--ysMk%2B9tH%2BBIXmNS9--SKrXTWP1q4i%2B5A8ITZWhkA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:44:53 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "82d017ca-7835-423c-953e-6e79f120037c",
  "x-xss-protection": "1; mode=block"
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreibbttuvppelr7nwrpp4jaxzb6m3zbwwn4sfc5se3hpdwzkxohw5mm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:52 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=jhAFj3gW6RgBEp0%2BwRu2yUCMLvzhPat20Nvn%2BiDx4BYDCIUvDLD1KPxPdLkNd5XyTMY0yAZ7%2F1be5eiBpvXkGaZzt1SQ1g03QgCeu%2Ft5DaEU8eZcQwGb2nBnehr78Rh50cZz33b6RAC%2Bz40jYUHVLtF9Eus5ASYSAZC4LSoQON1kUWhkGkUh2LDlvrkf57gXzDXbSRuVczWOzzK5UkaNMzEO8ccqgv2utF7%2B4kI%3D--Spxcezf15ifbY5Zy--aoCGqvE78EvPUkG5JKlgFw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:44:52 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f12eb637-24c5-4651-b2ac-da671a36555b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDI0",
  "status": "queued",
  "created": "2022-09-02T07:44:52.000-04:00",
  "pin": {
    "cid": "bafkreibbttuvppelr7nwrpp4jaxzb6m3zbwwn4sfc5se3hpdwzkxohw5mm",
    "name": "bafkreibbttuvppelr7nwrpp4jaxzb6m3zbwwn4sfc5se3hpdwzkxohw5mm",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDI0",
  "status": "queued",
  "created": "2022-09-02T07:44:52.000-04:00",
  "pin": {
    "cid": "bafkreibbttuvppelr7nwrpp4jaxzb6m3zbwwn4sfc5se3hpdwzkxohw5mm",
    "name": "bafkreibbttuvppelr7nwrpp4jaxzb6m3zbwwn4sfc5se3hpdwzkxohw5mm",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDI0",
  "status": "queued",
  "created": "2022-09-02T11:44:52.000Z",
  "pin": {
    "cid": "bafkreibbttuvppelr7nwrpp4jaxzb6m3zbwwn4sfc5se3hpdwzkxohw5mm",
    "name": "bafkreibbttuvppelr7nwrpp4jaxzb6m3zbwwn4sfc5se3hpdwzkxohw5mm",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:53 GMT",
  "etag": "W/\"3460a377b57b63bd564d777ab9dd7984\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "0abae604-380c-45db-ba4a-3ce7c1ce835f",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
      "status": "pinning",
      "created": "2022-09-02T07:44:51.000-04:00",
      "pin": {
        "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
      "status": "pinning",
      "created": "2022-09-02T07:44:51.000-04:00",
      "pin": {
        "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 3,
  "results": {}
}
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDU2
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:56 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d2f49ead-f920-4fea-9e3c-879a62686bc6",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "NOT_FOUND",
    "details": "The specified resource was not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "NOT_FOUND",
    "details": "The specified resource was not found"
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:56 GMT",
  "etag": "W/\"650b6e77c422dcc3baf86436b43faa48\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e9002790-4891-4e77-a633-f92101c29f3e",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
  "status": "pinning",
  "created": "2022-09-02T07:44:55.000-04:00",
  "pin": {
    "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
  "status": "pinning",
  "created": "2022-09-02T07:44:55.000-04:00",
  "pin": {
    "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
  "status": "pinning",
  "created": "2022-09-02T11:44:55.000Z",
  "pin": {
    "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Pin's with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDU2' can have cid 'bafkreieb7kxck5asfpdgkqaj25ra6q7dzdodhgohfmevitlqujwcznmtli' replaced with 'bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu' - 🟢 SUCCESS

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
POST https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDU2
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
{"cid":"bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:55 GMT",
  "etag": "W/\"136f0b983651d4b6a05fd66d0d48700a\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=sOffYqC%2FCcqlJfv5j%2BuVm9hI1AJxTcprQwaTRrEcYax5zWzv2EgU1%2FiJWZ67z%2BiagB7IyHIMctGzikyVhFtLgqrkuWwh4svuZCowyUw5V2bZ6m%2Fhpv6qQq6R4je7ACUjsUSS8VlGVE5LS%2Fvjj0pJSK4ki4w23zg4Mlsi8hzAwogqhF5h2vYfTFtGUMyL0c9dIWU4R4%2BrcLxQg8KW2IROCIj4E0nNSGWjbr3pJGI%3D--cNWObNAf%2Bjjn1maV--oQE7OKZFfH9hVOdbhqFugQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:44:55 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6b267284-1256-4d1f-abe0-66f9d0ee6b45",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
  "status": "queued",
  "created": "2022-09-02T07:44:55.000-04:00",
  "pin": {
    "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
  "status": "queued",
  "created": "2022-09-02T07:44:55.000-04:00",
  "pin": {
    "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
  "status": "queued",
  "created": "2022-09-02T11:44:55.000Z",
  "pin": {
    "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDU2) (success)

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
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreieb7kxck5asfpdgkqaj25ra6q7dzdodhgohfmevitlqujwcznmtli","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:54 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=P9nqlj8s1EeAWY49zdRXWpBPQdMjEdl2GPdxb%2BAWGA9wRVcfi2fgukVCXk67BkvpRqzSD%2BqR6aPoVe9s8LoMTVl%2BLA5PfJ%2Fn3H8bEaB0KSGSqaNeHg3kSyjg4iZmclpxkDAPtG%2FMxykX8VaCctUxcnHS2dFSjXvFVhXIhPmuRxbJI9hR1fltfd%2BkznsWOJ16VOxtbkt137umqg5Jvv1SxRLyVPUO5niR28kXDhI%3D--BgSsGWnonKWPYV%2B3--cJAMUuWXwmO1qEDVAZ%2FogQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:44:54 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8709f006-2624-4378-9d69-06d81bea9c88",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDU2",
  "status": "queued",
  "created": "2022-09-02T07:44:54.000-04:00",
  "pin": {
    "cid": "bafkreieb7kxck5asfpdgkqaj25ra6q7dzdodhgohfmevitlqujwcznmtli",
    "name": "bafkreieb7kxck5asfpdgkqaj25ra6q7dzdodhgohfmevitlqujwcznmtli",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDU2",
  "status": "queued",
  "created": "2022-09-02T07:44:54.000-04:00",
  "pin": {
    "cid": "bafkreieb7kxck5asfpdgkqaj25ra6q7dzdodhgohfmevitlqujwcznmtli",
    "name": "bafkreieb7kxck5asfpdgkqaj25ra6q7dzdodhgohfmevitlqujwcznmtli",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDU2",
  "status": "queued",
  "created": "2022-09-02T11:44:54.000Z",
  "pin": {
    "cid": "bafkreieb7kxck5asfpdgkqaj25ra6q7dzdodhgohfmevitlqujwcznmtli",
    "name": "bafkreieb7kxck5asfpdgkqaj25ra6q7dzdodhgohfmevitlqujwcznmtli",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can retrieve pin with name '90541d3a-121b-438b-9195-cefeffe86313' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=90541d3a-121b-438b-9195-cefeffe86313&match=exact
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:57 GMT",
  "etag": "W/\"63b0b2d6b15ab3988082cc8be81a813a\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e78819e8-cd8d-4ea5-88f8-2e7fe1fc87b0",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
## Can retrieve pin with name '90541D3A-121B-438B-9195-CEFEFFE86313' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=90541D3A-121B-438B-9195-CEFEFFE86313&match=iexact
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:58 GMT",
  "etag": "W/\"63b0b2d6b15ab3988082cc8be81a813a\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c96afd7d-378f-4565-85f0-7fdd00adec25",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
## Can retrieve pin with name '121b-438b-9195-cef' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=121b-438b-9195-cef&match=partial
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:59 GMT",
  "etag": "W/\"63b0b2d6b15ab3988082cc8be81a813a\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e055b85a-b507-4e34-b1fa-6fc99036cdbf",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
## Can retrieve pin with name '121B-438B-9195-CEF' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=121B-438B-9195-CEF&match=ipartial
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:00 GMT",
  "etag": "W/\"63b0b2d6b15ab3988082cc8be81a813a\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "680c298b-3f97-42c7-9a07-7e96e4037db4",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
## Can create a pin with name='90541d3a-121b-438b-9195-cefeffe86313' - 🟢 SUCCESS

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
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim","name":"90541d3a-121b-438b-9195-cefeffe86313","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:44:57 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=QXEJaGbPhDxqQhtrrU5KaOV4nL784kPGa87SuTy1C8zW291we6nb5fiov2i3d3aW%2FUNuSA2bYzSblu0VJJ6gCCX6oaVHSh39FoOauDhcSw8wHG0RmKyqP5JYAwJoL5H0ioLm9w1mG6zfViZsucpyFot0ntYSaZxAnRaYqx94Z92V9eWAKdKK5xZxOUS47sbJA4XEdjLXW2rbbUHqzM%2FxQTaI814dZj2AkwY8W88%3D--VRmvqt2q1HDOnXoG--oFpzBjaBuwXR7%2F%2FpYM1csA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:44:57 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cbaa1608-c1f0-41b7-8e61-931fc2dc8f29",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
  "status": "queued",
  "created": "2022-09-02T07:44:57.000-04:00",
  "pin": {
    "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
    "name": "90541d3a-121b-438b-9195-cefeffe86313",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
  "status": "queued",
  "created": "2022-09-02T07:44:57.000-04:00",
  "pin": {
    "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
    "name": "90541d3a-121b-438b-9195-cefeffe86313",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
  "status": "queued",
  "created": "2022-09-02T11:44:57.000Z",
  "pin": {
    "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
    "name": "90541d3a-121b-438b-9195-cefeffe86313",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:01 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=BG%2FxSx5yVuIDYXpGEy17HYuJVJwDfvW2NCrE68vn3ggkiZN1vq3tOdQad5R4G%2FzFEoi1Zn1HFnPNc%2Fs80qWS3cehdi8%2F4F8CzEiey%2FSz%2Buz9xS%2B9D00Ho03oNFxTPOQEmBIwEKJ%2F967cfFQnJPnkx9JKMQ099pYV2GZCEIKxVLaGSxQagyPe4AEwiPtRe4GS38zWRjvYQ1ZxcGA2T30YUif8HFc%2FYI6yQOcJ6f4%3D--Vzp22jKycwjZuy9J--%2Fx9Vc36qHOk4pc3UnkilJw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:01 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5da01546-e211-461c-b318-d2e4ad59fb9f",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1",
  "status": "queued",
  "created": "2022-09-02T07:45:01.000-04:00",
  "pin": {
    "cid": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
    "name": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1",
  "status": "queued",
  "created": "2022-09-02T07:45:01.000-04:00",
  "pin": {
    "cid": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
    "name": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1",
  "status": "queued",
  "created": "2022-09-02T11:45:01.000Z",
  "pin": {
    "cid": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
    "name": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:02 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=rx6QXlx%2BEc9zxH%2BR1fZkPP%2BXG%2BhYXH4sNO56OTeS2Mgr2INUbGbm4tgDE9CpvQs4GjtIKc6XR9LA1ag9%2BQIL4l03Kv4om9l18woG6erno4Dl%2BO2k83DSldF59ozuVCya80giIoos44XSCZsruaTdytJn3jAU5LsFAv3LpNF0ma36vHKgpjG5G4oVGbsZhw3mjAJ4v1SQA5PwN9Q0X0xYPdX2PoGdNwMC%2Bf8WKBo%3D--Q6SmdLMeePEGVf%2B2--I5e4%2Fv9q0aOubF7mCLSrQw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:02 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f83ed739-2b27-49ec-aeb8-9aa890272ba0",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0",
  "status": "queued",
  "created": "2022-09-02T07:45:02.000-04:00",
  "pin": {
    "cid": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
    "name": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0",
  "status": "queued",
  "created": "2022-09-02T07:45:02.000-04:00",
  "pin": {
    "cid": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
    "name": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0",
  "status": "queued",
  "created": "2022-09-02T11:45:02.000Z",
  "pin": {
    "cid": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
    "name": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:03 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=oBU3p%2FTke58NLS1l3PPr0aKxPSrL%2BegAi0SVaGUnQ%2BDXkzE%2BCqZtpHBxzHpGZm1iT2FLVtGwyDmqm0aXvq4a1iZb7ZRtpe3x9eoM4Z1o8tOJByChjobIquEn2b3qVjo%2BeGnhkWGeqOi8BWaKk06CicGJMYSriDSFyt8EqIr2lZqK4YX%2Be7i0pz1EKfnWyG0aocraaHBwA6NUMCcoZzam3y2r0h2r4gJ%2F1%2B4PCJ8%3D--0mru%2B0JbtHCBSXiX--VXQw%2FLZcDrmMhvLQcHIT2w%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:03 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e1e2113e-393b-47d1-9e83-7a38207270a6",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2",
  "status": "queued",
  "created": "2022-09-02T07:45:03.000-04:00",
  "pin": {
    "cid": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
    "name": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2",
  "status": "queued",
  "created": "2022-09-02T07:45:03.000-04:00",
  "pin": {
    "cid": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
    "name": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2",
  "status": "queued",
  "created": "2022-09-02T11:45:03.000Z",
  "pin": {
    "cid": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
    "name": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:04 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=hErs5bb34EPadkYDUA1t1uQ3APOAGKcLIOhD83H8iuthPvGZk1yj7JMleEeo0W%2BTXlgwvRbbJ3fn89xDMk742VdDZgFGPH7lK7jhEjSTv6uvrOu2rxpIE%2F3rABi%2FsOXG%2BGtJIljXlvvA7qOCePfcBh55yFOG6z%2F26js5pq%2FBj53dH2XFm6B2901pkPe6qTbP%2BlAGSSaNG4ejgCCiyR2F%2BexU4RhZkflKBpa4q6E%3D--VGNN3rjaKqdF4Wce--puBP2Yl2S1sBINoYZZlQVg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:04 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2484f93c-49c0-4895-8c64-ca3b5402b5ba",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4",
  "status": "queued",
  "created": "2022-09-02T07:45:04.000-04:00",
  "pin": {
    "cid": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
    "name": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4",
  "status": "queued",
  "created": "2022-09-02T07:45:04.000-04:00",
  "pin": {
    "cid": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
    "name": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4",
  "status": "queued",
  "created": "2022-09-02T11:45:04.000Z",
  "pin": {
    "cid": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
    "name": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:05 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=cxrugppMLeynqpZB1ALIsJ7z%2F8mloT6NtRxcU%2B%2F7dTy0pvsQpgM2XwcBr7zSzdxeibdi4RTrVKV9O6wTotXyi%2FoRg63jWJ96snXviLCeauMed%2B70ijk3XI3PetqlVFYPznBmwFgrpoy0JdCFR8FFEWyThGChTG3VW7Pv%2BtUEqbqSyGvjzDoWFoQRUwDoqgrJnIMY7qITlCSLEp0RoBGttbKrepEVKgWDNkugAWA%3D--2PiEoEvARKlwWs44--Gjqf3rF2%2BhOWvMsRFxqmgA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:05 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b2c8892e-07bb-4fda-870b-c2861e5d7ce1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz",
  "status": "queued",
  "created": "2022-09-02T07:45:05.000-04:00",
  "pin": {
    "cid": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
    "name": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz",
  "status": "queued",
  "created": "2022-09-02T07:45:05.000-04:00",
  "pin": {
    "cid": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
    "name": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz",
  "status": "queued",
  "created": "2022-09-02T11:45:05.000Z",
  "pin": {
    "cid": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
    "name": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:06 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=jh2PlxDknsv4aACcqTh87ODA3CPcBhdfa1p%2BkKQD57KjOyz%2Bk%2B3hyvEnqr5wy8VFU9f%2BXZITgvvC84EVZGgBDVa0bXh3ONEGq7F%2FWHL1wChILjH4ef8P%2BBNbszoVp4CDAImnBmo%2FGxiNS1kfBB1nBxmDimFSHb3cnrlywX2W%2BPzo8viIwOKbPNLHDaqW9aQKJjo7h48W7UpRNHNlCtYJxxj%2B7I2B13Bty8yNw%2FM%3D--D6%2BnaN5AW%2Bc8Ei3P--CrX9YC4phOL9nygXNYLzDA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:06 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3fca12b1-c49b-4503-9c93-df2894778c70",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0",
  "status": "queued",
  "created": "2022-09-02T07:45:06.000-04:00",
  "pin": {
    "cid": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
    "name": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0",
  "status": "queued",
  "created": "2022-09-02T07:45:06.000-04:00",
  "pin": {
    "cid": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
    "name": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0",
  "status": "queued",
  "created": "2022-09-02T11:45:06.000Z",
  "pin": {
    "cid": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
    "name": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:07 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=c7DQnd0PZSld4ULUf9%2FDGWehXroiH6%2B9JKaSad3EBTJTMmBIBRHzUFMg1ZQmtmzzykpMSFjwFxwjf2goIJjxUhQNzNbEpk5wjOFRZhGR2KRIz3JULFOZHib69LlDljHc7%2B6lKW7q%2BqhjRv8%2BZZXrc7HagA6canx7wotMiZ8R%2Bi4nqGeJjNjCuOAH4Y%2F0u7qYl%2FkpwHJ1fI4a0oUJEwgcKQCmH0bCI7E6k3k7pLM%3D--iL90ybwaLY7f58ON--IbuHey7kA0PStFF0dntVeA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:07 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "094ff248-3799-4ac9-9102-004ece7e6d79",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5",
  "status": "queued",
  "created": "2022-09-02T07:45:07.000-04:00",
  "pin": {
    "cid": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
    "name": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5",
  "status": "queued",
  "created": "2022-09-02T07:45:07.000-04:00",
  "pin": {
    "cid": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
    "name": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5",
  "status": "queued",
  "created": "2022-09-02T11:45:07.000Z",
  "pin": {
    "cid": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
    "name": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:08 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=itMyF0f3BSO%2FaOqtQUFjYpxZJHc0dtpY%2Be6KFPRYNi229jdwVIzPUsCfQT8bfgVRhi7giSxNMWWtdi8FpN338m%2FVtUPydLTO2dWYWHms8yWumbigX0TaC8L1G%2FlYw0YpuT5sXNPI5nv3pVdGhD%2BBJJxLK6Vd%2FuqnH%2FGV8u7vnk3CqDSW5OUBBvv%2FDfBwH%2BrEmkqC%2Bwtf%2BpaF6kwZmUS5iuyn4Ru9FKxagKlLN0g%3D--Rr9M82MxCFUrClwf--WioGTkzEx14bVtc8Rohl8w%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:08 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2bef7cb7-4e49-4f88-8e9c-5d6f2c40dd1c",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4",
  "status": "queued",
  "created": "2022-09-02T07:45:08.000-04:00",
  "pin": {
    "cid": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
    "name": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4",
  "status": "queued",
  "created": "2022-09-02T07:45:08.000-04:00",
  "pin": {
    "cid": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
    "name": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4",
  "status": "queued",
  "created": "2022-09-02T11:45:08.000Z",
  "pin": {
    "cid": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
    "name": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:09 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=8V38TfshAROJqNYhrPC8u8I1RSk1fl7kzRxwNXBdIE27W1%2FqAwI%2FyySyAZeK2a7oQ9YCAB6aGxD2w3bteQ97at2kwWrvbnzO3LqMD3jXFUa2tsapQt1P6J43uV5AEF3sjd00e0OwPn7jUF30I5e7not0kMRh9%2FpjoXWR%2FQ6dgvxJwsHxMRXQxbyImmzoMbvl1ZYXxMi1iQ8fDAF2kgc6iP4jn2U6fDptQMjK%2BGY%3D--CxENP5kyu4NKdNLU--GyQad%2F0PV7G2ybPZC%2BH27g%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:09 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e9301167-03ed-47f0-ad27-2af9656adbd8",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4",
  "status": "queued",
  "created": "2022-09-02T07:45:09.000-04:00",
  "pin": {
    "cid": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
    "name": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4",
  "status": "queued",
  "created": "2022-09-02T07:45:09.000-04:00",
  "pin": {
    "cid": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
    "name": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4",
  "status": "queued",
  "created": "2022-09-02T11:45:09.000Z",
  "pin": {
    "cid": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
    "name": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
}
```
## Can create new pin for testing pagination cid='bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:10 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=DXt4OWiiTF3sGWT4KIItEKNoOiZLHfhFDLcSKCivda8QDMQaTIjQ%2FRMAPuDuKH38%2FJgoUVWYZGbKw2Ybdful7ty5MgIL0dTTWb06f8xxKx1cjfwZrXEL0NnIflgScQng%2BJfc0YSQqM1egPUHC5F7j6gQFjccSYg1EMF8WP%2BXYc%2B1rV4vHDDj59Q2b2tDZJJQt44y3ymhfrSTpt78WzmMR1Fp4%2BB5YpQ8CY1JNeM%3D--YpphKCvgvW5XTR%2FF--RunzCrsvpvDjcBH8kL8S2A%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:10 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c3611f30-872f-44b8-a9ef-32a7f13b1767",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy",
  "status": "queued",
  "created": "2022-09-02T07:45:10.000-04:00",
  "pin": {
    "cid": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
    "name": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy",
  "status": "queued",
  "created": "2022-09-02T07:45:10.000-04:00",
  "pin": {
    "cid": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
    "name": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "info": {
    "size": "0"
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy",
  "status": "queued",
  "created": "2022-09-02T11:45:10.000Z",
  "pin": {
    "cid": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
    "name": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
    "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
    "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
  ],
  "info": {
    "size": "0"
  }
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:11 GMT",
  "etag": "W/\"7ce7a85560b7b4b9e3d14259ba2c9b03\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ca845168-d979-4272-a8c4-77ea6587af63",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy",
      "status": "pinning",
      "created": "2022-09-02T07:45:10.000-04:00",
      "pin": {
        "cid": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
        "name": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4",
      "status": "pinning",
      "created": "2022-09-02T07:45:09.000-04:00",
      "pin": {
        "cid": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
        "name": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4",
      "status": "pinning",
      "created": "2022-09-02T07:45:08.000-04:00",
      "pin": {
        "cid": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
        "name": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5",
      "status": "pinning",
      "created": "2022-09-02T07:45:07.000-04:00",
      "pin": {
        "cid": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
        "name": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0",
      "status": "pinning",
      "created": "2022-09-02T07:45:06.000-04:00",
      "pin": {
        "cid": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
        "name": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz",
      "status": "pinning",
      "created": "2022-09-02T07:45:05.000-04:00",
      "pin": {
        "cid": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
        "name": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4",
      "status": "pinning",
      "created": "2022-09-02T07:45:04.000-04:00",
      "pin": {
        "cid": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
        "name": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2",
      "status": "pinning",
      "created": "2022-09-02T07:45:03.000-04:00",
      "pin": {
        "cid": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
        "name": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0",
      "status": "pinning",
      "created": "2022-09-02T07:45:02.000-04:00",
      "pin": {
        "cid": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
        "name": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1",
      "status": "pinning",
      "created": "2022-09-02T07:45:01.000-04:00",
      "pin": {
        "cid": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
        "name": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy",
      "status": "pinning",
      "created": "2022-09-02T07:45:10.000-04:00",
      "pin": {
        "cid": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
        "name": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4",
      "status": "pinning",
      "created": "2022-09-02T07:45:09.000-04:00",
      "pin": {
        "cid": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
        "name": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4",
      "status": "pinning",
      "created": "2022-09-02T07:45:08.000-04:00",
      "pin": {
        "cid": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
        "name": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5",
      "status": "pinning",
      "created": "2022-09-02T07:45:07.000-04:00",
      "pin": {
        "cid": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
        "name": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0",
      "status": "pinning",
      "created": "2022-09-02T07:45:06.000-04:00",
      "pin": {
        "cid": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
        "name": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz",
      "status": "pinning",
      "created": "2022-09-02T07:45:05.000-04:00",
      "pin": {
        "cid": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
        "name": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4",
      "status": "pinning",
      "created": "2022-09-02T07:45:04.000-04:00",
      "pin": {
        "cid": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
        "name": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2",
      "status": "pinning",
      "created": "2022-09-02T07:45:03.000-04:00",
      "pin": {
        "cid": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
        "name": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0",
      "status": "pinning",
      "created": "2022-09-02T07:45:02.000-04:00",
      "pin": {
        "cid": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
        "name": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1",
      "status": "pinning",
      "created": "2022-09-02T07:45:01.000-04:00",
      "pin": {
        "cid": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
        "name": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-09-02T11%3A45%3A01.000Z
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:11 GMT",
  "etag": "W/\"9ae5e8748af37c26cc158487c708c58f\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cb18e59a-15ae-49b2-8f3f-953d8a9946f6",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
      "status": "pinning",
      "created": "2022-09-02T07:44:55.000-04:00",
      "pin": {
        "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
      "status": "pinning",
      "created": "2022-09-02T07:44:51.000-04:00",
      "pin": {
        "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
      "status": "pinning",
      "created": "2022-09-02T07:44:55.000-04:00",
      "pin": {
        "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
      "status": "pinning",
      "created": "2022-09-02T07:44:51.000-04:00",
      "pin": {
        "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 5,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - 🟢 SUCCESS

### Expectations (30/30 successful)

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





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:00 GMT",
  "etag": "W/\"9ae5e8748af37c26cc158487c708c58f\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2b21a206-10fd-4f39-b4f5-b1b25b9aa72b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
      "status": "pinning",
      "created": "2022-09-02T07:44:55.000-04:00",
      "pin": {
        "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
      "status": "pinning",
      "created": "2022-09-02T07:44:51.000-04:00",
      "pin": {
        "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
      "status": "pinning",
      "created": "2022-09-02T07:44:55.000-04:00",
      "pin": {
        "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
      "status": "pinning",
      "created": "2022-09-02T07:44:51.000-04:00",
      "pin": {
        "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 5,
  "results": {}
}
```
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:13 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=B00oEx36G%2FPKAWUA1en%2B0BmUUKZgcu40MPkRB5MPuY71P0wuHt6TJUQGJdKOIaqtps9lp9mbEYGVDeMyTkvlGJrbY3FsXZvFcPfrdjw1XqUTCC8X%2F291n%2BV%2FDMWGv6pFT5SXt15vOlkNviRXwlF%2BUp996fLkxwJq0SfhXfCx35ATDyT69HXzb4V7eUzIASBwKzHc2b6vDGsBS5jibNQqX9oDhwOxU7WAYwadI7U%3D--BqbMyR5Y9UgnUBuF--9nx4KSg%2B%2FbUURL7H0qxOrw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:13 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "250d337f-389a-493e-8ae8-0d2b327ad7a9",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:14 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=6qXgfDI0khwMQTs99enc2uAxcAFljzfooqqbpfo2CFPtrUcwKTK2LeDJNtkSFpqtK9He7ufhyZ0BDKsbgEjLkrA2UD6Y1eK%2Bz5HuM4IusOo5go2PRNFSQ786hxWbcZcAOflUGF1vNNlhvN7v6kIS82NERaNzNr1hOEVq%2FcrXhVQwrg2qSKeUVKcBobZHvTPQZhD6RTlZIUPvyT%2B2bWaWpuOJLxn5q71TKtXQFSE%3D--NnIm7gMQR5hhTSQH--ImIvPbHYJIzdKrkeqKxAzw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:14 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5b63f2e1-7380-420a-afaa-8dfe152c0962",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:15 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=BRW7%2B35gA4x4jiKAhX14r96cu%2FWe1NHQ%2BpaLcJn4Q5GRcWyjiae%2Fc06YYjBcvZanwSdNuhdewEMPFrV74clrIuMEWV7%2FhbG0lJsn55I9qFMv%2BCHUpCPe7rJaLHHNXypNX6StryerW7GCmzGqctKx%2Ffo3KndfoMmxTIJbeejfYQmDar%2F1nIDBwyNcO3FtxTJ%2FmYJ4GvxiDfi8v4Fwh6utLjCi1nHeBENPZnFXMiw%3D--zk%2BaYDyqhSM36bSQ--l125EGxZV4%2FUL%2BilFeXiBw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:15 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b554dc6e-6804-48de-bc85-7eabf62d73fe",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:16 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=DVlq%2BO0mktA5vU4C0frcI1%2Fn2S06A1psDmXVBLs2Bsyvlt0lGSNZ6%2FntZHjlTVHrUJM4fDq8cYbhA8lxzZ1smtOKz%2FfET05dW%2B6J9deyjDFjMCT98R5nG%2FAPFSVtWlthMjAEF6oXVssbkRcar06Rr3bAM%2BOHw1qyHOqwqtFSJsN8TnyxmzTeXfYnO%2B3MAoUvkOyWd5OvuSXe9G90c5OykKbW6KBZ7p6PnR%2FFoDs%3D--SOiY0k9LLOeUK5xm--k5nEejAeXG3sMgFhjn1vpg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:16 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b6b93fd7-d4f6-43d7-8705-1a918e40b415",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:17 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=uddxX1HMLFSAHoj%2BB6ePfn54oSwRkllo2v3u%2B77EGxGJUH8O8Gv%2BB%2FPJbE%2BCwnpCWp0KLkE7GUczKuqeECTMV4tgRl8q%2B1i3UHp%2FggUZD8QWHQADNuYfCvXQ0rHblgdqASokk3CZvpzo0IwP5U%2BU6jfzP0%2B5S08ZZ%2F7hGXkeXb2mHXsyHThpW6UFuoBZkYl6uxJ5RvRN7IcO7nKf%2FTNd8Y06Dh3Gx5ENb0T4XGM%3D--ycK51yXjZdWHP6xQ--aaoetOS0S1Wul4ZYYUwiiw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:17 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "bdabb3fd-8085-40ad-bf5c-2071d2ec256f",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:18 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=rMML%2FKYd4boHunv7QLXo3CMdxCx0yk%2F5gcE4l%2BcfuNsLGiU6a%2BK%2F4HY1AN2WdtVfe4wBHDmZe7ruUeD1vQwNQUs4lWcu%2B0awBa%2FLIhc84evp29AcQwAoCs%2BIeEOmShg7tAtFEDfZn0CejfbYKXLymDy7qLoDrBrd6HBQtFLIKrWwMLDRT2xDhbroIiXipKPFr6OtrWmC4AZfQpGwTeyn%2FUMFNY4OtqNUBmw7dFc%3D--HsxXm4vJSSACBlOp--NB1%2Fg5CNLGKLR3zu12BXFw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:18 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9db6248d-4e33-4f66-8e68-c36662b2663d",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:19 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=gsXoJM%2FXzXnWA5PRepmC3fqMp9f6SSKnDlUfMgdMY0qV0Wbp8LAF2YZ93fn%2BckpS5PA1Z4OwzP0gEi2BjEbE5h8d%2B4JhezXTu292SK29%2BroMazdBNx2M4Bd8Pp%2BF5ZhAJfkqxnq%2FlR0wTyyjxW4a%2BgeRbEP6%2B91UDCjSOwsbLMVWZ6kph56BJ%2Bdx4VgXZhQOoJGFiRiSpwZSvq7yO219BWuFQR8wRiatf2OmHjk%3D--zGrvIFBp3zw1Sukr--VP9r7e127s3Th6eiA0NObw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:19 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b45fa736-e934-4679-93e5-1a89bc5ae4dd",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:20 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=imcz6VjAQBJYwEV6eYYraZjOcZUIyChnE13p4%2Fe%2F7pWANR43%2BV4Tm2hmT%2FedaGD5osmb3IiKZ3Bxpul00U7WrJpc92Q19Rom3BfDr3l7PvyvUoWQNSN4zYM5ATCcVSfOtsT%2F5t%2BvF5NTzBNeMvs4n8bE8iXMCztkWmu2NIdudWZSwT%2FupA0ZL2%2B%2FVm56Eex1MzhtEPI5hIpca%2FA8Q9AgWdHzUCmOAvumzSzBGpE%3D--aiXXneHfn9dNbNFE--dhUN9K6uIstBA1KiaZnE1A%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:20 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e34d5645-3e41-44a6-aa28-d3b856cd7308",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:21 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=NJwAc8k9OOQEglD6qgeehpudNhzyulEe91Mb76jFaun3Hb1%2F2WcSlxT4rTKJXlL6%2FL7Zc3NFnwSdM1K8QDzqEjR5GZD3N1J0aphYS9ZWRF%2BACaw%2BxjkLSIxsnTjFJ%2BcXjQxEmZ7UBkcE7Ep8IRNrGLWAlR6EgnUwYpeQqeSDhK%2BU7pf1B%2B2D9Qzd%2FNcF4toUnfW%2BiovAm8gvRd1nR%2BGzMsJSk1608Khkc%2Bjf9rI%3D--Qhr9IMQ05vLJS%2Bwf--mQzlkD0ABpdl%2FpPC1mxhlg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:21 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ddd9daa2-97dc-462d-9ac4-0bcb394f07ae",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:45:22 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Me6hvjhxO4SVrjSbtAQ05NP%2Fr6%2Bj4GwnUMXXa40MSUzDhhc34LOBzEY18JJiVHZ5PD9TT7ZXNgMz3LUtc%2Bg%2FZ91S74SgdDoMtI40ZC4XCYeShzX1icn77STij8F6zmWu%2FpTD3tCFj5yOtPUhPpMVcLrsOXDmlenqRXC%2BZ3gozQoim0Y1kdXu9oY1epZi20vz4eAaw3USS2xdUIT2dHMJ0x9x9fXhFIEUksTjI50%3D--KF%2B89XIdjTcMTm00--7Lr9kgaXg5GSPwQYUjT2LA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:45:22 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "53795a89-3c92-456d-a00f-4f46d695065b",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:46:20 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=viadRP4SVsPWPxWRYpJ3iK9g0JplJNhQU85RWRaqcptINYql5X4pPmifynZ0xJX4PHgELKPIpBW6TFpZOJCPZrSu35QEzTknU4FLkXOYiDVoc%2FRkLuFAOPefurTjcMP0zumtPp7G6pN8O6aOBviv9boj74btktfr2faw1xa5R%2B%2BN0ZP8pXTFx4%2FFemo4XDAq6S5LfjelqZdg1nRct%2FHBA6GEs6sLxcVXZu9XQi8%3D--ihnG0j8k8pkihu6w--WKo11nO542uNbTqbhbHkmg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:46:20 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8b83f11c-5297-420c-886a-c21598cb37be",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:46:21 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=8NgWlq7XYbIxL6u6YNFGhdixwkQJkjkytBTibyq37Q8VOAPrwE3w8zy71ODtrX%2F5%2B%2F2n6Qv7n%2FGy2CeShsB0clmPJ7nlHHDdcRtFEyV9%2BjcGQ0maoKVys8NJhbjUCT00di42nk6EFLpkmBddWXmq7p5F3EM1EwdXKA7WYitChSiX3TzWZyghv6tafXS%2BU%2Fae7Rs347nAGgElE734wEONV5S0cA0Rih%2BbXlGANgc%3D--Cx1KKLuLadC7I9aq--ALms8dzuZ1pASRGhQjyVFw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:46:21 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "bdc821c6-0e38-4925-aaf8-f809c178a408",
  "x-xss-protection": "1; mode=block"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "connection": "close",
  "content-type": "application/json",
  "date": "Fri, 02 Sep 2022 11:46:22 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=CU%2FnOqVU%2B%2Fr8YxgyqLVbHlWb1AeZpfHfyvThgqMRwPZnrq%2FqJmZ3noqXE1eAE%2BrhPZhPr9jsxH4pnpKxXVQxSVtBBETCRYK8UlDJWV8xWFsaugnBIMDK2pCwIEuGoO6B1s8%2FTGpjET2VCQY%2FMhjOCmGzO6wUpvXaA1bhuJXzEP3EqKHN%2FU6s7SBsVvNeDVuK4NeL8HV3pXeT5FVy4%2B9U7vNnnvUFniKDsYYR49k%3D--2IRZkwND0Yl0rlm5--5CHsKtV7sW%2FVhEBYlSHxGA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:46:22 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ecb24120-4365-4cd8-a549-af15ad23a6bc",
  "x-xss-protection": "1; mode=block"
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
## Get all Pins created before 'Tue Aug 30 2022 17:21:27 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-08-30T17%3A21%3A27.000Z
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:46:23 GMT",
  "etag": "W/\"3438c5b0da51b073b4fa87b68d35e3b9\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3651f013-071a-447a-aa0d-413c53c16fb0",
  "x-xss-protection": "1; mode=block"
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
## Get all Pins created before 'Fri Sep 02 2022 11:45:01 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (3/3 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-09-02T11%3A45%3A01.000Z
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:46:19 GMT",
  "etag": "W/\"9ae5e8748af37c26cc158487c708c58f\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "34eb85aa-ad9f-4eb9-94d6-a5968053367d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
      "status": "pinning",
      "created": "2022-09-02T07:44:55.000-04:00",
      "pin": {
        "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
      "status": "pinning",
      "created": "2022-09-02T07:44:51.000-04:00",
      "pin": {
        "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDk2",
      "status": "pinning",
      "created": "2022-09-02T07:44:57.000-04:00",
      "pin": {
        "cid": "bafkreigj375xzaeqn56emtbfznxkpzwfr3gbo5sklwfcihjjn2lrdxiiim",
        "name": "90541d3a-121b-438b-9195-cefeffe86313",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDcw",
      "status": "pinning",
      "created": "2022-09-02T07:44:55.000-04:00",
      "pin": {
        "cid": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "name": "bafkreicv5an4ullaovapcoscfslqruclfw7l5kr625adbc6ihrp7i47iwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMDA4",
      "status": "pinning",
      "created": "2022-09-02T07:44:51.000-04:00",
      "pin": {
        "cid": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "name": "bafkreifc7zzcpeffn6y54jfdujf733wqpqws4tjiseqwkjr2e3icmszifu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 5,
  "results": {}
}
```
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '2' (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:46:23 GMT",
  "etag": "W/\"4d76b8f4aeff840e944bbb95d497f063\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "1fecffc2-b263-4826-a908-a3151cdc9b11",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 2,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 2,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4NjE5",
      "status": "pinning",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgxMTk4MDg0",
      "status": "pinning",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 2,
  "results": {}
}
```
## Can delete all pins created during compliance checks - 🟢 SUCCESS

### Expectations (14/14 successful)

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

  🟢 Final pinsGet call returns the same count as before all compliance checks: '2' (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "max-age=0, private, must-revalidate",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 02 Sep 2022 11:45:12 GMT",
  "etag": "W/\"7ce7a85560b7b4b9e3d14259ba2c9b03\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "945e1ebb-84b4-488e-9c0c-dc0bde947fd8",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy",
      "status": "pinning",
      "created": "2022-09-02T07:45:10.000-04:00",
      "pin": {
        "cid": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
        "name": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4",
      "status": "pinning",
      "created": "2022-09-02T07:45:09.000-04:00",
      "pin": {
        "cid": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
        "name": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4",
      "status": "pinning",
      "created": "2022-09-02T07:45:08.000-04:00",
      "pin": {
        "cid": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
        "name": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5",
      "status": "pinning",
      "created": "2022-09-02T07:45:07.000-04:00",
      "pin": {
        "cid": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
        "name": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0",
      "status": "pinning",
      "created": "2022-09-02T07:45:06.000-04:00",
      "pin": {
        "cid": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
        "name": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz",
      "status": "pinning",
      "created": "2022-09-02T07:45:05.000-04:00",
      "pin": {
        "cid": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
        "name": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4",
      "status": "pinning",
      "created": "2022-09-02T07:45:04.000-04:00",
      "pin": {
        "cid": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
        "name": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2",
      "status": "pinning",
      "created": "2022-09-02T07:45:03.000-04:00",
      "pin": {
        "cid": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
        "name": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0",
      "status": "pinning",
      "created": "2022-09-02T07:45:02.000-04:00",
      "pin": {
        "cid": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
        "name": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1",
      "status": "pinning",
      "created": "2022-09-02T07:45:01.000-04:00",
      "pin": {
        "cid": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
        "name": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMzEy",
      "status": "pinning",
      "created": "2022-09-02T07:45:10.000-04:00",
      "pin": {
        "cid": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
        "name": "bafkreibc3wk4vwvpspyrhlmrjstnkdsjiebaibyv4ooqqgnvadq5hdyqly",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjg4",
      "status": "pinning",
      "created": "2022-09-02T07:45:09.000-04:00",
      "pin": {
        "cid": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
        "name": "bafkreifvpfzjhmd5ci3x6xawmcmoqc23lvlaxkzacwquw2wdiron6lccwa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjY4",
      "status": "pinning",
      "created": "2022-09-02T07:45:08.000-04:00",
      "pin": {
        "cid": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
        "name": "bafkreiartgbuyt446nzzkw4drqdd3qogvbjb2mwomgrtlreygj43w5lqlq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjQ5",
      "status": "pinning",
      "created": "2022-09-02T07:45:07.000-04:00",
      "pin": {
        "cid": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
        "name": "bafkreiff5wjxm66u7lw5hodnqswutczuk26phpdzuva7ls4md2bhvzztoi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjI0",
      "status": "pinning",
      "created": "2022-09-02T07:45:06.000-04:00",
      "pin": {
        "cid": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
        "name": "bafkreibdknnraawkaevgbpukawgqvo7uipedszk24o66tzsc6m23z5x3oy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMjEz",
      "status": "pinning",
      "created": "2022-09-02T07:45:05.000-04:00",
      "pin": {
        "cid": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
        "name": "bafkreih2b2zl5umutd236vp4euhp33pto4grdyv3dbxvripv4kb34axpom",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTk4",
      "status": "pinning",
      "created": "2022-09-02T07:45:04.000-04:00",
      "pin": {
        "cid": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
        "name": "bafkreid7eszlo2c6riw5pctok3x5lophn5ejbxidxaisnixadc2d5fjxge",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTc2",
      "status": "pinning",
      "created": "2022-09-02T07:45:03.000-04:00",
      "pin": {
        "cid": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
        "name": "bafkreicxyemc5crm4i3adu6jzy5dgnviek5oelmhj3tfgx7fvkkkq2wy6y",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTY0",
      "status": "pinning",
      "created": "2022-09-02T07:45:02.000-04:00",
      "pin": {
        "cid": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
        "name": "bafkreidlmtbea25ggobcmfm3anc5xp62ldwm7owgkagslmumplf6vpdtay",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgxMTU1",
      "status": "pinning",
      "created": "2022-09-02T07:45:01.000-04:00",
      "pin": {
        "cid": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
        "name": "bafkreicdoe3dys5kckvo5lvquzyugyxoolguuajo7derkk5tflnsvnbecu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
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
