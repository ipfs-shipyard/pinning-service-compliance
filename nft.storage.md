
# https://nft.storage/api compliance:

Execution Date: 2022-06-14T23:58:46.269Z

Revision: [c4ab9d1](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/c4ab9d1)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'baeaaadjugmycymzyha4temzxgy2q'](#pins-post-of-cid-baeaaadjugmycymzyha4temzxgy2q----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='355426b1-21be-4d5f-bf64-f5a00935e1d5'](#can-create-a-pin-with-name355426b1-21be-4d5f-bf64-f5a00935e1d5----success)

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
  "cf-ray": "71b703054e8f0c2f-DFW",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:03 GMT",
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
  "cf-ray": "71b7030a4e199f36-DFW",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:04 GMT",
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
## Pins post of CID 'baeaaadjugmycymzyha4temzxgy2q' - ❌ FAILED

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
{"cid":"baeaaadjugmycymzyha4temzxgy2q"}
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
  "cf-ray": "71b70310993c67ab-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugmycymzyha4temzxgy2q",
  "status": "queued",
  "created": "2022-06-14T23:58:05.443+00:00",
  "pin": {
    "cid": "baeaaadjugmycymzyha4temzxgy2q",
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
  "requestid": "baeaaadjugmycymzyha4temzxgy2q",
  "status": "queued",
  "created": "2022-06-14T23:58:05.443+00:00",
  "pin": {
    "cid": "baeaaadjugmycymzyha4temzxgy2q",
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
  "requestid": "baeaaadjugmycymzyha4temzxgy2q",
  "status": "queued",
  "created": "2022-06-14T23:58:05.443Z",
  "pin": {
    "cid": "baeaaadjugmycymzyha4temzxgy2q"
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
DELETE https://nft.storage/api/pins/baeaaadjugmzcynjuheytknjxge4a
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
  "cf-ray": "71b70324ab308164-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:08 GMT",
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
{"cid":"baeaaadjugmzcynjuheytknjxge4a"}
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
  "cf-ray": "71b7031999eb67aa-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugmzcynjuheytknjxge4a",
  "status": "queued",
  "created": "2022-06-14T23:58:06.853+00:00",
  "pin": {
    "cid": "baeaaadjugmzcynjuheytknjxge4a",
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
  "requestid": "baeaaadjugmzcynjuheytknjxge4a",
  "status": "queued",
  "created": "2022-06-14T23:58:06.853+00:00",
  "pin": {
    "cid": "baeaaadjugmzcynjuheytknjxge4a",
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
  "requestid": "baeaaadjugmzcynjuheytknjxge4a",
  "status": "queued",
  "created": "2022-06-14T23:58:06.853Z",
  "pin": {
    "cid": "baeaaadjugmzcynjuheytknjxge4a"
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
  "cf-ray": "71b70327186e284b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:09 GMT",
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
      "requestid": "baeaaadjugmycymzyha4temzxgy2q",
      "status": "queued",
      "created": "2022-06-14T23:58:05.443+00:00",
      "pin": {
        "cid": "baeaaadjugmycymzyha4temzxgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2symzwgm4tkmbuha2q",
      "status": "queued",
      "created": "2022-06-14T23:54:18.267+00:00",
      "pin": {
        "cid": "baeaaadjrge2symzwgm4tkmbuha2q",
        "meta": null,
        "name": "6536c14a-dfdf-4621-8006-8640ae8de608",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga4synrvg43dsobvgezq",
      "status": "queued",
      "created": "2022-06-14T23:54:14.596+00:00",
      "pin": {
        "cid": "baeaaadjrga4synrvg43dsobvgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguzcyojygm2dmobsha3q",
      "status": "queued",
      "created": "2022-06-14T23:54:10.951+00:00",
      "pin": {
        "cid": "baeaaadjrguzcyojygm2dmobsha3q",
        "meta": null,
        "name": "f5391754-48b7-416d-862b-6e4802403730",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdknbvg44tkobugm",
      "status": "queued",
      "created": "2022-06-14T23:54:08.905+00:00",
      "pin": {
        "cid": "baeaaadbvgewdknbvg44tkobugm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgq4cymrqhe3tenrwgu",
      "status": "queued",
      "created": "2022-06-14T23:54:06.544+00:00",
      "pin": {
        "cid": "baeaaadbrgq4cymrqhe3tenrwgu",
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
      "requestid": "baeaaadjugmycymzyha4temzxgy2q",
      "status": "queued",
      "created": "2022-06-14T23:58:05.443+00:00",
      "pin": {
        "cid": "baeaaadjugmycymzyha4temzxgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2symzwgm4tkmbuha2q",
      "status": "queued",
      "created": "2022-06-14T23:54:18.267+00:00",
      "pin": {
        "cid": "baeaaadjrge2symzwgm4tkmbuha2q",
        "meta": null,
        "name": "6536c14a-dfdf-4621-8006-8640ae8de608",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga4synrvg43dsobvgezq",
      "status": "queued",
      "created": "2022-06-14T23:54:14.596+00:00",
      "pin": {
        "cid": "baeaaadjrga4synrvg43dsobvgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguzcyojygm2dmobsha3q",
      "status": "queued",
      "created": "2022-06-14T23:54:10.951+00:00",
      "pin": {
        "cid": "baeaaadjrguzcyojygm2dmobsha3q",
        "meta": null,
        "name": "f5391754-48b7-416d-862b-6e4802403730",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdknbvg44tkobugm",
      "status": "queued",
      "created": "2022-06-14T23:54:08.905+00:00",
      "pin": {
        "cid": "baeaaadbvgewdknbvg44tkobugm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgq4cymrqhe3tenrwgu",
      "status": "queued",
      "created": "2022-06-14T23:54:06.544+00:00",
      "pin": {
        "cid": "baeaaadbrgq4cymrqhe3tenrwgu",
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
GET https://nft.storage/api/pins/baeaaadjugm2syojwgi2tqnbvgm2q
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
  "cf-ray": "71b7034bdffeec66-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:14 GMT",
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
GET https://nft.storage/api/pins/baeaaadbugm4cynrqga4tsnjsge
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
  "cf-ray": "71b703521a6caa87-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbugm4cynrqga4tsnjsge",
  "status": "queued",
  "created": "2022-06-14T23:58:13.412+00:00",
  "pin": {
    "cid": "baeaaadbugm4cynrqga4tsnjsge",
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
  "requestid": "baeaaadbugm4cynrqga4tsnjsge",
  "status": "queued",
  "created": "2022-06-14T23:58:13.412+00:00",
  "pin": {
    "cid": "baeaaadbugm4cynrqga4tsnjsge",
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
  "requestid": "baeaaadbugm4cynrqga4tsnjsge",
  "status": "queued",
  "created": "2022-06-14T23:58:13.412Z",
  "pin": {
    "cid": "baeaaadbugm4cynrqga4tsnjsge"
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjugm2syojwgi2tqnbvgm2q' can have cid 'baeaaadjugm2syojwgi2tqnbvgm2q' replaced with 'baeaaadbugm4cynrqga4tsnjsge' - 🟢 SUCCESS

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
POST https://nft.storage/api/pins/baeaaadjugm2syojwgi2tqnbvgm2q
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
{"cid":"baeaaadbugm4cynrqga4tsnjsge"}
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
  "cf-ray": "71b7033c1f650bd8-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:14 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbugm4cynrqga4tsnjsge",
  "status": "queued",
  "created": "2022-06-14T23:58:13.412+00:00",
  "pin": {
    "cid": "baeaaadbugm4cynrqga4tsnjsge",
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
  "requestid": "baeaaadbugm4cynrqga4tsnjsge",
  "status": "queued",
  "created": "2022-06-14T23:58:13.412+00:00",
  "pin": {
    "cid": "baeaaadbugm4cynrqga4tsnjsge",
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
  "requestid": "baeaaadbugm4cynrqga4tsnjsge",
  "status": "queued",
  "created": "2022-06-14T23:58:13.412Z",
  "pin": {
    "cid": "baeaaadbugm4cynrqga4tsnjsge"
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (baeaaadjugm2syojwgi2tqnbvgm2q) (success)

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
{"cid":"baeaaadjugm2syojwgi2tqnbvgm2q"}
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
  "cf-ray": "71b7032efd0daa49-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugm2syojwgi2tqnbvgm2q",
  "status": "queued",
  "created": "2022-06-14T23:58:10.495+00:00",
  "pin": {
    "cid": "baeaaadjugm2syojwgi2tqnbvgm2q",
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
  "requestid": "baeaaadjugm2syojwgi2tqnbvgm2q",
  "status": "queued",
  "created": "2022-06-14T23:58:10.495+00:00",
  "pin": {
    "cid": "baeaaadjugm2syojwgi2tqnbvgm2q",
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
  "requestid": "baeaaadjugm2syojwgi2tqnbvgm2q",
  "status": "queued",
  "created": "2022-06-14T23:58:10.495Z",
  "pin": {
    "cid": "baeaaadjugm2syojwgi2tqnbvgm2q"
  },
  "delegates": []
}
```
## Can retrieve pin with name '355426b1-21be-4d5f-bf64-f5a00935e1d5' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=355426b1-21be-4d5f-bf64-f5a00935e1d5&match=exact
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
  "cf-ray": "71b703640ad39ece-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:19 GMT",
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
## Can retrieve pin with name '355426B1-21BE-4D5F-BF64-F5A00935E1D5' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=355426B1-21BE-4D5F-BF64-F5A00935E1D5&match=iexact
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
  "cf-ray": "71b7036b9d079ef8-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:20 GMT",
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
## Can retrieve pin with name '21be-4d5f-bf64-f5a' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=21be-4d5f-bf64-f5a&match=partial
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
  "cf-ray": "71b70372bf6aaa2b-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:21 GMT",
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
## Can retrieve pin with name '21BE-4D5F-BF64-F5A' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=21BE-4D5F-BF64-F5A&match=ipartial
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
  "cf-ray": "71b703799e079ef4-DFW",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:22 GMT",
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
## Can create a pin with name='355426b1-21be-4d5f-bf64-f5a00935e1d5' - 🟢 SUCCESS

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
{"cid":"baeaaadjugqzcyobrgaztqmzvgm3q","name":"355426b1-21be-4d5f-bf64-f5a00935e1d5"}
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
  "cf-ray": "71b70359c8e26793-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
  "status": "queued",
  "created": "2022-06-14T23:58:17.019+00:00",
  "pin": {
    "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
    "meta": null,
    "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
  "status": "queued",
  "created": "2022-06-14T23:58:17.019+00:00",
  "pin": {
    "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
    "meta": null,
    "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
  "status": "queued",
  "created": "2022-06-14T23:58:17.019Z",
  "pin": {
    "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
    "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjugq4syojrgqytgmrwguyq' - 🟢 SUCCESS

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
{"cid":"baeaaadjugq4syojrgqytgmrwguyq"}
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
  "cf-ray": "71b70386c808814f-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugq4syojrgqytgmrwguyq",
  "status": "queued",
  "created": "2022-06-14T23:58:24.172+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrgqytgmrwguyq",
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
  "requestid": "baeaaadjugq4syojrgqytgmrwguyq",
  "status": "queued",
  "created": "2022-06-14T23:58:24.172+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrgqytgmrwguyq",
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
  "requestid": "baeaaadjugq4syojrgqytgmrwguyq",
  "status": "queued",
  "created": "2022-06-14T23:58:24.172Z",
  "pin": {
    "cid": "baeaaadjugq4syojrgqytgmrwguyq"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjugq4syojrguydanjygu4a' - 🟢 SUCCESS

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
{"cid":"baeaaadjugq4syojrguydanjygu4a"}
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
  "cf-ray": "71b7038eebf293e9-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugq4syojrguydanjygu4a",
  "status": "queued",
  "created": "2022-06-14T23:58:25.515+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrguydanjygu4a",
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
  "requestid": "baeaaadjugq4syojrguydanjygu4a",
  "status": "queued",
  "created": "2022-06-14T23:58:25.515+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrguydanjygu4a",
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
  "requestid": "baeaaadjugq4syojrguydanjygu4a",
  "status": "queued",
  "created": "2022-06-14T23:58:25.515Z",
  "pin": {
    "cid": "baeaaadjugq4syojrguydanjygu4a"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjugq4syojrgu2tgnrugyzq' - 🟢 SUCCESS

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
{"cid":"baeaaadjugq4syojrgu2tgnrugyzq"}
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
  "cf-ray": "71b70399fdb466c5-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugq4syojrgu2tgnrugyzq",
  "status": "queued",
  "created": "2022-06-14T23:58:27.296+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrgu2tgnrugyzq",
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
  "requestid": "baeaaadjugq4syojrgu2tgnrugyzq",
  "status": "queued",
  "created": "2022-06-14T23:58:27.296+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrgu2tgnrugyzq",
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
  "requestid": "baeaaadjugq4syojrgu2tgnrugyzq",
  "status": "queued",
  "created": "2022-06-14T23:58:27.296Z",
  "pin": {
    "cid": "baeaaadjugq4syojrgu2tgnrugyzq"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjugq4syojrgyydcobugy3q' - 🟢 SUCCESS

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
{"cid":"baeaaadjugq4syojrgyydcobugy3q"}
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
  "cf-ray": "71b703a48aa69ed0-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugq4syojrgyydcobugy3q",
  "status": "queued",
  "created": "2022-06-14T23:58:28.982+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrgyydcobugy3q",
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
  "requestid": "baeaaadjugq4syojrgyydcobugy3q",
  "status": "queued",
  "created": "2022-06-14T23:58:28.982+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrgyydcobugy3q",
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
  "requestid": "baeaaadjugq4syojrgyydcobugy3q",
  "status": "queued",
  "created": "2022-06-14T23:58:28.982Z",
  "pin": {
    "cid": "baeaaadjugq4syojrgyydcobugy3q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjugq4syojrgy3dambzg4za' - 🟢 SUCCESS

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
{"cid":"baeaaadjugq4syojrgy3dambzg4za"}
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
  "cf-ray": "71b703ad0cff9ef4-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjugq4syojrgy3dambzg4za",
  "status": "queued",
  "created": "2022-06-14T23:58:30.268+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrgy3dambzg4za",
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
  "requestid": "baeaaadjugq4syojrgy3dambzg4za",
  "status": "queued",
  "created": "2022-06-14T23:58:30.268+00:00",
  "pin": {
    "cid": "baeaaadjugq4syojrgy3dambzg4za",
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
  "requestid": "baeaaadjugq4syojrgy3dambzg4za",
  "status": "queued",
  "created": "2022-06-14T23:58:30.268Z",
  "pin": {
    "cid": "baeaaadjugq4syojrgy3dambzg4za"
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
  "cf-ray": "71b703be0b23285d-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:33 GMT",
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
      "requestid": "baeaaadjugq4syojrgy3dambzg4za",
      "status": "queued",
      "created": "2022-06-14T23:58:30.268+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgy3dambzg4za",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgyydcobugy3q",
      "status": "queued",
      "created": "2022-06-14T23:58:28.982+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgyydcobugy3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgu2tgnrugyzq",
      "status": "queued",
      "created": "2022-06-14T23:58:27.296+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgu2tgnrugyzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrguydanjygu4a",
      "status": "queued",
      "created": "2022-06-14T23:58:25.515+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrguydanjygu4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgqytgmrwguyq",
      "status": "queued",
      "created": "2022-06-14T23:58:24.172+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgqytgmrwguyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
      "status": "queued",
      "created": "2022-06-14T23:58:17.019+00:00",
      "pin": {
        "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
        "meta": null,
        "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbugm4cynrqga4tsnjsge",
      "status": "queued",
      "created": "2022-06-14T23:58:13.412+00:00",
      "pin": {
        "cid": "baeaaadbugm4cynrqga4tsnjsge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugmycymzyha4temzxgy2q",
      "status": "queued",
      "created": "2022-06-14T23:58:05.443+00:00",
      "pin": {
        "cid": "baeaaadjugmycymzyha4temzxgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2symzwgm4tkmbuha2q",
      "status": "queued",
      "created": "2022-06-14T23:54:18.267+00:00",
      "pin": {
        "cid": "baeaaadjrge2symzwgm4tkmbuha2q",
        "meta": null,
        "name": "6536c14a-dfdf-4621-8006-8640ae8de608",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
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
      "requestid": "baeaaadjugq4syojrgy3dambzg4za",
      "status": "queued",
      "created": "2022-06-14T23:58:30.268+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgy3dambzg4za",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgyydcobugy3q",
      "status": "queued",
      "created": "2022-06-14T23:58:28.982+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgyydcobugy3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgu2tgnrugyzq",
      "status": "queued",
      "created": "2022-06-14T23:58:27.296+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgu2tgnrugyzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrguydanjygu4a",
      "status": "queued",
      "created": "2022-06-14T23:58:25.515+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrguydanjygu4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgqytgmrwguyq",
      "status": "queued",
      "created": "2022-06-14T23:58:24.172+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgqytgmrwguyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
      "status": "queued",
      "created": "2022-06-14T23:58:17.019+00:00",
      "pin": {
        "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
        "meta": null,
        "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbugm4cynrqga4tsnjsge",
      "status": "queued",
      "created": "2022-06-14T23:58:13.412+00:00",
      "pin": {
        "cid": "baeaaadbugm4cynrqga4tsnjsge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugmycymzyha4temzxgy2q",
      "status": "queued",
      "created": "2022-06-14T23:58:05.443+00:00",
      "pin": {
        "cid": "baeaaadjugmycymzyha4temzxgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2symzwgm4tkmbuha2q",
      "status": "queued",
      "created": "2022-06-14T23:54:18.267+00:00",
      "pin": {
        "cid": "baeaaadjrge2symzwgm4tkmbuha2q",
        "meta": null,
        "name": "6536c14a-dfdf-4621-8006-8640ae8de608",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
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
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-14T23%3A54%3A15.342Z
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
  "cf-ray": "71b703c5ab0eaa76-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:35 GMT",
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
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga4synrvg43dsobvgezq",
      "status": "queued",
      "created": "2022-06-14T23:54:14.596+00:00",
      "pin": {
        "cid": "baeaaadjrga4synrvg43dsobvgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguzcyojygm2dmobsha3q",
      "status": "queued",
      "created": "2022-06-14T23:54:10.951+00:00",
      "pin": {
        "cid": "baeaaadjrguzcyojygm2dmobsha3q",
        "meta": null,
        "name": "f5391754-48b7-416d-862b-6e4802403730",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdknbvg44tkobugm",
      "status": "queued",
      "created": "2022-06-14T23:54:08.905+00:00",
      "pin": {
        "cid": "baeaaadbvgewdknbvg44tkobugm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgq4cymrqhe3tenrwgu",
      "status": "queued",
      "created": "2022-06-14T23:54:06.544+00:00",
      "pin": {
        "cid": "baeaaadbrgq4cymrqhe3tenrwgu",
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
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga4synrvg43dsobvgezq",
      "status": "queued",
      "created": "2022-06-14T23:54:14.596+00:00",
      "pin": {
        "cid": "baeaaadjrga4synrvg43dsobvgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguzcyojygm2dmobsha3q",
      "status": "queued",
      "created": "2022-06-14T23:54:10.951+00:00",
      "pin": {
        "cid": "baeaaadjrguzcyojygm2dmobsha3q",
        "meta": null,
        "name": "f5391754-48b7-416d-862b-6e4802403730",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdknbvg44tkobugm",
      "status": "queued",
      "created": "2022-06-14T23:54:08.905+00:00",
      "pin": {
        "cid": "baeaaadbvgewdknbvg44tkobugm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgq4cymrqhe3tenrwgu",
      "status": "queued",
      "created": "2022-06-14T23:54:06.544+00:00",
      "pin": {
        "cid": "baeaaadbrgq4cymrqhe3tenrwgu",
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
  "cf-ray": "71b703809d1caa87-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:23 GMT",
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
      "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
      "status": "queued",
      "created": "2022-06-14T23:58:17.019+00:00",
      "pin": {
        "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
        "meta": null,
        "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbugm4cynrqga4tsnjsge",
      "status": "queued",
      "created": "2022-06-14T23:58:13.412+00:00",
      "pin": {
        "cid": "baeaaadbugm4cynrqga4tsnjsge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugmycymzyha4temzxgy2q",
      "status": "queued",
      "created": "2022-06-14T23:58:05.443+00:00",
      "pin": {
        "cid": "baeaaadjugmycymzyha4temzxgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2symzwgm4tkmbuha2q",
      "status": "queued",
      "created": "2022-06-14T23:54:18.267+00:00",
      "pin": {
        "cid": "baeaaadjrge2symzwgm4tkmbuha2q",
        "meta": null,
        "name": "6536c14a-dfdf-4621-8006-8640ae8de608",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga4synrvg43dsobvgezq",
      "status": "queued",
      "created": "2022-06-14T23:54:14.596+00:00",
      "pin": {
        "cid": "baeaaadjrga4synrvg43dsobvgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguzcyojygm2dmobsha3q",
      "status": "queued",
      "created": "2022-06-14T23:54:10.951+00:00",
      "pin": {
        "cid": "baeaaadjrguzcyojygm2dmobsha3q",
        "meta": null,
        "name": "f5391754-48b7-416d-862b-6e4802403730",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdknbvg44tkobugm",
      "status": "queued",
      "created": "2022-06-14T23:54:08.905+00:00",
      "pin": {
        "cid": "baeaaadbvgewdknbvg44tkobugm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgq4cymrqhe3tenrwgu",
      "status": "queued",
      "created": "2022-06-14T23:54:06.544+00:00",
      "pin": {
        "cid": "baeaaadbrgq4cymrqhe3tenrwgu",
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
      "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
      "status": "queued",
      "created": "2022-06-14T23:58:17.019+00:00",
      "pin": {
        "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
        "meta": null,
        "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbugm4cynrqga4tsnjsge",
      "status": "queued",
      "created": "2022-06-14T23:58:13.412+00:00",
      "pin": {
        "cid": "baeaaadbugm4cynrqga4tsnjsge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugmycymzyha4temzxgy2q",
      "status": "queued",
      "created": "2022-06-14T23:58:05.443+00:00",
      "pin": {
        "cid": "baeaaadjugmycymzyha4temzxgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2symzwgm4tkmbuha2q",
      "status": "queued",
      "created": "2022-06-14T23:54:18.267+00:00",
      "pin": {
        "cid": "baeaaadjrge2symzwgm4tkmbuha2q",
        "meta": null,
        "name": "6536c14a-dfdf-4621-8006-8640ae8de608",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrga4synrvg43dsobvgezq",
      "status": "queued",
      "created": "2022-06-14T23:54:14.596+00:00",
      "pin": {
        "cid": "baeaaadjrga4synrvg43dsobvgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguzcyojygm2dmobsha3q",
      "status": "queued",
      "created": "2022-06-14T23:54:10.951+00:00",
      "pin": {
        "cid": "baeaaadjrguzcyojygm2dmobsha3q",
        "meta": null,
        "name": "f5391754-48b7-416d-862b-6e4802403730",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdknbvg44tkobugm",
      "status": "queued",
      "created": "2022-06-14T23:54:08.905+00:00",
      "pin": {
        "cid": "baeaaadbvgewdknbvg44tkobugm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgq4cymrqhe3tenrwgu",
      "status": "queued",
      "created": "2022-06-14T23:54:06.544+00:00",
      "pin": {
        "cid": "baeaaadbrgq4cymrqhe3tenrwgu",
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
## Can delete pin with requestid 'baeaaadjugq4syojrgy3dambzg4za' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjugq4syojrgy3dambzg4za
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
  "cf-ray": "71b703d42c3aaa0d-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:36 GMT",
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
## Can delete pin with requestid 'baeaaadjugq4syojrgyydcobugy3q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjugq4syojrgyydcobugy3q
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
  "cf-ray": "71b703d699f1aa03-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:36 GMT",
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
## Can delete pin with requestid 'baeaaadjugq4syojrgu2tgnrugyzq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjugq4syojrgu2tgnrugyzq
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
  "cf-ray": "71b703da6bd82839-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:37 GMT",
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
## Can delete pin with requestid 'baeaaadjugq4syojrguydanjygu4a' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjugq4syojrguydanjygu4a
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
  "cf-ray": "71b703e0ae159eb0-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:38 GMT",
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
## Can delete pin with requestid 'baeaaadjugq4syojrgqytgmrwguyq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjugq4syojrgqytgmrwguyq
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
  "cf-ray": "71b703e6ed3daa1f-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:39 GMT",
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
## Can delete pin with requestid 'baeaaadjugqzcyobrgaztqmzvgm3q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjugqzcyobrgaztqmzvgm3q
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
  "cf-ray": "71b703ed28f1285d-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:40 GMT",
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
## Can delete pin with requestid 'baeaaadbugm4cynrqga4tsnjsge' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadbugm4cynrqga4tsnjsge
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
  "cf-ray": "71b703f36e229eb3-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:41 GMT",
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
## Can delete pin with requestid 'baeaaadjugmycymzyha4temzxgy2q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjugmycymzyha4temzxgy2q
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
  "cf-ray": "71b703f9ae19aa7b-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:42 GMT",
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
## Can delete pin with requestid 'baeaaadjrge2symzwgm4tkmbuha2q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjrge2symzwgm4tkmbuha2q
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
  "cf-ray": "71b703ffeecc9f0d-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:43 GMT",
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
## Can delete pin with requestid 'baeaaadbvg4wdomrvgezdqnzzg4' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadbvg4wdomrvgezdqnzzg4
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
  "cf-ray": "71b704062b60a9f7-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:44 GMT",
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
  "cf-ray": "71b7040c6cedaa93-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:46 GMT",
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
      "requestid": "baeaaadjrga4synrvg43dsobvgezq",
      "status": "queued",
      "created": "2022-06-14T23:54:14.596+00:00",
      "pin": {
        "cid": "baeaaadjrga4synrvg43dsobvgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguzcyojygm2dmobsha3q",
      "status": "queued",
      "created": "2022-06-14T23:54:10.951+00:00",
      "pin": {
        "cid": "baeaaadjrguzcyojygm2dmobsha3q",
        "meta": null,
        "name": "f5391754-48b7-416d-862b-6e4802403730",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdknbvg44tkobugm",
      "status": "queued",
      "created": "2022-06-14T23:54:08.905+00:00",
      "pin": {
        "cid": "baeaaadbvgewdknbvg44tkobugm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgq4cymrqhe3tenrwgu",
      "status": "queued",
      "created": "2022-06-14T23:54:06.544+00:00",
      "pin": {
        "cid": "baeaaadbrgq4cymrqhe3tenrwgu",
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
      "requestid": "baeaaadjrga4synrvg43dsobvgezq",
      "status": "queued",
      "created": "2022-06-14T23:54:14.596+00:00",
      "pin": {
        "cid": "baeaaadjrga4synrvg43dsobvgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrguzcyojygm2dmobsha3q",
      "status": "queued",
      "created": "2022-06-14T23:54:10.951+00:00",
      "pin": {
        "cid": "baeaaadjrguzcyojygm2dmobsha3q",
        "meta": null,
        "name": "f5391754-48b7-416d-862b-6e4802403730",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdknbvg44tkobugm",
      "status": "queued",
      "created": "2022-06-14T23:54:08.905+00:00",
      "pin": {
        "cid": "baeaaadbvgewdknbvg44tkobugm",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbrgq4cymrqhe3tenrwgu",
      "status": "queued",
      "created": "2022-06-14T23:54:06.544+00:00",
      "pin": {
        "cid": "baeaaadbrgq4cymrqhe3tenrwgu",
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
  "cf-ray": "71b703cded0866c5-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:58:36 GMT",
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
      "requestid": "baeaaadjugq4syojrgy3dambzg4za",
      "status": "queued",
      "created": "2022-06-14T23:58:30.268+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgy3dambzg4za",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgyydcobugy3q",
      "status": "queued",
      "created": "2022-06-14T23:58:28.982+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgyydcobugy3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgu2tgnrugyzq",
      "status": "queued",
      "created": "2022-06-14T23:58:27.296+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgu2tgnrugyzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrguydanjygu4a",
      "status": "queued",
      "created": "2022-06-14T23:58:25.515+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrguydanjygu4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgqytgmrwguyq",
      "status": "queued",
      "created": "2022-06-14T23:58:24.172+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgqytgmrwguyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
      "status": "queued",
      "created": "2022-06-14T23:58:17.019+00:00",
      "pin": {
        "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
        "meta": null,
        "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbugm4cynrqga4tsnjsge",
      "status": "queued",
      "created": "2022-06-14T23:58:13.412+00:00",
      "pin": {
        "cid": "baeaaadbugm4cynrqga4tsnjsge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugmycymzyha4temzxgy2q",
      "status": "queued",
      "created": "2022-06-14T23:58:05.443+00:00",
      "pin": {
        "cid": "baeaaadjugmycymzyha4temzxgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2symzwgm4tkmbuha2q",
      "status": "queued",
      "created": "2022-06-14T23:54:18.267+00:00",
      "pin": {
        "cid": "baeaaadjrge2symzwgm4tkmbuha2q",
        "meta": null,
        "name": "6536c14a-dfdf-4621-8006-8640ae8de608",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
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
      "requestid": "baeaaadjugq4syojrgy3dambzg4za",
      "status": "queued",
      "created": "2022-06-14T23:58:30.268+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgy3dambzg4za",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgyydcobugy3q",
      "status": "queued",
      "created": "2022-06-14T23:58:28.982+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgyydcobugy3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgu2tgnrugyzq",
      "status": "queued",
      "created": "2022-06-14T23:58:27.296+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgu2tgnrugyzq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrguydanjygu4a",
      "status": "queued",
      "created": "2022-06-14T23:58:25.515+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrguydanjygu4a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugq4syojrgqytgmrwguyq",
      "status": "queued",
      "created": "2022-06-14T23:58:24.172+00:00",
      "pin": {
        "cid": "baeaaadjugq4syojrgqytgmrwguyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugqzcyobrgaztqmzvgm3q",
      "status": "queued",
      "created": "2022-06-14T23:58:17.019+00:00",
      "pin": {
        "cid": "baeaaadjugqzcyobrgaztqmzvgm3q",
        "meta": null,
        "name": "355426b1-21be-4d5f-bf64-f5a00935e1d5",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbugm4cynrqga4tsnjsge",
      "status": "queued",
      "created": "2022-06-14T23:58:13.412+00:00",
      "pin": {
        "cid": "baeaaadbugm4cynrqga4tsnjsge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjugmycymzyha4temzxgy2q",
      "status": "queued",
      "created": "2022-06-14T23:58:05.443+00:00",
      "pin": {
        "cid": "baeaaadjugmycymzyha4temzxgy2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrge2symzwgm4tkmbuha2q",
      "status": "queued",
      "created": "2022-06-14T23:54:18.267+00:00",
      "pin": {
        "cid": "baeaaadjrge2symzwgm4tkmbuha2q",
        "meta": null,
        "name": "6536c14a-dfdf-4621-8006-8640ae8de608",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvg4wdomrvgezdqnzzg4",
      "status": "queued",
      "created": "2022-06-14T23:54:15.342+00:00",
      "pin": {
        "cid": "baeaaadbvg4wdomrvgezdqnzzg4",
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
