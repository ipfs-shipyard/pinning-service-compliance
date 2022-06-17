
# https://api.pinata.cloud/psa compliance:

Execution Date: 2022-06-17T21:40:46.365Z

Revision: [416d410](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/416d410)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.pinata.cloud.md)

## Summary (4/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'baeaaadjsgm4cymrugyztsnbwgu3q'](#pins-post-of-cid-baeaaadjsgm4cymrugyztsnbwgu3q----success)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='f07a03e2-52ea-4723-a05d-31dfbbf6add2'](#can-create-a-pin-with-namef07a03e2-52ea-4723-a05d-31dfbbf6add2----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins](#can-delete-all-pins----failed)

## Request with no authentication token - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response object matches api spec schema (success)

  ❌ Response code is 401 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins
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
400 Bad Request
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "117",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:13 GMT",
  "etag": "W/\"75-8hWiVluTmqi8Bp2+E+MmsFL38tY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "KEYS_MUST_BE_STRINGS",
    "details": "pinata_api_key and pinata_secret_api_key must both be strings"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "KEYS_MUST_BE_STRINGS",
    "details": "pinata_api_key and pinata_secret_api_key must both be strings"
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
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:14 GMT",
  "etag": "W/\"52-hDmJB39hiWxMgXnl95p1Dk5Zk6Q\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "INVALID_CREDENTIALS",
    "details": "Invalid/expired credentials"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "INVALID_CREDENTIALS",
    "details": "Invalid/expired credentials"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'baeaaadjsgm4cymrugyztsnbwgu3q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Pinning status is either queued, pinning, or pinned (success)





### Details

#### Request
```
POST https://api.pinata.cloud/psa/pins
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
{"cid":"baeaaadjsgm4cymrugyztsnbwgu3q"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:16 GMT",
  "etag": "W/\"13e-/l9V+/8dBbnuP3lw1wdHnx5/Z54\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
  "created": "2022-06-17T21:39:16.378Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```

##### Body (as JSON)
```json
{
  "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
  "created": "2022-06-17T21:39:16.378Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
  "status": "queued",
  "created": "2022-06-17T21:39:16.378Z",
  "pin": {
    "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## The newly created pin can be immediately deleted - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/74a67b73-cfd6-4f01-a86d-6c23cc011977
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:18 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
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

  🟢 Response code is 200 (success)

  🟢 Response is ok (success)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
POST https://api.pinata.cloud/psa/pins
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
{"cid":"baeaaadbsgqycyobtha4dkmbqg4"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "315",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:17 GMT",
  "etag": "W/\"13b-HcO/uMh+RdJxsgHEkCHa6Hk1LT4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "74a67b73-cfd6-4f01-a86d-6c23cc011977",
  "created": "2022-06-17T21:39:17.161Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadbsgqycyobtha4dkmbqg4",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```

