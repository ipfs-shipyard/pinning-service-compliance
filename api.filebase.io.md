
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2022-09-02T11:48:44.249Z

Revision: [50879d2](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/50879d2)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (9/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq'](#pins-post-of-cid-bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='216339a9-e82e-4ba6-a3ba-f68ec831c119'](#can-create-a-pin-with-name216339a9-e82e-4ba6-a3ba-f68ec831c119----success)

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
  "date": "Fri, 02 Sep 2022 11:48:05 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a5afe16e-da32-4457-8a12-7f33e8218cde",
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
  "date": "Fri, 02 Sep 2022 11:48:06 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3d72f00b-d0e2-4cd6-831b-b5aad43bd842",
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
## Pins post of CID 'bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq' - 🟢 SUCCESS

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
{"cid":"bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:07 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=SRQ3aIHD%2B3aSlJYYTKb%2BSg20pzYoKEGd9RBksHwG0CPBB%2FRghUTEclFiGBkZtqgL1TOdGpAw4D%2B9QmE2WibdPteJcy1HSoWsn%2BJDUUkkF297Pps9AV5dzrUxjeh7aOQPost7gYFYQkvBlRVXtR%2FZWhHbrvaXJwepp7LTTQJGTaNaoED9XTUorJXFn5DgR4uyXombTONyfaWGCJ8Dn9u72ui7B46FgcWO7qh3J5Y%3D--vE7wrNRzDYqVK6qj--pXTsIXtzXoX2%2F%2Fuq%2FpdLHA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:07 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c6080ece-5b3e-4c6b-a1b0-41220cbf03e0",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
  "status": "queued",
  "created": "2022-09-02T07:48:07.000-04:00",
  "pin": {
    "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
    "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
  "status": "queued",
  "created": "2022-09-02T07:48:07.000-04:00",
  "pin": {
    "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
    "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
  "status": "queued",
  "created": "2022-09-02T11:48:07.000Z",
  "pin": {
    "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
    "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjc1
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
  "date": "Fri, 02 Sep 2022 11:48:09 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=PcnJpIxEq9cZrhWb9kxYg2KCyPSWQAuTK%2Bh1yaq7THg7taLKjYWI1hmGs6sEC24hqpNHKnhfxVHGMInMAPM0K7%2FE%2FpgsNybERASHLKWXPp08%2Bj44nyUTwRWn7LAdXKinVpBXB7NrfzKg%2B%2BiL9oMxq07FWib%2FL0XiXbMBtJT4j7Cj4yhCnPWYdc%2FB50hPExX3dAVY00616z4y3fy%2FqyyXAFAhkqPNtJxmJnFZXQE%3D--nLkfz1hS%2BVKZBJNs--YE6e7IaAtUvOyCqnu8hxVg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:09 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "997e3fb9-e485-4ac4-aea7-eb5c1d816523",
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
{"cid":"bafkreib4i44sdxfxapppkyb2p2updjt6s56txm546qnoe5um5ta7walxae","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:08 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Wo7ILo3z5H89iZC2RMvhDat8JZot%2F7jKR5kjm4egOaS48j4R3be8nkoZ8MCO3%2BSqPVjfALT93%2BLRyscuvSbTYRFdNaF90KY2Fb3PSYv9e64HURhPvuFxYJcjCkMtWNK5JuSH0kBX0JcggHjeCmqLJBZdLw%2BZL4eOdvrJYuJt25NYy4kZaUh2zBa%2Bn1M0jo1SMqbC%2B%2BC9WRLu9LljW3oMxBfvriwzpkCNregOxjA%3D--Tj9%2FViCH66%2FTgoQs--TTI5Ajiw8S5MFUqB0CD48A%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:08 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b136edb6-2653-4503-b88e-8484ce4c856d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjc1",
  "status": "queued",
  "created": "2022-09-02T07:48:08.000-04:00",
  "pin": {
    "cid": "bafkreib4i44sdxfxapppkyb2p2updjt6s56txm546qnoe5um5ta7walxae",
    "name": "bafkreib4i44sdxfxapppkyb2p2updjt6s56txm546qnoe5um5ta7walxae",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjc1",
  "status": "queued",
  "created": "2022-09-02T07:48:08.000-04:00",
  "pin": {
    "cid": "bafkreib4i44sdxfxapppkyb2p2updjt6s56txm546qnoe5um5ta7walxae",
    "name": "bafkreib4i44sdxfxapppkyb2p2updjt6s56txm546qnoe5um5ta7walxae",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjc1",
  "status": "queued",
  "created": "2022-09-02T11:48:08.000Z",
  "pin": {
    "cid": "bafkreib4i44sdxfxapppkyb2p2updjt6s56txm546qnoe5um5ta7walxae",
    "name": "bafkreib4i44sdxfxapppkyb2p2updjt6s56txm546qnoe5um5ta7walxae",
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
  "date": "Fri, 02 Sep 2022 11:48:09 GMT",
  "etag": "W/\"548d966475243d8326a38341da53c6c3\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "da2a7b06-d278-40d6-a619-fe63e27a20ff",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
      "status": "pinning",
      "created": "2022-09-02T07:48:07.000-04:00",
      "pin": {
        "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
        "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
      "status": "pinning",
      "created": "2022-09-02T07:48:07.000-04:00",
      "pin": {
        "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
        "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjg4
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
  "date": "Fri, 02 Sep 2022 11:48:12 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ca1fe736-cc80-4fe4-a3b8-0b4df13361fe",
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw
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
  "date": "Fri, 02 Sep 2022 11:48:13 GMT",
  "etag": "W/\"a5c2e7eb5b0c56b3c68eb68fff18d4d2\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b7d78195-a258-4320-ba55-7359b7b83772",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
  "status": "pinning",
  "created": "2022-09-02T07:48:11.000-04:00",
  "pin": {
    "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
    "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
  "status": "pinning",
  "created": "2022-09-02T07:48:11.000-04:00",
  "pin": {
    "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
    "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
  "status": "pinning",
  "created": "2022-09-02T11:48:11.000Z",
  "pin": {
    "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
    "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
## Pin's with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjg4' can have cid 'bafkreih73l32jzmvg6gck7n5z5nx3aqddrohjjf33rwx6ng6tawxnummny' replaced with 'bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q' - 🟢 SUCCESS

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
POST https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjg4
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
{"cid":"bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:11 GMT",
  "etag": "W/\"3e6ee8796d5a14f92b965faa5653c1c0\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=3mjZb7w3wQxa6JPa5MnV9B5RnSOp6s6HD8vnXFDE6DKde1xF1YqRjhwgm9%2FOJ17Jm1VJDXO4bWssW0zrFNlUalSTq2xx20t%2BMTPkV0t%2B6JQJv6V%2ByYNkNN3GYmwxehLWOzgBHA%2F8wmC4LuKz7pk03vFeNcUbD18cLXV%2FWe%2B1ic4WYp8syNDo8zQ6A4odS84PNx8DtxNS6aT9HGRjTcUeEpVIxH8FvCjGr3UaWB4%3D--5v5Knqhltztw3D2e--qO89qWVuHcXTKEHec85BSQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:11 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a6fad603-cf3b-44a5-bb99-01bbbf018bd9",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
  "status": "queued",
  "created": "2022-09-02T07:48:11.000-04:00",
  "pin": {
    "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
    "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
  "status": "queued",
  "created": "2022-09-02T07:48:11.000-04:00",
  "pin": {
    "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
    "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
  "status": "queued",
  "created": "2022-09-02T11:48:11.000Z",
  "pin": {
    "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
    "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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

  🟢 Could obtain requestid from new pin (Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjg4) (success)

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
{"cid":"bafkreih73l32jzmvg6gck7n5z5nx3aqddrohjjf33rwx6ng6tawxnummny","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:10 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=KwjADHaoINfN%2FvpsxserGy0hYA7PV5%2FdmR4Tcp%2F2Oyz8nezrA0yxgGWBvTvpaGXD9XOx18JJRvJdiRAayLRj2bXR2RkeXLgK3JA8kHAtXo8ulvLOf6VUdic6wZ45IogMUPpyRSQ75JTbkFuoHKPQqLct042E2Z%2Blw%2BHRDe4BjDWzSL9Iz16vKopai1b27AvQ0jO6EHRctNs4MSwSsZ1DcnCi7D3xK3OUTUmF%2BO0%3D--9R4A%2B2Ywi1efDcgm--F6vyIkzz4Wx5U8Fb3w89nA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:10 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a0441f1f-1744-4d73-b777-46dc6a756d96",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjg4",
  "status": "queued",
  "created": "2022-09-02T07:48:10.000-04:00",
  "pin": {
    "cid": "bafkreih73l32jzmvg6gck7n5z5nx3aqddrohjjf33rwx6ng6tawxnummny",
    "name": "bafkreih73l32jzmvg6gck7n5z5nx3aqddrohjjf33rwx6ng6tawxnummny",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjg4",
  "status": "queued",
  "created": "2022-09-02T07:48:10.000-04:00",
  "pin": {
    "cid": "bafkreih73l32jzmvg6gck7n5z5nx3aqddrohjjf33rwx6ng6tawxnummny",
    "name": "bafkreih73l32jzmvg6gck7n5z5nx3aqddrohjjf33rwx6ng6tawxnummny",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjg4",
  "status": "queued",
  "created": "2022-09-02T11:48:10.000Z",
  "pin": {
    "cid": "bafkreih73l32jzmvg6gck7n5z5nx3aqddrohjjf33rwx6ng6tawxnummny",
    "name": "bafkreih73l32jzmvg6gck7n5z5nx3aqddrohjjf33rwx6ng6tawxnummny",
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
## Can retrieve pin with name '216339a9-e82e-4ba6-a3ba-f68ec831c119' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=216339a9-e82e-4ba6-a3ba-f68ec831c119&match=exact
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
  "date": "Fri, 02 Sep 2022 11:48:15 GMT",
  "etag": "W/\"d02134395ab3e4bacdd2309eec3880e1\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "60431a5a-29d8-4568-9840-457eea732727",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
## Can retrieve pin with name '216339A9-E82E-4BA6-A3BA-F68EC831C119' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=216339A9-E82E-4BA6-A3BA-F68EC831C119&match=iexact
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
  "date": "Fri, 02 Sep 2022 11:48:16 GMT",
  "etag": "W/\"d02134395ab3e4bacdd2309eec3880e1\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "af561f28-3ea6-4289-bb93-40e0cc52fb2f",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
## Can retrieve pin with name 'e82e-4ba6-a3ba-f68' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=e82e-4ba6-a3ba-f68&match=partial
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
  "date": "Fri, 02 Sep 2022 11:48:17 GMT",
  "etag": "W/\"d02134395ab3e4bacdd2309eec3880e1\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6a132cd9-b7c4-4c67-89cc-acfcd6200c68",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
## Can retrieve pin with name 'E82E-4BA6-A3BA-F68' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=E82E-4BA6-A3BA-F68&match=ipartial
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
  "date": "Fri, 02 Sep 2022 11:48:18 GMT",
  "etag": "W/\"d02134395ab3e4bacdd2309eec3880e1\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3126f0df-a452-4b90-b11e-649e4e16183a",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
## Can create a pin with name='216339a9-e82e-4ba6-a3ba-f68ec831c119' - 🟢 SUCCESS

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
{"cid":"bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i","name":"216339a9-e82e-4ba6-a3ba-f68ec831c119","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:14 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=oQEjGIsVEXdMDcQBDwWC90nsjbsLCleQYvYBtzSGxR2llK4LrSxXv0FEm4fq2lD1FJOU5dUi6qN%2Bc0TIb0mO7rAGsN%2F87B0zMtKiehKR7MMBpRrUBqtc4Tqrdl5m9TeZ1NAMuVVH%2BTM5G9efaIwE2Kg%2B08ocuIS%2B2ciYb72zZcNuzFQEJd5PSE%2F%2B6b9iuAue5z2h2oEQa%2B0OPLU7m2tLXVonZPTqLG85iyfh2pE%3D--pXhDc1l%2Bpm8PLzxC--mHeM3ynyor%2FjZKm2gPJaBA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:14 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9d5e7345-6b7e-47da-b8c4-150731da55ab",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
  "status": "queued",
  "created": "2022-09-02T07:48:14.000-04:00",
  "pin": {
    "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
    "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
  "status": "queued",
  "created": "2022-09-02T07:48:14.000-04:00",
  "pin": {
    "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
    "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
  "status": "queued",
  "created": "2022-09-02T11:48:14.000Z",
  "pin": {
    "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
    "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
## Can create new pin for testing pagination cid='bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u' - 🟢 SUCCESS

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
{"cid":"bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:19 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=7h1OXnsT1bmzmWkQnHKNHFO1FP6MjD4s%2Be9LEcunLI1qAJbAQPnLQqMBTnoInOS0y0KsiWWfijxDisjEtfgzk33xzYHnBAj1XtKvwlo%2B3bGM5gI73k2bopt%2BsGKCzFmCkPIn0RnAtvRxgLg9xzcuRG%2FU51dLUBQ3a8grh3nkaR4nfvfHJgd1VR20897r5RQSIqrafL3R3RwPPsMBKc6rh4K0NskNKvQKrRvhhkQ%3D--kMrxNMUVcBU%2FlzV2--gT%2BGpE7%2B66gz1o9KXZ0FCA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:19 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7b5f86af-f8c5-4b80-82e9-f037fcceb0a6",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy",
  "status": "queued",
  "created": "2022-09-02T07:48:19.000-04:00",
  "pin": {
    "cid": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
    "name": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy",
  "status": "queued",
  "created": "2022-09-02T07:48:19.000-04:00",
  "pin": {
    "cid": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
    "name": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy",
  "status": "queued",
  "created": "2022-09-02T11:48:19.000Z",
  "pin": {
    "cid": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
    "name": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
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
## Can create new pin for testing pagination cid='bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy' - 🟢 SUCCESS

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
{"cid":"bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:19 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=ScvXJTcrM1h%2F2bpKDpfZtH0VyackBtcfZ2ZIQzp63WwcpR7VoXu1ak9FQxeaBSicsfIuQKC%2Ff9swno5APO3CptgxaaMueO8Tz3szhDURGk5%2F%2F8I7NKmtSa1FL%2BPh7w40lHx1snAbaGJbFVZlLY%2Bx3UaDRRrTSI0s8VSwI%2FxkvJGIwWNoUjc0x0nhD3%2BoX%2Bbqg8JD7Q7tCcodYGeJ51UElfBut89S8kxReZEcYmI%3D--VGGjOiXfrpDu5Aqi--BdfLWmtciH9e1xKjc5IlKA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:19 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8a51f4f8-8343-4497-8013-486a6b767af0",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1",
  "status": "queued",
  "created": "2022-09-02T07:48:19.000-04:00",
  "pin": {
    "cid": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
    "name": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1",
  "status": "queued",
  "created": "2022-09-02T07:48:19.000-04:00",
  "pin": {
    "cid": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
    "name": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1",
  "status": "queued",
  "created": "2022-09-02T11:48:19.000Z",
  "pin": {
    "cid": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
    "name": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
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
## Can create new pin for testing pagination cid='bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi' - 🟢 SUCCESS

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
{"cid":"bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:20 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=iUVVzjduwA7FezMLd4aX6lmiPlWakbsW7lUx6aDNY%2B4o%2BNh5YpTE1dzPnzl8m1yQkCGBvbcbNR%2BXqTnh7uVsRAVnkh5N1EJOEE0%2Fk4bCxe8pfmkZI37dO%2B3FI4s%2Ba%2Fjh4FQTF5kOTAwNcZSIAJw9DLh2KQfRSqa9Zwx2sAQkWN%2BAaa3jHYEPpEeB4HwTDz7AYa1RdLvTgivVTQC6TF6TZB11tnUNLUO%2BtRgB70E%3D--yBL5mN5hQZ9G5%2Bvu--PEJTOIo%2Bn%2BGJyJEV6Rc6%2FQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:20 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "1eb473cb-ad15-4527-ae54-168e50a36c79",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx",
  "status": "queued",
  "created": "2022-09-02T07:48:20.000-04:00",
  "pin": {
    "cid": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
    "name": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx",
  "status": "queued",
  "created": "2022-09-02T07:48:20.000-04:00",
  "pin": {
    "cid": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
    "name": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx",
  "status": "queued",
  "created": "2022-09-02T11:48:20.000Z",
  "pin": {
    "cid": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
    "name": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
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
## Can create new pin for testing pagination cid='bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i' - 🟢 SUCCESS

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
{"cid":"bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:21 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=gY9TDi0kUEC57qJi5PGlW1kJSkY5J9gSXDzjXiUBeXXhz4A40deum0esyd%2Bj8w7%2FXHSVYIYqvKn40snsUXVDV4BOUfLEJcS6xcJBQVdt5utRsyd4RkB8f3AvEfdT2Ma7PEqN%2Fm5R7nbW8Ib%2FrarATwgLamKpzAtSEjtqu%2FJDhgVjM4lQfe%2FOnol0TA5rK6f2cDTKsB%2B6mOZ2OJ%2BF%2FwK5YPGmEvBJETUGM3Whrt0%3D--J4BN1AZAsiNhKYY9--Ol5HdPAEs1xQG%2F%2B4CiVXiw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:21 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "38b23951-cee5-4951-9d3c-8f7551cbc948",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz",
  "status": "queued",
  "created": "2022-09-02T07:48:21.000-04:00",
  "pin": {
    "cid": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
    "name": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz",
  "status": "queued",
  "created": "2022-09-02T07:48:21.000-04:00",
  "pin": {
    "cid": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
    "name": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz",
  "status": "queued",
  "created": "2022-09-02T11:48:21.000Z",
  "pin": {
    "cid": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
    "name": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
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
## Can create new pin for testing pagination cid='bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm' - 🟢 SUCCESS

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
{"cid":"bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:22 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=HBX724QEKVtDzM4TgeSp8O9ew2lz7zNbiauDSB9wrW70YylDpIkC2FnEct0apG%2FZNkYPUApAJW47g%2Fk77GqCVgPCrvXIwO%2Bq5zI5P0e7wGY9rxMIGFuqxfKrsP%2BuyVMjATyvmHBh%2Fz74ucBMi0JCZFp21LvcVyufJfK4zytRbxGbfx5SM0QCyVdAVLUNqNmqjIVfu0H2lCx9HysaGdfqtpr1R5EQsQNAch%2Bqcjs%3D--shEvB8I3h6RyBFFG--YfrTl94egzLxQEYWhDLuCQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:22 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9b2544cb-3573-460f-82a8-45dfc9696353",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5",
  "status": "queued",
  "created": "2022-09-02T07:48:22.000-04:00",
  "pin": {
    "cid": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
    "name": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5",
  "status": "queued",
  "created": "2022-09-02T07:48:22.000-04:00",
  "pin": {
    "cid": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
    "name": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5",
  "status": "queued",
  "created": "2022-09-02T11:48:22.000Z",
  "pin": {
    "cid": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
    "name": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
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
## Can create new pin for testing pagination cid='bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi' - 🟢 SUCCESS

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
{"cid":"bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:23 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=R2YLq%2FLGv48mHU6msiKSUBq6lyptKEKeOulQrITa1Zx0TPKs1kXGvzENleKTqcQdwBrt14KYH61kUOQt%2BangUDoNNunHa4URnrjLWVxZzeeDoUGpKCOA3G9ObZOIgI0ocTwc%2FvysQlsbIPqMFuVHMtsgpfpa2zQW%2FTfyR0oGoG5c9urkedck4hipx0VYtwAyEDe5LvojOzJrYBCEFpVf2l4xS2thmeceujIuIDk%3D--0J%2FAp5OvBAzdzDWX--tZw5ZXFZAt5Sr0M%2BeC0YAw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:23 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8b4a9234-17df-4850-b2aa-c50979b1e59c",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2",
  "status": "queued",
  "created": "2022-09-02T07:48:23.000-04:00",
  "pin": {
    "cid": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
    "name": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2",
  "status": "queued",
  "created": "2022-09-02T07:48:23.000-04:00",
  "pin": {
    "cid": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
    "name": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2",
  "status": "queued",
  "created": "2022-09-02T11:48:23.000Z",
  "pin": {
    "cid": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
    "name": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
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
## Can create new pin for testing pagination cid='bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq' - 🟢 SUCCESS

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
{"cid":"bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:24 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=IycogmTJpDJv93htCfSYD9cYW5HHjnbQltuGv0aAo6uodIDrybIAz5UCjWfjMdpYOgwp76ytSRsDWOcI2pZAYEP%2BXXtNFPK9tMgi%2FKGrQkWFCBTCr8MbBXqFvmEl6kzjsqZPLqzVaz0WsXXEQBvrVW6SpVjzs89R4MEAOqaC0E4KPLXmoO0iQNgMJVjSkbu%2F0XmuwmUljD88rxLstF0M8XFh2axkSsCZ%2BbaQQPY%3D--cikby5tBA6wXXxqA--qxROZfGgVqFqVLPtTuXhZA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:24 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c2890042-d0a3-4c58-bfa0-43aafd912f28",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0",
  "status": "queued",
  "created": "2022-09-02T07:48:24.000-04:00",
  "pin": {
    "cid": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
    "name": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0",
  "status": "queued",
  "created": "2022-09-02T07:48:24.000-04:00",
  "pin": {
    "cid": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
    "name": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0",
  "status": "queued",
  "created": "2022-09-02T11:48:24.000Z",
  "pin": {
    "cid": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
    "name": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
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
## Can create new pin for testing pagination cid='bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny' - 🟢 SUCCESS

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
{"cid":"bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:25 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=cGcJl4ot9TtiEq5eNz1MGBYs0%2Bo2xqtqROLPr5dELa0XDkqNIGSxLhoIsLAvTlwe6O2HyrjyGvo6ani62%2BDgRgA95zLkxrA9xCIwmC95lf7EPQcmofqIpd9%2FxSdcHNQG7%2B1jVPBXn3t5EQAb%2FuLfkug%2FDpFIHljV4EyCzYdEIlo78GSjGcOm%2FBlMs9oc5gJ6OSC8Pwo4%2Bl3ttkodRn7G3g85oOFZWfHCs4pETkc%3D--2EDbUDFYuzOPkfe5--soYZMtddt%2BYWXtNo9qYqPA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:25 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "de1503cb-06a7-4007-8351-f0749b9a8a8e",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0",
  "status": "queued",
  "created": "2022-09-02T07:48:25.000-04:00",
  "pin": {
    "cid": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
    "name": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0",
  "status": "queued",
  "created": "2022-09-02T07:48:25.000-04:00",
  "pin": {
    "cid": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
    "name": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0",
  "status": "queued",
  "created": "2022-09-02T11:48:25.000Z",
  "pin": {
    "cid": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
    "name": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
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
## Can create new pin for testing pagination cid='bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu' - 🟢 SUCCESS

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
{"cid":"bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:26 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=GWSzankIJSIQ4dN0CxFC6VUba%2BtSHuF7HzTj9O6XZCv5X11plsTuTiCSNrBQMsMf3bcvwfsKtgkS%2BiEXrcIRePiqyt4qzyGTMQqBxqebffQGm%2BAJCLsDdcjQHh7Niqwx%2Fyxxo8zz3mPg6aoGi1EBEItyCX13ocIs%2FNuAETz6jTG6sC7WmhtJzpgaQECU%2BAjNmemvTkKUHZqMfFY4VR1vI9HCJbl7IbmqYK90dMI%3D--KulVUMNf12zTvRct--h9MBnEmGbjrM9hKbm6npiw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:26 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b880e3f1-6357-4412-9383-ee5d0506aeec",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw",
  "status": "queued",
  "created": "2022-09-02T07:48:26.000-04:00",
  "pin": {
    "cid": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
    "name": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw",
  "status": "queued",
  "created": "2022-09-02T07:48:26.000-04:00",
  "pin": {
    "cid": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
    "name": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw",
  "status": "queued",
  "created": "2022-09-02T11:48:26.000Z",
  "pin": {
    "cid": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
    "name": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
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
## Can create new pin for testing pagination cid='bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm' - 🟢 SUCCESS

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
{"cid":"bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Fri, 02 Sep 2022 11:48:27 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=zE8oSD7qqBY0uWb%2B9LroRUvw2ESFvPw0o4KXegXjbsphq4LhP%2BlzuF4qwuaTWAYQrLdwdAyjNG2ln8vjXRpMOtHPnVmBirsI1OyZ9lgjZwu5nKxvAqEvRNeDyOr0kCtd%2BXd7ykpMMT4aORT%2BMjCGg%2B98nTdEf0Jc11arXQOtGf1VfeMKMGCtn%2FUakZw2x2zO70iDuqgQz53tmZdKIJGy3V%2FVCccwvTy0GgQXCjg%3D--RA8n1EdKa9LnJPWD--VIUdrjLtTAD3tuGFdUHAVw%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:27 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "811485a5-d5c1-4012-8b73-080128fc9a4e",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx",
  "status": "queued",
  "created": "2022-09-02T07:48:27.000-04:00",
  "pin": {
    "cid": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
    "name": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx",
  "status": "queued",
  "created": "2022-09-02T07:48:27.000-04:00",
  "pin": {
    "cid": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
    "name": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx",
  "status": "queued",
  "created": "2022-09-02T11:48:27.000Z",
  "pin": {
    "cid": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
    "name": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
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
  "date": "Fri, 02 Sep 2022 11:48:28 GMT",
  "etag": "W/\"db7d15fb463689c353ba343afdf33d7d\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "62682967-5de3-4e39-bd36-2c8488bcdebe",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx",
      "status": "pinning",
      "created": "2022-09-02T07:48:27.000-04:00",
      "pin": {
        "cid": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
        "name": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw",
      "status": "pinning",
      "created": "2022-09-02T07:48:26.000-04:00",
      "pin": {
        "cid": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
        "name": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0",
      "status": "pinning",
      "created": "2022-09-02T07:48:25.000-04:00",
      "pin": {
        "cid": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
        "name": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0",
      "status": "pinning",
      "created": "2022-09-02T07:48:24.000-04:00",
      "pin": {
        "cid": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
        "name": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2",
      "status": "pinning",
      "created": "2022-09-02T07:48:23.000-04:00",
      "pin": {
        "cid": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
        "name": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5",
      "status": "pinning",
      "created": "2022-09-02T07:48:22.000-04:00",
      "pin": {
        "cid": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
        "name": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz",
      "status": "pinning",
      "created": "2022-09-02T07:48:21.000-04:00",
      "pin": {
        "cid": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
        "name": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx",
      "status": "pinning",
      "created": "2022-09-02T07:48:20.000-04:00",
      "pin": {
        "cid": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
        "name": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy",
      "status": "pinning",
      "created": "2022-09-02T07:48:19.000-04:00",
      "pin": {
        "cid": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
        "name": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1",
      "status": "pinning",
      "created": "2022-09-02T07:48:19.000-04:00",
      "pin": {
        "cid": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
        "name": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx",
      "status": "pinning",
      "created": "2022-09-02T07:48:27.000-04:00",
      "pin": {
        "cid": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
        "name": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw",
      "status": "pinning",
      "created": "2022-09-02T07:48:26.000-04:00",
      "pin": {
        "cid": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
        "name": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0",
      "status": "pinning",
      "created": "2022-09-02T07:48:25.000-04:00",
      "pin": {
        "cid": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
        "name": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0",
      "status": "pinning",
      "created": "2022-09-02T07:48:24.000-04:00",
      "pin": {
        "cid": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
        "name": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2",
      "status": "pinning",
      "created": "2022-09-02T07:48:23.000-04:00",
      "pin": {
        "cid": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
        "name": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5",
      "status": "pinning",
      "created": "2022-09-02T07:48:22.000-04:00",
      "pin": {
        "cid": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
        "name": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz",
      "status": "pinning",
      "created": "2022-09-02T07:48:21.000-04:00",
      "pin": {
        "cid": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
        "name": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx",
      "status": "pinning",
      "created": "2022-09-02T07:48:20.000-04:00",
      "pin": {
        "cid": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
        "name": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy",
      "status": "pinning",
      "created": "2022-09-02T07:48:19.000-04:00",
      "pin": {
        "cid": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
        "name": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1",
      "status": "pinning",
      "created": "2022-09-02T07:48:19.000-04:00",
      "pin": {
        "cid": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
        "name": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-09-02T11%3A48%3A19.000Z
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
  "date": "Fri, 02 Sep 2022 11:48:28 GMT",
  "etag": "W/\"0c9771e064987a216132d5622aa2deb1\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e9c712b6-88fb-4029-b7c3-20af05b0865b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
      "status": "pinning",
      "created": "2022-09-02T07:48:11.000-04:00",
      "pin": {
        "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
        "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
      "status": "pinning",
      "created": "2022-09-02T07:48:07.000-04:00",
      "pin": {
        "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
        "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
      "status": "pinning",
      "created": "2022-09-02T07:48:11.000-04:00",
      "pin": {
        "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
        "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
      "status": "pinning",
      "created": "2022-09-02T07:48:07.000-04:00",
      "pin": {
        "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
        "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
  "date": "Fri, 02 Sep 2022 11:48:18 GMT",
  "etag": "W/\"0c9771e064987a216132d5622aa2deb1\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "da154dd9-160c-4f68-b223-fee8be150be1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
      "status": "pinning",
      "created": "2022-09-02T07:48:11.000-04:00",
      "pin": {
        "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
        "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
      "status": "pinning",
      "created": "2022-09-02T07:48:07.000-04:00",
      "pin": {
        "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
        "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
      "status": "pinning",
      "created": "2022-09-02T07:48:11.000-04:00",
      "pin": {
        "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
        "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
      "status": "pinning",
      "created": "2022-09-02T07:48:07.000-04:00",
      "pin": {
        "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
        "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx
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
  "date": "Fri, 02 Sep 2022 11:48:30 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=%2FvRnYVj5yw7T20i1Givk3%2FbJ4F85xDN1e4wZB5NkTPw0GwPFxeusXzSuAJK8RAv5%2ByLB3zqEIbo6E4GCXKWPXvSAkudF5bmStWzLT4gNVWtEyY8EusT%2Fcb5pM8jhSaMHTaYt1x7Dhz%2FEb1um7%2FLSJilZr78LLxtj5jGyL19%2FkvEM3totoe4Umfc9%2FWIZZ1T4hO8QTlMSoIeyc83QUJFXU6HIVZBJ7xZ3irzAb2g%3D--h4Swu%2BKm331BO%2Fum--aulGeeSnVtvNO4N4OeLG2A%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:30 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "420262e0-bc3d-400d-b456-5eb99bee63f5",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw
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
  "date": "Fri, 02 Sep 2022 11:48:31 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=WOQJUfaCGDdCms4bkf2Z2Df73UDAaacQEf1exr9PDL1nDZKXhtscdLsDCKdiuzjVQzDqfbhaNLhzQvk0%2BdZcekf7aiLmHXVaku4ZYVRlOTG4tpk91RxORyIVgDKb2DNqAb73uFBLt6%2BgyDAhkmEr2BD8yURPDKqnfE4IfG%2BhBBJ6K0nYnbnbGYansl%2BX%2Bb4PYBC%2B5iypzcIiCwCfwgq4u1uU57Y0%2FtlfS8NEM6A%3D--viDDnsDJLXOvVtbQ--EXiqn4nFWxohvcyo283l9A%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:31 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8885972b-14df-42c8-81d7-a33549971436",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0
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
  "date": "Fri, 02 Sep 2022 11:48:32 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=mKSNwStw7iDXmoue7xKXXWQRFOjdOfwJXBkPpKX5FXeDJZoi37McaJdoeqiWZZBdc3843PrnW1CzrrxAzoD9SGIdwBVsompyohzpizD3PzsurHoECGOcQ3vEmvl2CRrOany%2Fqq3w2wFlchj4AeVjAwRAK6Hncqe20pPruZgs5KDTrl5s4zDTgKOEtcyHOY1oyNLbM6LjfX0B5bwqrccfmZkU%2FYIq33qAMWE8Fb0%3D--oKyGAQ0SWHmwa0d4--sSAn9uEGqvq77Shq0HgmSg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:32 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2d98c7a3-c6fc-42ed-9b5f-efd49ce0884a",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0
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
  "date": "Fri, 02 Sep 2022 11:48:33 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=rpgANbZq2NUWZBeBOXhSV%2F3g1EUQu9aqTj78j6tCNyff6wGCh%2BFvD3W4Hr7MUkZMzrazYxAtaxqbS6kd%2Fkb4Tss3qfJfbJfNdijE55GOWF%2F7AkR3J%2B5BMtLKc28saM3Szy5fSN5DOVSTW4S%2BGrrTTomhPeY5l93PQLyU8gcIu7vOiyHtaJEg6LRw9UbRCbIqAJwGTDubWPZAXuPY3saJzVkB%2B4j2sdtPI1PSfsQ%3D--0d4jw2wFIdXfGAR2--H%2FRIuU9naAC7N71omH9iTQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:33 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e36b40ab-7c4f-40e0-b108-f1e2cda138d9",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2
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
  "date": "Fri, 02 Sep 2022 11:48:34 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=mnK%2F2t6skK%2BOuMuBJHuCTuHJigsId7Bjhe1W4VZ465eBArWzVhlDUnO1U2kLTU5BDVYF0T%2FjCRo0pMP9rIPP60kPZljppbp9QDbxahvcVZwMJ1MK4aPZDu2RgryR6t5Vpkmf3lKET63WurxNoa1Jw%2B2F02%2Fj9sFxCGN6gJNHcLza8jokgWkyB0OM3yN8EjA6mKORNcqJi3%2FIm10koic9jIUvtZPYRiVK6Yb1%2FzY%3D--P892c4TeEy%2FYTJcn--BEwlnl%2BY%2BuQrnZtKdgkYfg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:34 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8cdaf93d-119f-4c25-aa4b-bd6aa2930867",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5
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
  "date": "Fri, 02 Sep 2022 11:48:35 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=u7yPKoxkY1uqdVsEtEXmDNuttwfFgQO7EPFGvry25jDLtAPH%2F%2BmDpGlE%2BN0zkIXx6Hyk27SnhE3QgQhD1mps9s0iOgGcLk7nvTKMrF1YQdpfZnh844EFsEMmkFiBXAry558FsPRvddBtolJH97UUN5OjeuO4yKsVur2e0wN079Qut7HuQmOHyEjJTRA%2FEEbtAWX%2Byb0ejQ6Qis%2FvM6n0OgacggYeWrwx3scLDY4%3D--DnBQfRiVaRw6CLN2--0kUv%2F%2FpafV%2B06tRFxstLTg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:35 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "94823ce5-3d45-4788-b9e7-9487e4991c70",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz
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
  "date": "Fri, 02 Sep 2022 11:48:36 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=ZNdwSjLn9Y9sL%2F4AUjxlGnnfT3%2FzKuFenc6Vr%2F0OQDitfoZyOV7j4Wre8Kx8cR5Nw5Y4EBTabPvOBbWcW8piErJfiGHz5TzowN8TldqlfSwaahw2TPiFcSAHAbqR55kqwbWCT%2Bk%2BhhVQDrMgSmfrk%2FUhGt7fffs1MCz40e6YMwtfdBPMKmg%2FTVO6krx4%2BOQeFkxdV517mOhKnysbqtfM2JbRNgsKeaMDIcs7taw%3D--StX04EUJuyDMkrYQ--%2BkNiZ8Wx%2BgptrLOjvL4MZg%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:36 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3dc7753e-612f-4ad5-8b8f-4f2e303b5868",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx
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
  "date": "Fri, 02 Sep 2022 11:48:37 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=fF9R%2BoFOVsMk4OKc8RY2Ww2E0IehBMIZbQm%2BpxQzISBn1eJsC8tblt82Ax9VLRAnMAugmnC0WC5NwtQ3oFIVtCpj4RKXg3OetVLbJXDwvkd7zDVEjlxrLIAYX4slfDJo2cTZ2bJ2bOK5%2F%2FFG4PG3Fge10B3HhMJ1Ml1kZG0vSvOufZkoBeGZgxD0ZP%2Fd47mL3yIlx%2BVfsH%2FNZhh2S%2F0rG%2Bmhi9ZNnhaAcqwSFs0%3D--B0248M0Xd%2F0wuTyS--x80F993eWW19sjlbPP8Kog%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:37 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6f7fb8d6-695f-4c4f-a7f8-bea27a6ac555",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy
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
  "date": "Fri, 02 Sep 2022 11:48:38 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=HKLx8x5Ra3K7H4VBdb8BnJz0ey88cvOrxk938lcnAs5m3GVwK6xISfN3EJLUXG5bIop1Cbhht%2BgMsgMYaipmm4VSOVLwqDmnSvLTX6m%2Fq%2FpusOIcPI1LdibC5TQNiILVQHNbh4kWSMRZMFpvo6%2F%2BY54dPVVsZy4vlSDsrucM%2BmebH3gYFzbrvGc0QHkoa0iVNWkwnmMCvtNCi6SIixGJwoEXaGlSKFCgc%2BP578U%3D--WoNsi508WNINz1ak--SDV296u6Q%2FJxM9jDRJOGmQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:38 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a2a2ff5c-afc9-4b42-88f2-0436d5df2ab9",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1
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
  "date": "Fri, 02 Sep 2022 11:48:39 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=dAkKmtZjlmUJnLlXU%2F%2F3KHUyvQX47hBZE2Mfa%2BCzRVL1LKbxLbgviFoDUE7KZA9yj5GJDVENwAo9zmEyo2VLzwlh1UlwpXpLAc%2BlnMxFz7mu4Oqx1Hi%2Bh%2BJZxZGfDDIm6qABbIsM%2B%2BEhyRLC%2Bf5Tg60gf9iwwlr63qq99LtG%2BPSXrFbuAjaoc3L8sMxG3XsvjHY6hyjM8Gn8HU9F4Y0a1JoeS1nNruw0Lwc5S3s%3D--MmO5jj9mPNnJcJYK--vzSW8gq91rAwNQ957BSAnQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:39 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "430a8591-3738-4681-a91e-63a0dde20db9",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx
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
  "date": "Fri, 02 Sep 2022 11:48:40 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=DTvCmX8nOpxL67NYNomDkgwCpEIEDQbmq%2B7HWTAulbF6UIWPpfnMi%2BpsDNLcHOl11C17erT9n3mJFzv7DNxzfnYEZTN0e6%2BjBEsRFDkie2i7e6tpIyQvUAAfpKZMxB7GzRRkvwZES9M%2Ffuvqq6NlV1yYXBjeOQA3b8865VMUqMyQJv8296IIOkKT8ryrshQuai2YBYMWRSCr3si6Skul75LWBpOwLdIlkZ%2Fi0FE%3D--gtp0gAcc39RdVgOb--Uce8D1vlnLvSGxHT9e9ogA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:40 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "434af8e6-97c6-4119-97ca-a141ac1efc48",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw
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
  "date": "Fri, 02 Sep 2022 11:48:41 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=%2BMwC9bV37wTXo9BNrIr4XE3YrZe1YEdIL%2BSSKEa3xXYeSB8zKvBcsWtUF7MZB%2B5cnURQ7HXE8tlUTje%2Fy21uMr0a1LWBiKF6NIO1kZx%2FfHX6yZc2I6eifWCTZ8C1weuNJUy2QRpN3DzpKQoY0boEQJoq7WkjI4hKV0XLB%2Fsu29UjXRLVuyU6J8jvJeQpkVkbpOrca8frleHl1w9jjA7bDL71a%2FMPnldYFLJwUsQ%3D--2Ier%2BZ0eTBxNjecw--eeEhNwZt%2FkcbDskJmprCeA%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:41 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "43ca24c1-0767-4f01-a682-a34c447468bd",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3
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
  "date": "Fri, 02 Sep 2022 11:48:42 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=UiBmkHmAg%2FPhsvzrCBJ8x5A%2FUuD51mK9XJudGCXntLADFK4le6I0Rdz1s6RmKO265yCmHzovOgzNCMs%2FKhqX1MKiTJ%2Ff2GqHGIyG%2BbRH0jYqO%2BDY9ONDW0rt1AC8leE0966Jtu4SO1noJE2t8byVFzUnGYb145IxunuOQEg%2Fl7JLhZJLSSfErL5p%2FyzmwIQMbo5GrQWicmZtbFZ6dZBUL7aYJHKfA6rc4yWHfiM%3D--di00Qcy8PSvPva6s--oKUQ2cxeQFzSsXeZjxp%2BrQ%3D%3D; domain=.filebase.io; path=/; expires=Fri, 16 Sep 2022 11:48:42 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cfb77562-0335-429c-81a9-3a8eb14fc044",
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
  "date": "Fri, 02 Sep 2022 11:48:43 GMT",
  "etag": "W/\"3438c5b0da51b073b4fa87b68d35e3b9\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a16e3276-2a0f-4bca-af5d-3529e4f8c7fe",
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
## Get all Pins created before 'Fri Sep 02 2022 11:48:19 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-09-02T11%3A48%3A19.000Z
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
  "date": "Fri, 02 Sep 2022 11:48:40 GMT",
  "etag": "W/\"0c9771e064987a216132d5622aa2deb1\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5956d7aa-a9af-48bd-83d6-2d4b9019e827",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
      "status": "pinning",
      "created": "2022-09-02T07:48:11.000-04:00",
      "pin": {
        "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
        "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
      "status": "pinning",
      "created": "2022-09-02T07:48:07.000-04:00",
      "pin": {
        "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
        "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzMx",
      "status": "pinning",
      "created": "2022-09-02T07:48:14.000-04:00",
      "pin": {
        "cid": "bafkreiagbwlvsusttzdmlgfzd5i7gta2bhe5mhyekv3wkkolkrqaopkq2i",
        "name": "216339a9-e82e-4ba6-a3ba-f68ec831c119",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzAw",
      "status": "pinning",
      "created": "2022-09-02T07:48:11.000-04:00",
      "pin": {
        "cid": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
        "name": "bafkreic5qknoctmc54qiwflzimyfckz4x4pcirlbi5hufnjszfpm6ojy4q",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMjY3",
      "status": "pinning",
      "created": "2022-09-02T07:48:07.000-04:00",
      "pin": {
        "cid": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
        "name": "bafkreiest5on5l56fytw5s3tm74ogv3uo6hmhxjlx4t3vw2do27ubxz7iq",
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
  "date": "Fri, 02 Sep 2022 11:48:44 GMT",
  "etag": "W/\"4d76b8f4aeff840e944bbb95d497f063\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d7f2bbd6-ef64-41e3-b69c-8f5012c1618d",
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
  "date": "Fri, 02 Sep 2022 11:48:29 GMT",
  "etag": "W/\"db7d15fb463689c353ba343afdf33d7d\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b51090af-b25b-4692-8e9f-f3fbb89a023d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx",
      "status": "pinning",
      "created": "2022-09-02T07:48:27.000-04:00",
      "pin": {
        "cid": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
        "name": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw",
      "status": "pinning",
      "created": "2022-09-02T07:48:26.000-04:00",
      "pin": {
        "cid": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
        "name": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0",
      "status": "pinning",
      "created": "2022-09-02T07:48:25.000-04:00",
      "pin": {
        "cid": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
        "name": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0",
      "status": "pinning",
      "created": "2022-09-02T07:48:24.000-04:00",
      "pin": {
        "cid": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
        "name": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2",
      "status": "pinning",
      "created": "2022-09-02T07:48:23.000-04:00",
      "pin": {
        "cid": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
        "name": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5",
      "status": "pinning",
      "created": "2022-09-02T07:48:22.000-04:00",
      "pin": {
        "cid": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
        "name": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz",
      "status": "pinning",
      "created": "2022-09-02T07:48:21.000-04:00",
      "pin": {
        "cid": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
        "name": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx",
      "status": "pinning",
      "created": "2022-09-02T07:48:20.000-04:00",
      "pin": {
        "cid": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
        "name": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy",
      "status": "pinning",
      "created": "2022-09-02T07:48:19.000-04:00",
      "pin": {
        "cid": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
        "name": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1",
      "status": "pinning",
      "created": "2022-09-02T07:48:19.000-04:00",
      "pin": {
        "cid": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
        "name": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDQx",
      "status": "pinning",
      "created": "2022-09-02T07:48:27.000-04:00",
      "pin": {
        "cid": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
        "name": "bafkreifmnwvahgn4fcemhlidoojxc5usrzvrpe4mhhvz4yp4tfpzyye3bm",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDMw",
      "status": "pinning",
      "created": "2022-09-02T07:48:26.000-04:00",
      "pin": {
        "cid": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
        "name": "bafkreid5axucrneluwa74p43zpzm3km3czshffwbtcznfsab55e2dwnqdu",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDI0",
      "status": "pinning",
      "created": "2022-09-02T07:48:25.000-04:00",
      "pin": {
        "cid": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
        "name": "bafkreieqi74bc3nvphyqq7ga6dhfyxucohqpytc6eisj4ak7xpqx7bvpny",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDE0",
      "status": "pinning",
      "created": "2022-09-02T07:48:24.000-04:00",
      "pin": {
        "cid": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
        "name": "bafkreifg5drkfxowtzzai52ubjy3jlb3ugrrseonrun6p6l5odnbfao6yq",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzNDA2",
      "status": "pinning",
      "created": "2022-09-02T07:48:23.000-04:00",
      "pin": {
        "cid": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
        "name": "bafkreibf7wplfia5542ucvshvzohsyimurpnfrtmydg2ac3ry562tmthmi",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzk5",
      "status": "pinning",
      "created": "2022-09-02T07:48:22.000-04:00",
      "pin": {
        "cid": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
        "name": "bafkreifhpfzg3k7u5s2mhdqs2jqxykklpqlbgftk6gvfclomgn3w4psgsm",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzkz",
      "status": "pinning",
      "created": "2022-09-02T07:48:21.000-04:00",
      "pin": {
        "cid": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
        "name": "bafkreie2vjo7on3rkxnde2yanh5oyxvh7r3s222usk5kjmbscbf4krjk6i",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzgx",
      "status": "pinning",
      "created": "2022-09-02T07:48:20.000-04:00",
      "pin": {
        "cid": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
        "name": "bafkreicv5frxxz6isd7z7wjzkdh7mejmd7k5fmdtgzjkb2dt3dusn7jdfi",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzcy",
      "status": "pinning",
      "created": "2022-09-02T07:48:19.000-04:00",
      "pin": {
        "cid": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
        "name": "bafkreifh6cmyug2zrnmxiw6vt23bbyneh5a23mru3qgm3f5werwcxgoi4u",
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTgzNDgzMzc1",
      "status": "pinning",
      "created": "2022-09-02T07:48:19.000-04:00",
      "pin": {
        "cid": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
        "name": "bafkreifi2hwveqyhzqrogbbgvetdzvcqxydhea7ek76dvf6gujvtw4qqxy",
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
