
<script src="./telemetry.js"></script>
# https://pin.crustcode.com/psa compliance:

Execution Date: 2023-06-22T09:20:20.807Z

Revision: [3d9aa58](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/3d9aa58)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/pin.crustcode.com.md)

## Summary (2/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreieke6ibtrejvsewf2jajg3xjiyqykitbqrx5emmap73vpkkoqhm5e'](#pins-post-of-cid-bafkreieke6ibtrejvsewf2jajg3xjiyqykitbqrx5emmap73vpkkoqhm5e----failed)

  ❌ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ❌ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ❌ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----failed)

  ❌ [Can create a pin with name='b66a39e2-4c6c-499f-a37e-89e16d12ac53'](#can-create-a-pin-with-nameb66a39e2-4c6c-499f-a37e-89e16d12ac53----failed)

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
  "cf-ray": "7db368c39f64479a-DFW",
  "connection": "close",
  "content-length": "63",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:23 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sd4anR7tmHE5WwnpwDD32mMHwn%2FybLpcrQTCNgV08KLWGMbZzkVhZk4IZIIpQ4WP3l1y%2Fyl%2FV%2B1wDmt%2F7zXLE%2BxkaJYogMQWFufEmdDGgtZayOKKHxlMSaEzS7chJQk71p%2FR3w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7db368c9dce13ace-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:24 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VxRxeO715Fxzr%2F6HZhausQBGRHA7owgqIGkwtyuOcLCOQpU0tXRoXq4G%2BtoQ6Jqc8ZXVsvn%2FwcP3SpCnjVF3%2BlJkiWHn8SRJmxEGZ4nuKnJZlyDZIqEYOcbGce%2FWQOwpeDUj8A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Pins post of CID 'bafkreieke6ibtrejvsewf2jajg3xjiyqykitbqrx5emmap73vpkkoqhm5e' - ❌ FAILED

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
{"cid":"bafkreieke6ibtrejvsewf2jajg3xjiyqykitbqrx5emmap73vpkkoqhm5e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db368d02c3d4788-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:25 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R0Oq2EGAYXDKCNInwiOyNBdHFrGg3WWoYEFjHVLoK7Adn0vjDcPj%2FSkCymjWP%2BnSCJXcFIeT8Wql1OXGICicOrzpq59L%2FLd9ezxD0TgCIF%2FF8EX%2FSzWfhuxRHIJDYNBXPWZqjA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7db368dcab5c2e69-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:26 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Uf%2F72Q8MZp0WXVMXUvsrlJev8eWiTVXc7N7O418MhLbjcJXJChbLPzdMVCHLWItNG43oXhpsd%2FarWfcDAg6PhIH44KKZBgkshLoaeMvs7q7BVgNLh0Bt%2BYzlGSo44jjhrHRKdA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
{"cid":"bafkreibzilyjur2e3vcnyarz5qfpiqqcz3qdkzrh52ogkkrc2afsccnmlm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db368d66e41aa82-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:26 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7zHr%2F2TwFRikZ4P9PB1vGKmliDnDLaHpqeI1AsLdYsysyzotpridWFh615YMrU5gt4QHxKAxkpgBVCI8eQhjSoLFB91qr2c6Y%2FD56GNGF0etHXLX1RUIf9n8bQI4c2Me9%2BZ37Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7db368e0dff7ea60-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:30 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=O99T9q4mwBEneSC9983JQiZ2TRJtvHrbjx9QiSMWc7rH%2FMlwaXhtjesfnJJgobW3Ld1B3evd2BGCiowj06kRlg%2Fzv5Y6AkjEPjkAaP5mGpkHbDWbnZF9wzHmXPADsEhW6DVCCQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7db36905eb0be99b-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:35 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gBDud4Hl%2B0PJ%2BS%2BFMQc%2BANVNQcOafAaSLtIZ8g3MuZvLVl5raIS%2BeRmdbVS1LFjLykbeE47g8iP33hGAdptbQAjcTclsRdRFiS8DtsT8L0FZo1LJdrWcpN2ax%2FUS5uk0KfEb5A%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7db36914f92ae524-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:36 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w8NlnA5qI5Wt4pciu8BKHm4Go4YsVqPwh6pQZj7r%2BHGAgdeVXaDLH80Pa0Ef4GKaDYrEwoNcmvH2d23xFoC6PLcA6JLAzuaewR5T3aUO6No4hDSRlCXeSqTmGDhVSaG2utC7QA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Pin's with requestid 'null' can have cid 'bafkreiaksofke3ubp575btvrhsurvgddy4h2kishehn3jjiyko76uvbgfu' replaced with 'bafkreigqvrlfsgqwp6vv4qda4bxulzf6xpllvdbptwq2cayqtizy3hjaqm' - ❌ FAILED

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
{"cid":"bafkreigqvrlfsgqwp6vv4qda4bxulzf6xpllvdbptwq2cayqtizy3hjaqm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db368ff99023172-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:32 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BR5CBb4b9dz0a7efrV7QPGR2opj9FttfVRgenPrXc4%2BCsyA7jF53aUMDFKJ%2Fhmdd3NeA4S%2Fc0m%2Fy%2BPzq%2FcobVW4SncNWn5aQUZ3TcRB68HLz6kY2UodiwvR9kb5HHl2IoTcgeA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
{"cid":"bafkreiaksofke3ubp575btvrhsurvgddy4h2kishehn3jjiyko76uvbgfu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db368f95cf8e76a-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:31 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1UuYsUHhINgHOrjI58P6cQN5rhZLj8Jrxwwz36vkWX3cwMfEf6FSZXQsoqdx3iIuqajtvozfW%2Ftd8vt8lmJ%2BFGbXIq8GZoMqRMIOayp35Mo0zvizA5Z5Wjwbyhdc4XoeWwGj2Q%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can retrieve pin with name 'b66a39e2-4c6c-499f-a37e-89e16d12ac53' via the 'exact' TextMatchingStrategy - ❌ FAILED

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
GET https://pin.crustcode.com/psa/pins?name=b66a39e2-4c6c-499f-a37e-89e16d12ac53&match=exact
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
  "cf-ray": "7db3692cdf453ace-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:43 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eVJGnEXfYg0mrAFt%2Bqe1IcOwOVGigm9k%2FoEddasJKEHc16bzphd%2FHZrReLLmG3K555OPJCdQ1Plh29XsYc3nHQwp9A5Qt0zPZx1KjjfVO8X3VvnDa434cHk5OC9iTz6%2Bx9Lacg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can retrieve pin with name 'B66A39E2-4C6C-499F-A37E-89E16D12AC53' via the 'iexact' TextMatchingStrategy - ❌ FAILED

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
GET https://pin.crustcode.com/psa/pins?name=B66A39E2-4C6C-499F-A37E-89E16D12AC53&match=iexact
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
  "cf-ray": "7db369462f45e98b-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:45 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=93dRnpWS9Xp8RqLOTVlsZEX%2BTRm1l4oErdZ5BUO5uo9fLAHPErtzSMLDpbWk4xR36y1MFWFsm%2B1rLZCxv3oCyX11w0bd1t3OJtM%2FgGMNWO6zkqOUJ9ncVO1519gBrVrRgwr8NQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can retrieve pin with name '4c6c-499f-a37e-89e' via the 'partial' TextMatchingStrategy - ❌ FAILED

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
GET https://pin.crustcode.com/psa/pins?name=4c6c-499f-a37e-89e&match=partial
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
  "cf-ray": "7db369570cdd4671-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:50 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e8yYTVeFaqTHloUeD8KzCYIYfEn%2Fp6QKR%2FIZiujMqgdF2wTmK6NQ3hTV7Cmz2ioMw01el3Nw%2FHsbZCfP0DeJvI5CVBCbl1IR9EeeA%2FOMzfIpnl9yMZSAV0lzT7xszaGknEmzUw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can retrieve pin with name '4C6C-499F-A37E-89E' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsGetRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:217:26)
    at async PinsApi.pinsGet (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:232:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/matchPin.ts:15:27)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://pin.crustcode.com/psa/pins?name=4C6C-499F-A37E-89E&match=ipartial
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
502 Bad Gateway
```
##### Headers
```json
{
  "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  "cf-ray": "7db369728d6de5ee-DFW",
  "connection": "close",
  "content-type": "text/html; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:59 GMT",
  "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
  "referrer-policy": "same-origin",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-frame-options": "SAMEORIGIN"
}
```
##### Body
```json
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>


<title>pin.crustcode.com | 502: Bad gateway</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/main.css" />


</head>
<body>
<div id="cf-wrapper">

    

    <div id="cf-error-details" class="p-0">
        <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
            <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
              
              <span class="inline-block">Bad gateway</span>
              <span class="code-label">Error code 502</span>
            </h1>
            <div>
               Visit <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
            </div>
            <div class="mt-3">2023-06-22 09:19:59 UTC</div>
        </header>
        
        <div class="my-8 bg-gradient-gray">
            <div class="w-240 lg:w-full mx-auto">
                <div class="clearfix md:px-8">
                  
<div id="cf-browser-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">You</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Browser
    
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-cloudflare-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    <span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    </a>
  </div>
  <span class="md:block w-full truncate">Dallas</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    Cloudflare
    </a>
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-host-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">pin.crustcode.com</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Host
    
  </h3>
  <span class="leading-1.3 text-2xl text-red-error">Error</span>
</div>

                </div>
              
            </div>
        </div>

        <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
            <div class="clearfix">
                <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
                    <p>The web server reported a bad gateway error.</p>
                </div>
              
                <div class="w-1/2 md:w-full float-left leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
                    <p class="mb-6">Please try again in a few minutes.</p>
                </div>
            </div>
              
        </div>

        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
  <p class="text-13">
    <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7db369728d6de5ee</strong></span>
    <span class="cf-footer-separator sm:hidden">&bull;</span>
    <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
      Your IP:
      <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
      <span class="hidden" id="cf-footer-ip">40.122.235.118</span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
    </span>
    <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" id="brand_link" target="_blank">Cloudflare</a></span>
    
  </p>
  <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
</div><!-- /.error-footer -->


    </div>
</div>
</body>
</html>


```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create a pin with name='b66a39e2-4c6c-499f-a37e-89e16d12ac53' - ❌ FAILED

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

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsGetRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:217:26)
    at async PinsApi.pinsGet (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:232:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/matchPin.ts:15:27)

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
{"cid":"bafkreih7gvvxcgapanegjo3auxcmusk26tv6gdz2dycps2ja3egqomnadq","name":"b66a39e2-4c6c-499f-a37e-89e16d12ac53","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3691abca445e4-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:19:38 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kW5jtz0ntZknn94ZrAtelmBFbx6DY8xJLCeIGVlJE6tYoMfcfuEe7hs1iKPisrOMlktkee7z4RVZ6uIq%2BuIrckCL6MWknsKnn4r1ESTsnM4t8o7rTPnXGX2INn6Ns%2BL5mA7TlA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreif6aldgnrcepmgr643omtbwjnjjy2nx4lzren56hb5teflz6wk5tu' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

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
{"cid":"bafkreif6aldgnrcepmgr643omtbwjnjjy2nx4lzren56hb5teflz6wk5tu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
502 Bad Gateway
```
##### Headers
```json
{
  "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  "cf-ray": "7db369b69e18345c-DFW",
  "connection": "close",
  "content-type": "text/html; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:20:01 GMT",
  "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
  "referrer-policy": "same-origin",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-frame-options": "SAMEORIGIN"
}
```
##### Body
```json
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>


<title>pin.crustcode.com | 502: Bad gateway</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/main.css" />


</head>
<body>
<div id="cf-wrapper">

    

    <div id="cf-error-details" class="p-0">
        <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
            <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
              
              <span class="inline-block">Bad gateway</span>
              <span class="code-label">Error code 502</span>
            </h1>
            <div>
               Visit <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
            </div>
            <div class="mt-3">2023-06-22 09:20:01 UTC</div>
        </header>
        
        <div class="my-8 bg-gradient-gray">
            <div class="w-240 lg:w-full mx-auto">
                <div class="clearfix md:px-8">
                  
<div id="cf-browser-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">You</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Browser
    
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-cloudflare-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    <span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    </a>
  </div>
  <span class="md:block w-full truncate">Dallas</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    Cloudflare
    </a>
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-host-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">pin.crustcode.com</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Host
    
  </h3>
  <span class="leading-1.3 text-2xl text-red-error">Error</span>
</div>

                </div>
              
            </div>
        </div>

        <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
            <div class="clearfix">
                <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
                    <p>The web server reported a bad gateway error.</p>
                </div>
              
                <div class="w-1/2 md:w-full float-left leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
                    <p class="mb-6">Please try again in a few minutes.</p>
                </div>
            </div>
              
        </div>

        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
  <p class="text-13">
    <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7db369b69e18345c</strong></span>
    <span class="cf-footer-separator sm:hidden">&bull;</span>
    <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
      Your IP:
      <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
      <span class="hidden" id="cf-footer-ip">40.122.235.118</span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
    </span>
    <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" id="brand_link" target="_blank">Cloudflare</a></span>
    
  </p>
  <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
</div><!-- /.error-footer -->


    </div>
</div>
</body>
</html>


```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreicigbfb3jg7g7udegwgsh2rj4ip53qnk4qdgvwjf42iunm4nnjpja' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

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
{"cid":"bafkreicigbfb3jg7g7udegwgsh2rj4ip53qnk4qdgvwjf42iunm4nnjpja","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
502 Bad Gateway
```
##### Headers
```json
{
  "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  "cf-ray": "7db369bcec43aa46-DFW",
  "connection": "close",
  "content-type": "text/html; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:20:02 GMT",
  "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
  "referrer-policy": "same-origin",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-frame-options": "SAMEORIGIN"
}
```
##### Body
```json
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>


<title>pin.crustcode.com | 502: Bad gateway</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/main.css" />


</head>
<body>
<div id="cf-wrapper">

    

    <div id="cf-error-details" class="p-0">
        <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
            <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
              
              <span class="inline-block">Bad gateway</span>
              <span class="code-label">Error code 502</span>
            </h1>
            <div>
               Visit <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
            </div>
            <div class="mt-3">2023-06-22 09:20:02 UTC</div>
        </header>
        
        <div class="my-8 bg-gradient-gray">
            <div class="w-240 lg:w-full mx-auto">
                <div class="clearfix md:px-8">
                  
<div id="cf-browser-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">You</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Browser
    
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-cloudflare-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    <span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    </a>
  </div>
  <span class="md:block w-full truncate">Dallas</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    Cloudflare
    </a>
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-host-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">pin.crustcode.com</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Host
    
  </h3>
  <span class="leading-1.3 text-2xl text-red-error">Error</span>
</div>

                </div>
              
            </div>
        </div>

        <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
            <div class="clearfix">
                <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
                    <p>The web server reported a bad gateway error.</p>
                </div>
              
                <div class="w-1/2 md:w-full float-left leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
                    <p class="mb-6">Please try again in a few minutes.</p>
                </div>
            </div>
              
        </div>

        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
  <p class="text-13">
    <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7db369bcec43aa46</strong></span>
    <span class="cf-footer-separator sm:hidden">&bull;</span>
    <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
      Your IP:
      <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
      <span class="hidden" id="cf-footer-ip">40.122.235.118</span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
    </span>
    <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" id="brand_link" target="_blank">Cloudflare</a></span>
    
  </p>
  <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
</div><!-- /.error-footer -->


    </div>
</div>
</body>
</html>


```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreiaeaf7nyqraguej4p7d6zgnnf7egsoosgdivslolydvqsa6ok4p74' - ❌ FAILED

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
{"cid":"bafkreiaeaf7nyqraguej4p7d6zgnnf7egsoosgdivslolydvqsa6ok4p74","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369c32856aa49-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:05 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lkKj64UqDSP5Mb6eomgWnZWigDFudy1YXwaesSaLNfc%2FWW1t71u%2BPd5jOganObKDtkpe61D20jx35Znoshrx9TuOCGxoTE%2BGNvBOjoGoWy2b%2FRofaB%2BjTxgweK6HZScN5LnrlQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreidf4tw4zwih3rdkhfvlcrhwrwhnehfzcnwdzqx7rvxhmosnscycpe' - ❌ FAILED

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
{"cid":"bafkreidf4tw4zwih3rdkhfvlcrhwrwhnehfzcnwdzqx7rvxhmosnscycpe","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369d16ee60b99-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:05 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h4ksLHD1eJRSNMxdV7A93bvajgOePo1fSFXLDvSyiQKgvQnwLz5glyE02m6Ggx4OMWilSzsJNAO%2Fw4%2FCBJdU5EBUo3n90zOOEjNl%2FJZ1P71bhctlO3l%2Bo93KJmapU2jA01Gdfw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreifky7r2rqtnfnjvnib4i7tf534uwwctdcb2pnynxukgf2ipveukiq' - ❌ FAILED

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
{"cid":"bafkreifky7r2rqtnfnjvnib4i7tf534uwwctdcb2pnynxukgf2ipveukiq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369d5d8e43ace-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:06 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bw3arpFoqnQ1FMW1U8I2AUZULMFGOCQUwMy1sOvmpcB9huS7qmrzcs4NfJXrHJU%2FmMEmChKOWAkGgxQGdlScefWgaOslQ5CRl3FMHRX5d%2F1Kp14tkUZHEuYNsDNaW3tEiuWXGw%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreiddhonmbv3i3w2cnhqmmhuxnlmrdybfbkmjeoxlav3qpnyoosj4ni' - ❌ FAILED

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
{"cid":"bafkreiddhonmbv3i3w2cnhqmmhuxnlmrdybfbkmjeoxlav3qpnyoosj4ni","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369dc297ca9f2-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:07 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CKG6Obuy56p8tIKNh74MUEyJGURJtee7tDqFDAbljjm73REgrWPdCdgEGQZhLBWzblXoS6nWS3xvDJV%2F9AIn5sAVNbIOQTMkoIHbnnmNbO5qCr4Ze82wDSR4s10I%2BWNG1BTyog%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreid2u2enrfaexwhwqrjz2n5qpmfpqo5heswupbcvjr6rcxo3ots6ui' - ❌ FAILED

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
{"cid":"bafkreid2u2enrfaexwhwqrjz2n5qpmfpqo5heswupbcvjr6rcxo3ots6ui","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369e269334602-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:08 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YdU7J1cUJyT%2BQ89MT2XmrknpLUT3817XA%2Bp7aynRNImL31X67cgLYG5PePnk8EEpFrUDh%2BOc0flcO6ZiiLipg%2BuTwkPJsOjW30%2BetnsUikDhYG869AoZBx%2B1s34fXYTwdosTyg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreidkb4d262dqmd44q3csrac5x2zgnu5w2i4jtm6qq5husoofpfuyku' - ❌ FAILED

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
{"cid":"bafkreidkb4d262dqmd44q3csrac5x2zgnu5w2i4jtm6qq5husoofpfuyku","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369e8ae1f2cd6-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:09 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YiD%2B90kK3rjKoX01SpAsftth3MXq%2BzPeqN%2FaWUVDq00l5%2BKkWw35wTxK1KeQX0ttiRKie7H%2B7R%2FN%2B0NzJ424%2FjVGHQVxCt%2FMdcf6CoNlYPp%2BxrxjaizxPSPIwPRzi7HmnWsYxg%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreidbwodzsop4ttqbffi37bymf2eybo6vru4oub3ntxblfgc3hbrfm4' - ❌ FAILED

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
{"cid":"bafkreidbwodzsop4ttqbffi37bymf2eybo6vru4oub3ntxblfgc3hbrfm4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369eeec412c92-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:10 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IcQNjmNA%2FiVh9uYYWp5Fm0V2I2NgBzvZpN0uo9OkrnjP1WfY2ipos7DBnutHF0OaJn1sc%2FPhq6KQGH9pG2j9SNQeYYACa7TnwnIyiBqiYUPhzhVqkcXXGQTS51fsyh6sfFQlcA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreibqchyv7e43czasoc6r6hiomujuanvzu6gyikgonqcispc3qohumi' - ❌ FAILED

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
{"cid":"bafkreibqchyv7e43czasoc6r6hiomujuanvzu6gyikgonqcispc3qohumi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db369f528370bdd-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:11 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=daYxRxdU27n19%2FUy9dT2Iyc62aK8RI90jBBZDbQbvRDKb1r8oSkq4p7JVF%2Bm5yzfUV4TmJu2%2BR35uf385%2Fx4Guq6usp3xZ0%2F6F0FED1CbDC3rpbe1Jnzm0Eoxm9lqLMHNb0OFQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreidrago635mnflvglawsxxle42ltoi4j7bnj4nuudw5u6cnmsy43sm' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

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
{"cid":"bafkreidrago635mnflvglawsxxle42ltoi4j7bnj4nuudw5u6cnmsy43sm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
502 Bad Gateway
```
##### Headers
```json
{
  "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  "cf-ray": "7db369fb6b032e69-DFW",
  "connection": "close",
  "content-type": "text/html; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:20:12 GMT",
  "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
  "referrer-policy": "same-origin",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-frame-options": "SAMEORIGIN"
}
```
##### Body
```json
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>


<title>pin.crustcode.com | 502: Bad gateway</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/main.css" />


</head>
<body>
<div id="cf-wrapper">

    

    <div id="cf-error-details" class="p-0">
        <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
            <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
              
              <span class="inline-block">Bad gateway</span>
              <span class="code-label">Error code 502</span>
            </h1>
            <div>
               Visit <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
            </div>
            <div class="mt-3">2023-06-22 09:20:12 UTC</div>
        </header>
        
        <div class="my-8 bg-gradient-gray">
            <div class="w-240 lg:w-full mx-auto">
                <div class="clearfix md:px-8">
                  
<div id="cf-browser-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">You</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Browser
    
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-cloudflare-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    <span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    </a>
  </div>
  <span class="md:block w-full truncate">Dallas</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    Cloudflare
    </a>
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-host-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">pin.crustcode.com</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Host
    
  </h3>
  <span class="leading-1.3 text-2xl text-red-error">Error</span>
</div>

                </div>
              
            </div>
        </div>

        <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
            <div class="clearfix">
                <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
                    <p>The web server reported a bad gateway error.</p>
                </div>
              
                <div class="w-1/2 md:w-full float-left leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
                    <p class="mb-6">Please try again in a few minutes.</p>
                </div>
            </div>
              
        </div>

        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
  <p class="text-13">
    <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7db369fb6b032e69</strong></span>
    <span class="cf-footer-separator sm:hidden">&bull;</span>
    <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
      Your IP:
      <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
      <span class="hidden" id="cf-footer-ip">40.122.235.118</span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
    </span>
    <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" id="brand_link" target="_blank">Cloudflare</a></span>
    
  </p>
  <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
</div><!-- /.error-footer -->


    </div>
</div>
</body>
</html>


```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreie5vke34odr36ogntpavex6gr3wyz3oh37mfnzs6iqd7di7bbjhbu' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

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
{"cid":"bafkreie5vke34odr36ogntpavex6gr3wyz3oh37mfnzs6iqd7di7bbjhbu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
502 Bad Gateway
```
##### Headers
```json
{
  "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  "cf-ray": "7db36a01a8dfe85b-DFW",
  "connection": "close",
  "content-type": "text/html; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:20:13 GMT",
  "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
  "referrer-policy": "same-origin",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-frame-options": "SAMEORIGIN"
}
```
##### Body
```json
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>


<title>pin.crustcode.com | 502: Bad gateway</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/main.css" />


</head>
<body>
<div id="cf-wrapper">

    

    <div id="cf-error-details" class="p-0">
        <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
            <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
              
              <span class="inline-block">Bad gateway</span>
              <span class="code-label">Error code 502</span>
            </h1>
            <div>
               Visit <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
            </div>
            <div class="mt-3">2023-06-22 09:20:13 UTC</div>
        </header>
        
        <div class="my-8 bg-gradient-gray">
            <div class="w-240 lg:w-full mx-auto">
                <div class="clearfix md:px-8">
                  
<div id="cf-browser-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">You</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Browser
    
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-cloudflare-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    <span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    </a>
  </div>
  <span class="md:block w-full truncate">Dallas</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    Cloudflare
    </a>
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-host-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">pin.crustcode.com</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Host
    
  </h3>
  <span class="leading-1.3 text-2xl text-red-error">Error</span>
</div>

                </div>
              
            </div>
        </div>

        <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
            <div class="clearfix">
                <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
                    <p>The web server reported a bad gateway error.</p>
                </div>
              
                <div class="w-1/2 md:w-full float-left leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
                    <p class="mb-6">Please try again in a few minutes.</p>
                </div>
            </div>
              
        </div>

        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
  <p class="text-13">
    <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7db36a01a8dfe85b</strong></span>
    <span class="cf-footer-separator sm:hidden">&bull;</span>
    <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
      Your IP:
      <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
      <span class="hidden" id="cf-footer-ip">40.122.235.118</span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
    </span>
    <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" id="brand_link" target="_blank">Cloudflare</a></span>
    
  </p>
  <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
</div><!-- /.error-footer -->


    </div>
</div>
</body>
</html>


```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreiaxeflg27li5m2z5p7wdaq23jqmtgjdm6rpu6xja2ljddgkfzrwri' - ❌ FAILED

### Expectations (0/2 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)


### Errors during run

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

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
{"cid":"bafkreiaxeflg27li5m2z5p7wdaq23jqmtgjdm6rpu6xja2ljddgkfzrwri","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
502 Bad Gateway
```
##### Headers
```json
{
  "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  "cf-ray": "7db36a07e90b4698-DFW",
  "connection": "close",
  "content-type": "text/html; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:20:14 GMT",
  "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
  "referrer-policy": "same-origin",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-frame-options": "SAMEORIGIN"
}
```
##### Body
```json
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>


<title>pin.crustcode.com | 502: Bad gateway</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/main.css" />


</head>
<body>
<div id="cf-wrapper">

    

    <div id="cf-error-details" class="p-0">
        <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
            <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
              
              <span class="inline-block">Bad gateway</span>
              <span class="code-label">Error code 502</span>
            </h1>
            <div>
               Visit <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
            </div>
            <div class="mt-3">2023-06-22 09:20:14 UTC</div>
        </header>
        
        <div class="my-8 bg-gradient-gray">
            <div class="w-240 lg:w-full mx-auto">
                <div class="clearfix md:px-8">
                  
<div id="cf-browser-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">You</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Browser
    
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-cloudflare-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    <span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    </a>
  </div>
  <span class="md:block w-full truncate">Dallas</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    Cloudflare
    </a>
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-host-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">pin.crustcode.com</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Host
    
  </h3>
  <span class="leading-1.3 text-2xl text-red-error">Error</span>
</div>

                </div>
              
            </div>
        </div>

        <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
            <div class="clearfix">
                <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
                    <p>The web server reported a bad gateway error.</p>
                </div>
              
                <div class="w-1/2 md:w-full float-left leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
                    <p class="mb-6">Please try again in a few minutes.</p>
                </div>
            </div>
              
        </div>

        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
  <p class="text-13">
    <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7db36a07e90b4698</strong></span>
    <span class="cf-footer-separator sm:hidden">&bull;</span>
    <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
      Your IP:
      <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
      <span class="hidden" id="cf-footer-ip">40.122.235.118</span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
    </span>
    <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" id="brand_link" target="_blank">Cloudflare</a></span>
    
  </p>
  <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
</div><!-- /.error-footer -->


    </div>
</div>
</body>
</html>


```

##### Body (as JSON)
```json
null
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create new pin for testing pagination cid='bafkreifenbjxbgh5ddddsm5pvqlz5itkxwxzwiimsj7t6djearrl42zlrm' - ❌ FAILED

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
{"cid":"bafkreifenbjxbgh5ddddsm5pvqlz5itkxwxzwiimsj7t6djearrl42zlrm","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36a0e2df9ea57-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MEA8vDY0R4TwOFFmkLSswn4aQmasTXM627MJdVA0p9T1ngc8Qxg0eh3Z4jQj8zAsoh5Tx8DYskxAGn%2BCGinFbjtiGhWg3pnA1SzCNBnwWBxEJjWDMywA1Ssb91WIqomziY9bxA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
## Can create new pin for testing pagination cid='bafkreigpiuju57s5dseg6zk2s4nbk3aoywtzo3xpzadgwfdglejd4bvgeu' - ❌ FAILED

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
{"cid":"bafkreigpiuju57s5dseg6zk2s4nbk3aoywtzo3xpzadgwfdglejd4bvgeu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36a1e9b0745e4-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:17 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gaVCadP6Q%2F%2BbRwtFWgMc0TB8X3Z8j0DxMnem07%2BRgRzhZhfaWMgYj8htmgdLEyfB8KV7Y09LxL2qU1hqhxYcurDyWzuzuNtMQ1N16Ewt0Vj6Qo%2FVha%2FCTjqvtS7dhYEsogqdZA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7db36a20ec2d346e-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:18 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RtWuhv6GxDagFJHFzP4n5tcJYtPNR2uyoNLDjyCUYfYjqEBeN2tR1UbZQtwy%2FY72hLw5hiZcCzwcXGyy%2BaPHG2gDvNodFJ9kF3G0gwj%2F%2F8l4JFt9opwmp%2BcyTeJiLaiGG8vrDA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
GET https://pin.crustcode.com/psa/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2023-06-22T09%3A20%3A18.316Z
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
  "cf-ray": "7db36a22c98ea9ec-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:18 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Hljlek%2FQqSzf%2B4LR2olE4ctblsbFRXXS%2FVgLHbAtBYgE86NMwcWzoX400JTcSuw0VMcVh2WamXXRkt2Gs26LSndm4H52%2FIjXGAOnpnX3olN907DL6zTECj79F%2BcnP4IVTp8x2w%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsGetRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:217:26)
    at async PinsApi.pinsGet (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:232:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:18:27)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ TypeError: Cannot read properties of null (reading 'count')
    at testPagination (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:32:65)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async validatePinningService (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:21:7)
    at async main (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/index.ts:39:7)

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

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

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ SyntaxError: Unexpected token < in JSON at position 0
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:292:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:94:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/runtime.ts:49:26)
    at async PinsApi.pinsPostRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:259:26)
    at async PinsApi.pinsPost (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/apis/PinsApi.ts:275:26)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/get/testPagination.ts:53:29)

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
502 Bad Gateway
```
##### Headers
```json
{
  "cache-control": "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  "cf-ray": "7db369b05fdd2ca2-DFW",
  "connection": "close",
  "content-type": "text/html; charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:20:00 GMT",
  "expires": "Thu, 01 Jan 1970 00:00:01 GMT",
  "referrer-policy": "same-origin",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "x-frame-options": "SAMEORIGIN"
}
```
##### Body
```json
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>


<title>pin.crustcode.com | 502: Bad gateway</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/main.css" />


</head>
<body>
<div id="cf-wrapper">

    

    <div id="cf-error-details" class="p-0">
        <header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
            <h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
              
              <span class="inline-block">Bad gateway</span>
              <span class="code-label">Error code 502</span>
            </h1>
            <div>
               Visit <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
            </div>
            <div class="mt-3">2023-06-22 09:20:00 UTC</div>
        </header>
        
        <div class="my-8 bg-gradient-gray">
            <div class="w-240 lg:w-full mx-auto">
                <div class="clearfix md:px-8">
                  
<div id="cf-browser-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">You</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Browser
    
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-cloudflare-status" class=" relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    <span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    </a>
  </div>
  <span class="md:block w-full truncate">Dallas</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" target="_blank" rel="noopener noreferrer">
    Cloudflare
    </a>
  </h3>
  <span class="leading-1.3 text-2xl text-green-success">Working</span>
</div>

<div id="cf-host-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
  <div class="relative mb-10 md:m-0">
    
    <span class="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
    <span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
    
  </div>
  <span class="md:block w-full truncate">pin.crustcode.com</span>
  <h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
    
    Host
    
  </h3>
  <span class="leading-1.3 text-2xl text-red-error">Error</span>
</div>

                </div>
              
            </div>
        </div>

        <div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
            <div class="clearfix">
                <div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
                    <p>The web server reported a bad gateway error.</p>
                </div>
              
                <div class="w-1/2 md:w-full float-left leading-relaxed">
                    <h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
                    <p class="mb-6">Please try again in a few minutes.</p>
                </div>
            </div>
              
        </div>

        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
  <p class="text-13">
    <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7db369b05fdd2ca2</strong></span>
    <span class="cf-footer-separator sm:hidden">&bull;</span>
    <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
      Your IP:
      <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
      <span class="hidden" id="cf-footer-ip">40.122.235.118</span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
    </span>
    <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_502&utm_campaign=pin.crustcode.com" id="brand_link" target="_blank">Cloudflare</a></span>
    
  </p>
  <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
</div><!-- /.error-footer -->


    </div>
</div>
</body>
</html>


```

##### Body (as JSON)
```json
null
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
  "cf-ray": "7db36a2f3978e85b-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:20 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SVgKSDwxz1VAdQdg7uGdGWk6S6FHC387R5jJc2QpUTEcX%2B126KoYoCVxaL6bxroRZIYMNLpyjCmBgNKsWI7VU%2B5IZqnOjX0rZw8aVleKbC6IEil2Slm%2FqT1OqYQNwXNt9SmvRA%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
  "cf-ray": "7db36a28fb2be5c6-DFW",
  "connection": "close",
  "content-length": "65",
  "content-type": "application/json",
  "date": "Thu, 22 Jun 2023 09:20:19 GMT",
  "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
  "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V1J3sc%2Bydra6c5OU1ErLcY%2FnBLQXDN1nYQZDvKzCFawEdPM%2BrEOeUn9O48a9LqSovGpdZElh2NK1p98C7eWIx39LBsM4IlIHyQV72x5r4Oey1SKk5QvMUVH3z3khbaGAW5vXXQ%3D%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
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