##### Body (as JSON)
```json
{
  "requestid": "74a67b73-cfd6-4f01-a86d-6c23cc011977",
  "created": "2022-06-17T21:39:17.161Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadbsgqycyobtha4dkmbqg4",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "74a67b73-cfd6-4f01-a86d-6c23cc011977",
  "status": "queued",
  "created": "2022-06-17T21:39:17.161Z",
  "pin": {
    "cid": "baeaaadbsgqycyobtha4dkmbqg4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (3/3 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "6652",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:18 GMT",
  "etag": "W/\"19fc-BNIYeR1d52S1HJHStJXvSYIvUf4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "4",
  "x-ratelimit-reset": "1655502019"
}
```
##### Body
```json
{
  "count": 20,
  "results": [
    {
      "requestid": "438969bf-3252-43d5-83f0-2bac126c52cd",
      "created": "2022-06-17T18:02:10.768Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhawdknjqgiytemrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5a7848ff-de45-41f8-9b95-1b668227ed6c",
      "created": "2022-06-17T18:02:11.749Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhewdonrrhe2demrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "01aba369-9cef-4c99-8281-e8e3b8dfa40b",
      "created": "2022-06-17T18:02:14.106Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwgewdsnzthazdemzxgu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4",
      "created": "2022-06-17T18:02:17.432Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwguwdsnryhe3tkmztgm",
        "origins": [],
        "meta": {},
        "name": "a062580a-8ec9-43c9-b261-21a0a09486e6"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c1abdc12-a8db-49fc-8b63-8836f396ddc8",
      "created": "2022-06-17T18:03:12.793Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzygm4tgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5e797791-683b-4f2a-b19e-f803a25cf404",
      "created": "2022-06-17T18:03:13.780Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzzg4zdombuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d53e4fd5-30cd-4581-8bac-cb5e5cdc32be",
      "created": "2022-06-17T18:03:14.758Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobrgeztimrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "204502b0-e886-452c-968f-38a01d37b8f9",
      "created": "2022-06-17T18:03:15.791Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobsgq4dgnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "aebedff9-49bd-4eda-945a-e2f18cae3f7c",
      "created": "2022-06-17T18:03:16.766Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobtheydqmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "392f6588-8580-4373-8500-a4c187b61fe2",
      "created": "2022-06-17T18:03:17.776Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgeydgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "4d3603b0-66e0-430c-8731-7aaf4232a42a",
      "created": "2022-06-17T18:03:18.772Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgyydmnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6e964901-d5de-4e45-95f7-ec402f6f0afa",
      "created": "2022-06-17T18:03:19.783Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobygm3tonzvga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c94b2d58-e606-4925-afff-dfc95bc4e30b",
      "created": "2022-06-17T18:03:20.814Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzga4tmnjuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a6798a02-bfba-4510-83eb-66d6b5fae9fc",
      "created": "2022-06-17T18:03:21.782Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzg4ytqmbqga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "38ed4007-9131-4fec-ad3e-e4571b57e9e6",
      "created": "2022-06-17T18:03:22.811Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmojqgqztmmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d5435f00-f152-4d0b-99ac-e3de7e8357a1",
      "created": "2022-06-17T18:12:54.150Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgewdsnbwge2dgmbygm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5baa9cc0-ce37-4dd1-a3b3-b27320126e9e",
      "created": "2022-06-17T18:12:55.139Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgmwdcnjugi3dmmrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6516625f-dc82-40b4-a7ee-cdef0c9fcbf1",
      "created": "2022-06-17T18:12:57.549Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqguwdeobsgy2tmojvha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0497c3f0-eb42-4f52-9923-572a7b94e749",
      "created": "2022-06-17T18:13:00.707Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqhewdemzxg42dqnbvha",
        "origins": [],
        "meta": {},
        "name": "6a9c4cf1-0061-42f3-b5cb-f86eaf988c1f"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
      "created": "2022-06-17T21:39:16.378Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 20,
  "results": [
    {
      "requestid": "438969bf-3252-43d5-83f0-2bac126c52cd",
      "created": "2022-06-17T18:02:10.768Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhawdknjqgiytemrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5a7848ff-de45-41f8-9b95-1b668227ed6c",
      "created": "2022-06-17T18:02:11.749Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhewdonrrhe2demrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "01aba369-9cef-4c99-8281-e8e3b8dfa40b",
      "created": "2022-06-17T18:02:14.106Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwgewdsnzthazdemzxgu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4",
      "created": "2022-06-17T18:02:17.432Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwguwdsnryhe3tkmztgm",
        "origins": [],
        "meta": {},
        "name": "a062580a-8ec9-43c9-b261-21a0a09486e6"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c1abdc12-a8db-49fc-8b63-8836f396ddc8",
      "created": "2022-06-17T18:03:12.793Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzygm4tgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5e797791-683b-4f2a-b19e-f803a25cf404",
      "created": "2022-06-17T18:03:13.780Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzzg4zdombuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d53e4fd5-30cd-4581-8bac-cb5e5cdc32be",
      "created": "2022-06-17T18:03:14.758Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobrgeztimrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "204502b0-e886-452c-968f-38a01d37b8f9",
      "created": "2022-06-17T18:03:15.791Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobsgq4dgnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "aebedff9-49bd-4eda-945a-e2f18cae3f7c",
      "created": "2022-06-17T18:03:16.766Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobtheydqmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "392f6588-8580-4373-8500-a4c187b61fe2",
      "created": "2022-06-17T18:03:17.776Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgeydgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "4d3603b0-66e0-430c-8731-7aaf4232a42a",
      "created": "2022-06-17T18:03:18.772Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgyydmnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6e964901-d5de-4e45-95f7-ec402f6f0afa",
      "created": "2022-06-17T18:03:19.783Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobygm3tonzvga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c94b2d58-e606-4925-afff-dfc95bc4e30b",
      "created": "2022-06-17T18:03:20.814Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzga4tmnjuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a6798a02-bfba-4510-83eb-66d6b5fae9fc",
      "created": "2022-06-17T18:03:21.782Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzg4ytqmbqga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "38ed4007-9131-4fec-ad3e-e4571b57e9e6",
      "created": "2022-06-17T18:03:22.811Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmojqgqztmmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d5435f00-f152-4d0b-99ac-e3de7e8357a1",
      "created": "2022-06-17T18:12:54.150Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgewdsnbwge2dgmbygm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5baa9cc0-ce37-4dd1-a3b3-b27320126e9e",
      "created": "2022-06-17T18:12:55.139Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgmwdcnjugi3dmmrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6516625f-dc82-40b4-a7ee-cdef0c9fcbf1",
      "created": "2022-06-17T18:12:57.549Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqguwdeobsgy2tmojvha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0497c3f0-eb42-4f52-9923-572a7b94e749",
      "created": "2022-06-17T18:13:00.707Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqhewdemzxg42dqnbvha",
        "origins": [],
        "meta": {},
        "name": "6a9c4cf1-0061-42f3-b5cb-f86eaf988c1f"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
      "created": "2022-06-17T21:39:16.378Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 20,
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
GET https://api.pinata.cloud/psa/pins/a8a5e661-13de-4d48-8a4d-1fcde035c7b5
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "123",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:21 GMT",
  "etag": "W/\"7b-03qFhbIaF85nNkdBlgUb6TE8+WU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "OBJECT_NOT_FOUND",
    "details": "Your account does not currently have any record associated with this ID"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "OBJECT_NOT_FOUND",
    "details": "Your account does not currently have any record associated with this ID"
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
GET https://api.pinata.cloud/psa/pins/70ec12ee-9081-469b-b3b4-cc9954b6211d
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:22 GMT",
  "etag": "W/\"13e-qr6RHC7kWtT8fxr/TAtVIqFAXcI\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
  "created": "2022-06-17T21:39:20.518Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```

