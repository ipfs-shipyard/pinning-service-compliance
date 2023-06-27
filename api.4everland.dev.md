
<script src="./telemetry.js"></script>
# https://api.4everland.dev compliance:

Execution Date: 2023-06-27T20:12:13.399Z

Revision: [e5fdf56](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/e5fdf56)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.4everland.dev.md)

## Summary (8/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm'](#pins-post-of-cid-bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='53426d20-7975-4afa-b00a-4523f8a04039'](#can-create-a-pin-with-name53426d20-7975-4afa-b00a-4523f8a04039----failed)

  🟢 [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----success)

  🟢 [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----success)

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
GET https://api.4everland.dev/pins
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de056ef4f8515b4-SJC",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:31 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9cRRRr9ESQROxQV9uZJEK2If%2FyfcJPIodLXtY1pKzplCBpqYgduD8q1hl6qqF4P3AaGMYM6HNWhtjAXfxRoz5FlpgWo0hCkk6mLRUIVCh8%2Bpnz3XixHuRLa%2FtcjhuY4hFTscMA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Access token is missing or invalid"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Access token is missing or invalid"
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
GET https://api.4everland.dev/pins
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
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de056f58a91987f-SJC",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:32 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YM3nizUIYBIc6%2BEd8WhDh8xURBNDMjH9n%2FLqFRdi4re7N0%2BzktDZENnmT%2FPbNJbq128utd7SsPcQOO%2F1%2F0CVCKRGQwwf9zNB67yJrCbpp2FAUzH%2BXG9Yr4vhkb%2BbxyXPZrpISg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Access token is missing or invalid"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "UNAUTHORIZED",
    "details": "Access token is missing or invalid"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Pinning status is either queued, pinning, or pinned (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de056fbcdf61703-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:33 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9Ni%2BYQqD04MlJTrwRz9hGSk4hD4MWTldlijuD0Tj%2BodWcvsk3g6v%2B8MtJEqITv8UOtgmHmi%2FaSDEoOqdf9MgToLP9vbzQLg20ddr7WaAkb2vVqINCi%2BRlhckwfpylJ8GjDLx9w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
  "status": "queued",
  "created": "2023-06-27T20:11:33.099Z",
  "pin": {
    "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
    "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
  "status": "queued",
  "created": "2023-06-27T20:11:33.099Z",
  "pin": {
    "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
    "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
  "status": "queued",
  "created": "2023-06-27T20:11:33.099Z",
  "pin": {
    "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
    "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## The newly created pin can be immediately deleted - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/f33c86b7-ec71-4040-8afe-f8156e15fc95
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057084a8c230e-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:35 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cpZwrLFhCF6mn9SfEytKpYsL0ttxKknx2Ta%2BfEh90Foedt7NQ%2FvA4pjcCYZH43szrWr%2BDSU6FJghzcsMeBnVQCpFKOseUfSv7Eq8IXyPoTXt4GlUCUt%2Bdv2fBaG7NnSmkxriLg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can create and then delete a new pin - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Result is not null (success)

  🟢 Response code is 202 (success)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreibdfhppc6piq3wwwevy6xavntpbhhmvhgymvhpmbyqhwomxulhf6u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057020cd997cf-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:34 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fSaBXfcsSEg%2B0nnb50AUWcUu4kXsQzJou8brvl9XLdI4Z1tNb7u%2Bu3QAOgEuz58Rz%2FUDgBciGx2ekioak5CgTIw2vziuoreY2l7ZGqn5Of%2BjoiYWZ2hA94B2uJWtXxCvwe1RaA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "f33c86b7-ec71-4040-8afe-f8156e15fc95",
  "status": "queued",
  "created": "2023-06-27T20:11:34.105Z",
  "pin": {
    "cid": "bafkreibdfhppc6piq3wwwevy6xavntpbhhmvhgymvhpmbyqhwomxulhf6u",
    "name": "bafkreibdfhppc6piq3wwwevy6xavntpbhhmvhgymvhpmbyqhwomxulhf6u",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "f33c86b7-ec71-4040-8afe-f8156e15fc95",
  "status": "queued",
  "created": "2023-06-27T20:11:34.105Z",
  "pin": {
    "cid": "bafkreibdfhppc6piq3wwwevy6xavntpbhhmvhgymvhpmbyqhwomxulhf6u",
    "name": "bafkreibdfhppc6piq3wwwevy6xavntpbhhmvhgymvhpmbyqhwomxulhf6u",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "f33c86b7-ec71-4040-8afe-f8156e15fc95",
  "status": "queued",
  "created": "2023-06-27T20:11:34.105Z",
  "pin": {
    "cid": "bafkreibdfhppc6piq3wwwevy6xavntpbhhmvhgymvhpmbyqhwomxulhf6u",
    "name": "bafkreibdfhppc6piq3wwwevy6xavntpbhhmvhgymvhpmbyqhwomxulhf6u",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
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
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057089d711748-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:35 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BD5nZ9Xw5%2BaXH0YFDgHxz%2FADEkmnmPWuyLQJGc%2F9L9SsMOHlUIPwe89Xl1UZgfIC9nwDwNKCG0FKnoYiU09nhhfwhIiBkrT5qGbpCUpteJH46C0pd55VVjUVzCIWrG9JB93tQQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "queued",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
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
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "queued",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
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
## Get original pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.4everland.dev/pins/25f98228-7c64-48dc-972f-20691fd5ce6a
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0571b5daaf95b-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:38 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=49f6N%2BdsJD463HLCa%2BNPyHlYUc4VcD1MoBBzM5qmr%2BdkQPzmrtTliCW7YfmZSg6HxJ7v8%2B90s%2FXxKPZcPn%2BhbNeq4xRue8P00myu2CdsVhqgEi%2FUN42720oEfRw3MkNPa5n0gw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "error": {
    "reason": "OBJECT_NOT_FOUND",
    "details": "The object was not found"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "OBJECT_NOT_FOUND",
    "details": "The object was not found"
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
GET https://api.4everland.dev/pins/da6670bd-ea6f-4a5a-bb6f-dd65028d57c2
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057219e8c15f3-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:39 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=czVXS4rT8g4BUraP11T35wiswGN9xxaQRZ7NPyUZFNC%2Bz5l%2B1TMPGLePFmgLcQ6VHzNE9GCfPjApXRbQ26vcu41Z1fK14DcXNjUrR%2F0Nw46uvv0EybE%2BNrpPf8BwIiFKrNSz1g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
  "status": "pinning",
  "created": "2023-06-27T20:11:37.155Z",
  "pin": {
    "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
  "status": "pinning",
  "created": "2023-06-27T20:11:37.155Z",
  "pin": {
    "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
  "status": "pinning",
  "created": "2023-06-27T20:11:37.155Z",
  "pin": {
    "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Pin's with requestid '25f98228-7c64-48dc-972f-20691fd5ce6a' can have cid 'bafkreiddoasyuq7wuepsytt4fe3qhztgbeynfvcxwvlnhjvhn52q4e4rvq' replaced with 'bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.4everland.dev/pins/25f98228-7c64-48dc-972f-20691fd5ce6a
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
{"cid":"bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de05715184a169e-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:37 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vzwIWbBYbVfdZqPMCCx4GOqi%2BoGoFsFd4Rw9eYr9udsqtpAKmLXBaQSqcM9MNIdOpJD78PPwdQoSN3Uwou%2B2LfqS9HQ53h%2BsiKiAGGrvYZZTKRRdx6kKhVYMTO4p8ze2awbUCA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
  "status": "queued",
  "created": "2023-06-27T20:11:37.155Z",
  "pin": {
    "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
  "status": "queued",
  "created": "2023-06-27T20:11:37.155Z",
  "pin": {
    "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
  "status": "queued",
  "created": "2023-06-27T20:11:37.155Z",
  "pin": {
    "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (25f98228-7c64-48dc-972f-20691fd5ce6a) (success)

  🟢 Response is ok (success)

  🟢 Replaced pin has the new & expected CID (success)

  🟢 Replaced pin has a different requestid (success)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreiddoasyuq7wuepsytt4fe3qhztgbeynfvcxwvlnhjvhn52q4e4rvq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0570edc9115d8-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:36 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3327JAZgv5iXCJ3%2Bj%2BntpQZRYCYVD2q7pkPAJudJXY%2FUDS2qtKiBvhzuK2aLTn7m0hU2f9Clm4NjXCL%2BYlQULpWL0LNWhnqKYR6wdLcfjWnsjStKZnjfa4H7ttwyohfFg9B21Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "25f98228-7c64-48dc-972f-20691fd5ce6a",
  "status": "queued",
  "created": "2023-06-27T20:11:36.146Z",
  "pin": {
    "cid": "bafkreiddoasyuq7wuepsytt4fe3qhztgbeynfvcxwvlnhjvhn52q4e4rvq",
    "name": "bafkreiddoasyuq7wuepsytt4fe3qhztgbeynfvcxwvlnhjvhn52q4e4rvq",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "25f98228-7c64-48dc-972f-20691fd5ce6a",
  "status": "queued",
  "created": "2023-06-27T20:11:36.146Z",
  "pin": {
    "cid": "bafkreiddoasyuq7wuepsytt4fe3qhztgbeynfvcxwvlnhjvhn52q4e4rvq",
    "name": "bafkreiddoasyuq7wuepsytt4fe3qhztgbeynfvcxwvlnhjvhn52q4e4rvq",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "25f98228-7c64-48dc-972f-20691fd5ce6a",
  "status": "queued",
  "created": "2023-06-27T20:11:36.146Z",
  "pin": {
    "cid": "bafkreiddoasyuq7wuepsytt4fe3qhztgbeynfvcxwvlnhjvhn52q4e4rvq",
    "name": "bafkreiddoasyuq7wuepsytt4fe3qhztgbeynfvcxwvlnhjvhn52q4e4rvq",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can retrieve pin with name '53426d20-7975-4afa-b00a-4523f8a04039' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?name=53426d20-7975-4afa-b00a-4523f8a04039&match=exact
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057281cf19e5f-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:40 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lKUjHV6SARg2ylEzaY%2FTRa9VB%2FoQYGTCbJ7ky3BqsrYh4%2FHCtyXD0ISHqS4JbZwsXRMzBrgnxMs6QppNMLyD%2BxpT7dW0ffR%2FwtHma3W4Jgsj%2BWSSYiOeAuh2UtcPTZfYYXdIVQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "queued",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
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
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "queued",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
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
## Can retrieve pin with name '53426D20-7975-4AFA-B00A-4523F8A04039' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (3/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?name=53426D20-7975-4AFA-B00A-4523F8A04039&match=iexact
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0572e5a0f17e0-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:41 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P7XxrfDi5x5doyaGQsP8EWJg%2FcP3tkDTXlsbyKJa%2B4wZc1QNGG57enLYA%2B5A%2FRwLh%2Bjrpp2P05Crmzz%2BBMmoXiRCb9eOlPHPerwpVFNYJIcJSS%2Bf7kCKcda5L3W5agUg%2BqY3Uw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "queued",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "queued",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 3,
  "results": {}
}
```
## Can retrieve pin with name '7975-4afa-b00a-452' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.4everland.dev/pins?name=7975-4afa-b00a-452&match=partial
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057349e429858-SJC",
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:42 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OfhIw3Kut1bG6ZlTBsK%2BoLHmLDQ7kYs8jcWR2q8rjxzoAwBN1FmdF7FoRE8%2BiqhDLxlxZGqg3KxPq6%2Bv7c%2BRE9DowBE1usH3b0Gw8DvujGclkdujRBB0oPs8Pczs9ULWbVFH1Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
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
## Can retrieve pin with name '7975-4AFA-B00A-452' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (3/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?name=7975-4AFA-B00A-452&match=ipartial
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0573adba9faf0-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h3mm%2Bqt17BvPcYpqU0DRiTQlP7aeipqKnjcSL%2BtwdSw0Jxz2S75o%2Brxy5B7VBGHBKWMTUwyDidcTx2TiRHqFU17lembz27aOQH3kA9PhNIuhzQAr8kPr5cTXT96hH8cuL1RqxQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "queued",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "queued",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 3,
  "results": {}
}
```
## Can create a pin with name='53426d20-7975-4afa-b00a-4523f8a04039' - ❌ FAILED

### Expectations (15/19 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a","name":"53426d20-7975-4afa-b00a-4523f8a04039","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de05721da9d96ae-SJC",
  "connection": "close",
  "content-length": "433",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:39 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W3DoxDIqPNoFdjg1yOjD4wLVimKWGpXYhY3PlIPPLN5sgrlGxqhK9RcGdOhZ%2FnG3dhPhllJOfk763d10JsBvR3PrHCTkxiqc5drVQQ7np39aNxbFRTxNSS5yr%2F%2BOJn4kQP6k8A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
  "status": "queued",
  "created": "2023-06-27T20:11:39.189Z",
  "pin": {
    "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
    "name": "53426d20-7975-4afa-b00a-4523f8a04039",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
  "status": "queued",
  "created": "2023-06-27T20:11:39.189Z",
  "pin": {
    "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
    "name": "53426d20-7975-4afa-b00a-4523f8a04039",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
  "status": "queued",
  "created": "2023-06-27T20:11:39.189Z",
  "pin": {
    "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
    "name": "53426d20-7975-4afa-b00a-4523f8a04039",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057417cfcd005-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:44 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0FqdDASqHGy6uB2mr6BNUV0Xxvi7oL3FM9f4Jd4W4X6Aa%2BeJ%2FO8trybJHhYjBRkUsMx1IUnrAUwpZUArl9ek3FyxP7njQUBCd7eIA1YHpafPN46Hew7TtRMMSQuXSLOjTP669Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "8a06c019-aa67-4252-aeff-11153a9f58d8",
  "status": "queued",
  "created": "2023-06-27T20:11:44.246Z",
  "pin": {
    "cid": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
    "name": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "8a06c019-aa67-4252-aeff-11153a9f58d8",
  "status": "queued",
  "created": "2023-06-27T20:11:44.246Z",
  "pin": {
    "cid": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
    "name": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "8a06c019-aa67-4252-aeff-11153a9f58d8",
  "status": "queued",
  "created": "2023-06-27T20:11:44.246Z",
  "pin": {
    "cid": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
    "name": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de05747bbf315e1-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:45 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=el%2F2jCg%2Bv0%2FhqEH6TliLCjZua%2FuKB%2Fpe%2FynF4s1aoQehIqUmGNoLJkZCy4pGEHrfpTNf302RonDJ8xOiitHsVzL4FckfPn9N3%2BCH%2FED56Rs6DgCT0B3OBOc%2FwqKarA8us20xXA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "88008946-e33a-4caa-8b6a-1cf47c3deaaf",
  "status": "queued",
  "created": "2023-06-27T20:11:45.253Z",
  "pin": {
    "cid": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
    "name": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "88008946-e33a-4caa-8b6a-1cf47c3deaaf",
  "status": "queued",
  "created": "2023-06-27T20:11:45.253Z",
  "pin": {
    "cid": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
    "name": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "88008946-e33a-4caa-8b6a-1cf47c3deaaf",
  "status": "queued",
  "created": "2023-06-27T20:11:45.253Z",
  "pin": {
    "cid": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
    "name": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0574e0d9a985e-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:46 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R9FAxyqqhF9DyszVS7UDu8nuAA9SE0yWYNgcotOt8AIrNKusCAp9g%2FbAYT7683%2FitBSBjETeudAIQ68D7m1SdOgjeImwpoGmlB71CorupYjTbOFoJdJVXGkBLpqqIMRuHAbrDg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "97c5edf5-40f6-4260-887a-f1f6a1a8fdda",
  "status": "queued",
  "created": "2023-06-27T20:11:46.257Z",
  "pin": {
    "cid": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
    "name": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "97c5edf5-40f6-4260-887a-f1f6a1a8fdda",
  "status": "queued",
  "created": "2023-06-27T20:11:46.257Z",
  "pin": {
    "cid": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
    "name": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "97c5edf5-40f6-4260-887a-f1f6a1a8fdda",
  "status": "queued",
  "created": "2023-06-27T20:11:46.257Z",
  "pin": {
    "cid": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
    "name": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0575428f0ce90-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:47 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2oXJprOeFy0TBfhoQrX4vXpyhqtzj9oMKo%2FD1s8TBtWqih8Mu82tThwAL7WfZ7sgf510zURlVyrdGCKAA14Swa6VjsnjtH0nvZC1TA8zi%2FXsTxLV%2F%2ByhJaXovIbOu%2BIP0OVUlQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "47a788ff-d652-4430-8563-be77c6336749",
  "status": "queued",
  "created": "2023-06-27T20:11:47.250Z",
  "pin": {
    "cid": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
    "name": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "47a788ff-d652-4430-8563-be77c6336749",
  "status": "queued",
  "created": "2023-06-27T20:11:47.250Z",
  "pin": {
    "cid": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
    "name": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "47a788ff-d652-4430-8563-be77c6336749",
  "status": "queued",
  "created": "2023-06-27T20:11:47.250Z",
  "pin": {
    "cid": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
    "name": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0575a689c17f4-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:48 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yn9AhTEjH50J%2Ft6NaGx7bNuvWgOsEkHP%2B0NkcB3aOKiwmXq68cPR5enLS6g46Qp8x%2FgL8jRYBW69hKaiFbFWGYkAa%2BdlJZwC5rF1ZRZGhMo3c2VEet29BvfyJ9EP%2FCf1HQw3ng%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "cf68fc30-f93f-4458-bedd-4e611ecd2c74",
  "status": "queued",
  "created": "2023-06-27T20:11:48.247Z",
  "pin": {
    "cid": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
    "name": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "cf68fc30-f93f-4458-bedd-4e611ecd2c74",
  "status": "queued",
  "created": "2023-06-27T20:11:48.247Z",
  "pin": {
    "cid": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
    "name": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "cf68fc30-f93f-4458-bedd-4e611ecd2c74",
  "status": "queued",
  "created": "2023-06-27T20:11:48.247Z",
  "pin": {
    "cid": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
    "name": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de05760aa49fa62-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:49 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pXh2U7zewXbINgGSgRC2fqhUbSfAQIyI8WGLOqR1tb6%2BnOmLeTcFM7W%2FQ2lBEAC6wxNsFh2g8iV2OPspO3ysXXHq8GkIHmpAl82KVlR80WWTaBsY3pm4bRM7v5SlO6KErwGIvQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "bfa37cbb-cd54-4544-84db-b18ff498ae46",
  "status": "queued",
  "created": "2023-06-27T20:11:49.245Z",
  "pin": {
    "cid": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
    "name": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "bfa37cbb-cd54-4544-84db-b18ff498ae46",
  "status": "queued",
  "created": "2023-06-27T20:11:49.245Z",
  "pin": {
    "cid": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
    "name": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bfa37cbb-cd54-4544-84db-b18ff498ae46",
  "status": "queued",
  "created": "2023-06-27T20:11:49.245Z",
  "pin": {
    "cid": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
    "name": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de05766f9906447-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:50 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8glYhkFZXEJpEIQcRJWhHlA3%2BqPIW1%2FvD26OLOOMI4ItKNtV1J38D2lMlIzy7eRTNmsRpi6JQ7ZmDGoKDX%2F2aRsTQawaDeABoTrRN6NWLV%2FZ1MKK35IXANj9MS6C6jnmfsrzZQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "6d4b21c8-5415-411e-87ee-6aeaf5b2466f",
  "status": "queued",
  "created": "2023-06-27T20:11:50.247Z",
  "pin": {
    "cid": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
    "name": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "6d4b21c8-5415-411e-87ee-6aeaf5b2466f",
  "status": "queued",
  "created": "2023-06-27T20:11:50.247Z",
  "pin": {
    "cid": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
    "name": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "6d4b21c8-5415-411e-87ee-6aeaf5b2466f",
  "status": "queued",
  "created": "2023-06-27T20:11:50.247Z",
  "pin": {
    "cid": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
    "name": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0576d3cdd172a-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:51 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ILSPht0h9rnLX6MzKFJD5rZ6S%2B0EjuZ5wh5ZNE5POVsrpllob95eE08EvEVenoTsx%2BfQNfMmfPeEu5Ki%2FtXaJE5sRH6%2FFi%2BiKBFRY5fPlrbzI%2FelYQkjYkJy66E6zVnaI4RRmQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "fbb4b3c6-4c53-4eff-962e-d5dbba095921",
  "status": "queued",
  "created": "2023-06-27T20:11:51.254Z",
  "pin": {
    "cid": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
    "name": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "fbb4b3c6-4c53-4eff-962e-d5dbba095921",
  "status": "queued",
  "created": "2023-06-27T20:11:51.254Z",
  "pin": {
    "cid": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
    "name": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "fbb4b3c6-4c53-4eff-962e-d5dbba095921",
  "status": "queued",
  "created": "2023-06-27T20:11:51.254Z",
  "pin": {
    "cid": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
    "name": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057737b0896c5-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:52 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Yq46oXm%2BNvgkXTdDbaXeV2ktoxoHg8iKt3Ybhc6NBNF%2BqRIP9DrHU8Avq6nj%2FujEMG4CwgB462qsCg7s77arjtFR6ixZSpzFvxICSOn43pj%2F36Y%2Bp0jnU1I2JAhfKp5pLtLK8g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "378f241f-72f1-4d4f-a089-ba6cf7b18f5f",
  "status": "queued",
  "created": "2023-06-27T20:11:52.249Z",
  "pin": {
    "cid": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
    "name": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "378f241f-72f1-4d4f-a089-ba6cf7b18f5f",
  "status": "queued",
  "created": "2023-06-27T20:11:52.249Z",
  "pin": {
    "cid": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
    "name": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "378f241f-72f1-4d4f-a089-ba6cf7b18f5f",
  "status": "queued",
  "created": "2023-06-27T20:11:52.249Z",
  "pin": {
    "cid": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
    "name": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de05779bc7c15dd-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:53 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qffe6Y%2Bmkf90CF2XnSQxB0To2DXmonQ%2FrTMLjHEKTwxZ66RsSrIqnVIWjrjgaoMHt7B5XK16ZkEdgUINRjz1GYGhU%2FKN%2BljuNEFvfTx5GaIaWQZWr4kocS1NqN35r11f99pNKw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "dfc323f6-3e1c-4b98-ba91-886b96637c13",
  "status": "queued",
  "created": "2023-06-27T20:11:53.254Z",
  "pin": {
    "cid": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
    "name": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "dfc323f6-3e1c-4b98-ba91-886b96637c13",
  "status": "queued",
  "created": "2023-06-27T20:11:53.254Z",
  "pin": {
    "cid": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
    "name": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "dfc323f6-3e1c-4b98-ba91-886b96637c13",
  "status": "queued",
  "created": "2023-06-27T20:11:53.254Z",
  "pin": {
    "cid": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
    "name": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0577ffaaa15e9-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:54 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3xZhQu03%2BXGC8kfP%2BZAHpszVkPxQN4T698Jhw0Tk%2FAcc7bExzedg2dQJhYLekDfZdJkQ61pvaCEX9WVfxZIueFTB86vUZn9Piu%2BnZreCQ6x4pTvp1Eq8HUBP9OqSXflWTMcF4Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "b05b0a21-0f5d-4ae5-bc1f-4978876bfe54",
  "status": "queued",
  "created": "2023-06-27T20:11:54.254Z",
  "pin": {
    "cid": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
    "name": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "b05b0a21-0f5d-4ae5-bc1f-4978876bfe54",
  "status": "queued",
  "created": "2023-06-27T20:11:54.254Z",
  "pin": {
    "cid": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
    "name": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "b05b0a21-0f5d-4ae5-bc1f-4978876bfe54",
  "status": "queued",
  "created": "2023-06-27T20:11:54.254Z",
  "pin": {
    "cid": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
    "name": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
## Can create new pin for testing pagination cid='bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





### Details

#### Request
```
POST https://api.4everland.dev/pins
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
{"cid":"bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0578638af1758-SJC",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:55 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=geCo1stHs%2Fqx%2FJM2T7WKoPNkvFsctFXp7Y%2BqXGTTrVBCyGa4wuoFpvb9XbQvXR8YJufT7Wr%2FpUpGQhgcVzMFTUPDyx1JMqhSj87bC5b3hU31nveUV0kTDQOZjba8brPSeKNQyQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "f60eb733-ded0-40f0-ad3f-550b146398ea",
  "status": "queued",
  "created": "2023-06-27T20:11:55.258Z",
  "pin": {
    "cid": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
    "name": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```

##### Body (as JSON)
```json
{
  "requestid": "f60eb733-ded0-40f0-ad3f-550b146398ea",
  "status": "queued",
  "created": "2023-06-27T20:11:55.258Z",
  "pin": {
    "cid": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
    "name": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "f60eb733-ded0-40f0-ad3f-550b146398ea",
  "status": "queued",
  "created": "2023-06-27T20:11:55.258Z",
  "pin": {
    "cid": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
    "name": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
    "origins": [],
    "meta": {}
  },
  "delegates": [
    "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
  ],
  "info": {
    "dag_size": "0",
    "failed_message": "",
    "failed_reason": ""
  }
}
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
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0578c7b1bcf15-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0gsAB4v7etk9lIswGlOsFVOXzGQH7suS95uuTK%2BOR1VLUGSOq2ioSlqVIeKc6vp5bbBXPKNr%2FP6YpC%2FI5hXtcbEDYIxmlaDqpC1oOLTSh2z0rwecw0uNkwR3vowgPodIVNJJTA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "f60eb733-ded0-40f0-ad3f-550b146398ea",
      "status": "queued",
      "created": "2023-06-27T20:11:55.258Z",
      "pin": {
        "cid": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
        "name": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "b05b0a21-0f5d-4ae5-bc1f-4978876bfe54",
      "status": "queued",
      "created": "2023-06-27T20:11:54.254Z",
      "pin": {
        "cid": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
        "name": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "dfc323f6-3e1c-4b98-ba91-886b96637c13",
      "status": "queued",
      "created": "2023-06-27T20:11:53.254Z",
      "pin": {
        "cid": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
        "name": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "378f241f-72f1-4d4f-a089-ba6cf7b18f5f",
      "status": "queued",
      "created": "2023-06-27T20:11:52.249Z",
      "pin": {
        "cid": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
        "name": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "fbb4b3c6-4c53-4eff-962e-d5dbba095921",
      "status": "queued",
      "created": "2023-06-27T20:11:51.254Z",
      "pin": {
        "cid": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
        "name": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "6d4b21c8-5415-411e-87ee-6aeaf5b2466f",
      "status": "queued",
      "created": "2023-06-27T20:11:50.247Z",
      "pin": {
        "cid": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
        "name": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "bfa37cbb-cd54-4544-84db-b18ff498ae46",
      "status": "queued",
      "created": "2023-06-27T20:11:49.245Z",
      "pin": {
        "cid": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
        "name": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "cf68fc30-f93f-4458-bedd-4e611ecd2c74",
      "status": "pinning",
      "created": "2023-06-27T20:11:48.247Z",
      "pin": {
        "cid": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
        "name": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "47a788ff-d652-4430-8563-be77c6336749",
      "status": "pinning",
      "created": "2023-06-27T20:11:47.250Z",
      "pin": {
        "cid": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
        "name": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "97c5edf5-40f6-4260-887a-f1f6a1a8fdda",
      "status": "pinning",
      "created": "2023-06-27T20:11:46.257Z",
      "pin": {
        "cid": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
        "name": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "f60eb733-ded0-40f0-ad3f-550b146398ea",
      "status": "queued",
      "created": "2023-06-27T20:11:55.258Z",
      "pin": {
        "cid": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
        "name": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "b05b0a21-0f5d-4ae5-bc1f-4978876bfe54",
      "status": "queued",
      "created": "2023-06-27T20:11:54.254Z",
      "pin": {
        "cid": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
        "name": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "dfc323f6-3e1c-4b98-ba91-886b96637c13",
      "status": "queued",
      "created": "2023-06-27T20:11:53.254Z",
      "pin": {
        "cid": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
        "name": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "378f241f-72f1-4d4f-a089-ba6cf7b18f5f",
      "status": "queued",
      "created": "2023-06-27T20:11:52.249Z",
      "pin": {
        "cid": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
        "name": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "fbb4b3c6-4c53-4eff-962e-d5dbba095921",
      "status": "queued",
      "created": "2023-06-27T20:11:51.254Z",
      "pin": {
        "cid": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
        "name": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "6d4b21c8-5415-411e-87ee-6aeaf5b2466f",
      "status": "queued",
      "created": "2023-06-27T20:11:50.247Z",
      "pin": {
        "cid": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
        "name": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "bfa37cbb-cd54-4544-84db-b18ff498ae46",
      "status": "queued",
      "created": "2023-06-27T20:11:49.245Z",
      "pin": {
        "cid": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
        "name": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "cf68fc30-f93f-4458-bedd-4e611ecd2c74",
      "status": "pinning",
      "created": "2023-06-27T20:11:48.247Z",
      "pin": {
        "cid": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
        "name": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "47a788ff-d652-4430-8563-be77c6336749",
      "status": "pinning",
      "created": "2023-06-27T20:11:47.250Z",
      "pin": {
        "cid": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
        "name": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "97c5edf5-40f6-4260-887a-f1f6a1a8fdda",
      "status": "pinning",
      "created": "2023-06-27T20:11:46.257Z",
      "pin": {
        "cid": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
        "name": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 15,
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
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T20%3A11%3A46.257Z
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0578ccb756458-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wSpFHu0vsSDHzOEdHjmPRHGWOhvLBx7ZTL3TLfDCPQpuNo0eRl6UGIXIE04pV66MBcA4iNxU00wZqXk6JHmvEP8mF8Z%2B9%2B0GWgcoSUCOipoorfp2f3A0KcDEO0EJDfdLtBZR7g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "88008946-e33a-4caa-8b6a-1cf47c3deaaf",
      "status": "pinning",
      "created": "2023-06-27T20:11:45.253Z",
      "pin": {
        "cid": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
        "name": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "8a06c019-aa67-4252-aeff-11153a9f58d8",
      "status": "pinning",
      "created": "2023-06-27T20:11:44.246Z",
      "pin": {
        "cid": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
        "name": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "pinning",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "88008946-e33a-4caa-8b6a-1cf47c3deaaf",
      "status": "pinning",
      "created": "2023-06-27T20:11:45.253Z",
      "pin": {
        "cid": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
        "name": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "8a06c019-aa67-4252-aeff-11153a9f58d8",
      "status": "pinning",
      "created": "2023-06-27T20:11:44.246Z",
      "pin": {
        "cid": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
        "name": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "pinning",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 5,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - 🟢 SUCCESS

### Expectations (34/34 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is greater than or equal to 15 (success)

  🟢 Count is greater than the number of pins returned (success)

  🟢 Number of pins returned defaults to 10 (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 The next page of pins doesn't contain any of previous pages pins (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0573b28c8945e-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BqtZY599dFiG0XWSNokWGRNAN6xrkwXwZasZDE6Vbzp8UgwtK0J0RKI6TQjEwznNv9GqMuGxI%2F6ZtbuzkjYzqqJkft4d6lH2Y2kkZCOnxVcxVMEYF264MtWa4wSWMG0gRsBsdA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "queued",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "queued",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 3,
  "results": {}
}
```
## Can delete pin with requestid 'f60eb733-ded0-40f0-ad3f-550b146398ea' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/f60eb733-ded0-40f0-ad3f-550b146398ea
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057993d61967b-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:58 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xkIiiXhIcfeHW%2BYrubkwxZGyFGoRd2kDQnZ%2FktB3Cgsmy0TQj0QX77t6Rxnos7cG0KtNCbu6P5Yi%2BxkBO%2FvmnB2jnV1E%2FEiKULeEKRbBH5EhQILIPkLLDc0FfaJRwhdas3B26w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'b05b0a21-0f5d-4ae5-bc1f-4978876bfe54' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/b05b0a21-0f5d-4ae5-bc1f-4978876bfe54
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de0579f7d3fce9c-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:59 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4Bs7DzUhQk6T8jeHly%2FaTvq%2BBi2wdcNBQsLIqwFt45YNq88%2BJ%2B7rIoniP81zXd0zHceyIp2QPAUUih%2BL%2BAiUJ8GEDgL%2B%2BxcEY2Q05j8Nlye0sIkb9Dz194vLPCRjA8xu0DT%2B2g%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'dfc323f6-3e1c-4b98-ba91-886b96637c13' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/dfc323f6-3e1c-4b98-ba91-886b96637c13
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057a5bedd24fc-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:00 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d0W4dJ6SFsq6b7KnP90pHqC6X82Wq%2F4FP26jzF2p%2BzpHdZ1A1YcbckgiuI8HhQ%2FDtxOK%2FbkEvJrVyvxVVmPl2IXIc7XunDILk0NW4dVqdlFngadk1g420td6G4UEkV0ZDJE0%2Fw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '378f241f-72f1-4d4f-a089-ba6cf7b18f5f' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/378f241f-72f1-4d4f-a089-ba6cf7b18f5f
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057abfe862379-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:01 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=73qkQXxuaAi6RmqX8bG7QYGM3HCwMh1HvaC5HynMXd%2Fqym%2FY%2B6tjsnJF8PVaNxxSOK3yfq4upZuyr%2FA1VqWCQnWUY8%2Fk1J4pTaWHZEt8VpidTTjv3ZPLHU8XxJbafjUEmPY7HQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'fbb4b3c6-4c53-4eff-962e-d5dbba095921' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/fbb4b3c6-4c53-4eff-962e-d5dbba095921
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057b24af72509-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:02 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AsjOeBMgFu%2Bdya5xOkYdJPbfWnPLNhnoqO6IbN9uTUXyfsJ0lk9lXHbYhFXZsOckmy46Q%2B4KmYXK87%2FWXNdXcHoDGZAamkgHQSeVGcu0VN51L8fTbhb7gsuoed9Emq6aFKNAng%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '6d4b21c8-5415-411e-87ee-6aeaf5b2466f' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/6d4b21c8-5415-411e-87ee-6aeaf5b2466f
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057b87d5b15f3-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rLArYtbpZXeTyt%2BdHn%2BD7z4LjO27%2BGA17IvydGwZW7Dx%2BdfZo%2BA%2BqdPSqyLnZBYf%2Fq%2BZ9AYNDJMcOhxCi75yubDP%2FJMdJp6z%2BLA65wDjm%2BSQk9SYQPk1ai0P9YzCaeT7eY63vg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'bfa37cbb-cd54-4544-84db-b18ff498ae46' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/bfa37cbb-cd54-4544-84db-b18ff498ae46
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057becafd2287-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:04 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FqSNZckKQPbwqiBbf2MunPIw%2FAkyDbl%2Fw%2F1tPQ9K66%2FPlddCVxifFlUdXCU1nZwZsr8cDPRtb%2FwGEN2m3XFl%2FYSCs%2BoeuNdUvCQSHK5YqsjXTEhMjYyMmjGDIO0jycXJeSiORw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'cf68fc30-f93f-4458-bedd-4e611ecd2c74' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/cf68fc30-f93f-4458-bedd-4e611ecd2c74
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057c4fbbcf95f-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:05 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T6AZXGyxJMNLoKQdKFcZVDCNrqf4zlsbItAl%2FnhZnh6CGMq4JLyTiijKGr2J8pzVlDT0B9t3G%2Faxq1Wxd0puzQn3K16q7EWwRkrlDBtbWHD%2FkDwVUCNAzwFFdVjIxD3IwQqk4A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '47a788ff-d652-4430-8563-be77c6336749' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/47a788ff-d652-4430-8563-be77c6336749
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057cb4eb4fac6-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:06 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ihLeCHRkQVqrwD5ln3mk9Ikz44yshz46H0a%2BfjscADH4Kxz9x1Y6XxsewVPmVmT2MKRm%2F%2Be%2F44H9lFTjlSy3gjBtDE5ZZppc5NNH8EShE3JwacQRgsp6xOZAGvybQWYcaej7bA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '97c5edf5-40f6-4260-887a-f1f6a1a8fdda' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/97c5edf5-40f6-4260-887a-f1f6a1a8fdda
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057d18dfbfb44-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:07 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5MfvSQDoELYB9lqE11EbfI9sO7sBgVZtamrsivlaQ6wc1Z4HWKaO0QqRGFcaJuuclkkRoZ4lPvOZ%2FmshY1L%2BtND7KM0qCFrgU4ZVTxhg%2Frhy3U8GlrkFMYytCqave4M6qHY%2BGA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '88008946-e33a-4caa-8b6a-1cf47c3deaaf' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/88008946-e33a-4caa-8b6a-1cf47c3deaaf
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057d81c9b9698-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:08 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Da29UFjWpyaDPmc%2FFlescLFxPtxzWDfQQQih625vWE7AdrHXpgEiwxxvxnVRAdF3JBr1jKVt9OrykJE4y8wfiwb%2B7IXVnjZLgt1dpD537K5wX7iS2bycwZh9rSFLsAGBLzHNkQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid '8a06c019-aa67-4252-aeff-11153a9f58d8' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/8a06c019-aa67-4252-aeff-11153a9f58d8
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057de4fc9182a-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:09 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LEQfL0%2F0QwGtFWCQnUZsPYpM1D1DHHszsG8m8oFNH3JnqnYVbqgg9QvIZkMedd4aRcoMZoowKP%2BwR2No7tpegPBnXXn5LtsT7qomtYHL%2FyhWSqJLiGXyPO67M3ang1VkNec8nA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'ec092a61-3f13-4a54-8b38-d99e59e8343b' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/ec092a61-3f13-4a54-8b38-d99e59e8343b
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057e48ced6458-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:10 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kI0NEj8yjoolvWz3LMQaZxJkPXJoUYm%2BzcRcNHX2%2BoUhppWaA3wtHe2hC2EbLZ6gboT1F5aRdUxnd%2BvbOcbQbo4dqswi9mZA83jrmjnOyqRQXABN1VDyvb%2B03kGyGgm9RWIswg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'da6670bd-ea6f-4a5a-bb6f-dd65028d57c2' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/da6670bd-ea6f-4a5a-bb6f-dd65028d57c2
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057eace166452-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:11 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6ra6GqCudxCyZhIq88qqVfgE7f%2FEMzW0u9m%2FszsKLzhzdq4CPMpoClD9IVcNkcmTVtBD8ovC4DiRxzzBtAzLZ8I2XW5oS3eIrSRiV3Nzs9aYebHKmIN1S%2FpDwUVhLPK3Gs1qOg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Can delete pin with requestid 'a2ebeadf-9cae-47b2-81df-8ca6dfba2362' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/a2ebeadf-9cae-47b2-81df-8ca6dfba2362
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
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057f10ebcf94f-SJC",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:12 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LETZp6JuLXY6o2y5UZPX89%2BUn9JkJ%2FJ4%2F%2BIkG83GKltC9acTAJUu6ly20iK9%2BVR7XUCmv1Rf8BZrGT9CnjcbmTpDhjsS1MOrG0dC%2BXm2Dv%2Ba78QTqmW2tMyrTn3SUUC3XPalhw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{}
```

##### Body (as JSON)
```json
{}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
undefined
```
## Get all Pins created before 'Tue Jun 27 2023 20:11:33 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T20%3A11%3A33.099Z
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057f74f78cea4-SJC",
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:13 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sqhfPk%2BHV2l%2FR%2BdY0aPo3ur8LCMaF1tu%2FrCM0fp5HvgKL5U8TlGEvmzElhx79lcPmY8pfIxCR%2BNP3sIOcPzZDvyusV0HcGEYhI0VBuZH8AaCjghnBuEdPUITcnaV123e%2FE4znQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
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
## Get all Pins created before 'Tue Jun 27 2023 20:11:46 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (5/5 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T20%3A11%3A46.257Z
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057d7cb9d17f2-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:08 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9T86S5xj0prRGzxefzZCc4i4EU6rj6ajwBkmPW1GsIFjwPfZMpGOLULXzZqHNRe9MC2sFvse5ztwNeViAivVvsbSBbltniHtMkB09%2FnCpxl5RTAxzn6ogwlisx6AMYKYT8q8Rg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "88008946-e33a-4caa-8b6a-1cf47c3deaaf",
      "status": "pinning",
      "created": "2023-06-27T20:11:45.253Z",
      "pin": {
        "cid": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
        "name": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "8a06c019-aa67-4252-aeff-11153a9f58d8",
      "status": "pinning",
      "created": "2023-06-27T20:11:44.246Z",
      "pin": {
        "cid": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
        "name": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "pinning",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "88008946-e33a-4caa-8b6a-1cf47c3deaaf",
      "status": "pinning",
      "created": "2023-06-27T20:11:45.253Z",
      "pin": {
        "cid": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
        "name": "bafkreickvrifj3zg5ctnmnbxb3oro7ulwc3dcvzdgjaiqdhxmgm4pvemk4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "8a06c019-aa67-4252-aeff-11153a9f58d8",
      "status": "pinning",
      "created": "2023-06-27T20:11:44.246Z",
      "pin": {
        "cid": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
        "name": "bafkreighjig25a7kr2uuvdqwvsmcn4qf6ukcxgqco4x62i3vmpqexundj4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "ec092a61-3f13-4a54-8b38-d99e59e8343b",
      "status": "pinning",
      "created": "2023-06-27T20:11:39.189Z",
      "pin": {
        "cid": "bafkreibbipeq23zkmjw4uk3gtomaoj2ns2a3hhnia377kdp2t3xgaa6c6a",
        "name": "53426d20-7975-4afa-b00a-4523f8a04039",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "da6670bd-ea6f-4a5a-bb6f-dd65028d57c2",
      "status": "pinning",
      "created": "2023-06-27T20:11:37.155Z",
      "pin": {
        "cid": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "name": "bafkreibkyo4qy6jkcwofp2sbph6rfhjrnj6hlcf6gcqyahztimgsjefdeu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "a2ebeadf-9cae-47b2-81df-8ca6dfba2362",
      "status": "pinning",
      "created": "2023-06-27T20:11:33.099Z",
      "pin": {
        "cid": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "name": "bafkreihiskznnthq77idsna2vdjlnikgats62j5lfytsjvq3sfqs47pjjm",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 5,
  "results": {}
}
```
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '0' (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057f78cc4fada-SJC",
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:12:13 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4l5Uws%2Bmub0EC2iLrcZzRg3QymV54ifulVQxI%2BnnuqllNhN93k%2BtpCKzRoWiiaNFOvS9vmXVJLCMwPReBg6KRnZven2iNGbrjY3cgEz3Dzy2lz0WXl1gTwdoUtsxi153n%2FODrw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
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
## Can delete all pins created during compliance checks - 🟢 SUCCESS

### Expectations (16/16 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '0' (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400",
  "cf-cache-status": "DYNAMIC",
  "cf-ray": "7de057930f04156b-SJC",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 20:11:57 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vZPIXZbSP%2BHauzxRf5Ym613BfKvSLGJ48NsqbKo7nc4QS6744Dn5EUtqlY5yWANPU%2BRYFNBPFJUQWFsxt6tXemnZLLmXBCzfctNqCYsC6yRLuE8qVFV3MLBBVLn2Aro5ePvbPw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "f60eb733-ded0-40f0-ad3f-550b146398ea",
      "status": "queued",
      "created": "2023-06-27T20:11:55.258Z",
      "pin": {
        "cid": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
        "name": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "b05b0a21-0f5d-4ae5-bc1f-4978876bfe54",
      "status": "queued",
      "created": "2023-06-27T20:11:54.254Z",
      "pin": {
        "cid": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
        "name": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "dfc323f6-3e1c-4b98-ba91-886b96637c13",
      "status": "queued",
      "created": "2023-06-27T20:11:53.254Z",
      "pin": {
        "cid": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
        "name": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "378f241f-72f1-4d4f-a089-ba6cf7b18f5f",
      "status": "queued",
      "created": "2023-06-27T20:11:52.249Z",
      "pin": {
        "cid": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
        "name": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "fbb4b3c6-4c53-4eff-962e-d5dbba095921",
      "status": "queued",
      "created": "2023-06-27T20:11:51.254Z",
      "pin": {
        "cid": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
        "name": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "6d4b21c8-5415-411e-87ee-6aeaf5b2466f",
      "status": "queued",
      "created": "2023-06-27T20:11:50.247Z",
      "pin": {
        "cid": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
        "name": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "bfa37cbb-cd54-4544-84db-b18ff498ae46",
      "status": "queued",
      "created": "2023-06-27T20:11:49.245Z",
      "pin": {
        "cid": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
        "name": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "cf68fc30-f93f-4458-bedd-4e611ecd2c74",
      "status": "pinning",
      "created": "2023-06-27T20:11:48.247Z",
      "pin": {
        "cid": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
        "name": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "47a788ff-d652-4430-8563-be77c6336749",
      "status": "pinning",
      "created": "2023-06-27T20:11:47.250Z",
      "pin": {
        "cid": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
        "name": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "97c5edf5-40f6-4260-887a-f1f6a1a8fdda",
      "status": "pinning",
      "created": "2023-06-27T20:11:46.257Z",
      "pin": {
        "cid": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
        "name": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "f60eb733-ded0-40f0-ad3f-550b146398ea",
      "status": "queued",
      "created": "2023-06-27T20:11:55.258Z",
      "pin": {
        "cid": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
        "name": "bafkreiflia6lmnhuuno22qo6r7rs4b7iv6w5r7h6oin62gmijjcsw3na5u",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "b05b0a21-0f5d-4ae5-bc1f-4978876bfe54",
      "status": "queued",
      "created": "2023-06-27T20:11:54.254Z",
      "pin": {
        "cid": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
        "name": "bafkreick3hqlmi2uilv54z7fsb55zbjtfhhfx57rjvepva5d6or6gedlsy",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "dfc323f6-3e1c-4b98-ba91-886b96637c13",
      "status": "queued",
      "created": "2023-06-27T20:11:53.254Z",
      "pin": {
        "cid": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
        "name": "bafkreibixfokwvuc3ft4ag5gt3plq3pic4kgic5u7x2ok5bceqtjs4rjwu",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "378f241f-72f1-4d4f-a089-ba6cf7b18f5f",
      "status": "queued",
      "created": "2023-06-27T20:11:52.249Z",
      "pin": {
        "cid": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
        "name": "bafkreihwmk6toawetr6ick4rz3ue6h4axzdaiexw7qqr2utlb7vu6fbgo4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "fbb4b3c6-4c53-4eff-962e-d5dbba095921",
      "status": "queued",
      "created": "2023-06-27T20:11:51.254Z",
      "pin": {
        "cid": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
        "name": "bafkreihhhq3rpsvst6ywnfa5ygtxotk7xc5sy3snjbl6xwng3to4ya2gma",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "6d4b21c8-5415-411e-87ee-6aeaf5b2466f",
      "status": "queued",
      "created": "2023-06-27T20:11:50.247Z",
      "pin": {
        "cid": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
        "name": "bafkreiawllrs53nmnizyexeguyru3nxh3unm64iitavbpy6avrbhohvwu4",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "bfa37cbb-cd54-4544-84db-b18ff498ae46",
      "status": "queued",
      "created": "2023-06-27T20:11:49.245Z",
      "pin": {
        "cid": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
        "name": "bafkreigt3bxjgsq5tkezsutt2ratjowurpdp6bentf7dk5jsafwz2naqdq",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "cf68fc30-f93f-4458-bedd-4e611ecd2c74",
      "status": "pinning",
      "created": "2023-06-27T20:11:48.247Z",
      "pin": {
        "cid": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
        "name": "bafkreibocuq5m533lmpwrft4btprsy64sqbxx4cpbjxcmqzlvoepz6de44",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "47a788ff-d652-4430-8563-be77c6336749",
      "status": "pinning",
      "created": "2023-06-27T20:11:47.250Z",
      "pin": {
        "cid": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
        "name": "bafkreic3qpncsn5cvsr6mnc4evqye2rytekfs32vwlgh7uyxgvxdg4oiky",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    },
    {
      "requestid": "97c5edf5-40f6-4260-887a-f1f6a1a8fdda",
      "status": "pinning",
      "created": "2023-06-27T20:11:46.257Z",
      "pin": {
        "cid": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
        "name": "bafkreifinzqftgfcpx4o4r5oavs73t76e746vbplnblo66klgg2mu47wva",
        "origins": [],
        "meta": {}
      },
      "delegates": [
        "/dnsaddr/node-1.ipfs.4everland.net/p2p/12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t"
      ],
      "info": {
        "dag_size": "0",
        "failed_message": "",
        "failed_reason": ""
      }
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 15,
  "results": {}
}
```
