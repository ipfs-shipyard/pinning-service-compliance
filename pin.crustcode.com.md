
<script src="./telemetry.js"></script>
# https://pin.crustcode.com/psa compliance:

Execution Date: 2023-06-22T09:21:10.632Z

Revision: [5b07f53](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/5b07f53)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/pin.crustcode.com.md)

## Summary (2/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreiatago2dy3ib6kv4ohavx4fxlfqrr7vybpwg3xs6msqyhnrdygs2e'](#pins-post-of-cid-bafkreiatago2dy3ib6kv4ohavx4fxlfqrr7vybpwg3xs6msqyhnrdygs2e----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='a73717dd-ecaa-4ea3-82b0-8a323e6fcb96'](#can-create-a-pin-with-namea73717dd-ecaa-4ea3-82b0-8a323e6fcb96----failed)

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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36a9e4fd31039-LAX",
  "connection": "close",
  "content-length": "63",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:38 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3CiL%2FlFGFHHJ45URHvi1zLa5jClljWpDkgw8H3Cf8rou0gkt%2F3YHpNQemsyBCqmCRzsE9wgpVkWhKEG4rjBKHLu6bMU8wwTPGMygiXLKeA1gSc%2F30XdljwabnMcOa%2BGeBaejfA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Empty Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Empty Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36aa488252ad7-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:39 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AoQDVBQBpAYk6zaqz2j9GyCbxtXmmb%2Fk3DLuUpE6kqp%2B2sLdXKp9Cm0ITS36O6wVKR42yEeyp3FRWJKih44N9OmLfKLzNZV11E%2B%2FX%2B8PUZ1BlvXMipE3Ne5ivtpmzOQFiz5xIA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'bafkreiatago2dy3ib6kv4ohavx4fxlfqrr7vybpwg3xs6msqyhnrdygs2e' - ❌ FAILED

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
{"cid":"bafkreiatago2dy3ib6kv4ohavx4fxlfqrr7vybpwg3xs6msqyhnrdygs2e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36aaacaf80fed-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:40 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PaVkvvYP0m2w5NRe9ry%2BqX8fog0tHqQ0lFJuY5kS1cUdLnNzH8%2FUipn5hyKQpqW%2Bo6eZqKSY8i1PiJFUFU5S%2FK22sWeEFpKtKTvauYJt6SLrbrqsd3ZjSVwydsdg5w06y54wNQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36ab74ca65367-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:42 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sXVu2gTY5NhyS7kh5o8zlr9hEfPXDBumXFCRoO4IMVx7NsgWORQjCHTml%2BbnFo%2FnhQTtwVozSWoTX40%2FBPAFCjJ1I7Kab6qRns3j9mCsRLr8nKwmJRRcQJvCjmJfQ%2BUd4rgqmw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
{"cid":"bafkreibi67vadfue3ihd74fng75wn6kvljf7neermpra3kpcl7oggghxvy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36ab10a8f313d-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:41 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TQywkrZYPdmktcrk5Erc%2FZxy7%2BLKlVtUwWWNnPp0BLqTk3U4eSYmsQU%2Baiw9J7PTpmDrzY7AL0xoyiRVRCbqMr9HoT%2FK4%2FJCJGD7KggfUsu45bbPcNn3bnun4oYCleNz7QdzdQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36ab9ba6e2add-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:42 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Il0L1npDaCvTZdC88JtOPSsoxakG0pfajBVm%2BORF3Cj5SoLXQtYPR%2F3vwEY6PW8aWjKEUgqwxs56YkitJyKxDW2N4liAvKFKyZu185VyxXfpNry%2FSHyBpwO96Nxf6bTvN4f7og%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36acc7c937e86-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:45 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KJEejARjq1%2FTpwEw4dVdpsBpreA%2FSo7pJQDP%2BWxeb0kTgiX8%2BIf%2FDXEhZ4Z29fYIVQOv4XNX5VVOtldhfZZG1kISRBwmeJv7TeFOtpBDEPknMQZzNkzD%2F0%2BlKOBBBsHTE%2FXj6g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36ad2be3c0928-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:46 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nsUi38Gs0TwaU1tYKRi5qP2yJ5p5E8i8lVnlchwYs0uTtjbY5nvRMCnKoLzrWhVPgn8MopQo9fYmR6gtx%2FKzJCo7ZnDxjjvWp%2BWulMk%2B8sWVyDGV16S4639wQS2%2FgRHEJA%2B0og%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pin's with requestid 'null' can have cid 'bafkreigyxfeb2cep3v2sswawzlnmyqcn55lbvshcutfckade5u2ho2pgde' replaced with 'bafkreibp3jsafinwux4bj6enoyrohtnbyxif5xfkuvoxi53j7z67fgcpmm' - ❌ FAILED

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
{"cid":"bafkreibp3jsafinwux4bj6enoyrohtnbyxif5xfkuvoxi53j7z67fgcpmm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36ac63e237c47-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:44 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yzkROYK7wf%2BvcrC3iAlhSYNs6w2seAmqDAqMF1IUWMkLG5y6CY9X4oCHsjgzsYyb0EzX9IL6Spr34qK665B1izS7tve2tMw4efJnLIt772m%2BPhIguEQIVwWXpf70oZcPjm1npw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
{"cid":"bafkreigyxfeb2cep3v2sswawzlnmyqcn55lbvshcutfckade5u2ho2pgde","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36abffc4608d5-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HBgzqplgqrkEPqbYAF3MSmwztBA%2BZuIoy73QXeKTu6GQT%2BwXzU74nfGKNMCSoG8pyO6OhIFnKRiCdofPlGQHE5ZeJ2zsSffj4oSmuWdIMnBcpYJ5zt1DgJ3hR5zZfCPEmWh%2FGA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'a73717dd-ecaa-4ea3-82b0-8a323e6fcb96' via the 'exact' TextMatchingStrategy - ❌ FAILED

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
GET https://pin.crustcode.com/psa/pins?name=a73717dd-ecaa-4ea3-82b0-8a323e6fcb96&match=exact
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36adb4e540fc7-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:48 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RQIqSDbw4nkniXJDuNy6oDnP2E%2BqvxozSDwXj8MAVCSqaFHl7Ql1BlEPlSxHKFE3zJhZIpGSg73zxircCmDbTAw22J9cCDHSBDYjlvGSoxF5BV3HpWxXRxjV%2FMD2emi1vpjeDg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'A73717DD-ECAA-4EA3-82B0-8A323E6FCB96' via the 'iexact' TextMatchingStrategy - ❌ FAILED

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
GET https://pin.crustcode.com/psa/pins?name=A73717DD-ECAA-4EA3-82B0-8A323E6FCB96&match=iexact
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36ae18ce652cb-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:49 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=t8aeIUBnS8X4ZdIT0yEgTq3G6QrmbqM0NKrVmSWzOLIRzc0BF5U9DquZ8jeG%2FUzzDVCsgjbgTbMTQoZsSMPkOywYcalr24GH453nyNODCoEScbpoPuImXe4aeabQ5aI3TzUARg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'ecaa-4ea3-82b0-8a3' via the 'partial' TextMatchingStrategy - ❌ FAILED

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
GET https://pin.crustcode.com/psa/pins?name=ecaa-4ea3-82b0-8a3&match=partial
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36ae7cfba092a-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:50 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Dj1dY3GqzZn%2BoOr7Mg8gEjzLyGilY%2FqdK1JR267HydLPrNAEUeR7DQUATEcSBYOXSFjtnj3ppQ%2FZOC8PJLjA4oAXAl1bu6SmVITjFZUkEVcppMDyK2ai9EkVQWhBiZXZPITdKg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'ECAA-4EA3-82B0-8A3' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

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
GET https://pin.crustcode.com/psa/pins?name=ECAA-4EA3-82B0-8A3&match=ipartial
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36aee09ca0ffd-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:51 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F565ZpM3vk7cUDQaCvB243qxdcd4dNF%2FnDWC2J3deAWMsf%2BuJaFzx5xuAVwST4wD89GyqLsPr1cVL0xAVZYes%2FzTV34kFBbT8U6HFV9vZEU0TGw4hbalarQ7ipwboTOFbOR8Mw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create a pin with name='a73717dd-ecaa-4ea3-82b0-8a323e6fcb96' - ❌ FAILED

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
{"cid":"bafkreihxyz77k3grazrd3xsn2wuiiirsztkc3tfrn4j74wvz3z5zhqdgmq","name":"a73717dd-ecaa-4ea3-82b0-8a323e6fcb96","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36ad50bac08fc-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:47 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9Pd9H1iqLvR%2BCftf5VydfE%2FgykrS%2FMzjvENcLj%2F15EV9B25rzZKajI5cLL39adCwCkYf01UEaFkKh%2BPxFphuTOhpFV8wT380Sf1bmwXrY%2Bmpdh1hwtjYyX0ndJfZf3Olse2uAg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreig6wcfge3bwrwjmc3uehptpa43zcavrzp67wvvlktgcxrnbjlkd5m' - ❌ FAILED

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
{"cid":"bafkreig6wcfge3bwrwjmc3uehptpa43zcavrzp67wvvlktgcxrnbjlkd5m","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36af6fdb808d1-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:52 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=42cZiGSJa6t4%2Bke5eZLe62p8FDfIR%2BFXdBs%2FnXKbmPAfGz%2B%2BD%2FP%2FAREZX8UEI4vPEVq4qOujRgG9nDYmCQrmm61zqdA%2B7xtc7F5pvvXpi5wr%2FP6etUDGmg1CJh0bqyzz4k4QGg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreickqvkb2ylqhfmkx7se26656e3kiqjgaic2nkvc2ffm7hox6bgpiy' - ❌ FAILED

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
{"cid":"bafkreickqvkb2ylqhfmkx7se26656e3kiqjgaic2nkvc2ffm7hox6bgpiy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36afd3f5b2b8a-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:53 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GBGDUUdh%2BAteKEaFIK%2FVOAx92pkmEWmzrz5tYWmx21lBlSaoaInxv6mG2RFnDMiqMNNQv%2BVcsD%2B1X0AVduu%2Fs1RkCqJaDazr2fd11mxcGXuvtiZf%2FWO9OkXMTqBemBk2c5vDRw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreibto3yojnao4pkwx2cvnnz7eztpwvqn4kajkhtl6pcwpq7o2q3ewa' - ❌ FAILED

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
{"cid":"bafkreibto3yojnao4pkwx2cvnnz7eztpwvqn4kajkhtl6pcwpq7o2q3ewa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b03785c0919-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:54 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YqXD3PFtwIG45AgWnuzubFfG31x%2FXywaReC6KvlsSV6waWyaVkovfMAIdb3OqfvCB6m7MNGtSqaZ5pX1ZbJ03Y3wqleEoM0fJFpdB4xtvSLfRSNUIBODQpWxXDkbkGcsw1xKHQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreigx7k72yijvg3rcv72gbnoip56jldrhstkpeox3vqzdjk24a5v6ni' - ❌ FAILED

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
{"cid":"bafkreigx7k72yijvg3rcv72gbnoip56jldrhstkpeox3vqzdjk24a5v6ni","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b09bfbd28f3-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:55 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=00Lj3CBFxdPvM2b6qUH1hqqHelKSJNQwo%2FBQc1Bc4AgkNCwg2NhPonVLE6nFDtKnyJ4HBQGyUTWjI4JGKYaQ7RL7Tm%2BBGAbBw96xjzYPuCeSzU1GdwivyZKcfM9AohrpNzYNbw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreiff5h4sc5f3lkf733agva3dvy3iqagcs5n7yxmqbkywx5vg44v6ui' - ❌ FAILED

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
{"cid":"bafkreiff5h4sc5f3lkf733agva3dvy3iqagcs5n7yxmqbkywx5vg44v6ui","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b0ffa9131bb-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6rPir1BKrYMFV%2FVzhd8wmjNLqtVOOmCOpAzxkb1mHFyjXiL3shqFtuNc3Qg%2BYEq6cNwUt7gYxR%2BpsIueXYN%2FclIdsauOrZW9DUeCAT0YFGG2vhyvp7p6EtYijnVUeMLWnMBsew%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreidsj6wczbvbbh4tpmpbmht74ixox22oczv7enh2anfafauzntrndy' - ❌ FAILED

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
{"cid":"bafkreidsj6wczbvbbh4tpmpbmht74ixox22oczv7enh2anfafauzntrndy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b163fe67be9-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:57 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yVoWHhl78h4nrWXURPokEjJYW53LZW7wfa6Kg6q6d38HcVZnzU3GW9rVxoLpWOAhXGsh8WESuobjpLvNO0h0jGLRvEVjWg6mbc8DGA7ISFbZuXnqQHxpd9uojesvObnPOwsGgg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreihs5xvf5zhwvx2lxya6abisjsalt5tbzihlxqkn7frdabf6fl4xzu' - ❌ FAILED

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
{"cid":"bafkreihs5xvf5zhwvx2lxya6abisjsalt5tbzihlxqkn7frdabf6fl4xzu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b1c7b170908-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:58 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oweSAcGIGxgO%2B3VJS0wJ0yfxWy2NRwGcVSy2q2jbkxxrtgBuqoAuLxdO0sGoFljiawrjTXlTEdptypZINDewd%2FY3DkKYXyBOlRoNMZZTxeYTn3cHyabiUgOcRQr%2BR92BMiJeMw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreiehps4ow7zykpczksrpbjyfkv2pvr7fu2br44257oqqko6333ygmy' - ❌ FAILED

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
{"cid":"bafkreiehps4ow7zykpczksrpbjyfkv2pvr7fu2br44257oqqko6333ygmy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b22bee314f8-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:59 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xNkft5%2Bba2bl5nO%2BAXR%2BtIHjcIFu0NfNjjiU%2FgFdCrdSGMJDks%2BoBpIRk7M1Q1TsUMRsg8DTSIbKK6tg3bOjZpepf7PP8Y5WlKAL6wmuQED4pn4NhkV6R6xt1PITADcFrxAiLQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreihuwzj3btd3f73wppj6yfzgmxl4yqpo7gn2pywovrpbztlpsac6vi' - ❌ FAILED

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
{"cid":"bafkreihuwzj3btd3f73wppj6yfzgmxl4yqpo7gn2pywovrpbztlpsac6vi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b28fbfa7ed8-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:01 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KaNK2lIsJz3tq%2Fr%2FV4xjayQgYvKG7yIRjboXEW%2Fl8Qls07Nrnut35jf0%2Bs1tlp5qqXHTIaQo5PTJf8%2Fz%2BJO13HICaa%2FUshH3OdsY1zW9ytJxTv2DYPXfvdx8JqhFsLfpa6O4UA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreidtpbps3n2r3crytf4fagvp3hxjoua6lda266iogs4iq5njynbzsa' - ❌ FAILED

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
{"cid":"bafkreidtpbps3n2r3crytf4fagvp3hxjoua6lda266iogs4iq5njynbzsa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b2f3be82f09-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:02 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jHazIUj%2BkyT8cVo0M9j4qHkPCuHcvc8wS%2BkZ0diqLbiG4qojeuT5UzfYfSOUNF6CuU9ElzaDLjxFSaxSuLaALGQ2WmRkk56%2FKMwPleUMTLRRsqHT3xi5veXJCJ0mQuwroq0%2FCg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreih5xwgnyrbx4tl3erz4bgd2hhaqozqewgkrhoehaph2lydsn76opq' - ❌ FAILED

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
{"cid":"bafkreih5xwgnyrbx4tl3erz4bgd2hhaqozqewgkrhoehaph2lydsn76opq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b357b6708c9-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JO6W3Q1rb1pd84J1zwFuEV7gR4DvBJrszAY6lnNmM4g9POgiL2uM1QreywpoTuRCuJGBm7Uhp31nR7SpaHeWn%2F1dwl08Bpx%2FJEa5KDulT7eNSmc6lITsiF3jtSXljJ1JFpQiMA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreidiizivd3kqq7lvo5yvvajghrqffepfbc5zvcj7wcnkdnxdngw25y' - ❌ FAILED

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
{"cid":"bafkreidiizivd3kqq7lvo5yvvajghrqffepfbc5zvcj7wcnkdnxdngw25y","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b3bba8e0fe8-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W5cALnFUf0m%2B8WFprV5v0ovs2OfTnRCmLObwBfGa1qYFb9%2FkpXAcJEWSG9SRNm2qx6wHA5%2FRb%2F3ROacNTgm7DZ12iiu1NoL%2B0Q4biebtFuqTksKhGGe8QgrQl7mmLWpN8KxgbA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreihaql275jeyi54ov54typtrlsskzljb3bl3n2p5mgspi67h5eywce' - ❌ FAILED

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
{"cid":"bafkreihaql275jeyi54ov54typtrlsskzljb3bl3n2p5mgspi67h5eywce","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b41fe447ce0-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:05 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=93ZL10qe7oo3AfUNUItXGQX%2BaAsXt65g1f5DCvdI6vu58E3MrFHSc7zqf%2FwqnZjGEb3NdbL%2FIl53kVVi0FHGZPkrcO4O9C65ujWpKmBLUPIAuNazMscLbw0FPj2TPUvHokuHHw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreifkyuyo7khfdc5kxl5vwisabfk2ew4ji24ifa6ab273bgndwyfbsy' - ❌ FAILED

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
{"cid":"bafkreifkyuyo7khfdc5kxl5vwisabfk2ew4ji24ifa6ab273bgndwyfbsy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b4839cd2ef3-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:06 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZxbtYBgsafskhBi4zgIKBmZFyeYr7ZqrAjDg%2Bmx6ZGwiOJtxsYY7Xp87ELl0E3adWv%2BwGyZviUBCEyF3yRDt0swH0NzfNipaQolAZ8KC0vIhUI7MKDBA%2FNrV6Sa4Jly4lJEVww%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreifrdx2utqk3vel4t3owwhyavng3wiwehcytzbyusuunwpyl7mtkji' - ❌ FAILED

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
{"cid":"bafkreifrdx2utqk3vel4t3owwhyavng3wiwehcytzbyusuunwpyl7mtkji","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b4e79222aa0-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:06 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8iG3TK%2FpOEodDv8yuRkFRawuPMwOcxNAS7Q%2Fv%2BMVb90Q%2FSOsYH7w9CN6u%2FuaoapkH0m96uJI3f3zL1yIXCo8kwNAaUvSu64blZqEUmg32fSe4ZcNoY%2B3qsCm67ctlomTb3pHkA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b54cbcc2f1b-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:07 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7LQHWun5HGet6W4Ut0fAsz1Of%2FxUyN18la7MelgQrMcV0f8hnFxwGsbyC0eD6mMOK%2BjWjsPK4LDFgHugS7Ij1EhJy%2BMkhMFrD5tEwiFCjkCXD7zqb5eJQwQvYHUD%2FpUASDlRJA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
GET https://pin.crustcode.com/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-22T09%3A21%3A07.856Z
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b5848687c4d-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:08 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Bdcqa8sjHfSk%2Fe3u58ifzLmZ93LelxI5OoQBpi9xidKCAbjieDvgJ940K9Ajqo%2F13CMEQhTDO3p4qwtq37ym7Gw8W43hlMx6nvjRJrXaZmv3SDcjrwBqt8nP8I201YsexDmsdQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36af0bc380cef-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:51 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D9%2FxJZlTraWnUFlN3vaN3QimhOTXfCZGvmERGFTAcYVyr2U5Z1siEeaAYztKt560upAs6Pi0TEmY2d%2FYUBnjWXda56WD6Oqb2Zm%2FE6l8rIz6PBIRC%2BtnHOcWLyJoa0CT3NLmCg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b64cfa57ce5-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:10 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gyw5tfbeiAMmQJ%2FxUdsqunVFHi87bx58TaGZEcc4a9e%2F27VwDn3Zf3Jd7eq5AOO%2FzCsTwfXbLxXRHPIpOwZ4LHT1ehBPHELJnDApvLDBszI5Sc7PqDMMzOFg%2F22tULewKq%2FySw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7db36b5e79065343-LAX",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:21:09 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sI2ztSSGCcQ8m6b79uFfqVmxODLMiKTF1L5yzZxNpc9UFjErlrET5z%2By7otUZi50Abk5XRRvXGnfrQ%2Ffj9r1iDUr%2Bmhjzz8q6fLYBVezhPdhU4pEM2FCiJe74%2F9aKmjCGbjKEg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "x-powered-by": "Express"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Invalid Signature"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
