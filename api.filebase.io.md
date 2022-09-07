
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2022-09-07T19:14:37.435Z

Revision: [108fdcb](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/108fdcb)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (9/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu'](#pins-post-of-cid-bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='029cf098-4efb-4dde-b170-e26ffb9a56cf'](#can-create-a-pin-with-name029cf098-4efb-4dde-b170-e26ffb9a56cf----success)

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
  "date": "Wed, 07 Sep 2022 19:14:00 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f3d3bd06-5731-4ca3-9f8f-c68b510104fc",
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
  "date": "Wed, 07 Sep 2022 19:14:01 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3ddd6b83-4d07-410e-9297-af6fdf8d0cfc",
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
## Pins post of CID 'bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu' - 🟢 SUCCESS

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
{"cid":"bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:02 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=H%2FIjvRcVeVlCsxRy4FcEBRfeVQ2w3ay4IyLyQHpow5%2FQFwV072lIKaLgfBWD0iuUARNFXt0dp7tDpcZTxvucWIkEA%2F8PdWYIA69EEbcMZOIqxBwmOCouZM28kCpAM9E5sVrV16ZYsmJspjZlm84%2BX5J7AuqHp1W70wz85xwivIqheWcwee3q%2B%2FqRbRyZ7d5vB81Auq6XbU2nEHgxT2KlfOjhTIiYo%2FetAbbRhcg%3D--LBNoySn0S5Kq3lQv--obK%2FKLFObE8hK%2FJop60fXg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:02 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9e694ff8-47cb-48ca-9f79-fd99b8d4565f",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
  "status": "queued",
  "created": "2022-09-07T15:14:02.000-04:00",
  "pin": {
    "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
    "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
  "status": "queued",
  "created": "2022-09-07T15:14:02.000-04:00",
  "pin": {
    "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
    "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
  "status": "queued",
  "created": "2022-09-07T19:14:02.000Z",
  "pin": {
    "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
    "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjk1
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
  "date": "Wed, 07 Sep 2022 19:14:04 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=R2swchD%2BFZUFOOuDb5%2BYbwuH82%2BdsopPWoifcHfAao0oqxmy9FA6lbT2rGKl2KeXnMCl6TIbz%2FCnucuraWtLludJCpq1WmzkPoxq3qzFSrIzCi%2FM3E3pG04%2FiDEthD8260pzQldhCjn3dVWgzLoQHcCwA%2B0BPsGDswGCF2vvvOKqC%2BeOQyilOE%2BIi2BAzWMuYcRNB3nPHgnRHYS3xK7w%2BPc3257rfQs51fMm%2Fbo%3D--nOEfRo5qfno3z9%2F%2B--bD%2FTOeAaKsma4K0i7V45dQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:04 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "694d4c46-07ba-4c57-bc50-b00e71b10b9c",
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
{"cid":"bafkreidzb3fsidt5hmnkg65tdzahu2uok73ohh2zg5gmhn4b72j2tyfcym","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:03 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=rrx7Fe0tP6OORknaG0LPtjkN29qHWomlRjj11NBWdA6ucyfgaqk2Ht13ShErVBma5teHEgWHAfi5shUgEXXvNF760%2FrRYfAnJSnLsR7pnDpdpShuu0gFQkYqV7B0JaDbIg2BCMwYl7TNc9sb7wtntmEtOI8RwU36aZg%2FE410Sg4oRbr2nYF6OUz%2B7o0%2FPSmj7P8B2%2FF4Oaf1Fp%2BTpvrziYov5NtMTnw9jnbKR0s%3D--%2Bgyw1SgZSg0pckCX--7Ohb1%2B22jOpurpXylWfUEw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:03 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ffda9173-c5b3-4dc6-b7fb-d3bc75f8011b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjk1",
  "status": "queued",
  "created": "2022-09-07T15:14:03.000-04:00",
  "pin": {
    "cid": "bafkreidzb3fsidt5hmnkg65tdzahu2uok73ohh2zg5gmhn4b72j2tyfcym",
    "name": "bafkreidzb3fsidt5hmnkg65tdzahu2uok73ohh2zg5gmhn4b72j2tyfcym",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjk1",
  "status": "queued",
  "created": "2022-09-07T15:14:03.000-04:00",
  "pin": {
    "cid": "bafkreidzb3fsidt5hmnkg65tdzahu2uok73ohh2zg5gmhn4b72j2tyfcym",
    "name": "bafkreidzb3fsidt5hmnkg65tdzahu2uok73ohh2zg5gmhn4b72j2tyfcym",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjk1",
  "status": "queued",
  "created": "2022-09-07T19:14:03.000Z",
  "pin": {
    "cid": "bafkreidzb3fsidt5hmnkg65tdzahu2uok73ohh2zg5gmhn4b72j2tyfcym",
    "name": "bafkreidzb3fsidt5hmnkg65tdzahu2uok73ohh2zg5gmhn4b72j2tyfcym",
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
  "date": "Wed, 07 Sep 2022 19:14:04 GMT",
  "etag": "W/\"c893223dbea30ebfa5737fe9feae4e5b\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "758077c3-cc0f-4ffc-83f3-1d60cedf951f",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
      "status": "pinning",
      "created": "2022-09-07T15:14:02.000-04:00",
      "pin": {
        "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
      "status": "pinning",
      "created": "2022-09-07T15:14:02.000-04:00",
      "pin": {
        "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzEy
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
  "date": "Wed, 07 Sep 2022 19:14:07 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "78ff9549-df79-4576-857c-f52c3298b955",
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
GET https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy
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
  "date": "Wed, 07 Sep 2022 19:14:08 GMT",
  "etag": "W/\"c4c3e5568b69a7c282f2feaf4a1f75e1\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e62d56fc-dc5a-4e88-886f-11bf42aa483d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
  "status": "pinning",
  "created": "2022-09-07T15:14:06.000-04:00",
  "pin": {
    "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
  "status": "pinning",
  "created": "2022-09-07T15:14:06.000-04:00",
  "pin": {
    "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
  "status": "pinning",
  "created": "2022-09-07T19:14:06.000Z",
  "pin": {
    "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
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
## Pin's with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzEy' can have cid 'bafkreiaad3zg7bibzedxiqu2n5ngr6grhnwxa3lnugxtgw66fyfvnlzlbm' replaced with 'bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi' - 🟢 SUCCESS

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
POST https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzEy
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
{"cid":"bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:06 GMT",
  "etag": "W/\"70dfb6f1459a65cdf9065d2454620efc\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=G6Z5NObO59AU3U%2BepzoquOGAFqPanE3RB8obGjXLwmbrC43YOmCiI8d%2FFoOpRVfMlUcvGoFJZf5j77O0L9if393eAit1JpB2N3K2nDS8vdGbnGtvYKNFxN0qjB3pB4dKAhKKY%2Fv818uWzQKxeP5rOgHqs9nSf6Oh%2BLqwMNoj5%2BECn8LkAMEWehooYn2eJ7dKIY7BhR32azBgQorC2C8JC7Rb02El6HdMSQsxSbc%3D--n4w%2B3FYZ3i%2FrKJN4--44CVVJ7X6Tt0T5Xa6K%2BdsA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:06 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c786d187-1121-4fbe-834f-16ce40b68fe9",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
  "status": "queued",
  "created": "2022-09-07T15:14:06.000-04:00",
  "pin": {
    "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
  "status": "queued",
  "created": "2022-09-07T15:14:06.000-04:00",
  "pin": {
    "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
  "status": "queued",
  "created": "2022-09-07T19:14:06.000Z",
  "pin": {
    "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
    "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
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

  🟢 Could obtain requestid from new pin (Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzEy) (success)

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
{"cid":"bafkreiaad3zg7bibzedxiqu2n5ngr6grhnwxa3lnugxtgw66fyfvnlzlbm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:05 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=PATYLJhCGSc49A78r8K1FBbiDp64ucqHwue0Sh9331emiWmNycLMlMOKFE4D1bcpqgg4oKYa3LZb9PkYVe%2FWsDTytPNOgxCyLhTgRtHcHPP25i9BT90Pq8VQX%2FRWie8MFFqPwiUu5w5J2JABzLrrAkCU%2BBulQ1oE1xc%2FslWm0oHimaF7boR65x7czFr%2BN3Gf%2BvFVQ6EZcDRjEsjvsTj9amUhvslkBtMU24xHMD4%3D--BFPE9wVkl9jT0%2BAa--n2psxDo8gcXWvf8FPu15tg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:05 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "70fb617f-eca2-4a61-99f4-55f676c90eb2",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzEy",
  "status": "queued",
  "created": "2022-09-07T15:14:05.000-04:00",
  "pin": {
    "cid": "bafkreiaad3zg7bibzedxiqu2n5ngr6grhnwxa3lnugxtgw66fyfvnlzlbm",
    "name": "bafkreiaad3zg7bibzedxiqu2n5ngr6grhnwxa3lnugxtgw66fyfvnlzlbm",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzEy",
  "status": "queued",
  "created": "2022-09-07T15:14:05.000-04:00",
  "pin": {
    "cid": "bafkreiaad3zg7bibzedxiqu2n5ngr6grhnwxa3lnugxtgw66fyfvnlzlbm",
    "name": "bafkreiaad3zg7bibzedxiqu2n5ngr6grhnwxa3lnugxtgw66fyfvnlzlbm",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzEy",
  "status": "queued",
  "created": "2022-09-07T19:14:05.000Z",
  "pin": {
    "cid": "bafkreiaad3zg7bibzedxiqu2n5ngr6grhnwxa3lnugxtgw66fyfvnlzlbm",
    "name": "bafkreiaad3zg7bibzedxiqu2n5ngr6grhnwxa3lnugxtgw66fyfvnlzlbm",
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
## Can retrieve pin with name '029cf098-4efb-4dde-b170-e26ffb9a56cf' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=029cf098-4efb-4dde-b170-e26ffb9a56cf&match=exact
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
  "date": "Wed, 07 Sep 2022 19:14:09 GMT",
  "etag": "W/\"7460218b1892c95e0f5e9fb718d9ab0e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "dd905536-5cfa-4c57-bbe1-30a5765ad96d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '029CF098-4EFB-4DDE-B170-E26FFB9A56CF' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=029CF098-4EFB-4DDE-B170-E26FFB9A56CF&match=iexact
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
  "date": "Wed, 07 Sep 2022 19:14:10 GMT",
  "etag": "W/\"7460218b1892c95e0f5e9fb718d9ab0e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "81e6026c-eed1-4860-ac32-f9ef682730ee",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '4efb-4dde-b170-e26' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=4efb-4dde-b170-e26&match=partial
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
  "date": "Wed, 07 Sep 2022 19:14:11 GMT",
  "etag": "W/\"7460218b1892c95e0f5e9fb718d9ab0e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ac79e7d8-e813-4498-9922-f3968dfaf436",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '4EFB-4DDE-B170-E26' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=4EFB-4DDE-B170-E26&match=ipartial
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
  "date": "Wed, 07 Sep 2022 19:14:12 GMT",
  "etag": "W/\"7460218b1892c95e0f5e9fb718d9ab0e\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "37eacd77-c567-4b1f-9a14-28a13eb9d9db",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can create a pin with name='029cf098-4efb-4dde-b170-e26ffb9a56cf' - 🟢 SUCCESS

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
{"cid":"bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa","name":"029cf098-4efb-4dde-b170-e26ffb9a56cf","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:08 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=udiFdczz9i3ebcPENvNcs%2BHsEOT%2F60th%2Bhj%2BtoE%2Bvq0EvqXm%2B9oWe4r%2Bh%2FAhmHzQ%2FjW9MFpFHzCZcL0V%2BNDEfJRlTQFPrEXbxrEVPWIJxxlx9boshfCX3xXBXPKWOHsTwLhpr3wAsiD5%2F6GcqPcOJjUbbkYNrH3%2B7gBigeBm4%2FS%2FcjqXY1U%2BUua6fB9YeyGZbSy1U3Wx5ED7GixUJMKr54SiUXCo4mbkkGmcUhM%3D--J%2Bwx2DRHzT7mJYxL--iuHL8FzvvWwbWVkDcXpfdQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:08 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "4c3ab113-fed3-4fa1-b214-236899b58f30",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
  "status": "queued",
  "created": "2022-09-07T15:14:08.000-04:00",
  "pin": {
    "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
    "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
  "status": "queued",
  "created": "2022-09-07T15:14:08.000-04:00",
  "pin": {
    "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
    "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
  "status": "queued",
  "created": "2022-09-07T19:14:08.000Z",
  "pin": {
    "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
    "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
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
## Can create new pin for testing pagination cid='bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce' - 🟢 SUCCESS

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
{"cid":"bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:13 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=JmbRDcALtbjNnY%2Fdlrx3pa48XAyUsKEOn4L2mNFlNOZIhdkvMiXAdWk8Xtln3EIcM%2BUN9dVLUsZFjcjEdstrUv6PxdMvSjmsdHZlmr3DEa4VqXdueFX5mFoP4AnftA3UD7SA91HjyadS4fvFQdiMPGR2iLb3TWCjt7ryy9ars6BuY7DXi1FcQWTn0n7eEbOUJq46b9cOSvk9V0MkhAFOt5%2B4f7O4guI4jZuOITY%3D--3rOIEIDVrYcoDkrF--e4jhAr3eZ%2F%2FGa9lFNRnFww%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:13 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cf81a62f-b229-4e44-ad0a-58b02b5af1fd",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz",
  "status": "queued",
  "created": "2022-09-07T15:14:13.000-04:00",
  "pin": {
    "cid": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
    "name": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz",
  "status": "queued",
  "created": "2022-09-07T15:14:13.000-04:00",
  "pin": {
    "cid": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
    "name": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz",
  "status": "queued",
  "created": "2022-09-07T19:14:13.000Z",
  "pin": {
    "cid": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
    "name": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
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
## Can create new pin for testing pagination cid='bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi' - 🟢 SUCCESS

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
{"cid":"bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:13 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=FLPVRNPSt6pGYNoAyUuPRk1sSFjB8a61gZZZAqZ9h%2BQw0YWh8GdQg0j9wtXFV94Lub7juHSe2tqRFrAN4bW3QGqLKadiuPUFYA07xDZbwb0R%2Bv2sDqy%2FwvhvEQd6KVoagjoR5YnzuZsa%2Fd3S3Z5rYIWARNXZP52tdvduzlLqeSJBlyJMOm5DZd2T6lBk9UgeA22YTyg8qPGTdxVwRXtk6g2b72bnufAvTo9vgAo%3D--28qi27LiOmMjQan9--IwuHwte9RSVOBORNMo80ag%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:13 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e04c3790-19b1-4164-a946-f519eee546dd",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0",
  "status": "queued",
  "created": "2022-09-07T15:14:13.000-04:00",
  "pin": {
    "cid": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
    "name": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0",
  "status": "queued",
  "created": "2022-09-07T15:14:13.000-04:00",
  "pin": {
    "cid": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
    "name": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0",
  "status": "queued",
  "created": "2022-09-07T19:14:13.000Z",
  "pin": {
    "cid": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
    "name": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
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
## Can create new pin for testing pagination cid='bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a' - 🟢 SUCCESS

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
{"cid":"bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:14 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=zXnN%2BJ7OIR1ihCu%2Fzsi5sNXfWOsVdHnwfag7Y%2FC40oVoEzGqVjFfXKOnC9pf3tJS57f7QrnnNAwveHuqVDjH85W0j%2FLhfLqLuvEZFX%2BiaZwGeZoqUbfGXmFX5FLkesN3dqMe%2FooyqiElUTQD%2FJF3ljw68QEQPuR1Com6sc6kN8BRB0X%2F6HySlrrVUnxa6tmNvy0YSSbYQjqjl5FqRavZPSQc7te9Gnoempf1ph0%3D--9Xkyt6pbjxL5Tk4u--Vol3HMwc3kdjdHXgWwtD9w%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:14 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "25312a78-8649-436c-9cd2-0c1f4467ad76",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx",
  "status": "queued",
  "created": "2022-09-07T15:14:14.000-04:00",
  "pin": {
    "cid": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
    "name": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx",
  "status": "queued",
  "created": "2022-09-07T15:14:14.000-04:00",
  "pin": {
    "cid": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
    "name": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx",
  "status": "queued",
  "created": "2022-09-07T19:14:14.000Z",
  "pin": {
    "cid": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
    "name": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
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
## Can create new pin for testing pagination cid='bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4' - 🟢 SUCCESS

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
{"cid":"bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:15 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=eN26jm8l1Z6Q9dsjCeP1CdV3Frc6mTk4Hd4lgzmlQuiHltuy%2Fp7EL6E081%2Bn7Fo6gXMvQd%2F%2FK69vNMuNIOC2QIXQqSIQnGZrcNhVthZnXAqkQ3X4iXbK%2BMuyAwDgj5DY2bY94OpVJGhfjoA34IZqEJOH4cu%2FYHZ7Z3RwaDPzIjG3KylstpbXAZDu2s2vf9y83Tyt%2ByFYLOAfMru592X0Xxk7jT4gPZ8Fa8GI09I%3D--kbPJ9u%2Bxg7iKAqw7--ChMny5IF2wnyvmySo0iviw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:15 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "33a0089a-ecb7-4884-a7c1-a8aba7064634",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1",
  "status": "queued",
  "created": "2022-09-07T15:14:15.000-04:00",
  "pin": {
    "cid": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
    "name": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1",
  "status": "queued",
  "created": "2022-09-07T15:14:15.000-04:00",
  "pin": {
    "cid": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
    "name": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1",
  "status": "queued",
  "created": "2022-09-07T19:14:15.000Z",
  "pin": {
    "cid": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
    "name": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
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
## Can create new pin for testing pagination cid='bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze' - 🟢 SUCCESS

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
{"cid":"bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:16 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=X6VjUKlyPFLt8l52Avy0VfCBXxsOGVhnQVk9KUcTUiwq4L5UfLYDx0jMHNocXBDWvZ6ecn4ikTf8SDCGLGT1%2BSuyR3kXOFiKrs%2F1VWQx%2BQVRfW7qNnBdrG%2FefYWh8HzQ%2B8PqGCocWCDp5JWWlsJcMX40WMHo0%2BoCnn2vl%2FZwOYV3BYIKuE%2BFn58TzIe76479M7Q5xKeSXEY2YrDXZy3AOPTZbQDQ7mmJFGR2Czg%3D--Ejcd4IpUEa7950e6--HrZckhL0naS9uuMXT6Qhdw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:16 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7fda0b30-569d-4d16-9c47-481c341dcc91",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4",
  "status": "queued",
  "created": "2022-09-07T15:14:16.000-04:00",
  "pin": {
    "cid": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
    "name": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4",
  "status": "queued",
  "created": "2022-09-07T15:14:16.000-04:00",
  "pin": {
    "cid": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
    "name": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4",
  "status": "queued",
  "created": "2022-09-07T19:14:16.000Z",
  "pin": {
    "cid": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
    "name": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
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
## Can create new pin for testing pagination cid='bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq' - 🟢 SUCCESS

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
{"cid":"bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:17 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=aLXQhVJC3%2BUVX4uASxec881kkvoehhHEUIMOQA2yMUQI04f28fb92e3n3iuIQ3IwO7B2eaJQiv2pvATlIW2cgDnmOza3s9hBBmEGSvFzdzfJpoRKQKpW0TW3hMN0Ts4SFoQ7cvOQ4A1z8V5Us5ZtytVSZ3%2BYpSQRMtqVRLyeo6NH8ndG%2BPNVIOD17jKf0qyqltIyBI%2Bztfi%2F%2B8ybU63Gg03MNMu%2F9ebFxxope7g%3D--fLWajCnzRB7rQrGQ--U4q%2FZu71iu5ggtpbKEQAeg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:17 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "348909f6-adc8-4acd-80d8-cb3534f429b7",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz",
  "status": "queued",
  "created": "2022-09-07T15:14:17.000-04:00",
  "pin": {
    "cid": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
    "name": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz",
  "status": "queued",
  "created": "2022-09-07T15:14:17.000-04:00",
  "pin": {
    "cid": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
    "name": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz",
  "status": "queued",
  "created": "2022-09-07T19:14:17.000Z",
  "pin": {
    "cid": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
    "name": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
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
## Can create new pin for testing pagination cid='bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae' - 🟢 SUCCESS

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
{"cid":"bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:18 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=bSye5DgP6ffvWVSF5gaaFVvsOC8W0vkaC7bnk%2F3cGtadOf%2FfAMQwIrXCA1xYdgI8prvDa5GRLVoOPJFt7XtmEuHTYNQwt2YgvBIo6dj30Ux9RukVN2rD6R79a2bsfexlBkul%2B6RddrXEb7sD20%2BF6HNVZDMxnsF3csdJg%2BLpH06gIqJrjow93gFXroInShoYU4Vf7eect52A3%2B32tANPasni%2FnGf5CYfGHX3tBU%3D--WQyh2bWnBM%2Fy4kmd--ajFbuKC5vCOIppDL7Bg7Kg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:18 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "683de48a-9cab-4485-89d7-25e81e9e11df",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4",
  "status": "queued",
  "created": "2022-09-07T15:14:18.000-04:00",
  "pin": {
    "cid": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
    "name": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4",
  "status": "queued",
  "created": "2022-09-07T15:14:18.000-04:00",
  "pin": {
    "cid": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
    "name": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4",
  "status": "queued",
  "created": "2022-09-07T19:14:18.000Z",
  "pin": {
    "cid": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
    "name": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
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
## Can create new pin for testing pagination cid='bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy' - 🟢 SUCCESS

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
{"cid":"bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:19 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=ZWMBWlndkKcrDn7h4ziY8o%2B3rd68Vyajdoo%2Fi9WpyMGBVKAERIXTo97V%2Bt5luSejlUE0MX94ugLPKkFzAA3sZUmx2pt7Zvtp7u5hz85gz0UrdUotuXJlfB%2Bh%2BIyWReuHA858BAUO%2FVasWAQN2Fm6t3H6Pv2%2FFbnYzt17mTq6QtaHBqVKqivHX2b%2B893RluRoePRzu1JqSZgt3cCGThcrqYkhkBHGEr%2B8t6L%2FBQw%3D--0e9V6os3bU5A%2FU0X--8pbhHktFIMDbsmKAqz8fuQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:19 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "075a69a2-0c95-4f67-ae90-edbb8f9d22ff",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0",
  "status": "queued",
  "created": "2022-09-07T15:14:19.000-04:00",
  "pin": {
    "cid": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
    "name": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0",
  "status": "queued",
  "created": "2022-09-07T15:14:19.000-04:00",
  "pin": {
    "cid": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
    "name": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0",
  "status": "queued",
  "created": "2022-09-07T19:14:19.000Z",
  "pin": {
    "cid": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
    "name": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
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
## Can create new pin for testing pagination cid='bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e' - 🟢 SUCCESS

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
{"cid":"bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:20 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=M7hGr255fwFAys5OpirJ4q43ewy5z9UDbctty6qdV8G2CzmQ%2B6MyWQeDqcYyPoCzfPIMAj00LJyGphhO6NSGI7JFT4KWp3jTcM7oRe0ZpvAqN%2F%2Bb45JkdPYav847MTuuitxjJ0e2NvEdovInpk%2FuYcEzedemnq0AVzm3vLdCFdBCI5ZxeIdEtIq7Lp%2B2uRdGyOyjBRSAe1ur5Z4FiP%2FOx2QBcZQ1MF5PrTyXdiQ%3D--2wxM3LpSs5lZ1HGr--XXzQOPsRfdG7JBtfL1DZ6Q%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:20 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5c8e56c5-c49d-4bda-9a4c-12e7f09af594",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5",
  "status": "queued",
  "created": "2022-09-07T15:14:20.000-04:00",
  "pin": {
    "cid": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
    "name": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5",
  "status": "queued",
  "created": "2022-09-07T15:14:20.000-04:00",
  "pin": {
    "cid": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
    "name": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5",
  "status": "queued",
  "created": "2022-09-07T19:14:20.000Z",
  "pin": {
    "cid": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
    "name": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
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
## Can create new pin for testing pagination cid='bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii' - 🟢 SUCCESS

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
{"cid":"bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Wed, 07 Sep 2022 19:14:21 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=OD3OMjolacpuFcZ6BTdEH5pMUi%2FARR04kghhXx%2FGdtoTgO9MWkLt2E%2BfVuRJcRdPXIJAR3C8tyzpz8FRpJdQOYg6tdJ28QzUYeiK3EIsKmgJRdUIvvWT4ag8T4A4vYt6jyZRqMsg8CNjcuiF3syVr6yHi8uWsr15%2BUh6jncqOx6fcepKLUjhXOXaC8XFKlITPPy%2BmJcv0v6xh1%2FIXba48DN1chdSWfv5yC2JHP0%3D--fSq8f3ArYNgAwyzO--uxc8YUo6WLo%2B0r3ykeWU2g%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:21 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "59b8d134-68eb-41ec-9d30-abee61c69a23",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz",
  "status": "queued",
  "created": "2022-09-07T15:14:21.000-04:00",
  "pin": {
    "cid": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
    "name": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz",
  "status": "queued",
  "created": "2022-09-07T15:14:21.000-04:00",
  "pin": {
    "cid": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
    "name": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz",
  "status": "queued",
  "created": "2022-09-07T19:14:21.000Z",
  "pin": {
    "cid": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
    "name": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
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
  "date": "Wed, 07 Sep 2022 19:14:22 GMT",
  "etag": "W/\"a577dadd7e1974df0b121b1e576c8554\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "30370e65-7ae5-4bf1-a652-22d12a8bbdda",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz",
      "status": "pinning",
      "created": "2022-09-07T15:14:21.000-04:00",
      "pin": {
        "cid": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
        "name": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5",
      "status": "pinning",
      "created": "2022-09-07T15:14:20.000-04:00",
      "pin": {
        "cid": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
        "name": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0",
      "status": "pinning",
      "created": "2022-09-07T15:14:19.000-04:00",
      "pin": {
        "cid": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
        "name": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4",
      "status": "pinning",
      "created": "2022-09-07T15:14:18.000-04:00",
      "pin": {
        "cid": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
        "name": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz",
      "status": "pinning",
      "created": "2022-09-07T15:14:17.000-04:00",
      "pin": {
        "cid": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
        "name": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4",
      "status": "pinning",
      "created": "2022-09-07T15:14:16.000-04:00",
      "pin": {
        "cid": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
        "name": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1",
      "status": "pinning",
      "created": "2022-09-07T15:14:15.000-04:00",
      "pin": {
        "cid": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
        "name": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx",
      "status": "pinning",
      "created": "2022-09-07T15:14:14.000-04:00",
      "pin": {
        "cid": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
        "name": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz",
      "status": "pinning",
      "created": "2022-09-07T15:14:13.000-04:00",
      "pin": {
        "cid": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
        "name": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0",
      "status": "pinning",
      "created": "2022-09-07T15:14:13.000-04:00",
      "pin": {
        "cid": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
        "name": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz",
      "status": "pinning",
      "created": "2022-09-07T15:14:21.000-04:00",
      "pin": {
        "cid": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
        "name": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5",
      "status": "pinning",
      "created": "2022-09-07T15:14:20.000-04:00",
      "pin": {
        "cid": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
        "name": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0",
      "status": "pinning",
      "created": "2022-09-07T15:14:19.000-04:00",
      "pin": {
        "cid": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
        "name": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4",
      "status": "pinning",
      "created": "2022-09-07T15:14:18.000-04:00",
      "pin": {
        "cid": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
        "name": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz",
      "status": "pinning",
      "created": "2022-09-07T15:14:17.000-04:00",
      "pin": {
        "cid": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
        "name": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4",
      "status": "pinning",
      "created": "2022-09-07T15:14:16.000-04:00",
      "pin": {
        "cid": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
        "name": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1",
      "status": "pinning",
      "created": "2022-09-07T15:14:15.000-04:00",
      "pin": {
        "cid": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
        "name": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx",
      "status": "pinning",
      "created": "2022-09-07T15:14:14.000-04:00",
      "pin": {
        "cid": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
        "name": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz",
      "status": "pinning",
      "created": "2022-09-07T15:14:13.000-04:00",
      "pin": {
        "cid": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
        "name": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0",
      "status": "pinning",
      "created": "2022-09-07T15:14:13.000-04:00",
      "pin": {
        "cid": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
        "name": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-09-07T19%3A14%3A13.000Z
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
  "date": "Wed, 07 Sep 2022 19:14:22 GMT",
  "etag": "W/\"ad64e1520555ab63c0f9e6c2da151a6d\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6b918c1f-9784-4a67-9e68-e95409425e7e",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
      "status": "pinning",
      "created": "2022-09-07T15:14:06.000-04:00",
      "pin": {
        "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
      "status": "pinning",
      "created": "2022-09-07T15:14:02.000-04:00",
      "pin": {
        "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
      "status": "pinning",
      "created": "2022-09-07T15:14:06.000-04:00",
      "pin": {
        "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
      "status": "pinning",
      "created": "2022-09-07T15:14:02.000-04:00",
      "pin": {
        "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
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
  "date": "Wed, 07 Sep 2022 19:14:12 GMT",
  "etag": "W/\"ad64e1520555ab63c0f9e6c2da151a6d\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "544b55ee-ba23-40b4-a70e-1c0b6ee36bb2",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
      "status": "pinning",
      "created": "2022-09-07T15:14:06.000-04:00",
      "pin": {
        "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
      "status": "pinning",
      "created": "2022-09-07T15:14:02.000-04:00",
      "pin": {
        "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
      "status": "pinning",
      "created": "2022-09-07T15:14:06.000-04:00",
      "pin": {
        "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
      "status": "pinning",
      "created": "2022-09-07T15:14:02.000-04:00",
      "pin": {
        "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz
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
  "date": "Wed, 07 Sep 2022 19:14:24 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=lWYYtrJGhiXVFDzb3WMY50Ilq36hqHJmILSF4xZBvGC83Ew1s%2B9Algfn5Bl77e01YToA9sy1JaFwyvWxhRUTtUqV7x5AcbeZQPtI5OdGBAAL9bvWIfK6nxrze1KR73pY6MJLP8MSvccm2CiA1%2BS4%2BT7PNtdHTW5sd4UmbBB8xd6KZimx9qvxAQJ9UMsZ4l%2Blgib4lV9Eley8R0EW7PppDK%2FLVOI8FgftOT1zyvI%3D--OFHTAIIoxqNjm%2BOW--LcV%2Bd5VGYv7oyBElOts4Uw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:24 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f32ac874-87a8-42c0-a627-aaf5043ae34e",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5
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
  "date": "Wed, 07 Sep 2022 19:14:25 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=cm3LoMHezdAAuSNbl6bHMw5qJNJ6OAr%2FQPKGJ6nH%2FrzcsNABWlHRUvvGxMKYgTPGZzVaA6HxjJza5kUMTr3D%2F%2BeY%2BAxoei7BVM0XmtWmqpdXT95L3IqsDi9lNVEltUpHbxFp6gXK2w7XyioVsnOhnB4my%2FJIdlMweHjSNHQ4NLxPH9c7RhXqgcGfDN1k5aQBCmGZjjFxRcJ8g6Uqzan02rQZXyd85HfLQo72%2FH0%3D--HQZRL7gtf5r9K3u7--YI0UgvNPlcUsq3nckuP6RQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:25 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "af4396d7-d1d3-4361-8ff6-49e719ea39c2",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0
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
  "date": "Wed, 07 Sep 2022 19:14:26 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=PZMedykI7xHww6IgiAF8n28iwvi0eD2qYhpzPc87Zg5qV4CznJUIa%2FnD5AzQLIyjCUhG%2FlW4r0vG%2BuxDZsWOZnb9syFMI8B9AY5dPoxfDmhWca1UV2c6zME6eLS7MQHquM3zYsxw%2Bxvef7Z7A1KRbhVYLV0TCDxzTZH2iawjwN7OgYGSR%2Frrv2j0SmJHPoh2yi7myerXmGXGHArR182gG7iCvihVBEbY%2FQ7jFxc%3D--ZAfkrBpRmraDDTHd--vfPqdEnN6PALQ45qgH%2FgHQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:26 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8c53995d-cbbe-41a4-bf57-ceb5a313ddb7",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4
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
  "date": "Wed, 07 Sep 2022 19:14:27 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=%2BIiS2Fvr8OHYSL3hkWyesbakhJuyn2IAd8XHs%2B7Eht8lnargM6I6cU%2F0DndA9LVUCii0k7JMKolry4LfjzAzoGjucSbGK9%2Fgu3dnQcghN4uBwcyFUlb7FkhhXPBODOgFvBQ097epdUPZvAx4XC91QNeb5y%2B1zHOsiGv3wUc58QEjN4p%2Fv8PTC92FIu%2FM9Iz6OQlOO1GSUaSXcUdtFp%2BbHUdGfKllXrtqynpCdM8%3D--%2BfrxCnAEKibkdp5Y--js%2BY8iJ8AqbALZGgl0P%2Beg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:27 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "782ec7aa-9034-4697-a9a3-b2b073f68612",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz
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
  "date": "Wed, 07 Sep 2022 19:14:28 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=sj0%2FhBXwjjGkXyTv%2FA0nGNfO85L8Ipzo%2BL9IknH1ibh2DN3Mzyh6MNsD4RlVTSbKUGZ9FtzDtAFTpUsHYZyTqdUkHYFRe9k%2FLbhgAfhVINXzSb%2BrIMwvkyFTxhGusn%2FJ43T%2BVR5TS4pfuWZ%2BXwgpp4Hpy8%2FOz%2BWPi5As1mNpUG1zRbGoeOqTRVCKFY7IpIGLee4WToH%2BssRHAQMNKQcTqmKmfhO%2FapiS4PV350M%3D--h66rnJCn37rj5yoI--4tJFViV4kPn2HSBBT%2F228A%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:28 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "25959ea3-a0bc-43df-b7c5-12f9a73eb3bb",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4
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
  "date": "Wed, 07 Sep 2022 19:14:29 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=avo7fYj1iATvLd%2BjSE7NWNoIF2x1n1adbag0iNqk%2BKA%2BD9ATNw04aktItk01H1rjVMAeYEnsyqZMkAfU2AwwAEcPKLHNIbAmBRxZi0KV%2FIkJfpNK7eQI5aAzO9dRk5BVW5TSedDZgNJ46FLaufdOk8zhZImzUCl9Fuxn98mDePUGmDUb0JUzP2hjHBaDP6vBtdJlQ3LqmNo2PBP4tFikH79%2FKQF%2BRfcdBigE47s%3D--yBQG%2BtJWU%2Btp1%2BFE--dAiRJ3JfSR5uYsAjJeb8PA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:29 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "53b9146b-dcad-4d0d-b8a5-66c33cee2b8e",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1
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
  "date": "Wed, 07 Sep 2022 19:14:30 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=RL3FXzjKMp%2B6%2FFNH4ioWTOQmW%2BTzMZDkxZeFNDGPBemMZBSta%2BdsLmCyjEZmwdk5SHq0DDxFX0Fxl6sAU78SWtqnD3mrvJHUtmGmSQYPOgvhmUHcZJl3qg9%2Bk71PunzD6lKhvJ3FoYx4Jzsd%2FmWOocCQY80ksmgV811bvNgyWe32xZr98RGu0lFQFnF5vExho%2B4hxD4%2FgMZVF49LlYgfln6jZw2WcD7EsXIGj%2Fk%3D--qAbqlnZ9KwDZalfC--CnZqp09R7x5k6CSbkOZVYg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:30 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e22bce25-e573-4cf2-aadd-b943ffcdccba",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx
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
  "date": "Wed, 07 Sep 2022 19:14:31 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=n5K2tdMhYmVx97u3vgU5oSaJ9LMZnMknASglwjQNe2eP4tnnml5yfN6zGXMC4XwHUKhe7%2BNuBw0MvOaEJjhWxeh0mPB3eDezzhaoKeA9AEOxsZv3gi%2BtUbOyEpzq11q3ZgJxFTIBpWQR4ZZjByYJFD%2FKjBNT%2Ff5TCWNMERuhms%2B3LVvT9MMUVhn8awflDgIttTmno8l%2B7I58T5dDFYNA7pBHtjBt3WpvZ4vr00Q%3D--IiaP2k3IHpqqVzZa--UPr78ej%2Bth8HuJJlNXkZlA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:31 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fd2ac18d-dc25-4192-a92c-9a8083e6ceab",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz
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
  "date": "Wed, 07 Sep 2022 19:14:32 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=WDbYGTLBNHuf4x7ASYjMzKlxYzNreRBLvCkN3yoXs%2FgIwPfT%2B6KBg1y%2Fa2qesZSdN%2FtxYlMfgd7ijVxzPukYAjTSrZJ8EDtzkCPW185LcpxXnCMEzBLRf18fDzrPDiEtxwKd317ySk9US6WIDZxcND6qSBNvmWZ%2FNKpp60ujcBo6pTRT9iwdmsEI0YLQ7%2FMwJWPFZSxb69FHCYDfjN7ocgfcxC2GG4kxITOAYz8%3D--Va1cVn8m0P886p%2Bo--9ge2w7GdR62b%2Ba%2BOeBlr2g%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:32 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "02494dc9-2266-4840-afb4-a49250b1d252",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0
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
  "date": "Wed, 07 Sep 2022 19:14:33 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=HsIpjYzEaVJop0sF2mPV30td3q%2B1hy22wQKTELDJpdB2xbPC3%2F9Ptah58gY4gHoK7vrBlICVVRY%2Fm1GuXGUdYz6Qal2e9jICUP6zr3qg6u0H9esNP6hr0bSqlLAIFbPHFeSrznHd2nm29H424%2BBag2DUIR1CWaxTkZIJvWFSMSzWh91SH5YVwH1gpBwtzQfUZ3BUggsSlrkxcojazlm%2F8Fx4%2F%2FdfO7WhoOeZxEg%3D--nVJ0NZnzSexZNd%2Fm--uXd8l4MtXMYE970MIw0hDQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:33 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a7fe4537-58b2-405f-9c66-c428c60d663f",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2
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
  "date": "Wed, 07 Sep 2022 19:14:34 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=ziL7RO0QYsePLLrS%2FY3Pdd5UxUzGHUnGVwp0VaxLcVt2ky70YuaEMMsEf6dGDpcOxjPjxHZCzUqRaYaJQIjYnaIi6Oor0YKEJShsVDDcIiLd60dVVZFArhezLoldLqfYgGjU9J%2FjciIyMtI0G45cbjLtrv%2BDYS4RnwktIzKrGGt49U%2FIdoGqaNhDSYLUWvkJXGKgKQ9jF5d8c0Vl7T5SUf4yCQybM4%2BKQ61eyqs%3D--EK0W7Bbco%2BnNrFqc--Nv62sqH7EPQXG8kzoNkYBg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:34 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a7602575-2c3d-41e7-a361-dda288a27daa",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy
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
  "date": "Wed, 07 Sep 2022 19:14:35 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=AtaR9pIEKhqv%2BdJd%2BY89NNIpLeP%2BKNPza0cyZtUsA2MUap43siFptugydLRQQ5H3jYWKE5CxWyGIgsJruMMfaB0NHcySyIeof60CxjTArepYdHE5nCdF06IEzc10LrEDULyGiudX7TJ6kyCDVVGNRXSqbyukDhHOGjLpXlbK7UdRmRhjb%2FOmz0NGoSRhzGa5T0cVubBZLfv9WwN%2B5dvzsyMFtIzu1qnXUERj9%2Bk%3D--tfKHE53OIKSMtcj1--mEfRcE93U92hIQcceg7c%2Bg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:35 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "081dbf8d-b2dc-4d75-b612-e6a85db0cad8",
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
## Can delete pin with requestid 'Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3' - 🟢 SUCCESS

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
DELETE https://api.filebase.io/v1/ipfs/pins/Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3
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
  "date": "Wed, 07 Sep 2022 19:14:36 GMT",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "set-cookie": "_filebase_session=a8mdkpuOHvfopZ%2F7z1S6XKXB8%2Bj7o9UKLnNvIBU881aoWuZ5KCZTQOZK4uVGwgRQPQ3FTID%2BbhRjkApv97C9uTdPWeQtPc9qQtvMsZsZLeK5S5fmBPyF5UOBTa370C33aNiPQxMI63h7rI6QxPD8a1ZzOJwWblvcNYWJy0V3PEvovrEmR%2F%2FC86BpFaViSmxAeH4LKMc7vSM7E4BerwfyfkUgU4ZCrSVUaNj3D%2FI%3D--TfW9KtpoqOSjg0%2Fq--yfkIF1nOluRPPNEuqrvvng%3D%3D; domain=.filebase.io; path=/; expires=Wed, 21 Sep 2022 19:14:36 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "02ab44d6-5d13-4e10-b81f-ea6eabe51c84",
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
  "date": "Wed, 07 Sep 2022 19:14:37 GMT",
  "etag": "W/\"3438c5b0da51b073b4fa87b68d35e3b9\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "bce9bf7c-1e27-42f1-9430-25b6ec7d677a",
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
## Get all Pins created before 'Wed Sep 07 2022 19:14:13 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-09-07T19%3A14%3A13.000Z
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
  "date": "Wed, 07 Sep 2022 19:14:34 GMT",
  "etag": "W/\"ad64e1520555ab63c0f9e6c2da151a6d\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7bd2bd9a-22eb-4b2e-af3c-5e5b95541a18",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
      "status": "pinning",
      "created": "2022-09-07T15:14:06.000-04:00",
      "pin": {
        "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
      "status": "pinning",
      "created": "2022-09-07T15:14:02.000-04:00",
      "pin": {
        "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzU2",
      "status": "pinning",
      "created": "2022-09-07T15:14:08.000-04:00",
      "pin": {
        "cid": "bafkreiem4jgm3mqccuuet4mmsbc2v3bwiqzotz5mifcng356qk4qmqlroa",
        "name": "029cf098-4efb-4dde-b170-e26ffb9a56cf",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1MzIy",
      "status": "pinning",
      "created": "2022-09-07T15:14:06.000-04:00",
      "pin": {
        "cid": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "name": "bafkreieiiviw67kkhxmppn4ct2d7e6cjh7ccy7p3lc2abi6s7vmug2l7gi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mjg3",
      "status": "pinning",
      "created": "2022-09-07T15:14:02.000-04:00",
      "pin": {
        "cid": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "name": "bafkreiaj3xlov5kej4bfc4n77t2hd2m62534r3pnjyopso4yunziztacwu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
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
  "date": "Wed, 07 Sep 2022 19:14:37 GMT",
  "etag": "W/\"833f11c00834a861142f4dadb5f92cdb\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5ab3e309-28ed-4749-8ced-69f5d6450585",
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
  "date": "Wed, 07 Sep 2022 19:14:23 GMT",
  "etag": "W/\"a577dadd7e1974df0b121b1e576c8554\"",
  "referrer-policy": "strict-origin-when-cross-origin",
  "server": "Filebase",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f450a7c6-4622-4e78-ab26-3041bbe4781b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz",
      "status": "pinning",
      "created": "2022-09-07T15:14:21.000-04:00",
      "pin": {
        "cid": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
        "name": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5",
      "status": "pinning",
      "created": "2022-09-07T15:14:20.000-04:00",
      "pin": {
        "cid": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
        "name": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0",
      "status": "pinning",
      "created": "2022-09-07T15:14:19.000-04:00",
      "pin": {
        "cid": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
        "name": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4",
      "status": "pinning",
      "created": "2022-09-07T15:14:18.000-04:00",
      "pin": {
        "cid": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
        "name": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz",
      "status": "pinning",
      "created": "2022-09-07T15:14:17.000-04:00",
      "pin": {
        "cid": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
        "name": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4",
      "status": "pinning",
      "created": "2022-09-07T15:14:16.000-04:00",
      "pin": {
        "cid": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
        "name": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1",
      "status": "pinning",
      "created": "2022-09-07T15:14:15.000-04:00",
      "pin": {
        "cid": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
        "name": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx",
      "status": "pinning",
      "created": "2022-09-07T15:14:14.000-04:00",
      "pin": {
        "cid": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
        "name": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz",
      "status": "pinning",
      "created": "2022-09-07T15:14:13.000-04:00",
      "pin": {
        "cid": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
        "name": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0",
      "status": "pinning",
      "created": "2022-09-07T15:14:13.000-04:00",
      "pin": {
        "cid": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
        "name": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDEz",
      "status": "pinning",
      "created": "2022-09-07T15:14:21.000-04:00",
      "pin": {
        "cid": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
        "name": "bafkreibfuausdgqdlyw3p4zhfyxpfdw5j6qxt7ctphxovpx6lk2loo32ii",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA5",
      "status": "pinning",
      "created": "2022-09-07T15:14:20.000-04:00",
      "pin": {
        "cid": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
        "name": "bafkreifkc7bvkejqn3c4glnhj76xvf53e6h73muhcex43smluwjmemmz2e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1NDA0",
      "status": "pinning",
      "created": "2022-09-07T15:14:19.000-04:00",
      "pin": {
        "cid": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
        "name": "bafkreigjhszpazfch6mhioorb73qyibydtk4gsi42q25wehc5zb25mbmyy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzk4",
      "status": "pinning",
      "created": "2022-09-07T15:14:18.000-04:00",
      "pin": {
        "cid": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
        "name": "bafkreiaflcamk56tp7jpytj22etve7wfjepcqylkrks7fxmv4rl3325mae",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzkz",
      "status": "pinning",
      "created": "2022-09-07T15:14:17.000-04:00",
      "pin": {
        "cid": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
        "name": "bafkreicngq6wgepa2ikmtied3p7zawendh5j4pbrqmbjpnq4biu4csr6pq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg4",
      "status": "pinning",
      "created": "2022-09-07T15:14:16.000-04:00",
      "pin": {
        "cid": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
        "name": "bafkreicsug4uabomed466keb6yzaj5fvdlfwpmye4qfx7fr3ameh6cwcze",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzg1",
      "status": "pinning",
      "created": "2022-09-07T15:14:15.000-04:00",
      "pin": {
        "cid": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
        "name": "bafkreie6xxn4gva7ldizln7d6ohepfpsbp2a5nosqcyea44y3flykwrip4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzgx",
      "status": "pinning",
      "created": "2022-09-07T15:14:14.000-04:00",
      "pin": {
        "cid": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
        "name": "bafkreicl4wswfc4mrolcekf6lerywyylh4oq52dkkuvbmst6gxerw2rc6a",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzcz",
      "status": "pinning",
      "created": "2022-09-07T15:14:13.000-04:00",
      "pin": {
        "cid": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
        "name": "bafkreiey7usl4ld6b4u5trp3fvncuuvddqgc7rq645ht2xhgw72hcbtgce",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "size": "0"
      },
      "delegates": [
        "/ip4/15.204.141.240/tcp/4001/p2p/12D3KooWF77nV77TryrhTjjgv1ZNEmPkpcdr6CBy5UGPgNS1cZKa",
        "/ip4/15.204.141.241/tcp/4001/p2p/12D3KooWATtvdsJZQt3a4neVJZcT6vfv8zcdT9FdoPUjVsL83u4i",
        "/ip4/15.204.161.98/tcp/4001/p2p/12D3KooWEVv5ZxSixZUUpKKvAUPGupkwiViubAVRJuuHqAihRdrj"
      ]
    },
    {
      "requestid": "Z2lkOi8vZmlsZWJhc2UvQXNzZXQvOTkwMDQ1Mzc0",
      "status": "pinning",
      "created": "2022-09-07T15:14:13.000-04:00",
      "pin": {
        "cid": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
        "name": "bafkreif6qv7xe3jbg6eh6gykhqzgljsjs3d5yzf65mex2bmlbueddxrmgi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
