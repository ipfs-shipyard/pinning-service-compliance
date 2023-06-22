
<script src="./telemetry.js"></script>
# https://api.web3.storage compliance:

Execution Date: 2023-06-22T09:19:22.525Z

Revision: [d0df4e8](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/d0df4e8)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.web3.storage.md)

## Summary (9/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  🟢 [Pins post of CID 'bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma'](#pins-post-of-cid-bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma----success)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  🟢 [Can create a pin with name='b6090fc9-708d-45af-b0fc-020488b998ae'](#can-create-a-pin-with-nameb6090fc9-708d-45af-b0fc-020488b998ae----success)

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
  "cf-ray": "7db367f03e78e857-DFW",
  "connection": "close",
  "content-length": "99",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:18:48 GMT",
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
  "cf-ray": "7db367f68c10e94e-DFW",
  "connection": "close",
  "content-length": "94",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:18:49 GMT",
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
## Pins post of CID 'bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma' - 🟢 SUCCESS

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
{"cid":"bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db367fccde0e528-DFW",
  "connection": "close",
  "content-length": "541",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:18:53 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
  "status": "queued",
  "created": "2023-06-22T09:18:53.399+00:00",
  "pin": {
    "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
  "status": "queued",
  "created": "2023-06-22T09:18:53.399+00:00",
  "pin": {
    "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
  "status": "queued",
  "created": "2023-06-22T09:18:53.399Z",
  "pin": {
    "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
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
DELETE https://api.web3.storage/pins/2187bf94-7a93-416c-9b18-ecc66d23dc45
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
  "cf-ray": "7db3682779bf4680-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:18:57 GMT",
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
{"cid":"bafkreifbi23o5tose5mjt65e3lx2racisvgc3qnr7odi4k2jlowqjizkvi","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db368117bb928e4-DFW",
  "connection": "close",
  "content-length": "541",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:18:57 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "2187bf94-7a93-416c-9b18-ecc66d23dc45",
  "status": "queued",
  "created": "2023-06-22T09:18:56.834+00:00",
  "pin": {
    "cid": "bafkreifbi23o5tose5mjt65e3lx2racisvgc3qnr7odi4k2jlowqjizkvi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "2187bf94-7a93-416c-9b18-ecc66d23dc45",
  "status": "queued",
  "created": "2023-06-22T09:18:56.834+00:00",
  "pin": {
    "cid": "bafkreifbi23o5tose5mjt65e3lx2racisvgc3qnr7odi4k2jlowqjizkvi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "2187bf94-7a93-416c-9b18-ecc66d23dc45",
  "status": "queued",
  "created": "2023-06-22T09:18:56.834Z",
  "pin": {
    "cid": "bafkreifbi23o5tose5mjt65e3lx2racisvgc3qnr7odi4k2jlowqjizkvi",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
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
  "cf-ray": "7db3682aa90deb0a-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:18:58 GMT",
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
      "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
      "status": "queued",
      "created": "2023-06-22T09:18:53.399+00:00",
      "pin": {
        "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
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
      "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
      "status": "queued",
      "created": "2023-06-22T09:18:53.399+00:00",
      "pin": {
        "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
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
GET https://api.web3.storage/pins/adf1c096-c80e-4417-a1d0-3068caba243d
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
  "cf-ray": "7db3685c1e71485b-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:05 GMT",
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
GET https://api.web3.storage/pins/034313a3-d8a7-472c-8478-a471ab2779d7
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
  "cf-ray": "7db368625c74e7bf-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:07 GMT",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
  "status": "queued",
  "created": "2023-06-22T09:19:05.091+00:00",
  "pin": {
    "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
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
  "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
  "status": "queued",
  "created": "2023-06-22T09:19:05.091+00:00",
  "pin": {
    "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
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
  "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
  "status": "queued",
  "created": "2023-06-22T09:19:05.091Z",
  "pin": {
    "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid 'adf1c096-c80e-4417-a1d0-3068caba243d' can have cid 'bafkreigu73e5bru2yfpispyfh6mbkulki2fx52746c66rzebdhj6ne3ndq' replaced with 'bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y' - 🟢 SUCCESS

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
POST https://api.web3.storage/pins/adf1c096-c80e-4417-a1d0-3068caba243d
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
{"cid":"bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3684499124692-DFW",
  "connection": "close",
  "content-length": "541",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:05 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
  "status": "queued",
  "created": "2023-06-22T09:19:05.091+00:00",
  "pin": {
    "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
  "status": "queued",
  "created": "2023-06-22T09:19:05.091+00:00",
  "pin": {
    "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
  "status": "queued",
  "created": "2023-06-22T09:19:05.091Z",
  "pin": {
    "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```
## Can create and replace a pin's CID - 🟢 SUCCESS

### Expectations (7/7 successful)

  🟢 Pin exists (success)

  🟢 Could obtain requestid from new pin (adf1c096-c80e-4417-a1d0-3068caba243d) (success)

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
{"cid":"bafkreigu73e5bru2yfpispyfh6mbkulki2fx52746c66rzebdhj6ne3ndq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db36830ebd84644-DFW",
  "connection": "close",
  "content-length": "541",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:01 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "adf1c096-c80e-4417-a1d0-3068caba243d",
  "status": "queued",
  "created": "2023-06-22T09:19:01.486+00:00",
  "pin": {
    "cid": "bafkreigu73e5bru2yfpispyfh6mbkulki2fx52746c66rzebdhj6ne3ndq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "adf1c096-c80e-4417-a1d0-3068caba243d",
  "status": "queued",
  "created": "2023-06-22T09:19:01.486+00:00",
  "pin": {
    "cid": "bafkreigu73e5bru2yfpispyfh6mbkulki2fx52746c66rzebdhj6ne3ndq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "adf1c096-c80e-4417-a1d0-3068caba243d",
  "status": "queued",
  "created": "2023-06-22T09:19:01.486Z",
  "pin": {
    "cid": "bafkreigu73e5bru2yfpispyfh6mbkulki2fx52746c66rzebdhj6ne3ndq",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```
## Can retrieve pin with name 'b6090fc9-708d-45af-b0fc-020488b998ae' via the 'exact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=b6090fc9-708d-45af-b0fc-020488b998ae&match=exact
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
  "cf-ray": "7db3687dbf27478e-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:11 GMT",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
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
## Can retrieve pin with name 'B6090FC9-708D-45AF-B0FC-020488B998AE' via the 'iexact' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=B6090FC9-708D-45AF-B0FC-020488B998AE&match=iexact
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
  "cf-ray": "7db3688308c5463b-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:12 GMT",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
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
## Can retrieve pin with name '708d-45af-b0fc-020' via the 'partial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=708d-45af-b0fc-020&match=partial
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
  "cf-ray": "7db368894b434660-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:13 GMT",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
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
## Can retrieve pin with name '708D-45AF-B0FC-020' via the 'ipartial' TextMatchingStrategy - 🟢 SUCCESS

### Expectations (4/4 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Count is equal to 1 (success)

  🟢 Name matches name provided during creation (success)





### Details

#### Request
```
GET https://api.web3.storage/pins?name=708D-45AF-B0FC-020&match=ipartial
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
  "cf-ray": "7db3688f8e082cae-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:14 GMT",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
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
## Can create a pin with name='b6090fc9-708d-45af-b0fc-020488b998ae' - 🟢 SUCCESS

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
{"cid":"bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou","name":"b6090fc9-708d-45af-b0fc-020488b998ae","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "7db3686a09272e60-DFW",
  "connection": "close",
  "content-length": "587",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:10 GMT",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
  "status": "queued",
  "created": "2023-06-22T09:19:10.632+00:00",
  "pin": {
    "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
    "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```

##### Body (as JSON)
```json
{
  "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
  "status": "queued",
  "created": "2023-06-22T09:19:10.632+00:00",
  "pin": {
    "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
    "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
  "status": "queued",
  "created": "2023-06-22T09:19:10.632Z",
  "pin": {
    "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
    "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": [
    "/ip4/52.38.126.125/tcp/4001/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic-v1/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS",
    "/ip4/52.38.126.125/udp/4001/quic/p2p/12D3KooWKXwU6AHwiZvezznUsYcjvdGAcGfTUSDGsNQ8d7QewtSS"
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
  "cf-ray": "7db368992f51e73e-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:15 GMT",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
      "status": "queued",
      "created": "2023-06-22T09:19:05.091+00:00",
      "pin": {
        "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
      "status": "queued",
      "created": "2023-06-22T09:18:53.399+00:00",
      "pin": {
        "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
      "status": "queued",
      "created": "2023-06-22T09:19:05.091+00:00",
      "pin": {
        "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
      "status": "queued",
      "created": "2023-06-22T09:18:53.399+00:00",
      "pin": {
        "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
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
  "cf-ray": "7db3689f599b4859-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:16 GMT",
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
  "cf-ray": "7db36892dfc7e9b9-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:14 GMT",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
      "status": "queued",
      "created": "2023-06-22T09:19:05.091+00:00",
      "pin": {
        "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
      "status": "queued",
      "created": "2023-06-22T09:18:53.399+00:00",
      "pin": {
        "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
      "status": "queued",
      "created": "2023-06-22T09:19:05.091+00:00",
      "pin": {
        "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
      "status": "queued",
      "created": "2023-06-22T09:18:53.399+00:00",
      "pin": {
        "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
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
## Can delete pin with requestid '4241ce89-032a-4d82-823f-11fd1b7b40f3' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/4241ce89-032a-4d82-823f-11fd1b7b40f3
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
  "cf-ray": "7db368abde744618-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:18 GMT",
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
## Can delete pin with requestid '034313a3-d8a7-472c-8478-a471ab2779d7' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/034313a3-d8a7-472c-8478-a471ab2779d7
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
  "cf-ray": "7db368b22e1fe946-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:19 GMT",
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
## Can delete pin with requestid '7affb19a-78d5-46ad-b870-d640ebfbd0aa' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/7affb19a-78d5-46ad-b870-d640ebfbd0aa
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
  "cf-ray": "7db368b8682f3abe-DFW",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:20 GMT",
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
  "cf-ray": "7db368beafdc4660-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:21 GMT",
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
  "cf-ray": "7db368c21d96e8f5-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:22 GMT",
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
  "cf-ray": "7db368a5aa012d29-DFW",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Thu, 22 Jun 2023 09:19:17 GMT",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
      "status": "queued",
      "created": "2023-06-22T09:19:05.091+00:00",
      "pin": {
        "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
      "status": "queued",
      "created": "2023-06-22T09:18:53.399+00:00",
      "pin": {
        "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
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
      "requestid": "4241ce89-032a-4d82-823f-11fd1b7b40f3",
      "status": "queued",
      "created": "2023-06-22T09:19:10.632+00:00",
      "pin": {
        "cid": "bafkreihp7mte6eklrtfz7hw4ghug47fnbdxfdyk36unetnnoglafa2rnou",
        "name": "b6090fc9-708d-45af-b0fc-020488b998ae",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "034313a3-d8a7-472c-8478-a471ab2779d7",
      "status": "queued",
      "created": "2023-06-22T09:19:05.091+00:00",
      "pin": {
        "cid": "bafkreigrccjg4zt4k57hucsd7a2elr5thvoyo7b2whqxzxiru5qqh7sd2y",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        }
      },
      "delegates": []
    },
    {
      "requestid": "7affb19a-78d5-46ad-b870-d640ebfbd0aa",
      "status": "queued",
      "created": "2023-06-22T09:18:53.399+00:00",
      "pin": {
        "cid": "bafkreihx7xhvwbcifzrbcaobzfgi6234g26cpayintjaeyjvpk3ag5l7ma",
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