##### Body (as JSON)
```json
{
  "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
  "created": "2022-06-17T21:39:20.518Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
  "status": "queued",
  "created": "2022-06-17T21:39:20.518Z",
  "pin": {
    "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## Pin's with requestid 'a8a5e661-13de-4d48-8a4d-1fcde035c7b5' can have cid 'baeaaadjsgqzcymryg4ydmmzvhezq' replaced with 'baeaaadjsgqzcyojxge4dgnrzge4q' - 🟢 SUCCESS

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
POST https://api.pinata.cloud/psa/pins/a8a5e661-13de-4d48-8a4d-1fcde035c7b5
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
{"cid":"baeaaadjsgqzcyojxge4dgnrzge4q"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:20 GMT",
  "etag": "W/\"13e-qr6RHC7kWtT8fxr/TAtVIqFAXcI\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
  "created": "2022-06-17T21:39:20.518Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```

##### Body (as JSON)
```json
{
  "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
  "created": "2022-06-17T21:39:20.518Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
  "status": "queued",
  "created": "2022-06-17T21:39:20.518Z",
  "pin": {
    "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (a8a5e661-13de-4d48-8a4d-1fcde035c7b5) (success)

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
POST https://api.pinata.cloud/psa/pins
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
{"cid":"baeaaadjsgqzcymryg4ydmmzvhezq"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "318",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:19 GMT",
  "etag": "W/\"13e-SSZZ5ZQOqNso/XzKZUMNvKhuBWw\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "a8a5e661-13de-4d48-8a4d-1fcde035c7b5",
  "created": "2022-06-17T21:39:19.411Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjsgqzcymryg4ydmmzvhezq",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```

##### Body (as JSON)
```json
{
  "requestid": "a8a5e661-13de-4d48-8a4d-1fcde035c7b5",
  "created": "2022-06-17T21:39:19.411Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjsgqzcymryg4ydmmzvhezq",
    "origins": [],
    "meta": {}
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "a8a5e661-13de-4d48-8a4d-1fcde035c7b5",
  "status": "queued",
  "created": "2022-06-17T21:39:19.411Z",
  "pin": {
    "cid": "baeaaadjsgqzcymryg4ydmmzvhezq",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## Can retrieve pin with name 'f07a03e2-52ea-4723-a05d-31dfbbf6add2' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=f07a03e2-52ea-4723-a05d-31dfbbf6add2&match=exact
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:23 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "3",
  "x-ratelimit-reset": "1655502019"
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
## Can retrieve pin with name 'F07A03E2-52EA-4723-A05D-31DFBBF6ADD2' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=F07A03E2-52EA-4723-A05D-31DFBBF6ADD2&match=iexact
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:24 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "2",
  "x-ratelimit-reset": "1655502019"
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
## Can retrieve pin with name '52ea-4723-a05d-31d' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=52ea-4723-a05d-31d&match=partial
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:25 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "1",
  "x-ratelimit-reset": "1655502019"
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
## Can retrieve pin with name '52EA-4723-A05D-31D' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=52EA-4723-A05D-31D&match=ipartial
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:26 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "0",
  "x-ratelimit-reset": "1655502019"
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
## Can create a pin with name='f07a03e2-52ea-4723-a05d-31dfbbf6add2' - ❌ FAILED

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
POST https://api.pinata.cloud/psa/pins
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
{"cid":"baeaaadjsgq2synzzha2dmojqgi2a","name":"f07a03e2-52ea-4723-a05d-31dfbbf6add2"}
```

#### Response
```
200 OK
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "362",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:39:22 GMT",
  "etag": "W/\"16a-6NYvJKMttxOx/YbWXRThljopT7A\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
  "created": "2022-06-17T21:39:22.466Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
    "origins": [],
    "meta": {},
    "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2"
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```

