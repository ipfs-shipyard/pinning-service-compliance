
# https://pin.crustcode.com/psa compliance:

Execution Date: 2022-09-23T19:42:16.091Z

Revision: [83e33c2](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/83e33c2)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/pin.crustcode.com.md)

## Summary (0/9 successful)

  ❌ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ❌ [Request with invalid token](#request-with-invalid-token----failed)

  ❌ [Pins post of CID 'bafkreig26i6u6enyvmjgcq4tn5nn7li7zwgwva6dxzki5tkf4726fmw5te'](#pins-post-of-cid-bafkreig26i6u6enyvmjgcq4tn5nn7li7zwgwva6dxzki5tkf4726fmw5te----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='c90350c6-fbdf-4032-a5f9-2de54c541e50'](#can-create-a-pin-with-namec90350c6-fbdf-4032-a5f9-2de54c541e50----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----failed)

## Request with no authentication token - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Response code is 401 (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

#### Response object doesn't match expected schema:

* "error" is required

* "Error" is not allowed

  
### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "27",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:43 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Empty Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Empty Signature"
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
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

#### Response object doesn't match expected schema:

* "error" is required

* "Error" is not allowed

  
### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:44 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'bafkreig26i6u6enyvmjgcq4tn5nn7li7zwgwva6dxzki5tkf4726fmw5te' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response object matches api spec schema (failure)

  ❌ Pinning status is either queued, pinning, or pinned (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

#### Response object doesn't match expected schema:

* "requestid" is required

* "status" is required

* "created" is required

* "pin" is required

* "delegates" is required

* "Error" is not allowed

  
### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreig26i6u6enyvmjgcq4tn5nn7li7zwgwva6dxzki5tkf4726fmw5te","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:45 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
DELETE https://pin.crustcode.com/psa/pins/null
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:47 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreiajc2g4fxwbdsgayj6fhsvro6u2ylivtndsfo4k4r4haqrbod4rgu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:46 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## List pin objects (GET /pins) in all states - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Response code is 200 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:48 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Get original pin via requestid - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins/null
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:51 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins/null
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:52 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pin's with requestid 'null' can have cid 'bafkreic7xr75zrpyzcd6fqonpux4tsingbi7rk3pzqcf2h22azd3vtgm2e' replaced with 'bafkreidyqgjamepz4dpuln7golsag2256elnpa26tiw54vf63zyqjrzote' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response code is 404: Original Pin's requestid cannot be found (failure)

  ❌ Response code is 200: New Pin's requestid can be found (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins/null
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
{"cid":"bafkreidyqgjamepz4dpuln7golsag2256elnpa26tiw54vf63zyqjrzote","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:50 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreic7xr75zrpyzcd6fqonpux4tsingbi7rk3pzqcf2h22azd3vtgm2e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:49 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'c90350c6-fbdf-4032-a5f9-2de54c541e50' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?name=c90350c6-fbdf-4032-a5f9-2de54c541e50&match=exact
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:53 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'C90350C6-FBDF-4032-A5F9-2DE54C541E50' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?name=C90350C6-FBDF-4032-A5F9-2DE54C541E50&match=iexact
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:54 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'fbdf-4032-a5f9-2de' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?name=fbdf-4032-a5f9-2de&match=partial
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:55 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'FBDF-4032-A5F9-2DE' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?name=FBDF-4032-A5F9-2DE&match=ipartial
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:56 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create a pin with name='c90350c6-fbdf-4032-a5f9-2de54c541e50' - ❌ FAILED

### Expectations (0/19 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Name matches name provided during creation (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreifi7fukl3rjyimrvbbdhorkqgfnvss2c7vgzbd2szxi3vzxn4w7fm","name":"c90350c6-fbdf-4032-a5f9-2de54c541e50","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:52 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreihfp5na3y5dq76gaofe5lq4kdbo2r23zwesdeywr2n6ituliqn2jq' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreihfp5na3y5dq76gaofe5lq4kdbo2r23zwesdeywr2n6ituliqn2jq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:58 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreiavsfv4ghv5z3uq4yvg4hwgvql3ys6fpfm2gakqkcyhihpwo5viaq' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreiavsfv4ghv5z3uq4yvg4hwgvql3ys6fpfm2gakqkcyhihpwo5viaq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:59 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreihsgxmfvl6pyq4wh2dhb6s7om4iyluzq5st7fohwac36eq6igqube' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreihsgxmfvl6pyq4wh2dhb6s7om4iyluzq5st7fohwac36eq6igqube","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:00 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreibu2cwrsbz2nuaoji7wymsdrad5hgq2hrivaqu7nmvy55suay2qo4' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreibu2cwrsbz2nuaoji7wymsdrad5hgq2hrivaqu7nmvy55suay2qo4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:01 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreicgbezcfppfoogra6urkedi6vnqzmnpvy66f2qvkcm4o2l47gogs4' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreicgbezcfppfoogra6urkedi6vnqzmnpvy66f2qvkcm4o2l47gogs4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:02 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigb3hk4hexx3nf6c5p6aoey3utvxhpk6l74p446sp4hb2zdsrcira' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreigb3hk4hexx3nf6c5p6aoey3utvxhpk6l74p446sp4hb2zdsrcira","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:03 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreib72km6elfpdymfh6c7fnjnotbfy6a2dkikyv4r2uumbgondfovni' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreib72km6elfpdymfh6c7fnjnotbfy6a2dkikyv4r2uumbgondfovni","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:04 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigprvnmujr6ugnttviyp6om7byl4is56mailsawbyndentzmt53ce' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreigprvnmujr6ugnttviyp6om7byl4is56mailsawbyndentzmt53ce","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:05 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreid3ee2q3oj6yvkdowgkg3b7q6nul3wqs7z4ysih3uckdwr6gwiboq' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreid3ee2q3oj6yvkdowgkg3b7q6nul3wqs7z4ysih3uckdwr6gwiboq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:06 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreidpvps35idnsipneitgqdmacbikiyz53ydo3esw5s4d5putzvftzm' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreidpvps35idnsipneitgqdmacbikiyz53ydo3esw5s4d5putzvftzm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:07 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreieqllj5cceha2tseh5g6t4rkkgyp2yibztswc7f2qpheaksdrzf2q' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreieqllj5cceha2tseh5g6t4rkkgyp2yibztswc7f2qpheaksdrzf2q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:08 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreiezwr3sy4vn33r2d2lkk2i3kmrhx2adkndaly2dab64drxv57mmpa' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreiezwr3sy4vn33r2d2lkk2i3kmrhx2adkndaly2dab64drxv57mmpa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:09 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigzc5zpn4wlhtyxbkxef4eh2et6owdx2mvx2kwunwauifzndfyg3i' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreigzc5zpn4wlhtyxbkxef4eh2et6owdx2mvx2kwunwauifzndfyg3i","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:10 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreif6fmr7sbqngn7plbkbfmnvc4ywrdauikvlhjlcjphw4nlcxwrknq' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreif6fmr7sbqngn7plbkbfmnvc4ywrdauikvlhjlcjphw4nlcxwrknq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:11 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigbfwkmbdigvoslrnp233t36earc4qfuldrr3oujewi2jh7vwk3du' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://pin.crustcode.com/psa/pins
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
{"cid":"bafkreigbfwkmbdigvoslrnp233t36earc4qfuldrr3oujewi2jh7vwk3du","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
401 Unauthorized
```
##### Headers
```json
{
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:12 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pagination: First page of pins - ❌ FAILED

### Expectations (0/5 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is greater than or equal to 15 (failure)

  ❌ Count is greater than the number of pins returned (failure)

  ❌ Number of pins returned defaults to 10 (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: First page result is null
    at testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:89:14)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:13 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pagination: Retrieve the next page of pins - ❌ FAILED

### Expectations (0/3 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Second page result is null
    at fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:119:17)
    at ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:184:31)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:212:7)
    at async testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:124:3)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-09-23T19%3A42%3A13.492Z
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:13 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (0/40 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is greater than or equal to 15 (failure)

  ❌ Count is greater than the number of pins returned (failure)

  ❌ Number of pins returned defaults to 10 (failure)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ TypeError: Cannot read properties of null (reading 'count')
    at testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:32:65)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: First page result is null
    at testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:89:14)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Second page result is null
    at fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:119:17)
    at ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:184:31)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.runExpectations (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:212:7)
    at async testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:124:3)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:41:57 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '0' (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:15 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can delete all pins created during compliance checks - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '0' (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-headers": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-origin": "*",
  "connection": "close",
  "content-length": "29",
  "content-type": "application/json",
  "date": "Fri, 23 Sep 2022 19:42:14 GMT",
  "server": "Caddy",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "Error": "Invalid Signature"
}
```

##### Body (as JSON)
```json
{
  "Error": "Invalid Signature"
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
