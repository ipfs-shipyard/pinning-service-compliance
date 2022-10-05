
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2022-10-05T00:14:28.616Z

Revision: [b308964](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/b308964)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (9/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq'](#pins-post-of-cid-bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='1e739598-4c31-4ded-81a5-8b780c08ec50'](#can-create-a-pin-with-name1e739598-4c31-4ded-81a5-8b780c08ec50----success)

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
  "date": "Wed, 05 Oct 2022 00:13:51 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "343210c1-28ec-4d27-adb6-4a1bb6b384d1",
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
  "date": "Wed, 05 Oct 2022 00:13:52 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "44ad0474-6570-45c1-b6a1-75c51d793504",
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
## Pins post of CID 'bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq' - 🟢 SUCCESS

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
{"cid":"bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:13:53 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=%2FaPBQE5Sc7YHlebrBKcQtx0%2FJRtHpmMe7WW3P33r3L6KQDBPy4%2FH2%2BTz0SK%2BxDH9khgBW4KYycIvOqDHbqMi1EK1AHLg7MgD2oqO3UJhGEbxwEIUG09hqFiPFtvyKH1cI7hRKGjtt3BA9FLZCMMETGniXAJysRc10hszGQ66mxXKgpf%2BBfr3buEDwBUxo5WgbmKUU4y4JYv5Bo5%2F%2B1D527W%2B%2B8Yht2e8yqCL9WI%3D--F0MuWM%2FGlTNige2D--w303ZeL8Zm9BGorrYFSeqg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:13:53 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8eed1e82-726b-449e-b975-1888708461ba",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
  "status": "queued",
  "created": "2022-10-04T20:13:53.000-04:00",
  "pin": {
    "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
    "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
  "status": "queued",
  "created": "2022-10-04T20:13:53.000-04:00",
  "pin": {
    "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
    "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
  "status": "queued",
  "created": "2022-10-05T00:13:53.000Z",
  "pin": {
    "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
    "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0NQ
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
  "date": "Wed, 05 Oct 2022 00:13:55 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=LafLTNydECSF1lJviSMwggDIeEYpJP4NYTDyncSE4DnSXn5avaJ35ZJVD1oaCsYnbnayjOzAKm11m1fNe8DNqAscXdOn38MLJ%2B1BJEVsxTlbH0OgTOn8FJWfp2KoV3qnoh8dlJ8nmDq50EWvjzRR%2F6p0JKgpmgimcN07x%2BwM54efewK6lsrZP8OiH4H4cz%2BBtTyWE76XwKaUiiO8tZ9LyDBpEPBdQF5%2FNAZ0Bzg%3D--JmbgVQxupb1RIwry--FKBLxYLvJWgvgm02k8FfZA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:13:55 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8d74dd0d-183f-4929-a8e7-851fb7c7c000",
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
{"cid":"bafkreiheq6yjqfswlfv2qv5jma2tb5iowkcj3chpbklwsw6p5e5p64zdim","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:13:54 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=CEhSEkSJCGA9IBRBART8nN39ZYaZ1h1IONngv7c8BpcJL9eUPAURutkvZYBvWtoEUO7xnTXS8sDf%2BKLd4dGayx58PzcxikYcxbnMlx3IBv0%2BhK5V3iH6WoT53KfQ5yuu%2FEwIQldwznnAt5lzxbn%2FEjRb7f9z9%2Fd0VB81ZXWQso0ghr4xHW2pe1cYvNfUehBECWv6LB6mfX75%2Fq4Yga%2Bggo%2FzA8tuxytcipsV3cE%3D--WtFAL08brLdMmJg9--wguNtM6lGNNO4D8k6Sd9vQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:13:54 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8861b702-b810-4451-9378-315e6dcdc275",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0NQ",
  "status": "queued",
  "created": "2022-10-04T20:13:54.000-04:00",
  "pin": {
    "cid": "bafkreiheq6yjqfswlfv2qv5jma2tb5iowkcj3chpbklwsw6p5e5p64zdim",
    "name": "bafkreiheq6yjqfswlfv2qv5jma2tb5iowkcj3chpbklwsw6p5e5p64zdim",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0NQ",
  "status": "queued",
  "created": "2022-10-04T20:13:54.000-04:00",
  "pin": {
    "cid": "bafkreiheq6yjqfswlfv2qv5jma2tb5iowkcj3chpbklwsw6p5e5p64zdim",
    "name": "bafkreiheq6yjqfswlfv2qv5jma2tb5iowkcj3chpbklwsw6p5e5p64zdim",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0NQ",
  "status": "queued",
  "created": "2022-10-05T00:13:54.000Z",
  "pin": {
    "cid": "bafkreiheq6yjqfswlfv2qv5jma2tb5iowkcj3chpbklwsw6p5e5p64zdim",
    "name": "bafkreiheq6yjqfswlfv2qv5jma2tb5iowkcj3chpbklwsw6p5e5p64zdim",
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
  "date": "Wed, 05 Oct 2022 00:13:55 GMT",
  "etag": "W/\"d59892a66f57f6eb2a262b568adea957\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2fe063f2-b123-4cb3-beee-8bd88650024a",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
      "status": "queued",
      "created": "2022-10-04T20:13:53.000-04:00",
      "pin": {
        "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
      "status": "queued",
      "created": "2022-10-04T20:13:53.000-04:00",
      "pin": {
        "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1NQ
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
  "date": "Wed, 05 Oct 2022 00:13:58 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "99e86a9c-03ce-4283-b91a-5dd08b161aa1",
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng
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
  "date": "Wed, 05 Oct 2022 00:13:59 GMT",
  "etag": "W/\"39ff5c50cb9a9a3d6e2fba9d906754b5\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9c3aaab7-86a9-4669-8a42-e1c631b24693",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
  "status": "queued",
  "created": "2022-10-04T20:13:57.000-04:00",
  "pin": {
    "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
  "status": "queued",
  "created": "2022-10-04T20:13:57.000-04:00",
  "pin": {
    "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
  "status": "queued",
  "created": "2022-10-05T00:13:57.000Z",
  "pin": {
    "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
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
## Pin's with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1NQ' can have cid 'bafkreicycpibyln3vjvydv5xtvn3aomz6kx7aozo7f4xhrzzfayi5hmkki' replaced with 'bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua' - 🟢 SUCCESS

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
POST https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1NQ
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
{"cid":"bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:13:57 GMT",
  "etag": "W/\"39ff5c50cb9a9a3d6e2fba9d906754b5\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=pDW7v4NbwXZEwmeS7KAQVosto2lNKaYSv7cZnA0yUvaVSmgXe7AQqVSzzk0vCgNbHJMvPGqYicHFndI0A2Ks7l5BaxBGXBpPyGPiFnCNuzD2T2ukgMEBT%2FcLQbfvlIy012Bh45E5MdpVt%2BFNg8HfY0nnjIjbGAfoHijQwxRGhUGUl2XuG53v0Wzwe92sQKjVoOy%2FBSpXybLvnuVUyzFU3Spo%2FIB1uQ%2B96rkZOwM%3D--0LW1uWIz%2B5Sw5vx1--Ch0I6Ckzgs0P5XvaFqAJMA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:13:57 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f60fb554-3c98-478e-9ede-3ee66a32a6e4",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
  "status": "queued",
  "created": "2022-10-04T20:13:57.000-04:00",
  "pin": {
    "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
  "status": "queued",
  "created": "2022-10-04T20:13:57.000-04:00",
  "pin": {
    "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
  "status": "queued",
  "created": "2022-10-05T00:13:57.000Z",
  "pin": {
    "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
    "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
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

  🟢 Could obtain requestid from new pin (Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1NQ) (success)

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
{"cid":"bafkreicycpibyln3vjvydv5xtvn3aomz6kx7aozo7f4xhrzzfayi5hmkki","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:13:56 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=hjCzoIgceVaUH1vBoy2FCEx2qi%2BkvrMOKvLU%2FScjggzFu7hDKi6k%2BDHzYRGRefSfuADedc6NT5%2FTNsA6yPI63GT4T6lWluKJSVXxBRPbXlOGe%2BHJnXfubskBhitRlYOPNIQARKbHx6u8y93k337Yv1FcL2C3tgL6jzQjBNxoPrElbd0PagsnJdKBwbLBdv%2Bio9sCEhB9etG61n7lOG4tx6bAOBeIstckaVZxCKo%3D--iy3%2B0ICwMY3UPLs9--e0k5ZLxvV%2FLAItrhRJberQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:13:56 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c7950364-1259-46a3-9df1-1225b53f4f74",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1NQ",
  "status": "queued",
  "created": "2022-10-04T20:13:56.000-04:00",
  "pin": {
    "cid": "bafkreicycpibyln3vjvydv5xtvn3aomz6kx7aozo7f4xhrzzfayi5hmkki",
    "name": "bafkreicycpibyln3vjvydv5xtvn3aomz6kx7aozo7f4xhrzzfayi5hmkki",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1NQ",
  "status": "queued",
  "created": "2022-10-04T20:13:56.000-04:00",
  "pin": {
    "cid": "bafkreicycpibyln3vjvydv5xtvn3aomz6kx7aozo7f4xhrzzfayi5hmkki",
    "name": "bafkreicycpibyln3vjvydv5xtvn3aomz6kx7aozo7f4xhrzzfayi5hmkki",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1NQ",
  "status": "queued",
  "created": "2022-10-05T00:13:56.000Z",
  "pin": {
    "cid": "bafkreicycpibyln3vjvydv5xtvn3aomz6kx7aozo7f4xhrzzfayi5hmkki",
    "name": "bafkreicycpibyln3vjvydv5xtvn3aomz6kx7aozo7f4xhrzzfayi5hmkki",
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
## Can retrieve pin with name '1e739598-4c31-4ded-81a5-8b780c08ec50' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=1e739598-4c31-4ded-81a5-8b780c08ec50&match=exact
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
  "date": "Wed, 05 Oct 2022 00:14:00 GMT",
  "etag": "W/\"29c6173a3174e7365489296ef2e8ce7b\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "81a1351f-3d93-4c11-945b-0eae48e9a57b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '1E739598-4C31-4DED-81A5-8B780C08EC50' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=1E739598-4C31-4DED-81A5-8B780C08EC50&match=iexact
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
  "date": "Wed, 05 Oct 2022 00:14:01 GMT",
  "etag": "W/\"29c6173a3174e7365489296ef2e8ce7b\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6b139b09-80e8-4a77-bb4d-0a2ba7b2dfce",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '4c31-4ded-81a5-8b7' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=4c31-4ded-81a5-8b7&match=partial
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
  "date": "Wed, 05 Oct 2022 00:14:02 GMT",
  "etag": "W/\"29c6173a3174e7365489296ef2e8ce7b\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "dfdf9669-a3b5-44d7-841f-d47ecac63e74",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '4C31-4DED-81A5-8B7' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=4C31-4DED-81A5-8B7&match=ipartial
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
  "date": "Wed, 05 Oct 2022 00:14:03 GMT",
  "etag": "W/\"29c6173a3174e7365489296ef2e8ce7b\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "1918c017-00cb-41a0-af79-53628dbb0b58",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can create a pin with name='1e739598-4c31-4ded-81a5-8b780c08ec50' - 🟢 SUCCESS

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
{"cid":"bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy","name":"1e739598-4c31-4ded-81a5-8b780c08ec50","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:13:59 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=hKQK6SyHm3mMWfTzeVk%2BZQiePVJcOkQNZumILbWL0VZpz3oM%2BP5nPOJJxM93RpDZ8VVc5b9%2F%2F8X6lQ%2FovGp5rBYeCaUblcZpC0N9PjlSQ6OVFUu0FO0Il46PRQXeVH5E%2Fwf%2ByUj0gpaXkDetiGgIux0O2CGysdw8BWjKJDcDt1pXVNDoUsnqqMbLvUK8o%2BglLnSLbaHfy0eBzNrY11oOQDC1aa5sfOOB5VqyhWM%3D--tvs%2FtZ398uQlMtjp--AJPFOI3ycZLJ9i8H5nikcg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:13:59 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f1283ded-c1de-463e-9f22-d32a5cdb2322",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
  "status": "queued",
  "created": "2022-10-04T20:13:59.000-04:00",
  "pin": {
    "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
    "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
  "status": "queued",
  "created": "2022-10-04T20:13:59.000-04:00",
  "pin": {
    "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
    "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
  "status": "queued",
  "created": "2022-10-05T00:13:59.000Z",
  "pin": {
    "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
    "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
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
## Can create new pin for testing pagination cid='bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy' - 🟢 SUCCESS

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
{"cid":"bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:04 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=FpzzDa%2BCi4H1HTLK0gw4mbIWRNr%2BVV7k7XSSXRNlBUmO057Jjh%2FAAdkZ9M8tv6uHs%2BRM%2FNSHrObpXYBq9rJ36n36fgnCvQpk0O04k116gX45%2B3KEr7sGheZ2NxRgm2d%2BkClTlkhnMm2RBYfyxnCCED5dyQINgCGpUnA5OkQhaLZNZM3fm01UNJgbB3NUiEBiSeO%2FTGqVAGRfkLRu%2F6ny58mvALs2hANQWpXfC90%3D--p7B6MMBg3QlyRcMd--vVgOM0Ayq26yA0a0ZUSMpw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:04 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d026e2e7-51b2-41ce-9e06-efd8be4c9f53",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA",
  "status": "queued",
  "created": "2022-10-04T20:14:04.000-04:00",
  "pin": {
    "cid": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
    "name": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA",
  "status": "queued",
  "created": "2022-10-04T20:14:04.000-04:00",
  "pin": {
    "cid": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
    "name": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA",
  "status": "queued",
  "created": "2022-10-05T00:14:04.000Z",
  "pin": {
    "cid": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
    "name": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
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
## Can create new pin for testing pagination cid='bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u' - 🟢 SUCCESS

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
{"cid":"bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:04 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=%2Bf7Bwzn9FjcLlWo0OT9A2yYK4xmWEw7%2F2fipI1Xro6gNpIre2anGmc3%2Bh0rJThQmrlSYZPrwbkF81vRwsP%2F8CKEjZl9aTDuvcoCZQ%2FePj8Vkm%2BpvmGAUMzRDzH1H0EykbR5hbDNHVjAq20PiNSmCT8yMm3vmYKF2uIE4uWSSBiQEY1n8AAQbV7pvKwxRoe1gEF8rlU8s2oU6NZu7BlzMLFw4TCDOcI22bV3Sf38%3D--lOC2qA5knBOhFHjw--X6uMb%2BbHBqLpaopsSa1pcg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:04 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9b489e96-4dd9-4cdb-83a1-b715f5430b86",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ",
  "status": "queued",
  "created": "2022-10-04T20:14:04.000-04:00",
  "pin": {
    "cid": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
    "name": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ",
  "status": "queued",
  "created": "2022-10-04T20:14:04.000-04:00",
  "pin": {
    "cid": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
    "name": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ",
  "status": "queued",
  "created": "2022-10-05T00:14:04.000Z",
  "pin": {
    "cid": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
    "name": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
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
## Can create new pin for testing pagination cid='bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta' - 🟢 SUCCESS

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
{"cid":"bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:05 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Grp33HXj5FYibiJrmH%2BFQEVovwXW5kLDxghZDGaEmJoOQGFHZr6ZcIWZSuA%2FODtodSosgKSPBSpvy5luGCq1JTGis%2F3%2FcrHyUa%2BD2TcHxgxN3QIKPpyBmsW3Q7i%2Fq%2FFVA9nFQqI9bqzxgtOBj19JOTOBWaC3Auywde70RmibUaElhrimo46m0dKLwtKpSpQINylO0v9MGppcil8C92%2F1fo9MQY7NFdp71ZEOOrU%3D--%2FOdFftHaqn3LgBh9--n2%2Fv257hQdMOcptSP7h1sw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:05 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d8b0a17e-6ee6-4e72-b1f9-660bb8ab0e59",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA",
  "status": "queued",
  "created": "2022-10-04T20:14:05.000-04:00",
  "pin": {
    "cid": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
    "name": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA",
  "status": "queued",
  "created": "2022-10-04T20:14:05.000-04:00",
  "pin": {
    "cid": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
    "name": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA",
  "status": "queued",
  "created": "2022-10-05T00:14:05.000Z",
  "pin": {
    "cid": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
    "name": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
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
## Can create new pin for testing pagination cid='bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq' - 🟢 SUCCESS

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
{"cid":"bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:06 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=ixBq8dvLitlugpeXSQMaptOP3QiyM4gDVgXVo5Iw%2FjtFYJ5HDyljpFB6zH%2BzWCFjBaHak7KCjBvetRZQJRBwU%2FsCiQaoZOrhh12%2BLXfgOGDDQk4vuELbmot30byVCy1Mh6yYV6aAk689feRBcyIIc7qT4hH2%2FIiZtzzuYDGhQ2bRdoYFnKTg1jfVQJ7RtcAOHw4hEkrv82cYKJQEu6iK8rB%2BjqWfKRI6xdyhbEE%3D--Ga88XyoGjSMzoVlM--gvucWb0nayWVtUGVnsTgxw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:06 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "92736515-54f2-4524-97c6-c999f6b9b684",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ",
  "status": "queued",
  "created": "2022-10-04T20:14:06.000-04:00",
  "pin": {
    "cid": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
    "name": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ",
  "status": "queued",
  "created": "2022-10-04T20:14:06.000-04:00",
  "pin": {
    "cid": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
    "name": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ",
  "status": "queued",
  "created": "2022-10-05T00:14:06.000Z",
  "pin": {
    "cid": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
    "name": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
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
## Can create new pin for testing pagination cid='bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4' - 🟢 SUCCESS

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
{"cid":"bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:07 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=VGKbHQWmMvLEns9sZ0Sn2up2WsYx8pFywXDeajdqRhQaAGmYsVFPA9JBMhx0Vyh2%2BkGRCsGn3dfvoMAErv74R8ePHQvkgQC3dEC2L6rb3FYtxjaK8Un5CxGF42%2Fy6oXGXN09a0YYKYXTrtTZSOzVXd41gY7nIpDwUo32MMOBfzHqQ1WwhUz77LkdtDL7h8nvaCPtbPD5Ff1m%2Fq1jfrbbJzrcozFSZMzTk%2F1QIUs%3D--tPsysLnE2tp%2BACJV--s%2FoJ0pMTtguCLsgPcXWrvw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:07 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "858a098d-e75e-4800-a059-b24285cb0375",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw",
  "status": "queued",
  "created": "2022-10-04T20:14:07.000-04:00",
  "pin": {
    "cid": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
    "name": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw",
  "status": "queued",
  "created": "2022-10-04T20:14:07.000-04:00",
  "pin": {
    "cid": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
    "name": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw",
  "status": "queued",
  "created": "2022-10-05T00:14:07.000Z",
  "pin": {
    "cid": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
    "name": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
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
## Can create new pin for testing pagination cid='bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa' - 🟢 SUCCESS

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
{"cid":"bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:08 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=9pE%2BgpKVEAacL302radj6jCrdCxSUteATCBl4Of8NDidPM3MFmoyQGoAzqXKy9B00O1KmWqFvGvBHv6Y6nXZNNTPcgDKwuZ8s%2Fa9eqhWPhxdwWEGw8ssIiezrQViQXjiTrNXL%2Fcv%2F%2BClshH5HS9J%2Fs7KeKNp%2BaHDfmjmetpkWZcLvaQCJtxl9s%2BEhWheuDdaLfl88eqc9cmHjko7EwF5gHJFlgkd5ZoNRslM3so%3D--mnBNbr%2FYxNFcOYF2--HpscO9xj8NW3pg8otptWQQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:08 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "419de753-2feb-4949-833d-89439e37e4f8",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA",
  "status": "queued",
  "created": "2022-10-04T20:14:08.000-04:00",
  "pin": {
    "cid": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
    "name": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA",
  "status": "queued",
  "created": "2022-10-04T20:14:08.000-04:00",
  "pin": {
    "cid": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
    "name": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA",
  "status": "queued",
  "created": "2022-10-05T00:14:08.000Z",
  "pin": {
    "cid": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
    "name": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
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
## Can create new pin for testing pagination cid='bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome' - 🟢 SUCCESS

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
{"cid":"bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:09 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=SxiQ2rhDO4J54moqYj6wuaFlNLK1blFw9TW%2FfKG7uMoAWGqVk1Kz0bmV7L2qtx2%2BZQs6i8ipvpfVUjjDtE43GhvQUhwGoa3niGDnS5PnH0iTN9gruqyQ%2FMaHcA3zfuoDAxugbyzE2FtNKQvM0Ym8RYQJuwXYCeQf1JIFsfzVu72Co6dzb4dup73tECx2L2nEs8WY4mzQqSwXijBs5ZSL76%2Fi4vy6zqzpOUPzqe0%3D--lappcoP3ONP%2FvhTW--Hz4%2BkWNysmCtKpUgOXSdZg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:09 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "661831ea-c3db-4262-8871-0bd1d5f49b4e",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg",
  "status": "queued",
  "created": "2022-10-04T20:14:09.000-04:00",
  "pin": {
    "cid": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
    "name": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg",
  "status": "queued",
  "created": "2022-10-04T20:14:09.000-04:00",
  "pin": {
    "cid": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
    "name": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg",
  "status": "queued",
  "created": "2022-10-05T00:14:09.000Z",
  "pin": {
    "cid": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
    "name": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
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
## Can create new pin for testing pagination cid='bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha' - 🟢 SUCCESS

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
{"cid":"bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:10 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Gbhq0cUzftChADJtsw2PK8jzxEr8A6%2BDns4BwjL4QXx1%2FjMBLwDXT1of6HjVFrKnoCjJlegrkdIvxfQ1Io0dPXVoueM24SyH%2Bjlu9v9cKDlh4baGi1pakoymZUYiKmSWv4IMlZqig2U98Wu3t47oECNvt5d5t5u8w4%2Fj1bQWjhoCRkc0Ah8FMq2PE1FTgymQy%2FpESOGzUJQBOexIAM6rSbSkM4DiY2FCQyVtc2Y%3D--h0BZwqHG0rMaapWa--iWK%2F1v9dNTEJDNr42WkYqA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:10 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e1fc947a-c1aa-463c-8e5c-909214365bb1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw",
  "status": "queued",
  "created": "2022-10-04T20:14:10.000-04:00",
  "pin": {
    "cid": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
    "name": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw",
  "status": "queued",
  "created": "2022-10-04T20:14:10.000-04:00",
  "pin": {
    "cid": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
    "name": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw",
  "status": "queued",
  "created": "2022-10-05T00:14:10.000Z",
  "pin": {
    "cid": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
    "name": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
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
## Can create new pin for testing pagination cid='bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy' - 🟢 SUCCESS

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
{"cid":"bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:11 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Nb6vroARNhjCb1Cenl2RKwIeQ9rq3J2A9%2FWhAEIWrE4w894Ib%2BaXP4bWKwgfC0Cabg%2FwJowlGlC1cmP%2FZVNaazR9klGVPonRFaCUel9ke%2F3uyGWrw%2FSd0syig1RjaSzWZ6mmEUH4LW09gicaF53qFFiLWhPj5X7O6V7snXzIgCZ%2BLxLWl7Bmc%2BnXN83KdgVwtkZ68KSJwExtIiYTVwzqO%2FKA8aj9MW%2FSxl8p7aA%3D--cobJMp7jzvp22mU1--SCPpE%2BTS1e1tbK5MipTdbg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:11 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f224c5f2-6ae1-4f64-9879-932f51be2f40",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA",
  "status": "queued",
  "created": "2022-10-04T20:14:11.000-04:00",
  "pin": {
    "cid": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
    "name": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA",
  "status": "queued",
  "created": "2022-10-04T20:14:11.000-04:00",
  "pin": {
    "cid": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
    "name": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA",
  "status": "queued",
  "created": "2022-10-05T00:14:11.000Z",
  "pin": {
    "cid": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
    "name": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
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
## Can create new pin for testing pagination cid='bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii' - 🟢 SUCCESS

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
{"cid":"bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 05 Oct 2022 00:14:12 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=z26bADN4pJdHJXtEgr0WxNDy91PuhVFEpnEhu6PqZUAQimEAlfYmewPTrCX1QwZYFOPU2x29M0Gwam7DargXSLMrO4mNpNO1IAsNEmw2BeORSGR5jQnmhCZ3X4CBB8bVmNC1AXa5o%2B5da6y8JbOAQqg11ZiBVNajywlBxrhf1PejjKeyJxbwlpq6wDdhlUpJFFGm20cdcrvaeuxQpErwCaN5nIUp2a8IuAAKZ%2Fg%3D--Pi713qDJC8VQJAYB--y2fqfOSVcS56rW1VfL0Pvg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:12 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f98d5a25-694b-4a39-bda8-e7326d2c1da1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA",
  "status": "queued",
  "created": "2022-10-04T20:14:12.000-04:00",
  "pin": {
    "cid": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
    "name": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA",
  "status": "queued",
  "created": "2022-10-04T20:14:12.000-04:00",
  "pin": {
    "cid": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
    "name": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA",
  "status": "queued",
  "created": "2022-10-05T00:14:12.000Z",
  "pin": {
    "cid": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
    "name": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
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
  "date": "Wed, 05 Oct 2022 00:14:13 GMT",
  "etag": "W/\"3dd68e81b938e575f37fcbc8d27b2c2f\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5e0edf29-f713-440f-912e-903e257015f7",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA",
      "status": "queued",
      "created": "2022-10-04T20:14:12.000-04:00",
      "pin": {
        "cid": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
        "name": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA",
      "status": "queued",
      "created": "2022-10-04T20:14:11.000-04:00",
      "pin": {
        "cid": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
        "name": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw",
      "status": "queued",
      "created": "2022-10-04T20:14:10.000-04:00",
      "pin": {
        "cid": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
        "name": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg",
      "status": "queued",
      "created": "2022-10-04T20:14:09.000-04:00",
      "pin": {
        "cid": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
        "name": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA",
      "status": "queued",
      "created": "2022-10-04T20:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
        "name": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw",
      "status": "queued",
      "created": "2022-10-04T20:14:07.000-04:00",
      "pin": {
        "cid": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
        "name": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ",
      "status": "queued",
      "created": "2022-10-04T20:14:06.000-04:00",
      "pin": {
        "cid": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
        "name": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA",
      "status": "queued",
      "created": "2022-10-04T20:14:05.000-04:00",
      "pin": {
        "cid": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
        "name": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA",
      "status": "pinning",
      "created": "2022-10-04T20:14:04.000-04:00",
      "pin": {
        "cid": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
        "name": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ",
      "status": "pinning",
      "created": "2022-10-04T20:14:04.000-04:00",
      "pin": {
        "cid": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
        "name": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA",
      "status": "queued",
      "created": "2022-10-04T20:14:12.000-04:00",
      "pin": {
        "cid": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
        "name": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA",
      "status": "queued",
      "created": "2022-10-04T20:14:11.000-04:00",
      "pin": {
        "cid": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
        "name": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw",
      "status": "queued",
      "created": "2022-10-04T20:14:10.000-04:00",
      "pin": {
        "cid": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
        "name": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg",
      "status": "queued",
      "created": "2022-10-04T20:14:09.000-04:00",
      "pin": {
        "cid": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
        "name": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA",
      "status": "queued",
      "created": "2022-10-04T20:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
        "name": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw",
      "status": "queued",
      "created": "2022-10-04T20:14:07.000-04:00",
      "pin": {
        "cid": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
        "name": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ",
      "status": "queued",
      "created": "2022-10-04T20:14:06.000-04:00",
      "pin": {
        "cid": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
        "name": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA",
      "status": "queued",
      "created": "2022-10-04T20:14:05.000-04:00",
      "pin": {
        "cid": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
        "name": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA",
      "status": "pinning",
      "created": "2022-10-04T20:14:04.000-04:00",
      "pin": {
        "cid": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
        "name": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ",
      "status": "pinning",
      "created": "2022-10-04T20:14:04.000-04:00",
      "pin": {
        "cid": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
        "name": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-10-05T00%3A14%3A04.000Z
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
  "date": "Wed, 05 Oct 2022 00:14:13 GMT",
  "etag": "W/\"e952f0c1a89ef0f7ea539af877e69075\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "385875c7-1d9e-46df-b7b1-e406d7da8e49",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "pinning",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
      "status": "pinning",
      "created": "2022-10-04T20:13:57.000-04:00",
      "pin": {
        "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
      "status": "pinning",
      "created": "2022-10-04T20:13:53.000-04:00",
      "pin": {
        "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "pinning",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
      "status": "pinning",
      "created": "2022-10-04T20:13:57.000-04:00",
      "pin": {
        "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
      "status": "pinning",
      "created": "2022-10-04T20:13:53.000-04:00",
      "pin": {
        "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
  "date": "Wed, 05 Oct 2022 00:14:03 GMT",
  "etag": "W/\"f8bd8bd937a044af64025ead44046396\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "4bd2dc76-cd1e-4474-9825-cbfe3afa3000",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
      "status": "queued",
      "created": "2022-10-04T20:13:57.000-04:00",
      "pin": {
        "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
      "status": "queued",
      "created": "2022-10-04T20:13:53.000-04:00",
      "pin": {
        "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "queued",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
      "status": "queued",
      "created": "2022-10-04T20:13:57.000-04:00",
      "pin": {
        "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
      "status": "queued",
      "created": "2022-10-04T20:13:53.000-04:00",
      "pin": {
        "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA
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
  "date": "Wed, 05 Oct 2022 00:14:15 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=gkvO3Ldtr8gHjSZyD75tqzZbDLwiILXv1%2BT7K%2F3AuOvfa50pvvlzlzhKGI9rDPa7%2B%2BLn1QS8EzhaaYhzS%2B2xGn%2Bkdxg2XoF4aq35AuiFJH4hfIIa48hExTzunEfh6vXnr3bz6pWeaFYs5%2BIfM23yy%2F8Grp3LEPEz%2FkVo96NwwUJjaXm%2FpWdIf45t6Z66ESkWgioCgLdcXEj7EkxE4EMzkfY9PBHgGL3YJ4mRKR4%3D--r4x5%2BjnuisKVRVN%2B--FstS8piRvSqYd%2F735UChyQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:15 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "188ea2d5-6ca3-4306-bb31-186201e8de88",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA
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
  "date": "Wed, 05 Oct 2022 00:14:16 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Xq0cSQlDHE9bSB0g4682fEwUgqKbOlggUp5EM4Nk6%2FyH%2B5eqM4R1CnbXkhczmF1dLIIYrVQxb9ol0mrMzj8HKTCgi7ErKE0JiK0tPW9NXpq4sEEFmQ%2B3eZXEoCdmIAlI%2BV2q0y4JZ4oDVc56pHSI%2BHs7TufKWh8z1tv2gEn7ySCL155dFpHbsiq3sYM8ulwbAln2tosQTDBDOI7huqEdocTR9sBa56sZyfivAME%3D--hU9JCrHCfePhLsdL--uR3RNEAGGF7WDnab1y50lw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:16 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d17eb1c4-19e8-4044-866a-b109b42b3143",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw
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
  "date": "Wed, 05 Oct 2022 00:14:17 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=GOiFwpyd7HRTnzcLiXiKHV1RusT17nszvYxoQSVRI1hvoetB6ekUjiIo03R6HAGg3tzCVC2XIqvv0RmOVwxT%2B9I0F8UZxjCxw6tYWbeaMH%2FHEkPUl%2BInbUjdYRDKdVzX7qJmgfdmbgGoQKjpz4wB%2B18gzP%2FR5AjwiF8c8U41r%2F3BKHEarq3SYDL8TiZPTNnzit8rJa5qQRnEMIxY5dT2WXRjigRGMg0h1ORA%2FoI%3D--nRAyratx%2Bca3lPkm--aWRugGkyVs%2BsLVm4NbFgLA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:17 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cab6878a-f00f-4c77-8664-5e51cfbf173c",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg
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
  "date": "Wed, 05 Oct 2022 00:14:18 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=DcFlC8Dnzlm5dhm4OMT5Z9SYsuP2RvJxQe%2BkG1U8E%2BKlDPzP9cP8Cg4rsDGEVM3zBaRjFWGjTxcoy3Fn1RWXlz25BffCmgiqXZ1DHBtm7jkO9qSdEB0g8copG0%2FLUy3wnd5YnUrU6dG7ec1yAMvqHGNAtLzQOK0hn9ZKWoar6RoggIMtNIotM6ok8y4JpHQYMZJInpjyUV1ULbdPJkxRVeo1njJ2DugH9ogfVQU%3D--e202i80eF6Nd7oYS--AMWv3FMADPx62vKBtsGAOg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:18 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "040fe5ae-b7c0-49bb-8069-c84b6f5eef15",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA
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
  "date": "Wed, 05 Oct 2022 00:14:19 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=CXpbEiDJ3gjlKo%2Fnydd1vUyg3sscfByUyP9dmZQkoSa9GgUR8K535EXnR7buce%2B4DssP7ay%2BVE3knj%2Fa%2Fo6Ta7vtc4QrUtY9j1haGkDq9m9pAe8tLyoWOO0l4MyjHcvswPZL1rG1Oy%2FcPMrr9m74JODJfaWIw0z%2BOPMiitJ0s3kv9azps8LXGCVEVwfi6kk%2FPVcH4%2BsztRxJ%2FHxssHOhyP%2Fpceo8X7EYKWB5Qpc%3D--UEbtrzbFcKy6Lb4%2B--UCSg%2FQYEzv5ZpXKmYvkAtA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:19 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "073ed895-1933-4a9e-876a-91d81795af84",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw
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
  "date": "Wed, 05 Oct 2022 00:14:20 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=mPneKK%2FqSU1q1XHbNGkVxjfCwJD%2F%2BDjhfytXNq5F16ATrCNfpJRwd5C22IA9KEll06CKSgUCPh55q%2BCfCK5moIupQOIUAxZIn0KSiOPuK%2FYtMLCD56tYsqrozYnVVCmrFuhnQanHq%2FOsHnNl8nqP8O7ZpNCJZN8dHnRuwOr9NEUpE8%2FIPmHGrEwM9Lg0dOmcf%2BuMR%2F3wCBYUTvjhCWiizSZp8pUgImrhEN%2Bj9Zw%3D--iIWyoPG5as8Wzc%2Fo--Qjq5v4Jp1QZXjm%2BxheBpFQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:20 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d841708c-cfcd-4a65-b443-b34a4047f5d9",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ
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
  "date": "Wed, 05 Oct 2022 00:14:21 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=cyaXBCRfMC3AH2DrZHykWl7w8dgsFYur%2FtjkdyHWJkIrW0d9k4p0CU5Yu4yZdErmzszMR%2FAKRBEaYfyBy6K%2FJDSbyHID908TA4NG5LnUzyefv3r9ttcwBqXhxvJhn5wlmOuXW3itWKm8oaXRZYXk5Y%2B%2BrkMpnRWeLohpgR5uDKunQoZzAWVJbY76D5hDwVYMygnSUNQOAxmblLA%2BeNuDHC0YSEb1Wv%2BmWsswwlk%3D--312ntYRlp3CJLX9r--M4XSHGXPbo84kHxmEJzISA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:21 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "017a45bb-1d4f-4f66-9871-1d3376b3a86d",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA
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
  "date": "Wed, 05 Oct 2022 00:14:22 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=yvFBQ%2FIxMW2Ab4A0Z7eiU%2FA1hik3n37O%2BhIAJ%2FrM7xTjQ2ePSDgvXSjQoSbLsRR%2BRO8tQWVvCY26tgnR%2BM0sI6qPx5ffGDahkcnN5DHdsHmUzNHyRkxF7c0VWkp%2FI8W9bDk52yxmHTY0m%2FdtlHOut%2BvoG2F6NsPod8d7yAnxgzKV8LIFu50Kx7W05rc1oQTmXK5VLGgJ84RwmoIGvTkT%2FSMQjLTTar3Dw%2Fq%2F7Nk%3D--2xEj7k6KZeRN8bhU--MrrXNeq2BJtVUF78r5qCdw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:22 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9e166099-2395-44b0-8590-30b227b8c48d",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA
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
  "date": "Wed, 05 Oct 2022 00:14:23 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=niO6nXJ0L%2FCTepHtbv8zsGXB0LIiJo2joUC%2B3Xs%2FjHn4HEPFTHXToh09qS7VTP%2FHuw2hxXA%2BnjBlDl7lOj659dImldleDoR0EVL81jKWmJRiJX87b2QcJ2LAOE0O%2BBA4WzRBYtg3BfYoWXp9b2mTdEFthFXWdYEo8yKitR6nxmharwuK6XltEmM2UpfBTUMxVoOiGFM9Tm57P0lrH%2FsTR4WTExuEbr6vFYK9dtk%3D--jy%2F%2BYYmTI6fNHrJ3--C1FYuNCrJFfI%2FKfuCQbfcg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:23 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a514a194-b3dd-4018-9334-10181e06f105",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ
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
  "date": "Wed, 05 Oct 2022 00:14:24 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=UMjxmg0z4EyGkfxCgYvH8PZxs2C5JjDMIJYifAPZ4Cw2YQScy1hmen1x45EWTytdkuXHVL83Vul8luyqP234U0%2Fgd%2BLSlgE67xFBvduSO8PbBGpLBFAN2aGw3zp9PlfmHpd0DmhvSBHdUthu4wihmZGbYcFSurdQnzGOxoGszlk30PiykQjUyel%2BpQE9Jlra%2B7GGAGj4Ayipmy4udYz87gvmw2VW6Pf%2Fv%2FGPpWI%3D--x4%2FI2UdynnhwJrek--Re1oxzVcqPFZegnkrz5ZAg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:24 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "84a8676c-5575-43db-8dbb-013684c7c86c",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ
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
  "date": "Wed, 05 Oct 2022 00:14:25 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=QDZfZh%2BPtejJSgzIoUsMI6u1jzydgvnNgms7gmeauC%2FOVslwNl06hE5kaLKswmi4BEx2cJvNh%2BIOE830BDWsV0970AfThnBKLz80iz63LvnD9dOXo2h7WAB0qEGlVkxkDHkkky3QExB4SJATqAv6CrGn%2FgMvD7nB5TSUw9SJjkK1YvrKd9DBeqh%2B%2F63qUNnd5dwZ6LHuHUxMYjImuMycwFQkv46csi3x0sZ0QAI%3D--kIUeJZqlb9Z8KNmR--74rq4BJbXzWyh5kis6J9IQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:25 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a4c027ed-d737-4377-8b58-21605a79ed23",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng
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
  "date": "Wed, 05 Oct 2022 00:14:26 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=MUTjHBszyZazFkLAxAZJpPmNDn9u125kVyRSQ3W%2Fsfp4NJeTsitcADsB0GypK8q1k7zB4JSGnkdKyarXMTN3JxOCSrRBYVKwUR9QV%2BMEQuIGKTYVO4tam1k%2F7b6XlAgOmtaL3zpaeNdSvWJ98zNafpU7M1Gm4zlt0TtGoqbC1RDROWStZVpDMiQvpm83BRbhvNwyPE1qXOhux5KS%2Bxh2yGbkWANY8iZSB7iY3Zs%3D--pMx2ymt1Hh%2B%2BQruq--CShYw6oO5HWw1G9Gfy3LZg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:26 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c46d5428-d13e-4b1f-acee-bc033c3296ee",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg
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
  "date": "Wed, 05 Oct 2022 00:14:27 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=Mwjin1PZgoUQN8fXx1%2Fdjrr1MbO9FZf%2FYdSdpSn0m6NRtR7r4AYUSg51TaNdk3whqa08GYQknHbe0KeqIsFIRnmRhFZFwA7yjOqndU1aB%2Fkpst1s6%2FgCI3QdEbvaEXBJqc8JNFdU6X2v3tx8jcSrcNNbePJAfMI7zK8wyzFMtnypbaKvBvJ2I2k3StQwr7bDZWmsOJ0zI59ZaeBnn4b2MDg4xOpKOkBsqBvzQ6c%3D--Ge3%2FEr3XXTbTd4r9--DNdKSZrulsKwaI%2FgexEFtg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 19 Oct 2022 00:14:27 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e84ffa2a-d119-4546-8eb3-aeb0fb83b9e9",
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
  "date": "Wed, 05 Oct 2022 00:14:28 GMT",
  "etag": "W/\"3438c5b0da51b073b4fa87b68d35e3b9\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b884293d-5e8b-45ef-ba28-8fd98ff859c4",
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
## Get all Pins created before 'Wed Oct 05 2022 00:14:04 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-10-05T00%3A14%3A04.000Z
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
  "date": "Wed, 05 Oct 2022 00:14:25 GMT",
  "etag": "W/\"e952f0c1a89ef0f7ea539af877e69075\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b8c5611c-fe2f-4c0a-8c25-534375a16aee",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "pinning",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
      "status": "pinning",
      "created": "2022-10-04T20:13:57.000-04:00",
      "pin": {
        "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
      "status": "pinning",
      "created": "2022-10-04T20:13:53.000-04:00",
      "pin": {
        "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg2NQ",
      "status": "pinning",
      "created": "2022-10-04T20:13:59.000-04:00",
      "pin": {
        "cid": "bafkreicnjpn7wrjfhfq2miv7jc23qcpmrx57uidjv3lemhvkwk5yk6fzwy",
        "name": "1e739598-4c31-4ded-81a5-8b780c08ec50",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg1Ng",
      "status": "pinning",
      "created": "2022-10-04T20:13:57.000-04:00",
      "pin": {
        "cid": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "name": "bafkreigpgb4wlz2tp3qreg7omds6r36tdahmh5grrefhxzmivx6jdsenua",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg0Mg",
      "status": "pinning",
      "created": "2022-10-04T20:13:53.000-04:00",
      "pin": {
        "cid": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "name": "bafkreiaaiea372zzd7rvw7xkdakdg4umqu4motwh5lkynyveh7apod46bq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
  "date": "Wed, 05 Oct 2022 00:14:28 GMT",
  "etag": "W/\"833f11c00834a861142f4dadb5f92cdb\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c5889a52-9947-4c0c-b51a-ac324dd03672",
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
  "date": "Wed, 05 Oct 2022 00:14:14 GMT",
  "etag": "W/\"d483038e9e83fa2886f81e86b0869e71\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "833d8f9a-af0e-4cc9-bf90-88a9dbfad052",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA",
      "status": "queued",
      "created": "2022-10-04T20:14:12.000-04:00",
      "pin": {
        "cid": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
        "name": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA",
      "status": "queued",
      "created": "2022-10-04T20:14:11.000-04:00",
      "pin": {
        "cid": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
        "name": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw",
      "status": "queued",
      "created": "2022-10-04T20:14:10.000-04:00",
      "pin": {
        "cid": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
        "name": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg",
      "status": "queued",
      "created": "2022-10-04T20:14:09.000-04:00",
      "pin": {
        "cid": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
        "name": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA",
      "status": "queued",
      "created": "2022-10-04T20:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
        "name": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw",
      "status": "queued",
      "created": "2022-10-04T20:14:07.000-04:00",
      "pin": {
        "cid": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
        "name": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ",
      "status": "queued",
      "created": "2022-10-04T20:14:06.000-04:00",
      "pin": {
        "cid": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
        "name": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA",
      "status": "pinning",
      "created": "2022-10-04T20:14:05.000-04:00",
      "pin": {
        "cid": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
        "name": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA",
      "status": "pinning",
      "created": "2022-10-04T20:14:04.000-04:00",
      "pin": {
        "cid": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
        "name": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ",
      "status": "pinning",
      "created": "2022-10-04T20:14:04.000-04:00",
      "pin": {
        "cid": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
        "name": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyNA",
      "status": "queued",
      "created": "2022-10-04T20:14:12.000-04:00",
      "pin": {
        "cid": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
        "name": "bafkreiakh34jgnjdgbxy6rkia3rhjgystctj5vv763zjznd6ieitd3nhii",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkyMA",
      "status": "queued",
      "created": "2022-10-04T20:14:11.000-04:00",
      "pin": {
        "cid": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
        "name": "bafkreihquhosmc3jylrmlns7hlzvbkd5yg5ukh2ucfrmdtl6yndc2h6jfy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMw",
      "status": "queued",
      "created": "2022-10-04T20:14:10.000-04:00",
      "pin": {
        "cid": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
        "name": "bafkreifucq223e6vdpvnij5dr2iu6j5h45hpgzzblnskbhxmxjwhuanbha",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMg",
      "status": "queued",
      "created": "2022-10-04T20:14:09.000-04:00",
      "pin": {
        "cid": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
        "name": "bafkreibiivu4n3cuggsptdgk2nu5ptq5mhmpj44c3qr6xcq4ffl3xh7ome",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkxMA",
      "status": "queued",
      "created": "2022-10-04T20:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
        "name": "bafkreiepm3b4bgyelaj23hrfescb3marhoviztpfp3mlurml7rnkvfavfa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTkwMw",
      "status": "queued",
      "created": "2022-10-04T20:14:07.000-04:00",
      "pin": {
        "cid": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
        "name": "bafkreib4472wfw7yhhzxq57odvvm7yyecrxus6ymfwp3zsyw46zzzkihj4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5OQ",
      "status": "queued",
      "created": "2022-10-04T20:14:06.000-04:00",
      "pin": {
        "cid": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
        "name": "bafkreietwtgyfplfg7urvl2jyubp7v6pur3iumti5v3sze62v5isy2immq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5NA",
      "status": "pinning",
      "created": "2022-10-04T20:14:05.000-04:00",
      "pin": {
        "cid": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
        "name": "bafkreidil6ofeg45simyimcwrnwlzj3uysa6rb3hza6z6hplxmnbp2xkta",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MA",
      "status": "pinning",
      "created": "2022-10-04T20:14:04.000-04:00",
      "pin": {
        "cid": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
        "name": "bafkreibzhaz5uizjb4ssejfqjnp7i2vsrb3dtcfacly5bdk3vyc5xreqwy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvMTAzODM0MTg5MQ",
      "status": "pinning",
      "created": "2022-10-04T20:14:04.000-04:00",
      "pin": {
        "cid": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
        "name": "bafkreiguinyiywy3rrasvqebplb7isueq4whbp47aoil3kebzvolaovx6u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