##### Body (as JSON)
```json
{
  "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
  "created": "2022-06-17T21:39:22.466Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
    "origins": [],
    "meta": {},
    "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2"
  },
  "info": {
    "pinata_pinjob_status": "prechecking"
  },
  "status": "queued"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
  "status": "queued",
  "created": "2022-06-17T21:39:22.466Z",
  "pin": {
    "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
    "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## Pagination: First page of pins - ❌ FAILED

### Expectations (3/5 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  ❌ Count is greater than the number of pins returned (failure)

  ❌ Number of pins returned defaults to 10 (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "7343",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:21 GMT",
  "etag": "W/\"1caf-0u8NLruUhKdyTMwtErxqyRBLUH0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "3",
  "x-ratelimit-reset": "1655502082"
}
```
##### Body
```json
{
  "count": 22,
  "results": [
    {
      "requestid": "438969bf-3252-43d5-83f0-2bac126c52cd",
      "created": "2022-06-17T18:02:10.768Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhawdknjqgiytemrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5a7848ff-de45-41f8-9b95-1b668227ed6c",
      "created": "2022-06-17T18:02:11.749Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhewdonrrhe2demrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "01aba369-9cef-4c99-8281-e8e3b8dfa40b",
      "created": "2022-06-17T18:02:14.106Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwgewdsnzthazdemzxgu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4",
      "created": "2022-06-17T18:02:17.432Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwguwdsnryhe3tkmztgm",
        "origins": [],
        "meta": {},
        "name": "a062580a-8ec9-43c9-b261-21a0a09486e6"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c1abdc12-a8db-49fc-8b63-8836f396ddc8",
      "created": "2022-06-17T18:03:12.793Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzygm4tgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5e797791-683b-4f2a-b19e-f803a25cf404",
      "created": "2022-06-17T18:03:13.780Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzzg4zdombuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d53e4fd5-30cd-4581-8bac-cb5e5cdc32be",
      "created": "2022-06-17T18:03:14.758Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobrgeztimrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "204502b0-e886-452c-968f-38a01d37b8f9",
      "created": "2022-06-17T18:03:15.791Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobsgq4dgnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "aebedff9-49bd-4eda-945a-e2f18cae3f7c",
      "created": "2022-06-17T18:03:16.766Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobtheydqmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "392f6588-8580-4373-8500-a4c187b61fe2",
      "created": "2022-06-17T18:03:17.776Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgeydgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "4d3603b0-66e0-430c-8731-7aaf4232a42a",
      "created": "2022-06-17T18:03:18.772Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgyydmnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6e964901-d5de-4e45-95f7-ec402f6f0afa",
      "created": "2022-06-17T18:03:19.783Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobygm3tonzvga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c94b2d58-e606-4925-afff-dfc95bc4e30b",
      "created": "2022-06-17T18:03:20.814Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzga4tmnjuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a6798a02-bfba-4510-83eb-66d6b5fae9fc",
      "created": "2022-06-17T18:03:21.782Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzg4ytqmbqga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "38ed4007-9131-4fec-ad3e-e4571b57e9e6",
      "created": "2022-06-17T18:03:22.811Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmojqgqztmmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d5435f00-f152-4d0b-99ac-e3de7e8357a1",
      "created": "2022-06-17T18:12:54.150Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgewdsnbwge2dgmbygm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5baa9cc0-ce37-4dd1-a3b3-b27320126e9e",
      "created": "2022-06-17T18:12:55.139Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgmwdcnjugi3dmmrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6516625f-dc82-40b4-a7ee-cdef0c9fcbf1",
      "created": "2022-06-17T18:12:57.549Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqguwdeobsgy2tmojvha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0497c3f0-eb42-4f52-9923-572a7b94e749",
      "created": "2022-06-17T18:13:00.707Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqhewdemzxg42dqnbvha",
        "origins": [],
        "meta": {},
        "name": "6a9c4cf1-0061-42f3-b5cb-f86eaf988c1f"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
      "created": "2022-06-17T21:39:16.378Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
      "created": "2022-06-17T21:39:20.518Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
      "created": "2022-06-17T21:39:22.466Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
        "origins": [],
        "meta": {},
        "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 22,
  "results": [
    {
      "requestid": "438969bf-3252-43d5-83f0-2bac126c52cd",
      "created": "2022-06-17T18:02:10.768Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhawdknjqgiytemrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5a7848ff-de45-41f8-9b95-1b668227ed6c",
      "created": "2022-06-17T18:02:11.749Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhewdonrrhe2demrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "01aba369-9cef-4c99-8281-e8e3b8dfa40b",
      "created": "2022-06-17T18:02:14.106Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwgewdsnzthazdemzxgu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4",
      "created": "2022-06-17T18:02:17.432Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwguwdsnryhe3tkmztgm",
        "origins": [],
        "meta": {},
        "name": "a062580a-8ec9-43c9-b261-21a0a09486e6"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c1abdc12-a8db-49fc-8b63-8836f396ddc8",
      "created": "2022-06-17T18:03:12.793Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzygm4tgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5e797791-683b-4f2a-b19e-f803a25cf404",
      "created": "2022-06-17T18:03:13.780Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzzg4zdombuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d53e4fd5-30cd-4581-8bac-cb5e5cdc32be",
      "created": "2022-06-17T18:03:14.758Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobrgeztimrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "204502b0-e886-452c-968f-38a01d37b8f9",
      "created": "2022-06-17T18:03:15.791Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobsgq4dgnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "aebedff9-49bd-4eda-945a-e2f18cae3f7c",
      "created": "2022-06-17T18:03:16.766Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobtheydqmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "392f6588-8580-4373-8500-a4c187b61fe2",
      "created": "2022-06-17T18:03:17.776Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgeydgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "4d3603b0-66e0-430c-8731-7aaf4232a42a",
      "created": "2022-06-17T18:03:18.772Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgyydmnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6e964901-d5de-4e45-95f7-ec402f6f0afa",
      "created": "2022-06-17T18:03:19.783Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobygm3tonzvga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c94b2d58-e606-4925-afff-dfc95bc4e30b",
      "created": "2022-06-17T18:03:20.814Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzga4tmnjuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a6798a02-bfba-4510-83eb-66d6b5fae9fc",
      "created": "2022-06-17T18:03:21.782Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzg4ytqmbqga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "38ed4007-9131-4fec-ad3e-e4571b57e9e6",
      "created": "2022-06-17T18:03:22.811Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmojqgqztmmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d5435f00-f152-4d0b-99ac-e3de7e8357a1",
      "created": "2022-06-17T18:12:54.150Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgewdsnbwge2dgmbygm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5baa9cc0-ce37-4dd1-a3b3-b27320126e9e",
      "created": "2022-06-17T18:12:55.139Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgmwdcnjugi3dmmrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6516625f-dc82-40b4-a7ee-cdef0c9fcbf1",
      "created": "2022-06-17T18:12:57.549Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqguwdeobsgy2tmojvha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0497c3f0-eb42-4f52-9923-572a7b94e749",
      "created": "2022-06-17T18:13:00.707Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqhewdemzxg42dqnbvha",
        "origins": [],
        "meta": {},
        "name": "6a9c4cf1-0061-42f3-b5cb-f86eaf988c1f"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
      "created": "2022-06-17T21:39:16.378Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
      "created": "2022-06-17T21:39:20.518Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
      "created": "2022-06-17T21:39:22.466Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
        "origins": [],
        "meta": {},
        "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 22,
  "results": {}
}
```
## Pagination: Retrieve the next page of pins - 🟢 SUCCESS

