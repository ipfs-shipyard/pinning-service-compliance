
# https://api.pinata.cloud/psa compliance:

Execution Date: 2022-08-30T17:33:59.447Z

Revision: [b7d1f46](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/b7d1f46)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.pinata.cloud.md)

## Summary (4/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4'](#pins-post-of-cid-bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4----success)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='739d5a01-1fbc-402b-9bc7-755b12de8a1b'](#can-create-a-pin-with-name739d5a01-1fbc-402b-9bc7-755b12de8a1b----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----failed)

## Request with no authentication token - ❌ FAILED

### Expectations (1/2 successful)

  🟢 Response object matches api spec schema (success)

  ❌ Response code is 401 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
  "date": "Tue, 30 Aug 2022 17:31:54 GMT",
  "etag": "W/\"75-8hWiVluTmqi8Bp2+E+MmsFL38tY\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "cd9c8feb44732aa90d279cafed99e3b9"
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
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
  "date": "Tue, 30 Aug 2022 17:31:55 GMT",
  "etag": "W/\"52-hDmJB39hiWxMgXnl95p1Dk5Zk6Q\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "560f1d00a8c1be48f89c9d4746069f14"
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
## Pins post of CID 'bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4' - 🟢 SUCCESS

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
{"cid":"bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "402",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:31:56 GMT",
  "etag": "W/\"192-0ZFTV1OxkdZ3IDVij8ZZKsf1SV0\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "6b93283b94adb4ccaf962e42fba88254"
}
```
##### Body
```json
{
  "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
  "created": "2022-08-30T17:31:56.314Z",
  "delegates": [
    "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
  ],
  "pin": {
    "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
  "created": "2022-08-30T17:31:56.314Z",
  "delegates": [
    "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
  ],
  "pin": {
    "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
  "status": "queued",
  "created": "2022-08-30T17:31:56.314Z",
  "pin": {
    "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
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
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)


### Details

#### Request
```
DELETE https://api.pinata.cloud/psa/pins/60ecb29d-65aa-466d-8ee9-f183722ebbd3
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
  "date": "Tue, 30 Aug 2022 17:31:58 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "362912298402ff369b867b8580d00ff2"
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

### Expectations (2/4 successful)

  🟢 Result is not null (success)

  ❌ Response code is 202 (failure)

  🟢 Response is ok (success)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
{"cid":"bafkreicm2z7lcm5wbkjxzwcj3mkxkurwkn6cd7fuha4bj6coc4u5dee3ey","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "404",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:31:57 GMT",
  "etag": "W/\"194-wgKvuT9YftlxDEpwV5N1P1bkEIw\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "e506fc573522c4adaf898d92c8a0625d"
}
```
##### Body
```json
{
  "requestid": "60ecb29d-65aa-466d-8ee9-f183722ebbd3",
  "created": "2022-08-30T17:31:57.411Z",
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "pin": {
    "cid": "bafkreicm2z7lcm5wbkjxzwcj3mkxkurwkn6cd7fuha4bj6coc4u5dee3ey",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "60ecb29d-65aa-466d-8ee9-f183722ebbd3",
  "created": "2022-08-30T17:31:57.411Z",
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "pin": {
    "cid": "bafkreicm2z7lcm5wbkjxzwcj3mkxkurwkn6cd7fuha4bj6coc4u5dee3ey",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "60ecb29d-65aa-466d-8ee9-f183722ebbd3",
  "status": "queued",
  "created": "2022-08-30T17:31:57.411Z",
  "pin": {
    "cid": "bafkreicm2z7lcm5wbkjxzwcj3mkxkurwkn6cd7fuha4bj6coc4u5dee3ey",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (2/2 successful)

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
  "content-length": "14546",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:32:03 GMT",
  "etag": "W/\"38d2-utcSIfUeFQXVQe4IUNVW9sqz0XA\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "3",
  "x-ratelimit-reset": "1661880769",
  "x-request-id": "d1f2310b173f6a7f5f8db58173d84a6a"
}
```
##### Body
```json
{
  "count": 32,
  "results": [
    {
      "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
      "created": "2022-08-30T17:31:56.314Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "8a454791-14b0-4d5f-83e4-8afb9930a6ab",
      "created": "2022-08-30T17:31:44.521Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreieuo7insim5botrnirfudpwxaaws3rxwcvt4unbz53hsjrgo6bxby",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "b8ebf7ad-a5a2-40fe-b3a0-99724aeecc78"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "8f006b2c-11d8-41bd-89e5-d2966bbf249c",
      "created": "2022-08-30T17:31:44.210Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreib6cokxfh4lh5qp2grnbbzfar46uomzesgsd5g4tewimzh4qx2e3i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "974511f7-2335-4a8d-a35a-e271553fc090"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "fcb55967-34f6-4d57-b4cc-4fdf1241c5ad",
      "created": "2022-08-30T17:31:42.105Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiarylmutpazxlp7sy2osuosga2fxlxw5dtnnuaowc3kl6jzanvjfy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "746f82fd-3b17-4858-9e72-58c848f1068c",
      "created": "2022-08-30T17:31:41.995Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreiewvc33okozi6kz7ocwicb6wikcgyvej2qyv3z4abcy2soqt5nwze",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "1d0bb577-2c1c-4f2d-9a11-898c20b80be8",
      "created": "2022-08-30T17:31:33.730Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicwahua332ysmx7c7j5uztfhfb2aumx3nty4igvnoravr5bsnx5pi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "0bd3966d-8436-4f08-b48a-35a4a815e3f2",
      "created": "2022-08-30T17:31:33.539Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreibosyj6lxpe474unnliaat44wjene4mhbq6iz5p6b3lzwnfgpzbi4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 32,
  "results": [
    {
      "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
      "created": "2022-08-30T17:31:56.314Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "prechecking"
      },
      "status": "queued"
    },
    {
      "requestid": "8a454791-14b0-4d5f-83e4-8afb9930a6ab",
      "created": "2022-08-30T17:31:44.521Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreieuo7insim5botrnirfudpwxaaws3rxwcvt4unbz53hsjrgo6bxby",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "b8ebf7ad-a5a2-40fe-b3a0-99724aeecc78"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "8f006b2c-11d8-41bd-89e5-d2966bbf249c",
      "created": "2022-08-30T17:31:44.210Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreib6cokxfh4lh5qp2grnbbzfar46uomzesgsd5g4tewimzh4qx2e3i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "974511f7-2335-4a8d-a35a-e271553fc090"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "fcb55967-34f6-4d57-b4cc-4fdf1241c5ad",
      "created": "2022-08-30T17:31:42.105Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiarylmutpazxlp7sy2osuosga2fxlxw5dtnnuaowc3kl6jzanvjfy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "746f82fd-3b17-4858-9e72-58c848f1068c",
      "created": "2022-08-30T17:31:41.995Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreiewvc33okozi6kz7ocwicb6wikcgyvej2qyv3z4abcy2soqt5nwze",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "1d0bb577-2c1c-4f2d-9a11-898c20b80be8",
      "created": "2022-08-30T17:31:33.730Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicwahua332ysmx7c7j5uztfhfb2aumx3nty4igvnoravr5bsnx5pi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "0bd3966d-8436-4f08-b48a-35a4a815e3f2",
      "created": "2022-08-30T17:31:33.539Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreibosyj6lxpe474unnliaat44wjene4mhbq6iz5p6b3lzwnfgpzbi4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 32,
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
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins/37acd49a-d22f-4d3d-a567-988d9c542cb3
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
  "date": "Tue, 30 Aug 2022 17:32:05 GMT",
  "etag": "W/\"7b-03qFhbIaF85nNkdBlgUb6TE8+WU\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "3be0c08046fe59aa50ee8e1978dc56b6"
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
GET https://api.pinata.cloud/psa/pins/a197f546-c14e-46e7-827e-4e7ab9a5b872
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
  "content-length": "404",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:32:06 GMT",
  "etag": "W/\"194-3V1W76lvvM2BD7LKt3x+8cckgbg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "1be3694a15a8fee77d79587c13105440"
}
```
##### Body
```json
{
  "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
  "created": "2022-08-30T17:32:05.009Z",
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "pin": {
    "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
  "created": "2022-08-30T17:32:05.009Z",
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "pin": {
    "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
  "status": "queued",
  "created": "2022-08-30T17:32:05.009Z",
  "pin": {
    "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## Pin's with requestid '37acd49a-d22f-4d3d-a567-988d9c542cb3' can have cid 'bafkreie6ghguie2epsh6nelykl7yeext32tkp2ti5scmwp2wyybt22xl24' replaced with 'bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.pinata.cloud/psa/pins/37acd49a-d22f-4d3d-a567-988d9c542cb3
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
{"cid":"bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "404",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:32:05 GMT",
  "etag": "W/\"194-3V1W76lvvM2BD7LKt3x+8cckgbg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "8f508ccbc8f7aaf9ae177b3e6e9df591"
}
```
##### Body
```json
{
  "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
  "created": "2022-08-30T17:32:05.009Z",
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "pin": {
    "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
  "created": "2022-08-30T17:32:05.009Z",
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "pin": {
    "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
  "status": "queued",
  "created": "2022-08-30T17:32:05.009Z",
  "pin": {
    "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (37acd49a-d22f-4d3d-a567-988d9c542cb3) (success)

  🟢 Response is ok (success)

  🟢 Replaced pin has the new & expected CID (success)

  🟢 Replaced pin has a different requestid (success)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


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
{"cid":"bafkreie6ghguie2epsh6nelykl7yeext32tkp2ti5scmwp2wyybt22xl24","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "404",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:32:04 GMT",
  "etag": "W/\"194-v5+w8BARzsCfZmGL+jDGoVQw5zE\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "2d9e973c87eaf8810e819b9b7f48815a"
}
```
##### Body
```json
{
  "requestid": "37acd49a-d22f-4d3d-a567-988d9c542cb3",
  "created": "2022-08-30T17:32:04.138Z",
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "pin": {
    "cid": "bafkreie6ghguie2epsh6nelykl7yeext32tkp2ti5scmwp2wyybt22xl24",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "37acd49a-d22f-4d3d-a567-988d9c542cb3",
  "created": "2022-08-30T17:32:04.138Z",
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "pin": {
    "cid": "bafkreie6ghguie2epsh6nelykl7yeext32tkp2ti5scmwp2wyybt22xl24",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
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
  "requestid": "37acd49a-d22f-4d3d-a567-988d9c542cb3",
  "status": "queued",
  "created": "2022-08-30T17:32:04.138Z",
  "pin": {
    "cid": "bafkreie6ghguie2epsh6nelykl7yeext32tkp2ti5scmwp2wyybt22xl24",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
  ],
  "info": {
    "pinata_pinjob_status": "prechecking"
  }
}
```
## Can retrieve pin with name '739d5a01-1fbc-402b-9bc7-755b12de8a1b' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=739d5a01-1fbc-402b-9bc7-755b12de8a1b&match=exact
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
  "date": "Tue, 30 Aug 2022 17:32:08 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "2",
  "x-ratelimit-reset": "1661880769",
  "x-request-id": "66b24ee295c6d2569552f7c1eb0e8079"
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
## Can retrieve pin with name '739D5A01-1FBC-402B-9BC7-755B12DE8A1B' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=739D5A01-1FBC-402B-9BC7-755B12DE8A1B&match=iexact
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
  "date": "Tue, 30 Aug 2022 17:32:09 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "1",
  "x-ratelimit-reset": "1661880769",
  "x-request-id": "864b33118f9a4ad65fa4150dd3212915"
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
## Can retrieve pin with name '1fbc-402b-9bc7-755' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=1fbc-402b-9bc7-755&match=partial
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
  "date": "Tue, 30 Aug 2022 17:32:10 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "0",
  "x-ratelimit-reset": "1661880769",
  "x-request-id": "74ee7e9480d8a5dd64669bedf9632b51"
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
## Can retrieve pin with name '1FBC-402B-9BC7-755' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.pinata.cloud/psa/pins?name=1FBC-402B-9BC7-755&match=ipartial
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
  "date": "Tue, 30 Aug 2022 17:32:51 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "4",
  "x-ratelimit-reset": "1661880832",
  "x-request-id": "b3cc2f1d9fc9dafb45ab666b8dd9768b"
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
## Can create a pin with name='739d5a01-1fbc-402b-9bc7-755b12de8a1b' - ❌ FAILED

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
{"cid":"bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau","name":"739d5a01-1fbc-402b-9bc7-755b12de8a1b","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "448",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:32:07 GMT",
  "etag": "W/\"1c0-1Cy42SEP08HMT3zwaPO4vT11dt4\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "0d6cee43be18c653295dfbb768125462"
}
```
##### Body
```json
{
  "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
  "created": "2022-08-30T17:32:07.434Z",
  "delegates": [
    "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
  ],
  "pin": {
    "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b"
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
  "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
  "created": "2022-08-30T17:32:07.434Z",
  "delegates": [
    "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
  ],
  "pin": {
    "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b"
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
  "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
  "status": "queued",
  "created": "2022-08-30T17:32:07.434Z",
  "pin": {
    "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
    "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b",
    "origins": [],
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
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
  "content-length": "12898",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:33:02 GMT",
  "etag": "W/\"3262-sWkGmandtJ+qO7uYyvP48oA/CDg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "2",
  "x-ratelimit-reset": "1661880832",
  "x-request-id": "eeb23430d5943068a5b5f558d258fb5e"
}
```
##### Body
```json
{
  "count": 28,
  "results": [
    {
      "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
      "created": "2022-08-30T17:32:07.434Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
      "created": "2022-08-30T17:32:05.009Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
      "created": "2022-08-30T17:31:56.314Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 28,
  "results": [
    {
      "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
      "created": "2022-08-30T17:32:07.434Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
      "created": "2022-08-30T17:32:05.009Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
      "created": "2022-08-30T17:31:56.314Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 28,
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
GET https://api.pinata.cloud/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-21T22%3A52%3A51.834Z
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
  "date": "Tue, 30 Aug 2022 17:33:08 GMT",
  "etag": "W/\"18-sS5FLbfK694W6H4gsKxYsIoy1Pk\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "1",
  "x-ratelimit-reset": "1661880832",
  "x-request-id": "5b4aff3ad82f69db0cfc438633f5fc77"
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
  "content-length": "14947",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:32:56 GMT",
  "etag": "W/\"3a63-3cGDYmKXQVFRDF40/NPnMqxowdg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "3",
  "x-ratelimit-reset": "1661880832",
  "x-request-id": "f62a0f277db11c6db8420281a04630fb"
}
```
##### Body
```json
{
  "count": 33,
  "results": [
    {
      "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
      "created": "2022-08-30T17:32:07.434Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
      "created": "2022-08-30T17:32:05.009Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
      "created": "2022-08-30T17:31:56.314Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "8a454791-14b0-4d5f-83e4-8afb9930a6ab",
      "created": "2022-08-30T17:31:44.521Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreieuo7insim5botrnirfudpwxaaws3rxwcvt4unbz53hsjrgo6bxby",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "b8ebf7ad-a5a2-40fe-b3a0-99724aeecc78"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "fcb55967-34f6-4d57-b4cc-4fdf1241c5ad",
      "created": "2022-08-30T17:31:42.105Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiarylmutpazxlp7sy2osuosga2fxlxw5dtnnuaowc3kl6jzanvjfy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "746f82fd-3b17-4858-9e72-58c848f1068c",
      "created": "2022-08-30T17:31:41.995Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreiewvc33okozi6kz7ocwicb6wikcgyvej2qyv3z4abcy2soqt5nwze",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "1d0bb577-2c1c-4f2d-9a11-898c20b80be8",
      "created": "2022-08-30T17:31:33.730Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicwahua332ysmx7c7j5uztfhfb2aumx3nty4igvnoravr5bsnx5pi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "0bd3966d-8436-4f08-b48a-35a4a815e3f2",
      "created": "2022-08-30T17:31:33.539Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreibosyj6lxpe474unnliaat44wjene4mhbq6iz5p6b3lzwnfgpzbi4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 33,
  "results": [
    {
      "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
      "created": "2022-08-30T17:32:07.434Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
      "created": "2022-08-30T17:32:05.009Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
      "created": "2022-08-30T17:31:56.314Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "8a454791-14b0-4d5f-83e4-8afb9930a6ab",
      "created": "2022-08-30T17:31:44.521Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreieuo7insim5botrnirfudpwxaaws3rxwcvt4unbz53hsjrgo6bxby",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "b8ebf7ad-a5a2-40fe-b3a0-99724aeecc78"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "fcb55967-34f6-4d57-b4cc-4fdf1241c5ad",
      "created": "2022-08-30T17:31:42.105Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiarylmutpazxlp7sy2osuosga2fxlxw5dtnnuaowc3kl6jzanvjfy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "746f82fd-3b17-4858-9e72-58c848f1068c",
      "created": "2022-08-30T17:31:41.995Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreiewvc33okozi6kz7ocwicb6wikcgyvej2qyv3z4abcy2soqt5nwze",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "1d0bb577-2c1c-4f2d-9a11-898c20b80be8",
      "created": "2022-08-30T17:31:33.730Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicwahua332ysmx7c7j5uztfhfb2aumx3nty4igvnoravr5bsnx5pi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "0bd3966d-8436-4f08-b48a-35a4a815e3f2",
      "created": "2022-08-30T17:31:33.539Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreibosyj6lxpe474unnliaat44wjene4mhbq6iz5p6b3lzwnfgpzbi4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 33,
  "results": {}
}
```
## Can delete pin with requestid '96b4abf4-dc0d-4e64-b8c1-14e82e11885f' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/96b4abf4-dc0d-4e64-b8c1-14e82e11885f
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
  "date": "Tue, 30 Aug 2022 17:33:14 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "ecc92fd230718c1681c777f7b9a6f1a3"
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
## Can delete pin with requestid 'a197f546-c14e-46e7-827e-4e7ab9a5b872' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/a197f546-c14e-46e7-827e-4e7ab9a5b872
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
  "date": "Tue, 30 Aug 2022 17:33:15 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "03bc0098a388990dc4b114447a9fcfe4"
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
## Can delete pin with requestid 'e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
DELETE https://api.pinata.cloud/psa/pins/e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa
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
  "date": "Tue, 30 Aug 2022 17:33:16 GMT",
  "etag": "W/\"2-nOO9QiTIwXgNtWtBJezz8kv3SLc\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-request-id": "d1754e5604963f42475c4d4067ab3882"
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
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '31' (failure)





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
  "content-length": "11647",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:33:59 GMT",
  "etag": "W/\"2d7f-RG/YZLoF6OSxZx4OKPJiniOg98Y\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "4",
  "x-ratelimit-reset": "1661880895",
  "x-request-id": "7717ab83263379611fe2164889275a25"
}
```
##### Body
```json
{
  "count": 25,
  "results": [
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 25,
  "results": [
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 25,
  "results": {}
}
```
## Can delete all pins created during compliance checks - ❌ FAILED

### Expectations (3/4 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '31' (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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

  ⚠️ SyntaxError: Unexpected token O in JSON at position 0
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
  "content-length": "12898",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 30 Aug 2022 17:33:14 GMT",
  "etag": "W/\"3262-sWkGmandtJ+qO7uYyvP48oA/CDg\"",
  "strict-transport-security": "max-age=15724800; includeSubDomains",
  "vary": "Origin",
  "x-powered-by": "Express",
  "x-ratelimit-limit": "5",
  "x-ratelimit-remaining": "0",
  "x-ratelimit-reset": "1661880832",
  "x-request-id": "30ee56ee2112468c0416748780814302"
}
```
##### Body
```json
{
  "count": 28,
  "results": [
    {
      "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
      "created": "2022-08-30T17:32:07.434Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
      "created": "2022-08-30T17:32:05.009Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
      "created": "2022-08-30T17:31:56.314Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 28,
  "results": [
    {
      "requestid": "96b4abf4-dc0d-4e64-b8c1-14e82e11885f",
      "created": "2022-08-30T17:32:07.434Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreic7wpytvrss7yddz2nu46v6ewkgafxamtctgxsumhvz7bclr7hpau",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "739d5a01-1fbc-402b-9bc7-755b12de8a1b"
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "a197f546-c14e-46e7-827e-4e7ab9a5b872",
      "created": "2022-08-30T17:32:05.009Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreibhxub7nwjapmfr3fu7dsh5ug4tmfn4ouslf5gclmxvk3yqs3nyxa",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "e0d0b8e2-0a5b-44ab-a5ef-850b3f3276aa",
      "created": "2022-08-30T17:31:56.314Z",
      "delegates": [
        "/ip4/159.65.235.60/tcp/4001/p2p/QmWa1rmPs6KrhxMQK8hfGSDnJ3gNjSRMeqCa9Z77Ljj8nn"
      ],
      "pin": {
        "cid": "bafkreifsbabc6h553iimeldq3rndh5533hhk2cy2dpgz4fji663slw6uw4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "searching"
      },
      "status": "queued"
    },
    {
      "requestid": "ef119f79-331f-4349-a2da-bbfd2094afc0",
      "created": "2022-08-22T11:42:52.724Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreigavjzllmhsr56rdnq6pxrxkoy3g7fiminxfi75xigwlruxjxtboy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "952d1622-abae-4284-bdbc-b335b4ac54c9"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c36f039a-82b1-46f5-a09c-c39eaa50247d",
      "created": "2022-08-22T11:42:50.657Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihgatltpz2ttz4fh2hj4hkxa7fhn76dqqdsllk56r7jml2diommmy",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ae8f1cec-ae3c-4e9c-ac47-8c41a9ca62af",
      "created": "2022-08-22T11:42:46.487Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreifvngewdxos4wnyjlihfetmmf3mwkxca644vmoyts44inhcijulqq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "8cd129c6-b3c7-45ed-b576-2a273afee4a2",
      "created": "2022-08-22T11:42:37.833Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreif7erw5pmzq4cy3old6uafh5422pcrtb4ipzuteq4m5no7cketdnu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "f9d853d2-b340-4968-a1c3-605a2a4d38da"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0c9085bb-200d-4804-9307-d55a63c661cf",
      "created": "2022-08-22T11:42:35.634Z",
      "delegates": [
        "/ip4/162.243.164.106/tcp/4001/p2p/QmUCCZxDfGxcFpSxKSWe5ckgvAGx5cboFxHCfVRrBhGSkK"
      ],
      "pin": {
        "cid": "bafkreidbesf6uvsdi6mk26dsls6hd2cplxvjdcx5b7eoupvgzhbe7pv6he",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "977bcff3-d395-41ff-85df-6d6ba17f1600",
      "created": "2022-08-22T11:42:31.367Z",
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "pin": {
        "cid": "bafkreigmyrpcha5b2tqllhjba3lj7oiiu7wiu3aihnoqta6mc4swr53hz4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "49d5b911-9ede-41b2-8f46-71bc20808721",
      "created": "2022-08-22T10:40:14.615Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreieij74g43s6jgm536pvasca2lzlti4n426kpyb4265mtprcudvu7i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "ed25fcd8-f7f4-43bc-936c-62bd3d5d5cb4"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "76f10a8b-6191-40e1-82b3-16b2a15689ae",
      "created": "2022-08-22T10:40:12.503Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreibfdoczjugvkmztd3sgyhinsbkxjqjrn4xxmt6nlegp2hy2wb257u",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "45e55eee-3b8c-4425-af36-a1acbb3ca5c3",
      "created": "2022-08-17T20:27:32.633Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreiewzjlzxjst7olsuxqloarynbvxdp4u3a7fecz7r7ioks7gzxrbe4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "a378b994-7c04-4797-9bfb-a55eff9f4ed5"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e053a66c-6ff5-4a87-b143-28593d5b69ba",
      "created": "2022-08-17T20:27:26.198Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreicsyzy6tih7csqboipqcu3avrjwy2cjrygpfshmw73qtd5ta3aedq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fe738d15-f822-41be-b350-08f6dafcf65f",
      "created": "2022-08-17T20:18:37.175Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbyfvsa4ckfgkgz7dpr2zylcdlf2pfffzzl6cog4amtjxcrvxl24",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "3d9d4add-f427-4217-8edf-bc08e60be76c"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "5682adc7-ba63-4d3e-8ea6-1fd943541b59",
      "created": "2022-08-06T01:47:31.191Z",
      "delegates": [
        "/ip4/198.211.112.207/tcp/4001/p2p/QmbWRoGEz6g32uZ9xFWpf2xsiikyE5KNXoj3QPAULpW8vN"
      ],
      "pin": {
        "cid": "bafkreieusjozxx6fqgwwpxbugrmpii34mtvjfkijawzfaauwzjqmhl7e2m",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "04ed6941-e1d3-427f-a9b0-6c2d281a9021",
      "created": "2022-08-06T01:47:26.856Z",
      "delegates": [
        "/ip4/64.227.8.22/tcp/4001/p2p/QmQh4NeikAQnxFC8hxZW3B6aVTKCjzwud9ArQnS9ZFdSEz"
      ],
      "pin": {
        "cid": "bafkreihbihc3eek6akkamfkm4cnlwq2ceeq55ynt4wg7keftauaiwwx6oe",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "a6b0123d-9635-4c28-bae5-4edadf53e4a3",
      "status": "pinned",
      "created": "2022-07-18T18:37:02.652Z",
      "pin": {
        "cid": "QmS9i1Ee2HZNX27qWXdYXeHQarn55s9wkZE2svdrw4rPNK",
        "origins": [
          "/ip4/192.168.1.227/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/tcp/4001/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/192.168.1.227/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/::1/udp/4001/quic/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/tcp/4001/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8ac5:b7a7/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/138.197.183.167/udp/4001/quic/p2p/12D3KooWQuosjhD3z1P7Qe4zmpHJAv5AWfMX15hjKAeJ53F6LDs4/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip6/64:ff9b::8233:b4a9/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/tcp/4001/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY",
          "/ip4/130.51.180.169/udp/4001/quic/p2p/12D3KooWPKVFt77yKK1n7m3Tthp3AMR9FBCeE4qDrdByeAtL85F9/p2p-circuit/p2p/12D3KooWMBeKmccSU6Jx69sZgCNBKdWwkvM8u3mBN8XEyzG4jLWY"
        ],
        "meta": {}
      },
      "delegates": [
        "/ip4/142.93.60.197/tcp/4001/p2p/QmNZwVaiibfFEJLSkoSmWeWCAak38hV89jPTtyWXRH5mQP"
      ],
      "info": {}
    },
    {
      "requestid": "0b4c85d7-9a0a-42e7-981e-6ac03c75b675",
      "created": "2022-06-23T13:36:46.128Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiagsk3ix5bhnvuyfwsp47t7h4vkkro5zvtrvv2iu2775gmkgycgja",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "c4fa2cc7-76b3-44b4-ae5f-5b3f325b53e7",
      "created": "2022-06-23T13:35:50.220Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreig3obooc37n44jujovspxd2ezxlamhkqljnurhzvglzjsmmdbf6uu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "name": "7c9bedcb-11a2-47fc-a469-91a5a9d12efb"
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e5b77e68-bb4b-406b-9679-ad1da97ee5bd",
      "created": "2022-06-23T13:35:41.145Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifhjguaeu7fmigr5d5eowq44odbsovbf7gwkdec52luugldalwu4i",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "aca97291-95ca-4b9f-94f9-a255415c77f0",
      "created": "2022-06-23T13:32:12.568Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreifoiifaaa74mzh5ngttvv43qu4ue6r2ahgldy4e4scokwo3zarrfm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "dc15fd53-04da-4a52-a261-8ac12547d94c",
      "created": "2022-06-22T23:03:49.196Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiadagzhiwhrnfz4hwqwulhvrhgxzpmo64mshdgw5c57upj5ts65zm",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "e3965b92-df15-4fbe-8253-0f08511da0c5",
      "created": "2022-06-21T23:00:35.371Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihixdnjzmrdzc4k46e5vxrm3lmnz5xeca5mspfqzceyzt4i6zbu5e",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "0a4e8607-98ee-4729-9c1f-eb1b261dde1f",
      "created": "2022-06-21T23:00:34.395Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreigb2djibu4427k7hiwyccv3qkwxq3ootwyxg42lgdk2vr6bfjbagq",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fd11f239-512e-418b-ae4d-74defbf42083",
      "created": "2022-06-21T23:00:11.326Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreiar7xvp55e2windie73qirmws5bgumivu23kvqff2eoudoml5lziu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ceaf74a9-626a-4ab9-a7f8-26620ff2d15e",
      "created": "2022-06-21T23:00:07.339Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreihzuvw4zyynjhcdew4t5wdrwjyausn6m2sc4j43adwgjyj4nmbviu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "fbb62b71-c550-45f1-9e2c-83a4dee339cc",
      "created": "2022-06-21T22:59:35.310Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreib6cicswtw7u6tcyspm7snyfd7iytk6y6cwtqgpdd5umpipmpgcmi",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    },
    {
      "requestid": "ebe7aa41-6d0b-42c7-b9d9-a8ecdc8218d5",
      "created": "2022-06-21T22:52:51.834Z",
      "delegates": [
        "/ip4/137.184.96.13/tcp/4001/p2p/Qmc2461Xg9cRQVEXL9kPpK7P5e6vhiyz1HQz2nfdsfftPf"
      ],
      "pin": {
        "cid": "bafkreidbjflpp56lifzaudzyo24l3tho4mq6aoo35tv24sfjajvuuvhogu",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "info": {
        "pinata_pinjob_status": "expired"
      },
      "status": "failed"
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 28,
  "results": {}
}
```
