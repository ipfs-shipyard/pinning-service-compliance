
# https://nft.storage/api compliance:

Execution Date: 2022-06-13T20:50:57.929Z

Revision: [0251812](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/0251812)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'baeaaaczugywdqnzwhe2dgnry'](#pins-post-of-cid-baeaaaczugywdqnzwhe2dgnry----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='e6b6f671-7bac-4b78-9a97-858edf7b8d91'](#can-create-a-pin-with-namee6b6f671-7bac-4b78-9a97-858edf7b8d91----success)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response object matches api spec schema (failure)

  ❌ Returns a 403 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Response object doesn't match expected schema:

* "reason" is required

* "code" is not allowed

* "message" is not allowed

* "ok" is not allowed

  
### Details

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
```json
{
  "ok": false,
  "error": {
    "code": "EXPECTED_BEARER_STRING",
    "message": "API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`."
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2aafeac5a82-IAD",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:20 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "ok": false,
  "error": {
    "code": "EXPECTED_BEARER_STRING",
    "message": "API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`."
  }
}
```
## Request with invalid token - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response object matches api spec schema (failure)

  ❌ Returns a 403 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Response object doesn't match expected schema:

* "reason" is required

* "code" is not allowed

* "message" is not allowed

* "ok" is not allowed

  
### Details

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
```json
{
  "ok": false,
  "error": {
    "code": "ERROR_MALFORMED_TOKEN",
    "message": "API Key is malformed or failed to parse."
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2b0eef15a8e-IAD",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "ok": false,
  "error": {
    "code": "ERROR_MALFORMED_TOKEN",
    "message": "API Key is malformed or failed to parse."
  }
}
```
## Pins post of CID 'baeaaaczugywdqnzwhe2dgnry' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

  
### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaaczugywdqnzwhe2dgnry"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaaczugywdqnzwhe2dgnry",
  "status": "queued",
  "created": "2022-06-13T20:50:22.192+00:00",
  "pin": {
    "cid": "baeaaaczugywdqnzwhe2dgnry",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaaczugywdqnzwhe2dgnry",
  "status": "queued",
  "created": "2022-06-13T20:50:22.192Z",
  "pin": {
    "cid": "baeaaaczugywdqnzwhe2dgnry"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2b72f5b81af-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaaczugywdqnzwhe2dgnry",
  "status": "queued",
  "created": "2022-06-13T20:50:22.192+00:00",
  "pin": {
    "cid": "baeaaaczugywdqnzwhe2dgnry",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
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
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbug4wdsmjyge4tkmzshe

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbug4wdsmjyge4tkmzshe
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2c55e5f8f11-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can create and then delete a new pin - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Result is not null (success)

  🟢 Response code is 200 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbug4wdsmjyge4tkmzshe"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaadbug4wdsmjyge4tkmzshe",
  "status": "queued",
  "created": "2022-06-13T20:50:23.366+00:00",
  "pin": {
    "cid": "baeaaadbug4wdsmjyge4tkmzshe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbug4wdsmjyge4tkmzshe",
  "status": "queued",
  "created": "2022-06-13T20:50:23.366Z",
  "pin": {
    "cid": "baeaaadbug4wdsmjyge4tkmzshe"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2bdfda78018-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbug4wdsmjyge4tkmzshe",
  "status": "queued",
  "created": "2022-06-13T20:50:23.366+00:00",
  "pin": {
    "cid": "baeaaadbug4wdsmjyge4tkmzshe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## List pin objects (GET /pins) in all states - ❌ FAILED

### Expectations (2/3 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)




#### Response object doesn't match expected schema:

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

  
### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaaczugywdqnzwhe2dgnry",
      "status": "queued",
      "created": "2022-06-13T20:50:22.192+00:00",
      "pin": {
        "cid": "baeaaaczugywdqnzwhe2dgnry",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugu4daobthe4a",
      "status": "pinned",
      "created": "2022-04-08T19:23:35.118+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugu4daobthe4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytqmbwga4a",
      "status": "pinned",
      "created": "2022-04-08T19:13:07.155+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytqmbwga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytamzrha3a",
      "status": "pinned",
      "created": "2022-04-08T19:11:49.64+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytamzrha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 10,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2c76b9882a2-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaaczugywdqnzwhe2dgnry",
      "status": "queued",
      "created": "2022-06-13T20:50:22.192+00:00",
      "pin": {
        "cid": "baeaaaczugywdqnzwhe2dgnry",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugu4daobthe4a",
      "status": "pinned",
      "created": "2022-04-08T19:23:35.118+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugu4daobthe4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytqmbwga4a",
      "status": "pinned",
      "created": "2022-04-08T19:13:07.155+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytqmbwga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytamzrha3a",
      "status": "pinned",
      "created": "2022-04-08T19:11:49.64+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytamzrha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Get original pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadbvgawdkmbtgezdsnztgy

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbvgawdkmbtgezdsnztgy
```json
{
  "error": {
    "reason": "NOT_FOUND",
    "details": "pin not found"
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
null
```
#### Response - Not Found (404)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2e44aec81af-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "NOT_FOUND",
    "details": "pin not found"
  }
}
```
## Get new pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadbvgewdomjyge4temrrhe

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbvgewdomjyge4temrrhe
```json
{
  "requestid": "baeaaadbvgewdomjyge4temrrhe",
  "status": "queued",
  "created": "2022-06-13T20:50:28.301+00:00",
  "pin": {
    "cid": "baeaaadbvgewdomjyge4temrrhe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbvgewdomjyge4temrrhe",
  "status": "queued",
  "created": "2022-06-13T20:50:28.301Z",
  "pin": {
    "cid": "baeaaadbvgewdomjyge4temrrhe"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2ea98cd74c3-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbvgewdomjyge4temrrhe",
  "status": "queued",
  "created": "2022-06-13T20:50:28.301+00:00",
  "pin": {
    "cid": "baeaaadbvgewdomjyge4temrrhe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadbvgawdkmbtgezdsnztgy' can have cid 'baeaaadbvgawdkmbtgezdsnztgy' replaced with 'baeaaadbvgewdomjyge4temrrhe' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://nft.storage/api/pins/baeaaadbvgawdkmbtgezdsnztgy

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbvgewdomjyge4temrrhe"}
```
#### Response data from https://nft.storage/api/pins/baeaaadbvgawdkmbtgezdsnztgy
```json
{
  "requestid": "baeaaadbvgewdomjyge4temrrhe",
  "status": "queued",
  "created": "2022-06-13T20:50:28.301+00:00",
  "pin": {
    "cid": "baeaaadbvgewdomjyge4temrrhe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbvgewdomjyge4temrrhe",
  "status": "queued",
  "created": "2022-06-13T20:50:28.301Z",
  "pin": {
    "cid": "baeaaadbvgewdomjyge4temrrhe"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2d5cc075a8e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbvgewdomjyge4temrrhe",
  "status": "queued",
  "created": "2022-06-13T20:50:28.301+00:00",
  "pin": {
    "cid": "baeaaadbvgewdomjyge4temrrhe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (baeaaadbvgawdkmbtgezdsnztgy) (success)

  🟢 Response is ok (success)

  🟢 Replaced pin has the new & expected CID (success)

  🟢 Replaced pin has a different requestid (success)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbvgawdkmbtgezdsnztgy"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaadbvgawdkmbtgezdsnztgy",
  "status": "queued",
  "created": "2022-06-13T20:50:26.009+00:00",
  "pin": {
    "cid": "baeaaadbvgawdkmbtgezdsnztgy",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbvgawdkmbtgezdsnztgy",
  "status": "queued",
  "created": "2022-06-13T20:50:26.009Z",
  "pin": {
    "cid": "baeaaadbvgawdkmbtgezdsnztgy"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2ce3fcc5a57-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbvgawdkmbtgezdsnztgy",
  "status": "queued",
  "created": "2022-06-13T20:50:26.009+00:00",
  "pin": {
    "cid": "baeaaadbvgawdkmbtgezdsnztgy",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can retrieve pin with name 'e6b6f671-7bac-4b78-9a97-858edf7b8d91' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=e6b6f671-7bac-4b78-9a97-858edf7b8d91&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=e6b6f671-7bac-4b78-9a97-858edf7b8d91&match=exact
```json
{
  "count": 0,
  "results": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 0,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2fa38e35a57-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:33 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can retrieve pin with name 'E6B6F671-7BAC-4B78-9A97-858EDF7B8D91' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=E6B6F671-7BAC-4B78-9A97-858EDF7B8D91&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=E6B6F671-7BAC-4B78-9A97-858EDF7B8D91&match=iexact
```json
{
  "count": 0,
  "results": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 0,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2ff1af26fef-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can retrieve pin with name '7bac-4b78-9a97-858' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=7bac-4b78-9a97-858&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=7bac-4b78-9a97-858&match=partial
```json
{
  "count": 0,
  "results": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 0,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb3059c1a5b8f-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can retrieve pin with name '7BAC-4B78-9A97-858' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - GET: https://nft.storage/api/pins?name=7BAC-4B78-9A97-858&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=7BAC-4B78-9A97-858&match=ipartial
```json
{
  "count": 0,
  "results": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 0,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb30cefd25a5d-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can create a pin with name='e6b6f671-7bac-4b78-9a97-858edf7b8d91' - 🟢 SUCCESS

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

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbvgywdemjqgmzdgmjvgq","name":"e6b6f671-7bac-4b78-9a97-858edf7b8d91"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
  "status": "queued",
  "created": "2022-06-13T20:50:31.692+00:00",
  "pin": {
    "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
    "meta": null,
    "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91",
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
  "status": "queued",
  "created": "2022-06-13T20:50:31.692Z",
  "pin": {
    "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
    "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb2f1cbbb5a09-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
  "status": "queued",
  "created": "2022-06-13T20:50:31.692+00:00",
  "pin": {
    "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
    "meta": null,
    "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91",
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbwgiwdmmbvgy3dcmbuhe' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgiwdmmbvgy3dcmbuhe"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
  "status": "queued",
  "created": "2022-06-13T20:50:38.176+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
  "status": "queued",
  "created": "2022-06-13T20:50:38.176Z",
  "pin": {
    "cid": "baeaaadbwgiwdmmbvgy3dcmbuhe"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb31a0b7d5968-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
  "status": "queued",
  "created": "2022-06-13T20:50:38.176+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbwgiwdmmbwgm3tomrvga' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgiwdmmbwgm3tomrvga"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaadbwgiwdmmbwgm3tomrvga",
  "status": "queued",
  "created": "2022-06-13T20:50:39.622+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbwgm3tomrvga",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbwgiwdmmbwgm3tomrvga",
  "status": "queued",
  "created": "2022-06-13T20:50:39.622Z",
  "pin": {
    "cid": "baeaaadbwgiwdmmbwgm3tomrvga"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb3237c8e5a16-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgiwdmmbwgm3tomrvga",
  "status": "queued",
  "created": "2022-06-13T20:50:39.622+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbwgm3tomrvga",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbwgiwdmmbwhezteojvge' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgiwdmmbwhezteojvge"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaadbwgiwdmmbwhezteojvge",
  "status": "queued",
  "created": "2022-06-13T20:50:41.074+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbwhezteojvge",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbwgiwdmmbwhezteojvge",
  "status": "queued",
  "created": "2022-06-13T20:50:41.074Z",
  "pin": {
    "cid": "baeaaadbwgiwdmmbwhezteojvge"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb32ccfde6fd4-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgiwdmmbwhezteojvge",
  "status": "queued",
  "created": "2022-06-13T20:50:41.074+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbwhezteojvge",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbwgiwdmmbxgqytinbvgi' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgiwdmmbxgqytinbvgi"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaadbwgiwdmmbxgqytinbvgi",
  "status": "queued",
  "created": "2022-06-13T20:50:42.568+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbxgqytinbvgi",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbwgiwdmmbxgqytinbvgi",
  "status": "queued",
  "created": "2022-06-13T20:50:42.568Z",
  "pin": {
    "cid": "baeaaadbwgiwdmmbxgqytinbvgi"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb334ae6157cd-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgiwdmmbxgqytinbvgi",
  "status": "queued",
  "created": "2022-06-13T20:50:42.568+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbxgqytinbvgi",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadbwgiwdmmbygaydinrvgm' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgiwdmmbygaydinrvgm"}
```
#### Response data from https://nft.storage/api/pins
```json
{
  "requestid": "baeaaadbwgiwdmmbygaydinrvgm",
  "status": "queued",
  "created": "2022-06-13T20:50:43.59+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbygaydinrvgm",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "requestid": "baeaaadbwgiwdmmbygaydinrvgm",
  "status": "queued",
  "created": "2022-06-13T20:50:43.590Z",
  "pin": {
    "cid": "baeaaadbwgiwdmmbygaydinrvgm"
  },
  "delegates": []
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb33d791f5a5d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbwgiwdmmbygaydinrvgm",
  "status": "queued",
  "created": "2022-06-13T20:50:43.59+00:00",
  "pin": {
    "cid": "baeaaadbwgiwdmmbygaydinrvgm",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
## Pagination: First page of pins - ❌ FAILED

### Expectations (3/5 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is greater than or equal to 15 (failure)

  ❌ Count is greater than the number of pins returned (failure)

  🟢 Number of pins returned defaults to 10 (success)





### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadbwgiwdmmbygaydinrvgm",
      "status": "queued",
      "created": "2022-06-13T20:50:43.59+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbygaydinrvgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbxgqytinbvgi",
      "status": "queued",
      "created": "2022-06-13T20:50:42.568+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbxgqytinbvgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbwhezteojvge",
      "status": "queued",
      "created": "2022-06-13T20:50:41.074+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbwhezteojvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbwgm3tomrvga",
      "status": "queued",
      "created": "2022-06-13T20:50:39.622+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbwgm3tomrvga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
      "status": "queued",
      "created": "2022-06-13T20:50:38.176+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
      "status": "queued",
      "created": "2022-06-13T20:50:31.692+00:00",
      "pin": {
        "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
        "meta": null,
        "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdomjyge4temrrhe",
      "status": "queued",
      "created": "2022-06-13T20:50:28.301+00:00",
      "pin": {
        "cid": "baeaaadbvgewdomjyge4temrrhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczugywdqnzwhe2dgnry",
      "status": "queued",
      "created": "2022-06-13T20:50:22.192+00:00",
      "pin": {
        "cid": "baeaaaczugywdqnzwhe2dgnry",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 10,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb34548f75968-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadbwgiwdmmbygaydinrvgm",
      "status": "queued",
      "created": "2022-06-13T20:50:43.59+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbygaydinrvgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbxgqytinbvgi",
      "status": "queued",
      "created": "2022-06-13T20:50:42.568+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbxgqytinbvgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbwhezteojvge",
      "status": "queued",
      "created": "2022-06-13T20:50:41.074+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbwhezteojvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbwgm3tomrvga",
      "status": "queued",
      "created": "2022-06-13T20:50:39.622+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbwgm3tomrvga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
      "status": "queued",
      "created": "2022-06-13T20:50:38.176+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
      "status": "queued",
      "created": "2022-06-13T20:50:31.692+00:00",
      "pin": {
        "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
        "meta": null,
        "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdomjyge4temrrhe",
      "status": "queued",
      "created": "2022-06-13T20:50:28.301+00:00",
      "pin": {
        "cid": "baeaaadbvgewdomjyge4temrrhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczugywdqnzwhe2dgnry",
      "status": "queued",
      "created": "2022-06-13T20:50:22.192+00:00",
      "pin": {
        "cid": "baeaaaczugywdqnzwhe2dgnry",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Pagination: Retrieve the next page of pins - ❌ FAILED

### Expectations (2/3 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T18%3A31%3A12.220Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T18%3A31%3A12.220Z
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugu4daobthe4a",
      "status": "pinned",
      "created": "2022-04-08T19:23:35.118+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugu4daobthe4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytqmbwga4a",
      "status": "pinned",
      "created": "2022-04-08T19:13:07.155+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytqmbwga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytamzrha3a",
      "status": "pinned",
      "created": "2022-04-08T19:11:49.64+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytamzrha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguydcojzgmya",
      "status": "pinned",
      "created": "2022-04-08T19:10:26.275+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguydcojzgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugq3tgobwheyq",
      "status": "pinned",
      "created": "2022-04-08T19:05:44.96+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugq3tgobwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 10,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb34af89c6fb0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugu4daobthe4a",
      "status": "pinned",
      "created": "2022-04-08T19:23:35.118+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugu4daobthe4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytqmbwga4a",
      "status": "pinned",
      "created": "2022-04-08T19:13:07.155+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytqmbwga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytamzrha3a",
      "status": "pinned",
      "created": "2022-04-08T19:11:49.64+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytamzrha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguydcojzgmya",
      "status": "pinned",
      "created": "2022-04-08T19:10:26.275+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguydcojzgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugq3tgobwheyq",
      "status": "pinned",
      "created": "2022-04-08T19:05:44.96+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugq3tgobwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (17/20 successful)

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

  ❌ Count is greater than or equal to 15 (failure)

  ❌ Count is greater than the number of pins returned (failure)

  🟢 Number of pins returned defaults to 10 (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
      "status": "queued",
      "created": "2022-06-13T20:50:31.692+00:00",
      "pin": {
        "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
        "meta": null,
        "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdomjyge4temrrhe",
      "status": "queued",
      "created": "2022-06-13T20:50:28.301+00:00",
      "pin": {
        "cid": "baeaaadbvgewdomjyge4temrrhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczugywdqnzwhe2dgnry",
      "status": "queued",
      "created": "2022-06-13T20:50:22.192+00:00",
      "pin": {
        "cid": "baeaaaczugywdqnzwhe2dgnry",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugu4daobthe4a",
      "status": "pinned",
      "created": "2022-04-08T19:23:35.118+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugu4daobthe4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 10,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb313bca182ae-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
      "status": "queued",
      "created": "2022-06-13T20:50:31.692+00:00",
      "pin": {
        "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
        "meta": null,
        "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdomjyge4temrrhe",
      "status": "queued",
      "created": "2022-06-13T20:50:28.301+00:00",
      "pin": {
        "cid": "baeaaadbvgewdomjyge4temrrhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczugywdqnzwhe2dgnry",
      "status": "queued",
      "created": "2022-06-13T20:50:22.192+00:00",
      "pin": {
        "cid": "baeaaaczugywdqnzwhe2dgnry",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugu4daobthe4a",
      "status": "pinned",
      "created": "2022-04-08T19:23:35.118+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugu4daobthe4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Can delete pin with requestid 'baeaaadbwgiwdmmbygaydinrvgm' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwgiwdmmbygaydinrvgm

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgiwdmmbygaydinrvgm
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb358faea9c55-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbwgiwdmmbxgqytinbvgi' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwgiwdmmbxgqytinbvgi

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgiwdmmbxgqytinbvgi
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb35bdb5b5824-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbwgiwdmmbwhezteojvge' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwgiwdmmbwhezteojvge

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgiwdmmbwhezteojvge
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb35f2cd757cd-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbwgiwdmmbwgm3tomrvga' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwgiwdmmbwgm3tomrvga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgiwdmmbwgm3tomrvga
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb3657ac95c6b-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbwgiwdmmbvgy3dcmbuhe' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwgiwdmmbvgy3dcmbuhe

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgiwdmmbvgy3dcmbuhe
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb36bb9968021-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbvgywdemjqgmzdgmjvgq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbvgywdemjqgmzdgmjvgq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbvgywdemjqgmzdgmjvgq
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb37208445968-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbvgewdomjyge4temrrhe' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbvgewdomjyge4temrrhe

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbvgewdomjyge4temrrhe
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb3783e1f57a8-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaaczugywdqnzwhe2dgnry' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaaczugywdqnzwhe2dgnry

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaaczugywdqnzwhe2dgnry
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb37e8af65a16-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teobzha3donbqha2a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teobzha3donbqha2a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teobzha3donbqha2a
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb384bd7e82c9-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teobzha3dombxgaza' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teobzha3dombxgaza

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teobzha3dombxgaza
```json
null
```
#### Response data after being parsed by RemotePinningServiceClient
```json
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb38b08335752-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns a count of zero (failure)





### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugu4daobthe4a",
      "status": "pinned",
      "created": "2022-04-08T19:23:35.118+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugu4daobthe4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytqmbwga4a",
      "status": "pinned",
      "created": "2022-04-08T19:13:07.155+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytqmbwga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytamzrha3a",
      "status": "pinned",
      "created": "2022-04-08T19:11:49.64+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytamzrha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguydcojzgmya",
      "status": "pinned",
      "created": "2022-04-08T19:10:26.275+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguydcojzgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugq3tgobwheyq",
      "status": "pinned",
      "created": "2022-04-08T19:05:44.96+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugq3tgobwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugq3dqnbwgeya",
      "status": "pinned",
      "created": "2022-04-08T19:04:50.765+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugq3dqnbwgeya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 10,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb39139635a87-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:57 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadjrgy2teobzhaytmobtgmya",
      "status": "failed",
      "created": "2022-05-18T18:22:49.602+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmobtgmya",
        "meta": null,
        "name": "419bd736-5c02-4f09-b8ab-dd071d0b27e7",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytmmzqge2a",
      "status": "failed",
      "created": "2022-05-18T18:22:43.927+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytmmzqge2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknrygu2q",
      "status": "failed",
      "created": "2022-05-18T18:22:38.204+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknrygu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzhaytknbqg4ya",
      "status": "failed",
      "created": "2022-05-18T18:22:35.326+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzhaytknbqg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugu4daobthe4a",
      "status": "pinned",
      "created": "2022-04-08T19:23:35.118+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugu4daobthe4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytqmbwga4a",
      "status": "pinned",
      "created": "2022-04-08T19:13:07.155+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytqmbwga4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguytamzrha3a",
      "status": "pinned",
      "created": "2022-04-08T19:11:49.64+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguytamzrha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbuguydcojzgmya",
      "status": "pinned",
      "created": "2022-04-08T19:10:26.275+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbuguydcojzgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugq3tgobwheyq",
      "status": "pinned",
      "created": "2022-04-08T19:05:44.96+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugq3tgobwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsnbugq3dqnbwgeya",
      "status": "pinned",
      "created": "2022-04-08T19:04:50.765+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsnbugq3dqnbwgeya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
## Can delete all pins - ❌ FAILED

### Expectations (20/21 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  ❌ Final pinsGet call returns a count of zero (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadbwgiwdmmbygaydinrvgm",
      "status": "queued",
      "created": "2022-06-13T20:50:43.59+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbygaydinrvgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbxgqytinbvgi",
      "status": "queued",
      "created": "2022-06-13T20:50:42.568+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbxgqytinbvgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbwhezteojvge",
      "status": "queued",
      "created": "2022-06-13T20:50:41.074+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbwhezteojvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbwgm3tomrvga",
      "status": "queued",
      "created": "2022-06-13T20:50:39.622+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbwgm3tomrvga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
      "status": "queued",
      "created": "2022-06-13T20:50:38.176+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
      "status": "queued",
      "created": "2022-06-13T20:50:31.692+00:00",
      "pin": {
        "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
        "meta": null,
        "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdomjyge4temrrhe",
      "status": "queued",
      "created": "2022-06-13T20:50:28.301+00:00",
      "pin": {
        "cid": "baeaaadbvgewdomjyge4temrrhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczugywdqnzwhe2dgnry",
      "status": "queued",
      "created": "2022-06-13T20:50:22.192+00:00",
      "pin": {
        "cid": "baeaaaczugywdqnzwhe2dgnry",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```json
{
  "count": 10,
  "results": {}
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71adb352b8105a16-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 13 Jun 2022 20:50:47 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadbwgiwdmmbygaydinrvgm",
      "status": "queued",
      "created": "2022-06-13T20:50:43.59+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbygaydinrvgm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbxgqytinbvgi",
      "status": "queued",
      "created": "2022-06-13T20:50:42.568+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbxgqytinbvgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbwhezteojvge",
      "status": "queued",
      "created": "2022-06-13T20:50:41.074+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbwhezteojvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbwgm3tomrvga",
      "status": "queued",
      "created": "2022-06-13T20:50:39.622+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbwgm3tomrvga",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
      "status": "queued",
      "created": "2022-06-13T20:50:38.176+00:00",
      "pin": {
        "cid": "baeaaadbwgiwdmmbvgy3dcmbuhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgywdemjqgmzdgmjvgq",
      "status": "queued",
      "created": "2022-06-13T20:50:31.692+00:00",
      "pin": {
        "cid": "baeaaadbvgywdemjqgmzdgmjvgq",
        "meta": null,
        "name": "e6b6f671-7bac-4b78-9a97-858edf7b8d91",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdomjyge4temrrhe",
      "status": "queued",
      "created": "2022-06-13T20:50:28.301+00:00",
      "pin": {
        "cid": "baeaaadbvgewdomjyge4temrrhe",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczugywdqnzwhe2dgnry",
      "status": "queued",
      "created": "2022-06-13T20:50:22.192+00:00",
      "pin": {
        "cid": "baeaaaczugywdqnzwhe2dgnry",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3donbqha2a",
      "status": "failed",
      "created": "2022-05-18T18:31:14.981+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3donbqha2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgy2teobzha3dombxgaza",
      "status": "failed",
      "created": "2022-05-18T18:31:12.22+00:00",
      "pin": {
        "cid": "baeaaadjrgy2teobzha3dombxgaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
