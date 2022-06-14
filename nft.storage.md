
# https://nft.storage/api compliance:

Execution Date: 2022-06-14T23:01:38.343Z

Revision: [3b27f0e](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/3b27f0e)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'baeaaadjsgi3cynbrha3tanrugiyq'](#pins-post-of-cid-baeaaadjsgi3cynbrha3tanrugiyq----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='65376e94-566c-4896-9f47-2f333a630332'](#can-create-a-pin-with-name65376e94-566c-4896-9f47-2f333a630332----success)

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
  "cf-ray": "71b6aef888179694-SJC",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:40 GMT",
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
  "cf-ray": "71b6aefd99609e4d-SJC",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:41 GMT",
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
## Pins post of CID 'baeaaadjsgi3cynbrha3tanrugiyq' - ❌ FAILED

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
{"cid":"baeaaadjsgi3cynbrha3tanrugiyq"}
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
  "cf-ray": "71b6af03d9429667-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
  "status": "queued",
  "created": "2022-06-14T23:00:43.378+00:00",
  "pin": {
    "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
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
  "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
  "status": "queued",
  "created": "2022-06-14T23:00:43.378+00:00",
  "pin": {
    "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
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
  "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
  "status": "queued",
  "created": "2022-06-14T23:00:43.378Z",
  "pin": {
    "cid": "baeaaadjsgi3cynbrha3tanrugiyq"
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
DELETE https://nft.storage/api/pins/baeaaadjsgmycynbqgqzdqnjyhe2a
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
  "cf-ray": "71b6af280a169e68-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:48 GMT",
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
{"cid":"baeaaadjsgmycynbqgqzdqnjyhe2a"}
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
  "cf-ray": "71b6af182c2e981c-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:47 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgmycynbqgqzdqnjyhe2a",
  "status": "queued",
  "created": "2022-06-14T23:00:46.066+00:00",
  "pin": {
    "cid": "baeaaadjsgmycynbqgqzdqnjyhe2a",
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
  "requestid": "baeaaadjsgmycynbqgqzdqnjyhe2a",
  "status": "queued",
  "created": "2022-06-14T23:00:46.066+00:00",
  "pin": {
    "cid": "baeaaadjsgmycynbqgqzdqnjyhe2a",
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
  "requestid": "baeaaadjsgmycynbqgqzdqnjyhe2a",
  "status": "queued",
  "created": "2022-06-14T23:00:46.066Z",
  "pin": {
    "cid": "baeaaadjsgmycynbqgqzdqnjyhe2a"
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
  "cf-ray": "71b6af2e0cfb9685-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:51 GMT",
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
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
      "status": "queued",
      "created": "2022-06-14T23:00:43.378+00:00",
      "pin": {
        "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
      "status": "pinned",
      "created": "2022-04-07T23:20:36.336+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
      "status": "pinned",
      "created": "2022-04-07T23:08:47.018+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
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
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
      "status": "queued",
      "created": "2022-06-14T23:00:43.378+00:00",
      "pin": {
        "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
      "status": "pinned",
      "created": "2022-04-07T23:20:36.336+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
      "status": "pinned",
      "created": "2022-04-07T23:08:47.018+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
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
GET https://nft.storage/api/pins/baeaaadjsgm2syojxgu2donjqgi2a
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
  "cf-ray": "71b6af674b1c9676-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:58 GMT",
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
GET https://nft.storage/api/pins/baeaaadbsgm4symrrg4ydenzrg4
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
  "cf-ray": "71b6af6d8b1d967c-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:00 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
  "status": "queued",
  "created": "2022-06-14T23:00:56.225+00:00",
  "pin": {
    "cid": "baeaaadbsgm4symrrg4ydenzrg4",
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
  "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
  "status": "queued",
  "created": "2022-06-14T23:00:56.225+00:00",
  "pin": {
    "cid": "baeaaadbsgm4symrrg4ydenzrg4",
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
  "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
  "status": "queued",
  "created": "2022-06-14T23:00:56.225Z",
  "pin": {
    "cid": "baeaaadbsgm4symrrg4ydenzrg4"
  },
  "delegates": []
}
```
## Pin's with requestid 'baeaaadjsgm2syojxgu2donjqgi2a' can have cid 'baeaaadjsgm2syojxgu2donjqgi2a' replaced with 'baeaaadbsgm4symrrg4ydenzrg4' - 🟢 SUCCESS

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
POST https://nft.storage/api/pins/baeaaadjsgm2syojxgu2donjqgi2a
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
{"cid":"baeaaadbsgm4symrrg4ydenzrg4"}
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
  "cf-ray": "71b6af4e1d956444-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
  "status": "queued",
  "created": "2022-06-14T23:00:56.225+00:00",
  "pin": {
    "cid": "baeaaadbsgm4symrrg4ydenzrg4",
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
  "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
  "status": "queued",
  "created": "2022-06-14T23:00:56.225+00:00",
  "pin": {
    "cid": "baeaaadbsgm4symrrg4ydenzrg4",
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
  "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
  "status": "queued",
  "created": "2022-06-14T23:00:56.225Z",
  "pin": {
    "cid": "baeaaadbsgm4symrrg4ydenzrg4"
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (baeaaadjsgm2syojxgu2donjqgi2a) (success)

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
{"cid":"baeaaadjsgm2syojxgu2donjqgi2a"}
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
  "cf-ray": "71b6af3b0aa46452-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:00:54 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgm2syojxgu2donjqgi2a",
  "status": "queued",
  "created": "2022-06-14T23:00:52.167+00:00",
  "pin": {
    "cid": "baeaaadjsgm2syojxgu2donjqgi2a",
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
  "requestid": "baeaaadjsgm2syojxgu2donjqgi2a",
  "status": "queued",
  "created": "2022-06-14T23:00:52.167+00:00",
  "pin": {
    "cid": "baeaaadjsgm2syojxgu2donjqgi2a",
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
  "requestid": "baeaaadjsgm2syojxgu2donjqgi2a",
  "status": "queued",
  "created": "2022-06-14T23:00:52.167Z",
  "pin": {
    "cid": "baeaaadjsgm2syojxgu2donjqgi2a"
  },
  "delegates": []
}
```
## Can retrieve pin with name '65376e94-566c-4896-9f47-2f333a630332' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=65376e94-566c-4896-9f47-2f333a630332&match=exact
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
  "cf-ray": "71b6af860ef196cc-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:05 GMT",
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
## Can retrieve pin with name '65376E94-566C-4896-9F47-2F333A630332' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=65376E94-566C-4896-9F47-2F333A630332&match=iexact
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
  "cf-ray": "71b6af93a8686444-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:07 GMT",
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
## Can retrieve pin with name '566c-4896-9f47-2f3' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=566c-4896-9f47-2f3&match=partial
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
  "cf-ray": "71b6af9fa8b59676-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:08 GMT",
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
## Can retrieve pin with name '566C-4896-9F47-2F3' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=566C-4896-9F47-2F3&match=ipartial
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
  "cf-ray": "71b6afa66e16967c-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:09 GMT",
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
## Can create a pin with name='65376e94-566c-4896-9f47-2f333a630332' - 🟢 SUCCESS

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
{"cid":"baeaaadjsgq2synrvgu3tembsg4ya","name":"65376e94-566c-4896-9f47-2f333a630332"}
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
  "cf-ray": "71b6af778e8d97ca-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:03 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
  "status": "queued",
  "created": "2022-06-14T23:01:01.548+00:00",
  "pin": {
    "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
    "meta": null,
    "name": "65376e94-566c-4896-9f47-2f333a630332",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
  "status": "queued",
  "created": "2022-06-14T23:01:01.548+00:00",
  "pin": {
    "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
    "meta": null,
    "name": "65376e94-566c-4896-9f47-2f333a630332",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
  "status": "queued",
  "created": "2022-06-14T23:01:01.548Z",
  "pin": {
    "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
    "name": "65376e94-566c-4896-9f47-2f333a630332"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsgu3cyojrg4ytinbxge4a' - 🟢 SUCCESS

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
{"cid":"baeaaadjsgu3cyojrg4ytinbxge4a"}
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
  "cf-ray": "71b6afbdea3596cc-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgu3cyojrg4ytinbxge4a",
  "status": "queued",
  "created": "2022-06-14T23:01:12.177+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojrg4ytinbxge4a",
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
  "requestid": "baeaaadjsgu3cyojrg4ytinbxge4a",
  "status": "queued",
  "created": "2022-06-14T23:01:12.177+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojrg4ytinbxge4a",
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
  "requestid": "baeaaadjsgu3cyojrg4ytinbxge4a",
  "status": "queued",
  "created": "2022-06-14T23:01:12.177Z",
  "pin": {
    "cid": "baeaaadjsgu3cyojrg4ytinbxge4a"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsgu3cyojrha4tenjugqyq' - 🟢 SUCCESS

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
{"cid":"baeaaadjsgu3cyojrha4tenjugqyq"}
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
  "cf-ray": "71b6afc7ea8b6444-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgu3cyojrha4tenjugqyq",
  "status": "queued",
  "created": "2022-06-14T23:01:14.497+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojrha4tenjugqyq",
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
  "requestid": "baeaaadjsgu3cyojrha4tenjugqyq",
  "status": "queued",
  "created": "2022-06-14T23:01:14.497+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojrha4tenjugqyq",
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
  "requestid": "baeaaadjsgu3cyojrha4tenjugqyq",
  "status": "queued",
  "created": "2022-06-14T23:01:14.497Z",
  "pin": {
    "cid": "baeaaadjsgu3cyojrha4tenjugqyq"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsgu3cyojrhe3tsnjwguzq' - 🟢 SUCCESS

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
{"cid":"baeaaadjsgu3cyojrhe3tsnjwguzq"}
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
  "cf-ray": "71b6afdc0f009676-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgu3cyojrhe3tsnjwguzq",
  "status": "queued",
  "created": "2022-06-14T23:01:17.86+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojrhe3tsnjwguzq",
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
  "requestid": "baeaaadjsgu3cyojrhe3tsnjwguzq",
  "status": "queued",
  "created": "2022-06-14T23:01:17.86+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojrhe3tsnjwguzq",
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
  "requestid": "baeaaadjsgu3cyojrhe3tsnjwguzq",
  "status": "queued",
  "created": "2022-06-14T23:01:17.860Z",
  "pin": {
    "cid": "baeaaadjsgu3cyojrhe3tsnjwguzq"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsgu3cyojsge3tqojqg44q' - 🟢 SUCCESS

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
{"cid":"baeaaadjsgu3cyojsge3tqojqg44q"}
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
  "cf-ray": "71b6afec9f959642-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgu3cyojsge3tqojqg44q",
  "status": "queued",
  "created": "2022-06-14T23:01:20.076+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojsge3tqojqg44q",
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
  "requestid": "baeaaadjsgu3cyojsge3tqojqg44q",
  "status": "queued",
  "created": "2022-06-14T23:01:20.076+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojsge3tqojqg44q",
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
  "requestid": "baeaaadjsgu3cyojsge3tqojqg44q",
  "status": "queued",
  "created": "2022-06-14T23:01:20.076Z",
  "pin": {
    "cid": "baeaaadjsgu3cyojsge3tqojqg44q"
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjsgu3cyojsgi2danzxha3q' - 🟢 SUCCESS

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
{"cid":"baeaaadjsgu3cyojsgi2danzxha3q"}
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
  "cf-ray": "71b6aff80ea796cc-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "baeaaadjsgu3cyojsgi2danzxha3q",
  "status": "queued",
  "created": "2022-06-14T23:01:22.176+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojsgi2danzxha3q",
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
  "requestid": "baeaaadjsgu3cyojsgi2danzxha3q",
  "status": "queued",
  "created": "2022-06-14T23:01:22.176+00:00",
  "pin": {
    "cid": "baeaaadjsgu3cyojsgi2danzxha3q",
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
  "requestid": "baeaaadjsgu3cyojsgi2danzxha3q",
  "status": "queued",
  "created": "2022-06-14T23:01:22.176Z",
  "pin": {
    "cid": "baeaaadjsgu3cyojsgi2danzxha3q"
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
  "cf-ray": "71b6b004bed36444-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:24 GMT",
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
      "requestid": "baeaaadjsgu3cyojsgi2danzxha3q",
      "status": "queued",
      "created": "2022-06-14T23:01:22.176+00:00",
      "pin": {
        "cid": "baeaaadjsgu3cyojsgi2danzxha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgu3cyojsge3tqojqg44q",
      "status": "queued",
      "created": "2022-06-14T23:01:20.076+00:00",
      "pin": {
        "cid": "baeaaadjsgu3cyojsge3tqojqg44q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycyojzgqztgobyhe2q",
      "status": "queued",
      "created": "2022-06-14T23:01:11.956+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgqztgobyhe2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycyojzgm2tgnrzheyq",
      "status": "queued",
      "created": "2022-06-14T23:01:10.203+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgm2tgnrzheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycyojzgi3tcobzha3a",
      "status": "queued",
      "created": "2022-06-14T23:01:08.444+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgi3tcobzha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
      "status": "queued",
      "created": "2022-06-14T23:01:01.548+00:00",
      "pin": {
        "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
        "meta": null,
        "name": "65376e94-566c-4896-9f47-2f333a630332",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcyobwgu3tomrygyza",
      "status": "queued",
      "created": "2022-06-14T23:01:00.194+00:00",
      "pin": {
        "cid": "baeaaadjrgazcyobwgu3tomrygyza",
        "meta": null,
        "name": "1b5fa63a-d377-44b4-8a1b-ba76f6684304",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhawdcmbqgmztinztg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.547+00:00",
      "pin": {
        "cid": "baeaaadbzhawdcmbqgmztinztg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.225+00:00",
      "pin": {
        "cid": "baeaaadbsgm4symrrg4ydenzrg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
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
      "requestid": "baeaaadjsgu3cyojsgi2danzxha3q",
      "status": "queued",
      "created": "2022-06-14T23:01:22.176+00:00",
      "pin": {
        "cid": "baeaaadjsgu3cyojsgi2danzxha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgu3cyojsge3tqojqg44q",
      "status": "queued",
      "created": "2022-06-14T23:01:20.076+00:00",
      "pin": {
        "cid": "baeaaadjsgu3cyojsge3tqojqg44q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycyojzgqztgobyhe2q",
      "status": "queued",
      "created": "2022-06-14T23:01:11.956+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgqztgobyhe2q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycyojzgm2tgnrzheyq",
      "status": "queued",
      "created": "2022-06-14T23:01:10.203+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgm2tgnrzheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycyojzgi3tcobzha3a",
      "status": "queued",
      "created": "2022-06-14T23:01:08.444+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgi3tcobzha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
      "status": "queued",
      "created": "2022-06-14T23:01:01.548+00:00",
      "pin": {
        "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
        "meta": null,
        "name": "65376e94-566c-4896-9f47-2f333a630332",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcyobwgu3tomrygyza",
      "status": "queued",
      "created": "2022-06-14T23:01:00.194+00:00",
      "pin": {
        "cid": "baeaaadjrgazcyobwgu3tomrygyza",
        "meta": null,
        "name": "1b5fa63a-d377-44b4-8a1b-ba76f6684304",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhawdcmbqgmztinztg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.547+00:00",
      "pin": {
        "cid": "baeaaadbzhawdcmbqgmztinztg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.225+00:00",
      "pin": {
        "cid": "baeaaadbsgm4symrrg4ydenzrg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
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
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-14T23%3A00%3A49.580Z
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
  "cf-ray": "71b6b00dca669679-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:25 GMT",
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
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
      "status": "queued",
      "created": "2022-06-14T23:00:43.378+00:00",
      "pin": {
        "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
      "status": "pinned",
      "created": "2022-04-07T23:20:36.336+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
      "status": "pinned",
      "created": "2022-04-07T23:08:47.018+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
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
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
      "status": "queued",
      "created": "2022-06-14T23:00:43.378+00:00",
      "pin": {
        "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
      "status": "pinned",
      "created": "2022-04-07T23:20:36.336+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
      "status": "pinned",
      "created": "2022-04-07T23:08:47.018+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
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
  "cf-ray": "71b6afb07d509444-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:11 GMT",
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
      "requestid": "baeaaadjrgeycyojzgm2tgnrzheyq",
      "status": "queued",
      "created": "2022-06-14T23:01:10.203+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgm2tgnrzheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycyojzgi3tcobzha3a",
      "status": "queued",
      "created": "2022-06-14T23:01:08.444+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgi3tcobzha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
      "status": "queued",
      "created": "2022-06-14T23:01:01.548+00:00",
      "pin": {
        "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
        "meta": null,
        "name": "65376e94-566c-4896-9f47-2f333a630332",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcyobwgu3tomrygyza",
      "status": "queued",
      "created": "2022-06-14T23:01:00.194+00:00",
      "pin": {
        "cid": "baeaaadjrgazcyobwgu3tomrygyza",
        "meta": null,
        "name": "1b5fa63a-d377-44b4-8a1b-ba76f6684304",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhawdcmbqgmztinztg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.547+00:00",
      "pin": {
        "cid": "baeaaadbzhawdcmbqgmztinztg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.225+00:00",
      "pin": {
        "cid": "baeaaadbsgm4symrrg4ydenzrg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
      "status": "queued",
      "created": "2022-06-14T23:00:43.378+00:00",
      "pin": {
        "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
      "status": "pinned",
      "created": "2022-04-07T23:20:36.336+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
      "status": "pinned",
      "created": "2022-04-07T23:08:47.018+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
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
      "requestid": "baeaaadjrgeycyojzgm2tgnrzheyq",
      "status": "queued",
      "created": "2022-06-14T23:01:10.203+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgm2tgnrzheyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgeycyojzgi3tcobzha3a",
      "status": "queued",
      "created": "2022-06-14T23:01:08.444+00:00",
      "pin": {
        "cid": "baeaaadjrgeycyojzgi3tcobzha3a",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
      "status": "queued",
      "created": "2022-06-14T23:01:01.548+00:00",
      "pin": {
        "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
        "meta": null,
        "name": "65376e94-566c-4896-9f47-2f333a630332",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcyobwgu3tomrygyza",
      "status": "queued",
      "created": "2022-06-14T23:01:00.194+00:00",
      "pin": {
        "cid": "baeaaadjrgazcyobwgu3tomrygyza",
        "meta": null,
        "name": "1b5fa63a-d377-44b4-8a1b-ba76f6684304",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhawdcmbqgmztinztg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.547+00:00",
      "pin": {
        "cid": "baeaaadbzhawdcmbqgmztinztg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.225+00:00",
      "pin": {
        "cid": "baeaaadbsgm4symrrg4ydenzrg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
      "status": "queued",
      "created": "2022-06-14T23:00:43.378+00:00",
      "pin": {
        "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
      "status": "pinned",
      "created": "2022-04-07T23:20:36.336+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
      "status": "pinned",
      "created": "2022-04-07T23:08:47.018+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
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
## Can delete pin with requestid 'baeaaadjsgu3cyojsgi2danzxha3q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjsgu3cyojsgi2danzxha3q
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
  "cf-ray": "71b6b01d9db4963f-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:27 GMT",
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
## Can delete pin with requestid 'baeaaadjsgu3cyojsge3tqojqg44q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjsgu3cyojsge3tqojqg44q
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
  "cf-ray": "71b6b023da609642-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:28 GMT",
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
## Can delete pin with requestid 'baeaaadjsgq2synrvgu3tembsg4ya' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjsgq2synrvgu3tembsg4ya
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
  "cf-ray": "71b6b02a1d25aaa5-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:30 GMT",
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
    "reason": "The specified resource was not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "The specified resource was not found"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can delete pin with requestid 'baeaaadjrgazcyobwgu3tomrygyza' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/baeaaadjrgazcyobwgu3tomrygyza
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
  "cf-ray": "71b6b03069ba96cc-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:30 GMT",
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
    "reason": "The specified resource was not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "The specified resource was not found"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can delete pin with requestid 'baeaaadbzhawdcmbqgmztinztg4' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadbzhawdcmbqgmztinztg4
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
  "cf-ray": "71b6b0369e8c6444-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:31 GMT",
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
## Can delete pin with requestid 'baeaaadbsgm4symrrg4ydenzrg4' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadbsgm4symrrg4ydenzrg4
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
  "cf-ray": "71b6b03ce9399679-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:32 GMT",
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
## Can delete pin with requestid 'baeaaadbzgawdonbvhe2timbqgq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadbzgawdonbvhe2timbqgq
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
  "cf-ray": "71b6b0431bc3985e-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:33 GMT",
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
## Can delete pin with requestid 'baeaaadjsgi3cynbrha3tanrugiyq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/baeaaadjsgi3cynbrha3tanrugiyq
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
  "cf-ray": "71b6b0497b699695-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:34 GMT",
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
## Can delete pin with requestid 'bafkqadjrgy2dsmzxgm3dgmbrgezq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkqadjrgy2dsmzxgm3dgmbrgezq
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
  "cf-ray": "71b6b04f9ec79642-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:35 GMT",
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
## Can delete pin with requestid 'bafkqadjrgy2dsmzxgi4tembyhe3q' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkqadjrgy2dsmzxgi4tembyhe3q
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
  "cf-ray": "71b6b055ec66aaa9-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:36 GMT",
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
  "cf-ray": "71b6b05c1e3996cc-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:38 GMT",
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
    },
    {
      "requestid": "bafkqadjrgy2dsmrygu3tmobwgeza",
      "status": "pinned",
      "created": "2022-04-06T22:56:21.131+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmrygu3tmobwgeza",
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
    },
    {
      "requestid": "bafkqadjrgy2dsmrygu3tmobwgeza",
      "status": "pinned",
      "created": "2022-04-06T22:56:21.131+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmrygu3tmobwgeza",
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

### Expectations (16/21 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202 (success)

  ❌ Response is ok (failure)

  ❌ Response code is 202 (failure)

  ❌ Response is ok (failure)

  ❌ Response code is 202 (failure)

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

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

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
  "cf-ray": "71b6b0159d369695-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 14 Jun 2022 23:01:27 GMT",
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
      "requestid": "baeaaadjsgu3cyojsgi2danzxha3q",
      "status": "queued",
      "created": "2022-06-14T23:01:22.176+00:00",
      "pin": {
        "cid": "baeaaadjsgu3cyojsgi2danzxha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgu3cyojsge3tqojqg44q",
      "status": "queued",
      "created": "2022-06-14T23:01:20.076+00:00",
      "pin": {
        "cid": "baeaaadjsgu3cyojsge3tqojqg44q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
      "status": "queued",
      "created": "2022-06-14T23:01:01.548+00:00",
      "pin": {
        "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
        "meta": null,
        "name": "65376e94-566c-4896-9f47-2f333a630332",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcyobwgu3tomrygyza",
      "status": "queued",
      "created": "2022-06-14T23:01:00.194+00:00",
      "pin": {
        "cid": "baeaaadjrgazcyobwgu3tomrygyza",
        "meta": null,
        "name": "1b5fa63a-d377-44b4-8a1b-ba76f6684304",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhawdcmbqgmztinztg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.547+00:00",
      "pin": {
        "cid": "baeaaadbzhawdcmbqgmztinztg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.225+00:00",
      "pin": {
        "cid": "baeaaadbsgm4symrrg4ydenzrg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
      "status": "queued",
      "created": "2022-06-14T23:00:43.378+00:00",
      "pin": {
        "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
      "status": "pinned",
      "created": "2022-04-07T23:20:36.336+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
      "status": "pinned",
      "created": "2022-04-07T23:08:47.018+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
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
      "requestid": "baeaaadjsgu3cyojsgi2danzxha3q",
      "status": "queued",
      "created": "2022-06-14T23:01:22.176+00:00",
      "pin": {
        "cid": "baeaaadjsgu3cyojsgi2danzxha3q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgu3cyojsge3tqojqg44q",
      "status": "queued",
      "created": "2022-06-14T23:01:20.076+00:00",
      "pin": {
        "cid": "baeaaadjsgu3cyojsge3tqojqg44q",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgq2synrvgu3tembsg4ya",
      "status": "queued",
      "created": "2022-06-14T23:01:01.548+00:00",
      "pin": {
        "cid": "baeaaadjsgq2synrvgu3tembsg4ya",
        "meta": null,
        "name": "65376e94-566c-4896-9f47-2f333a630332",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjrgazcyobwgu3tomrygyza",
      "status": "queued",
      "created": "2022-06-14T23:01:00.194+00:00",
      "pin": {
        "cid": "baeaaadjrgazcyobwgu3tomrygyza",
        "meta": null,
        "name": "1b5fa63a-d377-44b4-8a1b-ba76f6684304",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzhawdcmbqgmztinztg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.547+00:00",
      "pin": {
        "cid": "baeaaadbzhawdcmbqgmztinztg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbsgm4symrrg4ydenzrg4",
      "status": "queued",
      "created": "2022-06-14T23:00:56.225+00:00",
      "pin": {
        "cid": "baeaaadbsgm4symrrg4ydenzrg4",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbzgawdonbvhe2timbqgq",
      "status": "queued",
      "created": "2022-06-14T23:00:49.58+00:00",
      "pin": {
        "cid": "baeaaadbzgawdonbvhe2timbqgq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadjsgi3cynbrha3tanrugiyq",
      "status": "queued",
      "created": "2022-06-14T23:00:43.378+00:00",
      "pin": {
        "cid": "baeaaadjsgi3cynbrha3tanrugiyq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
      "status": "pinned",
      "created": "2022-04-07T23:20:36.336+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgm3dgmbrgezq",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
      "status": "pinned",
      "created": "2022-04-07T23:08:47.018+00:00",
      "pin": {
        "cid": "bafkqadjrgy2dsmzxgi4tembyhe3q",
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
