
<script src="./telemetry.js"></script>
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2023-02-08T18:50:29.948Z

Revision: [fb91968](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/fb91968)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (2/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreigrlevflpw3hwoinldofpkup2ii3ryspi7lfcg47tc2z7qqzwxbmi'](#pins-post-of-cid-bafkreigrlevflpw3hwoinldofpkup2ii3ryspi7lfcg47tc2z7qqzwxbmi----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='70fdedd9-ee1d-412b-b783-29d04b62bc41'](#can-create-a-pin-with-name70fdedd9-ee1d-412b-b783-29d04b62bc41----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----failed)

## Request with no authentication token - 🟢 SUCCESS

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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c6388715b10-IAD",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:49:59 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cAsaOCAWoeDvxt6IF2I15%2FpwvSMXLM3uM4nfpSN31ZT2%2FFXmQ6IyGVKL9nrfWGkHnrIbjRLQYjKTDRittnGCtxqZeaQImlzCQZe0Sr8B2lH9mYHqeRLjYhmpMhT2pja8lw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8a6885e8-91c8-45d8-9364-a7977fb8a9f5",
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c69bd853975-IAD",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:00 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p30hFaT9IScLdnJsVHiY%2FYcgKAclRRsPpY9xKQgPnJXqwQ9HDyTNGurgVNZnXppHlVhzVCTZjQyT2HJ8VAhYASek5a2yhrDYd9mbZDhqp6ALoN%2Bi2RZoRHeqVKkhiwOs5Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cac5207b-bdb2-40bd-a371-ebd2058904b4",
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
## Pins post of CID 'bafkreigrlevflpw3hwoinldofpkup2ii3ryspi7lfcg47tc2z7qqzwxbmi' - ❌ FAILED

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
{"cid":"bafkreigrlevflpw3hwoinldofpkup2ii3ryspi7lfcg47tc2z7qqzwxbmi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c6ffb5b2426-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:01 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jE2YW%2BYNLFMr3ctGshP7WBddSYG8%2BClG4Q8uhgllKaSgXMDXkpDduD7cb76K7stMm1Qw8u9tF0h6P6wUsJlzPnw%2FmUOQyJavEc%2Ft5xU8Wj1hJhqJ1wNXKYoAERYATB6APg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=cCq2Vgl8eh9DtjPTnFKsiQ4DoJmgByt%2F3MYxdKRIQRgPFQWw8ipoMo9upV%2FQY2JZEa0U10b95j49eA1ThI7MbGmnmw6nSRlIf1VHdpiUpugjEuWLT0FRpQDx4EKn6q8i8HQcjRIwwvnX3RZjk88fI2z294DFqg1Z%2FsYWEiAKPhRyNCIzrdNEySlD1anHq%2F9N0UL8kUj4peUXrXARtZweXno6W6tNudnucWqXXvE%3D--DS%2FeQwXVkTemmRw5--zEwv1Wm4BdrKliMiF%2FnQ3w%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:01 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "86561e1b-a794-4ffc-8870-e4449af2eb34",
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c7c8843397f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YbelIfvKEa4lacVlEaCkuR7PWLIdkZ%2BYaQFfcq0fMkMVRnolzl59zytAYpGRdG0Kq8c%2Fm0%2FrLArdmZgYiekkaHg1yma8Oy8XJHUcmPGXE7EvNGg2xrUNQXYvVs2cfVdgww%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=h%2B3m16tKkp3DVdIpkGgKpYlRCZYknSCWL4%2BxzJx8t7zkBWM%2FKK%2FbJcumMic2DFbl12idhNuqqhcDgEv8U91CeNM9KfkjLFINV943L%2Bbnf6r24Hcy90Tw4Szm1e3XR5TpIxbtpZmUlYfDBM41WBlkRliDUBKsH2%2Bgi3%2BPS0SFibttsKRB6YHilaP0cKFiCjRBnSPUDbqfqJ7VOopFPAsPvOlJW4XekBoWaiIRhRE%3D--nP%2F4LzN4YqoGGHnf--LUNvIG048DqCepWXiy75OA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:03 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "175456b2-e1aa-4131-8ab1-b6dbb50a2c26",
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
{"cid":"bafkreicxsp4atayz4napxcljsgflrababcvin2ljkqewgusbcmm3hzcgjm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c763969399d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:02 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4feOWhrVHk46lNhdcxX2ZeSjbxnN4g46u8OctZEMzM7w1Df4Emveus2m4f9lmA43dcLn78vaFiEMgtILfl%2FYcdjCEjsUtPw5GLckBLqDVwjxPd6Mwp631DKqo5I4x4DWQg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=TAGGrLKdRRnOuFX4E55%2Bl0jUW4zrg%2BXJtwi3tsPjxoqOZjdTyteKAG8hqruwZBTBlDTr4wIcf2T2oh%2B6mzwld767QhWUL%2BBuyn0U98Q3Qazq5BBqSkmu2J5z7jHhI4C44MklNwE2eq0haw5ofDD0egIE461aNGpcDTnlaUZlJOAWsuKa%2FAY2dA0qNPSFT7zR8kulyuD3FZvb0D18EoULLwvv8bqsIL3EPxE6ln4%3D--JannvaiAngunrmH6--8MXWpx3Uy7X04CO6yCOANw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:02 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "0f634dbf-2faf-438d-854b-f9185ff083b6",
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c7cca757fb8-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ythhp2EzjR6GA9qhkaXHuw3r%2FcazJ74RG7C9G8Pf8LBmAeqPstFLiBKmjMTnNUltgXe0Mlt%2B2gWEz7chEmRk5HCx24eXYLUcISL6hrFkaz2hIrLNLL%2FPRd1yUhHrshsxmw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "11d08d41-75f6-4c93-a427-fbc2b36c3740",
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c8f9e6a81ca-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:06 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BzEAMGuL%2BA5qAmOg9SByZMhCT9qzMT25OMyYge0RcFKeoShqBEzNcHYaKI5M%2BigwClpk6Z7xhG5c5n8d0w1KLyPhSLiHa1dgfjURlND8q7RzJmLeDhc1ltq2QSx3XNNfKA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5895c93a-1bd4-45d6-9c6c-7de0c8158ef3",
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c95dc1281f9-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:07 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JKDnKTy8NZyTLK9EKofZiQTZe%2FjkZPetaC2vAQwOpZeHf47QXJKxpJuOzkb5WORkOs4T2dNDBEEbkdrupL%2Bm%2FOc5OKYSS9gceqmGIj5mznEGz9gPEduddffhqqJqf9h8cw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "058757c5-6281-419d-9bd8-1b349bd09705",
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
## Pin's with requestid 'null' can have cid 'bafkreih2smfdei6urw6eotl6kbzmj2m4wrjflvw52qwkfrykpkjtmxzav4' replaced with 'bafkreid2mmxbznedeifidzrhwmm52ateicagqslxdqbsn3y23kzlhadhce' - ❌ FAILED

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
{"cid":"bafkreid2mmxbznedeifidzrhwmm52ateicagqslxdqbsn3y23kzlhadhce","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c895cbd9c37-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:05 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V7qfxZQfPy7L2U4HLFZNjYhiV0cKlgz35ldFghKJ5QYk97h%2F38qidfT7LKt26zoAAeU9cZngcFfnC3H0jKdyZLbdPyH1vl3Uov5QT%2BI6x%2FvkGHaOO3rrb%2F6kNpZSPTq2yQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=pSSob%2BQnyDbmI%2FdaZxeCyQgEtsbBHzrtZqaPcwdWKH6AXDHwO%2BFWj69Dm5f%2ByCVH0QaVw8higUBDBXPu%2BpaK%2FzR43aFrXEtVEzy5OxaC15EHj21K%2FkIJ179zcRlKQEPaUfPYb%2BhMAejiwPYTpW8744g4g1%2FIVCZ%2BefG0ofLJuRN7r64AvflcTJQo4jconVhyp7DzsukEaTb08UuUQb6tbFSzKQoO%2BAe9feyu8fQ%3D--Qck%2BDfkMRyq1YYlU--HZFR8zOzjdnXzMJo21cbdg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:05 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "302b290c-5477-4057-be77-9646e2944602",
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
{"cid":"bafkreih2smfdei6urw6eotl6kbzmj2m4wrjflvw52qwkfrykpkjtmxzav4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c831b48207c-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:04 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BFPYBNqGofsqHu8oCmsgIckSuLzYJMxIQcqOguDXqFSCW7FLaU6ZEZsWJ4wt8vuJLvRhpQZN2YWLK7b1akIhNvM5p35YxYJLPEAZlLAckPE%2BoxMchl2zKf4xyImI6rjuNA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=yEc5R33RBgAN%2F5ova48kLz3807zyGjhn17qpmA3jroFKAAxRYZoZdZ3%2FA3iQDITgGZfoEE82zMXJia51WCs%2BYw3CnCwWnTAZjJ%2BCBbTctdV3qxB24B3a339O0VTCZdkWUrwFxhaYlc24YL%2BYMRHI%2B7SFZSvErvgZy4eGfNJoWXYAhkicGW71YcUYPkWpUItKcTBi7UncKoDth%2BPUIfIaD5yb5Ke%2B7CDw1q94Hmo%3D--cQejRl8A6%2BGiYgmS--0CTj3ToPyntaQk6CuL00wA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:04 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d17ddb34-5405-461b-bedb-15e262194257",
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
## Can retrieve pin with name '70fdedd9-ee1d-412b-b783-29d04b62bc41' via the 'exact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=70fdedd9-ee1d-412b-b783-29d04b62bc41&match=exact
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c9c5da61fce-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:08 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wSmphn6iXCWQiD%2FUJ41a67Fflg6MgQ2dO9QRbEIfL0VPZ1Ynah2UsZ0wQnKkn%2F1MIVZ%2FD6f2TgSXWJbG8Jovp%2BCdRpGU5qZNgTJerpQe1H5TJI1B6Hx%2FoYPaBZtUlH%2BcTw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "396cc488-5555-45df-9bd4-513cc60c54b6",
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
## Can retrieve pin with name '70FDEDD9-EE1D-412B-B783-29D04B62BC41' via the 'iexact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=70FDEDD9-EE1D-412B-B783-29D04B62BC41&match=iexact
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668ca29ec020b1-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:09 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZbB1Xot6OTRbAMnH5%2BO8xkEplKoT4vvOeOF3NpTUyHJEH%2F1XQjh1dHtb3VIlWL1C3qL0aMoqHfu8ikJZOolJ6EUcjERqCoMWMl94Gn5NsWCbudc11oLy6WSM8HUpYDfoXg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5025ad79-1057-4e49-8fcb-54a5d99fc1d6",
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
## Can retrieve pin with name 'ee1d-412b-b783-29d' via the 'partial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=ee1d-412b-b783-29d&match=partial
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668ca8d8ab9c19-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:10 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5KzjE%2FhiRzoNjwDgDf4aH1LqUJZPXRnEte2Cs7v%2Bgxa9ndBP50yf1%2FhApqTYLxt6WlGRNcw1s1I2DAS%2B81%2B7ECZIM3gpzuYVC46SO4GJ9lE213wrwWD%2B9QRSEpNsVXDIVw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fa42f09e-09d0-405c-a118-f2c1c99dc1e9",
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
## Can retrieve pin with name 'EE1D-412B-B783-29D' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=EE1D-412B-B783-29D&match=ipartial
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668caf2a4d8287-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:11 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Jh9s2gvTYBPtyCM9vJF14zuVNP%2FPTIwRbfiEU1XnjGAS9cRvZ3%2BvRN2yYNcxsz88wVLhXvAHPWN8qSjOCy2K9xGQEwX%2BXKFCsm%2FtVZI8kdyP4JW%2F9DPn5sHr2Dbdntz9%2Fw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "252c6328-0bac-4568-aff5-9cd1fa9060c3",
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
## Can create a pin with name='70fdedd9-ee1d-412b-b783-29d04b62bc41' - ❌ FAILED

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
{"cid":"bafkreihuvni5coc6p7drbfywkurty22po3gmimsbob26nu4sq3ny5h7unm","name":"70fdedd9-ee1d-412b-b783-29d04b62bc41","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668c962b620664-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:07 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZM3CG9JMx1rH5zE53CditYgu0MkR9awRj3loJiah2K9BzIKRz%2F7Awezwxv%2BkgytG%2FzHdc0i%2F0ADYKKXDGa%2BTRmmu17VnG5n%2FJqi4%2BUATFw3g8Eofnbn%2BYUlEVyxdbH51fg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=2%2FpWCK9HK5dH0N9auBYlyqUI9wIL%2BCYFQMdIS%2FBYDsX5hrUt8O9aYxCru64BfshJBgZSBVKeJSngE2XIlwdDmF4y%2BB4sgMqIXT6FWHnmRb7eM3qptLEYu58tStsmGj46TvVEz4ewt5S%2FTWp%2BI2hRHCfPaSDlUpicBzEvNlceFGVno%2Bl%2BEnGna8P%2Fgs1WeQkkxQY7FRH97qvDSarbhIBl3nXuW%2BPXvWKwllgNao0%3D--6o9hp66IfCvGDDMA--u5fT3mdzTd64131ZYWgP8w%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:07 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "255a2ebb-86b7-46c0-bb90-51b9d2314d5b",
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
## Can create new pin for testing pagination cid='bafkreifgxal6w4tszsntk4m7htv5tx7dyxyowqam44ebtpvfdxhqdgagle' - ❌ FAILED

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
{"cid":"bafkreifgxal6w4tszsntk4m7htv5tx7dyxyowqam44ebtpvfdxhqdgagle","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cb5ed57206a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:12 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nfAcOoBGt8%2FIZOtpIDibke4Lv9GrSMs0mYTBClpCr%2FYLE0i9jYnZ%2FSSun7napraeHhSQ7WK7mthHi%2Br8KtewOmIYtsDNV%2FQb1pehtFsqGaPkQgm3p6nxwNAm8WoXd3DEFA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=OOwNKe7ZXCC6R%2Bh362hGQT5MJ3UxWDgIhr%2B88Yq1ka5RMPUnx09CearxoRaNfUYE7a%2BspxP5e%2FW6Vo6djBSKBm1v37KjCj5EVNyXrymIC9iLk46xw4W%2BLQJ74SY%2Bnq82xNVkVv2intmnzrPCdf2th9sCMY1%2BTjR2QJSFEShlid4%2BjqqPskjwDFAXi72IsMNaqS7jDGpB2LWzW9fxl%2BgtsVQwTgFORJinbghmUuI%3D--RydD%2By%2Bq6LthpGjF--JVPCDwaoP2wF%2Fbg67t7KeQ%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:12 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "43d2f1ee-2ea5-48df-b4a0-5385f7d31652",
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
## Can create new pin for testing pagination cid='bafkreies7gbca2y6b6fewfvqejxtawlvt77qp3c7bfmuaiiwecn3offu2a' - ❌ FAILED

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
{"cid":"bafkreies7gbca2y6b6fewfvqejxtawlvt77qp3c7bfmuaiiwecn3offu2a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cbc2d8a1fdf-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:13 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VPBBwmumK5Kq%2Fz8IXOT47JNEy1%2BytJfHtLkfMEA34IYzh3Sr4Rw3qjwKQ4vZUIB1GefDh%2FWyDYOZklSMpXfZNVxPqxn%2BCr78gjhI%2BKbN18c%2Bp17S%2B5jT2oaEtLjm1A7r5A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=DngcMs2FiqOrjOrkqlgkZ6K944qjWZj4XZKK1HNAJ%2BnVOVa5vNkC8AuMqOpm66dLNbjsaNd3LE3XMT8BAZdTijdtbNVliVKDmOUUMwT311GM3YkHAmllesnZuQMWnGvgBnnnCGha%2B5bG0%2FKEmRPKIYyQieduvJDCAHANjuVdlbjde%2BlJva3SU4mQ06v7kq87bANmMUb8jYvx%2FPavKFhT7tyY8d9DXzQxxMaJf7k%3D--r2v16eI3i8OmKfiT--5MIoM6d0M0sgA8WX2mvDvg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:13 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8bc86d65-4525-43cb-ba10-1037bc28ea6b",
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
## Can create new pin for testing pagination cid='bafkreigbmn3vtfxho7rgiaysr7c4f4nvhqowbkx4xg7dvemufpf5sv23mu' - ❌ FAILED

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
{"cid":"bafkreigbmn3vtfxho7rgiaysr7c4f4nvhqowbkx4xg7dvemufpf5sv23mu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cc2681a20c3-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:14 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=o2n59ntravxmSxw15p5Impso3lAVj%2BOkmMGkJO4fZz%2FDlm0LnTlahgMi9WEalOXl6L32%2BT7eiR6qSrrj1hBfxjcM4UTHVsXUgLPa44r96N493mXkWGVFAiihK6URnhETpw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=tpyXp61M02DAyfD%2BcT2zcFbr6zgZ9rPYBsoj6hmvEEFP3sQW3HD%2FqTAzT2bVu8hKwyBQ3HUZLtjdcTaQlqzfFIK3FAw6j89Dy5mi1HN9ax2XkLj6AZKPj%2FD%2Bq0e3K3GGgfxlkaXronXu2PqU6HjX7X5xm8RFtKaIwFM0pdeLPIsdVuQn10YDe7MaPcRmHr3sTqdl8dsqH7bucDEXS%2ByEe%2BnWJEgcZvl1Vf0Sf%2BQ%3D--gQXvhGBLA1NvB1JN--pRsLHW7TTQghDggK2MQ5jA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:14 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5fc86ab0-eb6e-4168-9b9f-a8e0cc0a1e0b",
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
## Can create new pin for testing pagination cid='bafkreidlypus5inuibcmivogxg3kaixbjguvhuz6ye6qxkz4wirz2wzfum' - ❌ FAILED

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
{"cid":"bafkreidlypus5inuibcmivogxg3kaixbjguvhuz6ye6qxkz4wirz2wzfum","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cc8adef824b-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:15 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YMzCc4XzT6EyvDjA3WCIKop0Xv8W4pD4K1cAtQtlMgKqM%2BV0kQ0sCuLQ2aNMLwduJLHRT9Adf0YMBLmgAb9%2FWGwNnZd9mfYYCYkpbTp7zny9Bt8q%2Bg%2F0KsNhsZ5RE9gHSw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=XGEX%2Bn%2BYn%2By0HsdHvGwA%2BBsOXfDMPLKGaDEYg09zIn8V9t2iCx5m9YdsM9C3QGuGr4uH6JWIBlizLaMRn0%2BC%2F2wTB919b3rkPXu1YWkydtX6DjJTw1pKQPi9GJ6AoFeB5HI9Ne7TujJhWyD3O77xplqXzaUi2Aooolb3m7IvRAQRijnrDAOvpIWrCuLPLnot2hzUqsQTzC6YVtlTRwBYHMl2jFrM6Yp1mzxmJII%3D--VuJKC0%2B3eBwrcGAk--yTGUqb0XBI1sWkylte6tAw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:15 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "da7f1815-252f-42a9-832d-12ca03c0dff7",
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
## Can create new pin for testing pagination cid='bafkreibkbnxo7xbjqm53utsuq6lgurxe2sdjebrwwhqfsnbm2xke74mtye' - ❌ FAILED

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
{"cid":"bafkreibkbnxo7xbjqm53utsuq6lgurxe2sdjebrwwhqfsnbm2xke74mtye","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668ccee96112c9-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:16 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9bLvuYV57Q3WS7kY8Z8yR7NP6FxpoBYUl7pwaEjl12u3zQYgqyxiQ%2FeqCcMNpDKG%2BrgMKf1%2FkkozuCN6d93EUSnSUHuNTYg5xFWz6e0bT75dFCcSUQc%2BPqB%2FtRD%2BaD46TA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=bHunxC5FQ%2BJ07rRBMnLVNBe5%2Fv4L3RGUnVVLxlryHvVTJ69%2F0y85HakyGqfHWfNB0jWlFqs9FRfuXR9js%2F%2FD5OCNJWgOZP89bt59qo7cegY%2BC1HHsdzRAItBgOIhqAvuumP5UzpmYqOG2z2qGSkJvL5N5wkQx6yu94VifHMv0jg9aBK1qlAYzjqpo5Iuj8nnIbY2EFiVf3NG2cf6RXvToBSyLWd6X0v7gYS9BiU%3D--QLb7%2BZD4ApZpfv2v--xwSUYrqVj3v9YHYwCBdVFg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:16 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a079f0e9-0d7f-478f-a36d-b174603984e3",
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
## Can create new pin for testing pagination cid='bafkreihcwaep5rgzudftr765rsyjzsgjzwqjytbbsedpzr64lmktkfu7be' - ❌ FAILED

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
{"cid":"bafkreihcwaep5rgzudftr765rsyjzsgjzwqjytbbsedpzr64lmktkfu7be","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cd52d633aff-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kGXgjBQgzjKNx%2FHEARd3QRXxeGZK4lX%2FZg%2BZiOzsZcPurTyKT2qECgHsSBtRK4x4kidSIZOdwh3%2BtpeLbUT1gLNksQqP0Ve5PW9P5%2BTlHe2pFTdTAYn69S1%2FbpdxD17CDg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=uwXjQhRJMR%2FGDQuPtVLinP7Oi5GEo06cB9Du8Oiu2%2B6HyJo9nKHTzJk8jOmyAXMUuVHW0kAroVVirWSOLBhREP3rQGMMGoAFUQtGbnuQAs1nPahZsYrhZLEm%2BnwTEioGsWS61oZsD0q3%2BQhVtqiaGlk49OHopsZ3EP%2BRaFSrH7xtcrqxlGPn6CQYT%2FYbDWIVX%2FFRFXFQ4Fd8oysRGur%2BCftB84aFYuTtA36UE2k%3D--CehKO1gnv4gwd3Eb--6O3aL46Owaif7W%2BOI%2FPeHw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:17 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c947f5d3-8d81-4e50-9256-7973c0aa89ca",
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
## Can create new pin for testing pagination cid='bafkreiaujs3pmatj74krqkgscw36pq7qnylicfy2m3q4ryhcxumqsqyvgu' - ❌ FAILED

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
{"cid":"bafkreiaujs3pmatj74krqkgscw36pq7qnylicfy2m3q4ryhcxumqsqyvgu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cdb681105a0-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:18 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F6B0dCL%2FlJGf9rocFkGwDpszZF3oiyuv0PoVF8%2FiMFtSrnRu8e0tqhSSvEj9%2Bpqg4kJg3rGnYUv7D%2BnYaTlw9YJWTuCgyeljBu%2BF4fjaKyl6FzDRweka4mheuad16frE5g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=Hes4nV855%2FbpGvmI0dxazR0h4KSsBBqwTHtA4WS6I1DoX82w6TU1gmiQedRI0IQIY5rqwlUX5oSDhG6ffdKDtjzLgFRB%2F4BDpJDjSCiYZkMtUcJy%2Fuj%2FRfePESIj3ytqwimZ1ciSKD0g3Msn2FuEbImJsa8C1JbjTNLj1IyWuls2CXvHnDNE%2FHOXKvVcoFDmgWuyC9L9dzQhz1zNYKAT7Ku%2BZ4uiFQxOMO8sbYI%3D--YPRNMoFzIlJc1IOM--7VxZnG%2FMkBGsjHG7HAl%2FZA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:18 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "dcbf8d4e-24ff-4043-bf67-ce49a4291a6a",
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
## Can create new pin for testing pagination cid='bafkreica6cewninwf2m33danydwqa2wo2ojhxl5t2lqhfcamlrdfh3xwzm' - ❌ FAILED

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
{"cid":"bafkreica6cewninwf2m33danydwqa2wo2ojhxl5t2lqhfcamlrdfh3xwzm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668ce1af8905eb-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:19 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0wV3VvfH7ET5uSvtGE1qqyrGXsXTq3iJF8ptRSXqhSowMpx5qirAheGQ%2BZYYnhepUe7aYjHTQvVyz%2B3A2uATVFPKbshlUOwNGKk7S0UJ9Or%2FCywywYuZN4cnjxpIvGurxg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=2tcA2Q8L707TbPABrcFG2du7fUur%2Bomh%2FTDqO1TpJiQ9DDCjPqqDtegEJIVa4rgloRt2YGwChtP7crGxq383JBqb9IsW3KJVGO4sFzFdC8OM1QRWdWCWLeDVKd9jtQCt7O09w%2FA4sTA%2F35iytNHQE%2Bk21oOKbp8AdB9C1bId4jYCpPY2%2BGEQkg0bsMN9t9w8X19KszEwwkt8mS9f5EuzTRXBN%2F8gW8qpSWB6%2FqM%3D--6rT4otFfJMf7tWl2--UXZfzLmUBfHIbU2c8%2B39qA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:19 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "811813d0-cf75-4957-920b-88474c328e75",
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
## Can create new pin for testing pagination cid='bafkreidnjqf7lsbedki5eo5xaipw7gow33tly3nh2ul2lt53gpfvjxvn4y' - ❌ FAILED

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
{"cid":"bafkreidnjqf7lsbedki5eo5xaipw7gow33tly3nh2ul2lt53gpfvjxvn4y","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668ce7fa5a593d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:20 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GN53P3laEaBacGe28VeMoFlLS%2BQkXZDPpi9ayboZPIUQki423hBEkt6a1BaGAANZh0TUtuFb3iAyJJfnvz7DH6L%2FPInxbX5HB8N8ZPMI5ivGhTBSkSvI9SOLluVnMK2hbA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=Tb6x3cB%2B%2FUIDFdtyeHwNUIkIeyDeNJSiZaSQSLYITzJAxx8UfThe2OULnht8kfvkipDjm9j2%2BOQ1TZdIuy%2FQIHALkqe%2BmntZyjbSbUokRhMSU7DCoXaVed56aCtgAjb%2BhjS0KBYiq67tp4y0t%2BJo0TGoAcrIJ2QSPKDa1EOz4aTpaEyjBVx3tJcp00sExwF2U2XlVyq%2FXhj6o65pZyRqRg%2F8CIj805jxkXNm1Eg%3D--ujhyrZtONojBu9pV--wQ900eqMX7%2FFiMchNH%2FCVA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:20 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "68c1c9ed-46a1-4ee9-a3ab-6f9c8e508e09",
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
## Can create new pin for testing pagination cid='bafkreierbeghbd23kkjm2kb25hghjxyuanzxq6qfknvg5swfawgyypgznm' - ❌ FAILED

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
{"cid":"bafkreierbeghbd23kkjm2kb25hghjxyuanzxq6qfknvg5swfawgyypgznm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cee3de19c7f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:21 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZNMaoCM7yFmDSrqB3GfGrFHFgLiJDRudJNEK6ThRdbgxyGr2TViC5Pim6GZjFDELUgc5548LY5cU7t5n97lS7rlThNcRVnnB2i4QuutUQMCdmLb%2FxdvCKIGAHlPlTiIE%2FQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=MfnqWrgzdmN2zF6%2Bgt%2F1Kh5MrIH2XDt8zg%2BT6jj60dmg9xtRl9VjddwOHnCnGIBHO8FY0%2BqeBlwiBIdXsN4x%2BqFbEe9t5uhOqr5z1eSOOQJOdtIK3whCXRapsMlf7KA%2BiPF6aRRVxNrV6Gm4Q%2BEiewgTzhd8BFpR35K%2BVePopglTBHZhEzfYSCzdrp50suL%2BzsPEQ008%2Bqz3KQRVhI85SQjWvq8BBAugc3ZZj1w%3D--Gjdt6kH5tecJ8XK8--HWHk8PuTEuhEmRktQfnoow%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:21 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2d13d765-9e5c-45f5-a9ac-f498bee3878f",
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
## Can create new pin for testing pagination cid='bafkreianhv2ebvh6bai3ljgejz7cwicazvsfmjr475yw3oqkxubo2pocpe' - ❌ FAILED

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
{"cid":"bafkreianhv2ebvh6bai3ljgejz7cwicazvsfmjr475yw3oqkxubo2pocpe","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cf47f567f82-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:22 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BL9ggqfaGXfq4yoz8RHLPxdpP64ZJanj77Pf%2FeoabSlZCqDZYExvIG9BQbuIcPiGkTviV1liqbAZqMzVxVVK0QSSGVBaz5LoeV3TezDUipTGI7gb3tUoNnwNEfX9r6mz6A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=WihMr26rLjj4Hmx125aIMfu9666DOHBmb5JLBrc3NGHT1MzfbZ81rR2juDuBSMtrquMiogf0sHDLF5exOl6jNEA2kPcCRhUBCd8GCMgLc5MMlyVOwzlpE4rq7heyvS2qaLT8jblBj9yuBfICRj%2B2zuQtF7ZiJqzFitMgDWVog4CW%2BUt4I61ppRu1vFNxxXrQ0N7k4MM2OCi6IdO7C2sjfj%2FZjlgMBxWy%2Bv2pMvo%3D--BB7MLe39l3p409TI--ImD1JOC9T5piSr3VLg%2BK%2FA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:22 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b97e2c6e-0dfb-44cd-af3a-5dc6cf810e21",
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
## Can create new pin for testing pagination cid='bafkreihxu3mxg6zmmzhkkaawaro76o2o7g7x5pwmvcovez2um5d7hq77ui' - ❌ FAILED

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
{"cid":"bafkreihxu3mxg6zmmzhkkaawaro76o2o7g7x5pwmvcovez2um5d7hq77ui","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cfabb192010-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:23 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eY%2FcbhBQBDfhZ6pSLboFXWuw1i8o%2B09mWvOBFsXyhWwAYGrOyTh%2BhSIEpUXLGjy1yqrp4NcvAuE%2B0iMuS0r9ELXPlVq1zZ4C0dEUZJwaJnfpfdzU8N4Xq2mkygxRDpAtpw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=dLmy2TLA0HC0RpqhjpnGVDl%2FaSquv%2FUAupfLtN31WoR2TDKuMYu8AS%2BmIiPTl%2FtyRPmyyEidiObPQXb9vYA1FspLHTZ6IgJ1jAODREeoEiTtxHmcESEJ0wKnUbreBCrHp2fgd2uitNBRD6oyQDpeeqBMlxi3b%2FqG%2BqSivxdKtTwnq3UevydR4LBTJBK3hsDQ5ME4gsz1KiZnPptH%2F9eq1YjyGPzRLNktiKlnaEc%3D--mhPC%2FQhzqLxgu6z2--EmxdWA5O8J9cFrTP%2B3oYQA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:23 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "103e1dc5-d15d-40d6-a3c1-28b3556734cb",
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
## Can create new pin for testing pagination cid='bafkreie7trrm2dhdxgdifckb3t3kqcce5vtf663gzlzvg65xuk4h4lizwu' - ❌ FAILED

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
{"cid":"bafkreie7trrm2dhdxgdifckb3t3kqcce5vtf663gzlzvg65xuk4h4lizwu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668d00f9e93922-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:24 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ya%2Fc8H1QIcJlIFpiNEde3L%2BZBP1NoFiwoR1PQlanAMm6jhD%2B20yY%2Fd2lmdrpVZor6GdKeBgRi6HI1eWI6ZIRfv1CQ1ElPADifVAnK2un3HJCHEpmoILmMF1kFGoSHn%2F76g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=IAs8Pr3QihkKta8CNj%2B1mH5gJgdvPvxsW1JrCm%2FQMqH1IBClNE5rDvpGntAqBUQARK7jtiuohNKlTL2dIsP7ZC5gkWHS7m7mgJU7iyeJe8PyeMTys2nB%2FUxBmE3mV4HiDvRS1mRJWGO%2Fm3vViI2gatnpv2j6maG7IllwRzry%2B3m%2FAkemqmQ5irLN%2FGZXoM3TWvMDW2he4qIx0JMxnjY1kmdxKK39mdyFKTBCnOo%3D--PATMfFE%2FlbTGBQdC--vOylnxvYjPo6VxNkAxClzw%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:24 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "64d97e58-423a-49b6-bf9c-5ca6e3070236",
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
## Can create new pin for testing pagination cid='bafkreihh2l6szfk25ibyssyh7d25rt4zbu4nczzwefppsqco7fepwauf24' - ❌ FAILED

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
{"cid":"bafkreihh2l6szfk25ibyssyh7d25rt4zbu4nczzwefppsqco7fepwauf24","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668d073c70581e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:25 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9yAZz9UY%2B5%2FBQYCefeeW4jQ%2FHuIPXmD6096QD35ijZuscMGTi23diTyzVomng04D9HH%2FbO5tdzGxwLGsqoSF%2Fewn%2BCA6NO8uUBHW8F45GFUsR8xRCREHXTz7qZaAB5c24A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=cuj0qYyALYA0bFZou9EZSAahnBMAgpGCTDFWWnnHF1YEbvb5KL5tjcKYwCrJ0oSU%2Ffmy%2FSMo6H%2BdkIVkAJnvS%2Bkl9dNLZswkEvxl%2BfFmf4%2FSa3TqqmSLPFZhMIVz5YLWJGHZ0PdNE668TCqFo9midFaHpmFuAQut0dPzwb8bLhscw%2FC2oZ%2F5SpvZzrdoDfeDMejugxjSLMQHlZNoYNl3BktOylvOkcgR2ehk8Cw%3D--zSTb7xM5sPlBZID0--uKnZALU1XdCzjG9qjwEcHg%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:25 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e433260b-0395-4257-a049-c9051314b8dc",
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
## Can create new pin for testing pagination cid='bafkreie4hh7idka736tsfzymeh6qj7mt22plzwyapbcy66ftf6mgxwfgpi' - ❌ FAILED

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
{"cid":"bafkreie4hh7idka736tsfzymeh6qj7mt22plzwyapbcy66ftf6mgxwfgpi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
403 Forbidden
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668d0d7ee83ae2-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:26 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2qYzhYT%2Fo3Ur81bl0XMFpzPSDsh7YedWgWi0av8iOmPsLnjnJHj0pqb2Z5C8cL3kw%2Bt5LVM%2BI%2BlZjCIKYdw71Cn9xn4iyDuzQwSOinFPma2ZIMrYFqHbFFi6EsqrfLF6Cg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=NquIcUySi4J2Emj%2BjulPzq7l0jwATdoI0SPTl%2B3dZ2k72b%2BLDeXbLdYq7r94%2BporSmpjMSKzKqwlBOYQS2Uwnx%2FDXY%2F7Z7d0a9tuLEAO1b8%2B7ecsPat%2Bf%2FBqv3mYYC0FYy5n%2BsEXGcwTJAQjHuh4wrrCRNFaQohlmiymeQrZvJtzbvJKq746gJhYlDECYSyYb1ff9tsn7QjF5MN8nBm1m1LS5RIj2vZHHe1HQD4%3D--F3GmL73Q4e04eoBQ--CSr24AkaSYmduv84NdtcPA%3D%3D; domain=.filebase.io; path=/; expires=Wed, 22 Feb 2023 18:50:26 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f67e8cd7-8481-4d91-b35d-331a15701be3",
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668d13bccf3b8f-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:27 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T1sog2cXIVmYJep3O0Ji4pFBbQZwl3Wssk6%2FIey9KzneFFCIqbEbiATZCa3Qx0%2Ff%2B1t3el92u12vy0zrhyMSb%2BsXgKOhwjPFIjw6mknPhZWJ0lSWwm9aymu6KSSyzjFTbQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "73932cb6-ea9d-46dd-ab1b-826d2a1df05e",
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-02-08T18%3A50%3A27.865Z
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668d144bcb9c1c-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:27 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4FNE1pSYEOicM36ybGi2iG7o24dLD2oHDrKR6iwspFUnMTfwr3LVlBKSGKSFprTNEIOpqRlc6%2F2HlXI33d5N6pZB6AxSPW1HZ4vDOsUKYAiHuS5Iiz61HYBl05%2FX0FrmKA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a029149e-4b60-404b-85ca-c4d60a1c0882",
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668cafaab756ec-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:11 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TgBsCs5cagsWJIL7RPEtWCx7nwQRpRb3Z6tFaYAkAPgA%2BgyZrSFNuw6Yo%2BnqqCk9G5vDLjv4hTfdyUSTyTQXbN6rD2DFE5Q2QABf94ZRxoz7oXyczcdzP4a%2BEhntbjQhqg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7b8b7608-0199-46d5-bfa2-2bcdd4c6d14e",
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668d20c92681db-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:29 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XWR4kxeUuwlzOtKC9XOliRdAA0B8Fdl3xn81fb%2F3mO0e8oEQCi5CyVwm3IvLlA6hlCbxcBZCEJQ9I9kdZm2G1CpSMIz8Gi4bOc%2FuCEeU%2Bj0m3RQLAvs5odGcZymz56%2F17Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "03bc6fca-0d52-44e9-a4be-e7e836946686",
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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
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
  "access-control-allow-origin": "*",
  "cache-control": "no-cache",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "79668d1a8fdf5a27-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Wed, 08 Feb 2023 18:50:28 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wRdfEnlqeaDXzpyug1LY1hXTpp%2FSuEt3U3%2Bqhi7wZiLGm2cj03ZGgqOcKKIqMpyUYECdTpuZOhdBC%2Bqba1QNFYPmw%2BMorwiB8oDfSe%2FNlu%2FGbL8ga22dN7wF2F4MJxYKRw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "0594137e-cc2a-45e5-a12b-475f69174514",
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
