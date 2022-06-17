
# https://nft.storage/api compliance:

Execution Date: 2022-06-17T16:29:17.288Z

Revision: [f945ce3](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/f945ce3)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (2/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'baeaaadjrgaysynrzgi2dmobvgy4a'](#pins-post-of-cid-baeaaadjrgaysynrzgi2dmobvgy4a----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='65346f49-b8e0-4626-b7a8-fa9b4342a3e6'](#can-create-a-pin-with-name65346f49-b8e0-4626-b7a8-fa9b4342a3e6----failed)

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
  "cf-ray": "71cd288988409843-SJC",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:26 GMT",
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
  "cf-ray": "71cd288e296196a8-SJC",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:27 GMT",
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
## Pins post of CID 'baeaaadjrgaysynrzgi2dmobvgy4a' - ❌ FAILED

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
{"cid":"baeaaadjrgaysynrzgi2dmobvgy4a"}
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
  "cf-ray": "71cd28947bc596cc-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
  "status": "queued",
  "created": "2022-06-17T16:28:29.483+00:00",
  "pin": {
    "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
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
  "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
  "status": "queued",
  "created": "2022-06-17T16:28:29.483+00:00",
  "pin": {
    "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
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
  "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
  "status": "queued",
  "created": "2022-06-17T16:28:29.483Z",
  "pin": {
    "cid": "baeaaadjrgaysynrzgi2dmobvgy4a"
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
DELETE https://nft.storage/api/pins/baeaaadjrga2cynzrge3tomrugmza
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
  "cf-ray": "71cd28b0be3697dc-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:33 GMT",
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
{"cid":"baeaaadjrga2cynzrge3tomrugmza"}
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
  "cf-ray": "71cd28a288399452-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrga2cynzrge3tomrugmza",
  "status": "queued",
  "created": "2022-06-17T16:28:31.074+00:00",
  "pin": {
    "cid": "baeaaadjrga2cynzrge3tomrugmza",
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
  "requestid": "baeaaadjrga2cynzrge3tomrugmza",
  "status": "queued",
  "created": "2022-06-17T16:28:31.074+00:00",
  "pin": {
    "cid": "baeaaadjrga2cynzrge3tomrugmza",
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
  "requestid": "baeaaadjrga2cynzrge3tomrugmza",
  "status": "queued",
  "created": "2022-06-17T16:28:31.074Z",
  "pin": {
    "cid": "baeaaadjrga2cynzrge3tomrugmza"
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
  "cf-ray": "71cd28b67f1796a8-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 7,
  "results": [
    {
      "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
      "status": "queued",
      "created": "2022-06-17T16:28:29.483+00:00",
      "pin": {
        "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
  "count": 7,
  "results": [
    {
      "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
      "status": "queued",
      "created": "2022-06-17T16:28:29.483+00:00",
      "pin": {
        "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
  "count": 7,
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
GET https://nft.storage/api/pins/baeaaadjrga4symrsge2timryge4a
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
  "cf-ray": "71cd28d83f429452-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:39 GMT",
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
GET https://nft.storage/api/pins/baeaaadjrgeycynzqg43tmmjygyya
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
  "cf-ray": "71cd28de6dc996ae-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:37.962+00:00",
  "pin": {
    "cid": "baeaaadjrgeycynzqg43tmmjygyya",
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
  "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:37.962+00:00",
  "pin": {
    "cid": "baeaaadjrgeycynzqg43tmmjygyya",
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
  "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:37.962Z",
  "pin": {
    "cid": "baeaaadjrgeycynzqg43tmmjygyya"
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjrga4symrsge2timryge4a' can have cid 'baeaaadjrga4symrsge2timryge4a' replaced with 'baeaaadjrgeycynzqg43tmmjygyya' - 🟢 SUCCESS

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
POST https://nft.storage/api/pins/baeaaadjrga4symrsge2timryge4a
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
{"cid":"baeaaadjrgeycynzqg43tmmjygyya"}
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
  "cf-ray": "71cd28c8181b96cf-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:37.962+00:00",
  "pin": {
    "cid": "baeaaadjrgeycynzqg43tmmjygyya",
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
  "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:37.962+00:00",
  "pin": {
    "cid": "baeaaadjrgeycynzqg43tmmjygyya",
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
  "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:37.962Z",
  "pin": {
    "cid": "baeaaadjrgeycynzqg43tmmjygyya"
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (baeaaadjrga4symrsge2timryge4a) (success)

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
{"cid":"baeaaadjrga4symrsge2timryge4a"}
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
  "cf-ray": "71cd28becbfc9667-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrga4symrsge2timryge4a",
  "status": "queued",
  "created": "2022-06-17T16:28:35.483+00:00",
  "pin": {
    "cid": "baeaaadjrga4symrsge2timryge4a",
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
  "requestid": "baeaaadjrga4symrsge2timryge4a",
  "status": "queued",
  "created": "2022-06-17T16:28:35.483+00:00",
  "pin": {
    "cid": "baeaaadjrga4symrsge2timryge4a",
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
  "requestid": "baeaaadjrga4symrsge2timryge4a",
  "status": "queued",
  "created": "2022-06-17T16:28:35.483Z",
  "pin": {
    "cid": "baeaaadjrga4symrsge2timryge4a"
  },
  "delegates": []
}
```
## Can retrieve pin with name '65346f49-b8e0-4626-b7a8-fa9b4342a3e6' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=65346f49-b8e0-4626-b7a8-fa9b4342a3e6&match=exact
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
  "cf-ray": "71cd28f54c059667-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:45 GMT",
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
## Can retrieve pin with name '65346F49-B8E0-4626-B7A8-FA9B4342A3E6' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=65346F49-B8E0-4626-B7A8-FA9B4342A3E6&match=iexact
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
  "cf-ray": "71cd28ff4df796cf-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:46 GMT",
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
## Can retrieve pin with name 'b8e0-4626-b7a8-fa9' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=b8e0-4626-b7a8-fa9&match=partial
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
  "cf-ray": "71cd29080af89452-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:48 GMT",
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
## Can retrieve pin with name 'B8E0-4626-B7A8-FA9' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=B8E0-4626-B7A8-FA9&match=ipartial
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
  "cf-ray": "71cd2912ad2596ae-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:49 GMT",
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
## Can create a pin with name='65346f49-b8e0-4626-b7a8-fa9b4342a3e6' - ❌ FAILED

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
{"cid":"baeaaadjrge2synzqhazdanjxgi4q","name":"65346f49-b8e0-4626-b7a8-fa9b4342a3e6"}
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
  "cf-ray": "71cd28e769d39855-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
  "status": "queued",
  "created": "2022-06-17T16:28:42.082+00:00",
  "pin": {
    "cid": "baeaaadjrge2synzqhazdanjxgi4q",
    "meta": null,
    "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
  "status": "queued",
  "created": "2022-06-17T16:28:42.082+00:00",
  "pin": {
    "cid": "baeaaadjrge2synzqhazdanjxgi4q",
    "meta": null,
    "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
  "status": "queued",
  "created": "2022-06-17T16:28:42.082Z",
  "pin": {
    "cid": "baeaaadjrge2synzqhazdanjxgi4q",
    "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2synjxg4ztknbrgi3a' - 🟢 SUCCESS

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
{"cid":"baeaaadjrgi2synjxg4ztknbrgi3a"}
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
  "cf-ray": "71cd2925096e9667-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2synjxg4ztknbrgi3a",
  "status": "queued",
  "created": "2022-06-17T16:28:51.84+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjxg4ztknbrgi3a",
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
  "requestid": "baeaaadjrgi2synjxg4ztknbrgi3a",
  "status": "queued",
  "created": "2022-06-17T16:28:51.84+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjxg4ztknbrgi3a",
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
  "requestid": "baeaaadjrgi2synjxg4ztknbrgi3a",
  "status": "queued",
  "created": "2022-06-17T16:28:51.840Z",
  "pin": {
    "cid": "baeaaadjrgi2synjxg4ztknbrgi3a"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2synjxhaztanrvgmzq' - 🟢 SUCCESS

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
{"cid":"baeaaadjrgi2synjxhaztanrvgmzq"}
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
  "cf-ray": "71cd29319c5c96cf-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:54 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2synjxhaztanrvgmzq",
  "status": "queued",
  "created": "2022-06-17T16:28:53.933+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjxhaztanrvgmzq",
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
  "requestid": "baeaaadjrgi2synjxhaztanrvgmzq",
  "status": "queued",
  "created": "2022-06-17T16:28:53.933+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjxhaztanrvgmzq",
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
  "requestid": "baeaaadjrgi2synjxhaztanrvgmzq",
  "status": "queued",
  "created": "2022-06-17T16:28:53.933Z",
  "pin": {
    "cid": "baeaaadjrgi2synjxhaztanrvgmzq"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2synjxheydenjygm4q' - 🟢 SUCCESS

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
{"cid":"baeaaadjrgi2synjxheydenjygm4q"}
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
  "cf-ray": "71cd293b6a2d9855-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2synjxheydenjygm4q",
  "status": "queued",
  "created": "2022-06-17T16:28:55.339+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjxheydenjygm4q",
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
  "requestid": "baeaaadjrgi2synjxheydenjygm4q",
  "status": "queued",
  "created": "2022-06-17T16:28:55.339+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjxheydenjygm4q",
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
  "requestid": "baeaaadjrgi2synjxheydenjygm4q",
  "status": "queued",
  "created": "2022-06-17T16:28:55.339Z",
  "pin": {
    "cid": "baeaaadjrgi2synjxheydenjygm4q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2synjyge4tanjygyya' - 🟢 SUCCESS

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
{"cid":"baeaaadjrgi2synjyge4tanjygyya"}
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
  "cf-ray": "71cd29472ed596ae-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2synjyge4tanjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:56.996+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjyge4tanjygyya",
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
  "requestid": "baeaaadjrgi2synjyge4tanjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:56.996+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjyge4tanjygyya",
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
  "requestid": "baeaaadjrgi2synjyge4tanjygyya",
  "status": "queued",
  "created": "2022-06-17T16:28:56.996Z",
  "pin": {
    "cid": "baeaaadjrgi2synjyge4tanjygyya"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2synjygi2tmmbugy2q' - 🟢 SUCCESS

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
{"cid":"baeaaadjrgi2synjygi2tmmbugy2q"}
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
  "cf-ray": "71cd294f8e3324dc-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:00 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2synjygi2tmmbugy2q",
  "status": "queued",
  "created": "2022-06-17T16:28:58.918+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjygi2tmmbugy2q",
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
  "requestid": "baeaaadjrgi2synjygi2tmmbugy2q",
  "status": "queued",
  "created": "2022-06-17T16:28:58.918+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjygi2tmmbugy2q",
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
  "requestid": "baeaaadjrgi2synjygi2tmmbugy2q",
  "status": "queued",
  "created": "2022-06-17T16:28:58.918Z",
  "pin": {
    "cid": "baeaaadjrgi2synjygi2tmmbugy2q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrgi2synjygmytimzsg4ya' - 🟢 SUCCESS

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
{"cid":"baeaaadjrgi2synjygmytimzsg4ya"}
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
  "cf-ray": "71cd295eedd096cf-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjrgi2synjygmytimzsg4ya",
  "status": "queued",
  "created": "2022-06-17T16:29:00.763+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjygmytimzsg4ya",
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
  "requestid": "baeaaadjrgi2synjygmytimzsg4ya",
  "status": "queued",
  "created": "2022-06-17T16:29:00.763+00:00",
  "pin": {
    "cid": "baeaaadjrgi2synjygmytimzsg4ya",
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
  "requestid": "baeaaadjrgi2synjygmytimzsg4ya",
  "status": "queued",
  "created": "2022-06-17T16:29:00.763Z",
  "pin": {
    "cid": "baeaaadjrgi2synjygmytimzsg4ya"
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
  "cf-ray": "71cd29659be924d6-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:03 GMT",
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
      "requestid": "baeaaadjrgi2synjygmytimzsg4ya",
      "status": "queued",
      "created": "2022-06-17T16:29:00.763+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjygmytimzsg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjygi2tmmbugy2q",
      "status": "queued",
      "created": "2022-06-17T16:28:58.918+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjygi2tmmbugy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjyge4tanjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:56.996+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjyge4tanjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxheydenjygm4q",
      "status": "queued",
      "created": "2022-06-17T16:28:55.339+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxheydenjygm4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxhaztanrvgmzq",
      "status": "queued",
      "created": "2022-06-17T16:28:53.933+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxhaztanrvgmzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxg4ztknbrgi3a",
      "status": "queued",
      "created": "2022-06-17T16:28:51.84+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxg4ztknbrgi3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
      "status": "queued",
      "created": "2022-06-17T16:28:42.082+00:00",
      "pin": {
        "cid": "baeaaadjrge2synzqhazdanjxgi4q",
        "meta": null,
        "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:37.962+00:00",
      "pin": {
        "cid": "baeaaadjrgeycynzqg43tmmjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
      "status": "queued",
      "created": "2022-06-17T16:28:29.483+00:00",
      "pin": {
        "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
      "requestid": "baeaaadjrgi2synjygmytimzsg4ya",
      "status": "queued",
      "created": "2022-06-17T16:29:00.763+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjygmytimzsg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjygi2tmmbugy2q",
      "status": "queued",
      "created": "2022-06-17T16:28:58.918+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjygi2tmmbugy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjyge4tanjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:56.996+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjyge4tanjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxheydenjygm4q",
      "status": "queued",
      "created": "2022-06-17T16:28:55.339+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxheydenjygm4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxhaztanrvgmzq",
      "status": "queued",
      "created": "2022-06-17T16:28:53.933+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxhaztanrvgmzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxg4ztknbrgi3a",
      "status": "queued",
      "created": "2022-06-17T16:28:51.84+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxg4ztknbrgi3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
      "status": "queued",
      "created": "2022-06-17T16:28:42.082+00:00",
      "pin": {
        "cid": "baeaaadjrge2synzqhazdanjxgi4q",
        "meta": null,
        "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:37.962+00:00",
      "pin": {
        "cid": "baeaaadjrgeycynzqg43tmmjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
      "status": "queued",
      "created": "2022-06-17T16:28:29.483+00:00",
      "pin": {
        "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-04-05T19%3A52%3A20.833Z
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
  "cf-ray": "71cd296f5f409855-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:04 GMT",
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
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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

### Expectations (19/22 successful)

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
  "cf-ray": "71cd2918c8b524dc-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:28:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 9,
  "results": [
    {
      "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
      "status": "queued",
      "created": "2022-06-17T16:28:42.082+00:00",
      "pin": {
        "cid": "baeaaadjrge2synzqhazdanjxgi4q",
        "meta": null,
        "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:37.962+00:00",
      "pin": {
        "cid": "baeaaadjrgeycynzqg43tmmjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
      "status": "queued",
      "created": "2022-06-17T16:28:29.483+00:00",
      "pin": {
        "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
  "count": 9,
  "results": [
    {
      "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
      "status": "queued",
      "created": "2022-06-17T16:28:42.082+00:00",
      "pin": {
        "cid": "baeaaadjrge2synzqhazdanjxgi4q",
        "meta": null,
        "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:37.962+00:00",
      "pin": {
        "cid": "baeaaadjrgeycynzqg43tmmjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
      "status": "queued",
      "created": "2022-06-17T16:28:29.483+00:00",
      "pin": {
        "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
  "count": 9,
  "results": {}
}
```
## Can delete pin with requestid 'baeaaadjrgi2synjygmytimzsg4ya' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrgi2synjygmytimzsg4ya
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
  "cf-ray": "71cd297fdc449664-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:06 GMT",
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
## Can delete pin with requestid 'baeaaadjrgi2synjygi2tmmbugy2q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrgi2synjygi2tmmbugy2q
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
  "cf-ray": "71cd29862c9b24dc-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:07 GMT",
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
## Can delete pin with requestid 'baeaaadjrgi2synjyge4tanjygyya' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrgi2synjyge4tanjygyya
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
  "cf-ray": "71cd298c6d2424e8-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:08 GMT",
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
## Can delete pin with requestid 'baeaaadjrgi2synjxheydenjygm4q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrgi2synjxheydenjygm4q
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
  "cf-ray": "71cd2992aea097e7-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:09 GMT",
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
## Can delete pin with requestid 'baeaaadjrgi2synjxhaztanrvgmzq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrgi2synjxhaztanrvgmzq
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
  "cf-ray": "71cd2998fb8824d6-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:10 GMT",
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
## Can delete pin with requestid 'baeaaadjrgi2synjxg4ztknbrgi3a' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrgi2synjxg4ztknbrgi3a
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
  "cf-ray": "71cd299f1b819855-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:11 GMT",
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
## Can delete pin with requestid 'baeaaadjrge2synzqhazdanjxgi4q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrge2synzqhazdanjxgi4q
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
  "cf-ray": "71cd29a56e8896ae-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:12 GMT",
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
## Can delete pin with requestid 'baeaaadjrgeycynzqg43tmmjygyya' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrgeycynzqg43tmmjygyya
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
  "cf-ray": "71cd29ab9c4c9664-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:13 GMT",
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
## Can delete pin with requestid 'baeaaadjrgaysynrzgi2dmobvgy4a' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrgaysynrzgi2dmobvgy4a
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
  "cf-ray": "71cd29b1eee024dc-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:14 GMT",
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
## Can delete pin with requestid 'bafkqadjrgy2dsmjyhaztgnbtge4q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkqadjrgy2dsmjyhaztgnbtge4q
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
  "cf-ray": "71cd29b82bcf24e8-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:15 GMT",
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
  "cf-ray": "71cd29be7ac897e7-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:17 GMT",
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
  "cf-ray": "71cd2979bc0996ae-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Fri, 17 Jun 2022 16:29:05 GMT",
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
      "requestid": "baeaaadjrgi2synjygmytimzsg4ya",
      "status": "queued",
      "created": "2022-06-17T16:29:00.763+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjygmytimzsg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjygi2tmmbugy2q",
      "status": "queued",
      "created": "2022-06-17T16:28:58.918+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjygi2tmmbugy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjyge4tanjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:56.996+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjyge4tanjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxheydenjygm4q",
      "status": "queued",
      "created": "2022-06-17T16:28:55.339+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxheydenjygm4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxhaztanrvgmzq",
      "status": "queued",
      "created": "2022-06-17T16:28:53.933+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxhaztanrvgmzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxg4ztknbrgi3a",
      "status": "queued",
      "created": "2022-06-17T16:28:51.84+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxg4ztknbrgi3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
      "status": "queued",
      "created": "2022-06-17T16:28:42.082+00:00",
      "pin": {
        "cid": "baeaaadjrge2synzqhazdanjxgi4q",
        "meta": null,
        "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:37.962+00:00",
      "pin": {
        "cid": "baeaaadjrgeycynzqg43tmmjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
      "status": "queued",
      "created": "2022-06-17T16:28:29.483+00:00",
      "pin": {
        "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
      "requestid": "baeaaadjrgi2synjygmytimzsg4ya",
      "status": "queued",
      "created": "2022-06-17T16:29:00.763+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjygmytimzsg4ya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjygi2tmmbugy2q",
      "status": "queued",
      "created": "2022-06-17T16:28:58.918+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjygi2tmmbugy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjyge4tanjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:56.996+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjyge4tanjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxheydenjygm4q",
      "status": "queued",
      "created": "2022-06-17T16:28:55.339+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxheydenjygm4q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxhaztanrvgmzq",
      "status": "queued",
      "created": "2022-06-17T16:28:53.933+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxhaztanrvgmzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgi2synjxg4ztknbrgi3a",
      "status": "queued",
      "created": "2022-06-17T16:28:51.84+00:00",
      "pin": {
        "cid": "baeaaadjrgi2synjxg4ztknbrgi3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2synzqhazdanjxgi4q",
      "status": "queued",
      "created": "2022-06-17T16:28:42.082+00:00",
      "pin": {
        "cid": "baeaaadjrge2synzqhazdanjxgi4q",
        "meta": null,
        "name": "65346f49-b8e0-4626-b7a8-fa9b4342a3e6",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycynzqg43tmmjygyya",
      "status": "queued",
      "created": "2022-06-17T16:28:37.962+00:00",
      "pin": {
        "cid": "baeaaadjrgeycynzqg43tmmjygyya",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgaysynrzgi2dmobvgy4a",
      "status": "queued",
      "created": "2022-06-17T16:28:29.483+00:00",
      "pin": {
        "cid": "baeaaadjrgaysynrzgi2dmobvgy4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
      "status": "pinned",
      "created": "2022-04-05T19:52:20.833+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmjyhaztgnbtge4q",
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
