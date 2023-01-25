
<script src="./telemetry.js"></script>
# https://api.estuary.tech/pinning compliance:

Execution Date: 2023-01-25T23:07:35.632Z

Revision: [c0d25f3](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/c0d25f3)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (7/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy'](#pins-post-of-cid-bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='9287dfda-5947-4920-8ccc-586b21a4f436'](#can-create-a-pin-with-name9287dfda-5947-4920-8ccc-586b21a4f436----success)

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
  "date": "Wed, 25 Jan 2023 23:02:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
  "date": "Wed, 25 Jan 2023 23:02:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Pins post of CID 'bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy' - 🟢 SUCCESS

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
{"cid":"bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:02:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92953371",
  "status": "pinning",
  "created": "2023-01-25T23:02:24.201077414Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy",
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
  "requestid": "92953371",
  "status": "pinning",
  "created": "2023-01-25T23:02:24.201077414Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy",
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
  "requestid": "92953371",
  "status": "pinning",
  "created": "2023-01-25T23:02:24.201Z",
  "pin": {
    "cid": "bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
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
DELETE https://api.estuary.tech/pinning/pins/92953377
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:02:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
{"cid":"bafkreifu2dvxoccyxq25iakchgwut2ssbwa7u6rhpjbuvpz6ydr6p7dbse","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:02:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92953377",
  "status": "pinning",
  "created": "2023-01-25T23:02:25.200506837Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifu2dvxoccyxq25iakchgwut2ssbwa7u6rhpjbuvpz6ydr6p7dbse",
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
  "requestid": "92953377",
  "status": "pinning",
  "created": "2023-01-25T23:02:25.200506837Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifu2dvxoccyxq25iakchgwut2ssbwa7u6rhpjbuvpz6ydr6p7dbse",
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
  "requestid": "92953377",
  "status": "pinning",
  "created": "2023-01-25T23:02:25.200Z",
  "pin": {
    "cid": "bafkreifu2dvxoccyxq25iakchgwut2ssbwa7u6rhpjbuvpz6ydr6p7dbse",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
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
  "date": "Wed, 25 Jan 2023 23:03:14 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 38,
  "results": [
    {
      "requestid": "92953371",
      "status": "pinning",
      "created": "2023-01-25T23:02:24.201077Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy",
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
      "requestid": "92953371",
      "status": "pinning",
      "created": "2023-01-25T23:02:24.201077Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy",
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
GET https://api.estuary.tech/pinning/pins/92953737
```
##### Headers
```json
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
  "content-length": "97",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_CONTENT_NOT_FOUND",
    "details": "content with ID(92953737) was not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_CONTENT_NOT_FOUND",
    "details": "content with ID(92953737) was not found"
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
GET https://api.estuary.tech/pinning/pins/92953748
```
##### Headers
```json
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
  "content-length": "1497",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92953748",
  "status": "pinning",
  "created": "2023-01-25T23:03:16.193696Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy",
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
  "requestid": "92953748",
  "status": "pinning",
  "created": "2023-01-25T23:03:16.193696Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy",
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
  "requestid": "92953748",
  "status": "pinning",
  "created": "2023-01-25T23:03:16.193Z",
  "pin": {
    "cid": "bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Pin's with requestid '92953737' can have cid 'bafkreich2bhdorzun7trgrmgcoso3wrbx3ywsuj6hbruwcpkjc64rgx6l4' replaced with 'bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy' - 🟢 SUCCESS

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
POST https://api.estuary.tech/pinning/pins/92953737
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
{"cid":"bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92953748",
  "status": "pinning",
  "created": "2023-01-25T23:03:16.193696057Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy",
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
  "requestid": "92953748",
  "status": "pinning",
  "created": "2023-01-25T23:03:16.193696057Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy",
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
  "requestid": "92953748",
  "status": "pinning",
  "created": "2023-01-25T23:03:16.193Z",
  "pin": {
    "cid": "bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (92953737) (success)

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
{"cid":"bafkreich2bhdorzun7trgrmgcoso3wrbx3ywsuj6hbruwcpkjc64rgx6l4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:15 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92953737",
  "status": "pinning",
  "created": "2023-01-25T23:03:15.191954373Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreich2bhdorzun7trgrmgcoso3wrbx3ywsuj6hbruwcpkjc64rgx6l4",
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
  "requestid": "92953737",
  "status": "pinning",
  "created": "2023-01-25T23:03:15.191954373Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreich2bhdorzun7trgrmgcoso3wrbx3ywsuj6hbruwcpkjc64rgx6l4",
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
  "requestid": "92953737",
  "status": "pinning",
  "created": "2023-01-25T23:03:15.191Z",
  "pin": {
    "cid": "bafkreich2bhdorzun7trgrmgcoso3wrbx3ywsuj6hbruwcpkjc64rgx6l4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can retrieve pin with name '9287dfda-5947-4920-8ccc-586b21a4f436' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=9287dfda-5947-4920-8ccc-586b21a4f436&match=exact
```
##### Headers
```json
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
  "content-length": "1557",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
## Can retrieve pin with name '9287DFDA-5947-4920-8CCC-586B21A4F436' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=9287DFDA-5947-4920-8CCC-586B21A4F436&match=iexact
```
##### Headers
```json
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
  "content-length": "1557",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
## Can retrieve pin with name '5947-4920-8ccc-586' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=5947-4920-8ccc-586&match=partial
```
##### Headers
```json
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
  "content-length": "1557",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
## Can retrieve pin with name '5947-4920-8CCC-586' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=5947-4920-8CCC-586&match=ipartial
```
##### Headers
```json
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
  "content-length": "1557",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
## Can create a pin with name='9287dfda-5947-4920-8ccc-586b21a4f436' - 🟢 SUCCESS

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
{"cid":"bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44","name":"9287dfda-5947-4920-8ccc-586b21a4f436","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1536",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:03:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92953766",
  "status": "pinning",
  "created": "2023-01-25T23:03:18.417357264Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
    "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
  "requestid": "92953766",
  "status": "pinning",
  "created": "2023-01-25T23:03:18.417357264Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
    "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
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
  "requestid": "92953766",
  "status": "pinning",
  "created": "2023-01-25T23:03:18.417Z",
  "pin": {
    "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
    "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreigbblihx6qproq6apxiokphllmrwcrtvo57ies2oi4vzu5azqccua' - 🟢 SUCCESS

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
{"cid":"bafkreigbblihx6qproq6apxiokphllmrwcrtvo57ies2oi4vzu5azqccua","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:15 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954220",
  "status": "pinning",
  "created": "2023-01-25T23:04:15.063075803Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigbblihx6qproq6apxiokphllmrwcrtvo57ies2oi4vzu5azqccua",
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
  "requestid": "92954220",
  "status": "pinning",
  "created": "2023-01-25T23:04:15.063075803Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigbblihx6qproq6apxiokphllmrwcrtvo57ies2oi4vzu5azqccua",
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
  "requestid": "92954220",
  "status": "pinning",
  "created": "2023-01-25T23:04:15.063Z",
  "pin": {
    "cid": "bafkreigbblihx6qproq6apxiokphllmrwcrtvo57ies2oi4vzu5azqccua",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreiatiwuq7taa5s2stz2m6cwd666ocux4fz5ptqvdah5hurs4cf6eze' - 🟢 SUCCESS

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
{"cid":"bafkreiatiwuq7taa5s2stz2m6cwd666ocux4fz5ptqvdah5hurs4cf6eze","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954228",
  "status": "pinning",
  "created": "2023-01-25T23:04:16.041764606Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiatiwuq7taa5s2stz2m6cwd666ocux4fz5ptqvdah5hurs4cf6eze",
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
  "requestid": "92954228",
  "status": "pinning",
  "created": "2023-01-25T23:04:16.041764606Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiatiwuq7taa5s2stz2m6cwd666ocux4fz5ptqvdah5hurs4cf6eze",
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
  "requestid": "92954228",
  "status": "pinning",
  "created": "2023-01-25T23:04:16.041Z",
  "pin": {
    "cid": "bafkreiatiwuq7taa5s2stz2m6cwd666ocux4fz5ptqvdah5hurs4cf6eze",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreifuhfgaypczn63rkefaoyqjfmq52urcqshzl6vi7ckjvwayubqyoi' - 🟢 SUCCESS

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
{"cid":"bafkreifuhfgaypczn63rkefaoyqjfmq52urcqshzl6vi7ckjvwayubqyoi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1498",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:17 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954238",
  "status": "pinning",
  "created": "2023-01-25T23:04:17.0573005Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifuhfgaypczn63rkefaoyqjfmq52urcqshzl6vi7ckjvwayubqyoi",
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
  "requestid": "92954238",
  "status": "pinning",
  "created": "2023-01-25T23:04:17.0573005Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifuhfgaypczn63rkefaoyqjfmq52urcqshzl6vi7ckjvwayubqyoi",
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
  "requestid": "92954238",
  "status": "pinning",
  "created": "2023-01-25T23:04:17.057Z",
  "pin": {
    "cid": "bafkreifuhfgaypczn63rkefaoyqjfmq52urcqshzl6vi7ckjvwayubqyoi",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreid4vlbwspperfpfrin3kxkusr4looyajy5qocba3tnsbfu5zqs5ay' - 🟢 SUCCESS

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
{"cid":"bafkreid4vlbwspperfpfrin3kxkusr4looyajy5qocba3tnsbfu5zqs5ay","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:18 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954245",
  "status": "pinning",
  "created": "2023-01-25T23:04:18.041843003Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreid4vlbwspperfpfrin3kxkusr4looyajy5qocba3tnsbfu5zqs5ay",
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
  "requestid": "92954245",
  "status": "pinning",
  "created": "2023-01-25T23:04:18.041843003Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreid4vlbwspperfpfrin3kxkusr4looyajy5qocba3tnsbfu5zqs5ay",
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
  "requestid": "92954245",
  "status": "pinning",
  "created": "2023-01-25T23:04:18.041Z",
  "pin": {
    "cid": "bafkreid4vlbwspperfpfrin3kxkusr4looyajy5qocba3tnsbfu5zqs5ay",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreigf6crzflxiydtxknfymevj3t7qerciaa3gb234d6htbjunfaov4a' - 🟢 SUCCESS

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
{"cid":"bafkreigf6crzflxiydtxknfymevj3t7qerciaa3gb234d6htbjunfaov4a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:19 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954256",
  "status": "pinning",
  "created": "2023-01-25T23:04:19.047253791Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigf6crzflxiydtxknfymevj3t7qerciaa3gb234d6htbjunfaov4a",
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
  "requestid": "92954256",
  "status": "pinning",
  "created": "2023-01-25T23:04:19.047253791Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigf6crzflxiydtxknfymevj3t7qerciaa3gb234d6htbjunfaov4a",
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
  "requestid": "92954256",
  "status": "pinning",
  "created": "2023-01-25T23:04:19.047Z",
  "pin": {
    "cid": "bafkreigf6crzflxiydtxknfymevj3t7qerciaa3gb234d6htbjunfaov4a",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q' - 🟢 SUCCESS

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
{"cid":"bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954265",
  "status": "pinning",
  "created": "2023-01-25T23:04:20.044130234Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q",
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
  "requestid": "92954265",
  "status": "pinning",
  "created": "2023-01-25T23:04:20.044130234Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q",
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
  "requestid": "92954265",
  "status": "pinning",
  "created": "2023-01-25T23:04:20.044Z",
  "pin": {
    "cid": "bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu' - 🟢 SUCCESS

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
{"cid":"bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954275",
  "status": "pinning",
  "created": "2023-01-25T23:04:21.061367437Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu",
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
  "requestid": "92954275",
  "status": "pinning",
  "created": "2023-01-25T23:04:21.061367437Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu",
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
  "requestid": "92954275",
  "status": "pinning",
  "created": "2023-01-25T23:04:21.061Z",
  "pin": {
    "cid": "bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei' - 🟢 SUCCESS

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
{"cid":"bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954285",
  "status": "pinning",
  "created": "2023-01-25T23:04:22.034759968Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei",
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
  "requestid": "92954285",
  "status": "pinning",
  "created": "2023-01-25T23:04:22.034759968Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei",
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
  "requestid": "92954285",
  "status": "pinning",
  "created": "2023-01-25T23:04:22.034Z",
  "pin": {
    "cid": "bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4' - 🟢 SUCCESS

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
{"cid":"bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954293",
  "status": "pinning",
  "created": "2023-01-25T23:04:23.046546455Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4",
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
  "requestid": "92954293",
  "status": "pinning",
  "created": "2023-01-25T23:04:23.046546455Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4",
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
  "requestid": "92954293",
  "status": "pinning",
  "created": "2023-01-25T23:04:23.046Z",
  "pin": {
    "cid": "bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq' - 🟢 SUCCESS

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
{"cid":"bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954304",
  "status": "pinning",
  "created": "2023-01-25T23:04:24.077567741Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq",
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
  "requestid": "92954304",
  "status": "pinning",
  "created": "2023-01-25T23:04:24.077567741Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq",
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
  "requestid": "92954304",
  "status": "pinning",
  "created": "2023-01-25T23:04:24.077Z",
  "pin": {
    "cid": "bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq' - 🟢 SUCCESS

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
{"cid":"bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954317",
  "status": "pinning",
  "created": "2023-01-25T23:04:25.049199578Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq",
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
  "requestid": "92954317",
  "status": "pinning",
  "created": "2023-01-25T23:04:25.049199578Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq",
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
  "requestid": "92954317",
  "status": "pinning",
  "created": "2023-01-25T23:04:25.049Z",
  "pin": {
    "cid": "bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why' - 🟢 SUCCESS

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
{"cid":"bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954334",
  "status": "pinning",
  "created": "2023-01-25T23:04:26.042042653Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why",
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
  "requestid": "92954334",
  "status": "pinning",
  "created": "2023-01-25T23:04:26.042042653Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why",
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
  "requestid": "92954334",
  "status": "pinning",
  "created": "2023-01-25T23:04:26.042Z",
  "pin": {
    "cid": "bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu' - 🟢 SUCCESS

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
{"cid":"bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954340",
  "status": "pinning",
  "created": "2023-01-25T23:04:27.063183614Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu",
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
  "requestid": "92954340",
  "status": "pinning",
  "created": "2023-01-25T23:04:27.063183614Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu",
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
  "requestid": "92954340",
  "status": "pinning",
  "created": "2023-01-25T23:04:27.063Z",
  "pin": {
    "cid": "bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry' - 🟢 SUCCESS

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
{"cid":"bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1499",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954347",
  "status": "pinning",
  "created": "2023-01-25T23:04:28.05182225Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry",
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
  "requestid": "92954347",
  "status": "pinning",
  "created": "2023-01-25T23:04:28.05182225Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry",
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
  "requestid": "92954347",
  "status": "pinning",
  "created": "2023-01-25T23:04:28.051Z",
  "pin": {
    "cid": "bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {}
}
```
## Can create new pin for testing pagination cid='bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu' - 🟢 SUCCESS

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
{"cid":"bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "1500",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:04:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "requestid": "92954358",
  "status": "pinning",
  "created": "2023-01-25T23:04:29.099505278Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu",
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
  "requestid": "92954358",
  "status": "pinning",
  "created": "2023-01-25T23:04:29.099505278Z",
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
  ],
  "info": {},
  "pin": {
    "cid": "bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu",
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
  "requestid": "92954358",
  "status": "pinning",
  "created": "2023-01-25T23:04:29.099Z",
  "pin": {
    "cid": "bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu",
    "name": "",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
    "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
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
  "date": "Wed, 25 Jan 2023 23:04:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 55,
  "results": [
    {
      "requestid": "92954358",
      "status": "pinning",
      "created": "2023-01-25T23:04:29.099505Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954347",
      "status": "pinning",
      "created": "2023-01-25T23:04:28.051822Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954340",
      "status": "pinning",
      "created": "2023-01-25T23:04:27.063183Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954334",
      "status": "pinning",
      "created": "2023-01-25T23:04:26.042042Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954317",
      "status": "pinning",
      "created": "2023-01-25T23:04:25.049199Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954304",
      "status": "pinning",
      "created": "2023-01-25T23:04:24.077567Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954293",
      "status": "pinning",
      "created": "2023-01-25T23:04:23.046546Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954285",
      "status": "pinning",
      "created": "2023-01-25T23:04:22.034759Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954275",
      "status": "pinning",
      "created": "2023-01-25T23:04:21.061367Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954265",
      "status": "pinning",
      "created": "2023-01-25T23:04:20.04413Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q",
        "name": "",
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
  "count": 55,
  "results": [
    {
      "requestid": "92954358",
      "status": "pinning",
      "created": "2023-01-25T23:04:29.099505Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954347",
      "status": "pinning",
      "created": "2023-01-25T23:04:28.051822Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954340",
      "status": "pinning",
      "created": "2023-01-25T23:04:27.063183Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954334",
      "status": "pinning",
      "created": "2023-01-25T23:04:26.042042Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954317",
      "status": "pinning",
      "created": "2023-01-25T23:04:25.049199Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954304",
      "status": "pinning",
      "created": "2023-01-25T23:04:24.077567Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954293",
      "status": "pinning",
      "created": "2023-01-25T23:04:23.046546Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954285",
      "status": "pinning",
      "created": "2023-01-25T23:04:22.034759Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954275",
      "status": "pinning",
      "created": "2023-01-25T23:04:21.061367Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954265",
      "status": "pinning",
      "created": "2023-01-25T23:04:20.04413Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q",
        "name": "",
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
  "count": 55,
  "results": {}
}
```
## Pagination: Retrieve the next page of pins - ❌ FAILED

### Expectations (0/3 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Second page result is null
    at fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:119:17)
    at ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:184:31)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:212:7)
    at async testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:124:3)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-01-25T23%3A04%3A20.044Z
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (35/40 successful)

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

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)


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

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Second page result is null
    at fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:119:17)
    at ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:184:31)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:212:7)
    at async testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:124:3)
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
  "date": "Wed, 25 Jan 2023 23:04:14 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954358' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954358
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:21 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954347' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954347
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954340' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954340
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954334' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954334
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954317' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954317
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954304' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954304
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954293' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954293
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954285' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954285
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954275' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954275
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954265' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954265
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:05:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954256' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954256
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:33 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954245' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954245
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954238' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954238
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:35 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954228' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954228
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:36 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92954220' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92954220
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:37 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92953766' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92953766
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:38 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92953748' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92953748
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:39 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Can delete pin with requestid '92953371' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/92953371
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Get all Pins created before 'Wed Jun 29 2022 11:00:46 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-29T11%3A00%3A46.343Z
```
##### Headers
```json
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
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:06:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
## Get all Pins created before 'Wed Jun 29 2022 11:03:52 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-29T11%3A03%3A52.462Z
```
##### Headers
```json
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
  "content-length": "1850",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 25 Jan 2023 23:06:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "32131028",
      "status": "failed",
      "created": "2022-06-29T11:03:52.098373Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihwcbywxbrpjmbg2cdwqkr7ldeyyflxv2kjfhpizljwwezwo3qvxq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32130989",
      "status": "failed",
      "created": "2022-06-29T11:03:51.787986Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiebeuly6iq7tbsrfd7wyog3vrsg2ivkqofxzs2axfk2lc4gf5twpu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32130774",
      "status": "failed",
      "created": "2022-06-29T11:02:15.220586Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreielucrfa4euaitkivk46lomingtm5do6gxedqh22xyy57b2v63b6y",
        "name": "0191ceae-94af-4de2-b028-d9c2912fc828",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32130737",
      "status": "failed",
      "created": "2022-06-29T11:02:07.659978Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiht4o4znpivombfldp3s2osnljt5dh3xji7wsgor3l73vycakm6sq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32130574",
      "status": "failed",
      "created": "2022-06-29T11:00:46.343745Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicpi3ivq3rqrbazfjb2ysevydcca2qmlwigm6axvdhq3abbfdu3ny",
        "name": "",
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
  "count": 5,
  "results": [
    {
      "requestid": "32131028",
      "status": "failed",
      "created": "2022-06-29T11:03:52.098373Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihwcbywxbrpjmbg2cdwqkr7ldeyyflxv2kjfhpizljwwezwo3qvxq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32130989",
      "status": "failed",
      "created": "2022-06-29T11:03:51.787986Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiebeuly6iq7tbsrfd7wyog3vrsg2ivkqofxzs2axfk2lc4gf5twpu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32130774",
      "status": "failed",
      "created": "2022-06-29T11:02:15.220586Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreielucrfa4euaitkivk46lomingtm5do6gxedqh22xyy57b2v63b6y",
        "name": "0191ceae-94af-4de2-b028-d9c2912fc828",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32130737",
      "status": "failed",
      "created": "2022-06-29T11:02:07.659978Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiht4o4znpivombfldp3s2osnljt5dh3xji7wsgor3l73vycakm6sq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32130574",
      "status": "failed",
      "created": "2022-06-29T11:00:46.343745Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicpi3ivq3rqrbazfjb2ysevydcca2qmlwigm6axvdhq3abbfdu3ny",
        "name": "",
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
  "count": 5,
  "results": {}
}
```
## Get all Pins created before 'Fri Jul 08 2022 00:35:21 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-07-08T00%3A35%3A21.453Z
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "32592191",
      "status": "failed",
      "created": "2022-07-07T17:20:59.828449Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafybeifkn53bnw6qra4mwkhay6zvvbzs332frm4znbyrz7zjj5aqsdn6ey",
        "name": "ipfs-webui@test",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "32592035",
      "status": "failed",
      "created": "2022-07-07T17:16:51.741353Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafybeifkn53bnw6qra4mwkhay6zvvbzs332frm4znbyrz7zjj5aqsdn6ey",
        "name": "ipfs-webui@test",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "32131116",
      "status": "failed",
      "created": "2022-06-29T11:07:08.405137Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibuerabzwesgf2uumjstvh3eqxaciy2vzy57xvgjno4kpyu2ihjf4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131115",
      "status": "failed",
      "created": "2022-06-29T11:05:52.077484Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiho274swofqzgc2465355ec2whoskv3ck6ujpdtskrnqinubz3efa",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131093",
      "status": "failed",
      "created": "2022-06-29T11:05:51.899882Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic43pkt75lqfjrl4xugufy327y4om7wlf5r7vgqyhgwwrwcvm2wpa",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131041",
      "status": "failed",
      "created": "2022-06-29T11:05:34.012979Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigf2dzuvvqmnlrm45ylfwjvv3ccive5lgr3qszs2rlbtjkbwsp55e",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131040",
      "status": "failed",
      "created": "2022-06-29T11:03:55.338902Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifmvqdw5pyrnqxtsgbxkevbu7fdmc5pvsbhgjgmmwwrxhabbgd72q",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131039",
      "status": "failed",
      "created": "2022-06-29T11:03:54.427074Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreid4yx2a3x5ln44yrufz7a2jzxpaj3qinqoxze2d3z6so6zctzzpru",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131033",
      "status": "failed",
      "created": "2022-06-29T11:03:54.04413Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifnaqd2ecjy36idcsyuh6wdyh75edceballzt7wbrhf5c7a7dnrry",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131029",
      "status": "failed",
      "created": "2022-06-29T11:03:52.462183Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaqrim6l4r3h7r7uh4cc4w6xl6a3ilapfzgztnmezf6xoolc36fvm",
        "name": "",
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
  "count": 15,
  "results": [
    {
      "requestid": "32592191",
      "status": "failed",
      "created": "2022-07-07T17:20:59.828449Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafybeifkn53bnw6qra4mwkhay6zvvbzs332frm4znbyrz7zjj5aqsdn6ey",
        "name": "ipfs-webui@test",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "32592035",
      "status": "failed",
      "created": "2022-07-07T17:16:51.741353Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafybeifkn53bnw6qra4mwkhay6zvvbzs332frm4znbyrz7zjj5aqsdn6ey",
        "name": "ipfs-webui@test",
        "origins": [],
        "meta": {}
      }
    },
    {
      "requestid": "32131116",
      "status": "failed",
      "created": "2022-06-29T11:07:08.405137Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibuerabzwesgf2uumjstvh3eqxaciy2vzy57xvgjno4kpyu2ihjf4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131115",
      "status": "failed",
      "created": "2022-06-29T11:05:52.077484Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiho274swofqzgc2465355ec2whoskv3ck6ujpdtskrnqinubz3efa",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131093",
      "status": "failed",
      "created": "2022-06-29T11:05:51.899882Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic43pkt75lqfjrl4xugufy327y4om7wlf5r7vgqyhgwwrwcvm2wpa",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131041",
      "status": "failed",
      "created": "2022-06-29T11:05:34.012979Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigf2dzuvvqmnlrm45ylfwjvv3ccive5lgr3qszs2rlbtjkbwsp55e",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131040",
      "status": "failed",
      "created": "2022-06-29T11:03:55.338902Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifmvqdw5pyrnqxtsgbxkevbu7fdmc5pvsbhgjgmmwwrxhabbgd72q",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131039",
      "status": "failed",
      "created": "2022-06-29T11:03:54.427074Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreid4yx2a3x5ln44yrufz7a2jzxpaj3qinqoxze2d3z6so6zctzzpru",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131033",
      "status": "failed",
      "created": "2022-06-29T11:03:54.04413Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifnaqd2ecjy36idcsyuh6wdyh75edceballzt7wbrhf5c7a7dnrry",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "32131029",
      "status": "failed",
      "created": "2022-06-29T11:03:52.462183Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaqrim6l4r3h7r7uh4cc4w6xl6a3ilapfzgztnmezf6xoolc36fvm",
        "name": "",
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
  "count": 15,
  "results": {}
}
```
## Get all Pins created before 'Mon Jul 18 2022 19:08:09 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-07-18T19%3A08%3A09.227Z
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 25,
  "results": [
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
    },
    {
      "requestid": "33124344",
      "status": "pinned",
      "created": "2022-07-18T18:40:24.510755Z",
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
      "requestid": "33124343",
      "status": "pinned",
      "created": "2022-07-18T18:40:13.282075Z",
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
      "requestid": "33124342",
      "status": "pinned",
      "created": "2022-07-18T18:40:06.458845Z",
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
      "requestid": "33124339",
      "status": "pinned",
      "created": "2022-07-18T18:39:37.571456Z",
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
      "requestid": "32610544",
      "status": "pinned",
      "created": "2022-07-08T00:35:21.453824Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafybeibncw5p6cczge2jl3v5vbgl7rbxepfrzq4wirualpxfnty5zoizni",
        "name": "2022-07-07 at 17.10.13 - ipfs-thing-2022 - schedule centering.gif",
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
  "count": 25,
  "results": [
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
    },
    {
      "requestid": "33124344",
      "status": "pinned",
      "created": "2022-07-18T18:40:24.510755Z",
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
      "requestid": "33124343",
      "status": "pinned",
      "created": "2022-07-18T18:40:13.282075Z",
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
      "requestid": "33124342",
      "status": "pinned",
      "created": "2022-07-18T18:40:06.458845Z",
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
      "requestid": "33124339",
      "status": "pinned",
      "created": "2022-07-18T18:39:37.571456Z",
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
      "requestid": "32610544",
      "status": "pinned",
      "created": "2022-07-08T00:35:21.453824Z",
      "delegates": [
        "/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"
      ],
      "info": {},
      "pin": {
        "cid": "bafybeibncw5p6cczge2jl3v5vbgl7rbxepfrzq4wirualpxfnty5zoizni",
        "name": "2022-07-07 at 17.10.13 - ipfs-thing-2022 - schedule centering.gif",
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
  "count": 25,
  "results": {}
}
```
## Get all Pins created before 'Mon Jul 18 2022 19:43:40 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-07-18T19%3A43%3A40.728Z
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 35,
  "results": [
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
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 35,
  "results": [
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
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 35,
  "results": {}
}
```
## Get all Pins created before 'Wed Jan 25 2023 23:04:20 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

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


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-01-25T23%3A04%3A20.044Z
```
##### Headers
```json
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
  "date": "Wed, 25 Jan 2023 23:06:33 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 45,
  "results": [
    {
      "requestid": "92954256",
      "status": "pinning",
      "created": "2023-01-25T23:04:19.047253Z",
      "delegates": [],
      "info": {},
      "pin": {
        "cid": "bafkreigf6crzflxiydtxknfymevj3t7qerciaa3gb234d6htbjunfaov4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954245",
      "status": "pinning",
      "created": "2023-01-25T23:04:18.041843Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreid4vlbwspperfpfrin3kxkusr4looyajy5qocba3tnsbfu5zqs5ay",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954238",
      "status": "pinning",
      "created": "2023-01-25T23:04:17.0573Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifuhfgaypczn63rkefaoyqjfmq52urcqshzl6vi7ckjvwayubqyoi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954228",
      "status": "pinning",
      "created": "2023-01-25T23:04:16.041764Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiatiwuq7taa5s2stz2m6cwd666ocux4fz5ptqvdah5hurs4cf6eze",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954220",
      "status": "pinning",
      "created": "2023-01-25T23:04:15.063075Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigbblihx6qproq6apxiokphllmrwcrtvo57ies2oi4vzu5azqccua",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92953748",
      "status": "pinning",
      "created": "2023-01-25T23:03:16.193696Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92953371",
      "status": "pinning",
      "created": "2023-01-25T23:02:24.201077Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy",
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
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 45,
  "results": [
    {
      "requestid": "92954256",
      "status": "pinning",
      "created": "2023-01-25T23:04:19.047253Z",
      "delegates": [],
      "info": {},
      "pin": {
        "cid": "bafkreigf6crzflxiydtxknfymevj3t7qerciaa3gb234d6htbjunfaov4a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954245",
      "status": "pinning",
      "created": "2023-01-25T23:04:18.041843Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreid4vlbwspperfpfrin3kxkusr4looyajy5qocba3tnsbfu5zqs5ay",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954238",
      "status": "pinning",
      "created": "2023-01-25T23:04:17.0573Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifuhfgaypczn63rkefaoyqjfmq52urcqshzl6vi7ckjvwayubqyoi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954228",
      "status": "pinning",
      "created": "2023-01-25T23:04:16.041764Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiatiwuq7taa5s2stz2m6cwd666ocux4fz5ptqvdah5hurs4cf6eze",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954220",
      "status": "pinning",
      "created": "2023-01-25T23:04:15.063075Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigbblihx6qproq6apxiokphllmrwcrtvo57ies2oi4vzu5azqccua",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92953766",
      "status": "pinning",
      "created": "2023-01-25T23:03:18.417357Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiblj3yf2ejkpltppznppdchmixotfytby32u3prtrrtndajnoxb44",
        "name": "9287dfda-5947-4920-8ccc-586b21a4f436",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92953748",
      "status": "pinning",
      "created": "2023-01-25T23:03:16.193696Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreige2bnmngrpxlp42mz6zo3z7jy6qkbueid3kyaogthibwafxu3apy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92953371",
      "status": "pinning",
      "created": "2023-01-25T23:02:24.201077Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreig7yo7hss3x32orylr5as4wahroh2fqwgxpli3zzwrbfpfdkegiuy",
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
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 45,
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
  "date": "Wed, 25 Jan 2023 23:07:35 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
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
  "date": "Wed, 25 Jan 2023 23:05:20 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.3.9"
}
```
##### Body
```json
{
  "count": 55,
  "results": [
    {
      "requestid": "92954358",
      "status": "pinning",
      "created": "2023-01-25T23:04:29.099505Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954347",
      "status": "pinning",
      "created": "2023-01-25T23:04:28.051822Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954340",
      "status": "pinning",
      "created": "2023-01-25T23:04:27.063183Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954334",
      "status": "pinning",
      "created": "2023-01-25T23:04:26.042042Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954317",
      "status": "pinning",
      "created": "2023-01-25T23:04:25.049199Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954304",
      "status": "pinning",
      "created": "2023-01-25T23:04:24.077567Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954293",
      "status": "pinning",
      "created": "2023-01-25T23:04:23.046546Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954285",
      "status": "pinning",
      "created": "2023-01-25T23:04:22.034759Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954275",
      "status": "pinning",
      "created": "2023-01-25T23:04:21.061367Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954265",
      "status": "pinning",
      "created": "2023-01-25T23:04:20.04413Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q",
        "name": "",
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
  "count": 55,
  "results": [
    {
      "requestid": "92954358",
      "status": "pinning",
      "created": "2023-01-25T23:04:29.099505Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreid4h7wrwqcp5m4veqm5cv7yvt747h4zc3k23rtvbatpscba6jh2xu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954347",
      "status": "pinning",
      "created": "2023-01-25T23:04:28.051822Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigptm6k6c6rcqlodytxc2keu6p53d52rxnue56z7cy5vyrfg4wdry",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954340",
      "status": "pinning",
      "created": "2023-01-25T23:04:27.063183Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif3t2emcfht3f6s2manvoykxkhyemtwtmjhx4ech3oy77b3ajqsmu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954334",
      "status": "pinning",
      "created": "2023-01-25T23:04:26.042042Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidojf76l7t7brrq6qhzi6ybjc5zzhbzojxubezsxukv665ldt3why",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954317",
      "status": "pinning",
      "created": "2023-01-25T23:04:25.049199Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiha5wn73zf5ae6ygpcxrtcy7yvxcfmpdrbqv2n7pq5t2tdza5blrq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954304",
      "status": "pinning",
      "created": "2023-01-25T23:04:24.077567Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifrflhs3r6xbge2qug2bso4tzlfhzswbporpkqvlvkwwo47nreatq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954293",
      "status": "pinning",
      "created": "2023-01-25T23:04:23.046546Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigwrlz4tcnce7onrgarusmctiekuoyksxvjoqcvgikgyyrzy25nz4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954285",
      "status": "pinning",
      "created": "2023-01-25T23:04:22.034759Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif463g2bg62j2s63cr2vuepcff5stlepweps5le7zdxemvevncfei",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954275",
      "status": "pinning",
      "created": "2023-01-25T23:04:21.061367Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaej4cni47xa5xdojyrgl75bmb3sdt2xtqb6qwvtwm6neui5f62wu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      }
    },
    {
      "requestid": "92954265",
      "status": "pinning",
      "created": "2023-01-25T23:04:20.04413Z",
      "delegates": [
        "/ip4/139.178.90.133/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/139.178.90.133/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/10.0.0.2/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.96.126.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.114.52.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.214.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.107.40.0/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.98.199.128/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.105.51.64/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu",
        "/ip4/100.123.137.192/tcp/6745/p2p/12D3KooWPBPCPqvoWewMJXyuFrUfZJohxBDUyeWRGw6FYhMfNpvu"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigxea2omojsv2vptxjowxgi6g6x5fbjzi6gpyuugy2zcixl3kn65q",
        "name": "",
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
  "count": 55,
  "results": {}
}
```
