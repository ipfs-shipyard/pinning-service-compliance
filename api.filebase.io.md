
<script src="./telemetry.js"></script>
# https://api.filebase.io/v1/ipfs compliance:

Execution Date: 2023-06-22T09:21:21.835Z

Revision: [5b07f53](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/5b07f53)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.filebase.io.md)

## Summary (2/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreibsxpxw5t5xqvot3tajof34vvqpo62jvnjpubyxo7e5qbewjcktae'](#pins-post-of-cid-bafkreibsxpxw5t5xqvot3tajof34vvqpo62jvnjpubyxo7e5qbewjcktae----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='0d951d9f-0b13-46d3-ad28-154f08ac537f'](#can-create-a-pin-with-name0d951d9f-0b13-46d3-ad28-154f08ac537f----failed)

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
  "cf-ray": "7db36aee9a804859-DFW",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:51 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p2R1hN3SuVhO2V2y%2FYxqTxA9tUiIZnzbjQsC6L8H%2F5DgxleSyYPa9U16CDkBLgSU20QkEo8Cm813V3fG1jh74%2BYO4J076fjl%2FwdWiKwMksENLRm95OwlENVf2kv7fu0F3g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ba18e781-d909-4d53-9fea-8094b9eefc41",
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
  "cf-ray": "7db36af4de67467d-DFW",
  "connection": "close",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:52 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A%2F1brCgpLo9pheXVdJ1MbfbwdAP9Hyi%2BuxCYXGLuvIZmMcW4gPkM9alERkDEb6LSsA0wABn1pq9smAuuK6cY2bGnLZiTe%2BGarIhh1J70sfwGIDix8EXWh0%2FittIQYAeWow%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "088a6b53-6bd3-4f6e-98c3-95011a252601",
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
## Pins post of CID 'bafkreibsxpxw5t5xqvot3tajof34vvqpo62jvnjpubyxo7e5qbewjcktae' - ❌ FAILED

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
{"cid":"bafkreibsxpxw5t5xqvot3tajof34vvqpo62jvnjpubyxo7e5qbewjcktae","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36afb1f764674-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:53 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DcWvaOVxPDZzMT%2FMu%2F8aVr4o9H54wfIPReVnYDvPIC6%2BwARnDtO1N2KLeCcpL%2BJXl%2Ff%2Fop%2FrDyDA95jIPljZJWJBEuUZmX4RC1zmobZW6J9ofKTD964lvtr%2FcWrh38oujw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=%2FcNnt35AncY001aZNH00%2FZSGEO8daK8JsuTYhFDQQp1ozTJXdCnsbckYGQ3nKOzZ7e6KcQkRHlOVC%2FDCOYKDTv0mrfU5tmk5n4pLMwb9MLCijgCRWT99OOsUO6c0flAxCcU90WCkhHkgHY2VeRawT2uKg5QDqq80iTqHzg33L6g881hu%2Fno8DbV9p4VFZiwytCpV2MhCperf37Kk5D%2FReV80xJV8CY7rS%2BF1JlI%3D--FUnlBN0RWytp6BOp--2pFEd5ApokzGGWn2Eq6p9A%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:20:53 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "89ea3ae2-42d6-437a-abbd-6177978a6ee0",
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
  "cf-ray": "7db36b079c2ee5ad-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:55 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lY%2Fd8Za0Y0cwqcFPUCSYj6PG59yDVzJaf5fm9cQwvanZ07f4Yy2h28mIPTuN3z9OVPLXdnXz%2Bb5%2FGijtTZtCodr%2FvX9er7sA9dR7LwOb79INGIO9tnmq9hRVo%2FHLtR89kA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=CD6QDTl6Xctm53RH%2FcT8ugbrJfxeo3SeCl1qT9goRezYM5rmuD7EZ8GSWtnEOkG32yvrqvuEpazj%2FreeSmQVZ2n%2F%2F8HiBwtHVsmqXIr38JdV2pE25yHSZbXJpDvS%2Br1oZrK%2BjfHmMqb2vjPDjlOY8XUTQRTZeq3FjGC19D%2BpaDJEIpx8IvRONj3LyZ6K1%2BCn5bvuyCs8j9RSycRk%2FL%2BOTCDOb4tfCiwwujzzS7M%3D--tSxUo1U39AMWwuZj--IVfsY8myM95a7BJzhOfGsw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:20:55 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6da8988b-dcd3-4405-85e3-892b44c3e459",
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
{"cid":"bafkreidqno5fvwsvpi57xorobdbqfslb46evh4vlumendtx754xv5oxhqe","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b015c7a469c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:54 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Tw4XZeIahbUmat02cayuwXLn7UuzqwpmI8TsdX3QvkPG%2Bp7RXTTc47YRPwyj4lzqzNUNe4ONbZfS%2FDRn2RvylcJoOvw7QSvI3n3cb5OPtCSbZu%2BzzGUToETETDwT%2F5y5qg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=FbmX4SFOxxehbU%2FE6%2FUVDBEeykhRcZbQBfiCvZrXfJ%2FnjVy0VKLbuSwAjBXWGVk%2FWIUBrtji%2Bn%2BHGQAI9LucuhEDkcuDzFA0axOF0Bl3IskaMGdpP1pCj%2Bz2E2XLD94cypL9HGV5%2Fv2LL%2FYdWCot9Jn%2BXnK8STLD6hdPxzNbrmNtylD9hsww4MaE2k2ET9Rt0f%2FkK1ZRLcXwgcod41baNGv5gAdk9pMGf4OdsUE%3D--hdXTYtTv5Pmj3H8u--errXKrBQQhN98RSoVzYWsA%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:20:54 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3e197d45-7ff8-4519-af42-1f9990408126",
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
  "cf-ray": "7db36b08aee7475d-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:55 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BXCVUqo9CeV3Lq2l14g5Xlkwl0IRowZN6WlyU7VdohuyHTsFLmmMXQBRhxYwPGuJM%2BDK4YMoxEsvY%2B58N2xWZ8ttDQWwl1vw37lATh4%2F93nHzVljTe2PZvGACvg5nt3gTQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "310a10d2-535e-4f64-b95b-c3c7cc138d4d",
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
  "cf-ray": "7db36b1b6ca72d4a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:58 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VV9nFOAJvMNwL8VR4YC6ZgPTjhbyBMNMq3bwPm4eXIyCutPRD6Pzq3sOBZz0ZvWbZWbuKY7YwtsMHY5jRlTV62jq%2BuGrGzIaGB4d5FalkqlJrdbHexO6wfkwexm2So6hDg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "fe696281-4693-460b-abb3-9e677373be1b",
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
  "cf-ray": "7db36b21ad2445ee-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:59 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9w5u%2BuQluhuXFFXcevTOvyC3SoyX7upKQV7VkcnAYQt0nBBGSY2Jka7SqKa4hpR0HyuMbAFvr7QpxW9aVYTxrjdeeTXWmu%2BKx17riGB7R0wK56YhQfmkUQ3lF0ozSW29qA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "04b83383-897f-411d-b695-d29a0ab76db6",
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
## Pin's with requestid 'null' can have cid 'bafkreidxjcerecwuzcq7ermtzgr2t7bigbcegid2ekpycjrtwccfl3r6ii' replaced with 'bafkreihpbpjq4qjil5cztpbsdglx7ifngp3tlw23a6nnycgos47pqt7gem' - ❌ FAILED

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
{"cid":"bafkreihpbpjq4qjil5cztpbsdglx7ifngp3tlw23a6nnycgos47pqt7gem","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b152b8745f4-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:57 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Aw1C95TxiKGbCL2ClBupKW434KZKyOZGFGKiW3hPhG3tOLabtScRLyDDOMD4V0bfZ%2Bxa5SxWgdnVpvJcxvCHFlDv%2F6adIbWv5zRyPIRLeL%2FvVE9RIL7wW5Rz4Rit%2Bntktg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=EDes61doZ4MG8lrDOuNerkkoSZHzAGNOv1n6ZARakdACt3HTHOcrs2RES0DQIEOX0aHHNdWFVYWCOYN1pYkba6%2Fw%2F1K1Wk%2FEeAKzYxGLDr64CALyIFPmEGPZYFSA5kQKK3ATvp67oPMw3BFgxPnX4sNywN9wBNcwr7GB8J4SWdFnvGu2xM1hpxatRWf5xeF%2FjScK8fHCyu1lmv%2Fw8sHJydn9vW3yG0ank7jmxZ0%3D--RPEJWGvOG0NH7j1Q--nVQwXjXg2Uqw0xE8ESQdxQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:20:57 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "028b24d9-e6f6-4299-9cee-d522e4ec7cb7",
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
{"cid":"bafkreidxjcerecwuzcq7ermtzgr2t7bigbcegid2ekpycjrtwccfl3r6ii","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b0eec12ea78-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S2nXv9znJnf%2B%2F%2Fca%2F%2FYZLT%2FNRIJwS7if0FEqBG2P0GXGWoeyGUexZbTEC0qXJiy1hoFgHLljTzx4x1vcclqq%2Bzwvt2QekCLO0%2FcsW1hRmsWA%2F%2FtH4%2Fp4GqHjsnAIHzN1pQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=zH1V9mktI4pQPLReFNQoelllQtzvI26mZ3v0rNbzx8Jpp7TtsTwCt8yUyKySuKj7Vpi%2BXqkYMu95hOgUUE2pQ3gup1jPE2iY4a8XLzStVo71jqpU%2BEccRTneE%2Fd59DxXFGA9A%2BPqzw343ned8q9js%2F46rugYhjWdGmejmjOpj8NuTraYWMEAb%2FkEZn1Ag2qvezQ88W1anPoWkIvHS8lUKDkqh5FiHXX3QDe4obw%3D--%2BEuHDfPcnohM5RAI--O9d%2FzgSEUIbOU7pQL9QNaw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:20:56 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "1001bd41-5b81-4bb7-92f9-20e6b2d368ef",
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
## Can retrieve pin with name '0d951d9f-0b13-46d3-ad28-154f08ac537f' via the 'exact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=0d951d9f-0b13-46d3-ad28-154f08ac537f&match=exact
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
  "cf-ray": "7db36b290bd10bbb-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:00 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KWZLtu4m%2BAOtYac7emdCi%2BtsoVGTqv75pBRviPvcilw4mSQe6QoNfItAzhxm%2FUH1XxVjvc45aqK0dX0rvTUMRmwIOyM1BtDweTGY4eJ5A0t5OUCnA4mi6grugUfJUFqoIg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5de31601-13fb-4939-893b-288b84811e8e",
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
## Can retrieve pin with name '0D951D9F-0B13-46D3-AD28-154F08AC537F' via the 'iexact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=0D951D9F-0B13-46D3-AD28-154F08AC537F&match=iexact
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
  "cf-ray": "7db36b2f4c5d3abe-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:01 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=68jJSAS0kdA07iDvSBfmQXieNJPUTLqbKbZ5jRdsLY%2FkF40BBcz%2BJUfndI6vkR9Upu9ztPud5R8kL%2Bp7mEUzAWjyG80U3bU68dUIQiq7UXpGia82DzHapcUDCpAvtBIR7w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "af375b33-965e-4ef0-9202-b2743ae865a5",
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
## Can retrieve pin with name '0b13-46d3-ad28-154' via the 'partial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=0b13-46d3-ad28-154&match=partial
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
  "cf-ray": "7db36b3589dbe905-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:02 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eF9ryz%2Fg3Wu5iN86h7ahjaTx2%2F8ECz%2Fvu6N2hkiQ9blsy52VGEdnpxkKaTBmEHJpZ0qPQ6g6XoKK5K%2B6D4N7jV1yF5mtz3jZjgLVwSgiunMD3G1ENBVVJ4liuKSqeKOlKQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "7c0aa0fd-13c6-4c93-a109-45a11f19c2c2",
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
## Can retrieve pin with name '0B13-46D3-AD28-154' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.filebase.io/v1/ipfs/pins?name=0B13-46D3-AD28-154&match=ipartial
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
  "cf-ray": "7db36b3bc96fea3e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7BsrZqkTLwQ7lHaWm75gUxtXwmtfLuTsg5nThGvsSK1r0lqtjzEixzXghDW9AQ1YlrK%2BoarPlXpdpNP2DI0%2BOcTd2quGQ3UYKSLpCyDRdSlUD7qq5Bbykk5rCq7pzlhbTw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "61ac93b8-39da-4cc4-8570-75dc8f1079cf",
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
## Can create a pin with name='0d951d9f-0b13-46d3-ad28-154f08ac537f' - ❌ FAILED

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
{"cid":"bafkreiesjgbi5ceop4yhhi47oot7i7y7geq6ytp2565lysc6cyetb3qeg4","name":"0d951d9f-0b13-46d3-ad28-154f08ac537f","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b22cee4e716-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:20:59 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Iu6MejD4QLkaq378aVZerWZqllByLcuYWxYX%2BD0YlhqSTU%2Bw6DbAPcx3rHCSg%2BlInkUtmyF575BbPAP%2F5ZZpad4fUo4RiA6nSB3UimDHHftqdwS%2F63jlxhbWnZnj%2BhX9pQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=BC0y%2BSJesjOla0rcf20NveifVCjJf1GEdjHIIttPtibjah9O1klQUteLyEdlHlwpLyNZ8sQtR14oj3%2BLbzRQ8%2BBUh8qnLJfgWDcV94eyLS%2B5VRBiNucTDJ2K1F%2FpvQ5rm5%2BTpf%2F%2FDHXu0UNiyKt6v5bBWJKOCBxozNEUCrW5dl7yigxnmFRsiG6FtGa3B7ZhCRfb3dlwk4IBADdX6J5ljdegSI3pBEjypiGkf9c%3D--LAEQsPOHi0YhY4r2--d6CwbxnZa05Pj3kI%2FCjaAw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:20:59 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c02db567-a97e-4d3d-86e4-59419dbb6a38",
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
## Can create new pin for testing pagination cid='bafkreihevo6zhqbe5i2qvgs6svu44w67w4e3kqfmcvmygq3r73zwhqyrha' - ❌ FAILED

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
{"cid":"bafkreihevo6zhqbe5i2qvgs6svu44w67w4e3kqfmcvmygq3r73zwhqyrha","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b432fa3e93e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:04 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FPgPT2r5Fnd%2FeB%2FohNZllCnPY4MJ9uOf%2BrMtIa9LQvcXWyIfMUWoYaWtT5%2FtzF9kfiPNxumTB%2FzvEaQyW%2FnJ2pg92%2B%2F9kPQqF3YXC5CgXjl%2FOjCKRFaDHSSdCcN8CpNUHQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=H3rERQEzXsiFnBC5GnF2cntQvXCrZhZj%2BCTL%2FkKXc98k2hUcu0Hq0waEZDWuL1w9C0L0sGAcKAfS7BbedHZZ%2BRSj%2BK5ej%2FMzl%2BUqxvnvJ0887SkNLyDQLLIsrklW%2BeetGWCwIiBVKNkkQrywWip5ROsUDK9oZTb0K8sQ%2Bd4wNnnMZHYQOI8uTtS1VePclkSXd0qCjtkzq5lI%2BGeQiCZmSYKHtd67ClTT8O3Rd98%3D--z%2FhvsMTDyLUaqh%2Bk--MzqooTQ%2BcEJHWsJt%2Bj9GAQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:04 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d3e6f9be-0824-4bb9-a93e-4519049336f6",
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
## Can create new pin for testing pagination cid='bafkreidoebc6dh3y2mkclovulrpmlnsprkjsceyjfcicdrkaxhl745rznq' - ❌ FAILED

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
{"cid":"bafkreidoebc6dh3y2mkclovulrpmlnsprkjsceyjfcicdrkaxhl745rznq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b496a670b82-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:05 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KGbYNYMHNNujLz%2Fqmoj3SaS9MH8fxvseZoHA0RquY%2F%2F9vjDZsOdyGrdtEgrujwHPSpBokNLOJXKAwCnMNXtjsKQSl9lSiGlYuZVAftrOSghOgyG2ZWNSBb13owvBxjneqQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=5oa2k0C%2BHk8weUUqdf80g394OLVAWOPZTj2APZk0OoD15nyJe6DnnvrGTdPGmWDuRlTniyR904RKXiVLMF1CMPvJAPKuljSfQwkC1De%2FYX3xx2WSDl8bgGW1wX27ZJ7NNR03eo%2FcbGcQm3ajbRMHzbEeuOqSLsNu83i%2BRr8maMjIhF8T7DELGzTnI0%2FOjT01PsSdh%2F9AzJuT39caQkgS41pdXZItBxnvT6h29rI%3D--TUb%2B1mr7ha1SBzXb--Rczbd9TMCxC%2BhoBikXuFPQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:05 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "e840c64b-5228-40fb-a053-638fcd4a059f",
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
## Can create new pin for testing pagination cid='bafkreicedywbah7fvtozgbifcmxbpz774j5ftmr6f6uoljkg4ui56dkvs4' - ❌ FAILED

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
{"cid":"bafkreicedywbah7fvtozgbifcmxbpz774j5ftmr6f6uoljkg4ui56dkvs4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b4faf7a4861-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:06 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lAwRM%2FPOE6Eh9BJhPCbuEzi4M7PpEBvb4ieNT1d4TFF17VYPPNs7vNBqz3r7Rf2plm19y5Yzpli6HV%2B7pN9Ia5yiS9N7bpSgIMztvzdT726eXjSXSZC7vUd%2F8yHLOEDaTg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=jSoXxvC7iVppldw9%2BIsPGGtpwU03wC08ypKtOPBYRMZL2lPrhNmRLWnTxKvpFrYV0cVXlh1o786NJyRz9H0fAcM3nFi7DWBGc0njii791vZujYDuS3H5fr4ETgyE9t1UF12omOOEh8jZaw8BaWKs6pRS96SUmZWHWIMEjNKVX5H0Wq8uOB06K6m5m3EX1RY9wG8rVq2rJQ6FBt%2Fhr6gZ4cjiMWgM8%2BwcTf01lJw%3D--PfrW8P9%2FUwCVD%2Fr3--EmPeN%2BqFXKc1To%2FraMhJoQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:06 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8501b4f3-fa03-44b0-a67f-82ca479ac5e3",
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
## Can create new pin for testing pagination cid='bafkreicqtfmuwzw5t3mkosgvsmbrzmtu63qqrtdl454ma4uspmhla7mb4a' - ❌ FAILED

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
{"cid":"bafkreicqtfmuwzw5t3mkosgvsmbrzmtu63qqrtdl454ma4uspmhla7mb4a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b55e923e7fb-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:07 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X%2FuLouU2BnGMtuDIugU9h1EYjhC%2FZGBwrSMN0HAr4cHJ1iGuY5vqQGT3TOWdQkzPbK1Y5C7RinFmrPbHvWmyeYNITkV0yzirHBVfaxLNHG6dtcAH2GG6qaES56CLwLlDkg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=NnDXWICMoSIFsRBaZd8szAvaXRFbrV3MmswaKPvyWszGUhZucOlyHem215JCPetoi4vFYWaAtjInou%2FwQieymw2%2B8q4dI9%2BC9mOwFiJUti%2FmLe541z2eyG5R1RA8s4d5f5U7%2FCYbZpusLMCmGQJHnQMZcVxWn2fG2dthhYod8UB0uQPeUTc0tHApd49rIxzizgRp%2FKJx3tyA%2BAkfQ2O7p2Vn5TuNbbrIz614qBU%3D--9GLxJ0Xe%2BegJrW5k--DhPPIOcBFQ57i%2FpTt%2FoTIw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:07 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "ee5d03cd-1c3c-4145-9ea2-c889d1879498",
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
## Can create new pin for testing pagination cid='bafkreifr2q4fqozozfl6tvayys335kwqkc3qelz6nipyvtkoxytapvlasa' - ❌ FAILED

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
{"cid":"bafkreifr2q4fqozozfl6tvayys335kwqkc3qelz6nipyvtkoxytapvlasa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b5c2a6bea1e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:08 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HcgH6V%2B3mTcfkCJlL8hqb5PYenJDtA4jQw%2Bzchb2qLWFKqay1xRuyii1SjKYjuvbJR9JiGTWz5vy76w8L9mmqgLt1oa5sz1X7UmBeUZRZv8J6fL%2F0O0HzGjg4dAXxklMzg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=rSij4LoAgKvvYFJW%2FlIWdueBvqOtwOV5t6GOpz2jiywFCZAwVCBbeN4Wq4ao5Wd2gRqVVf026lJuIEdO8y4vslOoZVaOYqdLfuFo9TtsHMqN4JIsaE90o25pqIDErC9R1n76CfqOy0jZdZyK7bQ9Q8egSNYNlyXKoaybZe5lAWKqlL3295P6Kwu77v2hMZMW%2BL8xtKd6UjYIUL6pGz%2BmZQplSxQe9vOJ%2BoFMv6Y%3D--AaLN06Psa%2Fki9EuY--BcnpTki8ibk9oJ31HQbdFQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:08 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "5b1c5f01-c704-482a-9e62-5cf22908a3a9",
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
## Can create new pin for testing pagination cid='bafkreiduiisaduwvgyeyhesqupflusxm266joo7xbofireosfkba42kbjq' - ❌ FAILED

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
{"cid":"bafkreiduiisaduwvgyeyhesqupflusxm266joo7xbofireosfkba42kbjq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b626eb74644-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:09 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QgnMXZyKgpcLYvmw2xfD%2BrocAIl1DyLP3oxKHHGWh0qxk30v%2F3aLGnYB0lYXh9OoITMD9xmFvFwb3M88TXFr1dUQAE6GBIavz7JK7WYKhzOlMTYAnOyBFL3l6ZTWCNwIUw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=JCtTeCr2Z7Svyid%2FVSvJZDt7nchH02teZ8dXJKAqa49fv2JTjt1DERn9xECNe4BS12ooi7%2Bm4haUfIJkGXyoRfqMCA%2BDnjQbtVovYOF9OqqE%2FgIj5qmAtLgBLwdEZIRNxh8gJwZlDd%2BGM1SQdIl1HN5lQVDyhv%2FTLxdQV2QNJ7%2FkI0fmJNMMoOfiNkevDUUIvR4t1TqW%2F0LnmRye1hWOrStoXCKastskKBjbqck%3D--O9Cjwu3g%2Fp%2BGOsIt--QqtoIrR8zTafez39u8cPrQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:09 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "6862c00d-439e-4a34-a911-b7df5d1125b0",
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
## Can create new pin for testing pagination cid='bafkreihbohwxw2qudyt42t45gbtgk66iyspwt4ib5r7hu2ksg4gantpwve' - ❌ FAILED

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
{"cid":"bafkreihbohwxw2qudyt42t45gbtgk66iyspwt4ib5r7hu2ksg4gantpwve","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b68adac478e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:10 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sg8QUuTEEz%2FaBPkNnCu6xETa0v2StBRrYFUu8sDu%2FoV8b86weYMvSZhavqlWei8QkLYwNcLfU8RWHq1%2BYoyqXwq4pWOForIHiwiX2KNWcUs6h2Nx9UO7g5VuKDWQPSL3qg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=kmX%2BTVftsxjgpotVUZapXolCs6k9sydiPzIXdqxF9%2Bv1G6me9s6EMke%2F5nSV1OguanM1jlDbrvzLYpgUAP%2F8vxd0R%2BmLo0dJ2nMGeIlQmWbQokejhQmGp335SBTQzMDAn0fbz01KA0yBwr8hTkzHaxZehekN66txTn%2BRkgRO68oAGvrgVmfeomZyC7%2FHQ5i%2FSsDQQeJr9TCF5lfsdBUjjSR1beb5BucXEIjThIA%3D--j%2B1RahLyBGNZvJqI--OM663uZ%2BJyML6KH2GLuETw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:10 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "4b0c0d68-f1f9-4584-86c5-7c536673b562",
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
## Can create new pin for testing pagination cid='bafkreidg4zw7c2ine2shjwbktb4j6q535li3235xplp7wfalszxmlbz6nq' - ❌ FAILED

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
{"cid":"bafkreidg4zw7c2ine2shjwbktb4j6q535li3235xplp7wfalszxmlbz6nq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b6eea73aa39-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:11 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h7NUUmlNrAhKls9C8E1ckbuVbr9Ux0eEOPhwRN9OEZLJMeEvQAe8aFKQ6xIefpKMhO%2FFiOWmMLw833tB2tAo9zPLVBSOJeWp6uwPp3dSs8xbZP%2BudRDPdyf%2FnbLCjMzTDg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=kApmsZkkARQ7cY5igl%2Fzl7CNlYIAn63FzUWMnCt214m7SIgLrqrMnqvgKmnVD9Fp4GDbmv2RnWhoRXtwMVEqXBdi3KOC4WoQLt0S%2BDfoJatYytJylz0nO%2FsM%2Bdav7r7mnzqzO29S%2B11hlccGIcPxwRiPTMa%2FX462lZ33hct8ZBDvV8xIfErW3f%2BYa3%2Fcji1Y49c8DWAxsWp3LUO2KHg3kiqV66ULOPGH9QZVIu0%3D--zEBvrEGzUg3iyC0Z--XU2lXTTFC3xDfYotW5Eywg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:11 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "eb568213-1fcf-43d1-94c3-e66833cad8d9",
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
## Can create new pin for testing pagination cid='bafkreic3soq5lkuru2wld4kng5rm3czzt45q6opclvnmgqmnmwetwsd64q' - ❌ FAILED

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
{"cid":"bafkreic3soq5lkuru2wld4kng5rm3czzt45q6opclvnmgqmnmwetwsd64q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b752a953594-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:12 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=egI9S2rFe0g4atGYVCsNFIuP8COgjSBQiZOMjkWJWJijy1i7Rnpefasv9SCkz%2BIlI2Rx8FzBAMcdKyOZc6CFP0D%2BosyD0IGf16YsrFhr4KY4B69OBceEh2qUFWyHRhTetw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=Np%2FhlwGQZ1BwQp3NvZ6OJMChyuP0Kz9ZuuTJKWTh5X8WLGWOwB6iJd4huKIwHIEUI9NV3ts23i89BzVpsfiH08mQ5qLtgB3Zy6DVGvaoAaykTwSGFDLiX3ucC5jEqtm02oFS5gI5g00sNG%2FiN6nje418dprwdrfP5JdAQywEXIrQCLG6iuTAk4DiQp0BWAUdipc30yWzY4LoLtXpYTj9yFBSnTJOca5qQunJjuM%3D--Zb5sV5gPbrttt96H--kC0FswhOZQ8yBhPUPQ7UnQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:12 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "07abf8df-1a08-4465-9b8b-8ab99691ad04",
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
## Can create new pin for testing pagination cid='bafkreicdktb72y3wfpxh5wi6f46xn4ijii3uxtb4wk45kst7qqnhfgxnwq' - ❌ FAILED

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
{"cid":"bafkreicdktb72y3wfpxh5wi6f46xn4ijii3uxtb4wk45kst7qqnhfgxnwq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b7b6e97485d-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:13 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=f4sBPTcCb6f94AmzgKq%2BI7Gnwlbzh%2FAANLODv9wbpCFH1IQ3Uk%2BMAx%2Fk%2Fyk0xapIi7EWsv5U7%2FN8ByUMQfprxilj%2Bg5a3YEIz0cyYjFYF158tcr%2ByCHL5qcWNSSkDD%2Fb5A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=ZwINQBlKOBe%2BYHhh1HKU78mQ847ld878kezeyXzOIh6cY5jxotokX4lcJVhQL71JNH75APSSpwpSElYdBT2rmd9GVgUwDlqz54vBKrCo%2BeSsgaaVq86RZK0vNacqGoOSPBXOcyD3rJf8P7oqCkkJ3rt9rLxy4cMQ5DiFX6S%2BlBchYXT%2BlNLfDKG1BkZsPmNPix9oA5O0TGIF%2F53tDQQ9i0PkbO6KK7XUfkz4%2FdE%3D--9t2ttcl9TuRRAglW--0Pi9MFcx7eQwt%2FGziXK6nw%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:13 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "94cf07fc-3d42-4216-8dae-e6895998a568",
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
## Can create new pin for testing pagination cid='bafkreicjimkdyfsrot2tcz5hqtunjlrl4iyqzdva5wl7dir7k4cvmix5c4' - ❌ FAILED

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
{"cid":"bafkreicjimkdyfsrot2tcz5hqtunjlrl4iyqzdva5wl7dir7k4cvmix5c4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b81bcc70bdd-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:14 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Me2iwz%2FcUQFqmpqjLCYNuDLnfos6TMD%2FupWCFALWxNQvVqxFXMnZCk%2FRQC1PC2MYqXWES3svq9NZE5bf2KnCUD7C6k%2BVERgpERM8P%2FN9i%2F70R3Rybt9FnYwGjwx%2BnkIq6g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=dM%2FeJKyMZGQpVgA4ci0xi7FSnMRjCiToCZOY8go5T9KZpfc1pffbfAHHuuPr9XNjf1Hs5A7xRae7hOPfanSaCl8r0tyLXnKW9FQ%2FZpCiKJZZTGdGbqj5gMZACq24PsbyE8clXEhd%2FHPCsXwPsxJ3w4SjYYVR0kIoVLEbjEaJ4DMxd3IPiz9hR8JDCrMtki0oa370j0%2FM62S4h%2B4fGFOrjtiRxW82R7Pi%2FK41%2F8M%3D--egP4oCLn8NWeT64P--oVvp2Z7gyisElryJthx42g%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:14 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3018b533-a131-482e-b664-f0153374f190",
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
## Can create new pin for testing pagination cid='bafkreicwfrntaw6e5irytl3oivycgiqpzoxntndauju4jf2x3o2e5jaz3m' - ❌ FAILED

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
{"cid":"bafkreicwfrntaw6e5irytl3oivycgiqpzoxntndauju4jf2x3o2e5jaz3m","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b880b48eae1-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:15 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nosY4hWSHxqU4t1u4%2FBNpEVsEfZVjyCjLyFGVc0Y0xV%2Btje5DWXvfdHfxM41qWgisWF5qSPTDjZfEuuxTvrtOniWDv3BCmhaqsf1evQ%2BuFIOP4WsP68bMIFCrPC7L%2BLiJQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=yMaJzLWSCPwoSsvWniiUNQhHtWWNA6KSNejq2354oklV7uzmlZgtt%2BMd4n5jFwrTfjt4422blqUB0bMTyDmm7LQq4st%2FWXgzJMpEmx6pb1%2Boo2deqq8Ak%2Be7awzfnAh7l1Fz0aJrATcShcoJSFaDb%2Biqwpa1IQy%2Fn8z0506WNXl%2BNt192uC3uL0kWH3eLGh3XI7Vhk8vB853zbFcHoCxGJ5bict%2Fk31SCclGavQ%3D--wqFnxAODIpRvC6NQ--tR8TOtMY3M0PmO8BMSi4Ag%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:15 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d154d441-535c-48ed-a6de-4190a52dda36",
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
## Can create new pin for testing pagination cid='bafkreidahbkmnywgb5gllcz4qnodi4w77jq7phl5qna453bccy56hewy2q' - ❌ FAILED

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
{"cid":"bafkreidahbkmnywgb5gllcz4qnodi4w77jq7phl5qna453bccy56hewy2q","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b8e3e7ae832-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:16 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nFWAY8xxNv3TCXrhcP3HeJp7ba1O4ePr5YP5m4%2FI4fyiYgwf9zM%2BTydkJ4sEgejzMwSErPxhGn1BeMKh5PR1H%2BuNRgcAz3DlYf41IXTpNyeOgqkEV3CxL4CZ9JSPjRuw8w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=IMatpimYp0VfQ5G%2BbhawDuuOPRyrmD5cQiddk6aaamDXURF%2BoRM7DuiphiOddsC%2B%2BJ%2FlV31cDB%2FD884CQaANyouO%2BsYlThuNcCFJ3%2BhIOI4m96EDGiPm19IqI%2FIzZk1D%2F0323b1N29ZsICEIP9GaTgZu4YOU39v573jTe5LGN5%2FSrD3lG8UARKwSrxdy0FTate4m4EbWeGL69%2Fg0qY%2FZESixXI7dqcWnCNf8tCI%3D--CMMCzj%2F6Vn%2FIeBuh--D9zLvWZ2rNbudZeA7q8xcg%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:16 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "8ce4086a-4424-4071-be77-0f487178ed10",
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
## Can create new pin for testing pagination cid='bafkreifflyi7e6vo6cxein4wbtbxavsbxznx72526tfqqqlvjv7rurxmqa' - ❌ FAILED

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
{"cid":"bafkreifflyi7e6vo6cxein4wbtbxavsbxznx72526tfqqqlvjv7rurxmqa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b947ff7e857-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=t9uLkEGNppp1M1HfjkXjzZMFT2nVe3GDIx%2Bi%2FXoidKqmWg97uWqhtg3IcwKhZci72HwbSEal5hNozYNI121TnrvXE39aYFceItuloe5jgi7jLYLQwYmeEiF6eQWsTxdC%2Fw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=db%2F%2BL0HKtxZRDdd%2FQfw6Srmsn4JTY2HjRVBYE0htL0yaDgjoKV1OWTxDl3IV7cuzgP8Etgq0qrQChAi7cON02IaHB%2B2ao5uWDYZZpkES59xaHRPbzrq0AGcNhdCUv7pvhixob%2FegTDp2TOK4h7XWwEd9ao38JjhncGddjc5NsAZFMRcDHDQpbpEHnPTR1S7UoKaJpvojUqV0nKaDHaiD6hRxeJ6Ok6vqBZsuF3M%3D--%2FulF6ugllaDo%2FztC--SdZbo67EI5DhIis%2BXOSxrQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:17 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "3bb1ab0a-c47d-4e09-98ea-fca5806a9da0",
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
## Can create new pin for testing pagination cid='bafkreiepdxicbkheyb4eige3ntza7upbtam4lbtkfndtnqveod3scvxhwq' - ❌ FAILED

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
{"cid":"bafkreiepdxicbkheyb4eige3ntza7upbtam4lbtkfndtnqveod3scvxhwq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36b9abe8ae7bf-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:18 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bL0k3up6uHB834jnkcN3ZFDC%2FmuozfRKGcIZ1%2FOOEYyUszxgtJGYhIqPrxazpiTT4pdMfQ1NFOuI8auAVFVIXCrTN14LyigqPjHfgW5F1KmutSQ4Azd2Pq2BuCuhsDl3AQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "set-cookie": "_filebase_session=GOJVtL7YB%2BvWasQCfRsD1lQFZJyP5wH43QXYtw03%2FohRdJFMzF%2FrC0tgmnO6o0YMhtR%2BLzw0cEvIrwvB4YCpj%2FyhV%2FcHJtriRE6%2FNP7ElZWLabpH5BroMV1GzKRmVrJX1Y88Qjc%2BoO5JwQh3rGs7p9gtYCqtmZ1vOCnclkUB9%2BN4O70MyQ9l5m98ycCJGCzJZt7mGGP2GejvnorToHd8rAsPKbtrDoAsp22SWWo%3D--JcOPzZgpGoUdRSnO--K7bhcf7EOksWD3sA7N61hQ%3D%3D; domain=.filebase.io; path=/; expires=Thu, 06 Jul 2023 09:21:18 GMT; HttpOnly",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d610779f-374f-4635-b24c-eb813b55696c",
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
  "cf-ray": "7db36ba0fab92c89-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:19 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rUMkXudVJ5q1VUJRxeH8j6uMehVO8ZlTeTBV8UMcb1ZSQNZyKFGfi4xbJaoyn0Jv0uA0BDgg7VsA3PtcnxrYkM03YnfyhQdOEfnVFXsnaEolR6exfM7qMBjVv0oaw%2BQYiA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "de0c8160-c82a-4e55-82db-eed0c86120f7",
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
GET https://api.filebase.io/v1/ipfs/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-22T09%3A21%3A19.644Z
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
  "cf-ray": "7db36ba20ce2474a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:19 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IozrPSUFpHDbAZRQkKhnIBkkctV7JF5fljPP4zSSlKpguScbaVYD8Ko3Dhi1xOHwIGrmZonj4OhCdsmNDC5eKJWSuOJdHQazYcb%2F8ZqW7WfwlzU85e0R7erliTwoUhrTWQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "d387a8a9-d908-4e5e-bbd0-6e5acbd4d445",
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
  "cf-ray": "7db36b3cefa9ea2e-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lSlbImrBCdcpmnhHWtqG7UHQRlKyVckgDFe8xbNFxhyGwdmCGjo6aZbKTyl3S1VbSwzRO5XXl8Av7L133jRfFK4QT8ZDKHbBz6CRB9rRprUrbi6BP6LgqqiwxHXCTwhVfg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "2524ece4-ca8e-4aeb-887f-112ef1cab403",
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
  "cf-ray": "7db36bae88984793-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:21 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Gap2RqL3vXXkWaOKOemfXjcXt2XzU1nChvyOJVFA2QlTFkaXxsnB9xi66kSOgjKodL0MHFSt%2FuNW44jaX2yzaIB6H%2BRNzqcAvKFbzD88OXj8scQ8d5qR6v4BVhRthn7DcA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "eb5c4116-31a0-4110-8b9f-c4dbe14d0b50",
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
  "cf-ray": "7db36ba84d600c03-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json; charset=utf-8",
  "date": "Thu, 22 Jun 2023 09:21:20 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "referrer-policy": "strict-origin-when-cross-origin",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6cZA3aaWWoA%2FVbJU%2BkSiRE2zaCPxnBbot9fnsNiKvaVcZz61NR1tlubbnfoYL2BZcT%2F%2B2BHzwyH5tqB7hb90PPmgvZbG42y4vVSZNu8A2%2BsvfQLjZ1DiVIpkRwXsuHXqAg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding",
  "x-content-type-options": "nosniff",
  "x-download-options": "noopen",
  "x-frame-options": "SAMEORIGIN",
  "x-permitted-cross-domain-policies": "none",
  "x-request-id": "c9971165-09cc-4b90-b8c3-188658bee7c2",
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
