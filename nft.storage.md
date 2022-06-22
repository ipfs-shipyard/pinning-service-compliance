
# https://nft.storage/api compliance:

Execution Date: 2022-06-22T23:03:59.343Z

Revision: [7cbda7f](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/7cbda7f)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q'](#pins-post-of-cid-bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='01e9ab18-0678-44a7-9a5e-43a13e2d1ec3'](#can-create-a-pin-with-name01e9ab18-0678-44a7-9a5e-43a13e2d1ec3----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  🟢 [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----success)

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
  "cf-ray": "71f89db62f008f1a-IAD",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:13 GMT",
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
  "cf-ray": "71f89dbc69a1588a-IAD",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:15 GMT",
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
## Pins post of CID 'bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "origins" must be an array

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
{"cid":"bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89dc2ba285c82-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
  "status": "queued",
  "created": "2022-06-22T23:03:16.337+00:00",
  "pin": {
    "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
  "status": "queued",
  "created": "2022-06-22T23:03:16.337+00:00",
  "pin": {
    "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
  "status": "queued",
  "created": "2022-06-22T23:03:16.337Z",
  "pin": {
    "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreihgujq3h4kq2zbkb64z5vu6dmj7ckrtu2y4j7fybufnndlv4l6q7m
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
  "cf-ray": "71f89dd57d618242-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:18 GMT",
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
## Can create and then delete a new pin - ❌ FAILED

### Expectations (3/4 successful)

  🟢 Result is not null (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
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
{"cid":"bafkreihgujq3h4kq2zbkb64z5vu6dmj7ckrtu2y4j7fybufnndlv4l6q7m","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89dccf87b802d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreihgujq3h4kq2zbkb64z5vu6dmj7ckrtu2y4j7fybufnndlv4l6q7m",
  "status": "queued",
  "created": "2022-06-22T23:03:17.799+00:00",
  "pin": {
    "cid": "bafkreihgujq3h4kq2zbkb64z5vu6dmj7ckrtu2y4j7fybufnndlv4l6q7m",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreihgujq3h4kq2zbkb64z5vu6dmj7ckrtu2y4j7fybufnndlv4l6q7m",
  "status": "queued",
  "created": "2022-06-22T23:03:17.799+00:00",
  "pin": {
    "cid": "bafkreihgujq3h4kq2zbkb64z5vu6dmj7ckrtu2y4j7fybufnndlv4l6q7m",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreihgujq3h4kq2zbkb64z5vu6dmj7ckrtu2y4j7fybufnndlv4l6q7m",
  "status": "queued",
  "created": "2022-06-22T23:03:17.799Z",
  "pin": {
    "cid": "bafkreihgujq3h4kq2zbkb64z5vu6dmj7ckrtu2y4j7fybufnndlv4l6q7m",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)





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
  "cf-ray": "71f89dd7c8ac802a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:21 GMT",
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
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
GET https://nft.storage/api/pins/bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu
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
  "cf-ray": "71f89dfc68095c82-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:25 GMT",
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
GET https://nft.storage/api/pins/bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam
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
  "cf-ray": "71f89e02a9b46fcd-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
  "status": "queued",
  "created": "2022-06-22T23:03:24.032+00:00",
  "pin": {
    "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
  "status": "queued",
  "created": "2022-06-22T23:03:24.032+00:00",
  "pin": {
    "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
  "status": "queued",
  "created": "2022-06-22T23:03:24.032Z",
  "pin": {
    "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid 'bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu' can have cid 'bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu' replaced with 'bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam' - 🟢 SUCCESS

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
POST https://nft.storage/api/pins/bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu
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
{"cid":"bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89def0a658f0b-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
  "status": "queued",
  "created": "2022-06-22T23:03:24.032+00:00",
  "pin": {
    "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
  "status": "queued",
  "created": "2022-06-22T23:03:24.032+00:00",
  "pin": {
    "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
  "status": "queued",
  "created": "2022-06-22T23:03:24.032Z",
  "pin": {
    "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu) (success)

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
{"cid":"bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89de70b08588a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:22 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu",
  "status": "queued",
  "created": "2022-06-22T23:03:21.977+00:00",
  "pin": {
    "cid": "bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu",
  "status": "queued",
  "created": "2022-06-22T23:03:21.977+00:00",
  "pin": {
    "cid": "bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu",
  "status": "queued",
  "created": "2022-06-22T23:03:21.977Z",
  "pin": {
    "cid": "bafkreig6hnlekiovvg3gnh4nl4pyrsd6nx2x4ipf7vjqahrr2esoigb2tu",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can retrieve pin with name '01e9ab18-0678-44a7-9a5e-43a13e2d1ec3' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=01e9ab18-0678-44a7-9a5e-43a13e2d1ec3&match=exact
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
  "cf-ray": "71f89e115c7757ca-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:29 GMT",
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
## Can retrieve pin with name '01E9AB18-0678-44A7-9A5E-43A13E2D1EC3' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=01E9AB18-0678-44A7-9A5E-43A13E2D1EC3&match=iexact
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
  "cf-ray": "71f89e19bd679c34-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:30 GMT",
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
## Can retrieve pin with name '0678-44a7-9a5e-43a' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=0678-44a7-9a5e-43a&match=partial
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
  "cf-ray": "71f89e1fbc035b5f-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:31 GMT",
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
## Can retrieve pin with name '0678-44A7-9A5E-43A' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=0678-44A7-9A5E-43A&match=ipartial
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
  "cf-ray": "71f89e2668995b1d-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:32 GMT",
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
## Can create a pin with name='01e9ab18-0678-44a7-9a5e-43a13e2d1ec3' - ❌ FAILED

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
{"cid":"bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4","name":"01e9ab18-0678-44a7-9a5e-43a13e2d1ec3","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89e08dfef6ffe-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
  "status": "queued",
  "created": "2022-06-22T23:03:27.379+00:00",
  "pin": {
    "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
  "status": "queued",
  "created": "2022-06-22T23:03:27.379+00:00",
  "pin": {
    "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
  "status": "queued",
  "created": "2022-06-22T23:03:27.379Z",
  "pin": {
    "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
    "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y' - 🟢 SUCCESS

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
{"cid":"bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89e32c8b46fcd-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
  "status": "queued",
  "created": "2022-06-22T23:03:34.034+00:00",
  "pin": {
    "cid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
  "status": "queued",
  "created": "2022-06-22T23:03:34.034+00:00",
  "pin": {
    "cid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
  "status": "queued",
  "created": "2022-06-22T23:03:34.034Z",
  "pin": {
    "cid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm' - 🟢 SUCCESS

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
{"cid":"bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89e4368db81bb-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
  "status": "queued",
  "created": "2022-06-22T23:03:36.744+00:00",
  "pin": {
    "cid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
  "status": "queued",
  "created": "2022-06-22T23:03:36.744+00:00",
  "pin": {
    "cid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
  "status": "queued",
  "created": "2022-06-22T23:03:36.744Z",
  "pin": {
    "cid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4' - 🟢 SUCCESS

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
{"cid":"bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89e4bddd55b5f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
  "status": "queued",
  "created": "2022-06-22T23:03:37.936+00:00",
  "pin": {
    "cid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
  "status": "queued",
  "created": "2022-06-22T23:03:37.936+00:00",
  "pin": {
    "cid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
  "status": "queued",
  "created": "2022-06-22T23:03:37.936Z",
  "pin": {
    "cid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle' - 🟢 SUCCESS

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
{"cid":"bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89e52bffe5b1d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
  "status": "queued",
  "created": "2022-06-22T23:03:38.765+00:00",
  "pin": {
    "cid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
  "status": "queued",
  "created": "2022-06-22T23:03:38.765+00:00",
  "pin": {
    "cid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
  "status": "queued",
  "created": "2022-06-22T23:03:38.765Z",
  "pin": {
    "cid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke' - 🟢 SUCCESS

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
{"cid":"bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89e59e8d67f56-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
  "status": "queued",
  "created": "2022-06-22T23:03:40.352+00:00",
  "pin": {
    "cid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
  "status": "queued",
  "created": "2022-06-22T23:03:40.352+00:00",
  "pin": {
    "cid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
  "status": "queued",
  "created": "2022-06-22T23:03:40.352Z",
  "pin": {
    "cid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki' - 🟢 SUCCESS

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
{"cid":"bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89e6318ed8021-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
  "status": "queued",
  "created": "2022-06-22T23:03:41.757+00:00",
  "pin": {
    "cid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
  "status": "queued",
  "created": "2022-06-22T23:03:41.757+00:00",
  "pin": {
    "cid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
  "status": "queued",
  "created": "2022-06-22T23:03:41.757Z",
  "pin": {
    "cid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q' - 🟢 SUCCESS

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
{"cid":"bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "71f89e6adf5a5a51-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
  "status": "queued",
  "created": "2022-06-22T23:03:42.794+00:00",
  "pin": {
    "cid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
  "status": "queued",
  "created": "2022-06-22T23:03:42.794+00:00",
  "pin": {
    "cid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": null,
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
  "status": "queued",
  "created": "2022-06-22T23:03:42.794Z",
  "pin": {
    "cid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "cf-ray": "71f89e719b625b6a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:44 GMT",
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
      "requestid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
      "status": "queued",
      "created": "2022-06-22T23:03:42.794+00:00",
      "pin": {
        "cid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
      "status": "queued",
      "created": "2022-06-22T23:03:41.757+00:00",
      "pin": {
        "cid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
      "status": "queued",
      "created": "2022-06-22T23:03:40.352+00:00",
      "pin": {
        "cid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
      "status": "queued",
      "created": "2022-06-22T23:03:38.765+00:00",
      "pin": {
        "cid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
      "status": "queued",
      "created": "2022-06-22T23:03:37.936+00:00",
      "pin": {
        "cid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
      "status": "queued",
      "created": "2022-06-22T23:03:36.744+00:00",
      "pin": {
        "cid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
      "status": "queued",
      "created": "2022-06-22T23:03:34.034+00:00",
      "pin": {
        "cid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
      "status": "queued",
      "created": "2022-06-22T23:03:27.379+00:00",
      "pin": {
        "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
      "status": "queued",
      "created": "2022-06-22T23:03:24.032+00:00",
      "pin": {
        "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
      "requestid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
      "status": "queued",
      "created": "2022-06-22T23:03:42.794+00:00",
      "pin": {
        "cid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
      "status": "queued",
      "created": "2022-06-22T23:03:41.757+00:00",
      "pin": {
        "cid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
      "status": "queued",
      "created": "2022-06-22T23:03:40.352+00:00",
      "pin": {
        "cid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
      "status": "queued",
      "created": "2022-06-22T23:03:38.765+00:00",
      "pin": {
        "cid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
      "status": "queued",
      "created": "2022-06-22T23:03:37.936+00:00",
      "pin": {
        "cid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
      "status": "queued",
      "created": "2022-06-22T23:03:36.744+00:00",
      "pin": {
        "cid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
      "status": "queued",
      "created": "2022-06-22T23:03:34.034+00:00",
      "pin": {
        "cid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
      "status": "queued",
      "created": "2022-06-22T23:03:27.379+00:00",
      "pin": {
        "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
      "status": "queued",
      "created": "2022-06-22T23:03:24.032+00:00",
      "pin": {
        "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-22T23%3A03%3A16.337Z
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
  "cf-ray": "71f89e795fe15a6a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:45 GMT",
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
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
  "cf-ray": "71f89e2c8f919c24-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:33 GMT",
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
      "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
      "status": "queued",
      "created": "2022-06-22T23:03:27.379+00:00",
      "pin": {
        "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
      "status": "queued",
      "created": "2022-06-22T23:03:24.032+00:00",
      "pin": {
        "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
      "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
      "status": "queued",
      "created": "2022-06-22T23:03:27.379+00:00",
      "pin": {
        "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
      "status": "queued",
      "created": "2022-06-22T23:03:24.032+00:00",
      "pin": {
        "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
## Can delete pin with requestid 'bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q
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
  "cf-ray": "71f89e882c9a5a63-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:47 GMT",
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
## Can delete pin with requestid 'bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki
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
  "cf-ray": "71f89e8e5a9181ab-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:48 GMT",
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
## Can delete pin with requestid 'bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke
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
  "cf-ray": "71f89e9499965a51-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:49 GMT",
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
## Can delete pin with requestid 'bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle
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
  "cf-ray": "71f89e9b1ec05b6a-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:50 GMT",
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
## Can delete pin with requestid 'bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4
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
  "cf-ray": "71f89ea12c758024-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:51 GMT",
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
## Can delete pin with requestid 'bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm
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
  "cf-ray": "71f89ea77fae5a6a-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:52 GMT",
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
## Can delete pin with requestid 'bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y
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
  "cf-ray": "71f89ead9c0c5a63-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:53 GMT",
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
## Can delete pin with requestid 'bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4
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
  "cf-ray": "71f89eb3efd757e2-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:54 GMT",
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
## Can delete pin with requestid 'bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam
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
  "cf-ray": "71f89eba2f3c5a51-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:55 GMT",
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
## Can delete pin with requestid 'bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://nft.storage/api/pins/bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q
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
  "cf-ray": "71f89ec08c835b6a-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:56 GMT",
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
## Get all Pins created before 'Wed Jun 22 2022 23:03:16 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-22T23%3A03%3A16.337Z
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
  "cf-ray": "71f89ec6a8978203-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:58 GMT",
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
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '5' (success)





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
  "cf-ray": "71f89ecf2fba5a6a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:59 GMT",
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
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
      "requestid": "baeaaadbxgawdknrtge3tiobugu",
      "status": "failed",
      "created": "2022-06-20T17:45:24.975+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrtge3tiobugu",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbxgawdknrsgmydgnrtha",
      "status": "failed",
      "created": "2022-06-20T17:45:22.317+00:00",
      "pin": {
        "cid": "baeaaadbxgawdknrsgmydgnrtha",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaaczwgqwdcmrxgm3tqnbx",
      "status": "failed",
      "created": "2022-06-20T17:45:15.701+00:00",
      "pin": {
        "cid": "baeaaaczwgqwdcmrxgm3tqnbx",
        "meta": null,
        "name": "f588fa05-3c5f-4236-95d4-81d20f2f7f83",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvhewdmmjrgqytkmjvge",
      "status": "failed",
      "created": "2022-06-20T17:45:11.953+00:00",
      "pin": {
        "cid": "baeaaadbvhewdmmjrgqytkmjvge",
        "meta": null,
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "baeaaadbvgewdiojvg44donrxgu",
      "status": "failed",
      "created": "2022-06-20T17:45:03.94+00:00",
      "pin": {
        "cid": "baeaaadbvgewdiojvg44donrxgu",
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
## Can delete all pins created during compliance checks - 🟢 SUCCESS

### Expectations (11/11 successful)

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

  🟢 Final pinsGet call returns the same count as before all compliance checks: '5' (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
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
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:284:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


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
  "cf-ray": "71f89e805a825cd0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 22 Jun 2022 23:03:47 GMT",
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
      "requestid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
      "status": "queued",
      "created": "2022-06-22T23:03:42.794+00:00",
      "pin": {
        "cid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
      "status": "queued",
      "created": "2022-06-22T23:03:41.757+00:00",
      "pin": {
        "cid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
      "status": "queued",
      "created": "2022-06-22T23:03:40.352+00:00",
      "pin": {
        "cid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
      "status": "queued",
      "created": "2022-06-22T23:03:38.765+00:00",
      "pin": {
        "cid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
      "status": "queued",
      "created": "2022-06-22T23:03:37.936+00:00",
      "pin": {
        "cid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
      "status": "queued",
      "created": "2022-06-22T23:03:36.744+00:00",
      "pin": {
        "cid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
      "status": "queued",
      "created": "2022-06-22T23:03:34.034+00:00",
      "pin": {
        "cid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
      "status": "queued",
      "created": "2022-06-22T23:03:27.379+00:00",
      "pin": {
        "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
      "status": "queued",
      "created": "2022-06-22T23:03:24.032+00:00",
      "pin": {
        "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
      "requestid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
      "status": "queued",
      "created": "2022-06-22T23:03:42.794+00:00",
      "pin": {
        "cid": "bafkreihulqvcgqriwfryo7zq3ize72l5bwqzaxpq7h2mvfeyfokhkkpb4q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
      "status": "queued",
      "created": "2022-06-22T23:03:41.757+00:00",
      "pin": {
        "cid": "bafkreihrgtqbqroiy3genvbuorba7rfcbkvjd6veuwswj4bkgibflvizki",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
      "status": "queued",
      "created": "2022-06-22T23:03:40.352+00:00",
      "pin": {
        "cid": "bafkreihmeuivufwxq3n6stvsyb5eayw2zffz7pj2pdrzagqxow66ectfke",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
      "status": "queued",
      "created": "2022-06-22T23:03:38.765+00:00",
      "pin": {
        "cid": "bafkreiapj6q7ojie4rpflx5vqd36iq7vcmfgqffwaydamx2sfzr2fdlwle",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
      "status": "queued",
      "created": "2022-06-22T23:03:37.936+00:00",
      "pin": {
        "cid": "bafkreifng3j7fscs3zzboh7zblnvdxpuv5ev7zs6rwv3hpqk2ncbxm43g4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
      "status": "queued",
      "created": "2022-06-22T23:03:36.744+00:00",
      "pin": {
        "cid": "bafkreifuol34mh56bkswhp5wj3hvhenq4a63f4sor6dpyv57q7qkv2mekm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
      "status": "queued",
      "created": "2022-06-22T23:03:34.034+00:00",
      "pin": {
        "cid": "bafkreidhjylyqg5eepgq4tyyjn2wwn4gu3hvz5a2sexd6u6iizw6njyv7y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
      "status": "queued",
      "created": "2022-06-22T23:03:27.379+00:00",
      "pin": {
        "cid": "bafkreicwr5dsg3c5wq3n3l2wedhrymlauv3f2s4fskczvxiicyqd3czvc4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "01e9ab18-0678-44a7-9a5e-43a13e2d1ec3",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
      "status": "queued",
      "created": "2022-06-22T23:03:24.032+00:00",
      "pin": {
        "cid": "bafkreibveq2j5g27f3ja2yprvc7arr5cxggwhpecjqmi4nfxylo2pt7yam",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
      "status": "queued",
      "created": "2022-06-22T23:03:16.337+00:00",
      "pin": {
        "cid": "bafkreiaos4ov5sumh6k5wqsawjom3yuumd3wxrjmn426s6clmmm5j25h5q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
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
