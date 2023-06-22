
<script src="./telemetry.js"></script>
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2023-06-22T09:19:58.845Z

Revision: [3d9aa58](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/3d9aa58)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (2/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreidfjbhh4h4tpwqb2n45l7p6dvlusaeyhsh3rezxsjn4zan5yxepaq'](#pins-post-of-cid-bafkreidfjbhh4h4tpwqb2n45l7p6dvlusaeyhsh3rezxsjn4zan5yxepaq----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='240cf77b-ea0c-42dc-9a7b-437d732eddbd'](#can-create-a-pin-with-name240cf77b-ea0c-42dc-9a7b-437d732eddbd----failed)

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
  "cf-ray": "7db368eb4f54642c-SJC",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:28 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L5pNQxkQ2q1HewZp%2BgNjFUkN5umY%2BCptfYOiMHCI7P2lEzGErnctXBJwtz3tRGDrexquGSL5wiZECqgMcyquSDfeXG9pc382FjasM9tvs3tZ%2FuEwbiAPGeZBQHUMYl6MpA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c2f0120c-b4da-45f1-a609-14503f48fe35",
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
  "cf-ray": "7db368f18869cfe1-SJC",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:29 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Biq03UU44Umiow8gsblAoIHUjdf778MQgFpylb0xKRMBZN7Go3ezCcMH2T%2Bftq%2B21WtiYFM6l4OKulK%2B6danokKiY92o%2FoQFKwvDYDfMrql47lHapdY85CayxZPMibG60Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "60682b53-0138-4453-8a74-f177ea08deca",
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
## Pins post of CID 'bafkreidfjbhh4h4tpwqb2n45l7p6dvlusaeyhsh3rezxsjn4zan5yxepaq' - ❌ FAILED

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
{"cid":"bafkreidfjbhh4h4tpwqb2n45l7p6dvlusaeyhsh3rezxsjn4zan5yxepaq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db368f7ceaefa66-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:30 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ds6FVQp8alrUA2TWQ%2Fwygmbo9x614cidu4rMmYQBnH31bLjfxIQqYPiTNnORn33lwDEWeScbfRKohgHoT28%2Bo5QEiieWecn0LRjTRg4sIZEMxuk6CeGhQtmsR5hYXIOobw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=vQrn2R8LKmHkg%2Fxy7IBF%2FD4IqPz4zpMwkbRYrih40bONFt%2FSZpuVK5zDyp9A%2Bxir0Yku2WJUBbpUUdbx2Wwd0FEjVjt1jdB1vHRALnycYet4lth%2FgF0kxtFWCkvLln8NprLlLNhUzGLbykg78kcjCqWugxZKVT6Xbq4jkiakzAVp2yn3j56%2BWmiXlbq6yKzWPprhP9MnZi1Vw8IC9B1kaV2i0OfQpNVlBDefMyc%3D--wyvj6YnQuZa1b9S%2F--h25yGHdysycxRcFZQ0dqcA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:30 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fe12a6eb-1f75-4880-8772-71db1a68f92c",
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
  "cf-ray": "7db369044a8517f4-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:32 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A3mImNa6%2BGcZXH1XNp9mOzFHTAcZ6s0CIuGD0qKbopKT4MZPYlHOV4iLHBuXv8iiXnmY%2BylzZX1k18Hj%2FiWZxSM0hUAk5kQcBeU9xRF5qtjxXiN5Wz%2BHg81Z4kfwNJ53fA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=89d2xqqiRpmAUPazuA%2FRLh9hFqKl3m3eI%2FIEFgq7k1zBr3OIWGrvTUgW1bFQQXRFc%2FOY12w7Dl54%2ByfAq6%2FePl8IXVARt3sdUEZLOKqOrTdFdmETri0scC5VyzOa9O%2FkBJExriLKUU3xOuBmEZtTDl4lIulD6WW7R5aOTxdC7b5XvPXWk3bR5JnkVhCvkMcQX4A0X%2Bp5voE%2BCMVrES8WXCAhb6ui8L6nuplNvyg%3D--dJwEhx%2FtQCAuSXq%2F--RnfAcXbeqQtjmjF1SpZB6g%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:32 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3da9c870-edc6-44af-b9f9-59d4847b48b8",
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
{"cid":"bafkreidzkhahjq3oy2k2snjczvr6syz2ouwkwsh6s5uhwf6m5tegjfxcay","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db368fe09e3cfc0-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:31 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cpdQIh3LmOWP9JLRyj7LrZVdl3kOdr%2BTDoj85Voo%2FfQ%2FGjdlTobjM6tqVo49lQRr6hE8egf5ulqIg10GASibmx%2BNCiAapdYGmpcIP%2Fg0bTBs4q5PiH6%2FzvfZo2vkRxhXFA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=uNRYkWGP8uW51lpQMTHFiFVvMmqIfI752lmix1Txd9r3wiJtwQgo5PbfWDf%2FHHO9bGRDA%2FcQS07aHOlP5q0QamsHRNJYW%2Fh6dKMZAg3TZM4Dpn8zSZ2MJVc8XzlDyxXF80xChfmr7z4rYcDMLPBoVbqxX%2Fc1IRA8qqbGn6HF5QOImR%2B815fdYmTPpv8ddRTmV7azsPPINgrhKcsuDlaH7T5ILV7WFqrgLHp0rSY%3D--rHkpQSDcRzhuUVP6--u8CwUCfaVYE0jbS5oG1FXQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:31 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "f8a0860c-9417-4fb6-9eee-14b9cd5b0622",
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
  "cf-ray": "7db36905df51944a-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:32 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=txb3Iob6yEcrYaz5cSMQsxYDLJQEwpFJlnCJXh7D6pqoTeTG29zCXz%2BGai76LyX%2FulPQXwc2gerOBtkPJzrWtlVX6qiLjRKNLJS9nFIWAhCAG4apJkLv09S2kno7ZnGDTQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "0da536c5-9e8f-40a6-a9c9-b01418a947bd",
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
  "cf-ray": "7db36918aae0f9cc-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:36 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oTQ%2B67es7dGrZauL2c9%2BM%2BL0YORBEuVBJWGcC2jh0FkXc1n8LOYjvw2%2BtxhQgSkdM9f4Mw%2Bz2QCH1dx5003fkomWyM1S67%2F04YSp3HwEF%2Bx1NRm1tNwUpl9HkoehZRtxpQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "da86f5b9-b634-4ca1-a293-2a4881fbc411",
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
  "cf-ray": "7db3691eea08641d-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:37 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tbmJJ2Ppr9nAKSFX34Gl0G2uZ13oxaYslTL26AswV%2BHStOf82icinRIzMBgfH4WMtDZCQRkEIapKU3FSRq%2B1cYnWt1X1qg69rAM1bcYjzYm0IIR3VezpiZ%2Fy6UXq4ya4NA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "378a176f-7e33-45f2-a9e7-903225dc4f41",
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
## Pin's with requestid 'null' can have cid 'bafkreidvdbucm7jth7344kl3vqm3zxdul3sbiz7mfpeaprubwprmjximi4' replaced with 'bafkreiehmqwrhbp3f5ypqlpi3oc636acyfaj2wivaxcvju3wx36v35uuz4' - ❌ FAILED

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
{"cid":"bafkreiehmqwrhbp3f5ypqlpi3oc636acyfaj2wivaxcvju3wx36v35uuz4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369126a2a1746-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:35 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JRxs12xPA%2B7yrKn%2BuCLs%2Fcl9%2BJpAKvKJsS%2B66QBBHGJnKZvGw3tt6G8P94gt0xPidWvs5FcfbvinElGYbss9hUzCKqHKmrz0NksZG5DxSeivvPZZBg11vHkn%2BLSjPiqJWw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=itOcM%2B6%2BI%2BQt9q3Eijkc3H8KvmjVkS29uDuT6k9g5k%2F8RbJ%2Fj5mb4seuRCxcOynLDkNDFH8NY1rm8%2BHkL5uFJ249CnTFvCgWxYpVFY1k3u86lg4XaZnwXywKBFTh9ecn9MiOfNi91DPpgFHuzO6OpxBiKYRc4hVhLBqH%2BDna8lPwuBFsq4%2BQ0XXSg91EhXoGTbgRjy%2FE6vn%2FXsPE07vukhh6Eo8vGx69b7OvWq8%3D--qZ2U8xZ9Dtp5T6k9--%2F4O17PNswIUckQXWcJpiUg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:34 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d575a0f1-0fe7-4b05-8bc0-673984ad2e77",
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
{"cid":"bafkreidvdbucm7jth7344kl3vqm3zxdul3sbiz7mfpeaprubwprmjximi4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3690c1d91175f-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:34 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=olc%2BozQDGVYmd7Ct20cUdeEsSlZFz8kOTdqRDBUFOzt1ABUEVRxHiGb567gqdufABGIPDyW5TKy4z%2FXVs2D1OvH5XC5ygUQFHUZLf73j49hOFfDjtrZKKdIhn0c%2BmlI5%2Bw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=U%2FS7itg19C4oWVSLpRK%2FGb9SCot%2BJ%2FjwA%2BMLLhGgk897fPF0rGdCFRIsclM%2Bkc%2FBuxUqT3gO%2FPVpD8efginFPwAyZQSFjCNZroaDkPPpyJxPrvj2PeM91%2F95nHgV%2BP6wK7NN%2Fo4TgoHQ%2FBq6NXaoPO8u%2F6ohlJT7UXUnptQJ9A66qXy8jRQLP9zy1vlG%2BQzpSeu2sINURg9xytur2bjViuAQe0lNTF3wriREZJE%3D--MyEediA4lEMg5uP8--hVtoZJ4LZvM4lUW%2FxirjDg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:33 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "533c4123-f6b8-4062-89b0-4f2c6f8a6864",
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
## Can retrieve pin with name '240cf77b-ea0c-42dc-9a7b-437d732eddbd' via the 'exact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=240cf77b-ea0c-42dc-9a7b-437d732eddbd&match=exact
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
  "cf-ray": "7db36926bf0015b2-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:38 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6a3i9OyD0JUKBY65MBmJUioAk4a%2B3x4JeXZWrQ01rY%2FLH7zmHfLRu%2FAOVC%2BAMZXwaIKJNgizx%2BhT%2BOkGjSy%2BE6iY6P7pIUoLc%2FOfeRkQXxz%2Fa%2B3HrMDLwvRy0hN%2FhBKftw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6988c5ff-914e-475b-bf88-c0633bdcd559",
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
## Can retrieve pin with name '240CF77B-EA0C-42DC-9A7B-437D732EDDBD' via the 'iexact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=240CF77B-EA0C-42DC-9A7B-437D732EDDBD&match=iexact
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
  "cf-ray": "7db3692cffcd2320-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:39 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RnhEssMgsl6RjDPPL6eLwZUH4bt7dEDGxbKFF7S%2Fnl4Gv67xkoDGFuczORgKpdvSUkzCP%2FU2iI6TevT8zWGC%2BB86a0gZSjah6zoHG%2BeaypeiBYc2f1efirRXZefybgOp9w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9c271481-8dd8-40e7-8712-b2cd104d0597",
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
## Can retrieve pin with name 'ea0c-42dc-9a7b-437' via the 'partial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=ea0c-42dc-9a7b-437&match=partial
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
  "cf-ray": "7db369333c6dfb4c-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:40 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NVLNyZBk2rzqKZMEZaC8lgmM495DXWUpgnPyC2ltGns1qc0rIKqhwP3X75LLsB%2FQ0DkNWxUueYTnmsoKCm2NjxRMr8RgZ9TP4QKmkgs0IlwKavabwzB9QVhBRIimkxiE%2FQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c5007bae-e2d4-4e68-aa0c-c63285188032",
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
## Can retrieve pin with name 'EA0C-42DC-9A7B-437' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=EA0C-42DC-9A7B-437&match=ipartial
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
  "cf-ray": "7db3693978ec15f5-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:41 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dYreuLeyeTGa6CoouD%2FQR4pHHxmHKa6La35klEAxYrUq%2BJk%2BJlB6EqEMAxgF1ZQniKZEN0Aw%2BRDelWrLcPeJV%2B8TF%2BdVnt68biq76S0WaV27MbPYN9KK%2BR6%2FtSXiwd2TSA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "079acc8c-3438-4702-936e-64c908ad6e89",
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
## Can create a pin with name='240cf77b-ea0c-42dc-9a7b-437d732eddbd' - ❌ FAILED

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
{"cid":"bafkreidbns7rajkslcboeyhncrp5vo3vx5ckmu4oviisj23ekpu2cj2ywm","name":"240cf77b-ea0c-42dc-9a7b-437d732eddbd","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369206d2417f0-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:37 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JhYc1pwMrdPPCtym3r5HqsNT43EVim3qXx%2B14QTYomxRfyOdpFt%2Bbd2EcGBH%2ByfG0XSvWmbY2vBlBejab0pNluSsS1CTHjmQdFwT2UcQobyd%2BFIn6i3jjdre7C5FYDX4Ew%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=wBS6OLkS9ujViEbSdmRj2RwLr1lQx2pSv5wkQ7nyqM6%2BA9L6BdhEs1FZM1xOz82UsrB3iFS2X%2FQ07G5kL3JVB2pmAviLTc3h0kVIA4Mh0h11q8Pne2sjsJ8bRjSQD3jQjsWXkHyx71vPbL86ray1KTkVrNnRp42OM6Ea7vo3zXeE71VgNyP%2BHUuLl3nBGsZASetwWFD6hTMAdUg0kxit4hGuXXB%2FztH%2BB5UGUfM%3D--4%2B5CtyAiyYWoNu1P--JdBTQShASCDH2i1TagQj%2BA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:37 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9bb6d0f7-8ece-4455-b89f-8ef126aeedcb",
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
## Can create new pin for testing pagination cid='bafkreidj6uov5ji2xuy3xlanjpr36rptsvcahieu6zz6or5o35ltnzhosu' - ❌ FAILED

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
{"cid":"bafkreidj6uov5ji2xuy3xlanjpr36rptsvcahieu6zz6or5o35ltnzhosu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36941798796b4-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:42 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=83YkYXpnuzXxO3kBVhgPUow6%2BUl3WsaEGu5s1GklksQAbYKX8p4%2BGUBeKkzq9SIKY3zxHcrYPSsdTIpD1kbNCrFTz%2FhNsFJ1gkrWAOd9pgbhQO8N0DjwHIT5c8jZ%2BJE%2BMA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=oLKeEdzv4EZJdGehVqf89qhOg0y0YQ7xsUPzUi8g9rsRpGbX8AIZdJecgEcmmPTtyLjli7Z2HGQNUK7Anfot38cKjWsMBvE5oVZhd9emN0leWIzIE8BANwSXQGGVo%2BVIcngdgF2%2FBSGuYc384TTTDWVNboP9jFA3SBjWt9TEn1Ww%2FXNDDoJGkAe4rMTfIyeZ4%2FUdngdO0fX3Rzi5jkW6iyNKiGJ4XBxr7%2BtRAuI%3D--rbPox2sxo6QTfSoz--IBsQIeAMh3Pfh1GV2SOzjg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:42 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5b2ba1d1-0b38-417f-b7c7-875fc13adabe",
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
## Can create new pin for testing pagination cid='bafkreid5oomesg5wlo2au53d77l23vktuwtmlqbgq5xtfnv7mcnwwzmrji' - ❌ FAILED

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
{"cid":"bafkreid5oomesg5wlo2au53d77l23vktuwtmlqbgq5xtfnv7mcnwwzmrji","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36943193e227e-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:42 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CkCjrFB5q%2BgryWsXFN%2FpLZSp9hTHU5i8gXdECJFLdrQrPOw12pAK0d%2Bi5yZSnAqt59CPH8z%2FGfpFBtog4LtGo%2FIFMMrdjbUlvVSBCndOGArH3e2nX0PvD%2BVsW4KaC5lhtA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=1JJ8qQ%2B5Ka9WZO51j3qD8phKwsbtYrtdM%2BVpEdVouJ30ZzMXoAxhkLEIZGxcL0HgPMew9jgKPCfCs0vBA8U0GBafe8bF7Xarywd%2FbVJfErot74REXdJCgt3ajVti14gx4kqElInt2cp2UEc%2BFjX4BGytilgtwPCgu2dbZTJfNn77GtSBsZbnuBf6Xnnz3SZSrBpK3WoF%2FbRrHb3BtEIhXzZ2CLYyxWE%2FBHWXvks%3D--IKU3tupt1f9Ah0Rn--bX%2Bz9CsyrNknDhIH3n0Xyw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:42 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "43fead63-f500-4f5f-90b4-eab98eaf29c0",
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
## Can create new pin for testing pagination cid='bafkreieulhloqjmpgoiztz2lxwovcdhk56mlinl5gtzodrgxbowu7r55v4' - ❌ FAILED

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
{"cid":"bafkreieulhloqjmpgoiztz2lxwovcdhk56mlinl5gtzodrgxbowu7r55v4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36947be5d6438-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9fRRGdzxJLtv3qsJLqP2vmbpj3C5GSIzX2xKx4jWSpruOsMfbUbViW08BinFLlA5gKWHUptc2Wzj%2F4AoSBCJh5oHyysBefzFd%2Fmn5es89bOZSDQGfDdXznvosaKAqjIuxQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=Xk0jTJPZAIpa00KH29ckndu0TzTCqDXuURBR6BDjrG7zJu8BXF8FGWqivwqLic4GSlVIgliBQG2DIJUzaDjKiPoHxfaXOoOXNiaSM%2BvDiVKkL%2BwDm2VB5hENPSviso610CSPjiW4ejJ%2ByJDEz67pIHLYhRMiRPDqbCqD2vTEBCgKbJ55g1J24NO8vr08SQqxZX7vAu7PTG8jEe1U5yNhJUZi46xZimjg%2BCVH%2FZc%3D--Ycygs3verLD%2BhkIS--lkbPVrRPrhdx%2BfBa%2BOAXHw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:43 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "60a08ad6-ab1b-4068-ad3c-806a7b8a4553",
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
## Can create new pin for testing pagination cid='bafkreigdnm4xmvvqslmvq7qgofv3ohk3dlbnlaxxuterqipk5micczqcei' - ❌ FAILED

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
{"cid":"bafkreigdnm4xmvvqslmvq7qgofv3ohk3dlbnlaxxuterqipk5micczqcei","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3694dfe6a1742-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:44 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QsIpZ4kJcAjNxfEUqGsLINnHyWO5lXr8nh0ZH%2BUn4%2Bw4fiWeOz50ZrTS6ceTr8lZPNt2y0sgvMHnLBmQIB6MjQ7nm1ftS72TodtvdlDMLS8cKd9ip54bChZEtEU38jiysQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=zCSyaWpqPBDzymAde1IZjMXSXKJ9lB1DiQfXDmmPhgyMFlylN%2B%2BdwDOrG9Vo9HvUqs42b1Ck4SAraiPjhqMraQizCHxkeJyv7ax0NMOYb1kkGj0YpWwleIYyXHixqEI50f%2BPdyz%2BZmBBDl4eiMHiXCOcSAB98F2pJ%2FYfE1%2BiWiGarU8ef89rBtrQQNdKN%2B6yMKNwiyxtvXkAh8IbbJkHvCh5SLrdTEKSxDlTjEE%3D--wCZdlZZm2FsMzoD5--paOjm3XTGEJrgZE5TwztFQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:44 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b496647a-bc7d-483b-9051-1949470b9cc6",
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
## Can create new pin for testing pagination cid='bafkreifayq3uxurkbb7oxthaorw2ll3gaozhdc44oe7ezhd4uoa3tugb74' - ❌ FAILED

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
{"cid":"bafkreifayq3uxurkbb7oxthaorw2ll3gaozhdc44oe7ezhd4uoa3tugb74","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369543836d039-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:45 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y5HOnFlzPer28vnMVGDXmMwiakumCq2RXRBKuFPTUm4W1NoeYJEbbZ%2Fo32B1odaSVy3VQwnU0VZYX2YrPhq%2BPRaULmnPhw3hF5Hs5WHkXK5umSp1hRRfgAqd8U%2Bj6NdQaQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=29hIoCxtxv3E7pcQA6MUqtxvk397geiq8uP71eWVZleQGRBiAkoneNeR2qqYBJF8w22RzqVjYKIJBfCwBdEow4wxy4yeoWfjgSerZAuf0QG6xp2oJmnRy1BinRtm%2FjBMOPpxNEvnjeXyXo7vl%2BWFm4EV%2Fu%2FhKmi2any0QgHX%2BYRe6N9U4LNc9jG3K%2B%2BdEPttGWqdjePfvbbdI%2F%2FSTl2FQkoW2ULKhrK9%2Bno1bCA%3D--Cfeh79iSYaZlNCax--yRo6CGov57LdHWrnD1HH%2FA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:45 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6792f183-32fa-4c44-ac0d-0990b574f1ff",
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
## Can create new pin for testing pagination cid='bafkreigsbpmbuwi4fyl6uroileyre4nyvwwiid5ni24ios2ok2x3mtf344' - ❌ FAILED

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
{"cid":"bafkreigsbpmbuwi4fyl6uroileyre4nyvwwiid5ni24ios2ok2x3mtf344","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3695a7b00f93d-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:46 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zVmRrLMdhTjqhj66YmgxDQ1ACJtjMf01p5v74HPaIIZizlyTFDensq6CaRV6JF%2BQgN4W5TCT1uJlXp8%2FKtLNxVRA9OoT%2BogPGWsLlmXt8ZIHZ%2BdppK2LIGLwIvRPNw4sNw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=%2B5mQ9mpij2iLDQKqD9KRe8fncC%2FP3B8Ifz7xG76uMn3qPIKHQ%2F0uyshNeferq4piohDfZz95t8ybJu%2Bx5jytNTb%2Bez6A%2BA2rBAUtZb%2Fzhjq5Rl9nQFbPI92GuGDSc9GbzoBElDWMxVMWkOhe%2F2gUeeHrDubD5qgU%2FDeZGXtKCWRL1nZMIP2B1gcfZhuukm8GlSfgNZIeP9WgbZRV8%2BqmeZdYUV7ninDIuc7dO%2BQ%3D--tpPfM5qYMiR7vRld--ztTW5jmrqNQ089rEQ8SZ2A%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:46 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7f9a2ae2-7baf-499e-908a-6a187caec250",
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
## Can create new pin for testing pagination cid='bafkreifqvqfq3ryqhlgtreotarfjq76lvxe264iz22fme43wxhwk5n2fpm' - ❌ FAILED

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
{"cid":"bafkreifqvqfq3ryqhlgtreotarfjq76lvxe264iz22fme43wxhwk5n2fpm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36960b8fd641c-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:47 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UtfXPmcokuk%2BmZY3obI291c4qI22%2FUOiB6L1AAPbtWL7bdg6w7QdSzv0JVEqYk3LnK%2FhjCe8QTjZHN7lx0XAwx4PXhSad36kM24me5PYlola9K1dSv56t9oAtBIkhrwP6w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=ujMSef0CXrzCtVaSeTar0V9ByXDhlvgLh9HyAA5eyHLqtSoh4%2BeIjT9UE59XYG57Ym9cjPaatkDkzX%2FBz4WnGr85mzxQK82idswauFhAEYN2pnHTpQmYm0cCH9gKsVjA9OkUF7rn7Cjoe8FHAZLKOrOCtjA1zuM5vp%2BM3hQ1tUgMSvAGDGUqFPcj3EC%2BplhroJ7evrCZ%2F0AxTUcDzgpmPpvxgageHQFaTLtVCjc%3D--unz%2Fm4AKekXcjbbi--iMp4cm7fl9tiCzVVrr%2F7aA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:47 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "25d12ab5-918b-4efd-a9d2-724ef3c36ed3",
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
## Can create new pin for testing pagination cid='bafkreidrdcq5afb5gj5fqu4pthxifptfhanng4o7u6bt6wnbhgdprvrb54' - ❌ FAILED

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
{"cid":"bafkreidrdcq5afb5gj5fqu4pthxifptfhanng4o7u6bt6wnbhgdprvrb54","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369670a359803-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:48 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ILIYDKOkATIODRStDxXt8OVPhapuwYdGMiamapuoAHX%2FOd12IErLCpIg%2FUkO27CRs3lKY2%2Bf5aQArm1W4BJrLKagqLUGhECklNZdl9sUQgTa%2FmK%2Bx4sEpw8ORC6tqMXDsg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=FfCzA69%2Fhp8McZl8wiKqWAn6xFQkqEtb1b4GDUAs3NClD9eLVoys8u7NSkV3ZTRYv1za9EZMQ8fULcqWU3QD1zIXVH3Yha6bvHngQwWdz27mISmW1cjMz8MAM2huw4g2KGjDJYACwAyTZdm8qrxiafmhVoj954SQAN%2FP%2BLRGSHEplwylchvg2lW56BlBLsoPJIJmS9JlipNyRGkCvxgOHKONDIJ%2FTZUhd7DWz8M%3D--GtBz2J4so7yCEbAj--X44q9WFUclTfG0tyQmG1%2BA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:48 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5cad1e01-a604-441b-a330-90cbb63188fa",
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
## Can create new pin for testing pagination cid='bafkreidtm4w4wndjykisdlbtck5564zdbqf3x5gyipwhysupjbmxrkfbfe' - ❌ FAILED

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
{"cid":"bafkreidtm4w4wndjykisdlbtck5564zdbqf3x5gyipwhysupjbmxrkfbfe","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3696d49b4156b-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:49 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FLCfP2NoA86QefrT%2BuGVU9jKmA9E6whq%2BYFgKVmedvmiGAc3kw0ImHf2Km2eK%2FMJnGzyYpdzeADtXlUkTgI891sHpG38gFFoZh5tt%2FtwNbE%2Buso3Va7bPbYSvjiek4nXGQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=4rzh9nsfGsRKDb8S9NrOLQ0TpUwYFuQ1NzSdrexhGtrkbXH%2FXDW2elKO5x9cKH7%2FNCtNRvN1JX5kIUcISbZ4kNVdlOwkTwJojgH4ZkIjdrUwBQNRr0dzpynOHeAkTiFvAHe9gpmSPBN44N3Q5lBtpbkUHGPZwgWbsNle%2BDIgMKV5l7Ifm3mS1ulkhRk%2FcjRzPLA1sg%2FX5btHYKBomug9Zzdw2w%2FCw0rjzTHI7r8%3D--d6nKpK4yJJUVGWj1--PsoYvJIbit49I6xCwqf%2BLA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:49 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7c8209dd-6f06-4867-963a-febee7c9ba67",
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
## Can create new pin for testing pagination cid='bafkreibsi2xabjw4och5rcjfsewquku6j3fd2jbwndt5osad6eh5o7fcwy' - ❌ FAILED

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
{"cid":"bafkreibsi2xabjw4och5rcjfsewquku6j3fd2jbwndt5osad6eh5o7fcwy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369739e7d15ed-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:50 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GhIit4ijvE4fntvGsnPG9hBp16ckM71o%2FKtD8wdam38zzaxxS4V8IA6QbAN8i%2FERz7rgu%2B9LaNetIIe6xQrjHaET126O3bzZGWdQUausHZH5isa%2BefhTC2lhuFzlS%2BV%2BlQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=LbvgMFGs1vonrD9z4IZMhwNhjolw3dZ2ujv%2F5UiYHsWmOZtm68nDqBVVL1r074mvm82p55iVxHjYS7q3M3qu26oxxTLBNhWG%2F4UAp9exd1om%2BniX9u7tfHE%2BPbWb1ZXrN8zDtPUKgvnhV9joZzF%2BDxIOlt6f6hwLcrXQWsLj6u5o8eJ2Z90zKFBjANeawlohWlgh0vE55jDDd%2BqxYMb%2FHFtipQxSLClA9ug72F0%3D--ssGvwvY%2BymcBS1fT--xnnLluqftDKK6WWRXDnaow%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:50 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "4d24430e-5ced-4da0-8ce7-c21408369da1",
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
## Can create new pin for testing pagination cid='bafkreigk3sz33wve5wc6ci5jvwdu75xzonk5qkvkjmf5yabwyppkjv76e4' - ❌ FAILED

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
{"cid":"bafkreigk3sz33wve5wc6ci5jvwdu75xzonk5qkvkjmf5yabwyppkjv76e4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36979ceeef97f-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:51 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g2oMM7zvwCzBaQwZNwYtvO9kLjjGa47laofG7GqWtUYJNE6v0Ea%2FAgQAkX22oeJ5rF1P%2Fv%2B3kao6qzIV7YnYbvRbYIkPyJHMYe6CkU0V8eeydWlmzykQa5s2kRqtsrrdEw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=vxB30u45wUHOxQXosGXtlM8E9Xoc3hkpFywqu9PsGMIxnPwcEyUvu%2B8vAxHnMudiXla1i6NK3su97AW2qyy1sEKHqzcL7%2FYiy3R1zURlvU3A23AGO6Tr3YUvcfj6OME71W5G5wQ%2BVIJa653nctw7L3a8qy7TTIkPX0YMA7shMG%2FdSdQKdwH%2BJ1%2FWut01mK2DE0KL5y2UR6rXldFtHySr6J1R7HSgQWJukBEpYbw%3D--L4WkSg2y2YqnK4ii--lypyoB1MmKDWod5pJrbIiA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:51 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ba5b0e2d-116e-41eb-ad4a-12c549202e7c",
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
## Can create new pin for testing pagination cid='bafkreigodhwbsoll7ffghlz6yphk7dlb2ss533nlhztyer6hblddpvehgy' - ❌ FAILED

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
{"cid":"bafkreigodhwbsoll7ffghlz6yphk7dlb2ss533nlhztyer6hblddpvehgy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3698009fd22d2-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:52 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qhCzrphUH2WoS9UfxBZ3ObyuxQbylnu0j0lZjF6rOT2wj0vhcMNWfIQxCQ%2B63%2BgbdJryzSQ2NJT27p%2FyarEK5rrzyhfXtPSxFhICzgq0ZJodnz%2FXlU%2FqfRaaVEDgA8bMYA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=M2dy6%2Be7OPKWIdQYo7HjZV5h1awPRcg59lyv1VlHZIJf4Hj3OKs7K7m9r%2BQ4dyaZDq3NrpyhsNJD4n%2BxVLsPoeka9O9xfTnp9aRF6kME06ZRLDgdkcg0gsdv3j9LPXDBWNs9wajLFOWyz5cWcMh93%2FSRntkyCq0fW5Pa1x%2FPMD3R5KusM7%2FMVWQVMZZLV20uRvteiLQftnE18oBBgJuj%2BO3uoMSpoHudI%2Bt%2F2wY%3D--tiNWjEVmnehlM9eG--d1ezPF%2BBVt%2FFO5nYW79HVA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:52 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "57efcbaa-2b27-44ba-be09-495442a3dd48",
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
## Can create new pin for testing pagination cid='bafkreiayvg6sqquf5emwnmlhamv5s7hkndpcn2kbnshkwg5n6zxvij737e' - ❌ FAILED

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
{"cid":"bafkreiayvg6sqquf5emwnmlhamv5s7hkndpcn2kbnshkwg5n6zxvij737e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3698648959861-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:53 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NXMhj7V1rgcRtSuqvIVtK2ij32gUb%2BSSF69nT1PIlEzgI1w30s5RVrvsCqXx1cVpTRgAOhWHcJjhSPT9r%2BYNwxTwifElhrAqWSYHv9%2FMpP5pi15s49OqBTeC9wcBdwTppA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=GOaXm9M3I5xI8VhjCshlpXSnFWbI6AXMtt3Bn2Kh1Ve8c3SHFLf0T0GV%2B290SX85MNf9XlUtNEJg3zT%2BwB2aHCfLLfFcpRG%2FRKOpR85A8rpPKC1OCA6QGVbEXEuB%2FzO2NPe5KiB9PB49bjeV7v3K8H%2FuWXr6CjMjJYUAaW%2FZtBpWGkK68s1WOZ9hQYGU6BRdSWTyV%2F%2Bvxjzzinww9zRjU5TrhVJrtOfmVEXzbaY%3D--idlRavZ6FHX%2Fepxv--zA4YJ6gATJWiAldnsZE3Gg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:53 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d236ac63-7b75-4ef7-b2a0-590ad024ed2f",
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
## Can create new pin for testing pagination cid='bafkreiasq6kl4e26muzotqj4jcrxwxpzvwrx3upo6fj2mdy2gpw7dnvy6e' - ❌ FAILED

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
{"cid":"bafkreiasq6kl4e26muzotqj4jcrxwxpzvwrx3upo6fj2mdy2gpw7dnvy6e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3698c89ac22ea-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:54 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0yVimPsmKYmoZh45fZwSuYjAR65OIEF642xvL3eQmqm6Ivp8XLPiMnN4L%2F9ShKe2x2viL9PIou09CPbwcvawE8TWrUfqZ6pvoklyitgluGVs74kTXbHdBbPfSmRzXhNWjA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=uAnV28bWoC5QwQ3NRoEl3Ppvzbi0SmwPjy0YgggGJP1RDjfhw%2BzMDwFKSSyprDNZmL9gt%2Fp1v%2FKVrSUBVogZYXm9i2EEUTBfSBV7Jc9ly0c4Myp2Th%2BwvQrmo8BVwj8Gx0Cy6O6kASgGSyOMW3Pay%2B706dawXqo1vWeXrDaE0Pa6AMCM5Mg8HJk%2BMjn7xfSM4TzWlDdTLi772G%2Bj6ZxIgFa%2FIFWG%2F3NbZVlpm4M%3D--ccjKTdOkh76vd%2FEg--0Rximej2aBowJsMRDcXs8w%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:54 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c6ebfb6b-f4b3-4428-9610-5022d0259fc6",
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
## Can create new pin for testing pagination cid='bafkreiem6qxetezunhkjrrysgwzlwmmmm46lo2xoa3glyyvceyqbfmu37u' - ❌ FAILED

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
{"cid":"bafkreiem6qxetezunhkjrrysgwzlwmmmm46lo2xoa3glyyvceyqbfmu37u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36992c9e3fa05-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:55 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lpXbIuzU0FkP%2BXgCyDq2Blm5vTWxp7fvrpG5TwwvnPaM45dZqer3wgWyHMwS8OwkmSVg%2BsNTaIYTYINGrXsCAdQTSBVWc2uZfBi09iPkjT72E7XIEo9FazDBurzZks1bxA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=bh3M9oxYvksDTHxXP9MzxfOS5ppoY6mNgW1ix7%2FQB3XBXLpJP8pg8SVsyzEKbdjrrUJ7vf0uGUhpUE4oKbAwPtFsTJLsHq3wmEvnVnHEySzJIqmVd1PX%2Bakz8kE0vUQ%2B40R0N9s%2FFR2uI%2FMRZ82dkWR41be8i5miZzrLiXDJ1w9NK6ARKD5EqLu0m27ZMpkH26PhcgSVldmH%2BbVdGx4%2BDhTH1K%2BT%2FlPPAXjUPKA%3D--vMXasNRf1IbmquRZ--GXK%2BjNfCV6zRXX6z5t1eDA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:19:55 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "96c90866-cc7b-4663-a8ae-17ad090dc620",
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
  "cf-ray": "7db369990c56ce98-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OjM2dQtrX5zGL16s5R8WYHxZeuMQCVG1f%2Bql%2B%2FavK%2BjWjcA2hdFk30i6Vqngs7362Xk%2FF%2BIguw8vrHL7pc3MyuFPCS3g2l2N14jhVA5CKA%2BxsS8DZY%2BLJruTbCjEqTe4xw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "657c1b6f-cafd-4272-8343-4bba239629f4",
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-22T09%3A19%3A56.569Z
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
  "cf-ray": "7db3699aac7317c4-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CHe50libqs46E8gpuYgB%2BT6wlDg98%2FwOp9FE0ac1RBTsdPdRsFR1gNcSKQBpaKa5kmbEJkuwugu6oeKCnWCkN7WPzyY4%2FD%2FleN%2FNNnRNwgPzgV0%2BX8PZlPH2a4w1Z4vy4A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "52eec699-cee7-402c-b27e-5670ef31aafd",
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
  "cf-ray": "7db3693b3e442518-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:41 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YX3D3It8imUTdRV6cwmQUQdy0vVf3NXaM5wsbPwmsyGiICrHoLJlvCtrrAWhDjaB9GE8ihqA2F8K2fgQNXkOWHU5I%2BtFofFFhJksuIKX9zvtsf1%2BLPvqpOTpHzRLq1uWjw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c1754284-cd26-45c0-b967-552e7552155b",
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
  "cf-ray": "7db369a7298cfac6-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:58 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w%2FeZU56MS7DiwIim4pTxmgNWaB0IkDAshu96pE%2Fl1nrb2hKgT10fF5%2Fbveb%2BeglxMOr6NI3FaFsHbp1GM53jYFkHnXa01Uf4FgIM6BGOPxWKxuTF6dA%2FPF8wgFr2PhJM9Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fce0a136-e4ab-452b-b499-1722d4e4f1d1",
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
  "cf-ray": "7db369a0ea5b237a-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:19:57 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Zrk64J5v7T032JEH4s8mr69oTdz2WhP%2BBez74uh1qlqQtofpDGutFbcT0lCqSyXCZVtyfYnVCSWPgYarNdJXBHqYgEr4XHD2ak76G7NCR8nT%2BMMlfk5Q6XAm%2B0UnuRvpmQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cbd7bec8-bc43-4e7d-86a5-be36de10bc9a",
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
