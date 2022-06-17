
# https://nft.storage/api compliance:

Execution Date: 2022-06-17T21:40:27.669Z

Revision: [416d410](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/416d410)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (2/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'baeaaadjtg4zcyobwhe4dinrzha2q'](#pins-post-of-cid-baeaaadjtg4zcyobwhe4dinrzha2q----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='b64835a8-3501-4864-b8c8-36c38f986e6e'](#can-create-a-pin-with-nameb64835a8-3501-4864-b8c8-36c38f986e6e----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Response code is 401 (success)


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
  "cf-ray": "71cef003ed962500-SJC",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:23 GMT",
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

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Response code is 401 (success)


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
  "cf-ray": "71cef0091cee944a-SJC",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:24 GMT",
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
## Pins post of CID 'baeaaadjtg4zcyobwhe4dinrzha2q' - ❌ FAILED

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
{"cid":"baeaaadjtg4zcyobwhe4dinrzha2q"}
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
  "cf-ray": "71cef00f5e9397ed-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
  "status": "queued",
  "created": "2022-06-17T21:39:25.257+00:00",
  "pin": {
    "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
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
  "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
  "status": "queued",
  "created": "2022-06-17T21:39:25.257+00:00",
  "pin": {
    "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
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
  "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
  "status": "queued",
  "created": "2022-06-17T21:39:25.257Z",
  "pin": {
    "cid": "baeaaadjtg4zcyobwhe4dinrzha2q"
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
DELETE https://nft.storage/api/pins/baeaaadjtg42syojvha4dcnrygiya
```
##### Headers
```json
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
  "cf-ray": "71cef0469b35944a-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:34 GMT",
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
{"cid":"baeaaadjtg42syojvha4dcnrygiya"}
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
  "cf-ray": "71cef01e8bd5642f-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:33 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtg42syojvha4dcnrygiya",
  "status": "queued",
  "created": "2022-06-17T21:39:31.478+00:00",
  "pin": {
    "cid": "baeaaadjtg42syojvha4dcnrygiya",
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
  "requestid": "baeaaadjtg42syojvha4dcnrygiya",
  "status": "queued",
  "created": "2022-06-17T21:39:31.478+00:00",
  "pin": {
    "cid": "baeaaadjtg42syojvha4dcnrygiya",
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
  "requestid": "baeaaadjtg42syojvha4dcnrygiya",
  "status": "queued",
  "created": "2022-06-17T21:39:31.478Z",
  "pin": {
    "cid": "baeaaadjtg42syojvha4dcnrygiya"
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
  "cf-ray": "71cef04b698c987f-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztanbsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:51:49.994+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztanbsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhazdamzwheyq",
      "status": "pinned",
      "created": "2022-04-05T19:50:10.037+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhazdamzwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytomzqgaya",
      "status": "pinned",
      "created": "2022-04-05T19:49:39.317+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytomzqgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytimzsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:49:09.313+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytimzsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
      "status": "pinned",
      "created": "2022-04-05T19:48:39.8+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
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
  "count": 6,
  "results": [
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztanbsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:51:49.994+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztanbsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhazdamzwheyq",
      "status": "pinned",
      "created": "2022-04-05T19:50:10.037+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhazdamzwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytomzqgaya",
      "status": "pinned",
      "created": "2022-04-05T19:49:39.317+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytomzqgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytimzsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:49:09.313+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytimzsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
      "status": "pinned",
      "created": "2022-04-05T19:48:39.8+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
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
  "count": 6,
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
GET https://nft.storage/api/pins/baeaaadjtha2synrvgyytsmrvguza
```
##### Headers
```json
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
  "cf-ray": "71cef0820fc2944a-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:43 GMT",
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
GET https://nft.storage/api/pins/baeaaadjtha4cymjwgmytsmbxgi2a
```
##### Headers
```json
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
  "cf-ray": "71cef0884a066422-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
  "status": "queued",
  "created": "2022-06-17T21:39:41.007+00:00",
  "pin": {
    "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
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
  "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
  "status": "queued",
  "created": "2022-06-17T21:39:41.007+00:00",
  "pin": {
    "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
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
  "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
  "status": "queued",
  "created": "2022-06-17T21:39:41.007Z",
  "pin": {
    "cid": "baeaaadjtha4cymjwgmytsmbxgi2a"
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjtha2synrvgyytsmrvguza' can have cid 'baeaaadjtha2synrvgyytsmrvguza' replaced with 'baeaaadjtha4cymjwgmytsmbxgi2a' - 🟢 SUCCESS

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
POST https://nft.storage/api/pins/baeaaadjtha2synrvgyytsmrvguza
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
{"cid":"baeaaadjtha4cymjwgmytsmbxgi2a"}
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
  "cf-ray": "71cef06ac83c642f-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
  "status": "queued",
  "created": "2022-06-17T21:39:41.007+00:00",
  "pin": {
    "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
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
  "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
  "status": "queued",
  "created": "2022-06-17T21:39:41.007+00:00",
  "pin": {
    "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
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
  "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
  "status": "queued",
  "created": "2022-06-17T21:39:41.007Z",
  "pin": {
    "cid": "baeaaadjtha4cymjwgmytsmbxgi2a"
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (baeaaadjtha2synrvgyytsmrvguza) (success)

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
{"cid":"baeaaadjtha2synrvgyytsmrvguza"}
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
  "cf-ray": "71cef05b1ced944d-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjtha2synrvgyytsmrvguza",
  "status": "queued",
  "created": "2022-06-17T21:39:37.784+00:00",
  "pin": {
    "cid": "baeaaadjtha2synrvgyytsmrvguza",
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
  "requestid": "baeaaadjtha2synrvgyytsmrvguza",
  "status": "queued",
  "created": "2022-06-17T21:39:37.784+00:00",
  "pin": {
    "cid": "baeaaadjtha2synrvgyytsmrvguza",
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
  "requestid": "baeaaadjtha2synrvgyytsmrvguza",
  "status": "queued",
  "created": "2022-06-17T21:39:37.784Z",
  "pin": {
    "cid": "baeaaadjtha2synrvgyytsmrvguza"
  },
  "delegates": []
}
```
## Can retrieve pin with name 'b64835a8-3501-4864-b8c8-36c38f986e6e' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=b64835a8-3501-4864-b8c8-36c38f986e6e&match=exact
```
##### Headers
```json
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
  "cf-ray": "71cef0a22f526453-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:49 GMT",
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
## Can retrieve pin with name 'B64835A8-3501-4864-B8C8-36C38F986E6E' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=B64835A8-3501-4864-B8C8-36C38F986E6E&match=iexact
```
##### Headers
```json
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
  "cf-ray": "71cef0ac8dfd6456-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:51 GMT",
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
## Can retrieve pin with name '3501-4864-b8c8-36c' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=3501-4864-b8c8-36c&match=partial
```
##### Headers
```json
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
  "cf-ray": "71cef0b75f346422-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:52 GMT",
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
## Can retrieve pin with name '3501-4864-B8C8-36C' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=3501-4864-B8C8-36C&match=ipartial
```
##### Headers
```json
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
  "cf-ray": "71cef0be9b7997f3-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:54 GMT",
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
## Can create a pin with name='b64835a8-3501-4864-b8c8-36c38f986e6e' - ❌ FAILED

### Expectations (11/19 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





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
{"cid":"baeaaadjthe2cynjzha2tiojwgezq","name":"b64835a8-3501-4864-b8c8-36c38f986e6e"}
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
  "cf-ray": "71cef0931985944d-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
  "status": "queued",
  "created": "2022-06-17T21:39:46.447+00:00",
  "pin": {
    "cid": "baeaaadjthe2cynjzha2tiojwgezq",
    "meta": null,
    "name": "b64835a8-3501-4864-b8c8-36c38f986e6e",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
  "status": "queued",
  "created": "2022-06-17T21:39:46.447+00:00",
  "pin": {
    "cid": "baeaaadjthe2cynjzha2tiojwgezq",
    "meta": null,
    "name": "b64835a8-3501-4864-b8c8-36c38f986e6e",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
  "status": "queued",
  "created": "2022-06-17T21:39:46.447Z",
  "pin": {
    "cid": "baeaaadjthe2cynjzha2tiojwgezq",
    "name": "b64835a8-3501-4864-b8c8-36c38f986e6e"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjuga2symjygyydkmjxhe4q' - 🟢 SUCCESS

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
{"cid":"baeaaadjuga2symjygyydkmjxhe4q"}
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
  "cf-ray": "71cef0d54c896453-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjuga2symjygyydkmjxhe4q",
  "status": "queued",
  "created": "2022-06-17T21:39:57.504+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjygyydkmjxhe4q",
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
  "requestid": "baeaaadjuga2symjygyydkmjxhe4q",
  "status": "queued",
  "created": "2022-06-17T21:39:57.504+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjygyydkmjxhe4q",
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
  "requestid": "baeaaadjuga2symjygyydkmjxhe4q",
  "status": "queued",
  "created": "2022-06-17T21:39:57.504Z",
  "pin": {
    "cid": "baeaaadjuga2symjygyydkmjxhe4q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjuga2symjygy4tqmzqgu2q' - 🟢 SUCCESS

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
{"cid":"baeaaadjuga2symjygy4tqmzqgu2q"}
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
  "cf-ray": "71cef0e3de9a6456-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjuga2symjygy4tqmzqgu2q",
  "status": "queued",
  "created": "2022-06-17T21:39:59.619+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjygy4tqmzqgu2q",
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
  "requestid": "baeaaadjuga2symjygy4tqmzqgu2q",
  "status": "queued",
  "created": "2022-06-17T21:39:59.619+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjygy4tqmzqgu2q",
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
  "requestid": "baeaaadjuga2symjygy4tqmzqgu2q",
  "status": "queued",
  "created": "2022-06-17T21:39:59.619Z",
  "pin": {
    "cid": "baeaaadjuga2symjygy4tqmzqgu2q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjuga2symjyg43tiobtgaya' - 🟢 SUCCESS

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
{"cid":"baeaaadjuga2symjyg43tiobtgaya"}
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
  "cf-ray": "71cef0f6c8796450-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:03 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjuga2symjyg43tiobtgaya",
  "status": "queued",
  "created": "2022-06-17T21:40:02.391+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjyg43tiobtgaya",
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
  "requestid": "baeaaadjuga2symjyg43tiobtgaya",
  "status": "queued",
  "created": "2022-06-17T21:40:02.391+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjyg43tiobtgaya",
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
  "requestid": "baeaaadjuga2symjyg43tiobtgaya",
  "status": "queued",
  "created": "2022-06-17T21:40:02.391Z",
  "pin": {
    "cid": "baeaaadjuga2symjyg43tiobtgaya"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjuga2symjzgeytinzxgazq' - 🟢 SUCCESS

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
{"cid":"baeaaadjuga2symjzgeytinzxgazq"}
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
  "cf-ray": "71cef1013e87aaa5-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjuga2symjzgeytinzxgazq",
  "status": "queued",
  "created": "2022-06-17T21:40:04.025+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjzgeytinzxgazq",
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
  "requestid": "baeaaadjuga2symjzgeytinzxgazq",
  "status": "queued",
  "created": "2022-06-17T21:40:04.025+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjzgeytinzxgazq",
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
  "requestid": "baeaaadjuga2symjzgeytinzxgazq",
  "status": "queued",
  "created": "2022-06-17T21:40:04.025Z",
  "pin": {
    "cid": "baeaaadjuga2symjzgeytinzxgazq"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjuga2symjzgiytsmjtgy2q' - 🟢 SUCCESS

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
{"cid":"baeaaadjuga2symjzgiytsmjtgy2q"}
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
  "cf-ray": "71cef10e9e5c9648-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjuga2symjzgiytsmjtgy2q",
  "status": "queued",
  "created": "2022-06-17T21:40:06.657+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjzgiytsmjtgy2q",
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
  "requestid": "baeaaadjuga2symjzgiytsmjtgy2q",
  "status": "queued",
  "created": "2022-06-17T21:40:06.657+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjzgiytsmjtgy2q",
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
  "requestid": "baeaaadjuga2symjzgiytsmjtgy2q",
  "status": "queued",
  "created": "2022-06-17T21:40:06.657Z",
  "pin": {
    "cid": "baeaaadjuga2symjzgiytsmjtgy2q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjuga2symjzgmytanjxgiya' - 🟢 SUCCESS

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
{"cid":"baeaaadjuga2symjzgmytanjxgiya"}
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
  "cf-ray": "71cef11febe0969f-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjuga2symjzgmytanjxgiya",
  "status": "queued",
  "created": "2022-06-17T21:40:09.103+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjzgmytanjxgiya",
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
  "requestid": "baeaaadjuga2symjzgmytanjxgiya",
  "status": "queued",
  "created": "2022-06-17T21:40:09.103+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjzgmytanjxgiya",
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
  "requestid": "baeaaadjuga2symjzgmytanjxgiya",
  "status": "queued",
  "created": "2022-06-17T21:40:09.103Z",
  "pin": {
    "cid": "baeaaadjuga2symjzgmytanjxgiya"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjuga2symjzgm4tinjzg4ya' - 🟢 SUCCESS

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
{"cid":"baeaaadjuga2symjzgm4tinjzg4ya"}
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
  "cf-ray": "71cef12e1ce36450-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjuga2symjzgm4tinjzg4ya",
  "status": "queued",
  "created": "2022-06-17T21:40:10.723+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjzgm4tinjzg4ya",
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
  "requestid": "baeaaadjuga2symjzgm4tinjzg4ya",
  "status": "queued",
  "created": "2022-06-17T21:40:10.723+00:00",
  "pin": {
    "cid": "baeaaadjuga2symjzgm4tinjzg4ya",
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
  "requestid": "baeaaadjuga2symjzgm4tinjzg4ya",
  "status": "queued",
  "created": "2022-06-17T21:40:10.723Z",
  "pin": {
    "cid": "baeaaadjuga2symjzgm4tinjzg4ya"
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
  "cf-ray": "71cef1379ae5944c-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:13 GMT",
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
      "requestid": "baeaaadjuga2symjzgm4tinjzg4ya",
      "status": "queued",
      "created": "2022-06-17T21:40:10.723+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgm4tinjzg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgmytanjxgiya",
      "status": "queued",
      "created": "2022-06-17T21:40:09.103+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgmytanjxgiya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgiytsmjtgy2q",
      "status": "queued",
      "created": "2022-06-17T21:40:06.657+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgiytsmjtgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgeytinzxgazq",
      "status": "queued",
      "created": "2022-06-17T21:40:04.025+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgeytinzxgazq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjyg43tiobtgaya",
      "status": "queued",
      "created": "2022-06-17T21:40:02.391+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjyg43tiobtgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjygy4tqmzqgu2q",
      "status": "queued",
      "created": "2022-06-17T21:39:59.619+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjygy4tqmzqgu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjygyydkmjxhe4q",
      "status": "queued",
      "created": "2022-06-17T21:39:57.504+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjygyydkmjxhe4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
      "status": "queued",
      "created": "2022-06-17T21:39:46.447+00:00",
      "pin": {
        "cid": "baeaaadjthe2cynjzha2tiojwgezq",
        "meta": null,
        "name": "b64835a8-3501-4864-b8c8-36c38f986e6e",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
      "status": "queued",
      "created": "2022-06-17T21:39:41.007+00:00",
      "pin": {
        "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
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
      "requestid": "baeaaadjuga2symjzgm4tinjzg4ya",
      "status": "queued",
      "created": "2022-06-17T21:40:10.723+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgm4tinjzg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgmytanjxgiya",
      "status": "queued",
      "created": "2022-06-17T21:40:09.103+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgmytanjxgiya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgiytsmjtgy2q",
      "status": "queued",
      "created": "2022-06-17T21:40:06.657+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgiytsmjtgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgeytinzxgazq",
      "status": "queued",
      "created": "2022-06-17T21:40:04.025+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgeytinzxgazq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjyg43tiobtgaya",
      "status": "queued",
      "created": "2022-06-17T21:40:02.391+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjyg43tiobtgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjygy4tqmzqgu2q",
      "status": "queued",
      "created": "2022-06-17T21:39:59.619+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjygy4tqmzqgu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjygyydkmjxhe4q",
      "status": "queued",
      "created": "2022-06-17T21:39:57.504+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjygyydkmjxhe4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
      "status": "queued",
      "created": "2022-06-17T21:39:46.447+00:00",
      "pin": {
        "cid": "baeaaadjthe2cynjzha2tiojwgezq",
        "meta": null,
        "name": "b64835a8-3501-4864-b8c8-36c38f986e6e",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
      "status": "queued",
      "created": "2022-06-17T21:39:41.007+00:00",
      "pin": {
        "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
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
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-17T21%3A39%3A25.257Z
```
##### Headers
```json
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
  "cf-ray": "71cef13f1ccb6464-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztanbsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:51:49.994+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztanbsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhazdamzwheyq",
      "status": "pinned",
      "created": "2022-04-05T19:50:10.037+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhazdamzwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytomzqgaya",
      "status": "pinned",
      "created": "2022-04-05T19:49:39.317+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytomzqgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytimzsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:49:09.313+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytimzsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
      "status": "pinned",
      "created": "2022-04-05T19:48:39.8+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
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
  "count": 6,
  "results": [
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztanbsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:51:49.994+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztanbsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhazdamzwheyq",
      "status": "pinned",
      "created": "2022-04-05T19:50:10.037+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhazdamzwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytomzqgaya",
      "status": "pinned",
      "created": "2022-04-05T19:49:39.317+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytomzqgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytimzsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:49:09.313+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytimzsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
      "status": "pinned",
      "created": "2022-04-05T19:48:39.8+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
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
  "count": 6,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (21/24 successful)

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
  "cf-ray": "71cef0caa84daaa9-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:39:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 8,
  "results": [
    {
      "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
      "status": "queued",
      "created": "2022-06-17T21:39:46.447+00:00",
      "pin": {
        "cid": "baeaaadjthe2cynjzha2tiojwgezq",
        "meta": null,
        "name": "b64835a8-3501-4864-b8c8-36c38f986e6e",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
      "status": "queued",
      "created": "2022-06-17T21:39:41.007+00:00",
      "pin": {
        "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztanbsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:51:49.994+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztanbsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhazdamzwheyq",
      "status": "pinned",
      "created": "2022-04-05T19:50:10.037+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhazdamzwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytomzqgaya",
      "status": "pinned",
      "created": "2022-04-05T19:49:39.317+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytomzqgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytimzsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:49:09.313+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytimzsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
      "status": "pinned",
      "created": "2022-04-05T19:48:39.8+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
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
  "count": 8,
  "results": [
    {
      "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
      "status": "queued",
      "created": "2022-06-17T21:39:46.447+00:00",
      "pin": {
        "cid": "baeaaadjthe2cynjzha2tiojwgezq",
        "meta": null,
        "name": "b64835a8-3501-4864-b8c8-36c38f986e6e",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
      "status": "queued",
      "created": "2022-06-17T21:39:41.007+00:00",
      "pin": {
        "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztanbsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:51:49.994+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztanbsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhazdamzwheyq",
      "status": "pinned",
      "created": "2022-04-05T19:50:10.037+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhazdamzwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytomzqgaya",
      "status": "pinned",
      "created": "2022-04-05T19:49:39.317+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytomzqgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytimzsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:49:09.313+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytimzsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
      "status": "pinned",
      "created": "2022-04-05T19:48:39.8+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
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
  "count": 8,
  "results": {}
}
```
## Can delete pin with requestid 'baeaaadjuga2symjzgm4tinjzg4ya' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjuga2symjzgm4tinjzg4ya
```
##### Headers
```json
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
  "cf-ray": "71cef1513b7b97b2-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:16 GMT",
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
## Can delete pin with requestid 'baeaaadjuga2symjzgmytanjxgiya' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjuga2symjzgmytanjxgiya
```
##### Headers
```json
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
  "cf-ray": "71cef15778cf2572-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:18 GMT",
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
## Can delete pin with requestid 'baeaaadjuga2symjzgiytsmjtgy2q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjuga2symjzgiytsmjtgy2q
```
##### Headers
```json
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
  "cf-ray": "71cef15e29b26450-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:18 GMT",
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
## Can delete pin with requestid 'baeaaadjuga2symjzgeytinzxgazq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjuga2symjzgeytinzxgazq
```
##### Headers
```json
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
  "cf-ray": "71cef1640d33965e-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:20 GMT",
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
## Can delete pin with requestid 'baeaaadjuga2symjyg43tiobtgaya' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjuga2symjyg43tiobtgaya
```
##### Headers
```json
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
  "cf-ray": "71cef16a88c52572-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:20 GMT",
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
## Can delete pin with requestid 'baeaaadjuga2symjygy4tqmzqgu2q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjuga2symjygy4tqmzqgu2q
```
##### Headers
```json
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
  "cf-ray": "71cef1708c166464-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:21 GMT",
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
## Can delete pin with requestid 'baeaaadjuga2symjygyydkmjxhe4q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjuga2symjygyydkmjxhe4q
```
##### Headers
```json
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
  "cf-ray": "71cef176cb89253c-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:22 GMT",
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
## Can delete pin with requestid 'baeaaadjthe2cynjzha2tiojwgezq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjthe2cynjzha2tiojwgezq
```
##### Headers
```json
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
  "cf-ray": "71cef17cf8549657-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:24 GMT",
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
## Can delete pin with requestid 'baeaaadjtha4cymjwgmytsmbxgi2a' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjtha4cymjwgmytsmbxgi2a
```
##### Headers
```json
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
  "cf-ray": "71cef1833e6e2572-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:24 GMT",
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
## Can delete pin with requestid 'baeaaadjtg4zcyobwhe4dinrzha2q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjtg4zcyobwhe4dinrzha2q
```
##### Headers
```json
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
  "cf-ray": "71cef1897fbd9429-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:25 GMT",
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
  "cf-ray": "71cef18fccb4256c-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "bafkqadjrgy2dsmjyhaztanbsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:51:49.994+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztanbsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhazdamzwheyq",
      "status": "pinned",
      "created": "2022-04-05T19:50:10.037+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhazdamzwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytomzqgaya",
      "status": "pinned",
      "created": "2022-04-05T19:49:39.317+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytomzqgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytimzsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:49:09.313+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytimzsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
      "status": "pinned",
      "created": "2022-04-05T19:48:39.8+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
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
  "count": 5,
  "results": [
    {
      "requestid": "bafkqadjrgy2dsmjyhaztanbsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:51:49.994+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztanbsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhazdamzwheyq",
      "status": "pinned",
      "created": "2022-04-05T19:50:10.037+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhazdamzwheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytomzqgaya",
      "status": "pinned",
      "created": "2022-04-05T19:49:39.317+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytomzqgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytimzsga3q",
      "status": "pinned",
      "created": "2022-04-05T19:49:09.313+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytimzsga3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
      "status": "pinned",
      "created": "2022-04-05T19:48:39.8+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaytcnbugi3a",
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
  "count": 5,
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
  "cf-ray": "71cef14a1ce9253c-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 21:40:16 GMT",
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
      "requestid": "baeaaadjuga2symjzgm4tinjzg4ya",
      "status": "queued",
      "created": "2022-06-17T21:40:10.723+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgm4tinjzg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgmytanjxgiya",
      "status": "queued",
      "created": "2022-06-17T21:40:09.103+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgmytanjxgiya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgiytsmjtgy2q",
      "status": "queued",
      "created": "2022-06-17T21:40:06.657+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgiytsmjtgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgeytinzxgazq",
      "status": "queued",
      "created": "2022-06-17T21:40:04.025+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgeytinzxgazq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjyg43tiobtgaya",
      "status": "queued",
      "created": "2022-06-17T21:40:02.391+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjyg43tiobtgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjygy4tqmzqgu2q",
      "status": "queued",
      "created": "2022-06-17T21:39:59.619+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjygy4tqmzqgu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjygyydkmjxhe4q",
      "status": "queued",
      "created": "2022-06-17T21:39:57.504+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjygyydkmjxhe4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
      "status": "queued",
      "created": "2022-06-17T21:39:46.447+00:00",
      "pin": {
        "cid": "baeaaadjthe2cynjzha2tiojwgezq",
        "meta": null,
        "name": "b64835a8-3501-4864-b8c8-36c38f986e6e",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
      "status": "queued",
      "created": "2022-06-17T21:39:41.007+00:00",
      "pin": {
        "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
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
      "requestid": "baeaaadjuga2symjzgm4tinjzg4ya",
      "status": "queued",
      "created": "2022-06-17T21:40:10.723+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgm4tinjzg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgmytanjxgiya",
      "status": "queued",
      "created": "2022-06-17T21:40:09.103+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgmytanjxgiya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgiytsmjtgy2q",
      "status": "queued",
      "created": "2022-06-17T21:40:06.657+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgiytsmjtgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjzgeytinzxgazq",
      "status": "queued",
      "created": "2022-06-17T21:40:04.025+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjzgeytinzxgazq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjyg43tiobtgaya",
      "status": "queued",
      "created": "2022-06-17T21:40:02.391+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjyg43tiobtgaya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjygy4tqmzqgu2q",
      "status": "queued",
      "created": "2022-06-17T21:39:59.619+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjygy4tqmzqgu2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjuga2symjygyydkmjxhe4q",
      "status": "queued",
      "created": "2022-06-17T21:39:57.504+00:00",
      "pin": {
        "cid": "baeaaadjuga2symjygyydkmjxhe4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjthe2cynjzha2tiojwgezq",
      "status": "queued",
      "created": "2022-06-17T21:39:46.447+00:00",
      "pin": {
        "cid": "baeaaadjthe2cynjzha2tiojwgezq",
        "meta": null,
        "name": "b64835a8-3501-4864-b8c8-36c38f986e6e",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtha4cymjwgmytsmbxgi2a",
      "status": "queued",
      "created": "2022-06-17T21:39:41.007+00:00",
      "pin": {
        "cid": "baeaaadjtha4cymjwgmytsmbxgi2a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjtg4zcyobwhe4dinrzha2q",
      "status": "queued",
      "created": "2022-06-17T21:39:25.257+00:00",
      "pin": {
        "cid": "baeaaadjtg4zcyobwhe4dinrzha2q",
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
