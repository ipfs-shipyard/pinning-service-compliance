
# https://nft.storage/api compliance:

Execution Date: 2022-06-15T00:19:00.993Z

Revision: [2423a26](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/2423a26)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'baeaaadjtgeycymzzha4dqojugmza'](#pins-post-of-cid-baeaaadjtgeycymzzha4dqojugmza----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='f83ae4cd-37cd-42fa-9003-154d2d2248a5'](#can-create-a-pin-with-namef83ae4cd-37cd-42fa-9003-154d2d2248a5----success)

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

#### Request
```
GET https://nft.storage/api/pins
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b720c6eeac5b22-IAD",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:22 GMT",
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

##### Body (as JSON)
```json
{
  "ok": false,
  "error": {
    "code": "EXPECTED_BEARER_STRING",
    "message": "API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`."
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
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

#### Request
```
GET https://nft.storage/api/pins
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b720cc8ae481c9-IAD",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:23 GMT",
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

##### Body (as JSON)
```json
{
  "ok": false,
  "error": {
    "code": "ERROR_MALFORMED_TOKEN",
    "message": "API Key is malformed or failed to parse."
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'baeaaadjtgeycymzzha4dqojugmza' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

  
### Details

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtgeycymzzha4dqojugmza"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b720d2dfb95b29-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgeycymzzha4dqojugmza",
  "status": "queued",
  "created": "2022-06-15T00:18:24.542+00:00",
  "pin": {
    "cid": "baeaaadjtgeycymzzha4dqojugmza",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtgeycymzzha4dqojugmza",
  "status": "queued",
  "created": "2022-06-15T00:18:24.542+00:00",
  "pin": {
    "cid": "baeaaadjtgeycymzzha4dqojugmza",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtgeycymzzha4dqojugmza",
  "status": "queued",
  "created": "2022-06-15T00:18:24.542Z",
  "pin": {
    "cid": "baeaaadjtgeycymzzha4dqojugmza"
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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtgezcynztg42tknjvgi2a
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b720e358b55b1d-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtgezcynztg42tknjvgi2a"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b720dca84d5a22-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgezcynztg42tknjvgi2a",
  "status": "queued",
  "created": "2022-06-15T00:18:25.586+00:00",
  "pin": {
    "cid": "baeaaadjtgezcynztg42tknjvgi2a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtgezcynztg42tknjvgi2a",
  "status": "queued",
  "created": "2022-06-15T00:18:25.586+00:00",
  "pin": {
    "cid": "baeaaadjtgezcynztg42tknjvgi2a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtgezcynztg42tknjvgi2a",
  "status": "queued",
  "created": "2022-06-15T00:18:25.586Z",
  "pin": {
    "cid": "baeaaadjtgezcynztg42tknjvgi2a"
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

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

  
### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b720e59bcd828d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:27 GMT",
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
      "requestid": "baeaaadjtgeycymzzha4dqojugmza",
      "status": "queued",
      "created": "2022-06-15T00:18:24.542+00:00",
      "pin": {
        "cid": "baeaaadjtgeycymzzha4dqojugmza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcynjygy4dmnzwgmya",
      "status": "queued",
      "created": "2022-06-14T23:54:06.311+00:00",
      "pin": {
        "cid": "baeaaadjrgazcynjygy4dmnzwgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
      "status": "pinned",
      "created": "2022-04-07T23:06:39.645+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
      "status": "pinned",
      "created": "2022-04-07T23:04:17.929+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
      "status": "pinned",
      "created": "2022-04-07T23:03:02.404+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgiytombzga2a",
      "status": "pinned",
      "created": "2022-04-07T20:09:37.621+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgiytombzga2a",
        "meta": null,
        "name": "34056919-edab-42a8-95df-23d6669d5ab0",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
      "status": "pinned",
      "created": "2022-04-07T19:54:23.769+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
        "meta": null,
        "name": "f6a9dee7-39fa-489a-b022-dae5dd96477f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
      "status": "pinned",
      "created": "2022-04-07T19:49:23.136+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
        "meta": null,
        "name": "bd805770-e453-433b-9f4c-db29a52f6097",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
      "status": "pinned",
      "created": "2022-04-07T18:22:46.814+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
        "meta": null,
        "name": "8b9f1506-32c9-44eb-aae6-8cafc8b5f281",
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadjtgeycymzzha4dqojugmza",
      "status": "queued",
      "created": "2022-06-15T00:18:24.542+00:00",
      "pin": {
        "cid": "baeaaadjtgeycymzzha4dqojugmza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcynjygy4dmnzwgmya",
      "status": "queued",
      "created": "2022-06-14T23:54:06.311+00:00",
      "pin": {
        "cid": "baeaaadjrgazcynjygy4dmnzwgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
      "status": "pinned",
      "created": "2022-04-07T23:06:39.645+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
      "status": "pinned",
      "created": "2022-04-07T23:04:17.929+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
      "status": "pinned",
      "created": "2022-04-07T23:03:02.404+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgiytombzga2a",
      "status": "pinned",
      "created": "2022-04-07T20:09:37.621+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgiytombzga2a",
        "meta": null,
        "name": "34056919-edab-42a8-95df-23d6669d5ab0",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
      "status": "pinned",
      "created": "2022-04-07T19:54:23.769+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
        "meta": null,
        "name": "f6a9dee7-39fa-489a-b022-dae5dd96477f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
      "status": "pinned",
      "created": "2022-04-07T19:49:23.136+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
        "meta": null,
        "name": "bd805770-e453-433b-9f4c-db29a52f6097",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
      "status": "pinned",
      "created": "2022-04-07T18:22:46.814+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
        "meta": null,
        "name": "8b9f1506-32c9-44eb-aae6-8cafc8b5f281",
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
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
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
GET https://nft.storage/api/pins/baeaaadjtge2symjthaytmmrvhazq
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721047aa55b29-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:32 GMT",
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

##### Body (as JSON)
```json
{
  "error": {
    "reason": "NOT_FOUND",
    "details": "pin not found"
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
GET https://nft.storage/api/pins/baeaaadjtge3cyobtgm4dknbtha3a
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7210aac285a52-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:33 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
  "status": "queued",
  "created": "2022-06-15T00:18:30.882+00:00",
  "pin": {
    "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
  "status": "queued",
  "created": "2022-06-15T00:18:30.882+00:00",
  "pin": {
    "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
  "status": "queued",
  "created": "2022-06-15T00:18:30.882Z",
  "pin": {
    "cid": "baeaaadjtge3cyobtgm4dknbtha3a"
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjtge2symjthaytmmrvhazq' can have cid 'baeaaadjtge2symjthaytmmrvhazq' replaced with 'baeaaadjtge3cyobtgm4dknbtha3a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
POST https://nft.storage/api/pins/baeaaadjtge2symjthaytmmrvhazq
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
{"cid":"baeaaadjtge3cyobtgm4dknbtha3a"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b720f649cd5806-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
  "status": "queued",
  "created": "2022-06-15T00:18:30.882+00:00",
  "pin": {
    "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
  "status": "queued",
  "created": "2022-06-15T00:18:30.882+00:00",
  "pin": {
    "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
  "status": "queued",
  "created": "2022-06-15T00:18:30.882Z",
  "pin": {
    "cid": "baeaaadjtge3cyobtgm4dknbtha3a"
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (baeaaadjtge2symjthaytmmrvhazq) (success)

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

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtge2symjthaytmmrvhazq"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b720ebdc40801b-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtge2symjthaytmmrvhazq",
  "status": "queued",
  "created": "2022-06-15T00:18:28.376+00:00",
  "pin": {
    "cid": "baeaaadjtge2symjthaytmmrvhazq",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtge2symjthaytmmrvhazq",
  "status": "queued",
  "created": "2022-06-15T00:18:28.376+00:00",
  "pin": {
    "cid": "baeaaadjtge2symjthaytmmrvhazq",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtge2symjthaytmmrvhazq",
  "status": "queued",
  "created": "2022-06-15T00:18:28.376Z",
  "pin": {
    "cid": "baeaaadjtge2symjthaytmmrvhazq"
  },
  "delegates": []
}
```
## Can retrieve pin with name 'f83ae4cd-37cd-42fa-9003-154d2d2248a5' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=f83ae4cd-37cd-42fa-9003-154d2d2248a5&match=exact
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721185dda81b7-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:36 GMT",
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
## Can retrieve pin with name 'F83AE4CD-37CD-42FA-9003-154D2D2248A5' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=F83AE4CD-37CD-42FA-9003-154D2D2248A5&match=iexact
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721207ffe81ee-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:37 GMT",
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
## Can retrieve pin with name '37cd-42fa-9003-154' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=37cd-42fa-9003-154&match=partial
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721266c2b5c4c-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:38 GMT",
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
## Can retrieve pin with name '37CD-42FA-9003-154' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=37CD-42FA-9003-154&match=ipartial
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7212d4db65b29-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:39 GMT",
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
## Can create a pin with name='f83ae4cd-37cd-42fa-9003-154d2d2248a5' - 🟢 SUCCESS

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

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtgiysymjqg4ydqobrgqya","name":"f83ae4cd-37cd-42fa-9003-154d2d2248a5"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721110fbb5b1d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
  "status": "queued",
  "created": "2022-06-15T00:18:34.204+00:00",
  "pin": {
    "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
    "meta": null,
    "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
  "status": "queued",
  "created": "2022-06-15T00:18:34.204+00:00",
  "pin": {
    "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
    "meta": null,
    "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
  "status": "queued",
  "created": "2022-06-15T00:18:34.204Z",
  "pin": {
    "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
    "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtgi3symjygezdenbuhe2a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtgi3symjygezdenbuhe2a"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721386d9081a6-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgi3symjygezdenbuhe2a",
  "status": "queued",
  "created": "2022-06-15T00:18:40.652+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjygezdenbuhe2a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtgi3symjygezdenbuhe2a",
  "status": "queued",
  "created": "2022-06-15T00:18:40.652+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjygezdenbuhe2a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtgi3symjygezdenbuhe2a",
  "status": "queued",
  "created": "2022-06-15T00:18:40.652Z",
  "pin": {
    "cid": "baeaaadjtgi3symjygezdenbuhe2a"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtgi3symjyge4dqmbrha4q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtgi3symjyge4dqmbrha4q"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721415a595b8f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgi3symjyge4dqmbrha4q",
  "status": "queued",
  "created": "2022-06-15T00:18:42.11+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjyge4dqmbrha4q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtgi3symjyge4dqmbrha4q",
  "status": "queued",
  "created": "2022-06-15T00:18:42.11+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjyge4dqmbrha4q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtgi3symjyge4dqmbrha4q",
  "status": "queued",
  "created": "2022-06-15T00:18:42.110Z",
  "pin": {
    "cid": "baeaaadjtgi3symjyge4dqmbrha4q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtgi3symjygiztgmbrha2q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtgi3symjygiztgmbrha2q"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7214acc7681c9-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgi3symjygiztgmbrha2q",
  "status": "queued",
  "created": "2022-06-15T00:18:43.608+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjygiztgmbrha2q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtgi3symjygiztgmbrha2q",
  "status": "queued",
  "created": "2022-06-15T00:18:43.608+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjygiztgmbrha2q",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtgi3symjygiztgmbrha2q",
  "status": "queued",
  "created": "2022-06-15T00:18:43.608Z",
  "pin": {
    "cid": "baeaaadjtgi3symjygiztgmbrha2q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtgi3symjygi3tcmrshaza' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtgi3symjygi3tcmrshaza"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b72153e90b81b8-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgi3symjygi3tcmrshaza",
  "status": "queued",
  "created": "2022-06-15T00:18:44.757+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjygi3tcmrshaza",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtgi3symjygi3tcmrshaza",
  "status": "queued",
  "created": "2022-06-15T00:18:44.757+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjygi3tcmrshaza",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtgi3symjygi3tcmrshaza",
  "status": "queued",
  "created": "2022-06-15T00:18:44.757Z",
  "pin": {
    "cid": "baeaaadjtgi3symjygi3tcmrshaza"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjtgi3symjygmytqmbvg44a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://nft.storage/api/pins
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
{"cid":"baeaaadjtgi3symjygmytqmbvg44a"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7215a9cc67fc3-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtgi3symjygmytqmbvg44a",
  "status": "queued",
  "created": "2022-06-15T00:18:46.09+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjygmytqmbvg44a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjtgi3symjygmytqmbvg44a",
  "status": "queued",
  "created": "2022-06-15T00:18:46.09+00:00",
  "pin": {
    "cid": "baeaaadjtgi3symjygmytqmbvg44a",
    "meta": null,
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjtgi3symjygmytqmbvg44a",
  "status": "queued",
  "created": "2022-06-15T00:18:46.090Z",
  "pin": {
    "cid": "baeaaadjtgi3symjygmytqmbvg44a"
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

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b72163df475806-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:47 GMT",
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
      "requestid": "baeaaadjtgi3symjygmytqmbvg44a",
      "status": "queued",
      "created": "2022-06-15T00:18:46.09+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygmytqmbvg44a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygi3tcmrshaza",
      "status": "queued",
      "created": "2022-06-15T00:18:44.757+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygi3tcmrshaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygiztgmbrha2q",
      "status": "queued",
      "created": "2022-06-15T00:18:43.608+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygiztgmbrha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjyge4dqmbrha4q",
      "status": "queued",
      "created": "2022-06-15T00:18:42.11+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjyge4dqmbrha4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygezdenbuhe2a",
      "status": "queued",
      "created": "2022-06-15T00:18:40.652+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygezdenbuhe2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
      "status": "queued",
      "created": "2022-06-15T00:18:34.204+00:00",
      "pin": {
        "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
        "meta": null,
        "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
      "status": "queued",
      "created": "2022-06-15T00:18:30.882+00:00",
      "pin": {
        "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgeycymzzha4dqojugmza",
      "status": "queued",
      "created": "2022-06-15T00:18:24.542+00:00",
      "pin": {
        "cid": "baeaaadjtgeycymzzha4dqojugmza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcynjygy4dmnzwgmya",
      "status": "queued",
      "created": "2022-06-14T23:54:06.311+00:00",
      "pin": {
        "cid": "baeaaadjrgazcynjygy4dmnzwgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadjtgi3symjygmytqmbvg44a",
      "status": "queued",
      "created": "2022-06-15T00:18:46.09+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygmytqmbvg44a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygi3tcmrshaza",
      "status": "queued",
      "created": "2022-06-15T00:18:44.757+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygi3tcmrshaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygiztgmbrha2q",
      "status": "queued",
      "created": "2022-06-15T00:18:43.608+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygiztgmbrha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjyge4dqmbrha4q",
      "status": "queued",
      "created": "2022-06-15T00:18:42.11+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjyge4dqmbrha4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygezdenbuhe2a",
      "status": "queued",
      "created": "2022-06-15T00:18:40.652+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygezdenbuhe2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
      "status": "queued",
      "created": "2022-06-15T00:18:34.204+00:00",
      "pin": {
        "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
        "meta": null,
        "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
      "status": "queued",
      "created": "2022-06-15T00:18:30.882+00:00",
      "pin": {
        "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgeycymzzha4dqojugmza",
      "status": "queued",
      "created": "2022-06-15T00:18:24.542+00:00",
      "pin": {
        "cid": "baeaaadjtgeycymzzha4dqojugmza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcynjygy4dmnzwgmya",
      "status": "queued",
      "created": "2022-06-14T23:54:06.311+00:00",
      "pin": {
        "cid": "baeaaadjrgazcynjygy4dmnzwgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
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
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-14T23%3A53%3A58.420Z
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721688a8c5a15-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:48 GMT",
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
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
      "status": "pinned",
      "created": "2022-04-07T23:06:39.645+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
      "status": "pinned",
      "created": "2022-04-07T23:04:17.929+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
      "status": "pinned",
      "created": "2022-04-07T23:03:02.404+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgiytombzga2a",
      "status": "pinned",
      "created": "2022-04-07T20:09:37.621+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgiytombzga2a",
        "meta": null,
        "name": "34056919-edab-42a8-95df-23d6669d5ab0",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
      "status": "pinned",
      "created": "2022-04-07T19:54:23.769+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
        "meta": null,
        "name": "f6a9dee7-39fa-489a-b022-dae5dd96477f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
      "status": "pinned",
      "created": "2022-04-07T19:49:23.136+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
        "meta": null,
        "name": "bd805770-e453-433b-9f4c-db29a52f6097",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
      "status": "pinned",
      "created": "2022-04-07T18:22:46.814+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
        "meta": null,
        "name": "8b9f1506-32c9-44eb-aae6-8cafc8b5f281",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgmydgobwgmzq",
      "status": "pinned",
      "created": "2022-04-07T17:37:28.743+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgmydgobwgmzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgmydamjzgiza",
      "status": "pinned",
      "created": "2022-04-07T17:36:51.656+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgmydamjzgiza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
      "status": "pinned",
      "created": "2022-04-07T23:06:39.645+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
      "status": "pinned",
      "created": "2022-04-07T23:04:17.929+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
      "status": "pinned",
      "created": "2022-04-07T23:03:02.404+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgiytombzga2a",
      "status": "pinned",
      "created": "2022-04-07T20:09:37.621+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgiytombzga2a",
        "meta": null,
        "name": "34056919-edab-42a8-95df-23d6669d5ab0",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
      "status": "pinned",
      "created": "2022-04-07T19:54:23.769+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
        "meta": null,
        "name": "f6a9dee7-39fa-489a-b022-dae5dd96477f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
      "status": "pinned",
      "created": "2022-04-07T19:49:23.136+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
        "meta": null,
        "name": "bd805770-e453-433b-9f4c-db29a52f6097",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
      "status": "pinned",
      "created": "2022-04-07T18:22:46.814+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
        "meta": null,
        "name": "8b9f1506-32c9-44eb-aae6-8cafc8b5f281",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgmydgobwgmzq",
      "status": "pinned",
      "created": "2022-04-07T17:37:28.743+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgmydgobwgmzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgmydamjzgiza",
      "status": "pinned",
      "created": "2022-04-07T17:36:51.656+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgmydamjzgiza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
  "results": {}
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

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7213238755806-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:39 GMT",
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
      "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
      "status": "queued",
      "created": "2022-06-15T00:18:34.204+00:00",
      "pin": {
        "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
        "meta": null,
        "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
      "status": "queued",
      "created": "2022-06-15T00:18:30.882+00:00",
      "pin": {
        "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgeycymzzha4dqojugmza",
      "status": "queued",
      "created": "2022-06-15T00:18:24.542+00:00",
      "pin": {
        "cid": "baeaaadjtgeycymzzha4dqojugmza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcynjygy4dmnzwgmya",
      "status": "queued",
      "created": "2022-06-14T23:54:06.311+00:00",
      "pin": {
        "cid": "baeaaadjrgazcynjygy4dmnzwgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
      "status": "pinned",
      "created": "2022-04-07T23:06:39.645+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
      "status": "pinned",
      "created": "2022-04-07T23:04:17.929+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
      "status": "pinned",
      "created": "2022-04-07T23:03:02.404+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgiytombzga2a",
      "status": "pinned",
      "created": "2022-04-07T20:09:37.621+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgiytombzga2a",
        "meta": null,
        "name": "34056919-edab-42a8-95df-23d6669d5ab0",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
      "status": "pinned",
      "created": "2022-04-07T19:54:23.769+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
        "meta": null,
        "name": "f6a9dee7-39fa-489a-b022-dae5dd96477f",
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
      "status": "queued",
      "created": "2022-06-15T00:18:34.204+00:00",
      "pin": {
        "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
        "meta": null,
        "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
      "status": "queued",
      "created": "2022-06-15T00:18:30.882+00:00",
      "pin": {
        "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgeycymzzha4dqojugmza",
      "status": "queued",
      "created": "2022-06-15T00:18:24.542+00:00",
      "pin": {
        "cid": "baeaaadjtgeycymzzha4dqojugmza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcynjygy4dmnzwgmya",
      "status": "queued",
      "created": "2022-06-14T23:54:06.311+00:00",
      "pin": {
        "cid": "baeaaadjrgazcynjygy4dmnzwgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
      "status": "pinned",
      "created": "2022-04-07T23:06:39.645+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
      "status": "pinned",
      "created": "2022-04-07T23:04:17.929+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
      "status": "pinned",
      "created": "2022-04-07T23:03:02.404+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgiytombzga2a",
      "status": "pinned",
      "created": "2022-04-07T20:09:37.621+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgiytombzga2a",
        "meta": null,
        "name": "34056919-edab-42a8-95df-23d6669d5ab0",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
      "status": "pinned",
      "created": "2022-04-07T19:54:23.769+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
        "meta": null,
        "name": "f6a9dee7-39fa-489a-b022-dae5dd96477f",
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
  "results": {}
}
```
## Can delete pin with requestid 'baeaaadjtgi3symjygmytqmbvg44a' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtgi3symjygmytqmbvg44a
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b72175ef629c6a-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadjtgi3symjygi3tcmrshaza' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtgi3symjygi3tcmrshaza
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7217c28798215-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadjtgi3symjygiztgmbrha2q' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtgi3symjygiztgmbrha2q
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721826b5b59e5-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadjtgi3symjyge4dqmbrha4q' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtgi3symjyge4dqmbrha4q
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b72188acc19c8b-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadjtgi3symjygezdenbuhe2a' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtgi3symjygezdenbuhe2a
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7218eea465a1b-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:54 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadjtgiysymjqg4ydqobrgqya' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtgiysymjqg4ydqobrgqya
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721952e6a5a15-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:54 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadjtge3cyobtgm4dknbtha3a' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtge3cyobtgm4dknbtha3a
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7219b6bc35b05-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadjtgeycymzzha4dqojugmza' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjtgeycymzzha4dqojugmza
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721a1beabe0ae-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadjrgazcynjygy4dmnzwgmya' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjrgazcynjygy4dmnzwgmya
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721a7ef345934-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'baeaaadbrgqycyojtgiytqojwgq' - 🟢 SUCCESS

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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadbrgqycyojtgiytqojwgq
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721ae2b026fe6-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns a count of zero (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b721b47a2b5b8e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:19:00 GMT",
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
      "requestid": "baeaaadbxhewdomzyg43dambyg4",
      "status": "queued",
      "created": "2022-06-15T00:18:59.715+00:00",
      "pin": {
        "cid": "baeaaadbxhewdomzyg43dambyg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgewdsnrqgeztknjrgi",
      "status": "queued",
      "created": "2022-06-15T00:18:52.598+00:00",
      "pin": {
        "cid": "baeaaadbxgewdsnrqgeztknjrgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
      "status": "pinned",
      "created": "2022-04-07T23:06:39.645+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
      "status": "pinned",
      "created": "2022-04-07T23:04:17.929+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
      "status": "pinned",
      "created": "2022-04-07T23:03:02.404+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgiytombzga2a",
      "status": "pinned",
      "created": "2022-04-07T20:09:37.621+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgiytombzga2a",
        "meta": null,
        "name": "34056919-edab-42a8-95df-23d6669d5ab0",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
      "status": "pinned",
      "created": "2022-04-07T19:54:23.769+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
        "meta": null,
        "name": "f6a9dee7-39fa-489a-b022-dae5dd96477f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
      "status": "pinned",
      "created": "2022-04-07T19:49:23.136+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
        "meta": null,
        "name": "bd805770-e453-433b-9f4c-db29a52f6097",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
      "status": "pinned",
      "created": "2022-04-07T18:22:46.814+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
        "meta": null,
        "name": "8b9f1506-32c9-44eb-aae6-8cafc8b5f281",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgmydgobwgmzq",
      "status": "pinned",
      "created": "2022-04-07T17:37:28.743+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgmydgobwgmzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadbxhewdomzyg43dambyg4",
      "status": "queued",
      "created": "2022-06-15T00:18:59.715+00:00",
      "pin": {
        "cid": "baeaaadbxhewdomzyg43dambyg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgewdsnrqgeztknjrgi",
      "status": "queued",
      "created": "2022-06-15T00:18:52.598+00:00",
      "pin": {
        "cid": "baeaaadbxgewdsnrqgeztknjrgi",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
      "status": "pinned",
      "created": "2022-04-07T23:06:39.645+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3tsmztg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
      "status": "pinned",
      "created": "2022-04-07T23:04:17.929+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi3dkmjygmyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
      "status": "pinned",
      "created": "2022-04-07T23:03:02.404+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi2tonjxhezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgiytombzga2a",
      "status": "pinned",
      "created": "2022-04-07T20:09:37.621+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgiytombzga2a",
        "meta": null,
        "name": "34056919-edab-42a8-95df-23d6669d5ab0",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
      "status": "pinned",
      "created": "2022-04-07T19:54:23.769+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwgezdknzxgm3a",
        "meta": null,
        "name": "f6a9dee7-39fa-489a-b022-dae5dd96477f",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
      "status": "pinned",
      "created": "2022-04-07T19:49:23.136+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzwga4tknrwgy3q",
        "meta": null,
        "name": "bd805770-e453-433b-9f4c-db29a52f6097",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
      "status": "pinned",
      "created": "2022-04-07T18:22:46.814+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgu3tmmbwgiya",
        "meta": null,
        "name": "8b9f1506-32c9-44eb-aae6-8cafc8b5f281",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzvgmydgobwgmzq",
      "status": "pinned",
      "created": "2022-04-07T17:37:28.743+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzvgmydgobwgmzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
  "results": {}
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
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)


### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "71b7216ebd495daf-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 15 Jun 2022 00:18:49 GMT",
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
      "requestid": "baeaaadjtgi3symjygmytqmbvg44a",
      "status": "queued",
      "created": "2022-06-15T00:18:46.09+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygmytqmbvg44a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygi3tcmrshaza",
      "status": "queued",
      "created": "2022-06-15T00:18:44.757+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygi3tcmrshaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygiztgmbrha2q",
      "status": "queued",
      "created": "2022-06-15T00:18:43.608+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygiztgmbrha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjyge4dqmbrha4q",
      "status": "queued",
      "created": "2022-06-15T00:18:42.11+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjyge4dqmbrha4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygezdenbuhe2a",
      "status": "queued",
      "created": "2022-06-15T00:18:40.652+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygezdenbuhe2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
      "status": "queued",
      "created": "2022-06-15T00:18:34.204+00:00",
      "pin": {
        "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
        "meta": null,
        "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
      "status": "queued",
      "created": "2022-06-15T00:18:30.882+00:00",
      "pin": {
        "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgeycymzzha4dqojugmza",
      "status": "queued",
      "created": "2022-06-15T00:18:24.542+00:00",
      "pin": {
        "cid": "baeaaadjtgeycymzzha4dqojugmza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcynjygy4dmnzwgmya",
      "status": "queued",
      "created": "2022-06-14T23:54:06.311+00:00",
      "pin": {
        "cid": "baeaaadjrgazcynjygy4dmnzwgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "baeaaadjtgi3symjygmytqmbvg44a",
      "status": "queued",
      "created": "2022-06-15T00:18:46.09+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygmytqmbvg44a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygi3tcmrshaza",
      "status": "queued",
      "created": "2022-06-15T00:18:44.757+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygi3tcmrshaza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygiztgmbrha2q",
      "status": "queued",
      "created": "2022-06-15T00:18:43.608+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygiztgmbrha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjyge4dqmbrha4q",
      "status": "queued",
      "created": "2022-06-15T00:18:42.11+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjyge4dqmbrha4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgi3symjygezdenbuhe2a",
      "status": "queued",
      "created": "2022-06-15T00:18:40.652+00:00",
      "pin": {
        "cid": "baeaaadjtgi3symjygezdenbuhe2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgiysymjqg4ydqobrgqya",
      "status": "queued",
      "created": "2022-06-15T00:18:34.204+00:00",
      "pin": {
        "cid": "baeaaadjtgiysymjqg4ydqobrgqya",
        "meta": null,
        "name": "f83ae4cd-37cd-42fa-9003-154d2d2248a5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtge3cyobtgm4dknbtha3a",
      "status": "queued",
      "created": "2022-06-15T00:18:30.882+00:00",
      "pin": {
        "cid": "baeaaadjtge3cyobtgm4dknbtha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtgeycymzzha4dqojugmza",
      "status": "queued",
      "created": "2022-06-15T00:18:24.542+00:00",
      "pin": {
        "cid": "baeaaadjtgeycymzzha4dqojugmza",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcynjygy4dmnzwgmya",
      "status": "queued",
      "created": "2022-06-14T23:54:06.311+00:00",
      "pin": {
        "cid": "baeaaadjrgazcynjygy4dmnzwgmya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgqycyojtgiytqojwgq",
      "status": "queued",
      "created": "2022-06-14T23:53:58.42+00:00",
      "pin": {
        "cid": "baeaaadbrgqycyojtgiytqojwgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
  "results": {}
}
```
