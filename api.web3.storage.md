
# https://api.web3.storage compliance:

Execution Date: 2023-01-11T01:41:38.884Z

Revision: [a610375](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/a610375)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.web3.storage.md)

## Summary (8/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza'](#pins-post-of-cid-bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='03c348fc-440f-495f-85aa-7173533dd2ae'](#can-create-a-pin-with-name03c348fc-440f-495f-85aa-7173533dd2ae----success)

  🟢 [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----success)

  🟢 [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----success)

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
GET https://api.web3.storage/pins
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f2d6cb147d77-LAX",
  "connection": "close",
  "content-length": "99",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:11 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERROR_NO_TOKEN",
    "details": "No token found in `Authorization: Bearer ` header"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERROR_NO_TOKEN",
    "details": "No token found in `Authorization: Bearer ` header"
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
GET https://api.web3.storage/pins
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f2dd0fa77bd7-LAX",
  "connection": "close",
  "content-length": "94",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:12 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "ERROR_UNRECOGNISED_TOKEN",
    "details": "Could not parse provided API token"
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "ERROR_UNRECOGNISED_TOKEN",
    "details": "Could not parse provided API token"
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Pins post of CID 'bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "delegates" must contain at least 1 items

  
### Details

#### Request
```
POST https://api.web3.storage/pins
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
{"cid":"bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f2e359117bbb-LAX",
  "connection": "close",
  "content-length": "268",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:14 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
  "status": "queued",
  "created": "2023-01-11T01:41:13.963+00:00",
  "pin": {
    "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
  "status": "queued",
  "created": "2023-01-11T01:41:13.963+00:00",
  "pin": {
    "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
  "status": "queued",
  "created": "2023-01-11T01:41:13.963Z",
  "pin": {
    "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## The newly created pin can be immediately deleted - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/68e22c11-3d95-4f9f-b921-0e2239de34f7
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f2f899233110-LAX",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:17 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
POST https://api.web3.storage/pins
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
{"cid":"bafkreihcjs72ax6zmhnh7vboz27jftstznfl7q6ixxfflt344og4y4azui","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f2ed7fe97d10-LAX",
  "connection": "close",
  "content-length": "268",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:16 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "68e22c11-3d95-4f9f-b921-0e2239de34f7",
  "status": "queued",
  "created": "2023-01-11T01:41:15.804+00:00",
  "pin": {
    "cid": "bafkreihcjs72ax6zmhnh7vboz27jftstznfl7q6ixxfflt344og4y4azui",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "68e22c11-3d95-4f9f-b921-0e2239de34f7",
  "status": "queued",
  "created": "2023-01-11T01:41:15.804+00:00",
  "pin": {
    "cid": "bafkreihcjs72ax6zmhnh7vboz27jftstznfl7q6ixxfflt344og4y4azui",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "68e22c11-3d95-4f9f-b921-0e2239de34f7",
  "status": "queued",
  "created": "2023-01-11T01:41:15.804Z",
  "pin": {
    "cid": "bafkreihcjs72ax6zmhnh7vboz27jftstznfl7q6ixxfflt344og4y4azui",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## List pin objects (GET /pins) in all states - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 200 (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f300dc387d0d-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:18 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 44,
  "results": [
    {
      "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
      "status": "queued",
      "created": "2023-01-11T01:41:13.963+00:00",
      "pin": {
        "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "6c4188af-5c59-463f-8549-eea7d5c43a10",
      "status": "queued",
      "created": "2022-10-17T10:54:12.278+00:00",
      "pin": {
        "cid": "bafkreiek4xsnen4xbrkolhpq23skhy2aot7efbssakcaa4b574uf6ktgy4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "57c1c88d-67d8-4e46-a535-925ac74e51eb",
      "status": "queued",
      "created": "2022-10-17T10:54:10.415+00:00",
      "pin": {
        "cid": "bafkreid4b3awvqxf7igmkolbjwxkungsadu2z5qnsbxkjiudsr7vzluraa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 44,
  "results": [
    {
      "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
      "status": "queued",
      "created": "2023-01-11T01:41:13.963+00:00",
      "pin": {
        "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "6c4188af-5c59-463f-8549-eea7d5c43a10",
      "status": "queued",
      "created": "2022-10-17T10:54:12.278+00:00",
      "pin": {
        "cid": "bafkreiek4xsnen4xbrkolhpq23skhy2aot7efbssakcaa4b574uf6ktgy4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "57c1c88d-67d8-4e46-a535-925ac74e51eb",
      "status": "queued",
      "created": "2022-10-17T10:54:10.415+00:00",
      "pin": {
        "cid": "bafkreid4b3awvqxf7igmkolbjwxkungsadu2z5qnsbxkjiudsr7vzluraa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 44,
  "results": {}
}
```
## Get original pin via requestid - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.web3.storage/pins/ffd0b66a-82c6-4000-a5bd-3aaf4a2c11eb
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f3194d403215-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:22 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "PSA_RESOURCE_NOT_FOUND",
    "details": "Requested data was not found."
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "PSA_RESOURCE_NOT_FOUND",
    "details": "Requested data was not found."
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
GET https://api.web3.storage/pins/63797760-2dcc-45cc-b07b-102fb9ea55af
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f320cd7bdb9e-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:22 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
  "status": "queued",
  "created": "2023-01-11T01:41:20.698+00:00",
  "pin": {
    "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
  "status": "queued",
  "created": "2023-01-11T01:41:20.698+00:00",
  "pin": {
    "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
  "status": "queued",
  "created": "2023-01-11T01:41:20.698Z",
  "pin": {
    "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid 'ffd0b66a-82c6-4000-a5bd-3aaf4a2c11eb' can have cid 'bafkreidese25ydrji4ihkkuwnlh5yqhiw3xgkizux5dgtlzsrjnx3czhgi' replaced with 'bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.web3.storage/pins/ffd0b66a-82c6-4000-a5bd-3aaf4a2c11eb
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
{"cid":"bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f30dae2f7bbb-LAX",
  "connection": "close",
  "content-length": "268",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:21 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
  "status": "queued",
  "created": "2023-01-11T01:41:20.698+00:00",
  "pin": {
    "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
  "status": "queued",
  "created": "2023-01-11T01:41:20.698+00:00",
  "pin": {
    "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
  "status": "queued",
  "created": "2023-01-11T01:41:20.698Z",
  "pin": {
    "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (ffd0b66a-82c6-4000-a5bd-3aaf4a2c11eb) (success)

  🟢 Response is ok (success)

  🟢 Replaced pin has the new & expected CID (success)

  🟢 Replaced pin has a different requestid (success)

  🟢 Response code is 404: Original Pin's requestid cannot be found (success)

  🟢 Response code is 200: New Pin's requestid can be found (success)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
POST https://api.web3.storage/pins
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
{"cid":"bafkreidese25ydrji4ihkkuwnlh5yqhiw3xgkizux5dgtlzsrjnx3czhgi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f3076bd87ce3-LAX",
  "connection": "close",
  "content-length": "268",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:19 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "ffd0b66a-82c6-4000-a5bd-3aaf4a2c11eb",
  "status": "queued",
  "created": "2023-01-11T01:41:19.074+00:00",
  "pin": {
    "cid": "bafkreidese25ydrji4ihkkuwnlh5yqhiw3xgkizux5dgtlzsrjnx3czhgi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "ffd0b66a-82c6-4000-a5bd-3aaf4a2c11eb",
  "status": "queued",
  "created": "2023-01-11T01:41:19.074+00:00",
  "pin": {
    "cid": "bafkreidese25ydrji4ihkkuwnlh5yqhiw3xgkizux5dgtlzsrjnx3czhgi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "ffd0b66a-82c6-4000-a5bd-3aaf4a2c11eb",
  "status": "queued",
  "created": "2023-01-11T01:41:19.074Z",
  "pin": {
    "cid": "bafkreidese25ydrji4ihkkuwnlh5yqhiw3xgkizux5dgtlzsrjnx3czhgi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can retrieve pin with name '03c348fc-440f-495f-85aa-7173533dd2ae' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=03c348fc-440f-495f-85aa-7173533dd2ae&match=exact
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f3297c883110-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:24 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
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
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
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
## Can retrieve pin with name '03C348FC-440F-495F-85AA-7173533DD2AE' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=03C348FC-440F-495F-85AA-7173533DD2AE&match=iexact
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f32f7abc7d27-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:25 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
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
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
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
## Can retrieve pin with name '440f-495f-85aa-717' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=440f-495f-85aa-717&match=partial
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f335be0b2b8b-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:26 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
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
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
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
## Can retrieve pin with name '440F-495F-85AA-717' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=440F-495F-85AA-717&match=ipartial
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f33bfa817b4d-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:27 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 1,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
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
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
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
## Can create a pin with name='03c348fc-440f-495f-85aa-7173533dd2ae' - 🟢 SUCCESS

### Expectations (19/19 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
POST https://api.web3.storage/pins
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
{"cid":"bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda","name":"03c348fc-440f-495f-85aa-7173533dd2ae","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
```

#### Response
```
202 Accepted
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f322fa3f2af0-LAX",
  "connection": "close",
  "content-length": "313",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:24 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
  "status": "queued",
  "created": "2023-01-11T01:41:23.83+00:00",
  "pin": {
    "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
    "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
  "status": "queued",
  "created": "2023-01-11T01:41:23.83+00:00",
  "pin": {
    "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
    "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
  "status": "queued",
  "created": "2023-01-11T01:41:23.830Z",
  "pin": {
    "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
    "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
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
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f34f1e487cd4-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:30 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 46,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
      "status": "queued",
      "created": "2023-01-11T01:41:20.698+00:00",
      "pin": {
        "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
      "status": "queued",
      "created": "2023-01-11T01:41:13.963+00:00",
      "pin": {
        "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 46,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
      "status": "queued",
      "created": "2023-01-11T01:41:20.698+00:00",
      "pin": {
        "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
      "status": "queued",
      "created": "2023-01-11T01:41:13.963+00:00",
      "pin": {
        "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 46,
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
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-10-17T10%3A54%3A14.077Z
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f355588d3110-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:32 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 36,
  "results": [
    {
      "requestid": "6c4188af-5c59-463f-8549-eea7d5c43a10",
      "status": "queued",
      "created": "2022-10-17T10:54:12.278+00:00",
      "pin": {
        "cid": "bafkreiek4xsnen4xbrkolhpq23skhy2aot7efbssakcaa4b574uf6ktgy4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "57c1c88d-67d8-4e46-a535-925ac74e51eb",
      "status": "queued",
      "created": "2022-10-17T10:54:10.415+00:00",
      "pin": {
        "cid": "bafkreid4b3awvqxf7igmkolbjwxkungsadu2z5qnsbxkjiudsr7vzluraa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "85bc1cac-2551-4cef-bb47-94a9e9c1f03f",
      "status": "queued",
      "created": "2022-10-17T10:54:08.553+00:00",
      "pin": {
        "cid": "bafkreiafa7kmgqzpgl7maq6yg7v2n6dmj6jeteqd22oumucy3yyxn5bbx4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "b9286ddf-313f-4b16-9059-517e9c06d029",
      "status": "pinning",
      "created": "2022-10-17T10:54:06.632+00:00",
      "pin": {
        "cid": "bafkreiget4sgspmcklkvmivb2ueewbwfhmdcqgginwf7umrcnyarbblbsi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "8891d2a7-ccc6-48fc-b719-393ac8c06282",
      "status": "queued",
      "created": "2022-10-17T10:54:04.299+00:00",
      "pin": {
        "cid": "bafkreiaqcql2tff74qgyqt6nfkf6kixfcxqnd63lzz6mujeytp25gky664",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "02718f0b-b14e-4fb9-855a-143ee7f00687",
      "status": "queued",
      "created": "2022-10-17T10:54:02.029+00:00",
      "pin": {
        "cid": "bafkreie4er7zjmojgufrifks7mnirdk2zpmw7y6m47dq3fe3s7hsxudamy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7d503534-05fc-4a8a-9ee5-11cde379b12e",
      "status": "queued",
      "created": "2022-10-17T10:53:59.297+00:00",
      "pin": {
        "cid": "bafkreiaybq4veh7ijlg4adod32lnlpaalxxmgmvhpwshvckt42pf5dqdra",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "1e2aba93-b64c-40d6-8287-0b32dd700eb0",
      "status": "queued",
      "created": "2022-10-17T10:53:57.051+00:00",
      "pin": {
        "cid": "bafkreiccgqgqvp6v7fmroemij2wfpybm3okb35ltlw7jiyfjzunctdet2a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "cfa75938-cc95-4b3c-8352-39e28536e9db",
      "status": "queued",
      "created": "2022-10-17T10:52:20.916+00:00",
      "pin": {
        "cid": "bafkreihzxljd3eoafwg23pcigzmqnifyxjvmeu2iro6gm62ioj6k5tv6gq",
        "name": "7b73063f-9501-4c32-81c7-2b2dffcb0e49",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d3fcfc5a-33aa-4a3d-b5d6-364ea267a598",
      "status": "queued",
      "created": "2022-10-17T10:52:17.205+00:00",
      "pin": {
        "cid": "bafkreie2h622kp3stt2jzpdp33g7ysuknigbkzi7yt4lnhmb2ikebmnlpy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 36,
  "results": [
    {
      "requestid": "6c4188af-5c59-463f-8549-eea7d5c43a10",
      "status": "queued",
      "created": "2022-10-17T10:54:12.278+00:00",
      "pin": {
        "cid": "bafkreiek4xsnen4xbrkolhpq23skhy2aot7efbssakcaa4b574uf6ktgy4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "57c1c88d-67d8-4e46-a535-925ac74e51eb",
      "status": "queued",
      "created": "2022-10-17T10:54:10.415+00:00",
      "pin": {
        "cid": "bafkreid4b3awvqxf7igmkolbjwxkungsadu2z5qnsbxkjiudsr7vzluraa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "85bc1cac-2551-4cef-bb47-94a9e9c1f03f",
      "status": "queued",
      "created": "2022-10-17T10:54:08.553+00:00",
      "pin": {
        "cid": "bafkreiafa7kmgqzpgl7maq6yg7v2n6dmj6jeteqd22oumucy3yyxn5bbx4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "b9286ddf-313f-4b16-9059-517e9c06d029",
      "status": "pinning",
      "created": "2022-10-17T10:54:06.632+00:00",
      "pin": {
        "cid": "bafkreiget4sgspmcklkvmivb2ueewbwfhmdcqgginwf7umrcnyarbblbsi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "8891d2a7-ccc6-48fc-b719-393ac8c06282",
      "status": "queued",
      "created": "2022-10-17T10:54:04.299+00:00",
      "pin": {
        "cid": "bafkreiaqcql2tff74qgyqt6nfkf6kixfcxqnd63lzz6mujeytp25gky664",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "02718f0b-b14e-4fb9-855a-143ee7f00687",
      "status": "queued",
      "created": "2022-10-17T10:54:02.029+00:00",
      "pin": {
        "cid": "bafkreie4er7zjmojgufrifks7mnirdk2zpmw7y6m47dq3fe3s7hsxudamy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7d503534-05fc-4a8a-9ee5-11cde379b12e",
      "status": "queued",
      "created": "2022-10-17T10:53:59.297+00:00",
      "pin": {
        "cid": "bafkreiaybq4veh7ijlg4adod32lnlpaalxxmgmvhpwshvckt42pf5dqdra",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "1e2aba93-b64c-40d6-8287-0b32dd700eb0",
      "status": "queued",
      "created": "2022-10-17T10:53:57.051+00:00",
      "pin": {
        "cid": "bafkreiccgqgqvp6v7fmroemij2wfpybm3okb35ltlw7jiyfjzunctdet2a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "cfa75938-cc95-4b3c-8352-39e28536e9db",
      "status": "queued",
      "created": "2022-10-17T10:52:20.916+00:00",
      "pin": {
        "cid": "bafkreihzxljd3eoafwg23pcigzmqnifyxjvmeu2iro6gm62ioj6k5tv6gq",
        "name": "7b73063f-9501-4c32-81c7-2b2dffcb0e49",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d3fcfc5a-33aa-4a3d-b5d6-364ea267a598",
      "status": "queued",
      "created": "2022-10-17T10:52:17.205+00:00",
      "pin": {
        "cid": "bafkreie2h622kp3stt2jzpdp33g7ysuknigbkzi7yt4lnhmb2ikebmnlpy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 36,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - 🟢 SUCCESS

### Expectations (10/10 successful)

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
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f341b8367ea1-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:30 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 46,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
      "status": "queued",
      "created": "2023-01-11T01:41:20.698+00:00",
      "pin": {
        "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
      "status": "queued",
      "created": "2023-01-11T01:41:13.963+00:00",
      "pin": {
        "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 46,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
      "status": "queued",
      "created": "2023-01-11T01:41:20.698+00:00",
      "pin": {
        "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
      "status": "queued",
      "created": "2023-01-11T01:41:13.963+00:00",
      "pin": {
        "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 46,
  "results": {}
}
```
## Can delete pin with requestid '5e4ecc94-2cf4-469d-b3d1-970385d57ff9' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/5e4ecc94-2cf4-469d-b3d1-970385d57ff9
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f3622cc62efb-LAX",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:34 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid '63797760-2dcc-45cc-b07b-102fb9ea55af' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/63797760-2dcc-45cc-b07b-102fb9ea55af
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f36a2dff7e94-LAX",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:35 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Can delete pin with requestid 'bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f3721c7b7d5f-LAX",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:36 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
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
## Get all Pins created before 'Mon Oct 17 2022 10:54:14 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-10-17T10%3A54%3A14.077Z
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f3773ed07d77-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:37 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 36,
  "results": [
    {
      "requestid": "6c4188af-5c59-463f-8549-eea7d5c43a10",
      "status": "queued",
      "created": "2022-10-17T10:54:12.278+00:00",
      "pin": {
        "cid": "bafkreiek4xsnen4xbrkolhpq23skhy2aot7efbssakcaa4b574uf6ktgy4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "57c1c88d-67d8-4e46-a535-925ac74e51eb",
      "status": "queued",
      "created": "2022-10-17T10:54:10.415+00:00",
      "pin": {
        "cid": "bafkreid4b3awvqxf7igmkolbjwxkungsadu2z5qnsbxkjiudsr7vzluraa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "85bc1cac-2551-4cef-bb47-94a9e9c1f03f",
      "status": "queued",
      "created": "2022-10-17T10:54:08.553+00:00",
      "pin": {
        "cid": "bafkreiafa7kmgqzpgl7maq6yg7v2n6dmj6jeteqd22oumucy3yyxn5bbx4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "b9286ddf-313f-4b16-9059-517e9c06d029",
      "status": "pinning",
      "created": "2022-10-17T10:54:06.632+00:00",
      "pin": {
        "cid": "bafkreiget4sgspmcklkvmivb2ueewbwfhmdcqgginwf7umrcnyarbblbsi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "8891d2a7-ccc6-48fc-b719-393ac8c06282",
      "status": "queued",
      "created": "2022-10-17T10:54:04.299+00:00",
      "pin": {
        "cid": "bafkreiaqcql2tff74qgyqt6nfkf6kixfcxqnd63lzz6mujeytp25gky664",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "02718f0b-b14e-4fb9-855a-143ee7f00687",
      "status": "queued",
      "created": "2022-10-17T10:54:02.029+00:00",
      "pin": {
        "cid": "bafkreie4er7zjmojgufrifks7mnirdk2zpmw7y6m47dq3fe3s7hsxudamy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7d503534-05fc-4a8a-9ee5-11cde379b12e",
      "status": "queued",
      "created": "2022-10-17T10:53:59.297+00:00",
      "pin": {
        "cid": "bafkreiaybq4veh7ijlg4adod32lnlpaalxxmgmvhpwshvckt42pf5dqdra",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "1e2aba93-b64c-40d6-8287-0b32dd700eb0",
      "status": "queued",
      "created": "2022-10-17T10:53:57.051+00:00",
      "pin": {
        "cid": "bafkreiccgqgqvp6v7fmroemij2wfpybm3okb35ltlw7jiyfjzunctdet2a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "cfa75938-cc95-4b3c-8352-39e28536e9db",
      "status": "queued",
      "created": "2022-10-17T10:52:20.916+00:00",
      "pin": {
        "cid": "bafkreihzxljd3eoafwg23pcigzmqnifyxjvmeu2iro6gm62ioj6k5tv6gq",
        "name": "7b73063f-9501-4c32-81c7-2b2dffcb0e49",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d3fcfc5a-33aa-4a3d-b5d6-364ea267a598",
      "status": "queued",
      "created": "2022-10-17T10:52:17.205+00:00",
      "pin": {
        "cid": "bafkreie2h622kp3stt2jzpdp33g7ysuknigbkzi7yt4lnhmb2ikebmnlpy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 36,
  "results": [
    {
      "requestid": "6c4188af-5c59-463f-8549-eea7d5c43a10",
      "status": "queued",
      "created": "2022-10-17T10:54:12.278+00:00",
      "pin": {
        "cid": "bafkreiek4xsnen4xbrkolhpq23skhy2aot7efbssakcaa4b574uf6ktgy4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "57c1c88d-67d8-4e46-a535-925ac74e51eb",
      "status": "queued",
      "created": "2022-10-17T10:54:10.415+00:00",
      "pin": {
        "cid": "bafkreid4b3awvqxf7igmkolbjwxkungsadu2z5qnsbxkjiudsr7vzluraa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "85bc1cac-2551-4cef-bb47-94a9e9c1f03f",
      "status": "queued",
      "created": "2022-10-17T10:54:08.553+00:00",
      "pin": {
        "cid": "bafkreiafa7kmgqzpgl7maq6yg7v2n6dmj6jeteqd22oumucy3yyxn5bbx4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "b9286ddf-313f-4b16-9059-517e9c06d029",
      "status": "pinning",
      "created": "2022-10-17T10:54:06.632+00:00",
      "pin": {
        "cid": "bafkreiget4sgspmcklkvmivb2ueewbwfhmdcqgginwf7umrcnyarbblbsi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "8891d2a7-ccc6-48fc-b719-393ac8c06282",
      "status": "queued",
      "created": "2022-10-17T10:54:04.299+00:00",
      "pin": {
        "cid": "bafkreiaqcql2tff74qgyqt6nfkf6kixfcxqnd63lzz6mujeytp25gky664",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "02718f0b-b14e-4fb9-855a-143ee7f00687",
      "status": "queued",
      "created": "2022-10-17T10:54:02.029+00:00",
      "pin": {
        "cid": "bafkreie4er7zjmojgufrifks7mnirdk2zpmw7y6m47dq3fe3s7hsxudamy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7d503534-05fc-4a8a-9ee5-11cde379b12e",
      "status": "queued",
      "created": "2022-10-17T10:53:59.297+00:00",
      "pin": {
        "cid": "bafkreiaybq4veh7ijlg4adod32lnlpaalxxmgmvhpwshvckt42pf5dqdra",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "1e2aba93-b64c-40d6-8287-0b32dd700eb0",
      "status": "queued",
      "created": "2022-10-17T10:53:57.051+00:00",
      "pin": {
        "cid": "bafkreiccgqgqvp6v7fmroemij2wfpybm3okb35ltlw7jiyfjzunctdet2a",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "cfa75938-cc95-4b3c-8352-39e28536e9db",
      "status": "queued",
      "created": "2022-10-17T10:52:20.916+00:00",
      "pin": {
        "cid": "bafkreihzxljd3eoafwg23pcigzmqnifyxjvmeu2iro6gm62ioj6k5tv6gq",
        "name": "7b73063f-9501-4c32-81c7-2b2dffcb0e49",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d3fcfc5a-33aa-4a3d-b5d6-364ea267a598",
      "status": "queued",
      "created": "2022-10-17T10:52:17.205+00:00",
      "pin": {
        "cid": "bafkreie2h622kp3stt2jzpdp33g7ysuknigbkzi7yt4lnhmb2ikebmnlpy",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 36,
  "results": {}
}
```
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '43' (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f37c8969523f-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:38 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 43,
  "results": [
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "6c4188af-5c59-463f-8549-eea7d5c43a10",
      "status": "queued",
      "created": "2022-10-17T10:54:12.278+00:00",
      "pin": {
        "cid": "bafkreiek4xsnen4xbrkolhpq23skhy2aot7efbssakcaa4b574uf6ktgy4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "57c1c88d-67d8-4e46-a535-925ac74e51eb",
      "status": "queued",
      "created": "2022-10-17T10:54:10.415+00:00",
      "pin": {
        "cid": "bafkreid4b3awvqxf7igmkolbjwxkungsadu2z5qnsbxkjiudsr7vzluraa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "85bc1cac-2551-4cef-bb47-94a9e9c1f03f",
      "status": "queued",
      "created": "2022-10-17T10:54:08.553+00:00",
      "pin": {
        "cid": "bafkreiafa7kmgqzpgl7maq6yg7v2n6dmj6jeteqd22oumucy3yyxn5bbx4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 43,
  "results": [
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "6c4188af-5c59-463f-8549-eea7d5c43a10",
      "status": "queued",
      "created": "2022-10-17T10:54:12.278+00:00",
      "pin": {
        "cid": "bafkreiek4xsnen4xbrkolhpq23skhy2aot7efbssakcaa4b574uf6ktgy4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "57c1c88d-67d8-4e46-a535-925ac74e51eb",
      "status": "queued",
      "created": "2022-10-17T10:54:10.415+00:00",
      "pin": {
        "cid": "bafkreid4b3awvqxf7igmkolbjwxkungsadu2z5qnsbxkjiudsr7vzluraa",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "85bc1cac-2551-4cef-bb47-94a9e9c1f03f",
      "status": "queued",
      "created": "2022-10-17T10:54:08.553+00:00",
      "pin": {
        "cid": "bafkreiafa7kmgqzpgl7maq6yg7v2n6dmj6jeteqd22oumucy3yyxn5bbx4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 43,
  "results": {}
}
```
## Can delete all pins created during compliance checks - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '43' (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
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
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "7879f35bfb8c3215-LAX",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 11 Jan 2023 01:41:33 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 46,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
      "status": "queued",
      "created": "2023-01-11T01:41:20.698+00:00",
      "pin": {
        "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
      "status": "queued",
      "created": "2023-01-11T01:41:13.963+00:00",
      "pin": {
        "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 46,
  "results": [
    {
      "requestid": "5e4ecc94-2cf4-469d-b3d1-970385d57ff9",
      "status": "queued",
      "created": "2023-01-11T01:41:23.83+00:00",
      "pin": {
        "cid": "bafkreidiachi4kxvjb3zotwep5ppnlr5wmo7flfswu5zutz3phdxndhuda",
        "name": "03c348fc-440f-495f-85aa-7173533dd2ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "63797760-2dcc-45cc-b07b-102fb9ea55af",
      "status": "queued",
      "created": "2023-01-11T01:41:20.698+00:00",
      "pin": {
        "cid": "bafkreigqxupcz7viog2uy45uq6h7ebnlatkp73gtvnkifarmsu2qtbwlh4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "bc319a3b-3e2c-42d3-ba60-2bce5c3a3bb5",
      "status": "queued",
      "created": "2023-01-11T01:41:13.963+00:00",
      "pin": {
        "cid": "bafkreicb3sfp2rslndawgwqckg3wrq4nsl52zkrgpr5odqlnu3qbqksnza",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "18b95b2f-2843-411f-b7a6-438b21e709fc",
      "status": "queued",
      "created": "2022-10-17T10:54:24.508+00:00",
      "pin": {
        "cid": "bafkreihojhodvz4zsgh6sc2sy2elrt67sfyunqtdj7eitzwgtoy7pwwndm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "e68de6ad-dce6-4796-876a-2be61656217e",
      "status": "queued",
      "created": "2022-10-17T10:54:22.001+00:00",
      "pin": {
        "cid": "bafkreiaf3dycubx3f4kkrmr6e4bkdvwrdhcuixnokfvfkywfrq7vpv47gm",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "ba1c906d-937c-438a-a43c-8ae80e786c09",
      "status": "queued",
      "created": "2022-10-17T10:54:20.438+00:00",
      "pin": {
        "cid": "bafkreidfcq7qm7b5gdmypbuoqrzpdsfjsonqnchdck63bfefaqo4zktcpi",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "d1dfa584-4c77-4f1c-ba98-127d2abc9516",
      "status": "queued",
      "created": "2022-10-17T10:54:19.386+00:00",
      "pin": {
        "cid": "bafkreidhsndzfvic55obnt54yfxpajwbb3pfrh2kh2bzdgqam7c5gqkl7u",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "3c6a7369-5d23-417f-a945-91c0d32c2baa",
      "status": "queued",
      "created": "2022-10-17T10:54:17.695+00:00",
      "pin": {
        "cid": "bafkreicrlf7q4ajkdnxtvq4k7nmdquiiqgdfhzei3ei3zmsmyvjhhffacu",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "9dbb637e-6ee8-4806-bd28-153b1d6665f6",
      "status": "queued",
      "created": "2022-10-17T10:54:15.76+00:00",
      "pin": {
        "cid": "bafkreiefrlp6chhqhtohy3m6fdxlfgqzgipzxlwudzs3jsh4fjnn2iyh6y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "205e57a9-6322-427a-a26b-2ba45ccc8c5b",
      "status": "pinning",
      "created": "2022-10-17T10:54:14.077+00:00",
      "pin": {
        "cid": "bafkreicbhou3csayfxpaxwlpi54lgvhevojsrnyhtu3vntv25sif3psaq4",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 46,
  "results": {}
}
```