### Expectations (3/3 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 The next page of pins doesn't contain any of previous pages pins (success)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-17T18%3A02%3A10.768Z
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:22 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "2",
  "x-ratelimit-reset": "1655502082"
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
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (8/10 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  ❌ Count is greater than the number of pins returned (failure)

  ❌ Number of pins returned defaults to 10 (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 The next page of pins doesn't contain any of previous pages pins (success)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "7343",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:21 GMT",
  "etag": "W/\"1caf-0u8NLruUhKdyTMwtErxqyRBLUH0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "4",
  "x-ratelimit-reset": "1655502082"
}
```
##### Body
```json
{
  "count": 22,
  "results": [
    {
      "requestid": "438969bf-3252-43d5-83f0-2bac126c52cd",
      "created": "2022-06-17T18:02:10.768Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhawdknjqgiytemrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5a7848ff-de45-41f8-9b95-1b668227ed6c",
      "created": "2022-06-17T18:02:11.749Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhewdonrrhe2demrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "01aba369-9cef-4c99-8281-e8e3b8dfa40b",
      "created": "2022-06-17T18:02:14.106Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwgewdsnzthazdemzxgu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4",
      "created": "2022-06-17T18:02:17.432Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwguwdsnryhe3tkmztgm",
        "origins": [],
        "meta": {},
        "name": "a062580a-8ec9-43c9-b261-21a0a09486e6"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c1abdc12-a8db-49fc-8b63-8836f396ddc8",
      "created": "2022-06-17T18:03:12.793Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzygm4tgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5e797791-683b-4f2a-b19e-f803a25cf404",
      "created": "2022-06-17T18:03:13.780Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzzg4zdombuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d53e4fd5-30cd-4581-8bac-cb5e5cdc32be",
      "created": "2022-06-17T18:03:14.758Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobrgeztimrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "204502b0-e886-452c-968f-38a01d37b8f9",
      "created": "2022-06-17T18:03:15.791Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobsgq4dgnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "aebedff9-49bd-4eda-945a-e2f18cae3f7c",
      "created": "2022-06-17T18:03:16.766Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobtheydqmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "392f6588-8580-4373-8500-a4c187b61fe2",
      "created": "2022-06-17T18:03:17.776Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgeydgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "4d3603b0-66e0-430c-8731-7aaf4232a42a",
      "created": "2022-06-17T18:03:18.772Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgyydmnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6e964901-d5de-4e45-95f7-ec402f6f0afa",
      "created": "2022-06-17T18:03:19.783Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobygm3tonzvga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c94b2d58-e606-4925-afff-dfc95bc4e30b",
      "created": "2022-06-17T18:03:20.814Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzga4tmnjuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a6798a02-bfba-4510-83eb-66d6b5fae9fc",
      "created": "2022-06-17T18:03:21.782Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzg4ytqmbqga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "38ed4007-9131-4fec-ad3e-e4571b57e9e6",
      "created": "2022-06-17T18:03:22.811Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmojqgqztmmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d5435f00-f152-4d0b-99ac-e3de7e8357a1",
      "created": "2022-06-17T18:12:54.150Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgewdsnbwge2dgmbygm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5baa9cc0-ce37-4dd1-a3b3-b27320126e9e",
      "created": "2022-06-17T18:12:55.139Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgmwdcnjugi3dmmrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6516625f-dc82-40b4-a7ee-cdef0c9fcbf1",
      "created": "2022-06-17T18:12:57.549Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqguwdeobsgy2tmojvha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0497c3f0-eb42-4f52-9923-572a7b94e749",
      "created": "2022-06-17T18:13:00.707Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqhewdemzxg42dqnbvha",
        "origins": [],
        "meta": {},
        "name": "6a9c4cf1-0061-42f3-b5cb-f86eaf988c1f"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
      "created": "2022-06-17T21:39:16.378Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
      "created": "2022-06-17T21:39:20.518Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
      "created": "2022-06-17T21:39:22.466Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
        "origins": [],
        "meta": {},
        "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 22,
  "results": [
    {
      "requestid": "438969bf-3252-43d5-83f0-2bac126c52cd",
      "created": "2022-06-17T18:02:10.768Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhawdknjqgiytemrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5a7848ff-de45-41f8-9b95-1b668227ed6c",
      "created": "2022-06-17T18:02:11.749Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhewdonrrhe2demrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "01aba369-9cef-4c99-8281-e8e3b8dfa40b",
      "created": "2022-06-17T18:02:14.106Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwgewdsnzthazdemzxgu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4",
      "created": "2022-06-17T18:02:17.432Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwguwdsnryhe3tkmztgm",
        "origins": [],
        "meta": {},
        "name": "a062580a-8ec9-43c9-b261-21a0a09486e6"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c1abdc12-a8db-49fc-8b63-8836f396ddc8",
      "created": "2022-06-17T18:03:12.793Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzygm4tgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5e797791-683b-4f2a-b19e-f803a25cf404",
      "created": "2022-06-17T18:03:13.780Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzzg4zdombuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d53e4fd5-30cd-4581-8bac-cb5e5cdc32be",
      "created": "2022-06-17T18:03:14.758Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobrgeztimrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "204502b0-e886-452c-968f-38a01d37b8f9",
      "created": "2022-06-17T18:03:15.791Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobsgq4dgnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "aebedff9-49bd-4eda-945a-e2f18cae3f7c",
      "created": "2022-06-17T18:03:16.766Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobtheydqmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "392f6588-8580-4373-8500-a4c187b61fe2",
      "created": "2022-06-17T18:03:17.776Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgeydgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "4d3603b0-66e0-430c-8731-7aaf4232a42a",
      "created": "2022-06-17T18:03:18.772Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgyydmnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6e964901-d5de-4e45-95f7-ec402f6f0afa",
      "created": "2022-06-17T18:03:19.783Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobygm3tonzvga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c94b2d58-e606-4925-afff-dfc95bc4e30b",
      "created": "2022-06-17T18:03:20.814Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzga4tmnjuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a6798a02-bfba-4510-83eb-66d6b5fae9fc",
      "created": "2022-06-17T18:03:21.782Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzg4ytqmbqga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "38ed4007-9131-4fec-ad3e-e4571b57e9e6",
      "created": "2022-06-17T18:03:22.811Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmojqgqztmmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d5435f00-f152-4d0b-99ac-e3de7e8357a1",
      "created": "2022-06-17T18:12:54.150Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgewdsnbwge2dgmbygm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5baa9cc0-ce37-4dd1-a3b3-b27320126e9e",
      "created": "2022-06-17T18:12:55.139Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgmwdcnjugi3dmmrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6516625f-dc82-40b4-a7ee-cdef0c9fcbf1",
      "created": "2022-06-17T18:12:57.549Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqguwdeobsgy2tmojvha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0497c3f0-eb42-4f52-9923-572a7b94e749",
      "created": "2022-06-17T18:13:00.707Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqhewdemzxg42dqnbvha",
        "origins": [],
        "meta": {},
        "name": "6a9c4cf1-0061-42f3-b5cb-f86eaf988c1f"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
      "created": "2022-06-17T21:39:16.378Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
      "created": "2022-06-17T21:39:20.518Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
      "created": "2022-06-17T21:39:22.466Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
        "origins": [],
        "meta": {},
        "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 22,
  "results": {}
}
```
## Can delete pin with requestid '438969bf-3252-43d5-83f0-2bac126c52cd' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/438969bf-3252-43d5-83f0-2bac126c52cd
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:24 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '5a7848ff-de45-41f8-9b95-1b668227ed6c' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/5a7848ff-de45-41f8-9b95-1b668227ed6c
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:25 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '01aba369-9cef-4c99-8281-e8e3b8dfa40b' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/01aba369-9cef-4c99-8281-e8e3b8dfa40b
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:26 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:27 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'c1abdc12-a8db-49fc-8b63-8836f396ddc8' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/c1abdc12-a8db-49fc-8b63-8836f396ddc8
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:28 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '5e797791-683b-4f2a-b19e-f803a25cf404' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/5e797791-683b-4f2a-b19e-f803a25cf404
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:29 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'd53e4fd5-30cd-4581-8bac-cb5e5cdc32be' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/d53e4fd5-30cd-4581-8bac-cb5e5cdc32be
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:30 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '204502b0-e886-452c-968f-38a01d37b8f9' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/204502b0-e886-452c-968f-38a01d37b8f9
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:31 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'aebedff9-49bd-4eda-945a-e2f18cae3f7c' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/aebedff9-49bd-4eda-945a-e2f18cae3f7c
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:32 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '392f6588-8580-4373-8500-a4c187b61fe2' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/392f6588-8580-4373-8500-a4c187b61fe2
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:33 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '4d3603b0-66e0-430c-8731-7aaf4232a42a' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/4d3603b0-66e0-430c-8731-7aaf4232a42a
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:34 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '6e964901-d5de-4e45-95f7-ec402f6f0afa' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/6e964901-d5de-4e45-95f7-ec402f6f0afa
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:35 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'c94b2d58-e606-4925-afff-dfc95bc4e30b' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/c94b2d58-e606-4925-afff-dfc95bc4e30b
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:36 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'a6798a02-bfba-4510-83eb-66d6b5fae9fc' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/a6798a02-bfba-4510-83eb-66d6b5fae9fc
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:37 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '38ed4007-9131-4fec-ad3e-e4571b57e9e6' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/38ed4007-9131-4fec-ad3e-e4571b57e9e6
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:38 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'd5435f00-f152-4d0b-99ac-e3de7e8357a1' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/d5435f00-f152-4d0b-99ac-e3de7e8357a1
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:39 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '5baa9cc0-ce37-4dd1-a3b3-b27320126e9e' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/5baa9cc0-ce37-4dd1-a3b3-b27320126e9e
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:40 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '6516625f-dc82-40b4-a7ee-cdef0c9fcbf1' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/6516625f-dc82-40b4-a7ee-cdef0c9fcbf1
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:41 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '0497c3f0-eb42-4f52-9923-572a7b94e749' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/0497c3f0-eb42-4f52-9923-572a7b94e749
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:42 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '3f1ab380-704c-4cee-9243-29c79140c3c1' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/3f1ab380-704c-4cee-9243-29c79140c3c1
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:43 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '70ec12ee-9081-469b-b3b4-cc9954b6211d' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/70ec12ee-9081-469b-b3b4-cc9954b6211d
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:44 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '71841770-581c-4672-92d1-b75bff1d0947' - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/71841770-581c-4672-92d1-b75bff1d0947
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "2",
  "content-type": "text/plain; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:45 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
OK
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

  🟢 Final pinsGet call returns a count of zero (success)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:46 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "0",
  "x-ratelimit-reset": "1655502082"
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
## Can delete all pins - ❌ FAILED

### Expectations (23/45 successful)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202 (failure)

  🟢 Final pinsGet call returns a count of zero (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
GET https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-credentials": "true",
  "connection": "close",
  "content-length": "7343",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 21:40:23 GMT",
  "etag": "W/\"1caf-0u8NLruUhKdyTMwtErxqyRBLUH0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "1",
  "x-ratelimit-reset": "1655502082"
}
```
##### Body
```json
{
  "count": 22,
  "results": [
    {
      "requestid": "438969bf-3252-43d5-83f0-2bac126c52cd",
      "created": "2022-06-17T18:02:10.768Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhawdknjqgiytemrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5a7848ff-de45-41f8-9b95-1b668227ed6c",
      "created": "2022-06-17T18:02:11.749Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhewdonrrhe2demrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "01aba369-9cef-4c99-8281-e8e3b8dfa40b",
      "created": "2022-06-17T18:02:14.106Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwgewdsnzthazdemzxgu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4",
      "created": "2022-06-17T18:02:17.432Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwguwdsnryhe3tkmztgm",
        "origins": [],
        "meta": {},
        "name": "a062580a-8ec9-43c9-b261-21a0a09486e6"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c1abdc12-a8db-49fc-8b63-8836f396ddc8",
      "created": "2022-06-17T18:03:12.793Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzygm4tgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5e797791-683b-4f2a-b19e-f803a25cf404",
      "created": "2022-06-17T18:03:13.780Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzzg4zdombuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d53e4fd5-30cd-4581-8bac-cb5e5cdc32be",
      "created": "2022-06-17T18:03:14.758Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobrgeztimrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "204502b0-e886-452c-968f-38a01d37b8f9",
      "created": "2022-06-17T18:03:15.791Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobsgq4dgnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "aebedff9-49bd-4eda-945a-e2f18cae3f7c",
      "created": "2022-06-17T18:03:16.766Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobtheydqmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "392f6588-8580-4373-8500-a4c187b61fe2",
      "created": "2022-06-17T18:03:17.776Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgeydgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "4d3603b0-66e0-430c-8731-7aaf4232a42a",
      "created": "2022-06-17T18:03:18.772Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgyydmnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6e964901-d5de-4e45-95f7-ec402f6f0afa",
      "created": "2022-06-17T18:03:19.783Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobygm3tonzvga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c94b2d58-e606-4925-afff-dfc95bc4e30b",
      "created": "2022-06-17T18:03:20.814Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzga4tmnjuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a6798a02-bfba-4510-83eb-66d6b5fae9fc",
      "created": "2022-06-17T18:03:21.782Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzg4ytqmbqga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "38ed4007-9131-4fec-ad3e-e4571b57e9e6",
      "created": "2022-06-17T18:03:22.811Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmojqgqztmmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d5435f00-f152-4d0b-99ac-e3de7e8357a1",
      "created": "2022-06-17T18:12:54.150Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgewdsnbwge2dgmbygm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5baa9cc0-ce37-4dd1-a3b3-b27320126e9e",
      "created": "2022-06-17T18:12:55.139Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgmwdcnjugi3dmmrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6516625f-dc82-40b4-a7ee-cdef0c9fcbf1",
      "created": "2022-06-17T18:12:57.549Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqguwdeobsgy2tmojvha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0497c3f0-eb42-4f52-9923-572a7b94e749",
      "created": "2022-06-17T18:13:00.707Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqhewdemzxg42dqnbvha",
        "origins": [],
        "meta": {},
        "name": "6a9c4cf1-0061-42f3-b5cb-f86eaf988c1f"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
      "created": "2022-06-17T21:39:16.378Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
      "created": "2022-06-17T21:39:20.518Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
      "created": "2022-06-17T21:39:22.466Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
        "origins": [],
        "meta": {},
        "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 22,
  "results": [
    {
      "requestid": "438969bf-3252-43d5-83f0-2bac126c52cd",
      "created": "2022-06-17T18:02:10.768Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhawdknjqgiytemrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5a7848ff-de45-41f8-9b95-1b668227ed6c",
      "created": "2022-06-17T18:02:11.749Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojvhewdonrrhe2demrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "01aba369-9cef-4c99-8281-e8e3b8dfa40b",
      "created": "2022-06-17T18:02:14.106Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwgewdsnzthazdemzxgu",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a2f62386-e436-4b4a-ba64-1fdd9cb1b5e4",
      "created": "2022-06-17T18:02:17.432Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dcojwguwdsnryhe3tkmztgm",
        "origins": [],
        "meta": {},
        "name": "a062580a-8ec9-43c9-b261-21a0a09486e6"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c1abdc12-a8db-49fc-8b63-8836f396ddc8",
      "created": "2022-06-17T18:03:12.793Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzygm4tgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5e797791-683b-4f2a-b19e-f803a25cf404",
      "created": "2022-06-17T18:03:13.780Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmnzzg4zdombuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d53e4fd5-30cd-4581-8bac-cb5e5cdc32be",
      "created": "2022-06-17T18:03:14.758Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobrgeztimrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "204502b0-e886-452c-968f-38a01d37b8f9",
      "created": "2022-06-17T18:03:15.791Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobsgq4dgnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "aebedff9-49bd-4eda-945a-e2f18cae3f7c",
      "created": "2022-06-17T18:03:16.766Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobtheydqmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "392f6588-8580-4373-8500-a4c187b61fe2",
      "created": "2022-06-17T18:03:17.776Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgeydgmjwgy",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "4d3603b0-66e0-430c-8731-7aaf4232a42a",
      "created": "2022-06-17T18:03:18.772Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobvgyydmnzzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6e964901-d5de-4e45-95f7-ec402f6f0afa",
      "created": "2022-06-17T18:03:19.783Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobygm3tonzvga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c94b2d58-e606-4925-afff-dfc95bc4e30b",
      "created": "2022-06-17T18:03:20.814Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzga4tmnjuge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a6798a02-bfba-4510-83eb-66d6b5fae9fc",
      "created": "2022-06-17T18:03:21.782Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmobzg4ytqmbqga",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "38ed4007-9131-4fec-ad3e-e4571b57e9e6",
      "created": "2022-06-17T18:03:22.811Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaaejsge2dembsgawdmojqgqztmmrzge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "d5435f00-f152-4d0b-99ac-e3de7e8357a1",
      "created": "2022-06-17T18:12:54.150Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgewdsnbwge2dgmbygm",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "5baa9cc0-ce37-4dd1-a3b3-b27320126e9e",
      "created": "2022-06-17T18:12:55.139Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqgmwdcnjugi3dmmrqha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "6516625f-dc82-40b4-a7ee-cdef0c9fcbf1",
      "created": "2022-06-17T18:12:57.549Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqguwdeobsgy2tmojvha",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "0497c3f0-eb42-4f52-9923-572a7b94e749",
      "created": "2022-06-17T18:13:00.707Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaaejsge2denrqhewdemzxg42dqnbvha",
        "origins": [],
        "meta": {},
        "name": "6a9c4cf1-0061-42f3-b5cb-f86eaf988c1f"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3f1ab380-704c-4cee-9243-29c79140c3c1",
      "created": "2022-06-17T21:39:16.378Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjsgm4cymrugyztsnbwgu3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "70ec12ee-9081-469b-b3b4-cc9954b6211d",
      "created": "2022-06-17T21:39:20.518Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjsgqzcyojxge4dgnrzge4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "71841770-581c-4672-92d1-b75bff1d0947",
      "created": "2022-06-17T21:39:22.466Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjsgq2synzzha2dmojqgi2a",
        "origins": [],
        "meta": {},
        "name": "f07a03e2-52ea-4723-a05d-31dfbbf6add2"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 22,
  "results": {}
}
```
