
<script src="./telemetry.js"></script>
# https://api.estuary.tech/pinning compliance:

Execution Date: 2023-06-27T20:31:11.266Z

Revision: [e5fdf56](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/e5fdf56)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (3/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4'](#pins-post-of-cid-bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='8d711c6a-9691-4996-804d-5c6752f40bf4'](#can-create-a-pin-with-name8d711c6a-9691-4996-804d-5c6752f40bf4----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----failed)

## Request with no authentication token - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Response code is 401 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins
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
  "connection": "close",
  "content-length": "77",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:22 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_AUTH_MISSING",
    "details": "no api key was specified"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_AUTH_MISSING",
    "details": "no api key was specified"
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins
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
  "connection": "close",
  "content-length": "76",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:23 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERR_INVALID_TOKEN",
    "details": "api key does not exist"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERR_INVALID_TOKEN",
    "details": "api key does not exist"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response object matches api spec schema (failure)

  ❌ Pinning status is either queued, pinning, or pinned (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

#### Response object doesn't match expected schema:

* "requestid" is required

* "status" is required

* "created" is required

* "pin" is required

* "delegates" is required

* "error" is not allowed

  
### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
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
{"cid":"bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "71",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "not connected"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "not connected"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## The newly created pin can be immediately deleted - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/null
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
500 Internal Server Error
```
##### Headers
```json
{
  "connection": "close",
  "content-length": "104",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "strconv.Atoi: parsing \"null\": invalid syntax"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "strconv.Atoi: parsing \"null\": invalid syntax"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create and then delete a new pin - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Result is not null (failure)

  ❌ Response code is 202 (failure)

  ❌ Response is ok (failure)

  ❌ Response code is 202: The Pin was deleted successfully (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
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
{"cid":"bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "71",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "not connected"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "not connected"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 87,
  "results": [
    {
      "requestid": "163841218",
      "status": "queued",
      "created": "2023-06-27T20:16:25.434094Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841218,
        "createdAt": "2023-06-27T20:16:25.434094Z",
        "updatedAt": "2023-06-27T20:16:25.434094Z",
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841143",
      "status": "queued",
      "created": "2023-06-27T20:16:24.427807Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841143,
        "createdAt": "2023-06-27T20:16:24.427807Z",
        "updatedAt": "2023-06-27T20:16:24.427807Z",
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163775082",
      "status": "queued",
      "created": "2023-06-27T19:59:49.249904Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163775082,
        "createdAt": "2023-06-27T19:59:49.249904Z",
        "updatedAt": "2023-06-27T19:59:49.249904Z",
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774986",
      "status": "queued",
      "created": "2023-06-27T19:59:48.26485Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774986,
        "createdAt": "2023-06-27T19:59:48.26485Z",
        "updatedAt": "2023-06-27T19:59:48.26485Z",
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774921",
      "status": "queued",
      "created": "2023-06-27T19:59:47.258059Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774921,
        "createdAt": "2023-06-27T19:59:47.258059Z",
        "updatedAt": "2023-06-27T19:59:47.258059Z",
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774857",
      "status": "queued",
      "created": "2023-06-27T19:59:46.24915Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774857,
        "createdAt": "2023-06-27T19:59:46.24915Z",
        "updatedAt": "2023-06-27T19:59:46.24915Z",
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774792",
      "status": "queued",
      "created": "2023-06-27T19:59:45.30576Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774792,
        "createdAt": "2023-06-27T19:59:45.30576Z",
        "updatedAt": "2023-06-27T19:59:45.30576Z",
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163754421",
      "status": "queued",
      "created": "2023-06-27T19:54:37.927014Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163754421,
        "createdAt": "2023-06-27T19:54:37.927014Z",
        "updatedAt": "2023-06-27T19:54:37.927014Z",
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163754197",
      "status": "queued",
      "created": "2023-06-27T19:54:34.816729Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiclkyi6s6ujqbhqjleq2fcs2difv5ahechxhajdonmpiby53cwwku",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163754197,
        "createdAt": "2023-06-27T19:54:34.816729Z",
        "updatedAt": "2023-06-27T19:54:34.816729Z",
        "cid": "bafkreiclkyi6s6ujqbhqjleq2fcs2difv5ahechxhajdonmpiby53cwwku",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163734015",
      "status": "queued",
      "created": "2023-06-27T19:49:30.799479Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifxgvyqz2scqgbveuiouz6fb7x6cjozkztrmcv6o6a7e74okacivi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163734015,
        "createdAt": "2023-06-27T19:49:30.799479Z",
        "updatedAt": "2023-06-27T19:49:30.799479Z",
        "cid": "bafkreifxgvyqz2scqgbveuiouz6fb7x6cjozkztrmcv6o6a7e74okacivi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 87,
  "results": [
    {
      "requestid": "163841218",
      "status": "queued",
      "created": "2023-06-27T20:16:25.434094Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841218,
        "createdAt": "2023-06-27T20:16:25.434094Z",
        "updatedAt": "2023-06-27T20:16:25.434094Z",
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841143",
      "status": "queued",
      "created": "2023-06-27T20:16:24.427807Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841143,
        "createdAt": "2023-06-27T20:16:24.427807Z",
        "updatedAt": "2023-06-27T20:16:24.427807Z",
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163775082",
      "status": "queued",
      "created": "2023-06-27T19:59:49.249904Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163775082,
        "createdAt": "2023-06-27T19:59:49.249904Z",
        "updatedAt": "2023-06-27T19:59:49.249904Z",
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774986",
      "status": "queued",
      "created": "2023-06-27T19:59:48.26485Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774986,
        "createdAt": "2023-06-27T19:59:48.26485Z",
        "updatedAt": "2023-06-27T19:59:48.26485Z",
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774921",
      "status": "queued",
      "created": "2023-06-27T19:59:47.258059Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774921,
        "createdAt": "2023-06-27T19:59:47.258059Z",
        "updatedAt": "2023-06-27T19:59:47.258059Z",
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774857",
      "status": "queued",
      "created": "2023-06-27T19:59:46.24915Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774857,
        "createdAt": "2023-06-27T19:59:46.24915Z",
        "updatedAt": "2023-06-27T19:59:46.24915Z",
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774792",
      "status": "queued",
      "created": "2023-06-27T19:59:45.30576Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774792,
        "createdAt": "2023-06-27T19:59:45.30576Z",
        "updatedAt": "2023-06-27T19:59:45.30576Z",
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163754421",
      "status": "queued",
      "created": "2023-06-27T19:54:37.927014Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163754421,
        "createdAt": "2023-06-27T19:54:37.927014Z",
        "updatedAt": "2023-06-27T19:54:37.927014Z",
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163754197",
      "status": "queued",
      "created": "2023-06-27T19:54:34.816729Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiclkyi6s6ujqbhqjleq2fcs2difv5ahechxhajdonmpiby53cwwku",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163754197,
        "createdAt": "2023-06-27T19:54:34.816729Z",
        "updatedAt": "2023-06-27T19:54:34.816729Z",
        "cid": "bafkreiclkyi6s6ujqbhqjleq2fcs2difv5ahechxhajdonmpiby53cwwku",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163734015",
      "status": "queued",
      "created": "2023-06-27T19:49:30.799479Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifxgvyqz2scqgbveuiouz6fb7x6cjozkztrmcv6o6a7e74okacivi",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163734015,
        "createdAt": "2023-06-27T19:49:30.799479Z",
        "updatedAt": "2023-06-27T19:49:30.799479Z",
        "cid": "bafkreifxgvyqz2scqgbveuiouz6fb7x6cjozkztrmcv6o6a7e74okacivi",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 87,
  "results": {}
}
```
## Get original pin via requestid - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/null
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
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "104",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "strconv.Atoi: parsing \"null\": invalid syntax"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "strconv.Atoi: parsing \"null\": invalid syntax"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Get new pin via requestid - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Response code is 200: New Pin's requestid can be found (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins/null
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
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "104",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "strconv.Atoi: parsing \"null\": invalid syntax"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "strconv.Atoi: parsing \"null\": invalid syntax"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pin's with requestid 'null' can have cid 'bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54' replaced with 'bafkreianxeqhg2wd7e25xiyzkh5vjup2ofv2x42q2gnnodkq4ibserfzvm' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)

  ❌ Response code is 200: New Pin's requestid can be found (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins/null
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
{"cid":"bafkreianxeqhg2wd7e25xiyzkh5vjup2ofv2x42q2gnnodkq4ibserfzvm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "104",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "strconv.Atoi: parsing \"null\": invalid syntax"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "strconv.Atoi: parsing \"null\": invalid syntax"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create and replace a pin's CID - ❌ FAILED

### Expectations (0/7 successful)

  ❌ Pin exists (failure)

  ❌ Could obtain requestid from new pin (null) (failure)

  ❌ Response is ok (failure)

  ❌ Replaced pin has the new & expected CID (failure)

  ❌ Replaced pin has a different requestid (failure)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)

  ❌ Response code is 200: New Pin's requestid can be found (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
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
{"cid":"bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "71",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "not connected"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "not connected"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name '8d711c6a-9691-4996-804d-5c6752f40bf4' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=8d711c6a-9691-4996-804d-5c6752f40bf4&match=exact
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
  "connection": "close",
  "content-length": "1828",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:31 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
## Can retrieve pin with name '8D711C6A-9691-4996-804D-5C6752F40BF4' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=8D711C6A-9691-4996-804D-5C6752F40BF4&match=iexact
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
  "connection": "close",
  "content-length": "1828",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:32 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
## Can retrieve pin with name '9691-4996-804d-5c6' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=9691-4996-804d-5c6&match=partial
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
  "connection": "close",
  "content-length": "1828",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:33 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
## Can retrieve pin with name '9691-4996-804D-5C6' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=9691-4996-804D-5C6&match=ipartial
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
  "connection": "close",
  "content-length": "1828",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
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
## Can create a pin with name='8d711c6a-9691-4996-804d-5c6752f40bf4' - ❌ FAILED

### Expectations (16/19 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Name matches name provided during creation (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.estuary.tech/pinning/pins
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
{"cid":"bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa","name":"8d711c6a-9691-4996-804d-5c6752f40bf4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
500 Internal Server Error
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "71",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "not connected"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "not connected"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pagination: First page of pins - 🟢 SUCCESS

### Expectations (5/5 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  🟢 Count is greater than the number of pins returned (success)

  🟢 Number of pins returned defaults to 10 (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:35 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 89,
  "results": [
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841338",
      "status": "queued",
      "created": "2023-06-27T20:16:27.411583Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841338,
        "createdAt": "2023-06-27T20:16:27.411583Z",
        "updatedAt": "2023-06-27T20:16:27.411583Z",
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841218",
      "status": "queued",
      "created": "2023-06-27T20:16:25.434094Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841218,
        "createdAt": "2023-06-27T20:16:25.434094Z",
        "updatedAt": "2023-06-27T20:16:25.434094Z",
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841143",
      "status": "queued",
      "created": "2023-06-27T20:16:24.427807Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841143,
        "createdAt": "2023-06-27T20:16:24.427807Z",
        "updatedAt": "2023-06-27T20:16:24.427807Z",
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163775082",
      "status": "queued",
      "created": "2023-06-27T19:59:49.249904Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163775082,
        "createdAt": "2023-06-27T19:59:49.249904Z",
        "updatedAt": "2023-06-27T19:59:49.249904Z",
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774986",
      "status": "queued",
      "created": "2023-06-27T19:59:48.26485Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774986,
        "createdAt": "2023-06-27T19:59:48.26485Z",
        "updatedAt": "2023-06-27T19:59:48.26485Z",
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774921",
      "status": "queued",
      "created": "2023-06-27T19:59:47.258059Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774921,
        "createdAt": "2023-06-27T19:59:47.258059Z",
        "updatedAt": "2023-06-27T19:59:47.258059Z",
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774857",
      "status": "queued",
      "created": "2023-06-27T19:59:46.24915Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774857,
        "createdAt": "2023-06-27T19:59:46.24915Z",
        "updatedAt": "2023-06-27T19:59:46.24915Z",
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774792",
      "status": "queued",
      "created": "2023-06-27T19:59:45.30576Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774792,
        "createdAt": "2023-06-27T19:59:45.30576Z",
        "updatedAt": "2023-06-27T19:59:45.30576Z",
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163754421",
      "status": "queued",
      "created": "2023-06-27T19:54:37.927014Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163754421,
        "createdAt": "2023-06-27T19:54:37.927014Z",
        "updatedAt": "2023-06-27T19:54:37.927014Z",
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 89,
  "results": [
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841338",
      "status": "queued",
      "created": "2023-06-27T20:16:27.411583Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841338,
        "createdAt": "2023-06-27T20:16:27.411583Z",
        "updatedAt": "2023-06-27T20:16:27.411583Z",
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841218",
      "status": "queued",
      "created": "2023-06-27T20:16:25.434094Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841218,
        "createdAt": "2023-06-27T20:16:25.434094Z",
        "updatedAt": "2023-06-27T20:16:25.434094Z",
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841143",
      "status": "queued",
      "created": "2023-06-27T20:16:24.427807Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841143,
        "createdAt": "2023-06-27T20:16:24.427807Z",
        "updatedAt": "2023-06-27T20:16:24.427807Z",
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163775082",
      "status": "queued",
      "created": "2023-06-27T19:59:49.249904Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163775082,
        "createdAt": "2023-06-27T19:59:49.249904Z",
        "updatedAt": "2023-06-27T19:59:49.249904Z",
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774986",
      "status": "queued",
      "created": "2023-06-27T19:59:48.26485Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774986,
        "createdAt": "2023-06-27T19:59:48.26485Z",
        "updatedAt": "2023-06-27T19:59:48.26485Z",
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774921",
      "status": "queued",
      "created": "2023-06-27T19:59:47.258059Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774921,
        "createdAt": "2023-06-27T19:59:47.258059Z",
        "updatedAt": "2023-06-27T19:59:47.258059Z",
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774857",
      "status": "queued",
      "created": "2023-06-27T19:59:46.24915Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774857,
        "createdAt": "2023-06-27T19:59:46.24915Z",
        "updatedAt": "2023-06-27T19:59:46.24915Z",
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774792",
      "status": "queued",
      "created": "2023-06-27T19:59:45.30576Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774792,
        "createdAt": "2023-06-27T19:59:45.30576Z",
        "updatedAt": "2023-06-27T19:59:45.30576Z",
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163754421",
      "status": "queued",
      "created": "2023-06-27T19:54:37.927014Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163754421,
        "createdAt": "2023-06-27T19:54:37.927014Z",
        "updatedAt": "2023-06-27T19:54:37.927014Z",
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 89,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (7/10 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  🟢 Count is greater than the number of pins returned (success)

  🟢 Number of pins returned defaults to 10 (success)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)


### Errors during run

  ⚠️ FetchError: request to https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T19%3A54%3A37.927Z failed, reason: read ECONNRESET
    at ClientRequest.<anonymous> (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/node-fetch/src/index.js:108:11)
    at ClientRequest.emit (node:events:513:28)
    at ClientRequest.emit (node:domain:489:12)
    at TLSSocket.socketErrorListener (node:_http_client:502:9)
    at TLSSocket.emit (node:events:513:28)
    at TLSSocket.emit (node:domain:489:12)
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at processTicksAndRejections (node:internal/process/task_queues:82:21)

  ⚠️ TypeError: Cannot read properties of undefined (reading 'response')
    at fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/expectations/index.ts:8:48)
    at ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:184:31)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:212:7)
    at async testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:124:3)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)

  ⚠️ Error: Second page result is null
    at fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:119:17)
    at ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:184:31)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:212:7)
    at async testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:124:3)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:16:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 89,
  "results": [
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841338",
      "status": "queued",
      "created": "2023-06-27T20:16:27.411583Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841338,
        "createdAt": "2023-06-27T20:16:27.411583Z",
        "updatedAt": "2023-06-27T20:16:27.411583Z",
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841218",
      "status": "queued",
      "created": "2023-06-27T20:16:25.434094Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841218,
        "createdAt": "2023-06-27T20:16:25.434094Z",
        "updatedAt": "2023-06-27T20:16:25.434094Z",
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841143",
      "status": "queued",
      "created": "2023-06-27T20:16:24.427807Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841143,
        "createdAt": "2023-06-27T20:16:24.427807Z",
        "updatedAt": "2023-06-27T20:16:24.427807Z",
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163775082",
      "status": "queued",
      "created": "2023-06-27T19:59:49.249904Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163775082,
        "createdAt": "2023-06-27T19:59:49.249904Z",
        "updatedAt": "2023-06-27T19:59:49.249904Z",
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774986",
      "status": "queued",
      "created": "2023-06-27T19:59:48.26485Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774986,
        "createdAt": "2023-06-27T19:59:48.26485Z",
        "updatedAt": "2023-06-27T19:59:48.26485Z",
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774921",
      "status": "queued",
      "created": "2023-06-27T19:59:47.258059Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774921,
        "createdAt": "2023-06-27T19:59:47.258059Z",
        "updatedAt": "2023-06-27T19:59:47.258059Z",
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774857",
      "status": "queued",
      "created": "2023-06-27T19:59:46.24915Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774857,
        "createdAt": "2023-06-27T19:59:46.24915Z",
        "updatedAt": "2023-06-27T19:59:46.24915Z",
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774792",
      "status": "queued",
      "created": "2023-06-27T19:59:45.30576Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774792,
        "createdAt": "2023-06-27T19:59:45.30576Z",
        "updatedAt": "2023-06-27T19:59:45.30576Z",
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163754421",
      "status": "queued",
      "created": "2023-06-27T19:54:37.927014Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163754421,
        "createdAt": "2023-06-27T19:54:37.927014Z",
        "updatedAt": "2023-06-27T19:54:37.927014Z",
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 89,
  "results": [
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841338",
      "status": "queued",
      "created": "2023-06-27T20:16:27.411583Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841338,
        "createdAt": "2023-06-27T20:16:27.411583Z",
        "updatedAt": "2023-06-27T20:16:27.411583Z",
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841218",
      "status": "queued",
      "created": "2023-06-27T20:16:25.434094Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841218,
        "createdAt": "2023-06-27T20:16:25.434094Z",
        "updatedAt": "2023-06-27T20:16:25.434094Z",
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841143",
      "status": "queued",
      "created": "2023-06-27T20:16:24.427807Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841143,
        "createdAt": "2023-06-27T20:16:24.427807Z",
        "updatedAt": "2023-06-27T20:16:24.427807Z",
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163775082",
      "status": "queued",
      "created": "2023-06-27T19:59:49.249904Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163775082,
        "createdAt": "2023-06-27T19:59:49.249904Z",
        "updatedAt": "2023-06-27T19:59:49.249904Z",
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774986",
      "status": "queued",
      "created": "2023-06-27T19:59:48.26485Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774986,
        "createdAt": "2023-06-27T19:59:48.26485Z",
        "updatedAt": "2023-06-27T19:59:48.26485Z",
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774921",
      "status": "queued",
      "created": "2023-06-27T19:59:47.258059Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774921,
        "createdAt": "2023-06-27T19:59:47.258059Z",
        "updatedAt": "2023-06-27T19:59:47.258059Z",
        "cid": "bafkreicubxlymiowhyhnmdzzivjo4cy3rdalra4xonl34lmcqqb7nomkfe",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774857",
      "status": "queued",
      "created": "2023-06-27T19:59:46.24915Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774857,
        "createdAt": "2023-06-27T19:59:46.24915Z",
        "updatedAt": "2023-06-27T19:59:46.24915Z",
        "cid": "bafkreifhs6p33k4przorhjwg2gx2kx3a3o3cbzju3yp64a3agrh2gbfpni",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774792",
      "status": "queued",
      "created": "2023-06-27T19:59:45.30576Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774792,
        "createdAt": "2023-06-27T19:59:45.30576Z",
        "updatedAt": "2023-06-27T19:59:45.30576Z",
        "cid": "bafkreibqwmg4p4lqfl6rorkxpdfmrdnzlynf2vilw7yew6rx624wyqaygm",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163754421",
      "status": "queued",
      "created": "2023-06-27T19:54:37.927014Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163754421,
        "createdAt": "2023-06-27T19:54:37.927014Z",
        "updatedAt": "2023-06-27T19:54:37.927014Z",
        "cid": "bafkreifcmezksbdnb5kpige2yixtazhhmsk4d6rydawvgymrpe6pyy5sdy",
        "name": "a723a7ce-96ed-4f26-ae4b-c24647706893",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 89,
  "results": {}
}
```
## Can delete pin with requestid '163841568' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/163841568
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
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 27 Jun 2023 20:21:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
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
## Can delete pin with requestid '163841338' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/163841338
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
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 27 Jun 2023 20:21:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
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
## Can delete pin with requestid '163841218' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/163841218
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
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 27 Jun 2023 20:21:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
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
## Can delete pin with requestid '163841143' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)


### Details

#### Request
```
DELETE https://api.estuary.tech/pinning/pins/163841143
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
  "connection": "close",
  "content-length": "0",
  "date": "Tue, 27 Jun 2023 20:21:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
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
## Can delete all pins created during compliance checks - ❌ FAILED

### Expectations (4/5 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '0' (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:30:33)

  ⚠️ FetchError: request to https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T19%3A59%3A48.264Z failed, reason: read ECONNRESET
    at ClientRequest.<anonymous> (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/node-fetch/src/index.js:108:11)
    at ClientRequest.emit (node:events:513:28)
    at ClientRequest.emit (node:domain:489:12)
    at TLSSocket.socketErrorListener (node:_http_client:502:9)
    at TLSSocket.emit (node:events:513:28)
    at TLSSocket.emit (node:domain:489:12)
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at processTicksAndRejections (node:internal/process/task_queues:82:21)

  ⚠️ FetchError: request to https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued failed, reason: read ECONNRESET
    at ClientRequest.<anonymous> (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/node-fetch/src/index.js:108:11)
    at ClientRequest.emit (node:events:513:28)
    at ClientRequest.emit (node:domain:489:12)
    at TLSSocket.socketErrorListener (node:_http_client:502:9)
    at TLSSocket.emit (node:events:513:28)
    at TLSSocket.emit (node:domain:489:12)
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at processTicksAndRejections (node:internal/process/task_queues:82:21)


### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 20:21:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin",
  "x-appversion": "v0.4.3-11-g38ab623"
}
```
##### Body
```json
{
  "count": 93,
  "results": [
    {
      "requestid": "163843909",
      "status": "queued",
      "created": "2023-06-27T20:17:05.870226Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifevo5sixmowahj2nzrlupj6eqbwsbar2uqt36vpg6hihohx3o2sa",
        "name": "595a1f8c-0342-42f3-b138-522d97b6a50c",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163843909,
        "createdAt": "2023-06-27T20:17:05.870226Z",
        "updatedAt": "2023-06-27T20:17:05.870226Z",
        "cid": "bafkreifevo5sixmowahj2nzrlupj6eqbwsbar2uqt36vpg6hihohx3o2sa",
        "name": "595a1f8c-0342-42f3-b138-522d97b6a50c",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163843708",
      "status": "queued",
      "created": "2023-06-27T20:17:02.877386Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreib6metwc2ubpgvpsnf62hnjapvaoldwlp3elfpaabby7czpdq33am",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163843708,
        "createdAt": "2023-06-27T20:17:02.877386Z",
        "updatedAt": "2023-06-27T20:17:02.877386Z",
        "cid": "bafkreib6metwc2ubpgvpsnf62hnjapvaoldwlp3elfpaabby7czpdq33am",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163843570",
      "status": "queued",
      "created": "2023-06-27T20:17:00.727237Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifl62mam3fpz2n5iof7umwzqyct2gn73j4az2eh6itmvb5nx2ndim",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163843570,
        "createdAt": "2023-06-27T20:17:00.727237Z",
        "updatedAt": "2023-06-27T20:17:00.727237Z",
        "cid": "bafkreifl62mam3fpz2n5iof7umwzqyct2gn73j4az2eh6itmvb5nx2ndim",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163843479",
      "status": "queued",
      "created": "2023-06-27T20:16:59.746086Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihto6p7aealm45jdkha4rndkmzwxiqpfgpvy7orkhnwx3yrdp5kbu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163843479,
        "createdAt": "2023-06-27T20:16:59.746086Z",
        "updatedAt": "2023-06-27T20:16:59.746086Z",
        "cid": "bafkreihto6p7aealm45jdkha4rndkmzwxiqpfgpvy7orkhnwx3yrdp5kbu",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841338",
      "status": "queued",
      "created": "2023-06-27T20:16:27.411583Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841338,
        "createdAt": "2023-06-27T20:16:27.411583Z",
        "updatedAt": "2023-06-27T20:16:27.411583Z",
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841218",
      "status": "queued",
      "created": "2023-06-27T20:16:25.434094Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841218,
        "createdAt": "2023-06-27T20:16:25.434094Z",
        "updatedAt": "2023-06-27T20:16:25.434094Z",
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841143",
      "status": "queued",
      "created": "2023-06-27T20:16:24.427807Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841143,
        "createdAt": "2023-06-27T20:16:24.427807Z",
        "updatedAt": "2023-06-27T20:16:24.427807Z",
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163775082",
      "status": "queued",
      "created": "2023-06-27T19:59:49.249904Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163775082,
        "createdAt": "2023-06-27T19:59:49.249904Z",
        "updatedAt": "2023-06-27T19:59:49.249904Z",
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774986",
      "status": "queued",
      "created": "2023-06-27T19:59:48.26485Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774986,
        "createdAt": "2023-06-27T19:59:48.26485Z",
        "updatedAt": "2023-06-27T19:59:48.26485Z",
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 93,
  "results": [
    {
      "requestid": "163843909",
      "status": "queued",
      "created": "2023-06-27T20:17:05.870226Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifevo5sixmowahj2nzrlupj6eqbwsbar2uqt36vpg6hihohx3o2sa",
        "name": "595a1f8c-0342-42f3-b138-522d97b6a50c",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163843909,
        "createdAt": "2023-06-27T20:17:05.870226Z",
        "updatedAt": "2023-06-27T20:17:05.870226Z",
        "cid": "bafkreifevo5sixmowahj2nzrlupj6eqbwsbar2uqt36vpg6hihohx3o2sa",
        "name": "595a1f8c-0342-42f3-b138-522d97b6a50c",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163843708",
      "status": "queued",
      "created": "2023-06-27T20:17:02.877386Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreib6metwc2ubpgvpsnf62hnjapvaoldwlp3elfpaabby7czpdq33am",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163843708,
        "createdAt": "2023-06-27T20:17:02.877386Z",
        "updatedAt": "2023-06-27T20:17:02.877386Z",
        "cid": "bafkreib6metwc2ubpgvpsnf62hnjapvaoldwlp3elfpaabby7czpdq33am",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163843570",
      "status": "queued",
      "created": "2023-06-27T20:17:00.727237Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreifl62mam3fpz2n5iof7umwzqyct2gn73j4az2eh6itmvb5nx2ndim",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163843570,
        "createdAt": "2023-06-27T20:17:00.727237Z",
        "updatedAt": "2023-06-27T20:17:00.727237Z",
        "cid": "bafkreifl62mam3fpz2n5iof7umwzqyct2gn73j4az2eh6itmvb5nx2ndim",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163843479",
      "status": "queued",
      "created": "2023-06-27T20:16:59.746086Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihto6p7aealm45jdkha4rndkmzwxiqpfgpvy7orkhnwx3yrdp5kbu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163843479,
        "createdAt": "2023-06-27T20:16:59.746086Z",
        "updatedAt": "2023-06-27T20:16:59.746086Z",
        "cid": "bafkreihto6p7aealm45jdkha4rndkmzwxiqpfgpvy7orkhnwx3yrdp5kbu",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841568",
      "status": "queued",
      "created": "2023-06-27T20:16:30.426959Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841568,
        "createdAt": "2023-06-27T20:16:30.426959Z",
        "updatedAt": "2023-06-27T20:16:30.426959Z",
        "cid": "bafkreih3vexsbwveuw4cxcp5eudwjycvuiwnknxsqt7uuuw3ddiorw25aa",
        "name": "8d711c6a-9691-4996-804d-5c6752f40bf4",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841338",
      "status": "queued",
      "created": "2023-06-27T20:16:27.411583Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841338,
        "createdAt": "2023-06-27T20:16:27.411583Z",
        "updatedAt": "2023-06-27T20:16:27.411583Z",
        "cid": "bafkreidcft5duhil762jrurkfrs6eq6c4ok7mrb2dioy4g3ycjrz5p4y54",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841218",
      "status": "queued",
      "created": "2023-06-27T20:16:25.434094Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841218,
        "createdAt": "2023-06-27T20:16:25.434094Z",
        "updatedAt": "2023-06-27T20:16:25.434094Z",
        "cid": "bafkreic4rem2nagckbfx7ql2e4e7itf7mtpqsh2uw4rws2ibu7c22dx4mq",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163841143",
      "status": "queued",
      "created": "2023-06-27T20:16:24.427807Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163841143,
        "createdAt": "2023-06-27T20:16:24.427807Z",
        "updatedAt": "2023-06-27T20:16:24.427807Z",
        "cid": "bafkreihlwubmmhgytyv6jac3pdmgjm32bzl6a3mpgprokc54voampvukd4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163775082",
      "status": "queued",
      "created": "2023-06-27T19:59:49.249904Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163775082,
        "createdAt": "2023-06-27T19:59:49.249904Z",
        "updatedAt": "2023-06-27T19:59:49.249904Z",
        "cid": "bafkreih3zgau7yecdlkuv6ed5vgbzwgwuzmdggxrvk3itarwqltxaizloy",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    },
    {
      "requestid": "163774986",
      "status": "queued",
      "created": "2023-06-27T19:59:48.26485Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 163774986,
        "createdAt": "2023-06-27T19:59:48.26485Z",
        "updatedAt": "2023-06-27T19:59:48.26485Z",
        "cid": "bafkreife3mimx2354roigvbprtyvsfdcwp5mhpiivple3aez76inay3fj4",
        "name": "",
        "userId": 299,
        "description": "",
        "size": 0,
        "type": 0,
        "active": false,
        "offloaded": false,
        "replication": 6,
        "aggregatedIn": 0,
        "aggregate": false,
        "pinning": false,
        "pinMeta": "{\"createdBy\":\"@ipfs-shipyard/pinning-service-compliance\"}",
        "replace": false,
        "origins": "",
        "failed": false,
        "location": "SHUTTLE4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1",
        "dagSplit": false,
        "splitFrom": 0,
        "pinningStatus": "",
        "dealStatus": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 93,
  "results": {}
}
```
