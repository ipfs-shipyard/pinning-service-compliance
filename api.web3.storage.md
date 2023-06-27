
<script src="./telemetry.js"></script>
# https://api.web3.storage compliance:

Execution Date: 2023-06-27T23:03:19.989Z

Revision: [f6edd8c](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/f6edd8c)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.web3.storage.md)

## Summary (9/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq'](#pins-post-of-cid-bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='9d37aaf0-15cf-44f3-85ac-5d3a80390f88'](#can-create-a-pin-with-name9d37aaf0-15cf-44f3-85ac-5d3a80390f88----success)

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
  "cf-ray": "7de151c07cb7c612-SEA",
  "connection": "close",
  "content-length": "99",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:02:44 GMT",
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
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
  "cf-ray": "7de151c6bc8cc381-SEA",
  "connection": "close",
  "content-length": "94",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:02:45 GMT",
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
## Pins post of CID 'bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response object matches api spec schema (success)

  🟢 Pinning status is either queued, pinning, or pinned (success)





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
{"cid":"bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151ccfd5c27fe-SEA",
  "connection": "close",
  "content-length": "541",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:02:49 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
  "status": "queued",
  "created": "2023-06-27T23:02:49.023+00:00",
  "pin": {
    "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
  "status": "queued",
  "created": "2023-06-27T23:02:49.023+00:00",
  "pin": {
    "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
  "status": "queued",
  "created": "2023-06-27T23:02:49.023Z",
  "pin": {
    "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```
## The newly created pin can be immediately deleted - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Response code is 202: The Pin was deleted successfully (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/9773cfec-1db7-41c2-978b-163ac3eb2d17
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
  "cf-ray": "7de151f4dbee6805-SEA",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:02:53 GMT",
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
{"cid":"bafkreiefk7izkual76khp2r3jw32e2432zs7zysb3tl7hviodeo6k6ioym","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de151df499bc55d-SEA",
  "connection": "close",
  "content-length": "541",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:02:52 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "9773cfec-1db7-41c2-978b-163ac3eb2d17",
  "status": "queued",
  "created": "2023-06-27T23:02:52.463+00:00",
  "pin": {
    "cid": "bafkreiefk7izkual76khp2r3jw32e2432zs7zysb3tl7hviodeo6k6ioym",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "9773cfec-1db7-41c2-978b-163ac3eb2d17",
  "status": "queued",
  "created": "2023-06-27T23:02:52.463+00:00",
  "pin": {
    "cid": "bafkreiefk7izkual76khp2r3jw32e2432zs7zysb3tl7hviodeo6k6ioym",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "9773cfec-1db7-41c2-978b-163ac3eb2d17",
  "status": "queued",
  "created": "2023-06-27T23:02:52.463Z",
  "pin": {
    "cid": "bafkreiefk7izkual76khp2r3jw32e2432zs7zysb3tl7hviodeo6k6ioym",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
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
  "cf-ray": "7de151fafa63680b-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:02:55 GMT",
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
      "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
      "status": "queued",
      "created": "2023-06-27T23:02:49.023+00:00",
      "pin": {
        "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
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
      "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
      "status": "queued",
      "created": "2023-06-27T23:02:49.023+00:00",
      "pin": {
        "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
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
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.web3.storage/pins/b53fa631-f6a8-4d2d-b162-4eccabba9a17
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
  "cf-ray": "7de1522bbdbac6d5-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:02 GMT",
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
GET https://api.web3.storage/pins/fd961173-e2cb-42f6-a1c5-5989d69c4aa8
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
  "cf-ray": "7de15231faa4ebc3-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:04 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
  "status": "queued",
  "created": "2023-06-27T23:03:00.954+00:00",
  "pin": {
    "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
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
  "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
  "status": "queued",
  "created": "2023-06-27T23:03:00.954+00:00",
  "pin": {
    "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
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
  "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
  "status": "queued",
  "created": "2023-06-27T23:03:00.954Z",
  "pin": {
    "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid 'b53fa631-f6a8-4d2d-b162-4eccabba9a17' can have cid 'bafkreifr46m3cujlgfgvfzbqsnsehux4ggbcp5jjqf4xo3vajyhp7qajji' replaced with 'bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma' - 🟢 SUCCESS

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
POST https://api.web3.storage/pins/b53fa631-f6a8-4d2d-b162-4eccabba9a17
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
{"cid":"bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de152160d32ebcf-SEA",
  "connection": "close",
  "content-length": "541",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:01 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
  "status": "queued",
  "created": "2023-06-27T23:03:00.954+00:00",
  "pin": {
    "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
  "status": "queued",
  "created": "2023-06-27T23:03:00.954+00:00",
  "pin": {
    "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
  "status": "queued",
  "created": "2023-06-27T23:03:00.954Z",
  "pin": {
    "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (b53fa631-f6a8-4d2d-b162-4eccabba9a17) (success)

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
{"cid":"bafkreifr46m3cujlgfgvfzbqsnsehux4ggbcp5jjqf4xo3vajyhp7qajji","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de152023a27c4b1-SEA",
  "connection": "close",
  "content-length": "541",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:02:58 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "b53fa631-f6a8-4d2d-b162-4eccabba9a17",
  "status": "queued",
  "created": "2023-06-27T23:02:57.551+00:00",
  "pin": {
    "cid": "bafkreifr46m3cujlgfgvfzbqsnsehux4ggbcp5jjqf4xo3vajyhp7qajji",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "b53fa631-f6a8-4d2d-b162-4eccabba9a17",
  "status": "queued",
  "created": "2023-06-27T23:02:57.551+00:00",
  "pin": {
    "cid": "bafkreifr46m3cujlgfgvfzbqsnsehux4ggbcp5jjqf4xo3vajyhp7qajji",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "b53fa631-f6a8-4d2d-b162-4eccabba9a17",
  "status": "queued",
  "created": "2023-06-27T23:02:57.551Z",
  "pin": {
    "cid": "bafkreifr46m3cujlgfgvfzbqsnsehux4ggbcp5jjqf4xo3vajyhp7qajji",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```
## Can retrieve pin with name '9d37aaf0-15cf-44f3-85ac-5d3a80390f88' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=9d37aaf0-15cf-44f3-85ac-5d3a80390f88&match=exact
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
  "cf-ray": "7de152503b38ebcf-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:08 GMT",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
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
## Can retrieve pin with name '9D37AAF0-15CF-44F3-85AC-5D3A80390F88' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=9D37AAF0-15CF-44F3-85AC-5D3A80390F88&match=iexact
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
  "cf-ray": "7de152548be1f8dd-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:08 GMT",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
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
## Can retrieve pin with name '15cf-44f3-85ac-5d3' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=15cf-44f3-85ac-5d3&match=partial
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
  "cf-ray": "7de1525ada20275f-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:09 GMT",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
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
## Can retrieve pin with name '15CF-44F3-85AC-5D3' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=15CF-44F3-85AC-5D3&match=ipartial
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
  "cf-ray": "7de152610e166828-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:11 GMT",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
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
## Can create a pin with name='9d37aaf0-15cf-44f3-85ac-5d3a80390f88' - 🟢 SUCCESS

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
{"cid":"bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4","name":"9d37aaf0-15cf-44f3-85ac-5d3a80390f88","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7de1523b79662760-SEA",
  "connection": "close",
  "content-length": "587",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:07 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
  "status": "queued",
  "created": "2023-06-27T23:03:07.103+00:00",
  "pin": {
    "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
    "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
  "status": "queued",
  "created": "2023-06-27T23:03:07.103+00:00",
  "pin": {
    "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
    "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
  "status": "queued",
  "created": "2023-06-27T23:03:07.103Z",
  "pin": {
    "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
    "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/34.216.201.74/tcp/4001/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic-v1/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x",
    "/ip4/34.216.201.74/udp/4001/quic/p2p/12D3KooWMgKaTwVvn1jKv8S7KRcxtsxLv5bhWsJvpR1PikpX7P9x"
  ]
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
  "cf-ray": "7de1526d9c17ec50-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:12 GMT",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
      "status": "queued",
      "created": "2023-06-27T23:03:00.954+00:00",
      "pin": {
        "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
      "status": "queued",
      "created": "2023-06-27T23:02:49.023+00:00",
      "pin": {
        "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
      "status": "queued",
      "created": "2023-06-27T23:03:00.954+00:00",
      "pin": {
        "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
      "status": "queued",
      "created": "2023-06-27T23:02:49.023+00:00",
      "pin": {
        "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
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
  "cf-ray": "7de15273df610923-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:14 GMT",
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
  "cf-ray": "7de1526758bac612-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:11 GMT",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
      "status": "queued",
      "created": "2023-06-27T23:03:00.954+00:00",
      "pin": {
        "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
      "status": "queued",
      "created": "2023-06-27T23:02:49.023+00:00",
      "pin": {
        "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
      "status": "queued",
      "created": "2023-06-27T23:03:00.954+00:00",
      "pin": {
        "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
      "status": "queued",
      "created": "2023-06-27T23:02:49.023+00:00",
      "pin": {
        "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
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
## Can delete pin with requestid '455bd9d6-cea4-4496-b36c-3a42de592c54' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/455bd9d6-cea4-4496-b36c-3a42de592c54
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
  "cf-ray": "7de152805abfc36d-SEA",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:15 GMT",
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
## Can delete pin with requestid 'fd961173-e2cb-42f6-a1c5-5989d69c4aa8' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/fd961173-e2cb-42f6-a1c5-5989d69c4aa8
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
  "cf-ray": "7de15286aad9c531-SEA",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:16 GMT",
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
## Can delete pin with requestid '492ea9f9-4889-4fca-969c-8d1e09b85bfa' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/492ea9f9-4889-4fca-969c-8d1e09b85bfa
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
  "cf-ray": "7de1528cdf1bc670-SEA",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:17 GMT",
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
  "cf-ray": "7de1529329172841-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:19 GMT",
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
  "cf-ray": "7de15297fab316d9-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:19 GMT",
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
  "cf-ray": "7de1527a1f04eb43-SEA",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 27 Jun 2023 23:03:14 GMT",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
      "status": "queued",
      "created": "2023-06-27T23:03:00.954+00:00",
      "pin": {
        "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
      "status": "queued",
      "created": "2023-06-27T23:02:49.023+00:00",
      "pin": {
        "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
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
      "requestid": "455bd9d6-cea4-4496-b36c-3a42de592c54",
      "status": "queued",
      "created": "2023-06-27T23:03:07.103+00:00",
      "pin": {
        "cid": "bafkreiexxeccvta5jznno7h7fb5cvlpbwpunwlqnvhmzctkbon3ge74ld4",
        "name": "9d37aaf0-15cf-44f3-85ac-5d3a80390f88",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "fd961173-e2cb-42f6-a1c5-5989d69c4aa8",
      "status": "queued",
      "created": "2023-06-27T23:03:00.954+00:00",
      "pin": {
        "cid": "bafkreiete3s4wbi3jfgd7m5yhed5nemgjxsn22g3aut5nsrh4htvv5j5ma",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "492ea9f9-4889-4fca-969c-8d1e09b85bfa",
      "status": "queued",
      "created": "2023-06-27T23:02:49.023+00:00",
      "pin": {
        "cid": "bafkreihjbjarmpaaewfwe2f46jvv4nto6ctdxr5dqn6n3mluu2tf46seoq",
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
