
# https://nft.storage/api compliance:

Execution Date: 2022-06-27T16:24:44.147Z

Revision: [ff47a19](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/ff47a19)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai'](#pins-post-of-cid-bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='cd640818-73f9-4703-b9c3-4179d3cd611a'](#can-create-a-pin-with-namecd640818-73f9-4703-b9c3-4179d3cd611a----failed)

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
  "cf-ray": "721f86cbab4a96de-SJC",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:19 GMT",
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
  "cf-ray": "721f86d1edae6435-SJC",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:21 GMT",
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
## Pins post of CID 'bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai' - ❌ FAILED

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
{"cid":"bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f86d82d3d96a7-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
  "status": "queued",
  "created": "2022-06-27T16:23:22.9+00:00",
  "pin": {
    "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
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
  "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
  "status": "queued",
  "created": "2022-06-27T16:23:22.9+00:00",
  "pin": {
    "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
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
  "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
  "status": "queued",
  "created": "2022-06-27T16:23:22.900Z",
  "pin": {
    "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
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
DELETE https://nft.storage/api/pins/bafkreieri5n6wtzzpz65mf2pxvqwpwlxxgauke4leuasez4345yolpqwxu
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
  "cf-ray": "721f86fe2c7396de-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:28 GMT",
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
{"cid":"bafkreieri5n6wtzzpz65mf2pxvqwpwlxxgauke4leuasez4345yolpqwxu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f86eb4a3397fa-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreieri5n6wtzzpz65mf2pxvqwpwlxxgauke4leuasez4345yolpqwxu",
  "status": "queued",
  "created": "2022-06-27T16:23:25.987+00:00",
  "pin": {
    "cid": "bafkreieri5n6wtzzpz65mf2pxvqwpwlxxgauke4leuasez4345yolpqwxu",
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
  "requestid": "bafkreieri5n6wtzzpz65mf2pxvqwpwlxxgauke4leuasez4345yolpqwxu",
  "status": "queued",
  "created": "2022-06-27T16:23:25.987+00:00",
  "pin": {
    "cid": "bafkreieri5n6wtzzpz65mf2pxvqwpwlxxgauke4leuasez4345yolpqwxu",
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
  "requestid": "bafkreieri5n6wtzzpz65mf2pxvqwpwlxxgauke4leuasez4345yolpqwxu",
  "status": "queued",
  "created": "2022-06-27T16:23:25.987Z",
  "pin": {
    "cid": "bafkreieri5n6wtzzpz65mf2pxvqwpwlxxgauke4leuasez4345yolpqwxu",
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
  "cf-ray": "721f8701df56641d-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:30 GMT",
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
      "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
      "status": "queued",
      "created": "2022-06-27T16:23:22.9+00:00",
      "pin": {
        "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
      "status": "failed",
      "created": "2022-06-24T23:53:25.958+00:00",
      "pin": {
        "cid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
      "status": "queued",
      "created": "2022-06-24T23:53:19.469+00:00",
      "pin": {
        "cid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "356a75ba-1036-40a0-af3c-31ad2df4e22a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
      "status": "failed",
      "created": "2022-06-24T23:53:16.534+00:00",
      "pin": {
        "cid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
      "status": "failed",
      "created": "2022-06-24T23:53:10.401+00:00",
      "pin": {
        "cid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
      "status": "failed",
      "created": "2022-06-22T23:07:27.511+00:00",
      "pin": {
        "cid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
      "status": "failed",
      "created": "2022-06-22T23:07:18.296+00:00",
      "pin": {
        "cid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
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
      "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
      "status": "queued",
      "created": "2022-06-27T16:23:22.9+00:00",
      "pin": {
        "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
      "status": "failed",
      "created": "2022-06-24T23:53:25.958+00:00",
      "pin": {
        "cid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
      "status": "queued",
      "created": "2022-06-24T23:53:19.469+00:00",
      "pin": {
        "cid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "356a75ba-1036-40a0-af3c-31ad2df4e22a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
      "status": "failed",
      "created": "2022-06-24T23:53:16.534+00:00",
      "pin": {
        "cid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
      "status": "failed",
      "created": "2022-06-24T23:53:10.401+00:00",
      "pin": {
        "cid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
      "status": "failed",
      "created": "2022-06-22T23:07:27.511+00:00",
      "pin": {
        "cid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
      "status": "failed",
      "created": "2022-06-22T23:07:18.296+00:00",
      "pin": {
        "cid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
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
GET https://nft.storage/api/pins/bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u
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
  "cf-ray": "721f873989cd96de-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:37 GMT",
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
GET https://nft.storage/api/pins/bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa
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
  "cf-ray": "721f873fca4696a7-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
  "status": "queued",
  "created": "2022-06-27T16:23:35.058+00:00",
  "pin": {
    "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
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
  "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
  "status": "queued",
  "created": "2022-06-27T16:23:35.058+00:00",
  "pin": {
    "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
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
  "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
  "status": "queued",
  "created": "2022-06-27T16:23:35.058Z",
  "pin": {
    "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid 'bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u' can have cid 'bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u' replaced with 'bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa' - 🟢 SUCCESS

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
POST https://nft.storage/api/pins/bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u
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
{"cid":"bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f871c58912574-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
  "status": "queued",
  "created": "2022-06-27T16:23:35.058+00:00",
  "pin": {
    "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
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
  "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
  "status": "queued",
  "created": "2022-06-27T16:23:35.058+00:00",
  "pin": {
    "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
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
  "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
  "status": "queued",
  "created": "2022-06-27T16:23:35.058Z",
  "pin": {
    "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
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

  🟢 Could obtain requestid from new pin (bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u) (success)

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
{"cid":"bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f870fedf696a7-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u",
  "status": "queued",
  "created": "2022-06-27T16:23:31.356+00:00",
  "pin": {
    "cid": "bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u",
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
  "requestid": "bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u",
  "status": "queued",
  "created": "2022-06-27T16:23:31.356+00:00",
  "pin": {
    "cid": "bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u",
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
  "requestid": "bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u",
  "status": "queued",
  "created": "2022-06-27T16:23:31.356Z",
  "pin": {
    "cid": "bafkreifeuyvliwbdv7xcex5o5nolbt3tlqtjxtsc7vrd4u57us4gn6qm5u",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can retrieve pin with name 'cd640818-73f9-4703-b9c3-4179d3cd611a' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=cd640818-73f9-4703-b9c3-4179d3cd611a&match=exact
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
  "cf-ray": "721f87583acd96ba-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:43 GMT",
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
## Can retrieve pin with name 'CD640818-73F9-4703-B9C3-4179D3CD611A' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=CD640818-73F9-4703-B9C3-4179D3CD611A&match=iexact
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
  "cf-ray": "721f8762ec5a9658-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:13 GMT",
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
## Can retrieve pin with name '73f9-4703-b9c3-417' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=73f9-4703-b9c3-417&match=partial
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
  "cf-ray": "721f881aaeb8641d-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:15 GMT",
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
## Can retrieve pin with name '73F9-4703-B9C3-417' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=73F9-4703-B9C3-417&match=ipartial
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
  "cf-ray": "721f88264b9396ba-SJC",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:16 GMT",
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
## Can create a pin with name='cd640818-73f9-4703-b9c3-4179d3cd611a' - ❌ FAILED

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
{"cid":"bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie","name":"cd640818-73f9-4703-b9c3-4179d3cd611a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f87492a8c641d-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:23:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
  "status": "queued",
  "created": "2022-06-27T16:23:40.672+00:00",
  "pin": {
    "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
  "status": "queued",
  "created": "2022-06-27T16:23:40.672+00:00",
  "pin": {
    "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
  "status": "queued",
  "created": "2022-06-27T16:23:40.672Z",
  "pin": {
    "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
    "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq' - 🟢 SUCCESS

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
{"cid":"bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f883dd9ca9673-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
  "status": "queued",
  "created": "2022-06-27T16:24:19.435+00:00",
  "pin": {
    "cid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
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
  "requestid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
  "status": "queued",
  "created": "2022-06-27T16:24:19.435+00:00",
  "pin": {
    "cid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
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
  "requestid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
  "status": "queued",
  "created": "2022-06-27T16:24:19.435Z",
  "pin": {
    "cid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna' - 🟢 SUCCESS

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
{"cid":"bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f884bae56641d-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
  "status": "queued",
  "created": "2022-06-27T16:24:21.591+00:00",
  "pin": {
    "cid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
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
  "requestid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
  "status": "queued",
  "created": "2022-06-27T16:24:21.591+00:00",
  "pin": {
    "cid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
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
  "requestid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
  "status": "queued",
  "created": "2022-06-27T16:24:21.591Z",
  "pin": {
    "cid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u' - 🟢 SUCCESS

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
{"cid":"bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f885bb89196ba-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
  "status": "queued",
  "created": "2022-06-27T16:24:24.377+00:00",
  "pin": {
    "cid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
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
  "requestid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
  "status": "queued",
  "created": "2022-06-27T16:24:24.377+00:00",
  "pin": {
    "cid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
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
  "requestid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
  "status": "queued",
  "created": "2022-06-27T16:24:24.377Z",
  "pin": {
    "cid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4' - 🟢 SUCCESS

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
{"cid":"bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f88661d419e62-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
  "status": "queued",
  "created": "2022-06-27T16:24:26.519+00:00",
  "pin": {
    "cid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
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
  "requestid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
  "status": "queued",
  "created": "2022-06-27T16:24:26.519+00:00",
  "pin": {
    "cid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
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
  "requestid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
  "status": "queued",
  "created": "2022-06-27T16:24:26.519Z",
  "pin": {
    "cid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su' - 🟢 SUCCESS

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
{"cid":"bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "721f88783f089673-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
  "status": "queued",
  "created": "2022-06-27T16:24:28.955+00:00",
  "pin": {
    "cid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
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
  "requestid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
  "status": "queued",
  "created": "2022-06-27T16:24:28.955+00:00",
  "pin": {
    "cid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
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
  "requestid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
  "status": "queued",
  "created": "2022-06-27T16:24:28.955Z",
  "pin": {
    "cid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
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
  "cf-ray": "721f8883eb2b9861-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:31 GMT",
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
      "requestid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
      "status": "queued",
      "created": "2022-06-27T16:24:28.955+00:00",
      "pin": {
        "cid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
      "status": "queued",
      "created": "2022-06-27T16:24:26.519+00:00",
      "pin": {
        "cid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
      "status": "queued",
      "created": "2022-06-27T16:24:24.377+00:00",
      "pin": {
        "cid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
      "status": "queued",
      "created": "2022-06-27T16:24:21.591+00:00",
      "pin": {
        "cid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
      "status": "queued",
      "created": "2022-06-27T16:24:19.435+00:00",
      "pin": {
        "cid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
      "status": "queued",
      "created": "2022-06-27T16:23:40.672+00:00",
      "pin": {
        "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
      "status": "queued",
      "created": "2022-06-27T16:23:35.058+00:00",
      "pin": {
        "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
      "status": "queued",
      "created": "2022-06-27T16:23:22.9+00:00",
      "pin": {
        "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
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
      "requestid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
      "status": "queued",
      "created": "2022-06-27T16:24:28.955+00:00",
      "pin": {
        "cid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
      "status": "queued",
      "created": "2022-06-27T16:24:26.519+00:00",
      "pin": {
        "cid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
      "status": "queued",
      "created": "2022-06-27T16:24:24.377+00:00",
      "pin": {
        "cid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
      "status": "queued",
      "created": "2022-06-27T16:24:21.591+00:00",
      "pin": {
        "cid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
      "status": "queued",
      "created": "2022-06-27T16:24:19.435+00:00",
      "pin": {
        "cid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
      "status": "queued",
      "created": "2022-06-27T16:23:40.672+00:00",
      "pin": {
        "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
      "status": "queued",
      "created": "2022-06-27T16:23:35.058+00:00",
      "pin": {
        "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
      "status": "queued",
      "created": "2022-06-27T16:23:22.9+00:00",
      "pin": {
        "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
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
GET https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-24T23%3A53%3A26.728Z
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
  "cf-ray": "721f888dcd7c96ba-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:32 GMT",
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
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
      "status": "failed",
      "created": "2022-06-24T23:53:25.958+00:00",
      "pin": {
        "cid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
      "status": "queued",
      "created": "2022-06-24T23:53:19.469+00:00",
      "pin": {
        "cid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "356a75ba-1036-40a0-af3c-31ad2df4e22a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
      "status": "failed",
      "created": "2022-06-24T23:53:16.534+00:00",
      "pin": {
        "cid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
      "status": "failed",
      "created": "2022-06-24T23:53:10.401+00:00",
      "pin": {
        "cid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
      "status": "failed",
      "created": "2022-06-22T23:07:27.511+00:00",
      "pin": {
        "cid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
      "status": "failed",
      "created": "2022-06-22T23:07:18.296+00:00",
      "pin": {
        "cid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
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
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
      "status": "failed",
      "created": "2022-06-24T23:53:25.958+00:00",
      "pin": {
        "cid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
      "status": "queued",
      "created": "2022-06-24T23:53:19.469+00:00",
      "pin": {
        "cid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "356a75ba-1036-40a0-af3c-31ad2df4e22a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
      "status": "failed",
      "created": "2022-06-24T23:53:16.534+00:00",
      "pin": {
        "cid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
      "status": "failed",
      "created": "2022-06-24T23:53:10.401+00:00",
      "pin": {
        "cid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
      "status": "failed",
      "created": "2022-06-22T23:07:27.511+00:00",
      "pin": {
        "cid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
      "status": "failed",
      "created": "2022-06-22T23:07:18.296+00:00",
      "pin": {
        "cid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
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
  "cf-ray": "721f88305a959e62-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:18 GMT",
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
      "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
      "status": "queued",
      "created": "2022-06-27T16:23:40.672+00:00",
      "pin": {
        "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
      "status": "queued",
      "created": "2022-06-27T16:23:35.058+00:00",
      "pin": {
        "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
      "status": "queued",
      "created": "2022-06-27T16:23:22.9+00:00",
      "pin": {
        "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
      "status": "failed",
      "created": "2022-06-24T23:53:25.958+00:00",
      "pin": {
        "cid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
      "status": "queued",
      "created": "2022-06-24T23:53:19.469+00:00",
      "pin": {
        "cid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "356a75ba-1036-40a0-af3c-31ad2df4e22a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
      "status": "failed",
      "created": "2022-06-24T23:53:16.534+00:00",
      "pin": {
        "cid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
      "status": "failed",
      "created": "2022-06-24T23:53:10.401+00:00",
      "pin": {
        "cid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
      "status": "failed",
      "created": "2022-06-22T23:07:27.511+00:00",
      "pin": {
        "cid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
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
      "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
      "status": "queued",
      "created": "2022-06-27T16:23:40.672+00:00",
      "pin": {
        "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
      "status": "queued",
      "created": "2022-06-27T16:23:35.058+00:00",
      "pin": {
        "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
      "status": "queued",
      "created": "2022-06-27T16:23:22.9+00:00",
      "pin": {
        "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
      "status": "failed",
      "created": "2022-06-24T23:53:25.958+00:00",
      "pin": {
        "cid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
      "status": "queued",
      "created": "2022-06-24T23:53:19.469+00:00",
      "pin": {
        "cid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "356a75ba-1036-40a0-af3c-31ad2df4e22a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
      "status": "failed",
      "created": "2022-06-24T23:53:16.534+00:00",
      "pin": {
        "cid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
      "status": "failed",
      "created": "2022-06-24T23:53:10.401+00:00",
      "pin": {
        "cid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
      "status": "failed",
      "created": "2022-06-22T23:07:27.511+00:00",
      "pin": {
        "cid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
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
## Can delete pin with requestid 'bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su
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
  "cf-ray": "721f88a1ecda645e-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:36 GMT",
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
## Can delete pin with requestid 'bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4
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
  "cf-ray": "721f88a9cf219673-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:36 GMT",
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
## Can delete pin with requestid 'bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u
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
  "cf-ray": "721f88ae6f41965e-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:37 GMT",
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
## Can delete pin with requestid 'bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna
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
  "cf-ray": "721f88b4ad119861-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:38 GMT",
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
## Can delete pin with requestid 'bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq
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
  "cf-ray": "721f88badca196ba-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:39 GMT",
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
## Can delete pin with requestid 'bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie
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
  "cf-ray": "721f88c12f6b96f3-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:40 GMT",
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
## Can delete pin with requestid 'bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa
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
  "cf-ray": "721f88c759756434-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:42 GMT",
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
## Can delete pin with requestid 'bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai
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
  "cf-ray": "721f88cf3a8a645e-SJC",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:42 GMT",
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
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '10' (success)





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
  "cf-ray": "721f88d3dd9e9673-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:44 GMT",
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
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
      "status": "failed",
      "created": "2022-06-24T23:53:25.958+00:00",
      "pin": {
        "cid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
      "status": "queued",
      "created": "2022-06-24T23:53:19.469+00:00",
      "pin": {
        "cid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "356a75ba-1036-40a0-af3c-31ad2df4e22a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
      "status": "failed",
      "created": "2022-06-24T23:53:16.534+00:00",
      "pin": {
        "cid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
      "status": "failed",
      "created": "2022-06-24T23:53:10.401+00:00",
      "pin": {
        "cid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
      "status": "failed",
      "created": "2022-06-22T23:07:27.511+00:00",
      "pin": {
        "cid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
      "status": "failed",
      "created": "2022-06-22T23:07:18.296+00:00",
      "pin": {
        "cid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
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
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
      "status": "failed",
      "created": "2022-06-24T23:53:25.958+00:00",
      "pin": {
        "cid": "bafkreig4d4k3jea355iqwv73ty22jwtn6v5kcyo6s44nwel5esbjkogv5m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
      "status": "queued",
      "created": "2022-06-24T23:53:19.469+00:00",
      "pin": {
        "cid": "bafkreicgl4iong6ufwthyn35vpdld2bd33oraiizdi6zun226jyoqa4c4a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "356a75ba-1036-40a0-af3c-31ad2df4e22a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
      "status": "failed",
      "created": "2022-06-24T23:53:16.534+00:00",
      "pin": {
        "cid": "bafkreianyol3t3lpmdpyfwwwarik3jynt6mg4acwsbjyocvda7tkiljo7q",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
      "status": "failed",
      "created": "2022-06-24T23:53:10.401+00:00",
      "pin": {
        "cid": "bafkreih2ijkfqkundyaduds63si6c2plsihusg7dlwwhtrii2fmqf6of3m",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
      "status": "failed",
      "created": "2022-06-22T23:07:27.511+00:00",
      "pin": {
        "cid": "bafkreihjiuidum4oaaiqlbh2edc5wu2qw7vvfmsmml7scc4ntantqylbua",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
      "status": "failed",
      "created": "2022-06-22T23:07:18.296+00:00",
      "pin": {
        "cid": "bafkreid74jqo2osgpmqcvtcsuri3n7yvlv6lnvyqzfhtqlmjfxfuysjwei",
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
## Can delete all pins created during compliance checks - 🟢 SUCCESS

### Expectations (9/9 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '10' (success)


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
  "cf-ray": "721f88940a376434-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Mon, 27 Jun 2022 16:24:34 GMT",
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
      "requestid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
      "status": "queued",
      "created": "2022-06-27T16:24:28.955+00:00",
      "pin": {
        "cid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
      "status": "queued",
      "created": "2022-06-27T16:24:26.519+00:00",
      "pin": {
        "cid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
      "status": "queued",
      "created": "2022-06-27T16:24:24.377+00:00",
      "pin": {
        "cid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
      "status": "queued",
      "created": "2022-06-27T16:24:21.591+00:00",
      "pin": {
        "cid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
      "status": "queued",
      "created": "2022-06-27T16:24:19.435+00:00",
      "pin": {
        "cid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
      "status": "queued",
      "created": "2022-06-27T16:23:40.672+00:00",
      "pin": {
        "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
      "status": "queued",
      "created": "2022-06-27T16:23:35.058+00:00",
      "pin": {
        "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
      "status": "queued",
      "created": "2022-06-27T16:23:22.9+00:00",
      "pin": {
        "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
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
      "requestid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
      "status": "queued",
      "created": "2022-06-27T16:24:28.955+00:00",
      "pin": {
        "cid": "bafkreifcp2ovrja3rt47piuzau7m253mzfb4nlcpccdprsxum4af5cs7su",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
      "status": "queued",
      "created": "2022-06-27T16:24:26.519+00:00",
      "pin": {
        "cid": "bafkreidvfhhmg34grxh5zo2oifjgpiqfqtmaorq6kpe7isl2tmxi6ls3z4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
      "status": "queued",
      "created": "2022-06-27T16:24:24.377+00:00",
      "pin": {
        "cid": "bafkreib6vpetwnaagaiwptnqzi3nomsl7hcgsgu54dylgvtgjue4cmjg3u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
      "status": "queued",
      "created": "2022-06-27T16:24:21.591+00:00",
      "pin": {
        "cid": "bafkreia5qx3gev2dt4uplcw3o2ks6iq6anwivgc6akqxv3vl6cnoapuhna",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
      "status": "queued",
      "created": "2022-06-27T16:24:19.435+00:00",
      "pin": {
        "cid": "bafkreicadxubpswxgj5ifqs3csn3lmep4jgktiftlcej52gc7bzsy3w3kq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
      "status": "queued",
      "created": "2022-06-27T16:23:40.672+00:00",
      "pin": {
        "cid": "bafkreiaaxes7chht4jxjmyfccvxsrtsn5foup7e6v2fjuovqigujsluvie",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "cd640818-73f9-4703-b9c3-4179d3cd611a",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
      "status": "queued",
      "created": "2022-06-27T16:23:35.058+00:00",
      "pin": {
        "cid": "bafkreihjhztcx7ltaaia3wb57xnr7relzvzf64omw5fpicnsz33jxrbvoa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
      "status": "queued",
      "created": "2022-06-27T16:23:22.9+00:00",
      "pin": {
        "cid": "bafkreibh4744n667fpsxcog4637zo5t4bxrirflkylec64ax2uw6mbvsai",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
      "status": "queued",
      "created": "2022-06-24T23:53:27.69+00:00",
      "pin": {
        "cid": "bafkreicau34m3e4xniklpzga6l3zm6arm6yt7qhvntuj3w2l2qsbmn3bza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
      "status": "queued",
      "created": "2022-06-24T23:53:26.728+00:00",
      "pin": {
        "cid": "bafkreiasr7lmjhnij7o2kinkuaqt6e5oisfj4jyqd3kecywnrs2wum74mq",
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
