
# https://api.web3.storage compliance:

Execution Date: 2022-08-24T23:06:25.911Z

Revision: [2ad9db8](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/2ad9db8)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.web3.storage.md)

## Summary (6/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza'](#pins-post-of-cid-bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0'](#can-create-a-pin-with-namee1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

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
  "cf-ray": "73ffbb93ef032c30-ORD",
  "connection": "close",
  "content-length": "99",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
  "cf-ray": "73ffbb9a1b946369-ORD",
  "connection": "close",
  "content-length": "94",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Pins post of CID 'bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza' - ❌ FAILED

### Expectations (1/2 successful)

  ❌ Response object matches api spec schema (failure)

  🟢 Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "origins" must be an array

* "_id" is not allowed

* "sourceCid" is not allowed

* "contentCid" is not allowed

* "authKey" is not allowed

* "deleted" is not allowed

* "created" is not allowed

* "updated" is not allowed

* "pins" is not allowed

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
{"cid":"bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbba0bada2dbe-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
  "status": "queued",
  "created": "2022-08-24T23:05:29.505+00:00",
  "pin": {
    "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
    "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
    "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
    "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:29.505+00:00",
    "updated": "2022-08-24T23:05:29.505+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
  "status": "queued",
  "created": "2022-08-24T23:05:29.505+00:00",
  "pin": {
    "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
    "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
    "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
    "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:29.505+00:00",
    "updated": "2022-08-24T23:05:29.505+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
  "status": "queued",
  "created": "2022-08-24T23:05:29.505Z",
  "pin": {
    "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
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
DELETE https://api.web3.storage/pins/fb10f808-2dd1-4721-b3bc-c133188cc678
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
  "cf-ray": "73ffbbb34edf86e1-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
{"cid":"bafkreidhlekgxilqh55f5t4fv7pg2khzypwtlb6tz7xjzdmztrjtm3ufrq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbbab8aec86d8-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "fb10f808-2dd1-4721-b3bc-c133188cc678",
  "status": "queued",
  "created": "2022-08-24T23:05:30.891+00:00",
  "pin": {
    "cid": "bafkreidhlekgxilqh55f5t4fv7pg2khzypwtlb6tz7xjzdmztrjtm3ufrq",
    "_id": "fb10f808-2dd1-4721-b3bc-c133188cc678",
    "sourceCid": "bafkreidhlekgxilqh55f5t4fv7pg2khzypwtlb6tz7xjzdmztrjtm3ufrq",
    "contentCid": "bafkreidhlekgxilqh55f5t4fv7pg2khzypwtlb6tz7xjzdmztrjtm3ufrq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:30.891+00:00",
    "updated": "2022-08-24T23:05:30.891+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "fb10f808-2dd1-4721-b3bc-c133188cc678",
  "status": "queued",
  "created": "2022-08-24T23:05:30.891+00:00",
  "pin": {
    "cid": "bafkreidhlekgxilqh55f5t4fv7pg2khzypwtlb6tz7xjzdmztrjtm3ufrq",
    "_id": "fb10f808-2dd1-4721-b3bc-c133188cc678",
    "sourceCid": "bafkreidhlekgxilqh55f5t4fv7pg2khzypwtlb6tz7xjzdmztrjtm3ufrq",
    "contentCid": "bafkreidhlekgxilqh55f5t4fv7pg2khzypwtlb6tz7xjzdmztrjtm3ufrq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:30.891+00:00",
    "updated": "2022-08-24T23:05:30.891+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:30.891+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "fb10f808-2dd1-4721-b3bc-c133188cc678",
  "status": "queued",
  "created": "2022-08-24T23:05:30.891Z",
  "pin": {
    "cid": "bafkreidhlekgxilqh55f5t4fv7pg2khzypwtlb6tz7xjzdmztrjtm3ufrq",
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
  "cf-ray": "73ffbbb9fb642a66-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 8,
  "results": [
    {
      "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
      "status": "queued",
      "created": "2022-08-24T23:05:29.505+00:00",
      "pin": {
        "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
        "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:29.505+00:00",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 8,
  "results": [
    {
      "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
      "status": "queued",
      "created": "2022-08-24T23:05:29.505+00:00",
      "pin": {
        "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
        "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:29.505+00:00",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 8,
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
GET https://api.web3.storage/pins/4bb98b90-9006-4317-912d-ee7eb062cbb3
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
  "cf-ray": "73ffbbd6f90086d8-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
GET https://api.web3.storage/pins/3af1bfca-ad64-4f18-827a-0fd746aef2f4
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
  "cf-ray": "73ffbbdd3fea2ade-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
  "status": "queued",
  "created": "2022-08-24T23:05:36.723+00:00",
  "pin": {
    "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
    "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:36.723+00:00",
    "updated": "2022-08-24T23:05:36.723+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
  "status": "queued",
  "created": "2022-08-24T23:05:36.723+00:00",
  "pin": {
    "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
    "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:36.723+00:00",
    "updated": "2022-08-24T23:05:36.723+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
  "status": "queued",
  "created": "2022-08-24T23:05:36.723Z",
  "pin": {
    "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid '4bb98b90-9006-4317-912d-ee7eb062cbb3' can have cid 'bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4' replaced with 'bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa' - 🟢 SUCCESS

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
POST https://api.web3.storage/pins/4bb98b90-9006-4317-912d-ee7eb062cbb3
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
{"cid":"bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbbd0bca62dbe-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
  "status": "queued",
  "created": "2022-08-24T23:05:36.723+00:00",
  "pin": {
    "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
    "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:36.723+00:00",
    "updated": "2022-08-24T23:05:36.723+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
  "status": "queued",
  "created": "2022-08-24T23:05:36.723+00:00",
  "pin": {
    "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
    "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:36.723+00:00",
    "updated": "2022-08-24T23:05:36.723+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
  "status": "queued",
  "created": "2022-08-24T23:05:36.723Z",
  "pin": {
    "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
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

  🟢 Could obtain requestid from new pin (4bb98b90-9006-4317-912d-ee7eb062cbb3) (success)

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
{"cid":"bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbbca9caa2c30-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "4bb98b90-9006-4317-912d-ee7eb062cbb3",
  "status": "queued",
  "created": "2022-08-24T23:05:35.781+00:00",
  "pin": {
    "cid": "bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4",
    "_id": "4bb98b90-9006-4317-912d-ee7eb062cbb3",
    "sourceCid": "bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4",
    "contentCid": "bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:35.781+00:00",
    "updated": "2022-08-24T23:05:35.781+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "4bb98b90-9006-4317-912d-ee7eb062cbb3",
  "status": "queued",
  "created": "2022-08-24T23:05:35.781+00:00",
  "pin": {
    "cid": "bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4",
    "_id": "4bb98b90-9006-4317-912d-ee7eb062cbb3",
    "sourceCid": "bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4",
    "contentCid": "bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:35.781+00:00",
    "updated": "2022-08-24T23:05:35.781+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:35.781+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "4bb98b90-9006-4317-912d-ee7eb062cbb3",
  "status": "queued",
  "created": "2022-08-24T23:05:35.781Z",
  "pin": {
    "cid": "bafkreic4n6yw332ghklo7x2hkcxpdlivoo5s7nb442gekkuk23fsgsrph4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can retrieve pin with name 'e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0' via the 'exact' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.web3.storage/pins?name=e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0&match=exact
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
400 Bad Request
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "73ffbbecbbd986ec-ORD",
  "connection": "close",
  "content-length": "105",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "PSA_REQUIRED_DATA",
    "details": "Instance does not have required property \"status\"."
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "PSA_REQUIRED_DATA",
    "details": "Instance does not have required property \"status\"."
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'E1EA0C8E-B40F-4A97-BF50-F78C8C4A72B0' via the 'iexact' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.web3.storage/pins?name=E1EA0C8E-B40F-4A97-BF50-F78C8C4A72B0&match=iexact
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
400 Bad Request
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "73ffbbf1abbb634a-ORD",
  "connection": "close",
  "content-length": "105",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "PSA_REQUIRED_DATA",
    "details": "Instance does not have required property \"status\"."
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "PSA_REQUIRED_DATA",
    "details": "Instance does not have required property \"status\"."
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'b40f-4a97-bf50-f78' via the 'partial' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.web3.storage/pins?name=b40f-4a97-bf50-f78&match=partial
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
400 Bad Request
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "73ffbbf8cc9f2c30-ORD",
  "connection": "close",
  "content-length": "105",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "PSA_REQUIRED_DATA",
    "details": "Instance does not have required property \"status\"."
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "PSA_REQUIRED_DATA",
    "details": "Instance does not have required property \"status\"."
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can retrieve pin with name 'B40F-4A97-BF50-F78' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

### Expectations (0/4 successful)

  ❌ Response is ok (failure)

  ❌ Result is not null (failure)

  ❌ Count is equal to 1 (failure)

  ❌ Name matches name provided during creation (failure)


### Errors during run

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)


### Details

#### Request
```
GET https://api.web3.storage/pins?name=B40F-4A97-BF50-F78&match=ipartial
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
400 Bad Request
```
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link, Count, Page, Size",
  "cf-ray": "73ffbbfd9f312dbe-ORD",
  "connection": "close",
  "content-length": "105",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "error": {
    "reason": "PSA_REQUIRED_DATA",
    "details": "Instance does not have required property \"status\"."
  }
}
```

##### Body (as JSON)
```json
{
  "error": {
    "reason": "PSA_REQUIRED_DATA",
    "details": "Instance does not have required property \"status\"."
  }
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
null
```
## Can create a pin with name='e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0' - ❌ FAILED

### Expectations (3/19 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  🟢 Name matches name provided during creation (success)

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
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

  ⚠️ Error: Invalid response caused unexpected error in pinning-service-client
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:121:19
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:115:36)

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
{"cid":"bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i","name":"e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbbe48d78812d-ORD",
  "connection": "close",
  "content-length": "3799",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
  "status": "queued",
  "created": "2022-08-24T23:05:40.294+00:00",
  "pin": {
    "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
    "_id": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
    "sourceCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
    "contentCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
    "authKey": "315318824629964106",
    "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:40.294+00:00",
    "updated": "2022-08-24T23:05:40.294+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
  "status": "queued",
  "created": "2022-08-24T23:05:40.294+00:00",
  "pin": {
    "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
    "_id": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
    "sourceCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
    "contentCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
    "authKey": "315318824629964106",
    "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:40.294+00:00",
    "updated": "2022-08-24T23:05:40.294+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
  "status": "queued",
  "created": "2022-08-24T23:05:40.294Z",
  "pin": {
    "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
    "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbc0b2a1f639f-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "86413041-40d3-4b00-8031-2453a556e930",
  "status": "queued",
  "created": "2022-08-24T23:05:46.568+00:00",
  "pin": {
    "cid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
    "_id": "86413041-40d3-4b00-8031-2453a556e930",
    "sourceCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
    "contentCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:46.568+00:00",
    "updated": "2022-08-24T23:05:46.568+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "86413041-40d3-4b00-8031-2453a556e930",
  "status": "queued",
  "created": "2022-08-24T23:05:46.568+00:00",
  "pin": {
    "cid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
    "_id": "86413041-40d3-4b00-8031-2453a556e930",
    "sourceCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
    "contentCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:46.568+00:00",
    "updated": "2022-08-24T23:05:46.568+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "86413041-40d3-4b00-8031-2453a556e930",
  "status": "queued",
  "created": "2022-08-24T23:05:46.568Z",
  "pin": {
    "cid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbc144d712c48-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "a646fba2-208e-4934-8fec-58abf076344f",
  "status": "queued",
  "created": "2022-08-24T23:05:47.796+00:00",
  "pin": {
    "cid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
    "_id": "a646fba2-208e-4934-8fec-58abf076344f",
    "sourceCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
    "contentCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:47.796+00:00",
    "updated": "2022-08-24T23:05:47.796+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "a646fba2-208e-4934-8fec-58abf076344f",
  "status": "queued",
  "created": "2022-08-24T23:05:47.796+00:00",
  "pin": {
    "cid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
    "_id": "a646fba2-208e-4934-8fec-58abf076344f",
    "sourceCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
    "contentCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:47.796+00:00",
    "updated": "2022-08-24T23:05:47.796+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "a646fba2-208e-4934-8fec-58abf076344f",
  "status": "queued",
  "created": "2022-08-24T23:05:47.796Z",
  "pin": {
    "cid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbc1b6db462e2-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "71cf32b6-99c3-4417-9298-58c9d43e6133",
  "status": "queued",
  "created": "2022-08-24T23:05:48.864+00:00",
  "pin": {
    "cid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
    "_id": "71cf32b6-99c3-4417-9298-58c9d43e6133",
    "sourceCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
    "contentCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:48.864+00:00",
    "updated": "2022-08-24T23:05:48.864+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "71cf32b6-99c3-4417-9298-58c9d43e6133",
  "status": "queued",
  "created": "2022-08-24T23:05:48.864+00:00",
  "pin": {
    "cid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
    "_id": "71cf32b6-99c3-4417-9298-58c9d43e6133",
    "sourceCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
    "contentCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:05:48.864+00:00",
    "updated": "2022-08-24T23:05:48.864+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "71cf32b6-99c3-4417-9298-58c9d43e6133",
  "status": "queued",
  "created": "2022-08-24T23:05:48.864Z",
  "pin": {
    "cid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbc229e5561e6-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
  "status": "queued",
  "created": "2022-08-24T23:06:05.281+00:00",
  "pin": {
    "cid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
    "_id": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
    "sourceCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
    "contentCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:06:05.281+00:00",
    "updated": "2022-08-24T23:06:05.281+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
  "status": "queued",
  "created": "2022-08-24T23:06:05.281+00:00",
  "pin": {
    "cid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
    "_id": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
    "sourceCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
    "contentCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:06:05.281+00:00",
    "updated": "2022-08-24T23:06:05.281+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
  "status": "queued",
  "created": "2022-08-24T23:06:05.281Z",
  "pin": {
    "cid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4' - 🟢 SUCCESS

### Expectations (2/2 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)





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
{"cid":"bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73ffbc88dd2c639f-ORD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:06 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
  "status": "queued",
  "created": "2022-08-24T23:06:06.291+00:00",
  "pin": {
    "cid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
    "_id": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
    "sourceCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
    "contentCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:06:06.291+00:00",
    "updated": "2022-08-24T23:06:06.291+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```

##### Body (as JSON)
```json
{
  "requestid": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
  "status": "queued",
  "created": "2022-08-24T23:06:06.291+00:00",
  "pin": {
    "cid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
    "_id": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
    "sourceCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
    "contentCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T23:06:06.291+00:00",
    "updated": "2022-08-24T23:06:06.291+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "requestid": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
  "status": "queued",
  "created": "2022-08-24T23:06:06.291Z",
  "pin": {
    "cid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
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
  "cf-ray": "73ffbc8eae5162e2-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
      "status": "queued",
      "created": "2022-08-24T23:06:06.291+00:00",
      "pin": {
        "cid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "_id": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
        "sourceCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "contentCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:06:06.291+00:00",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
      "status": "queued",
      "created": "2022-08-24T23:06:05.281+00:00",
      "pin": {
        "cid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "_id": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
        "sourceCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "contentCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:06:05.281+00:00",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "71cf32b6-99c3-4417-9298-58c9d43e6133",
      "status": "queued",
      "created": "2022-08-24T23:05:48.864+00:00",
      "pin": {
        "cid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "_id": "71cf32b6-99c3-4417-9298-58c9d43e6133",
        "sourceCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "contentCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:48.864+00:00",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a646fba2-208e-4934-8fec-58abf076344f",
      "status": "queued",
      "created": "2022-08-24T23:05:47.796+00:00",
      "pin": {
        "cid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "_id": "a646fba2-208e-4934-8fec-58abf076344f",
        "sourceCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "contentCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:47.796+00:00",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "86413041-40d3-4b00-8031-2453a556e930",
      "status": "queued",
      "created": "2022-08-24T23:05:46.568+00:00",
      "pin": {
        "cid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "_id": "86413041-40d3-4b00-8031-2453a556e930",
        "sourceCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "contentCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:46.568+00:00",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
      "status": "queued",
      "created": "2022-08-24T23:05:40.294+00:00",
      "pin": {
        "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "_id": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
        "sourceCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "contentCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "authKey": 315318824629964100,
        "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:40.294+00:00",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
      "status": "queued",
      "created": "2022-08-24T23:05:36.723+00:00",
      "pin": {
        "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
        "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:36.723+00:00",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
      "status": "queued",
      "created": "2022-08-24T23:05:29.505+00:00",
      "pin": {
        "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
        "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:29.505+00:00",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
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
      "requestid": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
      "status": "queued",
      "created": "2022-08-24T23:06:06.291+00:00",
      "pin": {
        "cid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "_id": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
        "sourceCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "contentCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:06:06.291+00:00",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
      "status": "queued",
      "created": "2022-08-24T23:06:05.281+00:00",
      "pin": {
        "cid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "_id": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
        "sourceCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "contentCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:06:05.281+00:00",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "71cf32b6-99c3-4417-9298-58c9d43e6133",
      "status": "queued",
      "created": "2022-08-24T23:05:48.864+00:00",
      "pin": {
        "cid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "_id": "71cf32b6-99c3-4417-9298-58c9d43e6133",
        "sourceCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "contentCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:48.864+00:00",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a646fba2-208e-4934-8fec-58abf076344f",
      "status": "queued",
      "created": "2022-08-24T23:05:47.796+00:00",
      "pin": {
        "cid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "_id": "a646fba2-208e-4934-8fec-58abf076344f",
        "sourceCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "contentCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:47.796+00:00",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "86413041-40d3-4b00-8031-2453a556e930",
      "status": "queued",
      "created": "2022-08-24T23:05:46.568+00:00",
      "pin": {
        "cid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "_id": "86413041-40d3-4b00-8031-2453a556e930",
        "sourceCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "contentCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:46.568+00:00",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
      "status": "queued",
      "created": "2022-08-24T23:05:40.294+00:00",
      "pin": {
        "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "_id": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
        "sourceCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "contentCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "authKey": 315318824629964100,
        "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:40.294+00:00",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
      "status": "queued",
      "created": "2022-08-24T23:05:36.723+00:00",
      "pin": {
        "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
        "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:36.723+00:00",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
      "status": "queued",
      "created": "2022-08-24T23:05:29.505+00:00",
      "pin": {
        "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
        "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:29.505+00:00",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
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
## Pagination: Retrieve the next page of pins - ❌ FAILED

### Expectations (2/3 successful)

  🟢 Response is ok (success)

  🟢 Result is not null (success)

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request
```
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-08-18T11%3A32%3A34.390Z
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
  "cf-ray": "73ffbc9a2a3b811a-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 6,
  "results": {}
}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ❌ FAILED

### Expectations (19/20 successful)

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

  ❌ The next page of pins doesn't contain any of previous pages pins (failure)





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
  "cf-ray": "73ffbbff0da686d8-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:05:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
      "status": "queued",
      "created": "2022-08-24T23:05:40.294+00:00",
      "pin": {
        "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "_id": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
        "sourceCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "contentCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "authKey": 315318824629964100,
        "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:40.294+00:00",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
      "status": "queued",
      "created": "2022-08-24T23:05:36.723+00:00",
      "pin": {
        "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
        "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:36.723+00:00",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
      "status": "queued",
      "created": "2022-08-24T23:05:29.505+00:00",
      "pin": {
        "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
        "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:29.505+00:00",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 10,
  "results": [
    {
      "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
      "status": "queued",
      "created": "2022-08-24T23:05:40.294+00:00",
      "pin": {
        "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "_id": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
        "sourceCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "contentCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "authKey": 315318824629964100,
        "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:40.294+00:00",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
      "status": "queued",
      "created": "2022-08-24T23:05:36.723+00:00",
      "pin": {
        "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
        "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:36.723+00:00",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
      "status": "queued",
      "created": "2022-08-24T23:05:29.505+00:00",
      "pin": {
        "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
        "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:29.505+00:00",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 10,
  "results": {}
}
```
## Can delete pin with requestid 'b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4
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
  "cf-ray": "73ffbcb9efda61e6-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Can delete pin with requestid '1999c439-14fb-4fa2-962f-8f1d1a1c8008' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/1999c439-14fb-4fa2-962f-8f1d1a1c8008
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
  "cf-ray": "73ffbcc029b886d8-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:14 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Can delete pin with requestid '71cf32b6-99c3-4417-9298-58c9d43e6133' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/71cf32b6-99c3-4417-9298-58c9d43e6133
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
  "cf-ray": "73ffbcc67a1b2d3a-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Can delete pin with requestid 'a646fba2-208e-4934-8fec-58abf076344f' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/a646fba2-208e-4934-8fec-58abf076344f
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
  "cf-ray": "73ffbccd6fa886f8-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Can delete pin with requestid '86413041-40d3-4b00-8031-2453a556e930' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/86413041-40d3-4b00-8031-2453a556e930
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
  "cf-ray": "73ffbcd30c9f811a-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Can delete pin with requestid 'f2d9d047-c463-40d9-94e9-0cf28e0461a1' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/f2d9d047-c463-40d9-94e9-0cf28e0461a1
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
  "cf-ray": "73ffbcd938158143-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Can delete pin with requestid '3af1bfca-ad64-4f18-827a-0fd746aef2f4' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/3af1bfca-ad64-4f18-827a-0fd746aef2f4
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
  "cf-ray": "73ffbcdf686361e6-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Can delete pin with requestid 'a6539ccc-7209-4e0c-8a09-d3083efde580' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/a6539ccc-7209-4e0c-8a09-d3083efde580
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
  "cf-ray": "73ffbce5b9a6636e-ORD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
## Get all Pins created before 'Thu Aug 18 2022 11:32:34 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-08-18T11%3A32%3A34.390Z
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
  "cf-ray": "73ffbcec097f2d76-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 6,
  "results": [
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 6,
  "results": {}
}
```
## Call pinsGet after deletions - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '7' (success)





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
  "cf-ray": "73ffbcfd2c8086f8-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 7,
  "results": [
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 7,
  "results": [
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
      "status": "queued",
      "created": "2022-07-02T01:50:55.51+00:00",
      "pin": {
        "cid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "_id": "51f6f412-1dab-4d5d-ab3c-a502cbee8871",
        "sourceCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "contentCid": "bafkreif2qwdefx5y53nl2aw62yo33euepva7ios2nkz5doexiu3jjkauzu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:55.51+00:00",
        "updated": "2022-07-02T01:50:55.51+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-21T23:53:20.014229+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T15:56:20.263542+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T07:30:22.176108+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4dc137bf-796b-4cfe-a177-4d9b24491045",
      "status": "queued",
      "created": "2022-07-02T01:50:49.281+00:00",
      "pin": {
        "cid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "_id": "4dc137bf-796b-4cfe-a177-4d9b24491045",
        "sourceCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "contentCid": "bafkreigznlu7jzqmuj5dy6dq5m2tesh27kcpgmbeh4astbsn5yzqeq5x7a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-07-02T01:50:49.281+00:00",
        "updated": "2022-07-02T01:50:49.281+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-05T19:03:40.63601+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T17:14:58.989626+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinError",
            "updated": "2022-08-05T16:38:31.268389+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3b11cec0-1334-4e11-811a-964220705f43",
      "status": "queued",
      "created": "2022-06-24T10:51:15.029+00:00",
      "pin": {
        "cid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "_id": "3b11cec0-1334-4e11-811a-964220705f43",
        "sourceCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "contentCid": "bafkreigncsvmj6y4277avkutztqyxg75xsu7zt4wuoaahm6yhoqzndpzwe",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-24T10:51:15.029+00:00",
        "updated": "2022-06-24T10:51:15.029+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-15T21:48:59.836557+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:47.554586+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:01:29.821603+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
      "status": "queued",
      "created": "2022-06-22T23:07:11.968+00:00",
      "pin": {
        "cid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "_id": "4980fbcd-b318-41ea-a9e3-d512e72825d1",
        "sourceCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "contentCid": "bafkreif3bnzfkncbhipdb6nvmns6dslc3q45d46wigmbwvagcnof5l643q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:11.968+00:00",
        "updated": "2022-06-22T23:07:11.968+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:59:08.888504+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T14:24:13.097348+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:45.30843+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db78b0ea-1426-4d71-8617-788021f64de2",
      "status": "queued",
      "created": "2022-06-22T23:07:06.727+00:00",
      "pin": {
        "cid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "_id": "db78b0ea-1426-4d71-8617-788021f64de2",
        "sourceCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "contentCid": "bafkreiaoiawcojrqv6t5c2byeluh6junsbhtufukai4rote4qthguxv44e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-06-22T23:07:06.727+00:00",
        "updated": "2022-06-22T23:07:06.727+00:00",
        "pins": [
          {
            "status": "PinError",
            "updated": "2022-08-23T21:58:47.312732+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "ClusterError",
            "updated": "2022-08-21T11:51:28.068719+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T00:00:35.069591+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 7,
  "results": {}
}
```
## Can delete all pins created during compliance checks - 🟢 SUCCESS

### Expectations (9/9 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Final pinsGet call returns the same count as before all compliance checks: '7' (success)





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
  "cf-ray": "73ffbcab5a1629dc-ORD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 23:06:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 15,
  "results": [
    {
      "requestid": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
      "status": "queued",
      "created": "2022-08-24T23:06:06.291+00:00",
      "pin": {
        "cid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "_id": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
        "sourceCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "contentCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:06:06.291+00:00",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
      "status": "queued",
      "created": "2022-08-24T23:06:05.281+00:00",
      "pin": {
        "cid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "_id": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
        "sourceCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "contentCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:06:05.281+00:00",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "71cf32b6-99c3-4417-9298-58c9d43e6133",
      "status": "queued",
      "created": "2022-08-24T23:05:48.864+00:00",
      "pin": {
        "cid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "_id": "71cf32b6-99c3-4417-9298-58c9d43e6133",
        "sourceCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "contentCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:48.864+00:00",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a646fba2-208e-4934-8fec-58abf076344f",
      "status": "queued",
      "created": "2022-08-24T23:05:47.796+00:00",
      "pin": {
        "cid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "_id": "a646fba2-208e-4934-8fec-58abf076344f",
        "sourceCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "contentCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:47.796+00:00",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "86413041-40d3-4b00-8031-2453a556e930",
      "status": "queued",
      "created": "2022-08-24T23:05:46.568+00:00",
      "pin": {
        "cid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "_id": "86413041-40d3-4b00-8031-2453a556e930",
        "sourceCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "contentCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:46.568+00:00",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
      "status": "queued",
      "created": "2022-08-24T23:05:40.294+00:00",
      "pin": {
        "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "_id": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
        "sourceCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "contentCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "authKey": 315318824629964100,
        "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:40.294+00:00",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
      "status": "queued",
      "created": "2022-08-24T23:05:36.723+00:00",
      "pin": {
        "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
        "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:36.723+00:00",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
      "status": "queued",
      "created": "2022-08-24T23:05:29.505+00:00",
      "pin": {
        "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
        "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:29.505+00:00",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
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
      "requestid": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
      "status": "queued",
      "created": "2022-08-24T23:06:06.291+00:00",
      "pin": {
        "cid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "_id": "b778a6f7-2ef9-42b8-b1fc-08d0cdec6cd4",
        "sourceCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "contentCid": "bafkreiaz723rmggaciuj4ydzyc736vofbuygjvcj6oiscwmuq65yvx6ew4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:06:06.291+00:00",
        "updated": "2022-08-24T23:06:06.291+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:06.291+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
      "status": "queued",
      "created": "2022-08-24T23:06:05.281+00:00",
      "pin": {
        "cid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "_id": "1999c439-14fb-4fa2-962f-8f1d1a1c8008",
        "sourceCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "contentCid": "bafkreidatrlruv3szeeraas4sucdldizsxh4i4h5jmno2lzg363d7ftona",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:06:05.281+00:00",
        "updated": "2022-08-24T23:06:05.281+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:06:05.281+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "71cf32b6-99c3-4417-9298-58c9d43e6133",
      "status": "queued",
      "created": "2022-08-24T23:05:48.864+00:00",
      "pin": {
        "cid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "_id": "71cf32b6-99c3-4417-9298-58c9d43e6133",
        "sourceCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "contentCid": "bafkreie7fdt77xgqkgmvk3am6siy6a4cqxji4c3c25zd4cvieuqs75dr7e",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:48.864+00:00",
        "updated": "2022-08-24T23:05:48.864+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:48.864+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a646fba2-208e-4934-8fec-58abf076344f",
      "status": "queued",
      "created": "2022-08-24T23:05:47.796+00:00",
      "pin": {
        "cid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "_id": "a646fba2-208e-4934-8fec-58abf076344f",
        "sourceCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "contentCid": "bafkreia2wknih3ephkb27h3jmzfjdrlqqxkufgomeyexiprts3pzdnzb4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:47.796+00:00",
        "updated": "2022-08-24T23:05:47.796+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:47.796+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "86413041-40d3-4b00-8031-2453a556e930",
      "status": "queued",
      "created": "2022-08-24T23:05:46.568+00:00",
      "pin": {
        "cid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "_id": "86413041-40d3-4b00-8031-2453a556e930",
        "sourceCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "contentCid": "bafkreiebkugqukxlhp2ucvjubqti3pp7e476usrbci5bygqtgvjyyraj54",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:46.568+00:00",
        "updated": "2022-08-24T23:05:46.568+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:46.568+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
      "status": "queued",
      "created": "2022-08-24T23:05:40.294+00:00",
      "pin": {
        "cid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "_id": "f2d9d047-c463-40d9-94e9-0cf28e0461a1",
        "sourceCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "contentCid": "bafkreifjokmstumazrcdtxyxafe6sqr4btpep2xlbe5wr4d2muuvubh64i",
        "authKey": 315318824629964100,
        "name": "e1ea0c8e-b40f-4a97-bf50-f78c8c4a72b0",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:40.294+00:00",
        "updated": "2022-08-24T23:05:40.294+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:40.294+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
      "status": "queued",
      "created": "2022-08-24T23:05:36.723+00:00",
      "pin": {
        "cid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "_id": "3af1bfca-ad64-4f18-827a-0fd746aef2f4",
        "sourceCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "contentCid": "bafkreib4e3v7brfdyqduebtde52s532oxfswm3pr4dtynjvwtuq722czfa",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:36.723+00:00",
        "updated": "2022-08-24T23:05:36.723+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:36.723+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a6539ccc-7209-4e0c-8a09-d3083efde580",
      "status": "queued",
      "created": "2022-08-24T23:05:29.505+00:00",
      "pin": {
        "cid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "_id": "a6539ccc-7209-4e0c-8a09-d3083efde580",
        "sourceCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "contentCid": "bafkreiejfocajjxcgl37ueqoipszin4ukfbtqbufdagnbzmu6f2u5wloza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T23:05:29.505+00:00",
        "updated": "2022-08-24T23:05:29.505+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T23:05:29.505+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "777bd5aa-438d-4a0f-84cb-5878114b601c",
      "status": "queued",
      "created": "2022-08-18T11:32:42.48+00:00",
      "pin": {
        "cid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "_id": "777bd5aa-438d-4a0f-84cb-5878114b601c",
        "sourceCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "contentCid": "bafkreiekbp56kaqecq6757wfz2jxel5hbaclkhyolywcsr2ihhgozuejim",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:42.48+00:00",
        "updated": "2022-08-18T11:32:42.48+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T02:34:06.42271+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T05:01:45.260579+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-19T21:33:33.784063+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:42.48+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
      "status": "queued",
      "created": "2022-08-18T11:32:34.39+00:00",
      "pin": {
        "cid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "_id": "51cf7ad5-2bad-41e2-a9ab-17189990a183",
        "sourceCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "contentCid": "bafkreidwhf7hkfnoovgfrmy7jffcbnrdtz4hsniy6ndo2nsoaxcaypkvs4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-18T11:32:34.39+00:00",
        "updated": "2022-08-18T11:32:34.39+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-20T23:27:22.580555+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-21T21:44:47.677235+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T02:33:02.888405+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-18T11:32:34.39+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
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
