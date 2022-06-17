
# https://api.pinata.cloud/psa compliance:

Execution Date: 2022-06-17T16:29:51.968Z

Revision: [f945ce3](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/f945ce3)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.pinata.cloud.md)

## Summary (4/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'baeaaadbtgmycynbugqydsnjqge'](#pins-post-of-cid-baeaaadbtgmycynbugqydsnjqge----success)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='8de0c669-96a6-4189-beff-831abf7ce080'](#can-create-a-pin-with-name8de0c669-96a6-4189-beff-831abf7ce080----failed)

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
  "date": "Fri, 17 Jun 2022 16:28:16 GMT",
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
  "date": "Fri, 17 Jun 2022 16:28:16 GMT",
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
## Pins post of CID 'baeaaadbtgmycynbugqydsnjqge' - 🟢 SUCCESS

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
{"cid":"baeaaadbtgmycynbugqydsnjqge"}
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
  "date": "Fri, 17 Jun 2022 16:28:17 GMT",
  "etag": "W/\"13b-H0Sc415nFETCaLU9IxX+LCo+3v8\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
  "created": "2022-06-17T16:28:17.723Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadbtgmycynbugqydsnjqge",
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
  "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
  "created": "2022-06-17T16:28:17.723Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadbtgmycynbugqydsnjqge",
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
  "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
  "status": "queued",
  "created": "2022-06-17T16:28:17.723Z",
  "pin": {
    "cid": "baeaaadbtgmycynbugqydsnjqge",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
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
DELETE https://api.pinata.cloud/psa/pins/4b656980-464a-4979-8ca2-b18d9a5351f2
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
  "date": "Fri, 17 Jun 2022 16:28:19 GMT",
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
{"cid":"baeaaadjtgmysymrshe2tamrqgm2a"}
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
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:28:18 GMT",
  "etag": "W/\"13d-0+7gq8YufuHpVoyaXarcQXJlXho\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "4b656980-464a-4979-8ca2-b18d9a5351f2",
  "created": "2022-06-17T16:28:18.739Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjtgmysymrshe2tamrqgm2a",
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
  "requestid": "4b656980-464a-4979-8ca2-b18d9a5351f2",
  "created": "2022-06-17T16:28:18.739Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjtgmysymrshe2tamrqgm2a",
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
  "requestid": "4b656980-464a-4979-8ca2-b18d9a5351f2",
  "status": "queued",
  "created": "2022-06-17T16:28:18.739Z",
  "pin": {
    "cid": "baeaaadjtgmysymrshe2tamrqgm2a",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
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
  "content-length": "339",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:28:19 GMT",
  "etag": "W/\"153-LMv+V3mKCagON5py39mB50WsVi4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "4",
  "x-ratelimit-reset": "1655483360"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
      "created": "2022-06-17T16:28:17.723Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbtgmycynbugqydsnjqge",
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
  "count": 1,
  "results": [
    {
      "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
      "created": "2022-06-17T16:28:17.723Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbtgmycynbugqydsnjqge",
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
  "count": 1,
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
GET https://api.pinata.cloud/psa/pins/d184541f-705e-40e2-b1ee-7424cb71fb3f
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
  "date": "Fri, 17 Jun 2022 16:28:22 GMT",
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
GET https://api.pinata.cloud/psa/pins/9d758988-d60f-41d5-a783-55a4a02e2201
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
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:28:23 GMT",
  "etag": "W/\"13d-SRYeUv5T7DMePUypAyuolhzEE44\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
  "created": "2022-06-17T16:28:21.999Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
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
  "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
  "created": "2022-06-17T16:28:21.999Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
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
  "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
  "status": "queued",
  "created": "2022-06-17T16:28:21.999Z",
  "pin": {
    "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
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
## Pin's with requestid 'd184541f-705e-40e2-b1ee-7424cb71fb3f' can have cid 'baeaaadjtgmzsynbqga3dinrrgqza' replaced with 'baeaaadjtgm2cynbxgy3demzsgeya' - 🟢 SUCCESS

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
POST https://api.pinata.cloud/psa/pins/d184541f-705e-40e2-b1ee-7424cb71fb3f
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
{"cid":"baeaaadjtgm2cynbxgy3demzsgeya"}
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
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:28:22 GMT",
  "etag": "W/\"13d-SRYeUv5T7DMePUypAyuolhzEE44\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
  "created": "2022-06-17T16:28:21.999Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
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
  "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
  "created": "2022-06-17T16:28:21.999Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
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
  "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
  "status": "queued",
  "created": "2022-06-17T16:28:21.999Z",
  "pin": {
    "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
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
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (d184541f-705e-40e2-b1ee-7424cb71fb3f) (success)

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
{"cid":"baeaaadjtgmzsynbqga3dinrrgqza"}
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
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:28:21 GMT",
  "etag": "W/\"13d-MZlt6cmrvlkLH68slSiyh1l/58c\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "d184541f-705e-40e2-b1ee-7424cb71fb3f",
  "created": "2022-06-17T16:28:20.978Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjtgmzsynbqga3dinrrgqza",
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
  "requestid": "d184541f-705e-40e2-b1ee-7424cb71fb3f",
  "created": "2022-06-17T16:28:20.978Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjtgmzsynbqga3dinrrgqza",
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
  "requestid": "d184541f-705e-40e2-b1ee-7424cb71fb3f",
  "status": "queued",
  "created": "2022-06-17T16:28:20.978Z",
  "pin": {
    "cid": "baeaaadjtgmzsynbqga3dinrrgqza",
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
## Can retrieve pin with name '8de0c669-96a6-4189-beff-831abf7ce080' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=8de0c669-96a6-4189-beff-831abf7ce080&match=exact
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
  "date": "Fri, 17 Jun 2022 16:28:25 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "3",
  "x-ratelimit-reset": "1655483360"
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
## Can retrieve pin with name '8DE0C669-96A6-4189-BEFF-831ABF7CE080' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=8DE0C669-96A6-4189-BEFF-831ABF7CE080&match=iexact
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
  "date": "Fri, 17 Jun 2022 16:28:26 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "2",
  "x-ratelimit-reset": "1655483360"
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
## Can retrieve pin with name '96a6-4189-beff-831' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=96a6-4189-beff-831&match=partial
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
  "date": "Fri, 17 Jun 2022 16:28:27 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "1",
  "x-ratelimit-reset": "1655483360"
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
## Can retrieve pin with name '96A6-4189-BEFF-831' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=96A6-4189-BEFF-831&match=ipartial
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
  "date": "Fri, 17 Jun 2022 16:28:28 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "0",
  "x-ratelimit-reset": "1655483360"
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
## Can create a pin with name='8de0c669-96a6-4189-beff-831abf7ce080' - ❌ FAILED

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
{"cid":"baeaaadjtgm3synbqhe3dsnrvgyzq","name":"8de0c669-96a6-4189-beff-831abf7ce080"}
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
  "content-length": "363",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:28:24 GMT",
  "etag": "W/\"16b-AECALCi/HDed0RYnioyuI0FM/zw\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
  "created": "2022-06-17T16:28:24.320Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
    "origins": [],
    "meta": {},
    "name": "8de0c669-96a6-4189-beff-831abf7ce080"
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
  "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
  "created": "2022-06-17T16:28:24.320Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
    "origins": [],
    "meta": {},
    "name": "8de0c669-96a6-4189-beff-831abf7ce080"
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
  "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
  "status": "queued",
  "created": "2022-06-17T16:28:24.320Z",
  "pin": {
    "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
    "name": "8de0c669-96a6-4189-beff-831abf7ce080",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobuguydamjvha4a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobuguydamjvha4a"}
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
  "content-length": "316",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:22 GMT",
  "etag": "W/\"13c-VHSio1UEBPPejajc9Fb29LXgBn4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "c24d1cb9-4c7b-4963-be85-11fa0a628ab2",
  "created": "2022-06-17T16:29:22.790Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuguydamjvha4a",
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
  "requestid": "c24d1cb9-4c7b-4963-be85-11fa0a628ab2",
  "created": "2022-06-17T16:29:22.790Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuguydamjvha4a",
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
  "requestid": "c24d1cb9-4c7b-4963-be85-11fa0a628ab2",
  "status": "queued",
  "created": "2022-06-17T16:29:22.790Z",
  "pin": {
    "cid": "baeaaadjthe2syobuguydamjvha4a",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobugu4dmmzzgi3q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobugu4dmmzzgi3q"}
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
  "date": "Fri, 17 Jun 2022 16:29:23 GMT",
  "etag": "W/\"13e-tsD3TdfAjRlC4Ne3CPhF+xtflmM\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "a04545d8-06b6-495e-a5dc-dd6480cfde2e",
  "created": "2022-06-17T16:29:23.753Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobugu4dmmzzgi3q",
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
  "requestid": "a04545d8-06b6-495e-a5dc-dd6480cfde2e",
  "created": "2022-06-17T16:29:23.753Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobugu4dmmzzgi3q",
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
  "requestid": "a04545d8-06b6-495e-a5dc-dd6480cfde2e",
  "status": "queued",
  "created": "2022-06-17T16:29:23.753Z",
  "pin": {
    "cid": "baeaaadjthe2syobugu4dmmzzgi3q",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobugy2tkmbsgu4a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobugy2tkmbsgu4a"}
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
  "date": "Fri, 17 Jun 2022 16:29:24 GMT",
  "etag": "W/\"13e-wY/5IYVbIU5l6K6043zVNHO0pk0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "8d1a9e5b-5ad9-412d-a077-f1694d77d0b0",
  "created": "2022-06-17T16:29:24.728Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobugy2tkmbsgu4a",
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
  "requestid": "8d1a9e5b-5ad9-412d-a077-f1694d77d0b0",
  "created": "2022-06-17T16:29:24.728Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobugy2tkmbsgu4a",
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
  "requestid": "8d1a9e5b-5ad9-412d-a077-f1694d77d0b0",
  "status": "queued",
  "created": "2022-06-17T16:29:24.728Z",
  "pin": {
    "cid": "baeaaadjthe2syobugy2tkmbsgu4a",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobuha2tmnjrgq4q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobuha2tmnjrgq4q"}
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
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:25 GMT",
  "etag": "W/\"13d-Ocb+WqDYcZnz7+xs5d9Dj35DeOM\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "76a76b7a-990a-44a8-8c8c-28cf38a98dde",
  "created": "2022-06-17T16:29:25.757Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuha2tmnjrgq4q",
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
  "requestid": "76a76b7a-990a-44a8-8c8c-28cf38a98dde",
  "created": "2022-06-17T16:29:25.757Z",
  "delegates": [
    "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuha2tmnjrgq4q",
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
  "requestid": "76a76b7a-990a-44a8-8c8c-28cf38a98dde",
  "status": "queued",
  "created": "2022-06-17T16:29:25.757Z",
  "pin": {
    "cid": "baeaaadjthe2syobuha2tmnjrgq4q",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobuheydqmrsg4zq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobuheydqmrsg4zq"}
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
  "date": "Fri, 17 Jun 2022 16:29:26 GMT",
  "etag": "W/\"13e-ebejYDbxjdV4pL9Hr8XLNhjlLSs\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "1b5c0478-9c11-4088-afc6-8bb7b5a9afbf",
  "created": "2022-06-17T16:29:26.737Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuheydqmrsg4zq",
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
  "requestid": "1b5c0478-9c11-4088-afc6-8bb7b5a9afbf",
  "created": "2022-06-17T16:29:26.737Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuheydqmrsg4zq",
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
  "requestid": "1b5c0478-9c11-4088-afc6-8bb7b5a9afbf",
  "status": "queued",
  "created": "2022-06-17T16:29:26.737Z",
  "pin": {
    "cid": "baeaaadjthe2syobuheydqmrsg4zq",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobuhe2teojxhezq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobuhe2teojxhezq"}
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
  "content-length": "316",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:27 GMT",
  "etag": "W/\"13c-MG+WkvmPf8V+qptysiPd4OwJPqs\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "b6b33ccd-e186-4dca-ad54-e6d482a76942",
  "created": "2022-06-17T16:29:27.725Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuhe2teojxhezq",
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
  "requestid": "b6b33ccd-e186-4dca-ad54-e6d482a76942",
  "created": "2022-06-17T16:29:27.725Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuhe2teojxhezq",
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
  "requestid": "b6b33ccd-e186-4dca-ad54-e6d482a76942",
  "status": "queued",
  "created": "2022-06-17T16:29:27.725Z",
  "pin": {
    "cid": "baeaaadjthe2syobuhe2teojxhezq",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobuhe4tamjrgeya' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobuhe4tamjrgeya"}
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
  "content-length": "316",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:28 GMT",
  "etag": "W/\"13c-CEZ1+1I4GyWdAehg8biHlNYrDjY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "514a7fce-021d-4ad8-ad41-9a86c2edb5a5",
  "created": "2022-06-17T16:29:28.753Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuhe4tamjrgeya",
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
  "requestid": "514a7fce-021d-4ad8-ad41-9a86c2edb5a5",
  "created": "2022-06-17T16:29:28.753Z",
  "delegates": [
    "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobuhe4tamjrgeya",
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
  "requestid": "514a7fce-021d-4ad8-ad41-9a86c2edb5a5",
  "status": "queued",
  "created": "2022-06-17T16:29:28.753Z",
  "pin": {
    "cid": "baeaaadjthe2syobuhe4tamjrgeya",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobvgaztmojwgmyq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobvgaztmojwgmyq"}
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
  "date": "Fri, 17 Jun 2022 16:29:29 GMT",
  "etag": "W/\"13e-ob4GQIydSnGj5f2Q8velm+VK+VA\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "df670250-20f1-4604-8082-23c66ddac094",
  "created": "2022-06-17T16:29:29.739Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvgaztmojwgmyq",
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
  "requestid": "df670250-20f1-4604-8082-23c66ddac094",
  "created": "2022-06-17T16:29:29.739Z",
  "delegates": [
    "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvgaztmojwgmyq",
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
  "requestid": "df670250-20f1-4604-8082-23c66ddac094",
  "status": "queued",
  "created": "2022-06-17T16:29:29.739Z",
  "pin": {
    "cid": "baeaaadjthe2syobvgaztmojwgmyq",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobvga3tmnbsgq4q' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobvga3tmnbsgq4q"}
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
  "date": "Fri, 17 Jun 2022 16:29:30 GMT",
  "etag": "W/\"13e-jwys9zONZ7wbk/HsZ4i7xkFwjiA\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8",
  "created": "2022-06-17T16:29:30.713Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvga3tmnbsgq4q",
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
  "requestid": "fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8",
  "created": "2022-06-17T16:29:30.713Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvga3tmnbsgq4q",
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
  "requestid": "fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8",
  "status": "queued",
  "created": "2022-06-17T16:29:30.713Z",
  "pin": {
    "cid": "baeaaadjthe2syobvga3tmnbsgq4q",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobvgeytsmbqgy4a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobvgeytsmbqgy4a"}
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
  "date": "Fri, 17 Jun 2022 16:29:31 GMT",
  "etag": "W/\"13e-0slRrZuQ8zXX6GGWfd+hq4Q0Pes\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "2a6061bf-f1a9-44b1-a45a-61daba4930b3",
  "created": "2022-06-17T16:29:31.717Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvgeytsmbqgy4a",
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
  "requestid": "2a6061bf-f1a9-44b1-a45a-61daba4930b3",
  "created": "2022-06-17T16:29:31.717Z",
  "delegates": [
    "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvgeytsmbqgy4a",
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
  "requestid": "2a6061bf-f1a9-44b1-a45a-61daba4930b3",
  "status": "queued",
  "created": "2022-06-17T16:29:31.717Z",
  "pin": {
    "cid": "baeaaadjthe2syobvgeytsmbqgy4a",
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
## Can create new pin for testing pagination cid='baeaaadjthe2syobvge2timzwha2a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobvge2timzwha2a"}
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
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:32 GMT",
  "etag": "W/\"13d-SAO3UwQsbfL+X10mTbfBa1yj6q8\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "3b20431d-1226-4c71-8e97-3a7d470209c2",
  "created": "2022-06-17T16:29:32.770Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvge2timzwha2a",
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
  "requestid": "3b20431d-1226-4c71-8e97-3a7d470209c2",
  "created": "2022-06-17T16:29:32.770Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvge2timzwha2a",
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
  "requestid": "3b20431d-1226-4c71-8e97-3a7d470209c2",
  "status": "queued",
  "created": "2022-06-17T16:29:32.770Z",
  "pin": {
    "cid": "baeaaadjthe2syobvge2timzwha2a",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## Can create new pin for testing pagination cid='baeaaadjthe2syobvge4dqobxgaya' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"baeaaadjthe2syobvge4dqobxgaya"}
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
  "content-length": "317",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:33 GMT",
  "etag": "W/\"13d-mbGh+5xFAABP7whx+nj12bzb2/Q\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "requestid": "be3c1069-afd9-4c3f-b683-a7a10ef1073a",
  "created": "2022-06-17T16:29:33.716Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvge4dqobxgaya",
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
  "requestid": "be3c1069-afd9-4c3f-b683-a7a10ef1073a",
  "created": "2022-06-17T16:29:33.716Z",
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
  ],
  "pin": {
    "cid": "baeaaadjthe2syobvge4dqobxgaya",
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
  "requestid": "be3c1069-afd9-4c3f-b683-a7a10ef1073a",
  "status": "queued",
  "created": "2022-06-17T16:29:33.716Z",
  "pin": {
    "cid": "baeaaadjthe2syobvge4dqobxgaya",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
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
  "content-length": "4880",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:34 GMT",
  "etag": "W/\"1310-DEVjuyEG/cf3PMCiRorMbCfkaVQ\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "3",
  "x-ratelimit-reset": "1655483423"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
      "created": "2022-06-17T16:28:17.723Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbtgmycynbugqydsnjqge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
      "created": "2022-06-17T16:28:21.999Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
      "created": "2022-06-17T16:28:24.320Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
        "origins": [],
        "meta": {},
        "name": "8de0c669-96a6-4189-beff-831abf7ce080"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c24d1cb9-4c7b-4963-be85-11fa0a628ab2",
      "created": "2022-06-17T16:29:22.790Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuguydamjvha4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a04545d8-06b6-495e-a5dc-dd6480cfde2e",
      "created": "2022-06-17T16:29:23.753Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobugu4dmmzzgi3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "8d1a9e5b-5ad9-412d-a077-f1694d77d0b0",
      "created": "2022-06-17T16:29:24.728Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobugy2tkmbsgu4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "76a76b7a-990a-44a8-8c8c-28cf38a98dde",
      "created": "2022-06-17T16:29:25.757Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuha2tmnjrgq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "1b5c0478-9c11-4088-afc6-8bb7b5a9afbf",
      "created": "2022-06-17T16:29:26.737Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuheydqmrsg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "b6b33ccd-e186-4dca-ad54-e6d482a76942",
      "created": "2022-06-17T16:29:27.725Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuhe2teojxhezq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "514a7fce-021d-4ad8-ad41-9a86c2edb5a5",
      "created": "2022-06-17T16:29:28.753Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuhe4tamjrgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "df670250-20f1-4604-8082-23c66ddac094",
      "created": "2022-06-17T16:29:29.739Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvgaztmojwgmyq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8",
      "created": "2022-06-17T16:29:30.713Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvga3tmnbsgq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2a6061bf-f1a9-44b1-a45a-61daba4930b3",
      "created": "2022-06-17T16:29:31.717Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvgeytsmbqgy4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3b20431d-1226-4c71-8e97-3a7d470209c2",
      "created": "2022-06-17T16:29:32.770Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvge2timzwha2a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "be3c1069-afd9-4c3f-b683-a7a10ef1073a",
      "created": "2022-06-17T16:29:33.716Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvge4dqobxgaya",
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
  "count": 15,
  "results": [
    {
      "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
      "created": "2022-06-17T16:28:17.723Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbtgmycynbugqydsnjqge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
      "created": "2022-06-17T16:28:21.999Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
      "created": "2022-06-17T16:28:24.320Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
        "origins": [],
        "meta": {},
        "name": "8de0c669-96a6-4189-beff-831abf7ce080"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c24d1cb9-4c7b-4963-be85-11fa0a628ab2",
      "created": "2022-06-17T16:29:22.790Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuguydamjvha4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a04545d8-06b6-495e-a5dc-dd6480cfde2e",
      "created": "2022-06-17T16:29:23.753Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobugu4dmmzzgi3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "8d1a9e5b-5ad9-412d-a077-f1694d77d0b0",
      "created": "2022-06-17T16:29:24.728Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobugy2tkmbsgu4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "76a76b7a-990a-44a8-8c8c-28cf38a98dde",
      "created": "2022-06-17T16:29:25.757Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuha2tmnjrgq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "1b5c0478-9c11-4088-afc6-8bb7b5a9afbf",
      "created": "2022-06-17T16:29:26.737Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuheydqmrsg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "b6b33ccd-e186-4dca-ad54-e6d482a76942",
      "created": "2022-06-17T16:29:27.725Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuhe2teojxhezq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "514a7fce-021d-4ad8-ad41-9a86c2edb5a5",
      "created": "2022-06-17T16:29:28.753Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuhe4tamjrgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "df670250-20f1-4604-8082-23c66ddac094",
      "created": "2022-06-17T16:29:29.739Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvgaztmojwgmyq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8",
      "created": "2022-06-17T16:29:30.713Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvga3tmnbsgq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2a6061bf-f1a9-44b1-a45a-61daba4930b3",
      "created": "2022-06-17T16:29:31.717Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvgeytsmbqgy4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3b20431d-1226-4c71-8e97-3a7d470209c2",
      "created": "2022-06-17T16:29:32.770Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvge2timzwha2a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "be3c1069-afd9-4c3f-b683-a7a10ef1073a",
      "created": "2022-06-17T16:29:33.716Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvge4dqobxgaya",
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
  "count": 15,
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
GET https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-17T16%3A28%3A17.723Z
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
  "date": "Fri, 17 Jun 2022 16:29:34 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "2",
  "x-ratelimit-reset": "1655483423"
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

### Expectations (32/34 successful)

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
  "content-length": "1030",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:22 GMT",
  "etag": "W/\"406-m4QBa41VPz9fHEQxYZqiL8mVrYU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "4",
  "x-ratelimit-reset": "1655483423"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
      "created": "2022-06-17T16:28:17.723Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbtgmycynbugqydsnjqge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
      "created": "2022-06-17T16:28:21.999Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
      "created": "2022-06-17T16:28:24.320Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
        "origins": [],
        "meta": {},
        "name": "8de0c669-96a6-4189-beff-831abf7ce080"
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
  "count": 3,
  "results": [
    {
      "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
      "created": "2022-06-17T16:28:17.723Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbtgmycynbugqydsnjqge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
      "created": "2022-06-17T16:28:21.999Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
      "created": "2022-06-17T16:28:24.320Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
        "origins": [],
        "meta": {},
        "name": "8de0c669-96a6-4189-beff-831abf7ce080"
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
  "count": 3,
  "results": {}
}
```
## Can delete pin with requestid 'bbe6828e-8bb9-471e-a13a-a208bcfb00fd' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/bbe6828e-8bb9-471e-a13a-a208bcfb00fd
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
  "date": "Fri, 17 Jun 2022 16:29:36 GMT",
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
## Can delete pin with requestid '9d758988-d60f-41d5-a783-55a4a02e2201' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/9d758988-d60f-41d5-a783-55a4a02e2201
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
  "date": "Fri, 17 Jun 2022 16:29:37 GMT",
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
## Can delete pin with requestid '2e2a985e-1e5a-4991-a898-4e38f6775415' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/2e2a985e-1e5a-4991-a898-4e38f6775415
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
  "date": "Fri, 17 Jun 2022 16:29:39 GMT",
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
## Can delete pin with requestid 'c24d1cb9-4c7b-4963-be85-11fa0a628ab2' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/c24d1cb9-4c7b-4963-be85-11fa0a628ab2
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
  "date": "Fri, 17 Jun 2022 16:29:39 GMT",
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
## Can delete pin with requestid 'a04545d8-06b6-495e-a5dc-dd6480cfde2e' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/a04545d8-06b6-495e-a5dc-dd6480cfde2e
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
  "date": "Fri, 17 Jun 2022 16:29:40 GMT",
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
## Can delete pin with requestid '8d1a9e5b-5ad9-412d-a077-f1694d77d0b0' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/8d1a9e5b-5ad9-412d-a077-f1694d77d0b0
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
  "date": "Fri, 17 Jun 2022 16:29:41 GMT",
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
## Can delete pin with requestid '76a76b7a-990a-44a8-8c8c-28cf38a98dde' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/76a76b7a-990a-44a8-8c8c-28cf38a98dde
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
  "date": "Fri, 17 Jun 2022 16:29:42 GMT",
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
## Can delete pin with requestid '1b5c0478-9c11-4088-afc6-8bb7b5a9afbf' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/1b5c0478-9c11-4088-afc6-8bb7b5a9afbf
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
  "date": "Fri, 17 Jun 2022 16:29:44 GMT",
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
## Can delete pin with requestid 'b6b33ccd-e186-4dca-ad54-e6d482a76942' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/b6b33ccd-e186-4dca-ad54-e6d482a76942
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
  "date": "Fri, 17 Jun 2022 16:29:45 GMT",
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
## Can delete pin with requestid '514a7fce-021d-4ad8-ad41-9a86c2edb5a5' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/514a7fce-021d-4ad8-ad41-9a86c2edb5a5
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
  "date": "Fri, 17 Jun 2022 16:29:45 GMT",
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
## Can delete pin with requestid 'df670250-20f1-4604-8082-23c66ddac094' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/df670250-20f1-4604-8082-23c66ddac094
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
  "date": "Fri, 17 Jun 2022 16:29:46 GMT",
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
## Can delete pin with requestid 'fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8
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
  "date": "Fri, 17 Jun 2022 16:29:47 GMT",
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
## Can delete pin with requestid '2a6061bf-f1a9-44b1-a45a-61daba4930b3' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/2a6061bf-f1a9-44b1-a45a-61daba4930b3
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
  "date": "Fri, 17 Jun 2022 16:29:48 GMT",
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
## Can delete pin with requestid '3b20431d-1226-4c71-8e97-3a7d470209c2' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/3b20431d-1226-4c71-8e97-3a7d470209c2
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
  "date": "Fri, 17 Jun 2022 16:29:49 GMT",
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
## Can delete pin with requestid 'be3c1069-afd9-4c3f-b683-a7a10ef1073a' - ❌ FAILED

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
DELETE https://api.pinata.cloud/psa/pins/be3c1069-afd9-4c3f-b683-a7a10ef1073a
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
  "date": "Fri, 17 Jun 2022 16:29:50 GMT",
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
  "date": "Fri, 17 Jun 2022 16:29:51 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "0",
  "x-ratelimit-reset": "1655483423"
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

### Expectations (16/31 successful)

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
  "content-length": "4880",
  "content-type": "application/json; charset=utf-8",
  "date": "Fri, 17 Jun 2022 16:29:35 GMT",
  "etag": "W/\"1310-DEVjuyEG/cf3PMCiRorMbCfkaVQ\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "1",
  "x-ratelimit-reset": "1655483423"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
      "created": "2022-06-17T16:28:17.723Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbtgmycynbugqydsnjqge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
      "created": "2022-06-17T16:28:21.999Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
      "created": "2022-06-17T16:28:24.320Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
        "origins": [],
        "meta": {},
        "name": "8de0c669-96a6-4189-beff-831abf7ce080"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c24d1cb9-4c7b-4963-be85-11fa0a628ab2",
      "created": "2022-06-17T16:29:22.790Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuguydamjvha4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a04545d8-06b6-495e-a5dc-dd6480cfde2e",
      "created": "2022-06-17T16:29:23.753Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobugu4dmmzzgi3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "8d1a9e5b-5ad9-412d-a077-f1694d77d0b0",
      "created": "2022-06-17T16:29:24.728Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobugy2tkmbsgu4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "76a76b7a-990a-44a8-8c8c-28cf38a98dde",
      "created": "2022-06-17T16:29:25.757Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuha2tmnjrgq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "1b5c0478-9c11-4088-afc6-8bb7b5a9afbf",
      "created": "2022-06-17T16:29:26.737Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuheydqmrsg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "b6b33ccd-e186-4dca-ad54-e6d482a76942",
      "created": "2022-06-17T16:29:27.725Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuhe2teojxhezq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "514a7fce-021d-4ad8-ad41-9a86c2edb5a5",
      "created": "2022-06-17T16:29:28.753Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuhe4tamjrgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "df670250-20f1-4604-8082-23c66ddac094",
      "created": "2022-06-17T16:29:29.739Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvgaztmojwgmyq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8",
      "created": "2022-06-17T16:29:30.713Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvga3tmnbsgq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2a6061bf-f1a9-44b1-a45a-61daba4930b3",
      "created": "2022-06-17T16:29:31.717Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvgeytsmbqgy4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3b20431d-1226-4c71-8e97-3a7d470209c2",
      "created": "2022-06-17T16:29:32.770Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvge2timzwha2a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "be3c1069-afd9-4c3f-b683-a7a10ef1073a",
      "created": "2022-06-17T16:29:33.716Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvge4dqobxgaya",
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
  "count": 15,
  "results": [
    {
      "requestid": "bbe6828e-8bb9-471e-a13a-a208bcfb00fd",
      "created": "2022-06-17T16:28:17.723Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadbtgmycynbugqydsnjqge",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "9d758988-d60f-41d5-a783-55a4a02e2201",
      "created": "2022-06-17T16:28:21.999Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm2cynbxgy3demzsgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2e2a985e-1e5a-4991-a898-4e38f6775415",
      "created": "2022-06-17T16:28:24.320Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjtgm3synbqhe3dsnrvgyzq",
        "origins": [],
        "meta": {},
        "name": "8de0c669-96a6-4189-beff-831abf7ce080"
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "c24d1cb9-4c7b-4963-be85-11fa0a628ab2",
      "created": "2022-06-17T16:29:22.790Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuguydamjvha4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "a04545d8-06b6-495e-a5dc-dd6480cfde2e",
      "created": "2022-06-17T16:29:23.753Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobugu4dmmzzgi3q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "8d1a9e5b-5ad9-412d-a077-f1694d77d0b0",
      "created": "2022-06-17T16:29:24.728Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobugy2tkmbsgu4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "76a76b7a-990a-44a8-8c8c-28cf38a98dde",
      "created": "2022-06-17T16:29:25.757Z",
      "delegates": [
        "/ip4/134.122.21.45/tcp/4001/p2p/QmUAcN8txh3QhRKVrDL8w3rdPiNNuhi9iKFogvo74s34UQ"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuha2tmnjrgq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "1b5c0478-9c11-4088-afc6-8bb7b5a9afbf",
      "created": "2022-06-17T16:29:26.737Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuheydqmrsg4zq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "b6b33ccd-e186-4dca-ad54-e6d482a76942",
      "created": "2022-06-17T16:29:27.725Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuhe2teojxhezq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "514a7fce-021d-4ad8-ad41-9a86c2edb5a5",
      "created": "2022-06-17T16:29:28.753Z",
      "delegates": [
        "/ip4/64.227.1.134/tcp/4001/p2p/Qme6vMrQ2itiRjGiLeMK7yZbbSABw1eWaTo4aMhrCeYwPX"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobuhe4tamjrgeya",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "df670250-20f1-4604-8082-23c66ddac094",
      "created": "2022-06-17T16:29:29.739Z",
      "delegates": [
        "/ip4/159.223.99.237/tcp/4001/p2p/QmaSH44DDNwowDMYieFNXoSvLj2NK788dRT1hidAprEJy9"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvgaztmojwgmyq",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "fd6ac871-38a6-4a8a-a7c1-65d4a95e1ae8",
      "created": "2022-06-17T16:29:30.713Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvga3tmnbsgq4q",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "2a6061bf-f1a9-44b1-a45a-61daba4930b3",
      "created": "2022-06-17T16:29:31.717Z",
      "delegates": [
        "/ip4/142.93.121.202/tcp/4001/p2p/QmSe5Prj4zF2qfd2yQUXGgRcN7LUrxfRZd7AeKJ58kZvb5"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvgeytsmbqgy4a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "invalid_object"
      },
      "status": "failed"
    },
    {
      "requestid": "3b20431d-1226-4c71-8e97-3a7d470209c2",
      "created": "2022-06-17T16:29:32.770Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvge2timzwha2a",
        "origins": [],
        "meta": {}
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "be3c1069-afd9-4c3f-b683-a7a10ef1073a",
      "created": "2022-06-17T16:29:33.716Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "baeaaadjthe2syobvge4dqobxgaya",
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
  "count": 15,
  "results": {}
}
```
