
# https://nft.storage/api compliance:

Execution Date: 2022-06-25T01:53:54.405Z

Revision: [44f9034](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/44f9034)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/nft.storage.md)

## Summary (3/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa'](#pins-post-of-cid-bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='0e10a679-2813-469a-a58f-092289b71139'](#can-create-a-pin-with-name0e10a679-2813-469a-a58f-092289b71139----failed)

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
  "cf-ray": "720a11992e47801e-IAD",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:18 GMT",
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
  "cf-ray": "720a119f59429c8e-IAD",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:19 GMT",
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
## Pins post of CID 'bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa' - ❌ FAILED

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
{"cid":"bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a11a5ad8f5824-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
  "status": "queued",
  "created": "2022-06-25T01:53:20.475+00:00",
  "pin": {
    "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
  "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
  "status": "queued",
  "created": "2022-06-25T01:53:20.475+00:00",
  "pin": {
    "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
  "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
  "status": "queued",
  "created": "2022-06-25T01:53:20.475Z",
  "pin": {
    "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
DELETE https://nft.storage/api/pins/bafkreih7semsq5hkue7fiw2kvoamhkbigzx4pt7rkczlsnutq57r226xw4
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
  "cf-ray": "720a11b48be95d97-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:23 GMT",
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
{"cid":"bafkreih7semsq5hkue7fiw2kvoamhkbigzx4pt7rkczlsnutq57r226xw4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a11ae09ce56b0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:22 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreih7semsq5hkue7fiw2kvoamhkbigzx4pt7rkczlsnutq57r226xw4",
  "status": "queued",
  "created": "2022-06-25T01:53:21.85+00:00",
  "pin": {
    "cid": "bafkreih7semsq5hkue7fiw2kvoamhkbigzx4pt7rkczlsnutq57r226xw4",
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
  "requestid": "bafkreih7semsq5hkue7fiw2kvoamhkbigzx4pt7rkczlsnutq57r226xw4",
  "status": "queued",
  "created": "2022-06-25T01:53:21.85+00:00",
  "pin": {
    "cid": "bafkreih7semsq5hkue7fiw2kvoamhkbigzx4pt7rkczlsnutq57r226xw4",
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
  "requestid": "bafkreih7semsq5hkue7fiw2kvoamhkbigzx4pt7rkczlsnutq57r226xw4",
  "status": "queued",
  "created": "2022-06-25T01:53:21.850Z",
  "pin": {
    "cid": "bafkreih7semsq5hkue7fiw2kvoamhkbigzx4pt7rkczlsnutq57r226xw4",
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
  "cf-ray": "720a11b76bba5b1d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:24 GMT",
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
      "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
      "status": "queued",
      "created": "2022-06-25T01:53:20.475+00:00",
      "pin": {
        "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
      "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
      "status": "queued",
      "created": "2022-06-25T01:53:20.475+00:00",
      "pin": {
        "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
GET https://nft.storage/api/pins/bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm
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
  "cf-ray": "720a11d2e92f57a2-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:27 GMT",
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
GET https://nft.storage/api/pins/bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq
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
  "cf-ray": "720a11d92e9056b0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
  "status": "queued",
  "created": "2022-06-25T01:53:26.698+00:00",
  "pin": {
    "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
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
  "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
  "status": "queued",
  "created": "2022-06-25T01:53:26.698+00:00",
  "pin": {
    "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
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
  "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
  "status": "queued",
  "created": "2022-06-25T01:53:26.698Z",
  "pin": {
    "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid 'bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm' can have cid 'bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm' replaced with 'bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq' - 🟢 SUCCESS

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
POST https://nft.storage/api/pins/bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm
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
{"cid":"bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a11c628d49c1f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
  "status": "queued",
  "created": "2022-06-25T01:53:26.698+00:00",
  "pin": {
    "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
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
  "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
  "status": "queued",
  "created": "2022-06-25T01:53:26.698+00:00",
  "pin": {
    "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
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
  "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
  "status": "queued",
  "created": "2022-06-25T01:53:26.698Z",
  "pin": {
    "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
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

  🟢 Could obtain requestid from new pin (bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm) (success)

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
{"cid":"bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a11bdfe445a22-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm",
  "status": "queued",
  "created": "2022-06-25T01:53:24.667+00:00",
  "pin": {
    "cid": "bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm",
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
  "requestid": "bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm",
  "status": "queued",
  "created": "2022-06-25T01:53:24.667+00:00",
  "pin": {
    "cid": "bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm",
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
  "requestid": "bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm",
  "status": "queued",
  "created": "2022-06-25T01:53:24.667Z",
  "pin": {
    "cid": "bafkreiabr4ymucnaheed65cjdp57yoqaa5ludnvu2ibk6tqb4vu7uykipm",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can retrieve pin with name '0e10a679-2813-469a-a58f-092289b71139' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=0e10a679-2813-469a-a58f-092289b71139&match=exact
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
  "cf-ray": "720a11e65e7582cf-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:31 GMT",
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
## Can retrieve pin with name '0E10A679-2813-469A-A58F-092289B71139' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=0E10A679-2813-469A-A58F-092289B71139&match=iexact
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
  "cf-ray": "720a11ec491d5a22-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:32 GMT",
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
## Can retrieve pin with name '2813-469a-a58f-092' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=2813-469a-a58f-092&match=partial
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
  "cf-ray": "720a11f10c06575e-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:33 GMT",
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
## Can retrieve pin with name '2813-469A-A58F-092' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://nft.storage/api/pins?name=2813-469A-A58F-092&match=ipartial
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
  "cf-ray": "720a11f78bc55806-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:34 GMT",
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
## Can create a pin with name='0e10a679-2813-469a-a58f-092289b71139' - ❌ FAILED

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
{"cid":"bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza","name":"0e10a679-2813-469a-a58f-092289b71139","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a11de4e935d97-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
  "status": "queued",
  "created": "2022-06-25T01:53:29.847+00:00",
  "pin": {
    "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "0e10a679-2813-469a-a58f-092289b71139",
    "origins": null
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
  "status": "queued",
  "created": "2022-06-25T01:53:29.847+00:00",
  "pin": {
    "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "0e10a679-2813-469a-a58f-092289b71139",
    "origins": null
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
  "status": "queued",
  "created": "2022-06-25T01:53:29.847Z",
  "pin": {
    "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
    "name": "0e10a679-2813-469a-a58f-092289b71139",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi' - 🟢 SUCCESS

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
{"cid":"bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a12044dc85ca7-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
  "status": "queued",
  "created": "2022-06-25T01:53:36.061+00:00",
  "pin": {
    "cid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
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
  "requestid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
  "status": "queued",
  "created": "2022-06-25T01:53:36.061+00:00",
  "pin": {
    "cid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
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
  "requestid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
  "status": "queued",
  "created": "2022-06-25T01:53:36.061Z",
  "pin": {
    "cid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu' - 🟢 SUCCESS

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
{"cid":"bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a120e3c7f5d97-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
  "status": "queued",
  "created": "2022-06-25T01:53:37.36+00:00",
  "pin": {
    "cid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
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
  "requestid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
  "status": "queued",
  "created": "2022-06-25T01:53:37.36+00:00",
  "pin": {
    "cid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
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
  "requestid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
  "status": "queued",
  "created": "2022-06-25T01:53:37.360Z",
  "pin": {
    "cid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644' - 🟢 SUCCESS

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
{"cid":"bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a121528645b94-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
  "status": "queued",
  "created": "2022-06-25T01:53:38.734+00:00",
  "pin": {
    "cid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
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
  "requestid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
  "status": "queued",
  "created": "2022-06-25T01:53:38.734+00:00",
  "pin": {
    "cid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
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
  "requestid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
  "status": "queued",
  "created": "2022-06-25T01:53:38.734Z",
  "pin": {
    "cid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa' - 🟢 SUCCESS

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
{"cid":"bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a121e6fe2575e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
  "status": "queued",
  "created": "2022-06-25T01:53:39.941+00:00",
  "pin": {
    "cid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
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
  "requestid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
  "status": "queued",
  "created": "2022-06-25T01:53:39.941+00:00",
  "pin": {
    "cid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
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
  "requestid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
  "status": "queued",
  "created": "2022-06-25T01:53:39.941Z",
  "pin": {
    "cid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4' - 🟢 SUCCESS

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
{"cid":"bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "720a12252a685d92-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
  "status": "queued",
  "created": "2022-06-25T01:53:41.008+00:00",
  "pin": {
    "cid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
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
  "requestid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
  "status": "queued",
  "created": "2022-06-25T01:53:41.008+00:00",
  "pin": {
    "cid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
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
  "requestid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
  "status": "queued",
  "created": "2022-06-25T01:53:41.008Z",
  "pin": {
    "cid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
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
  "cf-ray": "720a122e9fcf5ca0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:43 GMT",
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
      "requestid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
      "status": "queued",
      "created": "2022-06-25T01:53:41.008+00:00",
      "pin": {
        "cid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
      "status": "queued",
      "created": "2022-06-25T01:53:39.941+00:00",
      "pin": {
        "cid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
      "status": "queued",
      "created": "2022-06-25T01:53:38.734+00:00",
      "pin": {
        "cid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
      "status": "queued",
      "created": "2022-06-25T01:53:37.36+00:00",
      "pin": {
        "cid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
      "status": "queued",
      "created": "2022-06-25T01:53:36.061+00:00",
      "pin": {
        "cid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
      "status": "queued",
      "created": "2022-06-25T01:53:29.847+00:00",
      "pin": {
        "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "0e10a679-2813-469a-a58f-092289b71139",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
      "status": "queued",
      "created": "2022-06-25T01:53:26.698+00:00",
      "pin": {
        "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
      "status": "queued",
      "created": "2022-06-25T01:53:20.475+00:00",
      "pin": {
        "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
      "requestid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
      "status": "queued",
      "created": "2022-06-25T01:53:41.008+00:00",
      "pin": {
        "cid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
      "status": "queued",
      "created": "2022-06-25T01:53:39.941+00:00",
      "pin": {
        "cid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
      "status": "queued",
      "created": "2022-06-25T01:53:38.734+00:00",
      "pin": {
        "cid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
      "status": "queued",
      "created": "2022-06-25T01:53:37.36+00:00",
      "pin": {
        "cid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
      "status": "queued",
      "created": "2022-06-25T01:53:36.061+00:00",
      "pin": {
        "cid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
      "status": "queued",
      "created": "2022-06-25T01:53:29.847+00:00",
      "pin": {
        "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "0e10a679-2813-469a-a58f-092289b71139",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
      "status": "queued",
      "created": "2022-06-25T01:53:26.698+00:00",
      "pin": {
        "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
      "status": "queued",
      "created": "2022-06-25T01:53:20.475+00:00",
      "pin": {
        "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
  "cf-ray": "720a12358b23824e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:44 GMT",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
  "cf-ray": "720a11fdea1681d6-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:35 GMT",
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
      "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
      "status": "queued",
      "created": "2022-06-25T01:53:29.847+00:00",
      "pin": {
        "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "0e10a679-2813-469a-a58f-092289b71139",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
      "status": "queued",
      "created": "2022-06-25T01:53:26.698+00:00",
      "pin": {
        "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
      "status": "queued",
      "created": "2022-06-25T01:53:20.475+00:00",
      "pin": {
        "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
      "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
      "status": "queued",
      "created": "2022-06-25T01:53:29.847+00:00",
      "pin": {
        "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "0e10a679-2813-469a-a58f-092289b71139",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
      "status": "queued",
      "created": "2022-06-25T01:53:26.698+00:00",
      "pin": {
        "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
      "status": "queued",
      "created": "2022-06-25T01:53:20.475+00:00",
      "pin": {
        "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
## Can delete pin with requestid 'bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4
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
  "cf-ray": "720a12423d7a5d97-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:45 GMT",
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
## Can delete pin with requestid 'bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa
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
  "cf-ray": "720a1248784c9c3a-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:46 GMT",
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
## Can delete pin with requestid 'bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644
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
  "cf-ray": "720a124ecbac575e-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:47 GMT",
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
## Can delete pin with requestid 'bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu
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
  "cf-ray": "720a1254f8289c7c-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:48 GMT",
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
## Can delete pin with requestid 'bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi
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
  "cf-ray": "720a125b3ef45a5d-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:49 GMT",
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
## Can delete pin with requestid 'bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza
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
  "cf-ray": "720a12617e5159c1-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:50 GMT",
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
## Can delete pin with requestid 'bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq
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
  "cf-ray": "720a1267b8e1824e-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:51 GMT",
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
## Can delete pin with requestid 'bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa' - 🟢 SUCCESS

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
DELETE https://nft.storage/api/pins/bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa
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
  "cf-ray": "720a126dfcf55a27-IAD",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:52 GMT",
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
  "cf-ray": "720a12743ee59c3a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:54 GMT",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
      "status": "queued",
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
  "cf-ray": "720a123bfe755a27-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Sat, 25 Jun 2022 01:53:45 GMT",
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
      "requestid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
      "status": "queued",
      "created": "2022-06-25T01:53:41.008+00:00",
      "pin": {
        "cid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
      "status": "queued",
      "created": "2022-06-25T01:53:39.941+00:00",
      "pin": {
        "cid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
      "status": "queued",
      "created": "2022-06-25T01:53:38.734+00:00",
      "pin": {
        "cid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
      "status": "queued",
      "created": "2022-06-25T01:53:37.36+00:00",
      "pin": {
        "cid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
      "status": "queued",
      "created": "2022-06-25T01:53:36.061+00:00",
      "pin": {
        "cid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
      "status": "queued",
      "created": "2022-06-25T01:53:29.847+00:00",
      "pin": {
        "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "0e10a679-2813-469a-a58f-092289b71139",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
      "status": "queued",
      "created": "2022-06-25T01:53:26.698+00:00",
      "pin": {
        "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
      "status": "queued",
      "created": "2022-06-25T01:53:20.475+00:00",
      "pin": {
        "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
      "requestid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
      "status": "queued",
      "created": "2022-06-25T01:53:41.008+00:00",
      "pin": {
        "cid": "bafkreieerejmgw2pwfnlgn7ofjhg2a6inv2w6g5xr52gukklxtmiicz3u4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
      "status": "queued",
      "created": "2022-06-25T01:53:39.941+00:00",
      "pin": {
        "cid": "bafkreiduebw65kwpixdkm42tv4stdzq2v3yc6mw6vqetekqhcpc3yxdvxa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
      "status": "queued",
      "created": "2022-06-25T01:53:38.734+00:00",
      "pin": {
        "cid": "bafkreicesjofaul647bj43lphqyuxf74wx6zsigzwsnzvopzagzmjog644",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
      "status": "queued",
      "created": "2022-06-25T01:53:37.36+00:00",
      "pin": {
        "cid": "bafkreiabwy2bjrardkgdfskncdeers4jdfyduzkhfse7u5jnv244omluwu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
      "status": "queued",
      "created": "2022-06-25T01:53:36.061+00:00",
      "pin": {
        "cid": "bafkreibku2s5xvg3x6dsginfjk4zsfjdm3hgguhk6dneqtphkeodvctfzi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
      "status": "queued",
      "created": "2022-06-25T01:53:29.847+00:00",
      "pin": {
        "cid": "bafkreieskejrxpykmhglxe7vk3uycvoifx3wlwmjwuwjb3bbteu4kkwzza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "0e10a679-2813-469a-a58f-092289b71139",
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
      "status": "queued",
      "created": "2022-06-25T01:53:26.698+00:00",
      "pin": {
        "cid": "bafkreieyeea5jllwq4lazayk4jc7mm42u5qhzkpci5f42jlq23vvsdbuqq",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": null,
        "origins": null
      },
      "delegates": []
    },
    {
      "requestid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
      "status": "queued",
      "created": "2022-06-25T01:53:20.475+00:00",
      "pin": {
        "cid": "bafkreiendx7sd5xo5zxyxvnpljjpg265h74ihiq2ihiwjge3tkyz2hhyxa",
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
