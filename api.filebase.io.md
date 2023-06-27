
<script src="./telemetry.js"></script>
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2023-06-27T20:11:45.263Z

Revision: [e5fdf56](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/e5fdf56)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (2/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreidydo4ahbykgvrzvea5xblhjarquntue3w44kagot4kqpxnphvxuq'](#pins-post-of-cid-bafkreidydo4ahbykgvrzvea5xblhjarquntue3w44kagot4kqpxnphvxuq----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='39adcd37-cdf0-44c4-8985-b10dce963539'](#can-create-a-pin-with-name39adcd37-cdf0-44c4-8985-b10dce963539----failed)

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
  "cf-ray": "7de0568a18ab392e-IAD",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:14 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=egF3pYI5KowsFmaufVqL5kBt3vf7VjCCUGEd9aoHfhwuhEaRMUHnSdxyoh5Wg7wWaPwNu7Xc73%2FlEc9Vos2oskHlD%2FocJzc9k12kYeZjKvczr0z7A%2BFSK6VtQzLAdjCzsA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "262e9a7d23694bbdfea13dbb15a596c1",
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
  "cf-ray": "7de056905eb82054-IAD",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:15 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x6pdDyEpdm97lfQ1RJQ0hXMfyURUuPKa5l5ef28k0ksdDBno76Ld1%2F3lB1DMkiF2af%2FBQw1c9vQ7iAnGDbow8JmIR54ElbYxE%2BytZuIs9RAKL1WGRH6AVY0Vt1t29hny5w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "14362706d82befef0124b42de78c115a",
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
## Pins post of CID 'bafkreidydo4ahbykgvrzvea5xblhjarquntue3w44kagot4kqpxnphvxuq' - ❌ FAILED

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
{"cid":"bafkreidydo4ahbykgvrzvea5xblhjarquntue3w44kagot4kqpxnphvxuq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056969b6c395c-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:16 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w%2B5PY2qmpehcXmPngrI6ynZaygoeBOENuDUHfpUhYWeP9W5d6txuSbb9Mfouf16D5y%2Fx8Ua3aFCTnAlEWURJB9LPydjEZeBdfssL85OmGUP0j7%2F0yLg1bohGrkvhTOE1Bw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=Cm47cueSm6jxBLfAqKhb9uq10tyyGkWxvnqCfrmGgFIwZU6UA%2BDhv%2F6rZi0Dem2cTuyDAoQWLM7qBiSLbIUTlWcSrCS4EEcjRSedCP40No46klFsXzk2sBLtVVHN68Ls%2BRw0%2BniRzr%2B5p%2BdkkIIKQ1EjgFKXo9asXND5%2BX8u7i6g3UMgLeOrMTFDgFFEw0jaBEAp5AxookXPwO1t6DD48oxH4%2FhciZDb9yoFmn8%3D--nMs1puH9DHWiT9lI--wcwtJvKXZzHoucOs8R0PmA%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:16 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "38ce3a9fb3976b657a74e737d782b3e9",
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
  "cf-ray": "7de056a3183705ce-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:18 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MxWsCqJPaS8OO4NJKc5VYA%2FnKi6M0JbtbHxcXBre6LB2QORpbGNFlkebkiadX%2Fs9oa%2BlWdNgeSvww2G%2BSHbQx01sezLA8dSFMlIat%2FZYUOFPpg8G2Hot%2FNUh%2FhNrtYVgjA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=dnvLe2ubCkYkg%2Bm9XCGf5aWo4eJqPFFDttZx5eEtrT%2Fx0NrTY1IV5v0JuSWyq2Xh9h%2F8Mk0Rig4em7EEjQuOVBkTpaCYN3bHZWp2egGdFynKDP0QZA8x2M7V79lPT8NtrkfLB6M9oUk00KETbDItWnYCXyBBptfZjqUGudCVwbpnpifk7uIB3Faq3EoFz35C6TXI6%2FTkWd58kv8x0xzjmMVem8OxcwcfY4zW2Gs%3D--5FcYScXsVOaPDc7Y--lsaQMGo2B3Avse5i3jN7FA%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:18 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "396ea6c62e82d6c77c1d3366ff04611a",
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
{"cid":"bafkreiap46kx5nilbqh2pekijqkxk73eaw6ha5nojwxgqf5d6xt36qxxae","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de0569cdbba819a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ke1mZPnYNwLiLHKqUxc0eEvbSnCDlTBKkPML08PYROUyTAX9UiXiNtWMxQmNbkxvSDcx%2F%2BjZCxUYOI3ZBBjHr9bxQCEocq11rlABvKixs2p6ru1EXAjBuB0nD1wdudrYlw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=ayOWOF3lrThzJUTpqAo7FEptqahmPJRVySDssTEa3AsKG3o1CMetjJXN1rspONhr%2BS2Jr%2Flcd1i24JKADjEvz9Nc%2FKtRITkgXAahzp0FrzMukqwDCwxD4jmahau0slNA1RPlszIK8LUgReYzsFgf4LIS%2FXwQDIIEVanOZeltmoKnSz6%2FmEiU9rJPawBhX8gnnTFCaXdg1L6PGqvxkREP%2FQmcBWyrIqIkda6ZLJQ%3D--1GD4jx5p1ZOtOSZ7--Af9czXD1qh7XFQH3tzoMdw%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:17 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ed3fdf1c97a59367f7dbc7001aec3d38",
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
  "cf-ray": "7de056a38f058296-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:19 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JkZAdFG%2FTfwKcubXAjFOxRAmtQs4pZnbLZdu55xBAb1fezUO5LjPEo7iT1Bxtyo1rMTPqPJA3fnJbaauWIdNCFZEoWt0Sh02oe6urYAIpRZGCDIT1Fii2SaQ%2BMuuIL5YNw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "b460d3d3da3608789f90612819fe3839",
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
  "cf-ray": "7de056b64d36083e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:22 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Em7DVJft2itxM7UCHfc5cUaXbvI3I9wQoRMyVlTbGAlLjMzmrKU9Xh%2FOzeAfEuMx%2Btnk8uILS57EuDkxk47CW2XKLWDvdFjStEvkXCjrBceISMhof746rJU7lnuTUMufxw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "40186e3b27057cd27b376d375bd7b9c2",
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
  "cf-ray": "7de056bc8b912d06-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:23 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x7Gbb6zqe3Cmx%2F3PnwDKVby7kSDoEHUZzmIBldD%2FhJJ779eQCRFgHMrBw140T%2FvtUNLPstvj8jyyDL4x%2FxNcM1IbCWi8qqUjTaYLGDgaQhq%2BrcLFlNDP3ZTCkLb2Ps3DJA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "4484f221ce9de87eed0db2a9db500c41",
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
## Pin's with requestid 'null' can have cid 'bafkreialuuaqfvz2ye5gi4htd45axk5crphpxzwc5m3bodydnu3snalruy' replaced with 'bafkreihnne2hbtrajbaurtytyapbynxadab2zzonl2ot4s3zfkpitc5e3m' - ❌ FAILED

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
{"cid":"bafkreihnne2hbtrajbaurtytyapbynxadab2zzonl2ot4s3zfkpitc5e3m","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056b00f0082f9-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:21 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cmT8nHT6lCih845cnrEkRUSRtRsin%2BxfCV1hCzuWTomiUqajU7bEr29oy9h9KZKY%2Bnpt7x96kBp%2FqDaS3CM%2F3nutCi9iob9gKZFF5M3I2q%2FVC7WdxcKuND8vgXJ%2FoBDgWw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=PeixG71bjYayUFWv%2BfPF%2FUrbVEZRDHzKhgVxLwm6jPNy07YE2phB17ibu%2FMHhJfBkNWBin1UyG9Yj4%2FRG1CdhVU8Y%2BaibIi%2Bo0fEj8TSO25uv56fnMcOgPdJN%2BsLoOyiFox76dSxxJljxXr2tNctxGajf3RRc41fUrgjBspbc47V1%2FaWMGKjHfkporr16JobVMFDtIAlUmAPR6Zb2R2udOJh%2BXzR8TOxnUwIwe0%3D--UZyGG1R5UUolpoVT--MgWiZkZ7KpPhA0WH63yuLA%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:21 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "1f38ff174b86ed3bb8b3d11d202dd936",
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
{"cid":"bafkreialuuaqfvz2ye5gi4htd45axk5crphpxzwc5m3bodydnu3snalruy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056a9cf8d5ae1-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:20 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1wizXthEqhftQuac%2BA7ksZ3VzA%2F1deVUoCP%2Frmp%2FCzGPA4IK%2FHQtdrG2YQp8nELweHylhWY32xzNcR6JVSrIxUcAG9yV7RuxZGoE82aopbBgoeCjlE4JCbwFR6SRpfhmPA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=qOBTn18todjmHNn3ey%2Bx5Euo8HweiWk0GZ1C02n6a7hgNdi4TQvXT3vZ9NzNVJHASwG46bCWGro7N5rN57wjGjm0EMNQcb44DBbRIYbUuFVBp8eJF9MNoffN3io2nPeVwS93b3o28TZdp7whm4eVzuaDtfx31FrdITMbsI6k3uLWgjf7PSkFaS3hxvQLegjMBcJzVCd6KZ7%2FW8KRgmsfIzcOqNlEl%2BX8MeKD4CI%3D--cxlJvMPnTD20OVjO--tbuhoQMJ90parX0AbxSXPg%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:19 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "cd2155dc2c6d8ecbea46af0895df1db9",
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
## Can retrieve pin with name '39adcd37-cdf0-44c4-8985-b10dce963539' via the 'exact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=39adcd37-cdf0-44c4-8985-b10dce963539&match=exact
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
  "cf-ray": "7de056c35ae53b50-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:24 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Pb0toQFohGMIoy7gWzWAmS9wMiAz1HECdLpyzvDvIrTdkiAUjhNJrjYJ2xU89w4Lsbq9UGJT9ydVf3LEbWYHUWdxDvkEALIqHr%2B%2BQtCYHTDidiofazb6mRaNcBg1hQslYA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "aff7f30dfc9342de81ddc62b3fadaea5",
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
## Can retrieve pin with name '39ADCD37-CDF0-44C4-8985-B10DCE963539' via the 'iexact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=39ADCD37-CDF0-44C4-8985-B10DCE963539&match=iexact
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
  "cf-ray": "7de056c99ce79c5a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:25 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1ks%2FF7Ae3ByKqKVz7ZkToXY26ZCoWxqHWbiD7%2BNZeTa%2BM48KyfgU2Vy4hByq5uOgXCXm%2B4cGHGIXHm0zRjXHhjLJPq1%2BoyFfi2Sc%2F3dCHorwoipoqHTfa4M25Zxe6Wwvbg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a51223f7c423382ae2c15b12690e7383",
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
## Can retrieve pin with name 'cdf0-44c4-8985-b10' via the 'partial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=cdf0-44c4-8985-b10&match=partial
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
  "cf-ray": "7de056cfd92b0674-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:26 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9y7yLdF%2FxHyYQo33QypfEH%2Fm0nut7J9tnSnRBNCU%2BSW5eKgxiW1cQ4m8IUQyl8C7V2cBBmUY2RfgK7W0siSn%2FBdtSPXr5X6zbzVsi8dBElowYPYMmXsk%2Fxlff7YwmAf9FQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "72c3c85962e2f7bcbd3f837184869c8e",
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
## Can retrieve pin with name 'CDF0-44C4-8985-B10' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=CDF0-44C4-8985-B10&match=ipartial
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
  "cf-ray": "7de056d60efd6fbf-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:27 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8SGwSuM%2Bt6uzYD1DuPbfVQdDWOiAFqCqYI50657d5kqHAyiUvG81E76YiYV6krP9zUO3tDzLBKC8ifIwCjS42lPSk7Je1d6Ln2ec%2B32NF5GSTtudu5LV%2Bsm%2FqXvrkJrZBg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "83a8d823ba94aac9d2ac88090e97e832",
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
## Can create a pin with name='39adcd37-cdf0-44c4-8985-b10dce963539' - ❌ FAILED

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
{"cid":"bafkreigkyaphvp4iceksqnx7jxorxfkgiqhko5uwdphgiubmbig7uks5rq","name":"39adcd37-cdf0-44c4-8985-b10dce963539","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056bd18b29c43-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:23 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GpFeA1flzVmabxiD0iMTq0E9I1tnYu2TgT0kjjZIkxEQ%2Bc15ZPFXoepu2YlEY0YTjD2%2BkMiSO7EDkb3Gr%2F0tiaBH1sETIb3bwDxkiTDc4XoR4ePMhwYY%2FwBUxBvJKjsi%2FQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=HN90bw4YNHHdWd4Z6EwmLGeNceKY4i9KtPKSFPosKyLfPH4Ykkh5WZNsjN7jQ2HeGPfot7%2Fzx3PozOkX%2FqV3RAmMj7GJw2rAZeNDwByGv9BBqvQlReeHFWKDsBxouliYyBDsQKbMNq1E7dEU9R2aeplwOdNEh%2FzkMhkiINS3xbBeJqYVMdGfDn%2B677i9Eg0NI2ILZio3BRd%2BYIgcQFawGhmKqkSDznTPeUcvFrg%3D--%2FuGJeRTArM2nT8bI--skDAdKROt6kzM2XTkg%2Fy3g%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:23 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "afa8d033860c23833800dae5117ab03c",
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
## Can create new pin for testing pagination cid='bafkreidmlmfdpkoknvugcf5osv3ds6k7jt76jxzsq2cpmrkaa35w5pefce' - ❌ FAILED

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
{"cid":"bafkreidmlmfdpkoknvugcf5osv3ds6k7jt76jxzsq2cpmrkaa35w5pefce","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056dcc88881af-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:28 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=glxXa5nrArQHOic5MaWEKMsfQhzNKgWx5DsFPAyLQ7SzGQPc9OW6iG27qRzgOt1dov2kymVy%2FO%2BIV4aaynZ0vU8ayqcVvUlaBacibuJ1ZPcxvQA4Yn9MnFoFqUH8BPtw2g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=XaijvlWpCHQ8%2FltN5q4rdt6oq4R05oPZz18XpQCyT8qwm2qOKeM7pFvvpdW5VR0Ay5mufs22zEs3UrbsRHZJyyH0CzO3aqzRrAQZ%2F%2FRLMq3iR4qCuTTFPXS2xW6FVz8x98jQ1FUe85hjZKXeThvDyTgcJI3K%2Bvvs5UHowq0BYLGsDCd%2FoLg8DeRViHDdrJ%2FIR5q9irGISW6ScVOXnheFkvMGKjGrDTk2j33eQ5A%3D--pfGcv7kjKomHSvNz--GF8jPcHMITEo9VllZkUZeQ%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:28 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "a32b56fec01a8f57d9eae5e0621f5ac1",
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
## Can create new pin for testing pagination cid='bafkreibncby6ggfpi5234yd6ca2vqh6ym76utoq5mtdyjzb6alhoczoyri' - ❌ FAILED

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
{"cid":"bafkreibncby6ggfpi5234yd6ca2vqh6ym76utoq5mtdyjzb6alhoczoyri","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056e30d862d28-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:29 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A2BSLzxve%2B9kE7wWN2krZAZM1KLwRkCyr%2FpWxgDILAvugiqK7w%2FNi9f2CkIgsTRaHDi%2F3vZUDLTtSXOz51rIDXILD5NNEiX%2F8Yoz%2B%2FmzMeuOCo5Me5zQy5epCbUNASHdnw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=wqjapwtPSeFq3xRmxlxQJSiwNdb5qsLTWnG1I9q8kO4Q%2BGYJIuni%2Fmnr1r9eOQyi72p3LOnqdooP4SD%2FJCZtZYMYyA7XEK8CU6ZGNn8AlF4xkJlWMAGfQBPyh8%2Bgyh3sUFqUci56F2FnGs78tK4lXRnKQbA3SkQ2hWOLlBCxWo6ag9EEcWwWhwttN%2FFw2m0pZSQFoeSRZg4PqLdlo5HCiKwZVoxBpSK%2F8VA%2B15M%3D--pxbzV5lm%2BYi66nE2--HvYpX4bG3d2%2B%2Fv25rOrvOw%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:29 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fb023cdb81b022aaf837d8f25c6490d4",
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
## Can create new pin for testing pagination cid='bafkreiaxhhriajcmkqwhejgx3wubma5jfdyhcxaaabbgjb436svcrlqhhq' - ❌ FAILED

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
{"cid":"bafkreiaxhhriajcmkqwhejgx3wubma5jfdyhcxaaabbgjb436svcrlqhhq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056e94a75393a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:30 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XhffM8al36OFbcWKGOYT8cJdQc92HU9DT9D4NS5BVTFergOMfhp4JAvPUNLtnFogmRsoDi4nYzgr7SAaBNB8YMJjKdauY34BGIiNVDQZPY7ZLkVFhpgdB%2FdXma1cGQ1%2FEQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=4ciY%2BVs6tlikwe4ZKxH%2FfEW63%2FuuBp6BbuPBzuA5zaGXrMSuqK2qYd072riCZHty0LwFhaY4UfV5RFTAJ6dBMaVdzCFoOc2DK2VYHVzlVsuTJP3EmgDbaJMBCd2d0F%2BycLOCGX0JJupQrtQNHsFLNBHgt8p6AlRYChb8EiiuZIe7tKllfWRc4B2cdw2McgDDZQhUqniMqaop%2FmF6kGuWmpaaN%2BKre%2F2IWn1QHQI%3D--jIbg1Af%2BfwK2zEY2--GLR%2BB99%2FdfPux6LUdo7yJA%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:30 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5a5ff48f303a421bedc99cb99982ff9b",
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
## Can create new pin for testing pagination cid='bafkreidphp5oreee22g4l7jxkby6usoupvja2i3c6oijpsxb2yjv3rc2bi' - ❌ FAILED

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
{"cid":"bafkreidphp5oreee22g4l7jxkby6usoupvja2i3c6oijpsxb2yjv3rc2bi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056ef8b7e5794-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:31 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PLY0LpNxpWBbnbqNs1d9%2BcT%2B%2BYnC0wVaISc7HTKM3rd%2FwkFKs%2FVuODKdPIIkBTizL5vjkv8Q%2FLslAKV%2BCgY%2FBDAWciaGkZxUpgSVgfxCxr39JRssCaTJxeMdCZc595sISg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=pUPiohgM%2BTwA6SmuY%2BGtJPVv6Vq%2BAdgi3g%2Bm3%2BBWiv%2BWkOgz5u6LRQaVQKiF%2FqP8JgaetsZ2MBlj%2FhMjPHRS2aTTDKHop0wEnskWmcnaicAiz1lbw59i905ZeR3SG8mBxpB3BLVUaG98m7dcFH6y%2FVNWtgFg0g%2FkK34ZS9iPojobwXt%2FKL%2F32rF02GI%2FBFVaI2AnwA1VhFp3MNuyR7oXYVfVj5yLMpahYQsZPpY%3D--q3MHfpD95bMmdRiY--591uYdBpHfKodlH25W0nPg%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:31 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "64c9f762a8442f145b94e7dd0552b870",
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
## Can create new pin for testing pagination cid='bafkreigswvjchg5jys3coawzyxpi7fapsr325arxajnpaynxxqkqhhbh2q' - ❌ FAILED

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
{"cid":"bafkreigswvjchg5jys3coawzyxpi7fapsr325arxajnpaynxxqkqhhbh2q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056f5cd170846-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:32 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MBO7EDSIBvYZHFr3huz2WkNvcheWlgWk3NXmvKwQ8PJUZ%2BZMUqrKh8Qys5vh74Wm9UCmwmAwomfvNgcH0hkOGmBzcPCQfPQ%2F05spjAbcXjFuAFNNKGwv%2BYTRqRbzgkrTYg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=nYOD1xwcuK40lkkA3Ao%2FSgY56ZFOioRBcCAMfS1PIfEUCzPE0g86laDklrYV5IojG5kahZAhW%2FRgzWT2%2BNEeIF6sAfVye7xaDJJn5FaXqQHCaCsxKrhHIrMxmDRSUwlB2DJF74aIaGx0OFHnmlArDtRHukB8H%2Fp028iXTgXgPubHNzZ7zzkCYKwYKAQbPxyYZwYuAfd%2FUPDcEfLKoFxN1KEaO2GO2SwX7dQmfJw%3D--y%2F40yA2cC7ChKEgw--fF9ScQC9zHBIdctmiCoECg%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:32 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3bc6b895b3e97bf865085d0a0c5e29e0",
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
## Can create new pin for testing pagination cid='bafkreiesb7lnvnxi5p2wjwhtxhwn3hwknx2unoy3v2uw2r6cdkizekunsy' - ❌ FAILED

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
{"cid":"bafkreiesb7lnvnxi5p2wjwhtxhwn3hwknx2unoy3v2uw2r6cdkizekunsy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de056fc0ebc2d13-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:33 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9e2TQ%2BrGwo4Y9gGUIEST%2FrG1Yyn0OIdE4TcwjxZ2%2B8TujC0ay%2FqSe0KCoxt5zCGOFakV9HQJoFBJ3mO%2FSP5GsKj%2FIixG9PIejOSobrJCZNaqYayb17KkUiti08cIMbXxtg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=YURnWs49r4I79W%2BP2kzXVd%2FC%2BqeYxVyDpStJtW8o15Qn6oHgTLdhLVeIjJCOavfUscwuj5cPWx87OrmAMTw1sPJaOFWEBtKlCHKBF3ONQCIvyoGlY9IhZ8si2mz6MtyJGcvw06rZlDdgxozkQ9F1cIRlCCB81MuGqgavjnx%2F%2FNOXYNpeboFMmSdPx0gA%2BpVkmfvUBGhqkn5OzOrYvbp9cp7S7a%2BrcvwMoIwfazk%3D--BK%2BvLv430xIe6g5t--2gdPipZHb9Qy2YJ4HoaTJw%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:33 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "4e30c6e14b7455e83f1d42eaf68749da",
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
## Can create new pin for testing pagination cid='bafkreidtkobqz4kofkq7dl3c7lwneya5dde36mrboqd5vaayymd5tjdv6q' - ❌ FAILED

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
{"cid":"bafkreidtkobqz4kofkq7dl3c7lwneya5dde36mrboqd5vaayymd5tjdv6q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de057024d1f6feb-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:34 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pstEvadLG6uJHPApqsKzB8uwtcj%2BjvBm%2Fnkbpb86UB2SV1tXVul%2FBBdskbzgWb%2BVrus4ebhgIICxUoLmfHH4bKx7SNyrZF%2Bm%2FLRnmxK2%2BVrNJ57mfbwBI5w4%2FxGpqd8i0A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=G%2BL2EIuG7rwxyi%2F0MT8WLajIRpyvL0WrVBTXoOq1mdBYCD3IC77fml2Ex2gLRQVV1WI43LJ0V788%2BWMQJzEi5xHoFQBGZURBIZHXNtPNkojUN4MnvO4ape%2FSIm%2BBchtdCHtSsbSHAOStP6sRZlMS1pR1lgvc3pBaLi3EMm6PuXBiIjlL7QbUjOOIP%2Fl4fhtBH5zybYuCmgItF9J%2B86KrBOmgTGZuJbOE6ubcrdI%3D--6krooD2QFO0j%2B%2F0K--7I%2F%2FwvutpT0%2FvXkNreYkTQ%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:34 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "9d10e3aaf75dda9fbe9e6aed84dc9516",
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
## Can create new pin for testing pagination cid='bafkreicpfaocaqalzkiqy7msxislwaaad2vgotupqn2zfjhaewe6odtbwu' - ❌ FAILED

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
{"cid":"bafkreicpfaocaqalzkiqy7msxislwaaad2vgotupqn2zfjhaewe6odtbwu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de057088f8a576a-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:35 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ndATAt8UN144heSYinnrffLxOqzgG7o%2FgvsHk8oeaGn%2BpgAd6x1Wdj8stp8yn1n8Rr7TAX0dgb%2FImKLq9zQX3ddfakWg9XSgVEtAWSEQ5D9EfJRRkBsTPNPA25%2BkIvXisQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=w%2BMVEK8HPz8R4MBKekUwOn12BH%2BsMJfRlR3DRhUHainnBT6h5Gq%2FRpVobL%2FMq1SS0Nqy2tlXbWVrthwExcI%2BhIqnTR0qJbxNj8J%2FxRuuMuM8R0L5ANTGLFQ7%2FoyYmjCeIG36JkUsh7VSj4M6dTFLZvW0IgEsS9SC%2F0HnCQP1a5xpPUhMpWWuY3zSOSM1387QnqKaUWVoO5M3HA6mh%2F7ewv9QC3aGID9L6%2Byz8Gg%3D--Zrep9dd9JpdnCgpN--XKCWoWeBRuXl4ySRSVUI%2BQ%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:35 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fd57f81361800aacd0beb67a31c6b0c0",
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
## Can create new pin for testing pagination cid='bafkreicspi6zfvzonol7recwujhaafhfqrq6rhgrlvynxir2772dbutnae' - ❌ FAILED

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
{"cid":"bafkreicspi6zfvzonol7recwujhaafhfqrq6rhgrlvynxir2772dbutnae","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de0570eca22581e-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:36 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=evBIS1fOggs4ZQTTVH5euqbWmeRvoUzQZcyRR4I6Sv7vXzAupGhlCFNirmBPqjoR0S6VE8vtvu2RFAegopmAjB8PW6l8ZdthiZi3Tq4yNVshopbHz%2B7mn63gNtvDRsAY9Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=Ih%2BayNunlGu09oUDoGW1hW%2Femn%2Bh5e36QVidBltgZwY0yt8AqUKeCRE1JufvCXyqgCHAxtDP2j6qYB8PBMhG7TimH62nrNFz4O1r6jikUVz3yGZUU7uNgypnEOxaNleBN5MOcoILwzIiDgR61bwjnT4EactghdM5UmX1n%2FV%2Fny%2BPD%2BYAb1W8prXeG%2Bs2lHTcVXp19huB3rif9dgs6SAOCYYOvqcosuN1FL8fDDY%3D--m1TMdMOGM7hxX50%2F--l3yeOteU%2BHzD6lupGb595A%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:36 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "438a4a7885449a963634ec0d02d076b1",
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
## Can create new pin for testing pagination cid='bafkreibz5iulsbgb22aco7xbi2xbsumrzirfdabjmmg6vsomxuvufczxgy' - ❌ FAILED

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
{"cid":"bafkreibz5iulsbgb22aco7xbi2xbsumrzirfdabjmmg6vsomxuvufczxgy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de057150ba05962-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:37 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XzTRzQ6of1zEusW4EEpQVx3hTTvtDOUVePZ651eVMp%2BaZLQX9ij70Z9l7KBwcbZF7Lm1nWsYpDUOE%2FLY1RRK1yyAzXjdqyDhd5XANR%2Fi0Th5u019es7GU7l0aDlJPoS1NA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=7NIt224tZtIOZy3ZsXTX2iIKHTcJYmX9PrZECRQzTEOylX1Erf4znt%2BPthzi55KELnrp2ZgYvXec6XW2A4%2BcJdR4UJTfbOL5OzASc5MC%2B9BRy5Xp%2FzjnBNwz0CZZwumF8w9pqo256WjZaK7lCJepj03p%2Fx34oEv%2Bbadp93iX4MDp%2FlPHBSUa6V%2B%2F1E3DsAtNN29B8G75WRZbwJxeZB5wFH57%2FbionI6E%2FPO41aM%3D--%2F3o1dqfPQJHndQIT--S5uGwHeKH60vfEYSqdnTiA%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:37 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "77a792a0ff7a72c8ed4d8c54f4281ee1",
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
## Can create new pin for testing pagination cid='bafkreifpxybcsnk6kxae6zhsz47nxsf5ehrgtqlexgilzueeiehfdt3z4u' - ❌ FAILED

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
{"cid":"bafkreifpxybcsnk6kxae6zhsz47nxsf5ehrgtqlexgilzueeiehfdt3z4u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de0571b5944396d-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:38 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DnNxVL45oTfFK66mOkN3gLH9LKbx78Jyfw0o6riqaHS4OEw5rkb1gikL4RmM81FEIrdBAdeLzkVd3BmeHYQX9yQfhDaoW20pu6D5oaf1lgfnkxssZuMUO3IHu442T%2B5HKg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=KbHShHav8jor0KIMM1662ioQ3NLI5MLLPJf%2Ftome5OxgvfwgTBuRYMya0tLTu%2BUrURNebOGjep0qTw6inlQn2xrAQkvfqvnaITQ6qxa7hcjRouKcaUk869DBiWysmqY4Wtoyk3e2eu6%2FAOkctGcy7M8MmULwTezGax8vqKeaHl8WKkYKr67MVabB2dsqiEzJ3O0WEI3f1kuiY9BSfm3YWR0W7DqJ16t2%2FNHXMsI%3D--Un%2FQhYiSicZ5Kpn3--j4ALj0iMYDNKmKyNMwgzFw%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:38 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "300e211d2e3913bfcac92a14caeb971e",
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
## Can create new pin for testing pagination cid='bafkreia63aqtk67segub4ywkmwzyorvdnwvcfa32qise7gg4nxpygcoa7a' - ❌ FAILED

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
{"cid":"bafkreia63aqtk67segub4ywkmwzyorvdnwvcfa32qise7gg4nxpygcoa7a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de057219e1a0811-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:39 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yS6ngIU5DCXiZPFdzc4VYnothbOvZhIWjbFxu4Xdb8Y1%2F2cFBAh3PZVremN%2Bi5lQ4qWo4mZPFiH72ej7ehqi3vwwKgm5TUTXY2eIQUL9lBElW5JVhMLz1dBnDfp0og8MpA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=bBeaWuk38eDMJQh%2FvLNW7llfAFttmiHkdLxMIW2QLl9sg3dHiEoNveKLgOYtSb7JdhqtxDazbpQ2LXBY8oxQn9tmPk0xKOTLk%2B8WZwKN6t%2BZWWteeP0ziirPwQL5QzaSzJprCHeOlXwL9ALQMs4oKaxIa859woaKeR4EGY2L5CX2%2BMxBMiW9GUQgdUb9K4Drf%2BVmZXOt%2FFirUYdZ9ZRYHok5NagWmi1%2FU91tu28%3D--mkGyHA4Ws8aiZg%2FF--DOCT9vVVpqiL4ffzUT15jw%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:39 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3eaa3882cc77fe5b9e173961bdee3c05",
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
## Can create new pin for testing pagination cid='bafkreieh5cewyzmqmfc3oy7ao7dsscqipqffdtxg4ilant5lajjxk73jfq' - ❌ FAILED

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
{"cid":"bafkreieh5cewyzmqmfc3oy7ao7dsscqipqffdtxg4ilant5lajjxk73jfq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de05727d8243997-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:40 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RSO%2BKeH2l0qenmyjw6dIdcHAHpr%2Frs3QCGbLwrEu1VuymyTkfEFHb94HcLTwJpQzcMkdt826Nk7bLIybJgve2z5D6Qzd7eHjv4OF%2Bw5MfTZ48ZCqHmEns3Kcz3%2B%2Bl7jPsA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=oU8sW05Q47wi0EDtzlco69ohjLa5qJ1NKa%2FoOt22Uy6Dmw102XHoBA0Oh3vXHxdOvWIFV3TIcA%2FRBxC3zw7nLctC912GCkpJyMPaexP5V1beLWlg3onJTHWEEZ%2FlJVi%2FJmrzbVgSNBcNawjVDTIIVtdL4Vxx%2FZBUCo44Sk1QVp30Tw%2F5h5Arq4q3PKtgJx43gQpCwErf6HjIMsiw5qWh%2BG%2FbCbzdL052rLBRMic%3D--V2jU2YTTJiioqXGR--YpmiOSmXEH%2BR45t2ee%2BBpA%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:40 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "36873d64f49aad296697058e308d977f",
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
## Can create new pin for testing pagination cid='bafkreiejqydvld4zlp3jlc77vfkbexccipigaqf2rqktpoo7v5w3r22m7m' - ❌ FAILED

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
{"cid":"bafkreiejqydvld4zlp3jlc77vfkbexccipigaqf2rqktpoo7v5w3r22m7m","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de0572e1cee8024-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:41 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wo6TPrxTUA8aatVQoYSIoPJPI16V28zSzZqR0ozmDo4d%2F1GXsCIeGHt2cZcIPoEQhvK6r%2BFZkGExVJMly2Mfv4Mnpkob2jWmNpNbdjbDI4vKRD4PWSaYqKCzMlWkCsMg3g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=lKAyFMxSoK8DQxp7NpQR0WG%2FFFV%2BxWIJDd2UnCgif1qgDOM4ZmZEZWZTKSRuNLwB5%2FuftHzB8HrDtIAEnMMACxK4oF5%2Fg98bcjei9mZn4UwMwLxYkqb8sOm2S8YN7EuLKSu9C6RqkxrNwknRS%2Fjv8ClidlehkYEjDFXrD2dTqltHZ%2BBQBK47mSaS%2Bs7rKODDv2LR0pyi25RFliK99fPuCxZn%2BY2EIaaWFyYV6CA%3D--BPCzO2G7Es2d3DhS--9mJj4zx8owPr2By3vdDQGw%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:41 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fa712ff1b60ac595f066f8d2e9693b14",
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
## Can create new pin for testing pagination cid='bafkreibrcggummmr43zle7ye2kupk4xtwxzqruodoehyaw6aiaswymaa2y' - ❌ FAILED

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
{"cid":"bafkreibrcggummmr43zle7ye2kupk4xtwxzqruodoehyaw6aiaswymaa2y","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de0573458ce3b12-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:42 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aPSAudfk5OwjiFEeFEH52G3pqkFOFk%2F8wlZbOjnLypfJxPruDMgtBTW%2BfTOGymUJCwlJDYmTuCVnioGlfuOPPRTZhcxd9Xaq2mfsFrEZlTds5XcvvDM6mNDqCFQsK4n2jg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=IzsHrlDL6avOAP9EDniK47mqxFaC9sWnY8UtOJ1ROEAGfYQ9UHxQ%2B1LAnTJoN4gLv0ZF7ruSfmazXb%2FHBR63HnE7QOY6p0N7xzJxag%2BYuHTR7E6oP4TtFY%2Bt9QQ%2Fot2cSo%2BkZDS8uVyuCY5tgSvn8ENf9cwWj3aBKtZCPpL6oVD9KjY26Y%2BMS4OT7J6iCr9ZloiYbe6lBAqg%2Bq7Azi2gQVYKTTpyNbr5lJycQb8%3D--MyqAy19%2BhvDeWY%2Bp--Agwq%2FgXDXRTwSeT7YNDFmw%3D%3D; domain=.filebase.io; path=/; expires=Tue, 11 Jul 2023 20:11:42 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "32020eda679ebee85267d111a21b0af7",
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
  "cf-ray": "7de0573a9a2812b8-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pwBPVJMas%2Btd%2FGrKa37%2FO9JSTWHktE3hecANzGBGqmbMpvmZaYt4G%2FrJVmdT4XgLG%2FxZ6FuKvJ2VWh5Aj%2FisVmCqAAIQvFRHZlWiBvLzIFYJk1TyP7%2Fi1%2Fpcth5mjHCphQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7f1751805b69a02dd4e6895368ab7c72",
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T20%3A11%3A43.180Z
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
  "cf-ray": "7de0573b0be59c19-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=f%2FAhKbKpTREJn1Y3D7OwFb5PrtxGCMSgXyNS9AFeDw%2Bddshix3cWqDwQKRdivR9RUbkX3TszEKMx2TYfl6Z3GfDoZXAtIitV7MG4JVi9fbg%2BIVh9Wfz58j1pjio5O5Xj6w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "437a65e7b968c91237e78f0f0b1b68ed",
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
  "cf-ray": "7de056d688d02054-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:27 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K6B6D0n%2BkRCO9mQqXFpkVa4ut83aAnyka8LBId%2FQw2ej6GiAnKWusqz%2B3Dn6Je%2FoKLe1JDQs5Q9YJhXrUcbtiHMuXXX%2Bywy6rQu7lXdgUBNDfk2sfQa%2Ffp7Ct8%2FqqmaaRg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "93e7027ab4cabe05c1e17514acbe1d12",
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
  "cf-ray": "7de057478ebc5b53-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:45 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oP2obHAqMdQsPDk8PIkKBlGDfaXcKLYz7lTO1KjcEfTzr0%2Bu37YK%2BIAMaeGZYlto0qbUlFkph9Ww6OeFwPALeHCrxJJN0Ed1sGub7tw4iXltvydfVbG6DyZ3UClnjjZiGA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "95eb6d1fb8c0dfa66eb6d9e2da90164f",
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
  "cf-ray": "7de05741387a9c18-IAD",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 27 Jun 2023 20:11:44 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VSEFfK6OcK0LgIXL31ncw8k89UurJD5RqTLDVYrTcUQQi7FOW5VA3ANMmmE7gWDf%2BQgjHRuCOn9ecAE5mIXFErAWdqF62eu0kfPgVhrt7O%2FWuhsDj%2F8ccJP%2BtUR8RLuPiQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "80ea6c4e63978fcd1df76d5063f3e745",
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
