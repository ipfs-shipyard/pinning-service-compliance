
# https://api.web3.storage compliance:

Execution Date: 2022-08-24T20:38:52.419Z

Revision: [d61abcc](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/d61abcc)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.web3.storage.md)

## Summary (5/9 successful)

  🟢 [Request with no authentication token](#request-with-no-authentication-token----success)

  🟢 [Request with invalid token](#request-with-invalid-token----success)

  ❌ [Pins post of CID 'bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy'](#pins-post-of-cid-bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy----failed)

  🟢 [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----success)

  🟢 [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----success)

  🟢 [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ❌ [Can create a pin with name='1716cf8a-2228-476a-8726-672c01c0618f'](#can-create-a-pin-with-name1716cf8a-2228-476a-8726-672c01c0618f----failed)

  ❌ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ❌ [Can delete all pins created during compliance checks](#can-delete-all-pins-created-during-compliance-checks----failed)

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
  "cf-ray": "73fee383ba3805bd-IAD",
  "connection": "close",
  "content-length": "99",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:37:56 GMT",
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
  "cf-ray": "73fee389fe3e5a4b-IAD",
  "connection": "close",
  "content-length": "94",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:37:57 GMT",
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
## Pins post of CID 'bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy' - ❌ FAILED

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
{"cid":"bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee3903fb2595b-IAD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:00 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
  "status": "queued",
  "created": "2022-08-24T20:37:59.681+00:00",
  "pin": {
    "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
    "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
    "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
    "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:37:59.681+00:00",
    "updated": "2022-08-24T20:37:59.681+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
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
  "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
  "status": "queued",
  "created": "2022-08-24T20:37:59.681+00:00",
  "pin": {
    "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
    "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
    "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
    "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:37:59.681+00:00",
    "updated": "2022-08-24T20:37:59.681+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:37:59.681+00:00",
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
  "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
  "status": "queued",
  "created": "2022-08-24T20:37:59.681Z",
  "pin": {
    "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
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
DELETE https://api.web3.storage/pins/81b36099-a026-4b18-849f-0b075ad0b904
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
  "cf-ray": "73fee3a61d045c1d-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:02 GMT",
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
{"cid":"bafkreiexmieqxd2wep2ajzn3olf7dvk3nd75ur4n4rqinpal52chltkx2u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee39bf9ee5b17-IAD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "81b36099-a026-4b18-849f-0b075ad0b904",
  "status": "queued",
  "created": "2022-08-24T20:38:01.682+00:00",
  "pin": {
    "cid": "bafkreiexmieqxd2wep2ajzn3olf7dvk3nd75ur4n4rqinpal52chltkx2u",
    "_id": "81b36099-a026-4b18-849f-0b075ad0b904",
    "sourceCid": "bafkreiexmieqxd2wep2ajzn3olf7dvk3nd75ur4n4rqinpal52chltkx2u",
    "contentCid": "bafkreiexmieqxd2wep2ajzn3olf7dvk3nd75ur4n4rqinpal52chltkx2u",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:01.682+00:00",
    "updated": "2022-08-24T20:38:01.682+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
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
  "requestid": "81b36099-a026-4b18-849f-0b075ad0b904",
  "status": "queued",
  "created": "2022-08-24T20:38:01.682+00:00",
  "pin": {
    "cid": "bafkreiexmieqxd2wep2ajzn3olf7dvk3nd75ur4n4rqinpal52chltkx2u",
    "_id": "81b36099-a026-4b18-849f-0b075ad0b904",
    "sourceCid": "bafkreiexmieqxd2wep2ajzn3olf7dvk3nd75ur4n4rqinpal52chltkx2u",
    "contentCid": "bafkreiexmieqxd2wep2ajzn3olf7dvk3nd75ur4n4rqinpal52chltkx2u",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:01.682+00:00",
    "updated": "2022-08-24T20:38:01.682+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:01.682+00:00",
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
  "requestid": "81b36099-a026-4b18-849f-0b075ad0b904",
  "status": "queued",
  "created": "2022-08-24T20:38:01.682Z",
  "pin": {
    "cid": "bafkreiexmieqxd2wep2ajzn3olf7dvk3nd75ur4n4rqinpal52chltkx2u",
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
  "cf-ray": "73fee3aa2f1205bd-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:04 GMT",
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
      "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
      "status": "queued",
      "created": "2022-08-24T20:37:59.681+00:00",
      "pin": {
        "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
        "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:37:59.681+00:00",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
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
      "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
      "status": "queued",
      "created": "2022-08-24T20:37:59.681+00:00",
      "pin": {
        "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
        "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:37:59.681+00:00",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
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
GET https://api.web3.storage/pins/9e7d31b7-1550-48d2-ad48-7e72981c080a
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
  "cf-ray": "73fee4230a5605bd-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:22 GMT",
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
GET https://api.web3.storage/pins/5ab2c1da-4860-4b9c-a336-7c3b92e1112b
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
  "cf-ray": "73fee4295fcf595b-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
  "status": "queued",
  "created": "2022-08-24T20:38:21.757+00:00",
  "pin": {
    "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
    "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:21.757+00:00",
    "updated": "2022-08-24T20:38:21.757+00:00",
    "pins": [
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
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
  "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
  "status": "queued",
  "created": "2022-08-24T20:38:21.757+00:00",
  "pin": {
    "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
    "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:21.757+00:00",
    "updated": "2022-08-24T20:38:21.757+00:00",
    "pins": [
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
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
  "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
  "status": "queued",
  "created": "2022-08-24T20:38:21.757Z",
  "pin": {
    "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Pin's with requestid '9e7d31b7-1550-48d2-ad48-7e72981c080a' can have cid 'bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u' replaced with 'bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea' - 🟢 SUCCESS

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
POST https://api.web3.storage/pins/9e7d31b7-1550-48d2-ad48-7e72981c080a
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
{"cid":"bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee3ba48505872-IAD",
  "connection": "close",
  "content-length": "1153",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
  "status": "queued",
  "created": "2022-08-24T20:38:21.757+00:00",
  "pin": {
    "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
    "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:21.757+00:00",
    "updated": "2022-08-24T20:38:21.757+00:00",
    "pins": [
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
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
  "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
  "status": "queued",
  "created": "2022-08-24T20:38:21.757+00:00",
  "pin": {
    "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
    "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:21.757+00:00",
    "updated": "2022-08-24T20:38:21.757+00:00",
    "pins": [
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "PinQueued",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
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
  "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
  "status": "queued",
  "created": "2022-08-24T20:38:21.757Z",
  "pin": {
    "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
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

  🟢 Could obtain requestid from new pin (9e7d31b7-1550-48d2-ad48-7e72981c080a) (success)

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
{"cid":"bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee3b3f81c5a4b-IAD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "9e7d31b7-1550-48d2-ad48-7e72981c080a",
  "status": "queued",
  "created": "2022-08-24T20:38:04.739+00:00",
  "pin": {
    "cid": "bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u",
    "_id": "9e7d31b7-1550-48d2-ad48-7e72981c080a",
    "sourceCid": "bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u",
    "contentCid": "bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:04.739+00:00",
    "updated": "2022-08-24T20:38:04.739+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
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
  "requestid": "9e7d31b7-1550-48d2-ad48-7e72981c080a",
  "status": "queued",
  "created": "2022-08-24T20:38:04.739+00:00",
  "pin": {
    "cid": "bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u",
    "_id": "9e7d31b7-1550-48d2-ad48-7e72981c080a",
    "sourceCid": "bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u",
    "contentCid": "bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:04.739+00:00",
    "updated": "2022-08-24T20:38:04.739+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:04.739+00:00",
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
  "requestid": "9e7d31b7-1550-48d2-ad48-7e72981c080a",
  "status": "queued",
  "created": "2022-08-24T20:38:04.739Z",
  "pin": {
    "cid": "bafkreig4v7i2yogow5l4n7z2hdqy3yf5xmcs63ntonawjzxeb3jvlyhv5u",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can retrieve pin with name '1716cf8a-2228-476a-8726-672c01c0618f' via the 'exact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.web3.storage/pins?name=1716cf8a-2228-476a-8726-672c01c0618f&match=exact
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
  "cf-ray": "73fee432fbb46fcd-IAD",
  "connection": "close",
  "content-length": "105",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:24 GMT",
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
## Can retrieve pin with name '1716CF8A-2228-476A-8726-672C01C0618F' via the 'iexact' TextMatchingStrategy - ❌ FAILED

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
GET https://api.web3.storage/pins?name=1716CF8A-2228-476A-8726-672C01C0618F&match=iexact
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
  "cf-ray": "73fee436cd4657b2-IAD",
  "connection": "close",
  "content-length": "105",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:25 GMT",
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
## Can retrieve pin with name '2228-476a-8726-672' via the 'partial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.web3.storage/pins?name=2228-476a-8726-672&match=partial
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
  "cf-ray": "73fee43d0ad76fc5-IAD",
  "connection": "close",
  "content-length": "105",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:26 GMT",
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
## Can retrieve pin with name '2228-476A-8726-672' via the 'ipartial' TextMatchingStrategy - ❌ FAILED

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
GET https://api.web3.storage/pins?name=2228-476A-8726-672&match=ipartial
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
  "cf-ray": "73fee4433abc6fdf-IAD",
  "connection": "close",
  "content-length": "105",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:27 GMT",
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
## Can create a pin with name='1716cf8a-2228-476a-8726-672c01c0618f' - ❌ FAILED

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
{"cid":"bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori","name":"1716cf8a-2228-476a-8726-672c01c0618f","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee42a4e295c41-IAD",
  "connection": "close",
  "content-length": "3799",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
  "status": "queued",
  "created": "2022-08-24T20:38:24.273+00:00",
  "pin": {
    "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
    "_id": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
    "sourceCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
    "contentCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
    "authKey": "315318824629964106",
    "name": "1716cf8a-2228-476a-8726-672c01c0618f",
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:24.273+00:00",
    "updated": "2022-08-24T20:38:24.273+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
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
  "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
  "status": "queued",
  "created": "2022-08-24T20:38:24.273+00:00",
  "pin": {
    "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
    "_id": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
    "sourceCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
    "contentCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
    "authKey": "315318824629964106",
    "name": "1716cf8a-2228-476a-8726-672c01c0618f",
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:24.273+00:00",
    "updated": "2022-08-24T20:38:24.273+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:24.273+00:00",
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
  "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
  "status": "queued",
  "created": "2022-08-24T20:38:24.273Z",
  "pin": {
    "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
    "name": "1716cf8a-2228-476a-8726-672c01c0618f",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4' - 🟢 SUCCESS

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
{"cid":"bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee45249d305bd-IAD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:29 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
  "status": "queued",
  "created": "2022-08-24T20:38:29.822+00:00",
  "pin": {
    "cid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
    "_id": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
    "sourceCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
    "contentCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:29.822+00:00",
    "updated": "2022-08-24T20:38:29.822+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
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
  "requestid": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
  "status": "queued",
  "created": "2022-08-24T20:38:29.822+00:00",
  "pin": {
    "cid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
    "_id": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
    "sourceCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
    "contentCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:29.822+00:00",
    "updated": "2022-08-24T20:38:29.822+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:29.822+00:00",
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
  "requestid": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
  "status": "queued",
  "created": "2022-08-24T20:38:29.822Z",
  "pin": {
    "cid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya' - 🟢 SUCCESS

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
{"cid":"bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee4589a1e595b-IAD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "a5d8c23a-74a0-4213-a886-e206503af769",
  "status": "queued",
  "created": "2022-08-24T20:38:31.115+00:00",
  "pin": {
    "cid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
    "_id": "a5d8c23a-74a0-4213-a886-e206503af769",
    "sourceCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
    "contentCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:31.115+00:00",
    "updated": "2022-08-24T20:38:31.115+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
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
  "requestid": "a5d8c23a-74a0-4213-a886-e206503af769",
  "status": "queued",
  "created": "2022-08-24T20:38:31.115+00:00",
  "pin": {
    "cid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
    "_id": "a5d8c23a-74a0-4213-a886-e206503af769",
    "sourceCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
    "contentCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:31.115+00:00",
    "updated": "2022-08-24T20:38:31.115+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:31.115+00:00",
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
  "requestid": "a5d8c23a-74a0-4213-a886-e206503af769",
  "status": "queued",
  "created": "2022-08-24T20:38:31.115Z",
  "pin": {
    "cid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu' - 🟢 SUCCESS

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
{"cid":"bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee45edc8881be-IAD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
  "status": "queued",
  "created": "2022-08-24T20:38:32.253+00:00",
  "pin": {
    "cid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
    "_id": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
    "sourceCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
    "contentCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:32.253+00:00",
    "updated": "2022-08-24T20:38:32.253+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
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
  "requestid": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
  "status": "queued",
  "created": "2022-08-24T20:38:32.253+00:00",
  "pin": {
    "cid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
    "_id": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
    "sourceCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
    "contentCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:32.253+00:00",
    "updated": "2022-08-24T20:38:32.253+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.253+00:00",
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
  "requestid": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
  "status": "queued",
  "created": "2022-08-24T20:38:32.253Z",
  "pin": {
    "cid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4' - 🟢 SUCCESS

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
{"cid":"bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee4650bc857b2-IAD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "d24d7f4a-8846-4af9-9279-3952c688eac5",
  "status": "queued",
  "created": "2022-08-24T20:38:32.744+00:00",
  "pin": {
    "cid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
    "_id": "d24d7f4a-8846-4af9-9279-3952c688eac5",
    "sourceCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
    "contentCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:32.744+00:00",
    "updated": "2022-08-24T20:38:32.744+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
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
  "requestid": "d24d7f4a-8846-4af9-9279-3952c688eac5",
  "status": "queued",
  "created": "2022-08-24T20:38:32.744+00:00",
  "pin": {
    "cid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
    "_id": "d24d7f4a-8846-4af9-9279-3952c688eac5",
    "sourceCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
    "contentCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:32.744+00:00",
    "updated": "2022-08-24T20:38:32.744+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:32.744+00:00",
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
  "requestid": "d24d7f4a-8846-4af9-9279-3952c688eac5",
  "status": "queued",
  "created": "2022-08-24T20:38:32.744Z",
  "pin": {
    "cid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    }
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq' - 🟢 SUCCESS

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
{"cid":"bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq","meta":{"createdBy":"@ipfs-shipyard/pinning-service-compliance"}}
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
  "cf-ray": "73fee46b6caf6fdf-IAD",
  "connection": "close",
  "content-length": "3765",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:33 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
  "status": "queued",
  "created": "2022-08-24T20:38:33.852+00:00",
  "pin": {
    "cid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
    "_id": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
    "sourceCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
    "contentCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:33.852+00:00",
    "updated": "2022-08-24T20:38:33.852+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
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
  "requestid": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
  "status": "queued",
  "created": "2022-08-24T20:38:33.852+00:00",
  "pin": {
    "cid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
    "_id": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
    "sourceCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
    "contentCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": {
      "createdBy": "@ipfs-shipyard/pinning-service-compliance"
    },
    "deleted": null,
    "created": "2022-08-24T20:38:33.852+00:00",
    "updated": "2022-08-24T20:38:33.852+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-08-24T20:38:33.852+00:00",
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
  "requestid": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
  "status": "queued",
  "created": "2022-08-24T20:38:33.852Z",
  "pin": {
    "cid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
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
  "cf-ray": "73fee471994d7fbb-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 16,
  "results": [
    {
      "requestid": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
      "status": "queued",
      "created": "2022-08-24T20:38:33.852+00:00",
      "pin": {
        "cid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "_id": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
        "sourceCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "contentCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:33.852+00:00",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "d24d7f4a-8846-4af9-9279-3952c688eac5",
      "status": "queued",
      "created": "2022-08-24T20:38:32.744+00:00",
      "pin": {
        "cid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "_id": "d24d7f4a-8846-4af9-9279-3952c688eac5",
        "sourceCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "contentCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.744+00:00",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
      "status": "queued",
      "created": "2022-08-24T20:38:32.384+00:00",
      "pin": {
        "cid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "_id": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
        "sourceCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "contentCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.384+00:00",
        "updated": "2022-08-24T20:38:32.384+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
      "status": "queued",
      "created": "2022-08-24T20:38:32.253+00:00",
      "pin": {
        "cid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "_id": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
        "sourceCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "contentCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.253+00:00",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a5d8c23a-74a0-4213-a886-e206503af769",
      "status": "queued",
      "created": "2022-08-24T20:38:31.115+00:00",
      "pin": {
        "cid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "_id": "a5d8c23a-74a0-4213-a886-e206503af769",
        "sourceCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "contentCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:31.115+00:00",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
      "status": "queued",
      "created": "2022-08-24T20:38:29.822+00:00",
      "pin": {
        "cid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "_id": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
        "sourceCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "contentCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:29.822+00:00",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
      "status": "queued",
      "created": "2022-08-24T20:38:24.273+00:00",
      "pin": {
        "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "_id": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
        "sourceCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "contentCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "authKey": 315318824629964100,
        "name": "1716cf8a-2228-476a-8726-672c01c0618f",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:24.273+00:00",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
      "status": "queued",
      "created": "2022-08-24T20:38:21.757+00:00",
      "pin": {
        "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
        "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:21.757+00:00",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
      "status": "queued",
      "created": "2022-08-24T20:37:59.681+00:00",
      "pin": {
        "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
        "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:37:59.681+00:00",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
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
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 16,
  "results": [
    {
      "requestid": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
      "status": "queued",
      "created": "2022-08-24T20:38:33.852+00:00",
      "pin": {
        "cid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "_id": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
        "sourceCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "contentCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:33.852+00:00",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "d24d7f4a-8846-4af9-9279-3952c688eac5",
      "status": "queued",
      "created": "2022-08-24T20:38:32.744+00:00",
      "pin": {
        "cid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "_id": "d24d7f4a-8846-4af9-9279-3952c688eac5",
        "sourceCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "contentCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.744+00:00",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
      "status": "queued",
      "created": "2022-08-24T20:38:32.384+00:00",
      "pin": {
        "cid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "_id": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
        "sourceCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "contentCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.384+00:00",
        "updated": "2022-08-24T20:38:32.384+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
      "status": "queued",
      "created": "2022-08-24T20:38:32.253+00:00",
      "pin": {
        "cid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "_id": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
        "sourceCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "contentCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.253+00:00",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a5d8c23a-74a0-4213-a886-e206503af769",
      "status": "queued",
      "created": "2022-08-24T20:38:31.115+00:00",
      "pin": {
        "cid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "_id": "a5d8c23a-74a0-4213-a886-e206503af769",
        "sourceCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "contentCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:31.115+00:00",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
      "status": "queued",
      "created": "2022-08-24T20:38:29.822+00:00",
      "pin": {
        "cid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "_id": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
        "sourceCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "contentCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:29.822+00:00",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
      "status": "queued",
      "created": "2022-08-24T20:38:24.273+00:00",
      "pin": {
        "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "_id": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
        "sourceCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "contentCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "authKey": 315318824629964100,
        "name": "1716cf8a-2228-476a-8726-672c01c0618f",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:24.273+00:00",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
      "status": "queued",
      "created": "2022-08-24T20:38:21.757+00:00",
      "pin": {
        "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
        "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:21.757+00:00",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
      "status": "queued",
      "created": "2022-08-24T20:37:59.681+00:00",
      "pin": {
        "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
        "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:37:59.681+00:00",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
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
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 16,
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
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-08-18T11%3A32%3A42.480Z
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
  "cf-ray": "73fee47b9d3b82c6-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:38 GMT",
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
  "cf-ray": "73fee443f97d6fc7-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:29 GMT",
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
      "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
      "status": "queued",
      "created": "2022-08-24T20:38:24.273+00:00",
      "pin": {
        "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "_id": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
        "sourceCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "contentCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "authKey": 315318824629964100,
        "name": "1716cf8a-2228-476a-8726-672c01c0618f",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:24.273+00:00",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
      "status": "queued",
      "created": "2022-08-24T20:38:21.757+00:00",
      "pin": {
        "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
        "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:21.757+00:00",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
      "status": "queued",
      "created": "2022-08-24T20:37:59.681+00:00",
      "pin": {
        "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
        "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:37:59.681+00:00",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
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
      "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
      "status": "queued",
      "created": "2022-08-24T20:38:24.273+00:00",
      "pin": {
        "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "_id": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
        "sourceCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "contentCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "authKey": 315318824629964100,
        "name": "1716cf8a-2228-476a-8726-672c01c0618f",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:24.273+00:00",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
      "status": "queued",
      "created": "2022-08-24T20:38:21.757+00:00",
      "pin": {
        "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
        "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:21.757+00:00",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
      "status": "queued",
      "created": "2022-08-24T20:37:59.681+00:00",
      "pin": {
        "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
        "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:37:59.681+00:00",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
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
## Can delete pin with requestid '0e700fcb-1c3e-4240-ab9f-bc539ca139da' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/0e700fcb-1c3e-4240-ab9f-bc539ca139da
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
  "cf-ray": "73fee4921ae08296-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:40 GMT",
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
## Can delete pin with requestid 'd24d7f4a-8846-4af9-9279-3952c688eac5' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/d24d7f4a-8846-4af9-9279-3952c688eac5
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
  "cf-ray": "73fee49858816fdf-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:40 GMT",
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
## Can delete pin with requestid '7adc03b9-940d-456e-bb51-f438a4af9ebb' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/7adc03b9-940d-456e-bb51-f438a4af9ebb
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
  "cf-ray": "73fee49e9901829f-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:42 GMT",
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
## Can delete pin with requestid 'a5d8c23a-74a0-4213-a886-e206503af769' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/a5d8c23a-74a0-4213-a886-e206503af769
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
  "cf-ray": "73fee4a4df6b5a45-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:43 GMT",
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
## Can delete pin with requestid 'ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd
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
  "cf-ray": "73fee4ab0f7257ca-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:43 GMT",
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
## Can delete pin with requestid 'bcb01cd5-6480-4ea8-b9c0-3e666e53663d' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/bcb01cd5-6480-4ea8-b9c0-3e666e53663d
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
  "cf-ray": "73fee4b15de16ff2-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:44 GMT",
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
## Can delete pin with requestid '5ab2c1da-4860-4b9c-a336-7c3b92e1112b' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/5ab2c1da-4860-4b9c-a336-7c3b92e1112b
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
  "cf-ray": "73fee4b79add82c0-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:45 GMT",
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
## Can delete pin with requestid '5939f10d-8113-4ab3-b665-d9d9e464a6e3' - 🟢 SUCCESS

### Expectations (1/1 successful)

  🟢 Response is ok (success)





### Details

#### Request
```
DELETE https://api.web3.storage/pins/5939f10d-8113-4ab3-b665-d9d9e464a6e3
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
  "cf-ray": "73fee4bddf0f0654-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:47 GMT",
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
## Get all Pins created before 'Thu Aug 18 2022 11:32:42 GMT+0000 (Coordinated Universal Time)' - 🟢 SUCCESS

### Expectations (0/0 successful)

  





### Details

#### Request
```
GET https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-08-18T11%3A32%3A42.480Z
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
  "cf-ray": "73fee4c41c275b5e-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:50 GMT",
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
## Call pinsGet after deletions - ❌ FAILED

### Expectations (0/1 successful)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '7' (failure)





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
  "cf-ray": "73fee4d30e925a45-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:52 GMT",
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
      "requestid": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
      "status": "queued",
      "created": "2022-08-24T20:38:32.384+00:00",
      "pin": {
        "cid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "_id": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
        "sourceCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "contentCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.384+00:00",
        "updated": "2022-08-24T20:38:32.384+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
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
      "requestid": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
      "status": "queued",
      "created": "2022-08-24T20:38:32.384+00:00",
      "pin": {
        "cid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "_id": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
        "sourceCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "contentCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.384+00:00",
        "updated": "2022-08-24T20:38:32.384+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
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
## Can delete all pins created during compliance checks - ❌ FAILED

### Expectations (8/9 successful)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  🟢 Response is ok (success)

  ❌ Final pinsGet call returns the same count as before all compliance checks: '7' (failure)





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
  "cf-ray": "73fee488afc981be-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 24 Aug 2022 20:38:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 16,
  "results": [
    {
      "requestid": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
      "status": "queued",
      "created": "2022-08-24T20:38:33.852+00:00",
      "pin": {
        "cid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "_id": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
        "sourceCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "contentCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:33.852+00:00",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "d24d7f4a-8846-4af9-9279-3952c688eac5",
      "status": "queued",
      "created": "2022-08-24T20:38:32.744+00:00",
      "pin": {
        "cid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "_id": "d24d7f4a-8846-4af9-9279-3952c688eac5",
        "sourceCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "contentCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.744+00:00",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
      "status": "queued",
      "created": "2022-08-24T20:38:32.384+00:00",
      "pin": {
        "cid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "_id": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
        "sourceCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "contentCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.384+00:00",
        "updated": "2022-08-24T20:38:32.384+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
      "status": "queued",
      "created": "2022-08-24T20:38:32.253+00:00",
      "pin": {
        "cid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "_id": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
        "sourceCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "contentCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.253+00:00",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a5d8c23a-74a0-4213-a886-e206503af769",
      "status": "queued",
      "created": "2022-08-24T20:38:31.115+00:00",
      "pin": {
        "cid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "_id": "a5d8c23a-74a0-4213-a886-e206503af769",
        "sourceCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "contentCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:31.115+00:00",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
      "status": "queued",
      "created": "2022-08-24T20:38:29.822+00:00",
      "pin": {
        "cid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "_id": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
        "sourceCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "contentCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:29.822+00:00",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
      "status": "queued",
      "created": "2022-08-24T20:38:24.273+00:00",
      "pin": {
        "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "_id": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
        "sourceCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "contentCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "authKey": 315318824629964100,
        "name": "1716cf8a-2228-476a-8726-672c01c0618f",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:24.273+00:00",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
      "status": "queued",
      "created": "2022-08-24T20:38:21.757+00:00",
      "pin": {
        "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
        "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:21.757+00:00",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
      "status": "queued",
      "created": "2022-08-24T20:37:59.681+00:00",
      "pin": {
        "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
        "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:37:59.681+00:00",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
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
    }
  ]
}
```

##### Body (as JSON)
```json
{
  "count": 16,
  "results": [
    {
      "requestid": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
      "status": "queued",
      "created": "2022-08-24T20:38:33.852+00:00",
      "pin": {
        "cid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "_id": "0e700fcb-1c3e-4240-ab9f-bc539ca139da",
        "sourceCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "contentCid": "bafkreiguyaae7ngs3jbszthlae3kbkmjjk655lqsxohtxpmn76vfbzt4wq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:33.852+00:00",
        "updated": "2022-08-24T20:38:33.852+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:33.852+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "d24d7f4a-8846-4af9-9279-3952c688eac5",
      "status": "queued",
      "created": "2022-08-24T20:38:32.744+00:00",
      "pin": {
        "cid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "_id": "d24d7f4a-8846-4af9-9279-3952c688eac5",
        "sourceCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "contentCid": "bafkreia2gyzfchcqm35ev4vwmhgc5ucak3cwkh5ia7mobihsobfug6h4p4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.744+00:00",
        "updated": "2022-08-24T20:38:32.744+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.744+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
      "status": "queued",
      "created": "2022-08-24T20:38:32.384+00:00",
      "pin": {
        "cid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "_id": "3ac421df-8bb9-4208-9754-6fa87f9c44e0",
        "sourceCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "contentCid": "bafkreigxl5a6zufaqhq7ofpvidoemu7zma7oeod5fr4hoy664bofi2cpwy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.384+00:00",
        "updated": "2022-08-24T20:38:32.384+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.384+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
      "status": "queued",
      "created": "2022-08-24T20:38:32.253+00:00",
      "pin": {
        "cid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "_id": "7adc03b9-940d-456e-bb51-f438a4af9ebb",
        "sourceCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "contentCid": "bafkreibizdxlzhy3fclnsfykpf2exgkranpjowqma4fabb3i6zrlcvzksu",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:32.253+00:00",
        "updated": "2022-08-24T20:38:32.253+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:32.253+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "a5d8c23a-74a0-4213-a886-e206503af769",
      "status": "queued",
      "created": "2022-08-24T20:38:31.115+00:00",
      "pin": {
        "cid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "_id": "a5d8c23a-74a0-4213-a886-e206503af769",
        "sourceCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "contentCid": "bafkreihzgr56r5wpogq52zflyhtuyeyaecuy3zbvra6r2vtnjmiahub7ya",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:31.115+00:00",
        "updated": "2022-08-24T20:38:31.115+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:31.115+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
      "status": "queued",
      "created": "2022-08-24T20:38:29.822+00:00",
      "pin": {
        "cid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "_id": "ced7c30e-7aa0-4c1e-b8ac-321bec8b6bcd",
        "sourceCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "contentCid": "bafkreiebir4gja65xuv7a4vmbrfoil5tlnlcr47hr34abuf4yca76svvq4",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:29.822+00:00",
        "updated": "2022-08-24T20:38:29.822+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:29.822+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
      "status": "queued",
      "created": "2022-08-24T20:38:24.273+00:00",
      "pin": {
        "cid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "_id": "bcb01cd5-6480-4ea8-b9c0-3e666e53663d",
        "sourceCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "contentCid": "bafkreic44oobscovfacuxppyxvjruk2hiroaxfu53rxbwbsn2s7uetbori",
        "authKey": 315318824629964100,
        "name": "1716cf8a-2228-476a-8726-672c01c0618f",
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:24.273+00:00",
        "updated": "2022-08-24T20:38:24.273+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:38:24.273+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
      "status": "queued",
      "created": "2022-08-24T20:38:21.757+00:00",
      "pin": {
        "cid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "_id": "5ab2c1da-4860-4b9c-a336-7c3b92e1112b",
        "sourceCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "contentCid": "bafkreibaacz66lh6gow6vwd4owu2a6rfcjbuk7yv5b3yq6bfvqpfbt47ea",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:38:21.757+00:00",
        "updated": "2022-08-24T20:38:21.757+00:00",
        "pins": [
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "PinQueued",
            "updated": "2022-08-24T20:38:21.757+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
      "status": "queued",
      "created": "2022-08-24T20:37:59.681+00:00",
      "pin": {
        "cid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "_id": "5939f10d-8113-4ab3-b665-d9d9e464a6e3",
        "sourceCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "contentCid": "bafkreicidfgmwcu4q4hm26z526l4r5rzes7faagcl67kv3273scfirynhy",
        "authKey": 315318824629964100,
        "name": null,
        "meta": {
          "createdBy": "@ipfs-shipyard/pinning-service-compliance"
        },
        "deleted": null,
        "created": "2022-08-24T20:37:59.681+00:00",
        "updated": "2022-08-24T20:37:59.681+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-08-24T20:37:59.681+00:00",
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
    }
  ]
}
```
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
```json
{
  "count": 16,
  "results": {}
}
```
