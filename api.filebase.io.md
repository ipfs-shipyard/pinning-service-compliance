
<script src="./telemetry.js"></script>
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2023-06-22T09:19:19.406Z

Revision: [d0df4e8](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/d0df4e8)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (2/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreicozz5hejerh32arjl2ta55izglrxvc2hpdia53yqq6pj75f2qn6a'](#pins-post-of-cid-bafkreicozz5hejerh32arjl2ta55izglrxvc2hpdia53yqq6pj75f2qn6a----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='76529643-2313-4e59-ac3e-6dc3dcd5e0a8'](#can-create-a-pin-with-name76529643-2313-4e59-ac3e-6dc3dcd5e0a8----failed)

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
GET https://api.filebase.io/v1/ipfs/pins
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
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db367f2bd782ccf-DFW",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:48 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fDJOfcDHEh3AZnRoSpC%2ByDI%2BE33nVj8QzY5jiwzy9yTX6rBiGTZtJ%2FJ9y5soJtg3dxhw2a396Z0mc4ZB24t2LiYzzu1ziuMGk4qxZYc5c%2F%2FOsNbHXVzoXCvR%2BoWt1jvlKw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9fa11f62-e087-4c94-bc4b-caec31ccbb0a",
  "x-xss-protection": "1; mode=block"
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
GET https://api.filebase.io/v1/ipfs/pins
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
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db367f8f810aa99-DFW",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:49 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NjGAriPDyTMeYEGYkpHiiglIUFK1xCsgpwWrdBKXb4KFMNXhbSmOrmhYlmCppBwOmGnJGCHCWvW0hBC4PdxzkVil4s5rOn%2BIeeqNwopfb8VvpBN3c0MOXMOE7sMuQkyinw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ec14a72a-495e-477e-89e1-308ed09f2587",
  "x-xss-protection": "1; mode=block"
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
## Pins post of CID 'bafkreicozz5hejerh32arjl2ta55izglrxvc2hpdia53yqq6pj75f2qn6a' - ❌ FAILED

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
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreicozz5hejerh32arjl2ta55izglrxvc2hpdia53yqq6pj75f2qn6a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db367ff3ac2aa97-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:50 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zUCbUZFDbbbpmTnigrfJu3%2FbNmih32E6eS10inar%2Fp%2BPmdt9o9%2BfNNLXc2ABzqKa5pewMnmKKPohb%2BUGee%2F6znOOQssTw%2FDODcUapNimfPA8tSPVmqSESbLS3QqoYuwjpw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=3%2FwyncCTM4a3IKf9xSsGqOHX5%2Btz%2FyypLjcFzSnQgmu1v5rTrcJtCQ3jLpx1or5RCCNoScWRraOS2rRAicIpiUBlkvV3FECIReXbpA8HiGwXNYa5RKBAE6PVxeKnwHBqhWBZQXtY4V2GtfW78%2BEMH0QY2s%2BblcedcrpfI%2ByQXgkLVeAFHILL5QUOdqwqJOJR42NlF%2BKiEXw90JLJhFQNbYjZM6P0QcwuAVBazMU%3D--mA2JIfWc7y5X%2BpcT--2DFBp36cKnM4I7pffd2OCQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:18:50 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "51b6d787-0980-44e4-a4ec-2c6b2a7ec0a1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
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
DELETE https://api.filebase.io/v1/ipfs/pins/null
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3680bbe49315c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:52 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZajsCXfMjk0IlGA44wUaOnYOmO%2BDtMhU7YnJjM8DapSD7YlFh8XYmSiYPZrp4ORd%2BRTLwZ6qSrw0yECwIgpxJ10Qs2yS%2BbuKKF6yRvFGIVb3tuqS%2FTr%2Bpd0BtI22vXLjjw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=GhMc2TYFW159veH2a49v9wtYzvohxb2uPvdJXSdgadiWcRhKSWijsgrH%2FyWM87x6kiV%2Bi0584F8tmyJIYnwkKOvUdCTrUzpzt242H9kQIMsnukm94iqWs1kkGsGJRD2Gd5n02AGGfToN3RIJlE%2F6XgCQlMYkrWitHiS2CsbGRV%2BYN6yJi6JlLwPi4jpARY7ADXcGuYDabsPaPanCQHqEhWjKvaam92iIg%2F26oug%3D--hyK1VIMrHUl3qHND--Xqq3Q7z0yCneAwnwOe05zw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:18:52 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8e0631c7-b159-4996-9444-4b7bb89fc41d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
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
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreigmffgdfwv7mwtx4uojle4iwr5ypgeacim75xfjhiwmmkhw4k326q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368057c3b2cce-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:51 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OkdzChmb%2BwqEAZCYR0wdje05gFh%2F0IQUkLBHuuEyXgXORSeV%2BHeBn4ltc5KZQeWkirW3fyR3fFr8ygNFsXYbPNtnG1oloc4l%2BrzDaiNSvMyYHrrddjYAxNagsanJ8bB2Lg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=sTdy56Y8Ppke1Up9GiQ4Ei28TdJE4338b7fWXYsuIjDN0ASwt%2F4R2VG0F2RR7Q2H6F%2Fc4pI3Sce7njffjn7E4HeB4YQBIEeVoRR5XJAuIw82YiatCHOsVGG6gQw7r8MKD6UT8vNozj5oTdadDxroD4JdFH%2Fj3OIIDe%2FXKSCDzGV1ntjZ%2FWkiHmcou%2FzMlozoU%2BmrJL4jAkXnFpernftHJnN1YWwtBjSFAlBW6nM%3D--QmrwUOAD3Bb7%2FNEk--eBZxrrukPoL2aKrBCM21cQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:18:51 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f6aea0de-c46a-4687-bf66-49d5fa9b8226",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3680cd9cae867-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:53 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GDN9aygxgeea1PEnJDRqwHlumRnJm5XJTCFM4p%2BA%2Fq8S7jMPmSoz2JFGaQjYmhhBX8bWwb55Y5bfjuhxia1HO1kJsENNjMj4pDv4vBXLjrrdxhGe96bA0I9qp%2FY%2F12ZoEA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f7cc3426-d9b8-4b98-a25c-72b22732f931",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins/null
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3681f9eeae98b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pRDHj38%2FXQqDWiblksHz0Hm%2BEgxzp0N1h01A%2FZCgIJwB0lIMy3VN905RVcIbsaCTuL%2BW8vlUFXXBT1XU8%2BOASSik3bDposZFXLiTSJBcUkhSJYyzGF2seMrHxHrJeRrOkQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "59d223a8-434b-45f5-8b0a-797fb01ea7d8",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
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
GET https://api.filebase.io/v1/ipfs/pins/null
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36825da39e98b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ruqsLovGEpxaFU6Ek%2FaqpbZumOCWQpKg4%2BmzdlsYz6Pz%2BJv3epwpqaOpI9tDslFFkCVHNYxSm%2BSTtLpEuYqsXpC9wAgUdljAPnUGBerENfGVpNLykq5fkYvMK2CKOLdu%2FA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "21a28fb5-8547-40be-9089-dc559c21cf52",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pin's with requestid 'null' can have cid 'bafkreict763bhmexnhseuilcotitz6eqfrwxsa66lzhkjolgj2l5y5k3pm' replaced with 'bafkreihbjuzkkzjh3uvf5c2hxkcub7j5m4o54gmkclviubchpz6qqf6xv4' - ❌ FAILED

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
POST https://api.filebase.io/v1/ipfs/pins/null
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
{"cid":"bafkreihbjuzkkzjh3uvf5c2hxkcub7j5m4o54gmkclviubchpz6qqf6xv4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368195e333172-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:55 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qRQBtetFaniJ%2B138OudbftHlUIFhZsQ9gmyC1UEy7AlaX8P%2BKDeMDnTSSTfkayDOkMvqzxMCqjbTKtJSseuXBzYlmhWiwG1S2qujwsoqlkwf8wQsBhM2QDNgFTonTM52PQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=WTPDr24uWVH7PJxa%2BozFagTljAELGlnEHxHmnKcbO3YhZm1O5sMGnRsZsClsNDjpxT5zJPlOhoFjdnAy48hgK%2Bk3Hi9Znidw5I2XqX48ULQOECYhiPkOXnt9bIHSkBC9L3%2BV0uSamOQ%2B%2FSUEpOZXNhAo7XJ10L5u9X09TMmqfa%2Bb65Nh%2BsBJySe9xt9r53wECHivqRHdjZW9dFAzlN4%2BlisWbX7OINrRDPRe6lg%3D--WRgHFp9wGYtwED7a--Y%2FYjONsbDJniO9wk7mYBFQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:18:55 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "1b92ede1-a5ad-41e0-a85e-b8d02009ec68",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
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
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreict763bhmexnhseuilcotitz6eqfrwxsa66lzhkjolgj2l5y5k3pm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368131faf4870-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:54 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T9sQKNzGL3KcTUYjUZLf6h5TGoB8t9V5kMXzV%2BEG77l9br8mMnIdaihVCjgZPNAA1iE87u4SXHOyT1hy0JzX7QZQJO6%2B71ORUhKJa1mamc2GGP8b%2FbpnSa7UzjBcp04MMQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=%2FP%2BhwUSiDmyc%2Bvg1w%2By2L7NYtp8EEHUOeHpTEujPBoCEZpzNIgEwUxjvK71Y6EWovDPNB6LgJFiEJYJpP1My15n4VLdiUHU%2FsV6FLEZXDGyyeclxuLGBY5ql4r5fTXt5Ayt4ko2Io8mZS4W2cMTaPYS3p0%2FKbOVRXW3aX8g5gaNIIfH1xmEkNECb0fiIP%2FTEeW8ISjkxRMCjvQBe1u6oTtP2ASqhXyHmg5ov9hs%3D--88nn8tuh6PEHUUKz--f1WaqTURjMXocCFp2XSR2w%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:18:54 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6680c1f7-ee26-4202-ab60-49d2ee9987a1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name '76529643-2313-4e59-ac3e-6dc3dcd5e0a8' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=76529643-2313-4e59-ac3e-6dc3dcd5e0a8&match=exact
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3682ccd8ee5a5-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:58 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fzvAnTm0k%2BcPKfENUYAwd7V1xWx7vIEp3WHUWXzzykeEk6A%2F734ewuHSnIVussmbEhAAltFtfchbf4jTsIFsP0j%2FaR50t0ZXni%2FbU6KGmXUH%2B9%2B9fjELwGlWyvEGenYc3w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fccf8438-7e5b-43ab-9850-dbb99ab09de1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name '76529643-2313-4E59-AC3E-6DC3DCD5E0A8' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=76529643-2313-4E59-AC3E-6DC3DCD5E0A8&match=iexact
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368330866462c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:59 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5LUsXdlfDVYQ2OZwVbFNAZIzlIaVYYhudGo6f9Enj%2Bm%2Fo9wSoHLuSB25JUzBX5OR80u72zZ0sF%2B5jwIfHxe8%2FwMTnRzF7UFq9x844dnZ3DTlbycp5cgYRKXlg4OJW5afQA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3b7758fd-1870-4f1a-b053-3b710f9d47c3",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name '2313-4e59-ac3e-6dc' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=2313-4e59-ac3e-6dc&match=partial
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3683948d045ea-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:00 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0xBQWaq3pS7PYJmEPmt4Y%2Fs20Mwi%2BjKEPRQdvOdhiUHqWuZ3tvLi0bSFYR763FWWLuoPuyNOECt7WPv7PqbHlIkimiwS%2BbV2zgK9rGMihqSa20BOQZo7JockfC9rbBUiCw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "caca4dec-215a-4b79-8687-b90d5ba44043",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name '2313-4E59-AC3E-6DC' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?name=2313-4E59-AC3E-6DC&match=ipartial
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3683f8c002e27-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:01 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jd%2BVqMPAbrgsvKgBgqwU%2B%2F0COddKSxK7u2fNh8RLHV1JImoJuWip8SZe578xUsROZwM%2FO64kz%2B7dUnVvgT8KFnzUVqsSjFIyp6dtChvJRat47oyRDxWgf9XbCMipeUzpqg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6d266fc9-adbf-46ff-b638-9e0364609845",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create a pin with name='76529643-2313-4e59-ac3e-6dc3dcd5e0a8' - ❌ FAILED

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

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreiccksh6jvmmmy2rcrivtborfxpzw6thspz52sdptsluzameix3lfi","name":"76529643-2313-4e59-ac3e-6dc3dcd5e0a8","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368268d07460c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:18:57 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SnzXonUGHEO3oCAM53XBsL4hCnWdmjcsHB2fXGBbvDmoxhwXMOAMPLe%2BcsW4SjBQI9nD5kn2Gtou%2Bjkg%2BNZbK3C9Wpd6%2FvBNpJdIWDiJBMwbiazdiRTwDLAylqwOMp3VeQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=jSPTRdeABUhTUYgd7m0whwcSlvANkSMFKeYoh3ID%2FzWYLginuFr3LuhQ76C0CEMKImPwQUCZqikSkgsRKtMJKfKbmEFI1uBhRh%2BdbsFrex31MOAgNcv2%2FyCzD8HlcR65tOIZ15%2Fp6udi1GK6phWEFjTtB726A23mU68d9JKywDRvXAhlEVERFAVMxoPEra%2FWRiXtR1sFUXDZcjuM%2FNRV7tMW1zpY0Osl%2B3w2AIg%3D--ew1nwmuDnvc%2BFh5E--UE5cvqmCapXKAaueTvGOXw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:18:57 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ea1da080-fd22-4cc0-b882-380241d513e1",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigd2wsxuv3kopgygf2ygaqp2ttbgxlidyed35kiuduirlutumxd5a' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreigd2wsxuv3kopgygf2ygaqp2ttbgxlidyed35kiuduirlutumxd5a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36846ea3e465f-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:02 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=C3JNRmByHq8bwWqTf02kfS2A6NQJSqPzCimM%2BRvz984ZvR%2BGZBJCJ5WqKlO%2FpNokk%2B5kWqTrTMn8fg%2FKM4bipWdvPj%2F4POtwwq62NpuqNbeIb4Jc%2FsJMrWnpvKBditgbAw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=BUAeR7YNhz97L2s0svKVsTk6sDq2v4c%2Bj%2Fl1NVwza817jXQh9AbyFAJQT4bEG7ytFp6Vqt%2F6p3%2BUsx9uMJqV204fmP0QZVHtZYzyW%2BDybRDRdDTVO%2BBvDqT5fmwcnEh1IQFKv%2Fuo3Xg6w1qwL1o1r4Ehs02HvOHAhe%2BC9Nt9KcInD%2Bd4bZsLaBqs63xTBeZlh58BnN2I5Hl6fyaexlpvB05z9%2FgLOggf6iVmqro%3D--trO5nqNqi0oHU1%2BZ--pIXg2XCrQUbD8MVBHg9NIg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:02 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "01a97212-1aef-4c7d-b381-4bbadfd84f62",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreig4fehqytvhr5snlredyacuvq5usxrsy5huicgn4qdenx2gzksm24' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreig4fehqytvhr5snlredyacuvq5usxrsy5huicgn4qdenx2gzksm24","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3684d29d1e8f5-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=82k%2F6szR2z4X5S%2B0eITJb%2F23rkpuxwugR%2B%2F17H3Mz6ImkSH%2F0D2emfp2DYAZECgq6oWBiAMHrPa3FdM9UOF3gnGZbsbY8JFSL0Q%2B5AIs9et9coC9toSOdgLdEnnDxozduQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=SRSnuoC1HJGGBfXlBfL5D8DV8Mc2FiHgKnY3OgwG3u%2BM2ApG4Jae8jvDGLVrbTkfz0UTOJ9cIBDBXbHiHO3IXOwHX7MlhvpjHGCH0L1lJn3kpDI0ufHfBU1a17PQMAoMhgS0nlR2mdm0LsGEEQLO%2BWm0FH6e%2BeGO4MD24thHOv%2BOC8LuDBSLXYg7YuF2jdUXuxFXkJc2HQcLr80HjZ7pBWlw9twb0DPNImeQUBw%3D--K%2FpRGr9B%2BOfsjFW9--bk5XEVWQqWRF2gG72ONq%2FA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:03 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "4db0f640-2e52-436b-9ab2-5210c3875541",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreiene6mlzrkq4j7q7u4x5brgxl6deel6q4acsmrxof2fgkm4ptzeeq' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreiene6mlzrkq4j7q7u4x5brgxl6deel6q4acsmrxof2fgkm4ptzeeq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368536cab2ccb-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:04 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rmnQMnwQPymXyc9CU4ev6gI1kQZ7iYeRSK96w5QKaAgyXTpmSQTJHsnOQiL5gLh2c9qAZuyofsRkv%2B6zAVEn6QCkBEtpKaQ67ZFfw9EZzu%2BYRjymKFx6BnMKIc%2FeJESOcw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=gKBLZmAbTELfDCh29Y39qDXpdUKwYhc1iqfPvR%2FcjHQXFk9aNbsDqH6YwmgNei3LY5icENlaZ%2BFNvGa2Dmnk4f%2FlmqlB2H2VM8UAQTv9wkFJoFYEo7KGyZKYotyfA%2FZiyiG5AYASXOZE8zfBOkdKP%2BQu9Jy9erujLi00e6TF0IDSsnCr9YUKdzzWjn1up0rcNOT6oZBCW6jKnBmFm%2B29ceq2Bcoic%2BagpD46bdA%3D--TnKWRiNT4bRq1%2FpQ--%2Fkux1jAT%2Fnnje6xamEudJQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:04 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "700f2741-1b37-4de8-b7fd-f5d8d48999ba",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreia6zt3gic65biflddmeznhl6rogvywgaxjjkmmteoz7bnfl4fx2ha' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreia6zt3gic65biflddmeznhl6rogvywgaxjjkmmteoz7bnfl4fx2ha","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36859a8b345fb-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:05 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XcymHz0PcpWsT9RKdg3wqXK6vTigSr7XTZKtSB7BnXI1%2BQNbFHCIMTfhkawXnAZApAVvXlHS4Im%2F6YxWeGq7sovnKfrEcq%2B33Yn2w3vCvBo0%2B0r0i6aiTqYCk4AcuWyaKw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=kXAHiQq7ptMxyRU3MYiKz224RC%2FRpkjIEUrFupaT7qaLDOP7FfH7Onu1AMjvVMsVPWAr00EtZGrWQlzKxQExv53FIkyUwSy%2BHg%2FseBoK1lUTWQtiaOI5hM80yqPy9sGGK8mw37jawwyEJm5y74ob9AfY7JCaDNQ06cXFB1fesekiDxK0oPuM9Se%2B5JUrbgn%2BxuWOrFhjEJRweV5DRwC%2FpEga%2Fc9r9qhd3YbPw%2BM%3D--hD7nvehsRy2XwHqU--qx%2FgHYWa3YGLGpTlsNdWSA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:05 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ceca6960-0bae-436b-8308-83b4a9658f02",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigndjowbqw3vak7oisz3vilwx7js56yuh4xbgbehlbdvzku4ouexu' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreigndjowbqw3vak7oisz3vilwx7js56yuh4xbgbehlbdvzku4ouexu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3685fed7b2c9e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:06 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oR4DaoBYScshwkQ7KAsAVXvRhNp5qNkWUOHWreWuKL%2FDClHs%2BtiK2QJ8tf8wI9UJUdrD9lLIZnAAsvHgL0rifcgskvvNPTzv6Q5%2FwQEztuHVW7zLnH9o0YpZ84L%2BdTWQIQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=cGjTkMWyosVwClbwV4uXpkIom6xTN3CfGIXpuq6VzCYB7D4H2Cd9LeYiqwdabvoyESN84YBNCZIl9U6PL5e%2F8b1e7BQP0NRKwV5DR%2FJ%2F%2Fgt8GIOz1ORlYTWRPwfP0QaNoZmEb3NwNiiKpECEiio6fE%2FCONos0xrfsL3Ik0CqMIk0lq6j6XMFox3FARYEwlHNNA8kn3SfAmVzOQnWWH3PsopfxX0BhcMUqo3WZ0M%3D--m0VqY9DMACRccK5E--rZSfpjyAKJp%2Bd0yBsKqiKQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:06 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6ad22b28-a28b-4ab4-b1bd-2e589de2c033",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigxoovpgel7hqvoscadhgdw6c46bez5ip3ss6msx3xxtlgpfugn3q' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreigxoovpgel7hqvoscadhgdw6c46bez5ip3ss6msx3xxtlgpfugn3q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368662ef54672-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:07 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OQLWPVip0WnzgdgOSyybzM05aUEHsxAgYKfWsc49kdKF0GnG1cGzCLS5%2Fa770YmCwSDuhm1xOCqsVlM0THeKBOtXDhA4PBRpMYPrRNPh%2B%2BoaP2gBsVlYnYkq1gEME1qTNQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=kO2w%2BWqJGZ%2FLkkET0DRB8Va4Y4sfzPQVlRgYYx3PmtIF4wZr%2BaeKHMZ0TZAwSp9orFqHTVkGcCTQbZz%2FdPFxNqCWQW7fPWfUnGndqvqMGn8xPhbKdXsJY6g4ljXdO4mqEGvr%2FAGMIOUsVQVeUSuHC5th3urV%2Fbe5BTEhVplOnJkz1NCJYAuObW4dCaul0M0o51%2Fsgwr4P%2Bl9koIZXd%2BYwA5XRdn6TuE2X6wuZHg%3D--rYg8IPFXIlQHkpo0--Z7bRFiajSKN1gLrmw7boLA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:07 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "55998a96-cd9e-4f42-9fd8-0b404dbd622c",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigc4uz37dmxnt32mewsmtd4vnopvfbqhs2wytk6up3xc57xq66xby' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreigc4uz37dmxnt32mewsmtd4vnopvfbqhs2wytk6up3xc57xq66xby","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3686c6e552e1e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:08 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L4QaIrlwMt5ovoJb9RiDM6yZZ%2FFL3OwT%2B2KD6xcjskdkIMC%2FtAFRWUit3Qaln9o%2B9vWEO7ompYnsPcYcbs0E%2FnMy1dqgZuJRxfbNN2JSalZDQbBGXHDEjorJcDOADkwupA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=BvIq5LsQbobb5CT2GhKy3MMoad0gYi0iFrStjySxMoJBW6iM3n8%2Fug20TABfaPvOijYHMfbLDe9wrChSb%2FctKx7ImZi3DBFAlctLUiy4oKsp41wQdhuD0BMOlyQY%2BIIaZybu%2FCaC%2BYlgUyYuDx5T4CFaJ3Qb8hd3K3izO59jHzSbr6RxwPE4QerednwWqPT16l%2BgYivFKwfLyHg8poyONdJVQz%2FB71wrSyLNonI%3D--TBU7aKx%2FytdVJt03--SCZ%2BOR1K8PV2o4zv4DQebA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:08 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "10821f19-69f9-44a6-84dd-3f8eb24c9a2b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreickzjum6cyporbypv6t24a5idziz3jrgmoaofb6agn6hya6cx27va' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreickzjum6cyporbypv6t24a5idziz3jrgmoaofb6agn6hya6cx27va","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36872bd8a2ca8-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:09 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3lFq49D3rF4xmgL9zj9dxbUx7OdyfIrfGEVrn6wcsFPgM8JTYHK5XvDv%2FD9h61Z9OeG%2Bt6tvZwj2DR22wzo2ENbPyKbnIRU9NW2gcv9iFN2C1F%2F8P9%2Bvbp6XMnVdwPM9%2BA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=JBu1Ji5dfmFNY6B%2B31lm%2FDV2Ohynpy16M%2BdhNIdg%2BRc6kH%2ByQOhNYOcNV05JwyzMUXDkcbk7QMYbNu1b0KnYay6dJ5QHO54TLyS8gGOosl6tgqkFTF07IFHOj%2Fu8vfy6Ytl779FRWbKZSSzdLlNURtegKQECZG0ImQrIZx93cEuUl7uXyWQ6OGObISV1uFHlXNFga5yETiaPwz7Vv6MOqu1bq0ZuDcclY2BqXG4%3D--sUctvPJ3rOkPAr9u--cMWRt%2FtjRe%2By6RtBuQnaUA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:09 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b7602d08-004c-4f53-9aeb-92fa5cf5be73",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreihpfzqwd6m3givo3y2pgpxshvfjxic5tmu3y4ynkrlofxqjkn7zfu' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreihpfzqwd6m3givo3y2pgpxshvfjxic5tmu3y4ynkrlofxqjkn7zfu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36878fb7d28e7-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:10 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dnwIskPd54atUK%2BykiX3rJQ3frnl45jHudImn6HQbKRRb1iRaFfFB%2F%2BsrPJ%2FiH1N2DvvXFhIkaOl2NDAOxzIDWPcyB24hO6FzTdCg8w8MeQVk5iIhZ0rTT3Meu1AekqIlw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=n6DJ%2FNCm8%2FkeOxK5n3bTXzfrmSRek1HkKHt4pRAvO8gUMzb3rQ4P3wXwTR3Qf5TOdm0MaATTK0uwqaPEV%2ByXkk73%2Bz%2BwN896QDnGa692fSh7rbZJeu9NHi7KhJpBXqYnxOwcKoOYWm0UF%2BUIo6CWFfrsVC0ZA6Rpg3oIn5X3MflJvZahtcID0NfHJLGP5f3zECepOj9HqpoOt2oT%2F0PZkKTcEe4vQEfmTQmZXRE%3D--7FYoV7qRfN3Tz3GU--wiyN4PIbTPxC074aamd2eg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:10 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cbac3162-cd2b-4ecc-9705-f66de736b89e",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreiabv25wusg2cmqbfaffodtedfbmv7uv5f4pdjybeg33twqmtvyeuu' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreiabv25wusg2cmqbfaffodtedfbmv7uv5f4pdjybeg33twqmtvyeuu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3687f3e45e942-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:11 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3%2BGL42uoO9R0Cq3UnbwUl%2B19cnrDz7O6qoEQXATq0bqTDTb%2B3eLhGyvL7EXmgBJ2TN5rYxEX4C%2FxYVkYMzh4ol6jY2yqGRrIjqTyirqTBpFPZRVg7Mzxbal3xaf3WSFeaA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=KKkWpVPy7CM%2F1SbUyNqStc34Jvl71NBX1ch6GJ1xPOMywvcNWVi3qCZHl8og%2FFMS9LShJlx9bi0J1nRkzVHPfJ99Kf6bP%2BhJfcTdAg94jG7dRfVzUvdBY1eUlkf7fJ4fHN2fiOs0cW1C7Dy0uzOiouqdV7FFGqJAFEuPa5pMKOa4jWclUmpwRVnjrig3Fv1edkeYPmXw5YNVM2EXhsX8GNc%2BW1WaZN8ZknB8%2Bnc%3D--suhm0vSWTwG6PGd%2B--0CjFP0Y6r38FN%2Bs5U6BGgw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:11 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "bf999e08-d92e-4028-a424-3509316c8e81",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreidh63edwpwmfafvnplvwijdcqbsbmzzrd2x4xqp7xc334ngdm7feu' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreidh63edwpwmfafvnplvwijdcqbsbmzzrd2x4xqp7xc334ngdm7feu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368857eee46dd-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:12 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JINuUAuhBK%2B7xC%2BqGV%2BYFgjXjj%2B1%2BztFRKt75PgvBck7%2FZhlgMCkk6g3%2FeEaoQu3acq97woWATlxLow2oruRhXDWtOvfj%2BLMasMgpal3rmVrwDJ9%2BnVyNPo7F0gCsut6SA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=HGAYaE7Y1UL6R6qkvTqUGnoiUm%2FiplDQrLjaxzvJcCsxRQp2jsDs27m3Th9o9d1z25nQKWUFZs8kDHBXTESDX0aorQv16VvWaIkpjYGPnCC0lJYVqFiuFg7AYbAefj9TB1B%2FeD9n3tC9g65%2FaQDrTPR9sph%2BjSMtwkJLWhxzwpI7fvzLg2OZ%2FvpJTXZaHroovf3o%2F2k5DjT68r2aGCaW2qPdWB6C8cmd%2FUt2faE%3D--94XCZzUdNRPlSbgv--I3ybts3zSs1k3Rutb2uGkA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:12 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "60727bae-39dc-4ab4-af2d-9962a4eec96b",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreic5rpect6muptukdvrxdcajq7rp5gawmcgjtkanrnseq4uaojgcpq' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreic5rpect6muptukdvrxdcajq7rp5gawmcgjtkanrnseq4uaojgcpq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3688bb8a62ff0-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:13 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QxXZ2LkinsoEiI2TQ28YlbeNmArrDIUiIUMY91hVRMBBtnhbRGh32p4Qw2b0xnOFVo93M%2BeIsq%2FhTMfar8oNALOxzOLQKXyzIYSkVY%2Flqgk3o1Xcq%2Bs1tPaAQT9nqWAcDA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=LMmn7Xs3YkhbzNuIjypiGGXXmLIRdYYS1HKXF01zXwLLxpqMIB4EYR8FEmIhpSaz2tiBBMqXpqnMv9K8HHcWw30EBLUYE0nsD%2BEkQFbccu0CYYylT0q56JsSnKqD3zCzeLDmQnEDYTdlobju6R%2BQAKRtxl5ezU0d%2BLMKc8WRu7o5dJQSLitK%2BLU865B5cG4PvaopoljjEmo8E8GR0EvLc3DeqCjf2GdwQTKXtx8%3D--9BD2DSKLJKwR7IKf--RiFzT1yhjFhEJ3eSEx2vyw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:13 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "91213ecc-b111-44bb-aeed-46d1acf854d3",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreifheuwxxljozykf5gw2occyqoig2mefmqsvifhagjduvvt44igae4' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreifheuwxxljozykf5gw2occyqoig2mefmqsvifhagjduvvt44igae4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36891fe612cc6-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:14 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mqdfY%2FYrQJIqhHhkS%2Bx77xCoo1hSPiMzlpyEFKPfblzVVxcnOAj1XPZ2xkZ%2FlOIkl7eZVySwIGyQyHFBDGRssggPmx8R7gNLvPRXsMGGE1ww18PM0Li68iN9WesneKiBvA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=txOhdEpOh4%2FYEA1arJ2AYcZSQfKYxhixZ0ZBbCfhYv%2FSG5xMB5W%2F3sniVlivWhvmV3cmxzloskWop8BZHZUAYaRSEG7GtdH28nOqRoZH9rVbqCqWqlMY0WEDe3Vx%2Br3EpNDxLa6GrGYJ2vunrnm1V8%2Fw1K68iNfxQJJbJVt%2FFVARi%2F3nk9WdPhmTuDDESjNMCU%2F2EN9Vgo1k%2FlabM4gXqjwEp8qlbZw0uDsfZB8%3D--71xly3I4bYOp5bui--TFLETpfsALEp2nL5EfkP1A%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:14 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "857ccc88-a1cc-476a-b693-e070cd2eb3cf",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreib4yjlxul6jgf3frbs23v5iecw5nbkuceb6uyeobk4b4dre3mhv5m' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreib4yjlxul6jgf3frbs23v5iecw5nbkuceb6uyeobk4b4dre3mhv5m","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3689839750c0f-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:15 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CLinrgGEFCiO7r%2FNpeBagXkJlCNI13pbx6XEdUVups5YswFmcUdxMyK7d3mrh%2B126siGuFwtJxQK5xMe5s%2BrXASQyKj3boCC021NQ%2BuFEbWju0qjRY5hCEg8m5BLEZzv%2FA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=3%2F6onx9WMO7vzVRqil6sVeQYVhV1ITwY42C4E718%2B3SeQKlXJlfNFQi6AknvIFa2wZtMjRBfEBiHyEhKlPnREUIwkupGWP9exbfZzQrpp2kKxNHkYDoKtUAl4LCMmu4H5ka634S3nEGMxUMXJsCYqIByACYha9eLhhahcrZR9HQIY7dp8enyros65x8F76XC3CKqInnMqFzbHhMnj3yJ%2Bbzt5TDVimb2ea9Vm2A%3D--0Q8XOyxmNeNMMWE6--l4vFv1mlYJ8VtgQR0xJ8RQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:15 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b30da621-c2e7-4ed7-be93-cf14b202f47d",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreid2v2nbifaz5x5qqou5wq3c7rz7x3audblib2hlfhtyz37rxu25sq' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.filebase.io/v1/ipfs/pins
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
{"cid":"bafkreid2v2nbifaz5x5qqou5wq3c7rz7x3audblib2hlfhtyz37rxu25sq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db3689e7f832cbc-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:16 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dGcumx3GYos7gi5f6EVwpQ04c1batckSlUPPDCIq0GHMmUEAQCu%2FyYRjIUbIkoR1C%2BUS3%2Fkl1fF15%2FcxahqYSW%2BZCcYYCiQLecHKmehBOPLJC0KBSQewrKXAvqEmBasUEw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=%2B%2FcaYDJkiOojrAZQCDbX%2Bp%2BIS7B7cycCYKX8091REmrtpTmF8IZPVr9%2FZUTcHDxulpshgBx14CjFqus1gcGrBT%2BmtvwhQXso4u0X3AJov4uM0TSE9vh2eMTvMmJa%2Fxr3VDhbuanO8yJVUYqjflYEevgOikWVWPM5TT4lOnjAzSdaWY54SWNKdV%2FOY9LA%2Ft37R5PyN2ok1x3RvOT8tbXbTMmRZob9FL1Iq1dufM0%3D--Hn2vnJRfY%2Fh%2B5fsI--8Wgv0oyFY5gBaJpxNY5Jrg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:16 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f2029ef5-7627-4b3b-b5ce-42f458c1dc57",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: First page result is null
    at testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:89:14)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368a4b8bf0c2b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yYJlcouwgPcvfkuNI5yFHCdWiXIaZEfGSil1osTO4KFsa50Jpk8r5X49H%2BhJQbxpE0DXJSRw1968zJzYTvbk8MeJ%2F%2FZ%2Fur%2BVtsAtiGvfUjT0N7kF6pYsQ67H7xQX0I21kQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "28bbf483-32e1-4ac4-a04b-a71e93244446",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-22T09%3A19%3A17.283Z
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368a55af92cd4-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3OdYxhawV%2Bj9i23N9%2BQQm7Ibpg8V6zxvARwsXuvqvko1G1zgK4V9B%2FXlnkJ9wzoDRQtcv0cz6zOaffTYUABRfulzx5DAovXgO2MIxpQZynTwhFDZJmNVHG%2FUKWkW6Arocg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "daa363fc-4bf3-4282-a124-4616d1bb1439",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ TypeError: Cannot read properties of null (reading 'count')
    at testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:32:65)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)

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

  ⚠️ Error: First page result is null
    at testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:89:14)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36840adea3aaf-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:01 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=31aW5UUgVGz12rGiwLyRswEeKoWmxnyLajCCq0He77p6k6Y2es0CtKNVumjnIOoUD505YJWo0WQSMnSogTsYbdBEuNHWeSaokGBcSQuOGeFZzUteHBKKAhLhmqwG7uBUIg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "11d1ecc6-8655-40c4-9b89-a3862eca599e",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368b1d8662ca6-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:19 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MEH4tu94uBXtaZY2rWAjXMU8WMljJwZc88u7%2Fh1jYljDxrMQGkqAKSWYGYq49151VcgPS82wDsQAcQB%2FaU56DsUVqQY1YDU1md6lLeJgOL7YFvY%2BwkgSfGxAlsVS6Gm0NA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9ae2dae9-a241-46e3-b7cf-caa4716bee9a",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-headers": "DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  "access-control-allow-origin": "*",
  "access-control-max-age": "1728000",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db368ab9fa04644-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:18 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gI2V6JnqVK61iTd8R5bFJdDMEwHWqVOreDGjaI1bnGFsk1Gxcv3jgI8K%2FPl4YkVtpg776zZ2m8jz2SEKiKUbuHcvAwr2%2BTcqF1Z31s5XLwyLtEKQ5FcuQyyTgLG8ICe%2F%2FA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f3a55920-89cd-4d7b-810d-d52f961cd252",
  "x-xss-protection": "1; mode=block"
}
```
##### Body
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "FORBIDDEN",
    "details": "The Pinning Service API requires a paid account"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
