
<script src="./telemetry.js"></script>
# https://api.4everland.dev compliance:

Execution Date: 2023-06-27T23:03:17.415Z

Revision: [f6edd8c](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/f6edd8c)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.4everland.dev.md)

## Summary (8/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba'](#pins-post-of-cid-bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='577624bc-d936-4b43-b1e5-04762405c7f1'](#can-create-a-pin-with-name577624bc-d936-4b43-b1e5-04762405c7f1----failed)

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
  "cf-ray": "7de15187ffb3eafe-DFW",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:35 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nkK3tA8HpM09723aHQsvgeQPswxBFa16BvLeSnoGh1x8b0gsH5TMfsjTQ%2FV%2F%2FXpxRP8VHcgxyZD45tHq9wpAqaO3saLT2JVgkYMxPDrIAtGBCvZlRG%2BHjsob1CHXXuckxE3sTQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7de1518e3ea83ab5-DFW",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:36 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0Xaplgz%2F5tpi7CgtiRWQmo4VD1CMuUetL8xPDR9KwRDfAzb2t7lyEf%2BDBgHDW6s4T7D1mwiA6WJxCculp1suaT6gHjwlVrxHRzQ9Vg9AS1fTwQScJdHT9WPsqeNc0Hzy9oPo1w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Pins post of CID 'bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba' - 🟢 SUCCESS

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
{"cid":"bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de1519488fc2ccc-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:37 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=z47T9eyWLKvZ4A%2FOgiMY6GgbH40OfCSqok2GNaZ4SFVLeoNQBdznaQ%2BijP5HB80XUIQMZkQkkdrNhe0iC%2FtUNS7WN0iy%2Bb8RIvoIXP2HOkIgcjq6S7Y4oj5JPrPvTVCLFPiQxQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
  "status": "queued",
  "created": "2023-06-27T23:02:37.597Z",
  "pin": {
    "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
    "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
  "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
  "status": "queued",
  "created": "2023-06-27T23:02:37.597Z",
  "pin": {
    "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
    "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
  "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
  "status": "queued",
  "created": "2023-06-27T23:02:37.597Z",
  "pin": {
    "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
    "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
DELETE https://api.4everland.dev/pins/2276ed75-c920-4f85-838e-f7e63ff39a53
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
  "cf-ray": "7de151a0fddd474a-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:39 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K7jOlgKlz4Ohyk2OHdM7rhfUN3tO6mPqo9VE4P35zib7S8eeR7ZmvBrSsWQpcUelrf06gjvR1T1ELBrr6KxrfZlkuHvLhiAhCtaJD1G4UfRJH7Tlss7akWhzHnNb%2BNKoaO3vGQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
{"cid":"bafkreihxhpu3fgfgrfkbcaaih3o5lw6udxdfgtywxwgkxvq3xprl6pt3iy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de1519ac96ce901-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:38 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JWZ7UK9mAf1qZ5EBcIURZO3qITPotLOQZ3ps4Q%2FzjCRGmhBWywbqF0W%2FiAw4Pfl3OyekDb4Qnc4RpRkpAEH0JHxGPCXmVYD3v%2B9m0umQKXrytPgARG4ml3vL8q2Zt1rqrQQP5Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "2276ed75-c920-4f85-838e-f7e63ff39a53",
  "status": "queued",
  "created": "2023-06-27T23:02:38.602Z",
  "pin": {
    "cid": "bafkreihxhpu3fgfgrfkbcaaih3o5lw6udxdfgtywxwgkxvq3xprl6pt3iy",
    "name": "bafkreihxhpu3fgfgrfkbcaaih3o5lw6udxdfgtywxwgkxvq3xprl6pt3iy",
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
  "requestid": "2276ed75-c920-4f85-838e-f7e63ff39a53",
  "status": "queued",
  "created": "2023-06-27T23:02:38.602Z",
  "pin": {
    "cid": "bafkreihxhpu3fgfgrfkbcaaih3o5lw6udxdfgtywxwgkxvq3xprl6pt3iy",
    "name": "bafkreihxhpu3fgfgrfkbcaaih3o5lw6udxdfgtywxwgkxvq3xprl6pt3iy",
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
  "requestid": "2276ed75-c920-4f85-838e-f7e63ff39a53",
  "status": "queued",
  "created": "2023-06-27T23:02:38.602Z",
  "pin": {
    "cid": "bafkreihxhpu3fgfgrfkbcaaih3o5lw6udxdfgtywxwgkxvq3xprl6pt3iy",
    "name": "bafkreihxhpu3fgfgrfkbcaaih3o5lw6udxdfgtywxwgkxvq3xprl6pt3iy",
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
  "cf-ray": "7de151a1ff053ad2-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:39 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qamGthiNVVKNsvuY6oGO7J2x5jGOWiPg8tseLoYrI5ob7k3SBWXbCRMwWRhdPIxZbl0uScSr%2Bwg5bkTNHXe9ncd9NS7RWn9M30GBGKpKoLYKvg71UfzBMV1a2V3grz0%2B%2F1EyYw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
GET https://api.4everland.dev/pins/18f94967-fd6a-4ec9-bcf0-0f26ce9dd72e
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
  "cf-ray": "7de151b4be43aa67-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:42 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R%2BahugXkUcTUVJI27fpdihbA7cSzdI04a0GuCtW2TrkIr9wCENLfI0MwpIxlmsFF6rDhDRf2aRcaaPr15xDRftg%2FSi29prg%2FPdit4Sn16yQta8OVzeo8pZVT1YA10DP045goGg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
GET https://api.4everland.dev/pins/169db790-5cf6-43a3-a6b2-6ddb952d95b2
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
  "cf-ray": "7de151baf9e6aa99-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ak%2FtZdBzQAbC2sAJaX2Q5v8HgcPG8hnPF8DRwBB49Xba8GjJmnHInJnaVOYTXK8w9vHm9RGoGluANM3Qs0mx8FS%2Boawf0s10UUQhZ1U0r3Cqy%2BItg%2FTHNqFuGgQNScpxYkrIGA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare",
  "transfer-encoding": "chunked"
}
```
##### Body
```json
{
  "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
  "status": "queued",
  "created": "2023-06-27T23:02:41.755Z",
  "pin": {
    "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
    "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
  "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
  "status": "queued",
  "created": "2023-06-27T23:02:41.755Z",
  "pin": {
    "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
    "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
  "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
  "status": "queued",
  "created": "2023-06-27T23:02:41.755Z",
  "pin": {
    "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
    "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
## Pin's with requestid '18f94967-fd6a-4ec9-bcf0-0f26ce9dd72e' can have cid 'bafkreib2z4lmea4zt76chvpwrdcgiw7oy2xbd5sihvaz2ywmingyefhmea' replaced with 'bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm' - 🟢 SUCCESS

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
POST https://api.4everland.dev/pins/18f94967-fd6a-4ec9-bcf0-0f26ce9dd72e
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
{"cid":"bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151ae6f1645ff-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:41 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Cfz3kA%2FSLHPtsShGRAQkexv6m5rFs0WanKqM%2BNFkY2zQPG9hXUdEq9u%2FSE2CTkUtrAhqNFqW1SUA%2Fv6GQmPzIY9EkkfLGjqb128fLw07nZciMr47%2BN24mKoDQd3YFCdE%2FzkeQQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
  "status": "queued",
  "created": "2023-06-27T23:02:41.755Z",
  "pin": {
    "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
    "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
  "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
  "status": "queued",
  "created": "2023-06-27T23:02:41.755Z",
  "pin": {
    "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
    "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
  "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
  "status": "queued",
  "created": "2023-06-27T23:02:41.755Z",
  "pin": {
    "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
    "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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

  🟢 Could obtain requestid from new pin (18f94967-fd6a-4ec9-bcf0-0f26ce9dd72e) (success)

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
{"cid":"bafkreib2z4lmea4zt76chvpwrdcgiw7oy2xbd5sihvaz2ywmingyefhmea","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151a83877ea53-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:40 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4eWTPnq7pgxrQuC09UubFTEvpKOYI1jqmP17r%2Fxswo8wmaIWl1vf1esLaVCurmV6Kn8i7rLED6atwPID59oT8REOybj%2F6NrPTRseowFvGUPUk9pzGTQ9GcnW6xQfA5So2QOxbg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "18f94967-fd6a-4ec9-bcf0-0f26ce9dd72e",
  "status": "queued",
  "created": "2023-06-27T23:02:40.757Z",
  "pin": {
    "cid": "bafkreib2z4lmea4zt76chvpwrdcgiw7oy2xbd5sihvaz2ywmingyefhmea",
    "name": "bafkreib2z4lmea4zt76chvpwrdcgiw7oy2xbd5sihvaz2ywmingyefhmea",
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
  "requestid": "18f94967-fd6a-4ec9-bcf0-0f26ce9dd72e",
  "status": "queued",
  "created": "2023-06-27T23:02:40.757Z",
  "pin": {
    "cid": "bafkreib2z4lmea4zt76chvpwrdcgiw7oy2xbd5sihvaz2ywmingyefhmea",
    "name": "bafkreib2z4lmea4zt76chvpwrdcgiw7oy2xbd5sihvaz2ywmingyefhmea",
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
  "requestid": "18f94967-fd6a-4ec9-bcf0-0f26ce9dd72e",
  "status": "queued",
  "created": "2023-06-27T23:02:40.757Z",
  "pin": {
    "cid": "bafkreib2z4lmea4zt76chvpwrdcgiw7oy2xbd5sihvaz2ywmingyefhmea",
    "name": "bafkreib2z4lmea4zt76chvpwrdcgiw7oy2xbd5sihvaz2ywmingyefhmea",
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
## Can retrieve pin with name '577624bc-d936-4b43-b1e5-04762405c7f1' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?name=577624bc-d936-4b43-b1e5-04762405c7f1&match=exact
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
  "cf-ray": "7de151c21a43463c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:44 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AoF02znR%2BaKBUuhweY04eYa8vLTguCdjTS4BO%2FRP4fbqoIML4H3Iqz2Vro7vOuVk9tL3XLbXeJon6KHn7cHl4vKgo7oVHRNMCxRXxPrX9hEISjuZDUIm5YybaesKQ0MzUrMPHA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "queued",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "queued",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
## Can retrieve pin with name '577624BC-D936-4B43-B1E5-04762405C7F1' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (3/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?name=577624BC-D936-4B43-B1E5-04762405C7F1&match=iexact
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
  "cf-ray": "7de151c85f844802-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:45 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U5I8j9xfhsJ%2BYaFJK92Z8w%2FC1gWzHz%2F2XD2%2BCXk1ndNaXsrGLInBz%2FiOqPDFt4DuDSnVcU9pWfZQ5y3vslr2RCIS5BUGKKh1gUDE%2Bj7ZL0SRVO8NnVYnejF1Qcu63QeGQovBzQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "queued",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "queued",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "queued",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "queued",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
## Can retrieve pin with name 'd936-4b43-b1e5-047' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (2/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)





### Details

#### Request
```
GET https://api.4everland.dev/pins?name=d936-4b43-b1e5-047&match=partial
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
  "cf-ray": "7de151ceaffeeab0-DFW",
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:46 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ATndLgVxBBUysU6STvIg160sPl5xBHl95%2BMKaBfrImehNlQwQeFobPYXqDf6NFEpdlYmWQOMpZp9vF3qLm5MKKj7cWEZEngaVe50J%2BKl4iW05ZY7VlJH9oqa3NwERYWPvyu06A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can retrieve pin with name 'D936-4B43-B1E5-047' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (3/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ Count is equal to 1 (failure)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?name=D936-4B43-B1E5-047&match=ipartial
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
  "cf-ray": "7de151d4d93c2e19-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:47 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5f11QWnbGvw4EBGP3UHORhVBg3hsWppY64f1MwITftwFgIus4QbSs9x1pW62pnxIRmm%2FUR6Qr3KbL5oWuLrLkbI01VuSP6UX%2BQkCkWHwVsZv2ICOBgTFsMAo9L1RMQZmGZlpLg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "queued",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "queued",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "queued",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "queued",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
## Can create a pin with name='577624bc-d936-4b43-b1e5-04762405c7f1' - ❌ FAILED

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
{"cid":"bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu","name":"577624bc-d936-4b43-b1e5-04762405c7f1","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151bbdb904698-DFW",
  "connection": "close",
  "content-length": "433",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WqiYqeiamM771irLO%2FgsaiZ1XyonRFMEoeavHbY7kbizOtFEPmFxB25Hwx4icloeu%2FKzJWtNvJF5e95Lkxv1pdK4n0M6bqY2kDLdscZ%2B16lGOweS5gfsG%2B22KqGAQ1UTUwf%2FxA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
  "status": "queued",
  "created": "2023-06-27T23:02:43.915Z",
  "pin": {
    "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
    "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
  "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
  "status": "queued",
  "created": "2023-06-27T23:02:43.915Z",
  "pin": {
    "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
    "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
  "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
  "status": "queued",
  "created": "2023-06-27T23:02:43.915Z",
  "pin": {
    "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
    "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
## Can create new pin for testing pagination cid='bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi' - 🟢 SUCCESS

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
{"cid":"bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151dbf9ebeb0a-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:49 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wtzwc7dc%2BPohRNaqUUKIzUsPXh62Oi7KhwSXN%2FEAjqHcNWVeddc45t1wj7spBQwrevMZik5DhG3er%2BQYYc%2FvluJpEeJqRFFB3ygBJqRVFeGE9q3B%2FZCanhU09Gc8jv0HdIxf6w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "d431a22b-c107-4272-9540-3fb455bdf41f",
  "status": "queued",
  "created": "2023-06-27T23:02:48.994Z",
  "pin": {
    "cid": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
    "name": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
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
  "requestid": "d431a22b-c107-4272-9540-3fb455bdf41f",
  "status": "queued",
  "created": "2023-06-27T23:02:48.994Z",
  "pin": {
    "cid": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
    "name": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
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
  "requestid": "d431a22b-c107-4272-9540-3fb455bdf41f",
  "status": "queued",
  "created": "2023-06-27T23:02:48.994Z",
  "pin": {
    "cid": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
    "name": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
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
## Can create new pin for testing pagination cid='bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq' - 🟢 SUCCESS

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
{"cid":"bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151dc9f8a1447-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:49 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PoaSp3P8Z1hVfZKDvPXI%2BOovYI%2FEEjW%2BESQxdv%2BWjn0g9fptnTaxNwgcsbv%2BqYMtPaRSGti%2BYvPigpDjS8xwvXVwXpxxoH6XuvkPDC0L2itcdyutfu01fO7tZgXM97B044PGsA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02",
  "status": "queued",
  "created": "2023-06-27T23:02:49.125Z",
  "pin": {
    "cid": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
    "name": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
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
  "requestid": "1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02",
  "status": "queued",
  "created": "2023-06-27T23:02:49.125Z",
  "pin": {
    "cid": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
    "name": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
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
  "requestid": "1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02",
  "status": "queued",
  "created": "2023-06-27T23:02:49.125Z",
  "pin": {
    "cid": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
    "name": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
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
## Can create new pin for testing pagination cid='bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky' - 🟢 SUCCESS

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
{"cid":"bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151e24d54aa99-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:50 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hLFEQENn8xU1xKpcw9wha3LWCtbUtYfOG%2BUA%2FgfmirX0%2BWyslUl3KGTsxoP9XEq4KEczaJeW6jnb%2FalBnRxLGRduvcxYKx5ywVK37eoRmuXHRSX0GeWTrFidZ1rp1GxquQEqbA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "75125a9a-d6b5-48b3-ba38-25dfe721a14b",
  "status": "queued",
  "created": "2023-06-27T23:02:50.040Z",
  "pin": {
    "cid": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
    "name": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
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
  "requestid": "75125a9a-d6b5-48b3-ba38-25dfe721a14b",
  "status": "queued",
  "created": "2023-06-27T23:02:50.040Z",
  "pin": {
    "cid": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
    "name": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
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
  "requestid": "75125a9a-d6b5-48b3-ba38-25dfe721a14b",
  "status": "queued",
  "created": "2023-06-27T23:02:50.040Z",
  "pin": {
    "cid": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
    "name": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
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
## Can create new pin for testing pagination cid='bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4' - 🟢 SUCCESS

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
{"cid":"bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151e88bf50bdd-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:51 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ft0x4YsviVxGBPQL5YXV9YsHt3e1YrbTWHFZ%2BsXu%2FQFPj1yrEDAKTDefX3AnI7eNQx7iS53jx85%2FMtSNBSMLA%2FgaJdsJkoqEl9dZhg8N7N5wG606AZKR%2BN6xwpFBEjk8DBgqNQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "aed66bb3-282e-46fe-9116-c7bb29fd92ef",
  "status": "queued",
  "created": "2023-06-27T23:02:51.037Z",
  "pin": {
    "cid": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
    "name": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
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
  "requestid": "aed66bb3-282e-46fe-9116-c7bb29fd92ef",
  "status": "queued",
  "created": "2023-06-27T23:02:51.037Z",
  "pin": {
    "cid": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
    "name": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
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
  "requestid": "aed66bb3-282e-46fe-9116-c7bb29fd92ef",
  "status": "queued",
  "created": "2023-06-27T23:02:51.037Z",
  "pin": {
    "cid": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
    "name": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
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
## Can create new pin for testing pagination cid='bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem' - 🟢 SUCCESS

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
{"cid":"bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151eecd0baa46-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:52 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wDRmwOuJtQpcbxAod8HbAQ7QrGC5l%2B0906vh9GycV9cgehqCOEwnnTk1lGo9m%2B%2BIq4pTC1YNdcDUgXXpP8N748956psfwKrkF%2BJO%2FG74HjdGjtv2465pZkhpFdLgD%2FniAZFYqA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "578c4d1a-e899-45a2-aa60-47772e42f57e",
  "status": "queued",
  "created": "2023-06-27T23:02:52.016Z",
  "pin": {
    "cid": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
    "name": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
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
  "requestid": "578c4d1a-e899-45a2-aa60-47772e42f57e",
  "status": "queued",
  "created": "2023-06-27T23:02:52.016Z",
  "pin": {
    "cid": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
    "name": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
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
  "requestid": "578c4d1a-e899-45a2-aa60-47772e42f57e",
  "status": "queued",
  "created": "2023-06-27T23:02:52.016Z",
  "pin": {
    "cid": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
    "name": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
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
## Can create new pin for testing pagination cid='bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a' - 🟢 SUCCESS

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
{"cid":"bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151f4ffdb3abf-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:53 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nP%2BPmv6SBjlIdQBkGEiM4400X59rrH6IF4LCKL1Wv%2FwoehQ87U0Wkk0UssC36XhHWhMnSHMBtv2Km%2BuL2ryjQ9VHrBoycaC3Z0Ad63l%2FpxI4N23A468llYivz0n1YBGSXPvr%2Bw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "4c40e0e0-b6b2-4ddf-8315-ed075d205394",
  "status": "queued",
  "created": "2023-06-27T23:02:53.029Z",
  "pin": {
    "cid": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
    "name": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
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
  "requestid": "4c40e0e0-b6b2-4ddf-8315-ed075d205394",
  "status": "queued",
  "created": "2023-06-27T23:02:53.029Z",
  "pin": {
    "cid": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
    "name": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
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
  "requestid": "4c40e0e0-b6b2-4ddf-8315-ed075d205394",
  "status": "queued",
  "created": "2023-06-27T23:02:53.029Z",
  "pin": {
    "cid": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
    "name": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
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
## Can create new pin for testing pagination cid='bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e' - 🟢 SUCCESS

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
{"cid":"bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151fb3de1e99b-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:54 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PIaYcVemev4XrKiO7LtogF8EPSpsuKbb%2BW2x5sEk2svl9LnkuZJvyfz2z8MOHgDLmguttvwoDn96hOqrgbkx2SvEWFKi5eZDycU3FvNJMDldJRn%2B8vStLrlAH6MxYU1d2KKK0Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "88e0d1a1-650d-49b3-be72-1350df731dfb",
  "status": "queued",
  "created": "2023-06-27T23:02:54.026Z",
  "pin": {
    "cid": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
    "name": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
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
  "requestid": "88e0d1a1-650d-49b3-be72-1350df731dfb",
  "status": "queued",
  "created": "2023-06-27T23:02:54.026Z",
  "pin": {
    "cid": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
    "name": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
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
  "requestid": "88e0d1a1-650d-49b3-be72-1350df731dfb",
  "status": "queued",
  "created": "2023-06-27T23:02:54.026Z",
  "pin": {
    "cid": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
    "name": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
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
## Can create new pin for testing pagination cid='bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra' - 🟢 SUCCESS

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
{"cid":"bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de152018bba2fd4-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:55 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=It9BpXuOAaKOnavtfzz9bUfwieVXsNkzAtlejRe4M%2Bwz7Xq79yyxd1en99efC785dYaBHEgb0dWqcan%2FOuQklRD%2Bimev%2BR655DPtNeNIxyKnO5jQ6wS0GQ%2FzG6ZbpB0n%2Be%2F3XA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "6bb4fa6c-963e-4b12-8e58-d960541e1536",
  "status": "queued",
  "created": "2023-06-27T23:02:55.036Z",
  "pin": {
    "cid": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
    "name": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
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
  "requestid": "6bb4fa6c-963e-4b12-8e58-d960541e1536",
  "status": "queued",
  "created": "2023-06-27T23:02:55.036Z",
  "pin": {
    "cid": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
    "name": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
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
  "requestid": "6bb4fa6c-963e-4b12-8e58-d960541e1536",
  "status": "queued",
  "created": "2023-06-27T23:02:55.036Z",
  "pin": {
    "cid": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
    "name": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
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
## Can create new pin for testing pagination cid='bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu' - 🟢 SUCCESS

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
{"cid":"bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de15207cf5ce99b-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:56 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5XVqw%2B1ZdRAUkrk00vYP8Z8KAZFU4uGRyjr3HU3XSsEz42m7pDzI12KKuZs%2BWn6XtNWXTvZa8oQjbHiPsGHCBFoekJvODinq31GeI3flERZY%2FNSc7xNpYXmzRlenwvkuwCCcXw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "8b89f427-f17c-4c12-abd1-8e1605786e8b",
  "status": "queued",
  "created": "2023-06-27T23:02:55.996Z",
  "pin": {
    "cid": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
    "name": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
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
  "requestid": "8b89f427-f17c-4c12-abd1-8e1605786e8b",
  "status": "queued",
  "created": "2023-06-27T23:02:55.996Z",
  "pin": {
    "cid": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
    "name": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
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
  "requestid": "8b89f427-f17c-4c12-abd1-8e1605786e8b",
  "status": "queued",
  "created": "2023-06-27T23:02:55.996Z",
  "pin": {
    "cid": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
    "name": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
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
## Can create new pin for testing pagination cid='bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie' - 🟢 SUCCESS

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
{"cid":"bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de1520dfb03461d-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:57 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Qxj%2Fkd5ujQ0VSov43zlhh9iUlWaUBMeFwCtpN5ksnkUIrIvXTqwy4aA1pULuxUZi4DXVWflXlll8Q1g9x63Hy9t9EF%2BqW8t031%2FgJwxOE4bny0jsJ8xlOFgdfWUzX%2FzVQFhGtQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "fec91b3c-ea9c-410b-a536-c481c51cb45e",
  "status": "queued",
  "created": "2023-06-27T23:02:57.031Z",
  "pin": {
    "cid": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
    "name": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
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
  "requestid": "fec91b3c-ea9c-410b-a536-c481c51cb45e",
  "status": "queued",
  "created": "2023-06-27T23:02:57.031Z",
  "pin": {
    "cid": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
    "name": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
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
  "requestid": "fec91b3c-ea9c-410b-a536-c481c51cb45e",
  "status": "queued",
  "created": "2023-06-27T23:02:57.031Z",
  "pin": {
    "cid": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
    "name": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
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
## Can create new pin for testing pagination cid='bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y' - 🟢 SUCCESS

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
{"cid":"bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de152144ae6e94e-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:58 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Sk7Z8AxBqF7YVFMz%2BYdh3Q%2BphWd8oY82jEtq%2FxK0oAoiyFRe0mD9JH11BYGmABsOdcDPk6cGo0ht%2B7cktr%2Bq7SXitgCOgmHFJkrCkGejkAYQVlIG1EwxIQjfvFu6PoskI5KNHg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "89b7ee42-d222-45ae-ac38-d444eff20940",
  "status": "queued",
  "created": "2023-06-27T23:02:58.037Z",
  "pin": {
    "cid": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
    "name": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
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
  "requestid": "89b7ee42-d222-45ae-ac38-d444eff20940",
  "status": "queued",
  "created": "2023-06-27T23:02:58.037Z",
  "pin": {
    "cid": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
    "name": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
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
  "requestid": "89b7ee42-d222-45ae-ac38-d444eff20940",
  "status": "queued",
  "created": "2023-06-27T23:02:58.037Z",
  "pin": {
    "cid": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
    "name": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
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
## Can create new pin for testing pagination cid='bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i' - 🟢 SUCCESS

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
{"cid":"bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de1521a88fd4781-DFW",
  "connection": "close",
  "content-length": "456",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:59 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L4lCp6JfbSOe9qqkNEzpi8RzazBmXHi3ySjFoyQ5OYwSk9Y2OUUX7XVV7tJmnqH6mjQrh5jFOwO%2Blg%2BePe7hVrGW3SuFZyxEBPtIjH7s6zmvq3sAOq%2B1n3IR6M0%2B4IM8hrNYCA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
  "server": "cloudflare"
}
```
##### Body
```json
{
  "requestid": "b66ddc95-fb6a-4fe4-859b-133ccc789d01",
  "status": "queued",
  "created": "2023-06-27T23:02:59.036Z",
  "pin": {
    "cid": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
    "name": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
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
  "requestid": "b66ddc95-fb6a-4fe4-859b-133ccc789d01",
  "status": "queued",
  "created": "2023-06-27T23:02:59.036Z",
  "pin": {
    "cid": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
    "name": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
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
  "requestid": "b66ddc95-fb6a-4fe4-859b-133ccc789d01",
  "status": "queued",
  "created": "2023-06-27T23:02:59.036Z",
  "pin": {
    "cid": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
    "name": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
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
  "cf-ray": "7de15220da2a2883-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:00 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2d%2B0UNAjtuhC5zBuR%2BENClEEdBk4DT0SDGhMnCxTE7bDPtVrd8JiegeKethQ524UACLd1LrcsmybmMT2xKUaDm8pdyFFrUYSZXTYsfS4GphcelolpbpgB%2FUFfXmD36MgMN2fEQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "b66ddc95-fb6a-4fe4-859b-133ccc789d01",
      "status": "queued",
      "created": "2023-06-27T23:02:59.036Z",
      "pin": {
        "cid": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
        "name": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
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
      "requestid": "89b7ee42-d222-45ae-ac38-d444eff20940",
      "status": "pinning",
      "created": "2023-06-27T23:02:58.037Z",
      "pin": {
        "cid": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
        "name": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
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
      "requestid": "fec91b3c-ea9c-410b-a536-c481c51cb45e",
      "status": "pinning",
      "created": "2023-06-27T23:02:57.031Z",
      "pin": {
        "cid": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
        "name": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
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
      "requestid": "8b89f427-f17c-4c12-abd1-8e1605786e8b",
      "status": "pinning",
      "created": "2023-06-27T23:02:55.996Z",
      "pin": {
        "cid": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
        "name": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
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
      "requestid": "6bb4fa6c-963e-4b12-8e58-d960541e1536",
      "status": "pinning",
      "created": "2023-06-27T23:02:55.036Z",
      "pin": {
        "cid": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
        "name": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
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
      "requestid": "88e0d1a1-650d-49b3-be72-1350df731dfb",
      "status": "pinning",
      "created": "2023-06-27T23:02:54.026Z",
      "pin": {
        "cid": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
        "name": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
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
      "requestid": "4c40e0e0-b6b2-4ddf-8315-ed075d205394",
      "status": "pinning",
      "created": "2023-06-27T23:02:53.029Z",
      "pin": {
        "cid": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
        "name": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
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
      "requestid": "578c4d1a-e899-45a2-aa60-47772e42f57e",
      "status": "pinning",
      "created": "2023-06-27T23:02:52.016Z",
      "pin": {
        "cid": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
        "name": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
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
      "requestid": "aed66bb3-282e-46fe-9116-c7bb29fd92ef",
      "status": "pinning",
      "created": "2023-06-27T23:02:51.037Z",
      "pin": {
        "cid": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
        "name": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
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
      "requestid": "75125a9a-d6b5-48b3-ba38-25dfe721a14b",
      "status": "pinning",
      "created": "2023-06-27T23:02:50.040Z",
      "pin": {
        "cid": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
        "name": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
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
      "requestid": "b66ddc95-fb6a-4fe4-859b-133ccc789d01",
      "status": "queued",
      "created": "2023-06-27T23:02:59.036Z",
      "pin": {
        "cid": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
        "name": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
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
      "requestid": "89b7ee42-d222-45ae-ac38-d444eff20940",
      "status": "pinning",
      "created": "2023-06-27T23:02:58.037Z",
      "pin": {
        "cid": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
        "name": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
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
      "requestid": "fec91b3c-ea9c-410b-a536-c481c51cb45e",
      "status": "pinning",
      "created": "2023-06-27T23:02:57.031Z",
      "pin": {
        "cid": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
        "name": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
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
      "requestid": "8b89f427-f17c-4c12-abd1-8e1605786e8b",
      "status": "pinning",
      "created": "2023-06-27T23:02:55.996Z",
      "pin": {
        "cid": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
        "name": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
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
      "requestid": "6bb4fa6c-963e-4b12-8e58-d960541e1536",
      "status": "pinning",
      "created": "2023-06-27T23:02:55.036Z",
      "pin": {
        "cid": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
        "name": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
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
      "requestid": "88e0d1a1-650d-49b3-be72-1350df731dfb",
      "status": "pinning",
      "created": "2023-06-27T23:02:54.026Z",
      "pin": {
        "cid": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
        "name": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
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
      "requestid": "4c40e0e0-b6b2-4ddf-8315-ed075d205394",
      "status": "pinning",
      "created": "2023-06-27T23:02:53.029Z",
      "pin": {
        "cid": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
        "name": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
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
      "requestid": "578c4d1a-e899-45a2-aa60-47772e42f57e",
      "status": "pinning",
      "created": "2023-06-27T23:02:52.016Z",
      "pin": {
        "cid": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
        "name": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
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
      "requestid": "aed66bb3-282e-46fe-9116-c7bb29fd92ef",
      "status": "pinning",
      "created": "2023-06-27T23:02:51.037Z",
      "pin": {
        "cid": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
        "name": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
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
      "requestid": "75125a9a-d6b5-48b3-ba38-25dfe721a14b",
      "status": "pinning",
      "created": "2023-06-27T23:02:50.040Z",
      "pin": {
        "cid": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
        "name": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
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
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T23%3A02%3A50.040Z
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
  "cf-ray": "7de15221c87c477a-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:00 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qMkZhQdLen1b6hNbJ8T9jQgxDEMeURakf3pXtQWOiyxfCRh0agg6C7cjbRN6d0qgT6%2BaWz7UJ4BvQMedgkbPKlEfewcHKzJl0rsNYmsRzn%2FnxVFmjqEudJO4rF8ErB9EDoAibQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02",
      "status": "pinning",
      "created": "2023-06-27T23:02:49.125Z",
      "pin": {
        "cid": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
        "name": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
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
      "requestid": "d431a22b-c107-4272-9540-3fb455bdf41f",
      "status": "pinning",
      "created": "2023-06-27T23:02:48.994Z",
      "pin": {
        "cid": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
        "name": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "pinning",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "pinning",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
      "requestid": "1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02",
      "status": "pinning",
      "created": "2023-06-27T23:02:49.125Z",
      "pin": {
        "cid": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
        "name": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
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
      "requestid": "d431a22b-c107-4272-9540-3fb455bdf41f",
      "status": "pinning",
      "created": "2023-06-27T23:02:48.994Z",
      "pin": {
        "cid": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
        "name": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "pinning",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "pinning",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
  "cf-ray": "7de151d5bd5e46d7-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:02:48 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n0O%2F%2FSwzTv5%2Fg0US97G96GQ48m9L8JVk7InuSSSb5VPcqPjVc%2FM2huKNWCdbqMHb89znbtSpfk3YKnQLTadWaLgDkBkSk6n5DmXYqMQGWDxmv%2B4nEDcmdt6riqJI7RDN7cEJYg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "queued",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "queued",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "queued",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "queued",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
## Can delete pin with requestid 'b66ddc95-fb6a-4fe4-859b-133ccc789d01' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/b66ddc95-fb6a-4fe4-859b-133ccc789d01
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
  "cf-ray": "7de1522e48de4614-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:02 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a9NfnC%2B4Sr96UHSlZiZNuss4iaNVYgcJC6vzOaRiI20WvpJmNT8ez0YPyWI2arW8VqsTbMTHRZu971C1xqw2ASGRgVO%2B5Ftrffa%2BOQF1vLAjF6Eo1XjIFmJkBXVOeB3I957vVw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '89b7ee42-d222-45ae-ac38-d444eff20940' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/89b7ee42-d222-45ae-ac38-d444eff20940
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
  "cf-ray": "7de15234888447a2-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:03 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Fxh7O%2BVT3rBcSwVXaV78b4JTsqpmEJ0wFPT%2Fb%2F38C8qKO0XbiRKfB4Wef8EmSGT52Jm45XSqnY%2BrCpzAgBw1eC6c5JKYX52QYsHNFP4XzacF9EfMCgMo18gHohECvuBb%2BtfQmg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid 'fec91b3c-ea9c-410b-a536-c481c51cb45e' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/fec91b3c-ea9c-410b-a536-c481c51cb45e
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
  "cf-ray": "7de1523acb2f2ca2-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:04 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CO0VIntEr0vRGfhzvub9ipHcdfe3FqnhFUtkCUXNDIeYplczDKryLxsD4F5h5kpP07rB0qiy%2BZnE3ty7LAtVJA4YzV7Qs%2Fo8SA9S8lbrt9qXeNcYaGSuKIszZnGC2MRXICEdmg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '8b89f427-f17c-4c12-abd1-8e1605786e8b' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/8b89f427-f17c-4c12-abd1-8e1605786e8b
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
  "cf-ray": "7de15241092a2cc1-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:05 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qS3MxOqcYry2BPTjjV%2BEVbHv9K4wSOzmnCki44uHKSNY6yZP0wsmGjwmBNrp2wlDpN%2BJ3vFWNtaOt7ybKDkiVT5VfVOF1zF0G8IZ3iIh7QZoAdJwOBJRDpDO4U8H%2BhfnusQuQA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '6bb4fa6c-963e-4b12-8e58-d960541e1536' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/6bb4fa6c-963e-4b12-8e58-d960541e1536
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
  "cf-ray": "7de152474e6447a2-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:06 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vxFmFYRwWhbpSsdeLX9hdaZtLF2mLmlJp2uloxSuVlpl58YMs592ZrMFd%2Fqqw2huYhvybnfvUTV1hj8ltTtIfuiyR73YtPmQwF63GiiWMCoBRBHstTH71hMlOoWjBZ5Dopz2%2Bw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '88e0d1a1-650d-49b3-be72-1350df731dfb' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/88e0d1a1-650d-49b3-be72-1350df731dfb
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
  "cf-ray": "7de1524d98f8144b-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:07 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FAGPibMHnCHd2lHpdaiLhkyBtDVaJEGNLimv3gTRuAqvlhq78qCIE%2FYIPc%2FM3I%2BheclgD97m5Td0TuM53HQ7%2BD4ylVm8go7OkVQhUuNyTVC6zgwDw1boyOD0yoKFwMKxFdme0A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '4c40e0e0-b6b2-4ddf-8315-ed075d205394' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/4c40e0e0-b6b2-4ddf-8315-ed075d205394
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
  "cf-ray": "7de15253dfd7e823-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:08 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sowkJREkV6%2FKDsBH%2Faar9nJES9GcfvSAcxjO2OFuI2L498%2BO%2BR8HPSJE9bLJMw2axhq71klLN%2BZprbi1IsHLnXMshxgpmEIGyZH6N%2BG2AkLb%2BwzL8rmLTaUxIFASw9E2LaISHQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '578c4d1a-e899-45a2-aa60-47772e42f57e' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/578c4d1a-e899-45a2-aa60-47772e42f57e
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
  "cf-ray": "7de1525a0f314686-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:09 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ryeq8g9XAOApPKBkaH%2FLPMQe7wVajoMnM7ekCKNqO82Hp9EfX03Rv2DAuGnq7Ilx2oriauf1UFZMhibyxPtrAiBFfT%2FerKbszY03lvpd94LJOkgGaQYdBDllbomSnz3zFp8Pfw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid 'aed66bb3-282e-46fe-9116-c7bb29fd92ef' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/aed66bb3-282e-46fe-9116-c7bb29fd92ef
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
  "cf-ray": "7de152604a5528e5-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:10 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jm9tiQRYy3sdrLq7%2BGc2QLaEZa8Lhoc%2BeerUAey2adM9mFbTxeu%2BbLUhu%2F3jwY2Hx6rJTzzGM6a%2FM1IG63P1VDRTMt73zFafK6klHMerDVht4q1Jq1uh0UHwKyMnUNQo2UAKvA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '75125a9a-d6b5-48b3-ba38-25dfe721a14b' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/75125a9a-d6b5-48b3-ba38-25dfe721a14b
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
  "cf-ray": "7de152668f10aa46-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:11 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sysorifoY%2BDeK7y9Nu%2FATDKHGqWzMIUJBLRYiv1y4xN07hMEzkGZ0ZbsPrve4Hjh3LuDE2ldBkt79RYKyLmT9p7dMxcvU141Fg4KzICUAO6aRSx6ryPDF766hZeT1o6NCVUsKg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02
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
  "cf-ray": "7de1526d7fdee781-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:12 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WsXH%2F6%2B8l9EyV7uC8Gse2QcPplvoj%2Fi3tLdOpGEVntdic1eLviyWfJNI5rmQd8UFQg9Up19l5nKW9s5bBAeDmmkKzVBB2pGtiaFdUBW6x8QeKhDdi9jTEzoLodGwvMeRxKiM%2BA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid 'd431a22b-c107-4272-9540-3fb455bdf41f' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/d431a22b-c107-4272-9540-3fb455bdf41f
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
  "cf-ray": "7de15273bcd0e599-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:13 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NoNwzVaffWzsANfqb3SxIubnv9o73QrKKkA6E%2FyxPtzgqZ2vzSWf6VvOA%2BQBlMrPVOCBYiadVq%2BdR2XNJRmR6bOgcLiSJqH64JH59APOYqrFDkm6izVP%2BL9hfWJMKliup%2BRA%2Fg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid 'ace78a76-b07e-456a-b1da-6d7a05104f62' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/ace78a76-b07e-456a-b1da-6d7a05104f62
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
  "cf-ray": "7de15279ffade8f5-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:14 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=I9PPJbUfUR%2B7%2F7nLouJqwTiU0%2BftaZzBVmbxwPVgUMlTjcem8YDdJ32Ke%2F%2ByQB4rwluTrvd2WtzK1%2Fl7QkeDZw3BFhhqdZswL48%2BN%2FGl5eeRpKA6ZtklpXuUxtMeCse%2BHRAvug%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '169db790-5cf6-43a3-a6b2-6ddb952d95b2' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/169db790-5cf6-43a3-a6b2-6ddb952d95b2
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
  "cf-ray": "7de152802cd5eb0a-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:15 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ielr7Z9J764UJ7eN84j0hckm3ROEctuXY%2BJ1A%2FIAJgk3uSkUhiOgTxb7xTxpiPbNYSlm3t5%2BHp7PVU6vzSvuoJO2hchvG478Xrj85yOxuQgPG5mlJLpFZj48RIiO29GK%2BB9Xnw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can delete pin with requestid '4defee7d-088b-44af-ab0a-52d954a973c8' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.4everland.dev/pins/4defee7d-088b-44af-ab0a-52d954a973c8
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
  "cf-ray": "7de152867a44ea60-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:16 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JFBXv50xi%2B1gVWFwsfxqNIQSLPSj2dZz7Tq5123LQBQakNb9SNoTtln0XyO6upcOJE0X2o0vaavgnnuRabi3BXfXNLX57Qy9qLG7iz2JdcZnCDc1xXH8zii69xnYPWsPHvquQA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Get all Pins created before 'Tue Jun 27 2023 23:02:37 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T23%3A02%3A37.597Z
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
  "cf-ray": "7de1528cbfaf4618-DFW",
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8YKW%2Fjyay7F430y8227O6olYlM5IFNSUIlfwW4tiW7WeNUmzMQ%2FlzfZPMBK3QoxrIGCUSXij7FW1VSTdnK%2BzEDUIhGo4l%2BYXnJyOYyLQJY86lsH9Bnqq58yASpcOrmKg9MHLPA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Get all Pins created before 'Tue Jun 27 2023 23:02:50 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (5/5 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)





### Details

#### Request
```
GET https://api.4everland.dev/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-27T23%3A02%3A50.040Z
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
  "cf-ray": "7de1526ccdff463c-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:12 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=O5zzppO9FT8X7pdyCQ0TaDbiFssLRVJq4jmCxiDSHRMfvOJQtgAINunFXO95J%2BMVtDx76rD2oELwsoFdj4nvHlOiFGXEdxgMSZsZUeM5vkCVkjq93juVSyep3FATRgjtYhBt2w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02",
      "status": "pinning",
      "created": "2023-06-27T23:02:49.125Z",
      "pin": {
        "cid": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
        "name": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
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
      "requestid": "d431a22b-c107-4272-9540-3fb455bdf41f",
      "status": "pinning",
      "created": "2023-06-27T23:02:48.994Z",
      "pin": {
        "cid": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
        "name": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "pinning",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "pinning",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
      "requestid": "1a8ec7a8-46c3-4e2b-be98-142b9a7c5a02",
      "status": "pinning",
      "created": "2023-06-27T23:02:49.125Z",
      "pin": {
        "cid": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
        "name": "bafkreif4z2d5jw6ghijtojz6d2unpgxljghmck4tfwym3dqk6t4o7j32bq",
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
      "requestid": "d431a22b-c107-4272-9540-3fb455bdf41f",
      "status": "pinning",
      "created": "2023-06-27T23:02:48.994Z",
      "pin": {
        "cid": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
        "name": "bafkreihkl2cynbhb5b5blt6eaaem2cqr7wls4po6xrngoz2sdlowpct2gi",
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
      "requestid": "ace78a76-b07e-456a-b1da-6d7a05104f62",
      "status": "pinning",
      "created": "2023-06-27T23:02:43.915Z",
      "pin": {
        "cid": "bafkreibomjwitsgjhrgdsbwa4x6rcbi2u4jrgwsjwcdtrdfeqw6yninjbu",
        "name": "577624bc-d936-4b43-b1e5-04762405c7f1",
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
      "requestid": "169db790-5cf6-43a3-a6b2-6ddb952d95b2",
      "status": "pinning",
      "created": "2023-06-27T23:02:41.755Z",
      "pin": {
        "cid": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
        "name": "bafkreiet7jzxngxhcya6vnj6zfpfybynubzjyse2nk5garg5kl2unqsbzm",
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
      "requestid": "4defee7d-088b-44af-ab0a-52d954a973c8",
      "status": "pinning",
      "created": "2023-06-27T23:02:37.597Z",
      "pin": {
        "cid": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
        "name": "bafkreiemxawl3bkgoy6dxsmm4ho7p3ve25haekvmegen6oyosvdcy5p4ba",
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
  "cf-ray": "7de1528d4988aa79-DFW",
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=i9qarlFj7s4mY5iH4fOEmIMoITVOypibxrkfaVUYzrXmncLZb0NyalN%2FvD4c0K82OkDv%2FmmN%2FE6iHSpp2ziNwNP9AmpPhYs7njDUbiHIhstP%2Bb5hXa3TGju05%2FZHsgdeZcBdmA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7de152280ae3e832-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json",
  "date": "Tue, 27 Jun 2023 23:03:01 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NNj1XkD7xQwa2yL8x%2Famt1uopb0s2E0Oki9JOYSG4ZTuiswk0nKamrWLQGgwo4ATltiEoK%2B43mAqXxRWXtgODT3l7tqrEZ4%2FPzWhoEa6RNsRhSkUG27SUxdvCe1XJ4V43J9XTg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
      "requestid": "b66ddc95-fb6a-4fe4-859b-133ccc789d01",
      "status": "queued",
      "created": "2023-06-27T23:02:59.036Z",
      "pin": {
        "cid": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
        "name": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
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
      "requestid": "89b7ee42-d222-45ae-ac38-d444eff20940",
      "status": "pinning",
      "created": "2023-06-27T23:02:58.037Z",
      "pin": {
        "cid": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
        "name": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
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
      "requestid": "fec91b3c-ea9c-410b-a536-c481c51cb45e",
      "status": "pinning",
      "created": "2023-06-27T23:02:57.031Z",
      "pin": {
        "cid": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
        "name": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
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
      "requestid": "8b89f427-f17c-4c12-abd1-8e1605786e8b",
      "status": "pinning",
      "created": "2023-06-27T23:02:55.996Z",
      "pin": {
        "cid": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
        "name": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
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
      "requestid": "6bb4fa6c-963e-4b12-8e58-d960541e1536",
      "status": "pinning",
      "created": "2023-06-27T23:02:55.036Z",
      "pin": {
        "cid": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
        "name": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
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
      "requestid": "88e0d1a1-650d-49b3-be72-1350df731dfb",
      "status": "pinning",
      "created": "2023-06-27T23:02:54.026Z",
      "pin": {
        "cid": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
        "name": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
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
      "requestid": "4c40e0e0-b6b2-4ddf-8315-ed075d205394",
      "status": "pinning",
      "created": "2023-06-27T23:02:53.029Z",
      "pin": {
        "cid": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
        "name": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
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
      "requestid": "578c4d1a-e899-45a2-aa60-47772e42f57e",
      "status": "pinning",
      "created": "2023-06-27T23:02:52.016Z",
      "pin": {
        "cid": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
        "name": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
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
      "requestid": "aed66bb3-282e-46fe-9116-c7bb29fd92ef",
      "status": "pinning",
      "created": "2023-06-27T23:02:51.037Z",
      "pin": {
        "cid": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
        "name": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
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
      "requestid": "75125a9a-d6b5-48b3-ba38-25dfe721a14b",
      "status": "pinning",
      "created": "2023-06-27T23:02:50.040Z",
      "pin": {
        "cid": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
        "name": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
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
      "requestid": "b66ddc95-fb6a-4fe4-859b-133ccc789d01",
      "status": "queued",
      "created": "2023-06-27T23:02:59.036Z",
      "pin": {
        "cid": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
        "name": "bafkreiamapqtlwub4da4o37b4sgowy7lcufp4cifdpdlrtn3uumei2qf4i",
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
      "requestid": "89b7ee42-d222-45ae-ac38-d444eff20940",
      "status": "pinning",
      "created": "2023-06-27T23:02:58.037Z",
      "pin": {
        "cid": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
        "name": "bafkreifldkzp4prseia7wvnqcqeitbyy5lnszyiqpf6wx6p3oixmracw4y",
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
      "requestid": "fec91b3c-ea9c-410b-a536-c481c51cb45e",
      "status": "pinning",
      "created": "2023-06-27T23:02:57.031Z",
      "pin": {
        "cid": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
        "name": "bafkreigdhqxmd7tsr67cnbbsy7vkhg436tlssiiqcegz6evrmlwkoca7ie",
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
      "requestid": "8b89f427-f17c-4c12-abd1-8e1605786e8b",
      "status": "pinning",
      "created": "2023-06-27T23:02:55.996Z",
      "pin": {
        "cid": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
        "name": "bafkreia6bc5qhdf3g2wpsm5vebatj3dnjxnjxu3ffhv2abntmtscpy4ygu",
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
      "requestid": "6bb4fa6c-963e-4b12-8e58-d960541e1536",
      "status": "pinning",
      "created": "2023-06-27T23:02:55.036Z",
      "pin": {
        "cid": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
        "name": "bafkreicihlkvhbd3zwyezqc7id7sf43phrdxojdjbsl66htc5due5la6ra",
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
      "requestid": "88e0d1a1-650d-49b3-be72-1350df731dfb",
      "status": "pinning",
      "created": "2023-06-27T23:02:54.026Z",
      "pin": {
        "cid": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
        "name": "bafkreiawa265ova33vxvkyqotkffoq6uq7mhzhnt75z7inkdhjrvbtlq3e",
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
      "requestid": "4c40e0e0-b6b2-4ddf-8315-ed075d205394",
      "status": "pinning",
      "created": "2023-06-27T23:02:53.029Z",
      "pin": {
        "cid": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
        "name": "bafkreigzzl6vvgzr3khxl5lbb3jwqslpg22jp3ss7x5aoqs7z7rd4atm2a",
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
      "requestid": "578c4d1a-e899-45a2-aa60-47772e42f57e",
      "status": "pinning",
      "created": "2023-06-27T23:02:52.016Z",
      "pin": {
        "cid": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
        "name": "bafkreigp7u4olfk2gffouhexjonfvyj2ve7i5ljgwjoedjivoaakepxnem",
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
      "requestid": "aed66bb3-282e-46fe-9116-c7bb29fd92ef",
      "status": "pinning",
      "created": "2023-06-27T23:02:51.037Z",
      "pin": {
        "cid": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
        "name": "bafkreiafuqffwsrboo6uf5gnkzzq7ac6qmqtefw44ehoe3askuhvbz7bi4",
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
      "requestid": "75125a9a-d6b5-48b3-ba38-25dfe721a14b",
      "status": "pinning",
      "created": "2023-06-27T23:02:50.040Z",
      "pin": {
        "cid": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
        "name": "bafkreib3dk2meydd2mkwu636hh6b2ggv2vgvl6dh4rxdhbphpx62x77eky",
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
