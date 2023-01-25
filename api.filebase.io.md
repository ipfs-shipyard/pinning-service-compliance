
<script src="./telemetry.js"></script>
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2023-01-25T23:02:20.882Z

Revision: [c0d25f3](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/c0d25f3)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (9/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui'](#pins-post-of-cid-bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='adb94451-d9c0-4000-b0f2-5b3ed9857c33'](#can-create-a-pin-with-nameadb94451-d9c0-4000-b0f2-5b3ed9857c33----success)

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
  "date": "Wed, 25 Jan 2023 23:01:41 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "66554096-2ade-4a63-b7c6-f9a701c80d21",
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
  "date": "Wed, 25 Jan 2023 23:01:42 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9af5294f-4c1e-477f-8815-64eb0eee282e",
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
## Pins post of CID 'bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui' - 🟢 SUCCESS

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
{"cid":"bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:43 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Ymrs4p0xfRAplGHOU9%2F2uZpKMeALjn0PPpruNvdrzf%2B9723pZp3f8x7%2Bgyymi85yyCxKUKfSz7sYIi0aGK4ZkFtGV96KsxDLKHpXxV77m5NNxChLkE8RAe3CTLIZg%2BwakcKfFUvjTqXZfo4%2F2%2FdctHHwifWDW9xk4ZiBgapZj8w0URF8Wy23ZwAHiiuIZGpWryBKatTH6%2BW7D%2BPIh%2FXU2i5ORoGiitXlzoN%2BoTY%3D--oodhQbyegnWyGUQ0--h%2F4cIgioTG7W1%2BZUCcfAdg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:43 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3e18801a-96bf-4e16-8caa-b1a7b59c61d5",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
  "status": "queued",
  "created": "2023-01-25T18:01:43.000-05:00",
  "pin": {
    "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
    "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
  "status": "queued",
  "created": "2023-01-25T18:01:43.000-05:00",
  "pin": {
    "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
    "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
  "status": "queued",
  "created": "2023-01-25T23:01:43.000Z",
  "pin": {
    "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
    "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMw
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
  "date": "Wed, 25 Jan 2023 23:01:45 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=eKg%2FMjp4eL95lGhD3Xv%2BEZZwd%2FGaXUlgdB3dW0G%2BA7KJa3LGj3GIcAVdWZ2dwb9L2Mny9eulur1SqO1Jxs9pouQa4ZbJoLREwQEFSDWrMzl9L%2FdVuqFaXfwYsPZNowcZsaRDCimSaWV%2FHsV9iGRt0Id9%2B51W9jgjxJ12DQA8D2Iodhynm3iXWpuCcemIG%2FJ%2B6DlrWLN7FN6nSFQbwnuSllx6N3ZvPXCWJGZATJw%3D--fwXEy2HPfGYY5NGJ--B5CCyDffvlrt5sCU63ZfzA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:45 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "56508b57-2f9b-4aee-9ad4-a5db4072e571",
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
{"cid":"bafkreia4lxhvlqwtdpjdg6xu6ggep5euji5p4rfzal5alkbvds535xlhnq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:44 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=aLMOmaZTiaHMy1qP1c87mNQvYuJtwMka2%2BPCdYll%2BsdhzTr7iegPwd9WBuB4wD6rQhHFWyU%2Bq9IRf%2Ft9388D2BA5VkXvWLsFi7vyf%2Fx2RYlW29q9%2FKglErgGcGVh7jD8NKalFj1Qq6dk5svRjqsaKF4jGlV9Af3jGiHDFOLGPg0hUR%2BOSTVUOSv9J2cxTeWdNx3LoAaOTKKRmNCYD2PsPe0e2%2ByjImVADCMCuUc%3D--Cini7oi1zyYQ33rm--JBIaNbk5g4ooWRYkXI70gg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:44 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "279bfad5-9e56-4080-b669-43bb7c6e4dd9",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMw",
  "status": "queued",
  "created": "2023-01-25T18:01:44.000-05:00",
  "pin": {
    "cid": "bafkreia4lxhvlqwtdpjdg6xu6ggep5euji5p4rfzal5alkbvds535xlhnq",
    "name": "bafkreia4lxhvlqwtdpjdg6xu6ggep5euji5p4rfzal5alkbvds535xlhnq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMw",
  "status": "queued",
  "created": "2023-01-25T18:01:44.000-05:00",
  "pin": {
    "cid": "bafkreia4lxhvlqwtdpjdg6xu6ggep5euji5p4rfzal5alkbvds535xlhnq",
    "name": "bafkreia4lxhvlqwtdpjdg6xu6ggep5euji5p4rfzal5alkbvds535xlhnq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMw",
  "status": "queued",
  "created": "2023-01-25T23:01:44.000Z",
  "pin": {
    "cid": "bafkreia4lxhvlqwtdpjdg6xu6ggep5euji5p4rfzal5alkbvds535xlhnq",
    "name": "bafkreia4lxhvlqwtdpjdg6xu6ggep5euji5p4rfzal5alkbvds535xlhnq",
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
  "date": "Wed, 25 Jan 2023 23:01:45 GMT",
  "etag": "W/\"9c7f96697a971ffdf24d48b0d7363cfd\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f3cfca64-e8f3-4b90-818f-101dcca1bc42",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:43.000-05:00",
      "pin": {
        "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
        "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:43.000-05:00",
      "pin": {
        "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
        "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0Mg
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
  "date": "Wed, 25 Jan 2023 23:01:48 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "783fd85d-d6fe-472c-8927-0d4a55ce8521",
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA
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
  "date": "Wed, 25 Jan 2023 23:01:49 GMT",
  "etag": "W/\"b23aca9f23068ca0e11b9e2aff409d1e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "72a1fb2b-60f6-49b2-b479-b358a8280074",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
  "status": "pinning",
  "created": "2023-01-25T18:01:47.000-05:00",
  "pin": {
    "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
    "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
  "status": "pinning",
  "created": "2023-01-25T18:01:47.000-05:00",
  "pin": {
    "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
    "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
  "status": "pinning",
  "created": "2023-01-25T23:01:47.000Z",
  "pin": {
    "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
    "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
## Pin's with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0Mg' can have cid 'bafkreidxfhhhxov6lxqyue6qxeklo5wuzqejoubhj5rvkrbfabsahx5vqa' replaced with 'bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu' - 🟢 SUCCESS

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
POST https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0Mg
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
{"cid":"bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:47 GMT",
  "etag": "W/\"37cae8407f4270845c0cf3318debb16e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Kq3oLj9ygjFLf38kL8fuqtojdo9vp7lVccId0nGKHmoAixhV%2Bahbqsofiu1a0e%2BX3OF1iIgCIupy68U%2F5c%2FIKnTbvInqM%2FXHYBKbsxMmoE7%2FflbPayHof0quowRy3Td6JJYVl31Mx84GV%2BPiY8V9y4LJJIGCnpFwgrzMhOZf%2B7XRsloopM6XuFmKSyOEDNtj1ThwwuIfOUrVytF7U5UKQfsU1shKZXpItZ%2FHV6o%3D--syBKNUDwv3T8BJJU--uqOGcg511ixAZIL9Fqo6rA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:47 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "da5eca2a-306c-425b-8024-9e6b31ad28bd",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
  "status": "queued",
  "created": "2023-01-25T18:01:47.000-05:00",
  "pin": {
    "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
    "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
  "status": "queued",
  "created": "2023-01-25T18:01:47.000-05:00",
  "pin": {
    "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
    "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
  "status": "queued",
  "created": "2023-01-25T23:01:47.000Z",
  "pin": {
    "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
    "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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

  🟢 Could obtain requestid from new pin (Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0Mg) (success)

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
{"cid":"bafkreidxfhhhxov6lxqyue6qxeklo5wuzqejoubhj5rvkrbfabsahx5vqa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:46 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=dzQgLzyhvwYPeQrjL2M%2BvHLTVyLbOT1iCDyiFDOd%2FuEiigl%2BoYwcmUEkFZJpFarYBYpLfc%2BIx2OBjXfUmjPwZ7Fj7Ndg2a8p%2FeSZMFj6V%2FvOxnnPWv32xSXnhQhz6MnvXyq5F5CFqmk6uMfySm8BQQiftIyXzbIAihyqjrh5%2FxBLCuXx8z4UCwzwq%2BZ3iZQyUnA7HrH4zqYpSBPMWkbnJwUiVC%2Fghd4l%2BNjohB8%3D--smIk%2F3l5bN2j%2BxiY--GX5100O7f35IrugpBueiLg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:46 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6f56ba44-32f0-4817-a286-e5a45f219421",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0Mg",
  "status": "queued",
  "created": "2023-01-25T18:01:46.000-05:00",
  "pin": {
    "cid": "bafkreidxfhhhxov6lxqyue6qxeklo5wuzqejoubhj5rvkrbfabsahx5vqa",
    "name": "bafkreidxfhhhxov6lxqyue6qxeklo5wuzqejoubhj5rvkrbfabsahx5vqa",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0Mg",
  "status": "queued",
  "created": "2023-01-25T18:01:46.000-05:00",
  "pin": {
    "cid": "bafkreidxfhhhxov6lxqyue6qxeklo5wuzqejoubhj5rvkrbfabsahx5vqa",
    "name": "bafkreidxfhhhxov6lxqyue6qxeklo5wuzqejoubhj5rvkrbfabsahx5vqa",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0Mg",
  "status": "queued",
  "created": "2023-01-25T23:01:46.000Z",
  "pin": {
    "cid": "bafkreidxfhhhxov6lxqyue6qxeklo5wuzqejoubhj5rvkrbfabsahx5vqa",
    "name": "bafkreidxfhhhxov6lxqyue6qxeklo5wuzqejoubhj5rvkrbfabsahx5vqa",
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
## Can retrieve pin with name 'adb94451-d9c0-4000-b0f2-5b3ed9857c33' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=adb94451-d9c0-4000-b0f2-5b3ed9857c33&match=exact
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
  "date": "Wed, 25 Jan 2023 23:01:50 GMT",
  "etag": "W/\"324e531ba6f974964e000a0830c6054f\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ab0d1ccd-7488-4470-948a-434b8d0082bd",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
## Can retrieve pin with name 'ADB94451-D9C0-4000-B0F2-5B3ED9857C33' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=ADB94451-D9C0-4000-B0F2-5B3ED9857C33&match=iexact
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
  "date": "Wed, 25 Jan 2023 23:01:51 GMT",
  "etag": "W/\"324e531ba6f974964e000a0830c6054f\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "457496a4-c8ed-4623-a442-0e26c525e08d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
## Can retrieve pin with name 'd9c0-4000-b0f2-5b3' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=d9c0-4000-b0f2-5b3&match=partial
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
  "date": "Wed, 25 Jan 2023 23:01:52 GMT",
  "etag": "W/\"324e531ba6f974964e000a0830c6054f\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9400c6ac-34a3-4f90-b8ac-f1d712586cf1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
## Can retrieve pin with name 'D9C0-4000-B0F2-5B3' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=D9C0-4000-B0F2-5B3&match=ipartial
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
  "date": "Wed, 25 Jan 2023 23:01:53 GMT",
  "etag": "W/\"324e531ba6f974964e000a0830c6054f\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "02959c5c-ad4e-4fbf-b713-ca3d4c9c0b4b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
## Can create a pin with name='adb94451-d9c0-4000-b0f2-5b3ed9857c33' - 🟢 SUCCESS

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
{"cid":"bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra","name":"adb94451-d9c0-4000-b0f2-5b3ed9857c33","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:49 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=nFqqStyWM7ZDamLBPjVSZfRCCUbEl16rkMEho1CumVY29nsAYoPwY7a32OfMWM%2BvfzqQBlFuXBIMimdLucwHcRT8ZjZm2PI2%2B0TiovBWrVP%2FJi0KrOorifWenw2t7G2yh%2BEIOYYSBk%2BmJfl%2Fm8ISLKUClr4EZHVjFZcbkOnHIQShzYnI6xX1pFj6jMyw2E5MaRTm53xh6BCOwniqxF%2BG9oGtJWrAHjdjwDBsxGg%3D--YzveXXrj9NYUGucv--1I301tYSacKYndpU7aaxdA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:49 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f72a27f8-1e26-424d-a797-4ea272eae5ea",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
  "status": "queued",
  "created": "2023-01-25T18:01:49.000-05:00",
  "pin": {
    "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
    "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
  "status": "queued",
  "created": "2023-01-25T18:01:49.000-05:00",
  "pin": {
    "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
    "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
  "status": "queued",
  "created": "2023-01-25T23:01:49.000Z",
  "pin": {
    "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
    "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
## Can create new pin for testing pagination cid='bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4' - 🟢 SUCCESS

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
{"cid":"bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:55 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=5E%2Fy0Y85s4u47kgMDAdzZR%2Bx92pYjBypXx5PjeMSmCRIqitqcsyaysulyfjnQj%2FeAfu1JvNBR%2F9h%2Bvg%2B68NI4HJKuBvIBMGgJVeJAcOup5m8XeGweKDAkpOvd1Uc6zKRE2%2BQIlSjl9yo7wdN0fRG7g11zqiQTPOiYIk4OZQAJm3EBFg%2BvM4jaqCXK678gGth409ucu1hZeaTLZZW8MGXVgovxNfBvg0tdw95%2Fkg%3D--tCM3qEKEESKJ8HPh--xjg1VfYMUYo0W1dhrvNSDQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:55 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e16f4b49-7715-4922-981f-68e4d8224997",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw",
  "status": "queued",
  "created": "2023-01-25T18:01:55.000-05:00",
  "pin": {
    "cid": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
    "name": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw",
  "status": "queued",
  "created": "2023-01-25T18:01:55.000-05:00",
  "pin": {
    "cid": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
    "name": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw",
  "status": "queued",
  "created": "2023-01-25T23:01:55.000Z",
  "pin": {
    "cid": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
    "name": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
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
## Can create new pin for testing pagination cid='bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq' - 🟢 SUCCESS

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
{"cid":"bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:55 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=c89dyrypthe8leXjYhZycr8cUuG7pouufmZOSnl%2BKGVNF%2BusQJXp9bFKoSCeVKvRdSKtW7AIrX4GcluzWufqrL2HHeBoDXulu3quNBpmuqBQrHCsypE03DVL3UTNIyXwyxNiQZwA%2Fz9NadOxXdLJixoDPF%2B3eDr19T1gdoiNbGlx%2F2ZXGQVLbrnRQAzKERqlG8mAWzeNULJ8OZM5EBeYOx9o9fT%2BeVfR4EgIm5Y%3D--BMOYz3ah5bOlJ60x--2PKAie3yYjQt5Oq%2Bp4ScLg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:55 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "20f6fa92-e159-4e11-8c14-9adc62411f5b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ",
  "status": "queued",
  "created": "2023-01-25T18:01:55.000-05:00",
  "pin": {
    "cid": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
    "name": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ",
  "status": "queued",
  "created": "2023-01-25T18:01:55.000-05:00",
  "pin": {
    "cid": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
    "name": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ",
  "status": "queued",
  "created": "2023-01-25T23:01:55.000Z",
  "pin": {
    "cid": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
    "name": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
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
## Can create new pin for testing pagination cid='bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq' - 🟢 SUCCESS

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
{"cid":"bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:56 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=d7xUkeoQARGkUe0fBksUHJsjJNmnhF63RSeGsoxZ1Seej6BypPGHTd6cqu8P0gXQAHdG5JcQz0tfcaQLB%2BgxfCGArwFVBlr3yoguT26M%2BnMp9Jod3oDWFVp8v1tdUQFBNBZ8fR7pkHmqaSgJWndjYAk2RRoy4Xs56t2P1CjrG3qUhdsS%2Fl0%2Fiy5VXEpJD6ox%2BtiyIxHKq%2BONc8xyqySatnImPO2fpF9tRGbqTqo%3D--7UkCVOA6mKFYfuK1--xWAChTVWy8uYHwFWpChWJA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:56 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "88ed2db8-1314-4b0c-8b29-c8ebfd024cda",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng",
  "status": "queued",
  "created": "2023-01-25T18:01:56.000-05:00",
  "pin": {
    "cid": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
    "name": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng",
  "status": "queued",
  "created": "2023-01-25T18:01:56.000-05:00",
  "pin": {
    "cid": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
    "name": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng",
  "status": "queued",
  "created": "2023-01-25T23:01:56.000Z",
  "pin": {
    "cid": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
    "name": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
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
## Can create new pin for testing pagination cid='bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4' - 🟢 SUCCESS

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
{"cid":"bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:58 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=lCtNtrBs3rX1DeK9ovcJpBMVNtuXy0Bc4emWuYDZpC1ZG7ppMobmLqvgwJZUtMkWl4PrRdd4J%2B9%2BwlqFLMeyJgNM18bmQbuxxzxyPEi96hAW2FH2tZMin%2F6uyMGplUWpMjp5DtJRLPxrsM6J6uEH5AMnns9YTDV6c%2FAP7H514vat83zUtpF0dFWybefj2UJBE0XvOAB7YRMUIj2w7QrbNcNu4Mb4UrT96BhwTvA%3D--qi2M1HtQugN%2BC0cB--xT5lLzup40PlpNhffRNvaA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:57 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ee372c3a-7ffb-4daf-862a-1553de9dc3ea",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA",
  "status": "queued",
  "created": "2023-01-25T18:01:57.000-05:00",
  "pin": {
    "cid": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
    "name": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA",
  "status": "queued",
  "created": "2023-01-25T18:01:57.000-05:00",
  "pin": {
    "cid": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
    "name": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA",
  "status": "queued",
  "created": "2023-01-25T23:01:57.000Z",
  "pin": {
    "cid": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
    "name": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
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
## Can create new pin for testing pagination cid='bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe' - 🟢 SUCCESS

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
{"cid":"bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:01:58 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=g7h%2FDoXJDQs7MoSPTQibM5qsIcfH9f9bOAocGr3%2BmmpwIBH8r2O7N4RWebpICLnlnvq1kqlLE7np7uydEXYS1WuDIUlWkp%2BUBHdQzTS6Ku8IyemNdbhiTR3Dyr4xkJHvC%2F8kDl6KkZGLDD0qAFAfbUJ%2FKyuYb%2FVzURtU2bmU%2F7xZDpplZ27SUQmB3W2Jlmvo3bsi4%2BuFRXZdFHumNRvspBYki7IszqRtgnawHLE%3D--CByoFvPk7ARvzGtD--89SZpxuxT8Cl%2FTF%2FRC3ooA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:01:58 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fad21d49-4762-4ff0-b1fc-cd615410bfb5",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA",
  "status": "queued",
  "created": "2023-01-25T18:01:58.000-05:00",
  "pin": {
    "cid": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
    "name": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA",
  "status": "queued",
  "created": "2023-01-25T18:01:58.000-05:00",
  "pin": {
    "cid": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
    "name": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA",
  "status": "queued",
  "created": "2023-01-25T23:01:58.000Z",
  "pin": {
    "cid": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
    "name": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
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
## Can create new pin for testing pagination cid='bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom' - 🟢 SUCCESS

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
{"cid":"bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:02:00 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=AWixf%2FdrbluHcLlQ1acExHuHazgn0oUk6guTXkZv3QWn9BkYGuFjpbFwn5AuEPKni2zmMoIo3o1yNG9RT%2BsLP6irH3uE%2BJ3iA%2FwcKpCq1DVy7AHDjvYQod69akbvhKL5XMdopYJAJYT7OjdCJopgoVesKGYpMgPnodW1Wu4j4%2B0eO9JYEfXpIm1hvC0F9yt%2Bndn%2F9X1tnPEfwlfebeiQm80nEzuE3PINvEltpDo%3D--QOhfByRr9nGk4jBs--fkQmsmsH7lz8h8LvdDUt7Q%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:00 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "322faca6-5ecc-48fd-b08a-bf475cf147bb",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA",
  "status": "queued",
  "created": "2023-01-25T18:02:00.000-05:00",
  "pin": {
    "cid": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
    "name": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA",
  "status": "queued",
  "created": "2023-01-25T18:02:00.000-05:00",
  "pin": {
    "cid": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
    "name": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA",
  "status": "queued",
  "created": "2023-01-25T23:02:00.000Z",
  "pin": {
    "cid": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
    "name": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
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
## Can create new pin for testing pagination cid='bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie' - 🟢 SUCCESS

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
{"cid":"bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:02:01 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=1eVwndXGVSpvO3MRFhZBJbHxtXlD2UKDlnHzmbhmxK3BrLy2zrQLQcyEbzPkjPXiO5EyMfengI4WnHm1YawgUKvxcEjFBakeEsqWYRGS%2BqyD13yamwIODGLWWSKESCb5GqIGwP0fCKBPRzu2I10elQVRm%2FzrudfFSZ9kJ23y2g80Q6GeLl7EZCkYR8Hlz%2BC4W5CJUi8l9ojtBfdGXrWmGSzOX3u81LeK4Jc0S9w%3D--LhWOqr%2B7QDZ2T6JH--OlLK%2BmAKlSxc6xlHfFKcig%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:01 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "14b8b3bb-d42f-40ff-ad50-081fc55772e7",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA",
  "status": "queued",
  "created": "2023-01-25T18:02:00.000-05:00",
  "pin": {
    "cid": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
    "name": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA",
  "status": "queued",
  "created": "2023-01-25T18:02:00.000-05:00",
  "pin": {
    "cid": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
    "name": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA",
  "status": "queued",
  "created": "2023-01-25T23:02:00.000Z",
  "pin": {
    "cid": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
    "name": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
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
## Can create new pin for testing pagination cid='bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u' - 🟢 SUCCESS

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
{"cid":"bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:02:01 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=F0Utz8dIgSuPatxkYJo%2Fm6UGVrva2b9eM4nl6%2F2yZNqNu25LuRfM3ZNGvhnIqh9a%2BzEtOlvCxcdcz6m4LwlEP3VoqiXxA4n45twNdzD%2F4KpmIWUR4bk%2FMW%2BuR3M28uCMrzUsPtqsI%2BQ7EHwnCDCEcKT60v7yaULRShkTx61054OI41Zhvqq2%2FwR%2FJB8KpxILpUwZvdWYNMWzCL3HIRsWrAgMPCIVvMjzT7cRuec%3D--BlhUJhgU5iYl3RYT--Smpfj%2Fn2Nx9vdTvGy1lj4Q%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:01 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "675f4c08-26d4-475f-8b8d-fc28eff8e44f",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw",
  "status": "queued",
  "created": "2023-01-25T18:02:01.000-05:00",
  "pin": {
    "cid": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
    "name": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw",
  "status": "queued",
  "created": "2023-01-25T18:02:01.000-05:00",
  "pin": {
    "cid": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
    "name": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw",
  "status": "queued",
  "created": "2023-01-25T23:02:01.000Z",
  "pin": {
    "cid": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
    "name": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
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
## Can create new pin for testing pagination cid='bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy' - 🟢 SUCCESS

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
{"cid":"bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:02:02 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=uH%2F9wOrI0Ul%2FM1jjl26rwsT9EffhO7%2FKmEvEjp1hp38Xrx3cljYHLHYYUBDOVr4QAR7XNc9fDnt1TGfRhsMeX%2Bs7WMlWAOo2MRGI%2BORzNNbmaVPoc%2BbdLa%2BDImWoiz4Fn9%2FJTKUlqy2TsVowQafwI%2BsC7oRNCVgdz4CtvGGdYBjLnKAezEgBfUrkPDc9VSYUtimt6VNB0mYfZobIz6f%2F5C5ZxqrjFcCVH9PMmvE%3D--kTDNj4dKXCdx%2FhYz--g8b%2BjsnEt5JSB74DfXRHAQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:02 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cd0c78e4-7bea-4c81-98a4-83d2ef7e302e",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg",
  "status": "queued",
  "created": "2023-01-25T18:02:02.000-05:00",
  "pin": {
    "cid": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
    "name": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg",
  "status": "queued",
  "created": "2023-01-25T18:02:02.000-05:00",
  "pin": {
    "cid": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
    "name": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg",
  "status": "queued",
  "created": "2023-01-25T23:02:02.000Z",
  "pin": {
    "cid": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
    "name": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
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
## Can create new pin for testing pagination cid='bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q' - 🟢 SUCCESS

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
{"cid":"bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 25 Jan 2023 23:02:03 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=BNLckHXWeoJ59jHlwMN7oFKADNeGWv3cFLbvvskHmxi2ld9phjateZBvpS5XdJdGlFDFQd5WZ3F1q2wKz9uwYVvFl9gudrde48vIAaGvHGwghSNn8l0gJAAcN2vg8U3Fn%2F6dpIbVQPCFRKjxlYhSpXoRE9Po5gcyElILHs38yoqkT8RrqT%2F9uwFN3az23NZtyBqqV7Eeylwn87nAlddpReaxrd0ntxaHfyEcd0E%3D--LYKr3jxv4fboEw6N--KJZNp27bjwuoW7%2FJUmbfXQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:03 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cc4b6888-0e3e-426a-8b16-72dbf39c9b8c",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw",
  "status": "queued",
  "created": "2023-01-25T18:02:03.000-05:00",
  "pin": {
    "cid": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
    "name": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw",
  "status": "queued",
  "created": "2023-01-25T18:02:03.000-05:00",
  "pin": {
    "cid": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
    "name": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw",
  "status": "queued",
  "created": "2023-01-25T23:02:03.000Z",
  "pin": {
    "cid": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
    "name": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
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
  "date": "Wed, 25 Jan 2023 23:02:05 GMT",
  "etag": "W/\"a54a843b7a6048d87346bfcc292e534a\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7bb59590-9bca-4d83-acb2-2d94cb86a5f5",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw",
      "status": "pinning",
      "created": "2023-01-25T18:02:03.000-05:00",
      "pin": {
        "cid": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
        "name": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg",
      "status": "pinning",
      "created": "2023-01-25T18:02:02.000-05:00",
      "pin": {
        "cid": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
        "name": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw",
      "status": "pinning",
      "created": "2023-01-25T18:02:01.000-05:00",
      "pin": {
        "cid": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
        "name": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA",
      "status": "pinning",
      "created": "2023-01-25T18:02:00.000-05:00",
      "pin": {
        "cid": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
        "name": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA",
      "status": "pinning",
      "created": "2023-01-25T18:02:00.000-05:00",
      "pin": {
        "cid": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
        "name": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA",
      "status": "pinning",
      "created": "2023-01-25T18:01:58.000-05:00",
      "pin": {
        "cid": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
        "name": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:57.000-05:00",
      "pin": {
        "cid": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
        "name": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng",
      "status": "pinning",
      "created": "2023-01-25T18:01:56.000-05:00",
      "pin": {
        "cid": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
        "name": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:55.000-05:00",
      "pin": {
        "cid": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
        "name": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ",
      "status": "pinning",
      "created": "2023-01-25T18:01:55.000-05:00",
      "pin": {
        "cid": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
        "name": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw",
      "status": "pinning",
      "created": "2023-01-25T18:02:03.000-05:00",
      "pin": {
        "cid": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
        "name": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg",
      "status": "pinning",
      "created": "2023-01-25T18:02:02.000-05:00",
      "pin": {
        "cid": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
        "name": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw",
      "status": "pinning",
      "created": "2023-01-25T18:02:01.000-05:00",
      "pin": {
        "cid": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
        "name": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA",
      "status": "pinning",
      "created": "2023-01-25T18:02:00.000-05:00",
      "pin": {
        "cid": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
        "name": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA",
      "status": "pinning",
      "created": "2023-01-25T18:02:00.000-05:00",
      "pin": {
        "cid": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
        "name": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA",
      "status": "pinning",
      "created": "2023-01-25T18:01:58.000-05:00",
      "pin": {
        "cid": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
        "name": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:57.000-05:00",
      "pin": {
        "cid": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
        "name": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng",
      "status": "pinning",
      "created": "2023-01-25T18:01:56.000-05:00",
      "pin": {
        "cid": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
        "name": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:55.000-05:00",
      "pin": {
        "cid": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
        "name": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ",
      "status": "pinning",
      "created": "2023-01-25T18:01:55.000-05:00",
      "pin": {
        "cid": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
        "name": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-01-25T23%3A01%3A55.000Z
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
  "date": "Wed, 25 Jan 2023 23:02:05 GMT",
  "etag": "W/\"777bbeed413c727a959ca8971de1b33e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d7c751a7-98dc-4bc6-9864-27d1eadda8b3",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
      "status": "pinning",
      "created": "2023-01-25T18:01:47.000-05:00",
      "pin": {
        "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
        "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:43.000-05:00",
      "pin": {
        "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
        "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
      "status": "pinning",
      "created": "2023-01-25T18:01:47.000-05:00",
      "pin": {
        "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
        "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:43.000-05:00",
      "pin": {
        "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
        "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
  "date": "Wed, 25 Jan 2023 23:01:54 GMT",
  "etag": "W/\"777bbeed413c727a959ca8971de1b33e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f10e903a-34fb-4f8c-8812-cdf7253e18c0",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
      "status": "pinning",
      "created": "2023-01-25T18:01:47.000-05:00",
      "pin": {
        "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
        "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:43.000-05:00",
      "pin": {
        "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
        "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
      "status": "pinning",
      "created": "2023-01-25T18:01:47.000-05:00",
      "pin": {
        "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
        "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:43.000-05:00",
      "pin": {
        "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
        "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw
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
  "date": "Wed, 25 Jan 2023 23:02:07 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=LXfYMFK4G3rAMnqSAChQs599HVVoWZtRiL7H4tN88ErSdo%2FkpELhROWkl8TujYNnBYPo91%2FQb8fq1jmqMe3xFEvlOq39Uioodxy9WNm4f4xCGiyYXRKvhimMm8GuzLQYS6aqrfPhu21AYw0KVxf%2FtBGvnsAtyxj7nbILKxw5xZss6eMlP4P8UhSQW%2FHBp4GZpJMeXEJof87EAwK2hR5P5R5wPO2DI8QIcKXEdD0%3D--6GSDMmMNAC2SSBPL--OoP7P29zDs3PCiMMYiq9Hw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:07 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fdd28b58-f2dc-4943-884b-a954ec5be52f",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg
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
  "date": "Wed, 25 Jan 2023 23:02:08 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=ZnoxKVw4jbYJX3akSkcRS23WXwZCftcxOgolYcrPVvdZrYSC0Vr%2F0H0%2BT3NXePJRQIENQhMMQ16PcvOCZT2AfzpjfFaBhB0UsSlNAAJnOmd5CqfTXV7QBkO99dauJDfMu%2FErEIR1gdUOajEmQVazLh4CyfVYKK6Ct6t305BU15Tf4OFLqL3AZ2Ys2hmw%2FdqJ2BUwHO8xDELr0H7RLCygs4%2F%2B2hfPfqS1ECZp91I%3D--4c369OPMcXzjD321--B%2B2TT3IfCI1whN%2BSh7AMpQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:08 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8261cbca-97d6-4132-82de-ab760e052025",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw
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
  "date": "Wed, 25 Jan 2023 23:02:09 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Af2hl8zd4Arsjnl32yUYbj28NBdfBZvJQ22E2AgqSyKjHfvR6wBtfD2P%2FuiM521TTHot2MF%2BpBOrwyQzTcnSME%2FKgKWN2h2BAtIGElVd8TPdhJhukRZ46FtEwIcLPlxJ9xGaIyml%2FpvipBuED5WM8IkIgIacaMt1BOwmsC9fF3yZLgxUm%2BbtcbFzeiCz%2FoE16KS94YdH1nBS0vIq%2B5k2a0H6dH%2F4IQY95zSEEas%3D--cKUApqOUUyXNfiSu--ZE%2FIYr7aD8O5LaaIHqLOBA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:09 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "0440b5d5-da3b-4451-bfb3-bcbdb63ee868",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA
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
  "date": "Wed, 25 Jan 2023 23:02:10 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=4vHz%2F3JktRGx5b2xliPrRliQskdYFcPPBXnIPUCMm%2FhgxbhGKv5yZmTTJoPnNgJHpwdV4%2FFAAo6%2Bci11shmGE980A01jPNd8h39T50SaCGcmEQRk0qzu9RMF%2FVM3n4oChdMMDND%2F51FRZ5OIecfULOHNXDmwuld8S6vJQ4meCzPYUo26rvG%2B3FrVeMuTsppqzQRNd%2B%2FI76OOvBsPpFe4YVEiigATNeiHoLZhs%2Bo%3D--jcR6aRrX25GD%2FkGG--VNEyFczs6EswJQy%2BAWgTqQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:10 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f0dbd546-1de5-42a1-ac30-f43e9f354e4b",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA
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
  "date": "Wed, 25 Jan 2023 23:02:11 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=h6wY6vTcBk5UhhsI05OsiHbWAI8LNzLFQsnEU3wzHmlxQ5sWDNAb7i0QBFJWvSuTe5yhiu%2F74XcTdH8osrTPIS16R4RdgmWtmfHcBLGbiUgYLNh3YxMZzFQuw126FKx4AXvjgeSbVVDWpx7SmtNFq5VWW0lcYRGb0znyYge2XZ4htKtnYhTzErICDF%2BWq6Yi1D%2BMaDN%2B2IxZtz5X33funIB9iTIUUBdgEMtWcrY%3D--y6BojyTxlr3FJ65s--Eov2dcqyhe%2B0l209OipYaQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:11 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "65460e73-a8c9-4040-86e9-94aa8bd0a12e",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA
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
  "date": "Wed, 25 Jan 2023 23:02:12 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=5jQCZKDmsD%2FHDshmSDLQ%2Bj92nBtIzeIDyrmZwTM75zXsXqJENWys30gFLEp01%2BtoLS%2B4z2hlePBFom9uvgjd6XDZE1s8LxZaakW4MAhbbreJbHpKagtIIa6Zj2X8YZYfcRsA1q5Sk2dtUVfkfwXl9%2ByNjFbxSUwJPu6P8E6QayWb%2Fd09h%2BWvFpskTfnlVWFOPXjNsUx9rWOvKVX0og4Rs6eqd8Yujob3RmmiJ6Y%3D--L0i9YeAsUrDz6BFX--74eIMGzb%2FJ7tyEugxXY%2Brw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:12 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ff2f5986-ab25-4128-b6e3-b4aa38fe332e",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA
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
  "date": "Wed, 25 Jan 2023 23:02:13 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=xukcB4KWmP%2FVwMHRdOaA7hVCKXcnP2qmJu6q%2BAarPaUVYSDlUy1Nu20PbevygLy%2BfjhdgyxRPd0YVKvsksp7E20MiJ1BPGNqBZ0Lmec22Cb9Svqx87Uv70RLdMdIowKGCV%2FXblwbi%2BYjKq69JWt2WF0grI2UqG8eoMnQoNI2DnezPw9UvTN%2FSKErUqYQsFSJR2YXbUrPQ3x9t9mkK6U1xITHNnst9J1COoAvGNo%3D--%2BD66spe%2BZuBhhZr4--pPHM%2BDC%2FFwp64swGGojzUA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:13 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "82cafa85-d2c7-4bc3-9da5-f7b9a27a9790",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng
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
  "date": "Wed, 25 Jan 2023 23:02:14 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=GaH5yeUX4e3dLUCaAXBnPdBB2oTDYve1pjYFh7Y%2BcRbv3CN6f0QixeQngrAy%2F%2FJS%2BuVWMiC7QcrpIdKxmuY%2F3pIsnvJsheEm%2BOsC8fmGmyxr3snEpuF%2FUDkNjAnR5wyNvUWR2WHO%2Bp5syHmKZoJKPsr0DKYWcSciQxtFTMqaHRLBqaF7d19bakN4X9mf4oI0%2Fxt5e6%2Fnc4LEoa5GToDgy0fR%2BkhB0Q1hnAcahfU%3D--9yCXZ2E2hc%2BiUME0--41cRe0pzeiHtr5ACD90xjA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:14 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c2a6361e-2451-4c18-ab47-04d7f0ea1a25",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw
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
  "date": "Wed, 25 Jan 2023 23:02:15 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=3HrL3ZznWt05Xhs469mvkNMnhCAYX8fLofnyGM3pg4xLUOeqPvuycLUwbiFjMIS7zVVCOXO7HoXF0h5DU508wp0WO8c9pyK6iNAbruD7hrs5hXjkW95ssvTY8pGzbXVTiCdjHQUk%2B4wMaEIlW3HaoTzFVDiU815kmM7GT1ZC8cQ9tfjA%2FTHFcaeXp13Gu1dnXB43rQ1RGv8oWeIRqD6GawP%2FQxamWOzZUWtW%2BGU%3D--NGTV35u6cJ9apTS6--oixMk0hDjcgbzUlvoDig%2BA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:15 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "1d3257f4-fb35-481e-b5e0-5e52c2f2170b",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ
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
  "date": "Wed, 25 Jan 2023 23:02:16 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=AQRBtm6jbrJbp2LF9R%2BNFyX%2BdQLZclkVvxE4UIWRcvZ5NkFf9kdBN6qLhPblwNgqfhKuPSCg7d2xDQwpOutiBKLMNW5kIckg6ib%2FvnRaybwW8nLouc71yfa%2FRnCKpF9457EUdwAbyr7FIB6W%2FK2JmQMKDun0mik%2FKoIcp3IxcOgIAOWfvtwUnR8RaCtnR%2B4g%2BIumUyTSRC90n9j3wJliwoD9l2qHQQgbXRrGPy4%3D--GAyM%2Bi9mVohn358e--nqfVUQxji3TIglgubojllw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:16 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "336551c7-275e-4acb-a0b0-c522199c9c57",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw
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
  "date": "Wed, 25 Jan 2023 23:02:17 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Xjx2sV5Jkqsk4p8gqlEw%2BaBaqej61jvNdj2QvbG%2B1j3A0QQe7TMNC%2F5h10WkInwS%2B2SS%2FHJiGGSVuj9QNWfIu2ex5HqTRHQYtmQSP1mb5K%2BP6LuWKfEXR1bIMO%2FLCoUyS1GSBL0zVta60xI6WMNsstdJbS3ZFtaTJXgwELRJCR6DlsnTESxuwfNTUGGS5a5F19HM1ROaH6MUDbkFmdE5gY%2F54CBG7LTGhlvZsOw%3D--XkoUnEpQtTO%2F1lfd--QazufU1JXL8t62MZBDfTSw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:17 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5948b0f5-4324-4a00-b91e-1d512d843580",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA
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
  "date": "Wed, 25 Jan 2023 23:02:18 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=NgKJrnhQIDjD8m3OH0AF993aklpBMfLjAlZiRmhBIW9HyWX1is9UCMLtFMkU7hxi%2FFlp7%2F24tv%2FMao5CKdj2oCImyiR1fTOyPtjEDaRgXjSHCbGK5tb71cALgRxwZznfYroXSTpwJHwvZUZu4XePMkqFaWRa1p%2Fl0Phk2cTo15f%2FWhMS4h1xfid1PK1fGcTGe7Z06nlB5%2FTIeet02SPwLL%2B0RItp2MV0aohQdw4%3D--WPqHN5B3fUHx5%2FiH--guEpApiC4864AbhsyN%2BEsg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:18 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7f29c6a0-1875-498e-be19-8a55ee0b7f99",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA
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
  "date": "Wed, 25 Jan 2023 23:02:19 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=iCYgJRL9A%2FP8MazCd5%2BPLNbrzSdM1762BhqF1PpgGefQC0EP15Nc6J%2BUrYDfIkGHw22JVxhwMXA6Us2wnmYwwdUFfP9ewTnyB6CXsq%2FUest%2Bbjo20ancR42P5cnEN14kcdQ2p8aJJ3VBlHesAXDtBtyAuk1HTOPzoLsZgIYVAfmn6N9bj8TWO3DRjIrBMKLGdM1SAuPKKMG4cUg2sMgzLY4M6s6W7whM7RqjaTA%3D--tTrmkrKJjb5M3TPw--Eu1ua5uevOzwUJ%2BqWgfGNA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 08 Feb 2023 23:02:19 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2dda71be-6910-47d5-abfb-944c635eb353",
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
  "date": "Wed, 25 Jan 2023 23:02:20 GMT",
  "etag": "W/\"3438c5b0da51b073b4fa87b68d35e3b9\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "56feb5e1-fa29-47b4-b0c3-e588995dc750",
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
## Get all Pins created before 'Wed Jan 25 2023 23:01:55 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (3/3 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)


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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

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
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-01-25T23%3A01%3A55.000Z
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
  "date": "Wed, 25 Jan 2023 23:02:17 GMT",
  "etag": "W/\"777bbeed413c727a959ca8971de1b33e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "dee2ddf6-f953-4ba6-b304-041cafad1ec2",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
      "status": "pinning",
      "created": "2023-01-25T18:01:47.000-05:00",
      "pin": {
        "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
        "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:43.000-05:00",
      "pin": {
        "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
        "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM1Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:49.000-05:00",
      "pin": {
        "cid": "bafkreignmo27ldfepzoexmtkadqcrba4fyja6cpytmsaavj4nxz6pcjnra",
        "name": "adb94451-d9c0-4000-b0f2-5b3ed9857c33",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM0OA",
      "status": "pinning",
      "created": "2023-01-25T18:01:47.000-05:00",
      "pin": {
        "cid": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
        "name": "bafkreiabtq4qjgkiy64a7ye53azsgnv4myceohcyrokacvvjmj32neglqu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTMzMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:43.000-05:00",
      "pin": {
        "cid": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
        "name": "bafkreihiblit5twsyygebx4bdqvr53eu4gpnblmg4s3nyzjahixaf54vui",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
  "date": "Wed, 25 Jan 2023 23:02:20 GMT",
  "etag": "W/\"833f11c00834a861142f4dadb5f92cdb\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "dd4c79ce-61f2-4498-a1a8-3659c3fff1b8",
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:22:53.000-04:00",
      "pin": {
        "cid": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "name": "bafkreihmvapoun2haudvjanbgsmi5kbhe3s66xkkmxyrls6l7duhpzyyla",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
      "status": "failed",
      "created": "2022-08-30T13:21:27.000-04:00",
      "pin": {
        "cid": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "name": "bafkreibnneezm63hhqy2cdt7o47a4wmngyfrr77mjggckvugmrihsvnhzy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance",
          "failure_reason": "Exceeded Max Attempts (11)"
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "date": "Wed, 25 Jan 2023 23:02:06 GMT",
  "etag": "W/\"a54a843b7a6048d87346bfcc292e534a\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2df7a8f6-8488-4490-86b2-995784b6fcad",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw",
      "status": "pinning",
      "created": "2023-01-25T18:02:03.000-05:00",
      "pin": {
        "cid": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
        "name": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg",
      "status": "pinning",
      "created": "2023-01-25T18:02:02.000-05:00",
      "pin": {
        "cid": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
        "name": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw",
      "status": "pinning",
      "created": "2023-01-25T18:02:01.000-05:00",
      "pin": {
        "cid": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
        "name": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA",
      "status": "pinning",
      "created": "2023-01-25T18:02:00.000-05:00",
      "pin": {
        "cid": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
        "name": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA",
      "status": "pinning",
      "created": "2023-01-25T18:02:00.000-05:00",
      "pin": {
        "cid": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
        "name": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA",
      "status": "pinning",
      "created": "2023-01-25T18:01:58.000-05:00",
      "pin": {
        "cid": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
        "name": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:57.000-05:00",
      "pin": {
        "cid": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
        "name": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng",
      "status": "pinning",
      "created": "2023-01-25T18:01:56.000-05:00",
      "pin": {
        "cid": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
        "name": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:55.000-05:00",
      "pin": {
        "cid": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
        "name": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ",
      "status": "pinning",
      "created": "2023-01-25T18:01:55.000-05:00",
      "pin": {
        "cid": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
        "name": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyNw",
      "status": "pinning",
      "created": "2023-01-25T18:02:03.000-05:00",
      "pin": {
        "cid": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
        "name": "bafkreihvqdzkeatl5trz55fk5cmqxg5ijyhuwqpxnxgxirnsl4qwfgiy3q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQyMg",
      "status": "pinning",
      "created": "2023-01-25T18:02:02.000-05:00",
      "pin": {
        "cid": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
        "name": "bafkreifj2ayliuhxwyfpe5573wncjyjv5dy6f5ohikcyzyeqxw3wfe5vgy",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNw",
      "status": "pinning",
      "created": "2023-01-25T18:02:01.000-05:00",
      "pin": {
        "cid": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
        "name": "bafkreidybkt2miowkp7wacdsl4wganx5vhseohp5mimkf7mbsyuohjez5u",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwOA",
      "status": "pinning",
      "created": "2023-01-25T18:02:00.000-05:00",
      "pin": {
        "cid": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
        "name": "bafkreifbhbnltq2c2c4ui7drflcm2ff77g24dthwqcti7t3csdavy5zbom",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQxNA",
      "status": "pinning",
      "created": "2023-01-25T18:02:00.000-05:00",
      "pin": {
        "cid": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
        "name": "bafkreih7tvylnf2t565uy5urug4dmookcxvvl3dux4icagrmqyioowufie",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwNA",
      "status": "pinning",
      "created": "2023-01-25T18:01:58.000-05:00",
      "pin": {
        "cid": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
        "name": "bafkreidbx55m7hqyllnrql4wf2sn6brhx4d5axpzaz77hfldfvudelpyoe",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTQwMA",
      "status": "pinning",
      "created": "2023-01-25T18:01:57.000-05:00",
      "pin": {
        "cid": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
        "name": "bafkreiari6tcvk7dnn4vgdh7wv2ae5y6w6ib2noihkjol6g2oaieblbbz4",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5Ng",
      "status": "pinning",
      "created": "2023-01-25T18:01:56.000-05:00",
      "pin": {
        "cid": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
        "name": "bafkreihdarkvenyutytxjxn7mmdnzzq3v7ne33dck3wrm4r4lfgqgvkspq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM4Nw",
      "status": "pinning",
      "created": "2023-01-25T18:01:55.000-05:00",
      "pin": {
        "cid": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
        "name": "bafkreihtdclj47wuiityxztht2blvewggy3kfyu7ytddcyolwvv4rlxrg4",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTE4MjUzNTM5MQ",
      "status": "pinning",
      "created": "2023-01-25T18:01:55.000-05:00",
      "pin": {
        "cid": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
        "name": "bafkreidlwaa3z3s3safckbu7ogdj2jaqai43e66ny5hzkwcvpqduqlvcsq",
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
