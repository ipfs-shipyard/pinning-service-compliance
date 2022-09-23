
# https://api.estuary.tech/pinning compliance:

Execution Date: 2022-09-23T19:19:34.633Z

Revision: [9d15021](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/9d15021)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (8/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m'](#pins-post-of-cid-bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='6f6dd5e5-6385-4caf-817e-4ed6a3592b64'](#can-create-a-pin-with-name6f6dd5e5-6385-4caf-817e-4ed6a3592b64----success)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

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
  "connection": "close",
  "content-length": "77",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:15 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
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
  "connection": "close",
  "content-length": "76",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
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
## Pins post of CID 'bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Pinning status is either queued, pinning, or pinned (success)





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
{"cid":"bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "1848",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "requestid": "38250738",
  "status": "queued",
  "created": "2022-09-23T19:19:17.557028076Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "38250738",
  "status": "queued",
  "created": "2022-09-23T19:19:17.557028076Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "38250738",
  "status": "queued",
  "created": "2022-09-23T19:19:17.557Z",
  "pin": {
    "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
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
DELETE https://api.estuary.tech/pinning/pins/38250739
```
##### Headers
```json
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
  "date": "Fri, 23 Sep 2022 19:19:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
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
{"cid":"bafkreieccwr3hqq67ngmf53ydliyihkrtteomntxmnhbsttnzrq7uhuhba","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "1848",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "requestid": "38250739",
  "status": "queued",
  "created": "2022-09-23T19:19:18.633136732Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreieccwr3hqq67ngmf53ydliyihkrtteomntxmnhbsttnzrq7uhuhba",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "38250739",
  "status": "queued",
  "created": "2022-09-23T19:19:18.633136732Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreieccwr3hqq67ngmf53ydliyihkrtteomntxmnhbsttnzrq7uhuhba",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "38250739",
  "status": "queued",
  "created": "2022-09-23T19:19:18.633Z",
  "pin": {
    "cid": "bafkreieccwr3hqq67ngmf53ydliyihkrtteomntxmnhbsttnzrq7uhuhba",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
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
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 38,
  "results": [
    {
      "requestid": "38250738",
      "status": "pinning",
      "created": "2022-09-23T19:19:17.557028076Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125399",
      "status": "pinned",
      "created": "2022-07-18T19:16:17.982375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125333",
      "status": "pinned",
      "created": "2022-07-18T19:15:07.824375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 38,
  "results": [
    {
      "requestid": "38250738",
      "status": "pinning",
      "created": "2022-09-23T19:19:17.557028076Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125399",
      "status": "pinned",
      "created": "2022-07-18T19:16:17.982375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125333",
      "status": "pinned",
      "created": "2022-07-18T19:15:07.824375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 38,
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
GET https://api.estuary.tech/pinning/pins/38250745
```
##### Headers
```json
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
  "connection": "close",
  "content-length": "97",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_CONTENT_NOT_FOUND",
    "details": "content with ID(38250745) was not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_CONTENT_NOT_FOUND",
    "details": "content with ID(38250745) was not found"
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
GET https://api.estuary.tech/pinning/pins/38250748
```
##### Headers
```json
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
  "content-length": "1849",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "requestid": "38250748",
  "status": "pinning",
  "created": "2022-09-23T19:19:21.752953612Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "38250748",
  "status": "pinning",
  "created": "2022-09-23T19:19:21.752953612Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "38250748",
  "status": "pinning",
  "created": "2022-09-23T19:19:21.752Z",
  "pin": {
    "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {}
}
```
## Pin's with requestid '38250745' can have cid 'bafkreibmlpf4cbxqvj375xcpwsemncbsdf22vtppwjfverjk757c5ikaou' replaced with 'bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve' - 🟢 SUCCESS

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
POST https://api.estuary.tech/pinning/pins/38250745
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
{"cid":"bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "1848",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "requestid": "38250748",
  "status": "queued",
  "created": "2022-09-23T19:19:21.752953612Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "38250748",
  "status": "queued",
  "created": "2022-09-23T19:19:21.752953612Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "38250748",
  "status": "queued",
  "created": "2022-09-23T19:19:21.752Z",
  "pin": {
    "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {}
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (38250745) (success)

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
{"cid":"bafkreibmlpf4cbxqvj375xcpwsemncbsdf22vtppwjfverjk757c5ikaou","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "1848",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "requestid": "38250745",
  "status": "queued",
  "created": "2022-09-23T19:19:20.747167859Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibmlpf4cbxqvj375xcpwsemncbsdf22vtppwjfverjk757c5ikaou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "38250745",
  "status": "queued",
  "created": "2022-09-23T19:19:20.747167859Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreibmlpf4cbxqvj375xcpwsemncbsdf22vtppwjfverjk757c5ikaou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "38250745",
  "status": "queued",
  "created": "2022-09-23T19:19:20.747Z",
  "pin": {
    "cid": "bafkreibmlpf4cbxqvj375xcpwsemncbsdf22vtppwjfverjk757c5ikaou",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {}
}
```
## Can retrieve pin with name '6f6dd5e5-6385-4caf-817e-4ed6a3592b64' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=6f6dd5e5-6385-4caf-817e-4ed6a3592b64&match=exact
```
##### Headers
```json
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
  "content-length": "1909",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '6F6DD5E5-6385-4CAF-817E-4ED6A3592B64' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=6F6DD5E5-6385-4CAF-817E-4ED6A3592B64&match=iexact
```
##### Headers
```json
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
  "content-length": "1909",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '6385-4caf-817e-4ed' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=6385-4caf-817e-4ed&match=partial
```
##### Headers
```json
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
  "content-length": "1909",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can retrieve pin with name '6385-4CAF-817E-4ED' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=6385-4CAF-817E-4ED&match=ipartial
```
##### Headers
```json
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
  "content-length": "1909",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
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
## Can create a pin with name='6f6dd5e5-6385-4caf-817e-4ed6a3592b64' - 🟢 SUCCESS

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
{"cid":"bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4","name":"6f6dd5e5-6385-4caf-817e-4ed6a3592b64","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "1884",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "requestid": "38250754",
  "status": "queued",
  "created": "2022-09-23T19:19:24.011906024Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
    "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "38250754",
  "status": "queued",
  "created": "2022-09-23T19:19:24.011906024Z",
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
    "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "38250754",
  "status": "queued",
  "created": "2022-09-23T19:19:24.011Z",
  "pin": {
    "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
    "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
    "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
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
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Fri, 23 Sep 2022 19:19:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 40,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250748",
      "status": "pinning",
      "created": "2022-09-23T19:19:21.752953612Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250738",
      "status": "pinning",
      "created": "2022-09-23T19:19:17.557028076Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 40,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250748",
      "status": "pinning",
      "created": "2022-09-23T19:19:21.752953612Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250738",
      "status": "pinning",
      "created": "2022-09-23T19:19:17.557028076Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 40,
  "results": {}
}
```
## Pagination: Retrieve the next page of pins - ❌ FAILED

### Expectations (2/3 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-07-18T19%3A29%3A58.099Z
```
##### Headers
```json
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
  "date": "Fri, 23 Sep 2022 19:19:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 30,
  "results": [
    {
      "requestid": "33125399",
      "status": "pinned",
      "created": "2022-07-18T19:16:17.982375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125333",
      "status": "pinned",
      "created": "2022-07-18T19:15:07.824375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125199",
      "status": "pinned",
      "created": "2022-07-18T19:13:38.667485Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125061",
      "status": "pinned",
      "created": "2022-07-18T19:10:01.175085Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124993",
      "status": "pinned",
      "created": "2022-07-18T19:08:09.227653Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124575",
      "status": "pinned",
      "created": "2022-07-18T19:02:30.392281Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124430",
      "status": "pinned",
      "created": "2022-07-18T18:56:46.284933Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124419",
      "status": "pinned",
      "created": "2022-07-18T18:49:50.147145Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124416",
      "status": "pinned",
      "created": "2022-07-18T18:49:31.012481Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124369",
      "status": "pinned",
      "created": "2022-07-18T18:45:15.118163Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 30,
  "results": [
    {
      "requestid": "33125399",
      "status": "pinned",
      "created": "2022-07-18T19:16:17.982375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125333",
      "status": "pinned",
      "created": "2022-07-18T19:15:07.824375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125199",
      "status": "pinned",
      "created": "2022-07-18T19:13:38.667485Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125061",
      "status": "pinned",
      "created": "2022-07-18T19:10:01.175085Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124993",
      "status": "pinned",
      "created": "2022-07-18T19:08:09.227653Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124575",
      "status": "pinned",
      "created": "2022-07-18T19:02:30.392281Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124430",
      "status": "pinned",
      "created": "2022-07-18T18:56:46.284933Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124419",
      "status": "pinned",
      "created": "2022-07-18T18:49:50.147145Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124416",
      "status": "pinned",
      "created": "2022-07-18T18:49:31.012481Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124369",
      "status": "pinned",
      "created": "2022-07-18T18:45:15.118163Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 30,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (9/10 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  🟢 Count is greater than the number of pins returned (success)

  🟢 Number of pins returned defaults to 10 (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





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
  "date": "Fri, 23 Sep 2022 19:19:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 40,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250748",
      "status": "pinning",
      "created": "2022-09-23T19:19:21.752953612Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250738",
      "status": "pinning",
      "created": "2022-09-23T19:19:17.557028076Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 40,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250748",
      "status": "pinning",
      "created": "2022-09-23T19:19:21.752953612Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250738",
      "status": "pinning",
      "created": "2022-09-23T19:19:17.557028076Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 40,
  "results": {}
}
```
## Can delete pin with requestid '38250754' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/38250754
```
##### Headers
```json
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
  "date": "Fri, 23 Sep 2022 19:19:32 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
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
## Can delete pin with requestid '38250748' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/38250748
```
##### Headers
```json
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
  "date": "Fri, 23 Sep 2022 19:19:32 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
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
## Can delete pin with requestid '38250738' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/38250738
```
##### Headers
```json
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
  "date": "Fri, 23 Sep 2022 19:19:33 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
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
## Get all Pins created before 'Mon Jul 18 2022 19:29:58 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-07-18T19%3A29%3A58.099Z
```
##### Headers
```json
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
  "date": "Fri, 23 Sep 2022 19:19:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 30,
  "results": [
    {
      "requestid": "33125399",
      "status": "pinned",
      "created": "2022-07-18T19:16:17.982375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125333",
      "status": "pinned",
      "created": "2022-07-18T19:15:07.824375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125199",
      "status": "pinned",
      "created": "2022-07-18T19:13:38.667485Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125061",
      "status": "pinned",
      "created": "2022-07-18T19:10:01.175085Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124993",
      "status": "pinned",
      "created": "2022-07-18T19:08:09.227653Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124575",
      "status": "pinned",
      "created": "2022-07-18T19:02:30.392281Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124430",
      "status": "pinned",
      "created": "2022-07-18T18:56:46.284933Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124419",
      "status": "pinned",
      "created": "2022-07-18T18:49:50.147145Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124416",
      "status": "pinned",
      "created": "2022-07-18T18:49:31.012481Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124369",
      "status": "pinned",
      "created": "2022-07-18T18:45:15.118163Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 30,
  "results": [
    {
      "requestid": "33125399",
      "status": "pinned",
      "created": "2022-07-18T19:16:17.982375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125333",
      "status": "pinned",
      "created": "2022-07-18T19:15:07.824375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125199",
      "status": "pinned",
      "created": "2022-07-18T19:13:38.667485Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125061",
      "status": "pinned",
      "created": "2022-07-18T19:10:01.175085Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124993",
      "status": "pinned",
      "created": "2022-07-18T19:08:09.227653Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124575",
      "status": "pinned",
      "created": "2022-07-18T19:02:30.392281Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124430",
      "status": "pinned",
      "created": "2022-07-18T18:56:46.284933Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124419",
      "status": "pinned",
      "created": "2022-07-18T18:49:50.147145Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124416",
      "status": "pinned",
      "created": "2022-07-18T18:49:31.012481Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33124369",
      "status": "pinned",
      "created": "2022-07-18T18:45:15.118163Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 30,
  "results": {}
}
```
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '37' (success)





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
  "date": "Fri, 23 Sep 2022 19:19:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 37,
  "results": [
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125399",
      "status": "pinned",
      "created": "2022-07-18T19:16:17.982375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125333",
      "status": "pinned",
      "created": "2022-07-18T19:15:07.824375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125199",
      "status": "pinned",
      "created": "2022-07-18T19:13:38.667485Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 37,
  "results": [
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125399",
      "status": "pinned",
      "created": "2022-07-18T19:16:17.982375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125333",
      "status": "pinned",
      "created": "2022-07-18T19:15:07.824375Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33125199",
      "status": "pinned",
      "created": "2022-07-18T19:13:38.667485Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 37,
  "results": {}
}
```
## Can delete all pins created during compliance checks - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '37' (success)


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
  "date": "Fri, 23 Sep 2022 19:19:31 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.1.9-dirty"
}
```
##### Body
```json
{
  "count": 40,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250748",
      "status": "pinning",
      "created": "2022-09-23T19:19:21.752953612Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250738",
      "status": "pinning",
      "created": "2022-09-23T19:19:17.557028076Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 40,
  "results": [
    {
      "requestid": "38250754",
      "status": "pinning",
      "created": "2022-09-23T19:19:24.011906024Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihy4iuadyvwjg2grnywa4i54lzar4mrsaeiwocb3752xx7httaju4",
        "name": "6f6dd5e5-6385-4caf-817e-4ed6a3592b64",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250748",
      "status": "pinning",
      "created": "2022-09-23T19:19:21.752953612Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiddsovz7oq5rnsr3rm36shrhs7i2f3i2mtwixsvplr3k6whulfhve",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "38250738",
      "status": "pinning",
      "created": "2022-09-23T19:19:17.557028076Z",
      "delegates": [
        "/ip4/139.178.81.141/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/139.178.81.141/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.188.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.126.133.64/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.122.184.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.32.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.121.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.109.47.192/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.125.201.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.46.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.124.77.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.106.233.0/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe",
        "/ip4/100.112.38.128/tcp/6745/p2p/12D3KooWHe2fZ6jJJ2K2oX3EjMiXMRzvHVA5mvgYYvZvi7tEYNMe"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihvddiulf3rr6fkqsd4rj4izchbni7razhwitv56g7i2m2gt3nu4m",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "33126813",
      "status": "pinned",
      "created": "2022-07-18T19:46:47.386606Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126799",
      "status": "pinned",
      "created": "2022-07-18T19:43:40.728727Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126798",
      "status": "pinned",
      "created": "2022-07-18T19:42:56.197505Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126797",
      "status": "pinned",
      "created": "2022-07-18T19:42:14.739878Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126155",
      "status": "pinned",
      "created": "2022-07-18T19:32:28.552634Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126142",
      "status": "pinned",
      "created": "2022-07-18T19:31:58.205614Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "33126075",
      "status": "pinned",
      "created": "2022-07-18T19:29:58.099452Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "name": "",
        "origins": [],
        "meta": {}
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 40,
  "results": {}
}
```
