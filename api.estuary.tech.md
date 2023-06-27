
<script src="./telemetry.js"></script>
# https://api.estuary.tech/pinning compliance:

Execution Date: 2023-06-27T23:16:48.005Z

Revision: [f6edd8c](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/f6edd8c)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.estuary.tech.md)

## Summary (3/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4'](#pins-post-of-cid-bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='7eb8533e-c5fe-48d7-a75f-6476b2bf76c9'](#can-create-a-pin-with-name7eb8533e-c5fe-48d7-a75f-6476b2bf76c9----failed)

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
  "date": "Tue, 27 Jun 2023 23:07:14 GMT",
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
  "date": "Tue, 27 Jun 2023 23:07:15 GMT",
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
## Pins post of CID 'bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4' - ❌ FAILED

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
{"cid":"bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Tue, 27 Jun 2023 23:07:16 GMT",
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
  "date": "Tue, 27 Jun 2023 23:07:18 GMT",
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
{"cid":"bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Tue, 27 Jun 2023 23:07:17 GMT",
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
  "date": "Tue, 27 Jun 2023 23:07:18 GMT",
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
      "requestid": "164476428",
      "status": "queued",
      "created": "2023-06-27T23:07:17.091621Z",
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
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476428,
        "createdAt": "2023-06-27T23:07:17.091621Z",
        "updatedAt": "2023-06-27T23:07:17.091621Z",
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
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
      "requestid": "164476377",
      "status": "queued",
      "created": "2023-06-27T23:07:16.078985Z",
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
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476377,
        "createdAt": "2023-06-27T23:07:16.078985Z",
        "updatedAt": "2023-06-27T23:07:16.078985Z",
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
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
      "requestid": "164476428",
      "status": "queued",
      "created": "2023-06-27T23:07:17.091621Z",
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
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476428,
        "createdAt": "2023-06-27T23:07:17.091621Z",
        "updatedAt": "2023-06-27T23:07:17.091621Z",
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
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
      "requestid": "164476377",
      "status": "queued",
      "created": "2023-06-27T23:07:16.078985Z",
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
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476377,
        "createdAt": "2023-06-27T23:07:16.078985Z",
        "updatedAt": "2023-06-27T23:07:16.078985Z",
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
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
  "date": "Tue, 27 Jun 2023 23:07:21 GMT",
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
  "date": "Tue, 27 Jun 2023 23:07:22 GMT",
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
## Pin's with requestid 'null' can have cid 'bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a' replaced with 'bafkreie6tbysxot2wusfpxf4ywx5jktqto6qdxuryytzod6obgdzp6hkhm' - ❌ FAILED

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
{"cid":"bafkreie6tbysxot2wusfpxf4ywx5jktqto6qdxuryytzod6obgdzp6hkhm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "date": "Tue, 27 Jun 2023 23:07:20 GMT",
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
{"cid":"bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "184",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:07:19 GMT",
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
    "details": "E_PUB_FAILED PUB failed write AddPin_4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1.diskqueue.000000.dat: no space left on device"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "E_PUB_FAILED PUB failed write AddPin_4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1.diskqueue.000000.dat: no space left on device"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name '7eb8533e-c5fe-48d7-a75f-6476b2bf76c9' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=7eb8533e-c5fe-48d7-a75f-6476b2bf76c9&match=exact
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
  "content-length": "1825",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:07:23 GMT",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
## Can retrieve pin with name '7EB8533E-C5FE-48D7-A75F-6476B2BF76C9' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=7EB8533E-C5FE-48D7-A75F-6476B2BF76C9&match=iexact
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
  "content-length": "1825",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:07:24 GMT",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
## Can retrieve pin with name 'c5fe-48d7-a75f-647' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=c5fe-48d7-a75f-647&match=partial
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
  "content-length": "1825",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:07:25 GMT",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
## Can retrieve pin with name 'C5FE-48D7-A75F-647' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.estuary.tech/pinning/pins?name=C5FE-48D7-A75F-647&match=ipartial
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
  "content-length": "1825",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:07:26 GMT",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
## Can create a pin with name='7eb8533e-c5fe-48d7-a75f-6476b2bf76c9' - ❌ FAILED

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
{"cid":"bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q","name":"7eb8533e-c5fe-48d7-a75f-6476b2bf76c9","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "content-length": "184",
  "content-type": "application/json; charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:07:22 GMT",
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
    "details": "E_PUB_FAILED PUB failed write AddPin_4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1.diskqueue.000000.dat: no space left on device"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "Internal Server Error",
    "details": "E_PUB_FAILED PUB failed write AddPin_4352dc36-8c94-42b6-a18f-c75476b23a39HANDLE1.diskqueue.000000.dat: no space left on device"
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
  "date": "Tue, 27 Jun 2023 23:07:27 GMT",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476574",
      "status": "queued",
      "created": "2023-06-27T23:07:19.258753Z",
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
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476574,
        "createdAt": "2023-06-27T23:07:19.258753Z",
        "updatedAt": "2023-06-27T23:07:19.258753Z",
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
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
      "requestid": "164476428",
      "status": "queued",
      "created": "2023-06-27T23:07:17.091621Z",
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
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476428,
        "createdAt": "2023-06-27T23:07:17.091621Z",
        "updatedAt": "2023-06-27T23:07:17.091621Z",
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
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
      "requestid": "164476377",
      "status": "queued",
      "created": "2023-06-27T23:07:16.078985Z",
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
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476377,
        "createdAt": "2023-06-27T23:07:16.078985Z",
        "updatedAt": "2023-06-27T23:07:16.078985Z",
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476574",
      "status": "queued",
      "created": "2023-06-27T23:07:19.258753Z",
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
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476574,
        "createdAt": "2023-06-27T23:07:19.258753Z",
        "updatedAt": "2023-06-27T23:07:19.258753Z",
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
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
      "requestid": "164476428",
      "status": "queued",
      "created": "2023-06-27T23:07:17.091621Z",
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
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476428,
        "createdAt": "2023-06-27T23:07:17.091621Z",
        "updatedAt": "2023-06-27T23:07:17.091621Z",
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
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
      "requestid": "164476377",
      "status": "queued",
      "created": "2023-06-27T23:07:16.078985Z",
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
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476377,
        "createdAt": "2023-06-27T23:07:16.078985Z",
        "updatedAt": "2023-06-27T23:07:16.078985Z",
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
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
  "date": "Tue, 27 Jun 2023 23:07:27 GMT",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476574",
      "status": "queued",
      "created": "2023-06-27T23:07:19.258753Z",
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
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476574,
        "createdAt": "2023-06-27T23:07:19.258753Z",
        "updatedAt": "2023-06-27T23:07:19.258753Z",
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
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
      "requestid": "164476428",
      "status": "queued",
      "created": "2023-06-27T23:07:17.091621Z",
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
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476428,
        "createdAt": "2023-06-27T23:07:17.091621Z",
        "updatedAt": "2023-06-27T23:07:17.091621Z",
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
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
      "requestid": "164476377",
      "status": "queued",
      "created": "2023-06-27T23:07:16.078985Z",
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
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476377,
        "createdAt": "2023-06-27T23:07:16.078985Z",
        "updatedAt": "2023-06-27T23:07:16.078985Z",
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
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
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476574",
      "status": "queued",
      "created": "2023-06-27T23:07:19.258753Z",
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
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476574,
        "createdAt": "2023-06-27T23:07:19.258753Z",
        "updatedAt": "2023-06-27T23:07:19.258753Z",
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
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
      "requestid": "164476428",
      "status": "queued",
      "created": "2023-06-27T23:07:17.091621Z",
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
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476428,
        "createdAt": "2023-06-27T23:07:17.091621Z",
        "updatedAt": "2023-06-27T23:07:17.091621Z",
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
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
      "requestid": "164476377",
      "status": "queued",
      "created": "2023-06-27T23:07:16.078985Z",
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
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476377,
        "createdAt": "2023-06-27T23:07:16.078985Z",
        "updatedAt": "2023-06-27T23:07:16.078985Z",
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
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
## Can delete pin with requestid '164476770' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/164476770
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
  "date": "Tue, 27 Jun 2023 23:12:07 GMT",
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
## Can delete pin with requestid '164476574' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/164476574
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
  "date": "Tue, 27 Jun 2023 23:12:07 GMT",
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
## Can delete pin with requestid '164476428' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/164476428
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
  "date": "Tue, 27 Jun 2023 23:12:08 GMT",
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
## Can delete pin with requestid '164476377' - 🟢 SUCCESS

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
DELETE https://api.estuary.tech/pinning/pins/164476377
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
  "date": "Tue, 27 Jun 2023 23:12:09 GMT",
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
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '0' (failure)





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
  "date": "Tue, 27 Jun 2023 23:16:47 GMT",
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
      "requestid": "164505015",
      "status": "queued",
      "created": "2023-06-27T23:14:27.832563Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicpwdqxhglmwqdactmqriacpdlgnn44pxwx7mdgu7szgtyh3zpxpm",
        "name": "9839318a-6a25-4797-9008-df6597c4a9dd",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164505015,
        "createdAt": "2023-06-27T23:14:27.832563Z",
        "updatedAt": "2023-06-27T23:14:27.832563Z",
        "cid": "bafkreicpwdqxhglmwqdactmqriacpdlgnn44pxwx7mdgu7szgtyh3zpxpm",
        "name": "9839318a-6a25-4797-9008-df6597c4a9dd",
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
      "requestid": "164504804",
      "status": "queued",
      "created": "2023-06-27T23:14:24.741243Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigowcjb43i7k6bujudpzouwc65e546k33m2znbra3hwxv7yrtsauu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164504804,
        "createdAt": "2023-06-27T23:14:24.741243Z",
        "updatedAt": "2023-06-27T23:14:24.741243Z",
        "cid": "bafkreigowcjb43i7k6bujudpzouwc65e546k33m2znbra3hwxv7yrtsauu",
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
      "requestid": "164504663",
      "status": "queued",
      "created": "2023-06-27T23:14:22.694589Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihpkydgiflw3q6ut4ckvcrtxqqvf2ecigi5q4ufjeqbvkv3rn3vcm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164504663,
        "createdAt": "2023-06-27T23:14:22.694589Z",
        "updatedAt": "2023-06-27T23:14:22.694589Z",
        "cid": "bafkreihpkydgiflw3q6ut4ckvcrtxqqvf2ecigi5q4ufjeqbvkv3rn3vcm",
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
      "requestid": "164504585",
      "status": "queued",
      "created": "2023-06-27T23:14:21.695466Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreielbrq3wrq5yhktlamwsbwf4zcefnxqean3ogerwisamsuekewaha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164504585,
        "createdAt": "2023-06-27T23:14:21.695466Z",
        "updatedAt": "2023-06-27T23:14:21.695466Z",
        "cid": "bafkreielbrq3wrq5yhktlamwsbwf4zcefnxqean3ogerwisamsuekewaha",
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
      "requestid": "164497083",
      "status": "queued",
      "created": "2023-06-27T23:12:29.40223Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif2yxmjzstcizona5zntswjl3okhk6z7ymtq55dmqj25qvvblvzsu",
        "name": "1b4c68bd-e2f3-4356-976f-0c09128af34b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164497083,
        "createdAt": "2023-06-27T23:12:29.40223Z",
        "updatedAt": "2023-06-27T23:12:29.40223Z",
        "cid": "bafkreif2yxmjzstcizona5zntswjl3okhk6z7ymtq55dmqj25qvvblvzsu",
        "name": "1b4c68bd-e2f3-4356-976f-0c09128af34b",
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
      "requestid": "164496878",
      "status": "queued",
      "created": "2023-06-27T23:12:26.390761Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic3zxv6scdxaym6sz7i7qvmvv5mrfrafcufbetveg5wtansbbp33a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164496878,
        "createdAt": "2023-06-27T23:12:26.390761Z",
        "updatedAt": "2023-06-27T23:12:26.390761Z",
        "cid": "bafkreic3zxv6scdxaym6sz7i7qvmvv5mrfrafcufbetveg5wtansbbp33a",
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
      "requestid": "164496745",
      "status": "queued",
      "created": "2023-06-27T23:12:24.285269Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiftbux6ui2kq27d2krvpilswcdvpisjvnd5of377y3gpmm5vrfdue",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164496745,
        "createdAt": "2023-06-27T23:12:24.285269Z",
        "updatedAt": "2023-06-27T23:12:24.285269Z",
        "cid": "bafkreiftbux6ui2kq27d2krvpilswcdvpisjvnd5of377y3gpmm5vrfdue",
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
      "requestid": "164496671",
      "status": "queued",
      "created": "2023-06-27T23:12:23.398937Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigigue5ljzwgw4lefdpqdzbmig7fxn7cl5ye2sem4j2bpf3ioodge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164496671,
        "createdAt": "2023-06-27T23:12:23.398937Z",
        "updatedAt": "2023-06-27T23:12:23.398937Z",
        "cid": "bafkreigigue5ljzwgw4lefdpqdzbmig7fxn7cl5ye2sem4j2bpf3ioodge",
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
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
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
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
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
      "requestid": "164505015",
      "status": "queued",
      "created": "2023-06-27T23:14:27.832563Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicpwdqxhglmwqdactmqriacpdlgnn44pxwx7mdgu7szgtyh3zpxpm",
        "name": "9839318a-6a25-4797-9008-df6597c4a9dd",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164505015,
        "createdAt": "2023-06-27T23:14:27.832563Z",
        "updatedAt": "2023-06-27T23:14:27.832563Z",
        "cid": "bafkreicpwdqxhglmwqdactmqriacpdlgnn44pxwx7mdgu7szgtyh3zpxpm",
        "name": "9839318a-6a25-4797-9008-df6597c4a9dd",
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
      "requestid": "164504804",
      "status": "queued",
      "created": "2023-06-27T23:14:24.741243Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigowcjb43i7k6bujudpzouwc65e546k33m2znbra3hwxv7yrtsauu",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164504804,
        "createdAt": "2023-06-27T23:14:24.741243Z",
        "updatedAt": "2023-06-27T23:14:24.741243Z",
        "cid": "bafkreigowcjb43i7k6bujudpzouwc65e546k33m2znbra3hwxv7yrtsauu",
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
      "requestid": "164504663",
      "status": "queued",
      "created": "2023-06-27T23:14:22.694589Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreihpkydgiflw3q6ut4ckvcrtxqqvf2ecigi5q4ufjeqbvkv3rn3vcm",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164504663,
        "createdAt": "2023-06-27T23:14:22.694589Z",
        "updatedAt": "2023-06-27T23:14:22.694589Z",
        "cid": "bafkreihpkydgiflw3q6ut4ckvcrtxqqvf2ecigi5q4ufjeqbvkv3rn3vcm",
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
      "requestid": "164504585",
      "status": "queued",
      "created": "2023-06-27T23:14:21.695466Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreielbrq3wrq5yhktlamwsbwf4zcefnxqean3ogerwisamsuekewaha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164504585,
        "createdAt": "2023-06-27T23:14:21.695466Z",
        "updatedAt": "2023-06-27T23:14:21.695466Z",
        "cid": "bafkreielbrq3wrq5yhktlamwsbwf4zcefnxqean3ogerwisamsuekewaha",
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
      "requestid": "164497083",
      "status": "queued",
      "created": "2023-06-27T23:12:29.40223Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreif2yxmjzstcizona5zntswjl3okhk6z7ymtq55dmqj25qvvblvzsu",
        "name": "1b4c68bd-e2f3-4356-976f-0c09128af34b",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164497083,
        "createdAt": "2023-06-27T23:12:29.40223Z",
        "updatedAt": "2023-06-27T23:12:29.40223Z",
        "cid": "bafkreif2yxmjzstcizona5zntswjl3okhk6z7ymtq55dmqj25qvvblvzsu",
        "name": "1b4c68bd-e2f3-4356-976f-0c09128af34b",
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
      "requestid": "164496878",
      "status": "queued",
      "created": "2023-06-27T23:12:26.390761Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreic3zxv6scdxaym6sz7i7qvmvv5mrfrafcufbetveg5wtansbbp33a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164496878,
        "createdAt": "2023-06-27T23:12:26.390761Z",
        "updatedAt": "2023-06-27T23:12:26.390761Z",
        "cid": "bafkreic3zxv6scdxaym6sz7i7qvmvv5mrfrafcufbetveg5wtansbbp33a",
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
      "requestid": "164496745",
      "status": "queued",
      "created": "2023-06-27T23:12:24.285269Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiftbux6ui2kq27d2krvpilswcdvpisjvnd5of377y3gpmm5vrfdue",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164496745,
        "createdAt": "2023-06-27T23:12:24.285269Z",
        "updatedAt": "2023-06-27T23:12:24.285269Z",
        "cid": "bafkreiftbux6ui2kq27d2krvpilswcdvpisjvnd5of377y3gpmm5vrfdue",
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
      "requestid": "164496671",
      "status": "queued",
      "created": "2023-06-27T23:12:23.398937Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigigue5ljzwgw4lefdpqdzbmig7fxn7cl5ye2sem4j2bpf3ioodge",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164496671,
        "createdAt": "2023-06-27T23:12:23.398937Z",
        "updatedAt": "2023-06-27T23:12:23.398937Z",
        "cid": "bafkreigigue5ljzwgw4lefdpqdzbmig7fxn7cl5ye2sem4j2bpf3ioodge",
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
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
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
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
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
  "date": "Tue, 27 Jun 2023 23:12:06 GMT",
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
      "requestid": "164479304",
      "status": "queued",
      "created": "2023-06-27T23:07:59.952195Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigc4jqn4ueer6z42utbfczz76eazzjukb3julgscr5k3u5p6wcftu",
        "name": "57621d0d-81ca-48d2-931e-f2121516fcb4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164479304,
        "createdAt": "2023-06-27T23:07:59.952195Z",
        "updatedAt": "2023-06-27T23:07:59.952195Z",
        "cid": "bafkreigc4jqn4ueer6z42utbfczz76eazzjukb3julgscr5k3u5p6wcftu",
        "name": "57621d0d-81ca-48d2-931e-f2121516fcb4",
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
      "requestid": "164479082",
      "status": "queued",
      "created": "2023-06-27T23:07:56.857897Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicrnsd52b3ch4ylo3k2cmmkbr6vzxka4ugx56zvr32kkwh4a7d2ea",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164479082,
        "createdAt": "2023-06-27T23:07:56.857897Z",
        "updatedAt": "2023-06-27T23:07:56.857897Z",
        "cid": "bafkreicrnsd52b3ch4ylo3k2cmmkbr6vzxka4ugx56zvr32kkwh4a7d2ea",
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
      "requestid": "164478950",
      "status": "queued",
      "created": "2023-06-27T23:07:54.82532Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaci7alwzfeegplkbn77ab5p2a22egopltzqgxh5vvobuekn2jrpy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164478950,
        "createdAt": "2023-06-27T23:07:54.82532Z",
        "updatedAt": "2023-06-27T23:07:54.82532Z",
        "cid": "bafkreiaci7alwzfeegplkbn77ab5p2a22egopltzqgxh5vvobuekn2jrpy",
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
      "requestid": "164478909",
      "status": "queued",
      "created": "2023-06-27T23:07:53.824675Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicpdkpz373culgxbrearj7ucepjlz6htmkcfl5tz3y2khlhnudioe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164478909,
        "createdAt": "2023-06-27T23:07:53.824675Z",
        "updatedAt": "2023-06-27T23:07:53.824675Z",
        "cid": "bafkreicpdkpz373culgxbrearj7ucepjlz6htmkcfl5tz3y2khlhnudioe",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476574",
      "status": "queued",
      "created": "2023-06-27T23:07:19.258753Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476574,
        "createdAt": "2023-06-27T23:07:19.258753Z",
        "updatedAt": "2023-06-27T23:07:19.258753Z",
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
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
      "requestid": "164476428",
      "status": "queued",
      "created": "2023-06-27T23:07:17.091621Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476428,
        "createdAt": "2023-06-27T23:07:17.091621Z",
        "updatedAt": "2023-06-27T23:07:17.091621Z",
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
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
      "requestid": "164476377",
      "status": "queued",
      "created": "2023-06-27T23:07:16.078985Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476377,
        "createdAt": "2023-06-27T23:07:16.078985Z",
        "updatedAt": "2023-06-27T23:07:16.078985Z",
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
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
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
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
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
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
      "requestid": "164479304",
      "status": "queued",
      "created": "2023-06-27T23:07:59.952195Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigc4jqn4ueer6z42utbfczz76eazzjukb3julgscr5k3u5p6wcftu",
        "name": "57621d0d-81ca-48d2-931e-f2121516fcb4",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164479304,
        "createdAt": "2023-06-27T23:07:59.952195Z",
        "updatedAt": "2023-06-27T23:07:59.952195Z",
        "cid": "bafkreigc4jqn4ueer6z42utbfczz76eazzjukb3julgscr5k3u5p6wcftu",
        "name": "57621d0d-81ca-48d2-931e-f2121516fcb4",
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
      "requestid": "164479082",
      "status": "queued",
      "created": "2023-06-27T23:07:56.857897Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicrnsd52b3ch4ylo3k2cmmkbr6vzxka4ugx56zvr32kkwh4a7d2ea",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164479082,
        "createdAt": "2023-06-27T23:07:56.857897Z",
        "updatedAt": "2023-06-27T23:07:56.857897Z",
        "cid": "bafkreicrnsd52b3ch4ylo3k2cmmkbr6vzxka4ugx56zvr32kkwh4a7d2ea",
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
      "requestid": "164478950",
      "status": "queued",
      "created": "2023-06-27T23:07:54.82532Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaci7alwzfeegplkbn77ab5p2a22egopltzqgxh5vvobuekn2jrpy",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164478950,
        "createdAt": "2023-06-27T23:07:54.82532Z",
        "updatedAt": "2023-06-27T23:07:54.82532Z",
        "cid": "bafkreiaci7alwzfeegplkbn77ab5p2a22egopltzqgxh5vvobuekn2jrpy",
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
      "requestid": "164478909",
      "status": "queued",
      "created": "2023-06-27T23:07:53.824675Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreicpdkpz373culgxbrearj7ucepjlz6htmkcfl5tz3y2khlhnudioe",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164478909,
        "createdAt": "2023-06-27T23:07:53.824675Z",
        "updatedAt": "2023-06-27T23:07:53.824675Z",
        "cid": "bafkreicpdkpz373culgxbrearj7ucepjlz6htmkcfl5tz3y2khlhnudioe",
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
      "requestid": "164476770",
      "status": "queued",
      "created": "2023-06-27T23:07:22.35494Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476770,
        "createdAt": "2023-06-27T23:07:22.35494Z",
        "updatedAt": "2023-06-27T23:07:22.35494Z",
        "cid": "bafkreih43ffhyw6hhysz2xttrdcmsgbkhawm33x3ebbwzj6uewfn4v2j5q",
        "name": "7eb8533e-c5fe-48d7-a75f-6476b2bf76c9",
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
      "requestid": "164476574",
      "status": "queued",
      "created": "2023-06-27T23:07:19.258753Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476574,
        "createdAt": "2023-06-27T23:07:19.258753Z",
        "updatedAt": "2023-06-27T23:07:19.258753Z",
        "cid": "bafkreiadkhzujjodooctbh6ppdod6rpsez4b6nuboa6jx57yvgnjgvo63a",
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
      "requestid": "164476428",
      "status": "queued",
      "created": "2023-06-27T23:07:17.091621Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476428,
        "createdAt": "2023-06-27T23:07:17.091621Z",
        "updatedAt": "2023-06-27T23:07:17.091621Z",
        "cid": "bafkreiaydjk6slxfpbfe6h2r6uozjq7clulp6pyqagmiws2agzdxxtsdha",
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
      "requestid": "164476377",
      "status": "queued",
      "created": "2023-06-27T23:07:16.078985Z",
      "delegates": [
        "/ip4/10.24.3.60/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.24.3.60/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
      ],
      "info": {},
      "pin": {
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
        "name": "",
        "origins": [],
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "content": {
        "id": 164476377,
        "createdAt": "2023-06-27T23:07:16.078985Z",
        "updatedAt": "2023-06-27T23:07:16.078985Z",
        "cid": "bafkreigd4kblrodzr7kvapqwj27fyegyxn7rwefgejtbhrnsmyhl5poht4",
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
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
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
        "/ip4/10.172.3.10/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/6746/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/udp/1065/quic/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9",
        "/ip4/23.227.172.66/tcp/25354/p2p/12D3KooWAHBqXekn3oPNHYs1F6ELBScZaUmEziuF5iHvEti5HGe9"
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
