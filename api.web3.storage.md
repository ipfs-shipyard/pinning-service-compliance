
# https://api.web3.storage compliance:

Execution Date: 2022-06-07T23:41:52.507Z

Revision: [9dfaf6c](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/9dfaf6c)

[Report History](https://github.com/ipfs-shipyard/pinning-service-compliance/commits/gh-pages/api.web3.storage.md)

## Summary (2/9 successful)

  ✘ [Request with no authentication token](#request-with-no-authentication-token----failed)

  ✘ [Request with invalid token](#request-with-invalid-token----failed)

  ✘ [Pins post of CID 'baeaaadjrgm4cymrxg43denjygeza'](#pins-post-of-cid-baeaaadjrgm4cymrxg43denjygeza----failed)

  ✘ [Can create and then delete a new pin](#can-create-and-then-delete-a-new-pin----failed)

  ✘ [List pin objects (GET /pins) in all states](#list-pin-objects-get-pins-in-all-states----failed)

  ✓ [Can create and replace a pin's CID](#can-create-and-replace-a-pins-cid----success)

  ✘ [Can create a pin with name='28648e36-eb53-4814-9213-ce569fdf115a'](#can-create-a-pin-with-name28648e36-eb53-4814-9213-ce569fdf115a----failed)

  ✘ [Pagination: Get all pins, create new pins (optional), get first and second pages](#pagination-get-all-pins-create-new-pins-optional-get-first-and-second-pages----failed)

  ✓ [Can delete all pins](#can-delete-all-pins----success)

## Request with no authentication token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Response object doesn't match expected schema:

* "error" is required

* "code" is not allowed

* "message" is not allowed

  
### Details

#### Request - GET: https://api.web3.storage/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins
```
{
  code: 'ERROR_NO_TOKEN',
  message: 'No token found in `Authorization: Bearer ` header'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3c9cf8319c46-IAD",
  "connection": "close",
  "content-length": "87",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "code": "ERROR_NO_TOKEN",
  "message": "No token found in `Authorization: Bearer ` header"
}
```
## Request with invalid token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Response object doesn't match expected schema:

* "error" is required

* "code" is not allowed

* "message" is not allowed

  
### Details

#### Request - GET: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins
```
{
  code: 'ERROR_UNRECOGNISED_TOKEN',
  message: 'Could not parse provided API token'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3ca2f82d8236-IAD",
  "connection": "close",
  "content-length": "82",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "code": "ERROR_UNRECOGNISED_TOKEN",
  "message": "Could not parse provided API token"
}
```
## Pins post of CID 'baeaaadjrgm4cymrxg43denjygeza' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response object matches api spec schema (failure)

  ✓ Pinning status is either queued, pinning, or pinned (success)




#### Response object doesn't match expected schema:

* "origins" must be an array

* "meta" must be an object

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

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgm4cymrxg43denjygeza"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
  status: 'queued',
  created: '2022-06-07T23:41:10.471+00:00',
  pin: {
    cid: 'baeaaadjrgm4cymrxg43denjygeza',
    _id: '11566992-af0a-4ede-9530-ea28bc7cf58a',
    sourceCid: 'baeaaadjrgm4cymrxg43denjygeza',
    contentCid: 'baeaaadjrgm4cymrxg43denjygeza',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:10.471+00:00',
    updated: '2022-06-07T23:41:10.471+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:10.471+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
  status: 'queued',
  created: 2022-06-07T23:41:10.471Z,
  pin: {
    cid: 'baeaaadjrgm4cymrxg43denjygeza',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3ca93efa822d-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "11566992-af0a-4ede-9530-ea28bc7cf58a",
  "status": "queued",
  "created": "2022-06-07T23:41:10.471+00:00",
  "pin": {
    "cid": "baeaaadjrgm4cymrxg43denjygeza",
    "_id": "11566992-af0a-4ede-9530-ea28bc7cf58a",
    "sourceCid": "baeaaadjrgm4cymrxg43denjygeza",
    "contentCid": "baeaaadjrgm4cymrxg43denjygeza",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:10.471+00:00",
    "updated": "2022-06-07T23:41:10.471+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## The newly created pin can be immediately deleted - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202: The Pin was deleted successfully (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/22728311-af62-4d93-8a06-2c736f3ae153

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/22728311-af62-4d93-8a06-2c736f3ae153
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cb5bdd95818-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can create and then delete a new pin - ✘ FAILED

### Expectations (3/4 successful)

  ✓ Result is not null (success)

  ✘ Response code is 200 (failure)

  ✓ Response is ok (success)

  ✓ Response code is 202: The Pin was deleted successfully (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgm4synjxheydkmjqguza"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '22728311-af62-4d93-8a06-2c736f3ae153',
  status: 'queued',
  created: '2022-06-07T23:41:11.62+00:00',
  pin: {
    cid: 'baeaaadjrgm4synjxheydkmjqguza',
    _id: '22728311-af62-4d93-8a06-2c736f3ae153',
    sourceCid: 'baeaaadjrgm4synjxheydkmjqguza',
    contentCid: 'baeaaadjrgm4synjxheydkmjqguza',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:11.62+00:00',
    updated: '2022-06-07T23:41:11.62+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:11.62+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '22728311-af62-4d93-8a06-2c736f3ae153',
  status: 'queued',
  created: 2022-06-07T23:41:11.620Z,
  pin: {
    cid: 'baeaaadjrgm4synjxheydkmjqguza',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3caf8cae5dc8-IAD",
  "connection": "close",
  "content-length": "3775",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "22728311-af62-4d93-8a06-2c736f3ae153",
  "status": "queued",
  "created": "2022-06-07T23:41:11.62+00:00",
  "pin": {
    "cid": "baeaaadjrgm4synjxheydkmjqguza",
    "_id": "22728311-af62-4d93-8a06-2c736f3ae153",
    "sourceCid": "baeaaadjrgm4synjxheydkmjqguza",
    "contentCid": "baeaaadjrgm4synjxheydkmjqguza",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:11.62+00:00",
    "updated": "2022-06-07T23:41:11.62+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:11.62+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## List pin objects (GET /pins) in all states - ✘ FAILED

### Expectations (2/3 successful)

  ✘ Response object matches api spec schema (failure)

  ✓ Response is ok (success)

  ✓ Response code is 200 (success)




#### Response object doesn't match expected schema:

* "name" must be a string

* "meta" must be an object

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

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 1,
  results: [
    {
      requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
      status: 'queued',
      created: '2022-06-07T23:41:10.471+00:00',
      pin: {
        cid: 'baeaaadjrgm4cymrxg43denjygeza',
        _id: '11566992-af0a-4ede-9530-ea28bc7cf58a',
        sourceCid: 'baeaaadjrgm4cymrxg43denjygeza',
        contentCid: 'baeaaadjrgm4cymrxg43denjygeza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:10.471+00:00',
        updated: '2022-06-07T23:41:10.471+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 1,
  results: Set(1) {
    {
      requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
      status: 'queued',
      created: 2022-06-07T23:41:10.471Z,
      pin: {
        cid: 'baeaaadjrgm4cymrxg43denjygeza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cb86b96820f-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
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
      "requestid": "11566992-af0a-4ede-9530-ea28bc7cf58a",
      "status": "queued",
      "created": "2022-06-07T23:41:10.471+00:00",
      "pin": {
        "cid": "baeaaadjrgm4cymrxg43denjygeza",
        "_id": "11566992-af0a-4ede-9530-ea28bc7cf58a",
        "sourceCid": "baeaaadjrgm4cymrxg43denjygeza",
        "contentCid": "baeaaadjrgm4cymrxg43denjygeza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:10.471+00:00",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
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
## Get original pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://api.web3.storage/pins/3072a836-59e2-47a9-979e-565aabda1de2

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/3072a836-59e2-47a9-979e-565aabda1de2
```
{
  reason: 'PSA_RESOURCE_NOT_FOUND',
  details: 'Requested data was not found.'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Not Found (404)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3ccbded674c7-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "PSA_RESOURCE_NOT_FOUND",
  "details": "Requested data was not found."
}
```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)





### Details

#### Request - GET: https://api.web3.storage/pins/c06893f6-8c5c-4278-abe8-592a734628c5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/c06893f6-8c5c-4278-abe8-592a734628c5
```
{
  requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
  status: 'queued',
  created: '2022-06-07T23:41:15.326+00:00',
  pin: {
    cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
    _id: 'c06893f6-8c5c-4278-abe8-592a734628c5',
    sourceCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
    contentCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:15.326+00:00',
    updated: '2022-06-07T23:41:15.326+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
  status: 'queued',
  created: 2022-06-07T23:41:15.326Z,
  pin: {
    cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cd21afa5a6a-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "c06893f6-8c5c-4278-abe8-592a734628c5",
  "status": "queued",
  "created": "2022-06-07T23:41:15.326+00:00",
  "pin": {
    "cid": "baeaaadjrgqzcynrtgqztanjzgi4q",
    "_id": "c06893f6-8c5c-4278-abe8-592a734628c5",
    "sourceCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
    "contentCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:15.326+00:00",
    "updated": "2022-06-07T23:41:15.326+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Pin's with requestid '3072a836-59e2-47a9-979e-565aabda1de2' can have cid 'baeaaadjrgqysyobrgaytgmbzgiya' replaced with 'baeaaadjrgqzcynrtgqztanjzgi4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://api.web3.storage/pins/3072a836-59e2-47a9-979e-565aabda1de2

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgqzcynrtgqztanjzgi4q"}
```
#### Response data from https://api.web3.storage/pins/3072a836-59e2-47a9-979e-565aabda1de2
```
{
  requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
  status: 'queued',
  created: '2022-06-07T23:41:15.326+00:00',
  pin: {
    cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
    _id: 'c06893f6-8c5c-4278-abe8-592a734628c5',
    sourceCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
    contentCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:15.326+00:00',
    updated: '2022-06-07T23:41:15.326+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:15.326+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
  status: 'queued',
  created: 2022-06-07T23:41:15.326Z,
  pin: {
    cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cc4f81359df-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "c06893f6-8c5c-4278-abe8-592a734628c5",
  "status": "queued",
  "created": "2022-06-07T23:41:15.326+00:00",
  "pin": {
    "cid": "baeaaadjrgqzcynrtgqztanjzgi4q",
    "_id": "c06893f6-8c5c-4278-abe8-592a734628c5",
    "sourceCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
    "contentCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:15.326+00:00",
    "updated": "2022-06-07T23:41:15.326+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)

  ✓ Could obtain requestid from new pin (3072a836-59e2-47a9-979e-565aabda1de2) (success)

  ✓ Response is ok (success)

  ✓ Replaced pin has the new & expected CID (success)

  ✓ Replaced pin has a different requestid (success)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)

  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgqysyobrgaytgmbzgiya"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '3072a836-59e2-47a9-979e-565aabda1de2',
  status: 'queued',
  created: '2022-06-07T23:41:13.5+00:00',
  pin: {
    cid: 'baeaaadjrgqysyobrgaytgmbzgiya',
    _id: '3072a836-59e2-47a9-979e-565aabda1de2',
    sourceCid: 'baeaaadjrgqysyobrgaytgmbzgiya',
    contentCid: 'baeaaadjrgqysyobrgaytgmbzgiya',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:13.5+00:00',
    updated: '2022-06-07T23:41:13.5+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:13.5+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '3072a836-59e2-47a9-979e-565aabda1de2',
  status: 'queued',
  created: 2022-06-07T23:41:13.500Z,
  pin: {
    cid: 'baeaaadjrgqysyobrgaytgmbzgiya',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cbeaeec56c8-IAD",
  "connection": "close",
  "content-length": "3753",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "3072a836-59e2-47a9-979e-565aabda1de2",
  "status": "queued",
  "created": "2022-06-07T23:41:13.5+00:00",
  "pin": {
    "cid": "baeaaadjrgqysyobrgaytgmbzgiya",
    "_id": "3072a836-59e2-47a9-979e-565aabda1de2",
    "sourceCid": "baeaaadjrgqysyobrgaytgmbzgiya",
    "contentCid": "baeaaadjrgqysyobrgaytgmbzgiya",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:13.5+00:00",
    "updated": "2022-06-07T23:41:13.5+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:13.5+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can retrieve pin with name '28648e36-eb53-4814-9213-ce569fdf115a' via the 'exact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://api.web3.storage/pins?name=28648e36-eb53-4814-9213-ce569fdf115a&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=28648e36-eb53-4814-9213-ce569fdf115a&match=exact
```
{
  reason: 'PSA_REQUIRED_DATA',
  details: 'Instance does not have required property "status".'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cdb2edb599e-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "PSA_REQUIRED_DATA",
  "details": "Instance does not have required property \"status\"."
}
```
## Can retrieve pin with name '28648E36-EB53-4814-9213-CE569FDF115A' via the 'iexact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://api.web3.storage/pins?name=28648E36-EB53-4814-9213-CE569FDF115A&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=28648E36-EB53-4814-9213-CE569FDF115A&match=iexact
```
{
  reason: 'PSA_REQUIRED_DATA',
  details: 'Instance does not have required property "status".'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3ce13df305ff-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:19 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "PSA_REQUIRED_DATA",
  "details": "Instance does not have required property \"status\"."
}
```
## Can retrieve pin with name 'eb53-4814-9213-ce5' via the 'partial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://api.web3.storage/pins?name=eb53-4814-9213-ce5&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=eb53-4814-9213-ce5&match=partial
```
{
  reason: 'PSA_REQUIRED_DATA',
  details: 'Instance does not have required property "status".'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3ce78fac56c8-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:20 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "PSA_REQUIRED_DATA",
  "details": "Instance does not have required property \"status\"."
}
```
## Can retrieve pin with name 'EB53-4814-9213-CE5' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - GET: https://api.web3.storage/pins?name=EB53-4814-9213-CE5&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?name=EB53-4814-9213-CE5&match=ipartial
```
{
  reason: 'PSA_REQUIRED_DATA',
  details: 'Instance does not have required property "status".'
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3ceddd7659df-IAD",
  "connection": "close",
  "content-length": "95",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "reason": "PSA_REQUIRED_DATA",
  "details": "Instance does not have required property \"status\"."
}
```
## Can create a pin with name='28648e36-eb53-4814-9213-ce569fdf115a' - ✘ FAILED

### Expectations (3/11 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Name matches name provided during creation (success)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)

  ✘ Response is ok (failure)

  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)


### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrgq2syobwha2tsnzwgqza","name":"28648e36-eb53-4814-9213-ce569fdf115a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
  status: 'queued',
  created: '2022-06-07T23:41:17.378+00:00',
  pin: {
    cid: 'baeaaadjrgq2syobwha2tsnzwgqza',
    _id: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
    sourceCid: 'baeaaadjrgq2syobwha2tsnzwgqza',
    contentCid: 'baeaaadjrgq2syobwha2tsnzwgqza',
    authKey: '315318824629964106',
    name: '28648e36-eb53-4814-9213-ce569fdf115a',
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:17.378+00:00',
    updated: '2022-06-07T23:41:17.378+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:17.378+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
  status: 'queued',
  created: 2022-06-07T23:41:17.378Z,
  pin: {
    cid: 'baeaaadjrgq2syobwha2tsnzwgqza',
    name: '28648e36-eb53-4814-9213-ce569fdf115a',
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cd4be52824a-IAD",
  "connection": "close",
  "content-length": "3831",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "7bc74f01-4e1d-4929-9422-ff0f41ff63cb",
  "status": "queued",
  "created": "2022-06-07T23:41:17.378+00:00",
  "pin": {
    "cid": "baeaaadjrgq2syobwha2tsnzwgqza",
    "_id": "7bc74f01-4e1d-4929-9422-ff0f41ff63cb",
    "sourceCid": "baeaaadjrgq2syobwha2tsnzwgqza",
    "contentCid": "baeaaadjrgq2syobwha2tsnzwgqza",
    "authKey": "315318824629964106",
    "name": "28648e36-eb53-4814-9213-ce569fdf115a",
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:17.378+00:00",
    "updated": "2022-06-07T23:41:17.378+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqgqydmnjxgizq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqgqydmnjxgizq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
  status: 'queued',
  created: '2022-06-07T23:41:22.585+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqgqydmnjxgizq',
    _id: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
    sourceCid: 'baeaaadjrguycynjqgqydmnjxgizq',
    contentCid: 'baeaaadjrguycynjqgqydmnjxgizq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:22.585+00:00',
    updated: '2022-06-07T23:41:22.585+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:22.585+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
  status: 'queued',
  created: 2022-06-07T23:41:22.585Z,
  pin: {
    cid: 'baeaaadjrguycynjqgqydmnjxgizq',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cf4e85a5dc2-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:22 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "1ec3c301-23c3-458f-89e8-75eb20c0c88d",
  "status": "queued",
  "created": "2022-06-07T23:41:22.585+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqgqydmnjxgizq",
    "_id": "1ec3c301-23c3-458f-89e8-75eb20c0c88d",
    "sourceCid": "baeaaadjrguycynjqgqydmnjxgizq",
    "contentCid": "baeaaadjrguycynjqgqydmnjxgizq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:22.585+00:00",
    "updated": "2022-06-07T23:41:22.585+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqgq3tmnbtge4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqgq3tmnbtge4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
  status: 'queued',
  created: '2022-06-07T23:41:23.846+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqgq3tmnbtge4q',
    _id: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
    sourceCid: 'baeaaadjrguycynjqgq3tmnbtge4q',
    contentCid: 'baeaaadjrguycynjqgq3tmnbtge4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:23.846+00:00',
    updated: '2022-06-07T23:41:23.846+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:23.846+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
  status: 'queued',
  created: 2022-06-07T23:41:23.846Z,
  pin: {
    cid: 'baeaaadjrguycynjqgq3tmnbtge4q',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cfb1a9a5b3a-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:23 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "0fe60154-196b-4782-b098-42cdd4eb1a3e",
  "status": "queued",
  "created": "2022-06-07T23:41:23.846+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqgq3tmnbtge4q",
    "_id": "0fe60154-196b-4782-b098-42cdd4eb1a3e",
    "sourceCid": "baeaaadjrguycynjqgq3tmnbtge4q",
    "contentCid": "baeaaadjrguycynjqgq3tmnbtge4q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:23.846+00:00",
    "updated": "2022-06-07T23:41:23.846+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqguzdcnztge3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqguzdcnztge3a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '5640ab66-67df-416d-9aab-328a116cbedf',
  status: 'queued',
  created: '2022-06-07T23:41:24.288+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqguzdcnztge3a',
    _id: '5640ab66-67df-416d-9aab-328a116cbedf',
    sourceCid: 'baeaaadjrguycynjqguzdcnztge3a',
    contentCid: 'baeaaadjrguycynjqguzdcnztge3a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:24.288+00:00',
    updated: '2022-06-07T23:41:24.288+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:24.288+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '5640ab66-67df-416d-9aab-328a116cbedf',
  status: 'queued',
  created: 2022-06-07T23:41:24.288Z,
  pin: {
    cid: 'baeaaadjrguycynjqguzdcnztge3a',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d018a3b599e-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:24 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "5640ab66-67df-416d-9aab-328a116cbedf",
  "status": "queued",
  "created": "2022-06-07T23:41:24.288+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqguzdcnztge3a",
    "_id": "5640ab66-67df-416d-9aab-328a116cbedf",
    "sourceCid": "baeaaadjrguycynjqguzdcnztge3a",
    "contentCid": "baeaaadjrguycynjqguzdcnztge3a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:24.288+00:00",
    "updated": "2022-06-07T23:41:24.288+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqgu2tsobxge2a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqgu2tsobxge2a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
  status: 'queued',
  created: '2022-06-07T23:41:25.616+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqgu2tsobxge2a',
    _id: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
    sourceCid: 'baeaaadjrguycynjqgu2tsobxge2a',
    contentCid: 'baeaaadjrguycynjqgu2tsobxge2a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:25.616+00:00',
    updated: '2022-06-07T23:41:25.616+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:25.616+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
  status: 'queued',
  created: 2022-06-07T23:41:25.616Z,
  pin: {
    cid: 'baeaaadjrguycynjqgu2tsobxge2a',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d07afed059c-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:25 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "01bbcdb3-857c-459e-afcf-6c226de1b48a",
  "status": "queued",
  "created": "2022-06-07T23:41:25.616+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqgu2tsobxge2a",
    "_id": "01bbcdb3-857c-459e-afcf-6c226de1b48a",
    "sourceCid": "baeaaadjrguycynjqgu2tsobxge2a",
    "contentCid": "baeaaadjrguycynjqgu2tsobxge2a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:25.616+00:00",
    "updated": "2022-06-07T23:41:25.616+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqgyydkojugeyq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqgyydkojugeyq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '1a671893-a350-41be-afae-94640391a9fe',
  status: 'queued',
  created: '2022-06-07T23:41:26.641+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqgyydkojugeyq',
    _id: '1a671893-a350-41be-afae-94640391a9fe',
    sourceCid: 'baeaaadjrguycynjqgyydkojugeyq',
    contentCid: 'baeaaadjrguycynjqgyydkojugeyq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:26.641+00:00',
    updated: '2022-06-07T23:41:26.641+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:26.641+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '1a671893-a350-41be-afae-94640391a9fe',
  status: 'queued',
  created: 2022-06-07T23:41:26.641Z,
  pin: {
    cid: 'baeaaadjrguycynjqgyydkojugeyq',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d0de8a881db-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:26 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "1a671893-a350-41be-afae-94640391a9fe",
  "status": "queued",
  "created": "2022-06-07T23:41:26.641+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqgyydkojugeyq",
    "_id": "1a671893-a350-41be-afae-94640391a9fe",
    "sourceCid": "baeaaadjrguycynjqgyydkojugeyq",
    "contentCid": "baeaaadjrguycynjqgyydkojugeyq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:26.641+00:00",
    "updated": "2022-06-07T23:41:26.641+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqgy2dimjtga4a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqgy2dimjtga4a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'db03f48b-fd22-4599-a85d-d3adccef2749',
  status: 'queued',
  created: '2022-06-07T23:41:27.614+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqgy2dimjtga4a',
    _id: 'db03f48b-fd22-4599-a85d-d3adccef2749',
    sourceCid: 'baeaaadjrguycynjqgy2dimjtga4a',
    contentCid: 'baeaaadjrguycynjqgy2dimjtga4a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:27.614+00:00',
    updated: '2022-06-07T23:41:27.614+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:27.614+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'db03f48b-fd22-4599-a85d-d3adccef2749',
  status: 'queued',
  created: 2022-06-07T23:41:27.614Z,
  pin: {
    cid: 'baeaaadjrguycynjqgy2dimjtga4a',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d143cc805b5-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:27 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "db03f48b-fd22-4599-a85d-d3adccef2749",
  "status": "queued",
  "created": "2022-06-07T23:41:27.614+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqgy2dimjtga4a",
    "_id": "db03f48b-fd22-4599-a85d-d3adccef2749",
    "sourceCid": "baeaaadjrguycynjqgy2dimjtga4a",
    "contentCid": "baeaaadjrguycynjqgy2dimjtga4a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:27.614+00:00",
    "updated": "2022-06-07T23:41:27.614+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqgy3tsmbrga3a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqgy3tsmbrga3a"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
  status: 'queued',
  created: '2022-06-07T23:41:28.463+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqgy3tsmbrga3a',
    _id: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
    sourceCid: 'baeaaadjrguycynjqgy3tsmbrga3a',
    contentCid: 'baeaaadjrguycynjqgy3tsmbrga3a',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:28.463+00:00',
    updated: '2022-06-07T23:41:28.463+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:28.463+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
  status: 'queued',
  created: 2022-06-07T23:41:28.463Z,
  pin: {
    cid: 'baeaaadjrguycynjqgy3tsmbrga3a',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d1a6c50599e-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:28 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "aa5e2c66-5815-4d36-8303-d663c21491a4",
  "status": "queued",
  "created": "2022-06-07T23:41:28.463+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqgy3tsmbrga3a",
    "_id": "aa5e2c66-5815-4d36-8303-d663c21491a4",
    "sourceCid": "baeaaadjrguycynjqgy3tsmbrga3a",
    "contentCid": "baeaaadjrguycynjqgy3tsmbrga3a",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:28.463+00:00",
    "updated": "2022-06-07T23:41:28.463+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqg4zdimzzgazq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqg4zdimzzgazq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '28c16a14-b0b7-4833-bac4-f5843921cf68',
  status: 'queued',
  created: '2022-06-07T23:41:30.007+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqg4zdimzzgazq',
    _id: '28c16a14-b0b7-4833-bac4-f5843921cf68',
    sourceCid: 'baeaaadjrguycynjqg4zdimzzgazq',
    contentCid: 'baeaaadjrguycynjqg4zdimzzgazq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:30.007+00:00',
    updated: '2022-06-07T23:41:30.007+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.007+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '28c16a14-b0b7-4833-bac4-f5843921cf68',
  status: 'queued',
  created: 2022-06-07T23:41:30.007Z,
  pin: {
    cid: 'baeaaadjrguycynjqg4zdimzzgazq',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d20ba815daa-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "28c16a14-b0b7-4833-bac4-f5843921cf68",
  "status": "queued",
  "created": "2022-06-07T23:41:30.007+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqg4zdimzzgazq",
    "_id": "28c16a14-b0b7-4833-bac4-f5843921cf68",
    "sourceCid": "baeaaadjrguycynjqg4zdimzzgazq",
    "contentCid": "baeaaadjrguycynjqg4zdimzzgazq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:30.007+00:00",
    "updated": "2022-06-07T23:41:30.007+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqg42tsmrwgayq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqg42tsmrwgayq"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
  status: 'queued',
  created: '2022-06-07T23:41:30.375+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqg42tsmrwgayq',
    _id: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
    sourceCid: 'baeaaadjrguycynjqg42tsmrwgayq',
    contentCid: 'baeaaadjrguycynjqg42tsmrwgayq',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:30.375+00:00',
    updated: '2022-06-07T23:41:30.375+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:30.375+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
  status: 'queued',
  created: 2022-06-07T23:41:30.375Z,
  pin: {
    cid: 'baeaaadjrguycynjqg42tsmrwgayq',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d27be33599e-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:30 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7",
  "status": "queued",
  "created": "2022-06-07T23:41:30.375+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqg42tsmrwgayq",
    "_id": "4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7",
    "sourceCid": "baeaaadjrguycynjqg42tsmrwgayq",
    "contentCid": "baeaaadjrguycynjqg42tsmrwgayq",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:30.375+00:00",
    "updated": "2022-06-07T23:41:30.375+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqg44temrwhe4q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqg44temrwhe4q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
  status: 'queued',
  created: '2022-06-07T23:41:31.515+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqg44temrwhe4q',
    _id: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
    sourceCid: 'baeaaadjrguycynjqg44temrwhe4q',
    contentCid: 'baeaaadjrguycynjqg44temrwhe4q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:31.515+00:00',
    updated: '2022-06-07T23:41:31.515+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:31.515+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
  status: 'queued',
  created: 2022-06-07T23:41:31.515Z,
  pin: {
    cid: 'baeaaadjrguycynjqg44temrwhe4q',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d2d2f16062f-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:31 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0",
  "status": "queued",
  "created": "2022-06-07T23:41:31.515+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqg44temrwhe4q",
    "_id": "1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0",
    "sourceCid": "baeaaadjrguycynjqg44temrwhe4q",
    "contentCid": "baeaaadjrguycynjqg44temrwhe4q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:31.515+00:00",
    "updated": "2022-06-07T23:41:31.515+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqhazdinzxhe3q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqhazdinzxhe3q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
  status: 'queued',
  created: '2022-06-07T23:41:32.269+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqhazdinzxhe3q',
    _id: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
    sourceCid: 'baeaaadjrguycynjqhazdinzxhe3q',
    contentCid: 'baeaaadjrguycynjqhazdinzxhe3q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:32.269+00:00',
    updated: '2022-06-07T23:41:32.269+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:32.269+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
  status: 'queued',
  created: 2022-06-07T23:41:32.269Z,
  pin: {
    cid: 'baeaaadjrguycynjqhazdinzxhe3q',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d33a96c059c-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:32 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "14cc140e-8e26-4402-9e3f-9e7bf5c1b139",
  "status": "queued",
  "created": "2022-06-07T23:41:32.269+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqhazdinzxhe3q",
    "_id": "14cc140e-8e26-4402-9e3f-9e7bf5c1b139",
    "sourceCid": "baeaaadjrguycynjqhazdinzxhe3q",
    "contentCid": "baeaaadjrguycynjqhazdinzxhe3q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:32.269+00:00",
    "updated": "2022-06-07T23:41:32.269+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Can create new pin for testing pagination cid='baeaaadjrguycynjqha2tmnruhe2q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)





### Details

#### Request - POST: https://api.web3.storage/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadjrguycynjqha2tmnruhe2q"}
```
#### Response data from https://api.web3.storage/pins
```
{
  requestid: '37b5c8d9-b77f-4255-9233-b7442912b50d',
  status: 'queued',
  created: '2022-06-07T23:41:33.946+00:00',
  pin: {
    cid: 'baeaaadjrguycynjqha2tmnruhe2q',
    _id: '37b5c8d9-b77f-4255-9233-b7442912b50d',
    sourceCid: 'baeaaadjrguycynjqha2tmnruhe2q',
    contentCid: 'baeaaadjrguycynjqha2tmnruhe2q',
    authKey: '315318824629964106',
    name: null,
    origins: null,
    meta: null,
    deleted: null,
    created: '2022-06-07T23:41:33.946+00:00',
    updated: '2022-06-07T23:41:33.946+00:00',
    pins: [
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1',
        peerName: 'web3-storage-sv15',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU',
        peerName: 'web3-storage-dc13',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW',
        peerName: 'web3-storage-am6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK',
        peerName: 'web3-storage-sv15-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj',
        peerName: 'web3-storage-am6-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ',
        peerName: 'web3-storage-dc13-2',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP',
        peerName: 'web3-storage-dc13-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy',
        peerName: 'web3-storage-sv15-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m',
        peerName: 'web3-storage-am6-3',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL',
        peerName: 'web3-storage-am6-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA',
        peerName: 'web3-storage-am6-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V',
        peerName: 'web3-storage-dc13-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k',
        peerName: 'web3-storage-dc13-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i',
        peerName: 'web3-storage-sv15-5',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr',
        peerName: 'web3-storage-sv15-4',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn',
        peerName: 'web3-storage-am6-6',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG',
        peerName: 'web3-storage-am6-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF',
        peerName: 'web3-storage-dc13-8',
        region: null
      },
      {
        status: 'Unpinned',
        updated: '2022-06-07T23:41:33.946+00:00',
        peerId: '12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT',
        peerName: 'web3-storage-sv15-8',
        region: null
      }
    ]
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '37b5c8d9-b77f-4255-9233-b7442912b50d',
  status: 'queued',
  created: 2022-06-07T23:41:33.946Z,
  pin: {
    cid: 'baeaaadjrguycynjqha2tmnruhe2q',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d39aa6f5b9a-IAD",
  "connection": "close",
  "content-length": "3797",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:34 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "requestid": "37b5c8d9-b77f-4255-9233-b7442912b50d",
  "status": "queued",
  "created": "2022-06-07T23:41:33.946+00:00",
  "pin": {
    "cid": "baeaaadjrguycynjqha2tmnruhe2q",
    "_id": "37b5c8d9-b77f-4255-9233-b7442912b50d",
    "sourceCid": "baeaaadjrguycynjqha2tmnruhe2q",
    "contentCid": "baeaaadjrguycynjqha2tmnruhe2q",
    "authKey": "315318824629964106",
    "name": null,
    "origins": null,
    "meta": null,
    "deleted": null,
    "created": "2022-06-07T23:41:33.946+00:00",
    "updated": "2022-06-07T23:41:33.946+00:00",
    "pins": [
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
        "peerName": "web3-storage-sv15",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
        "peerName": "web3-storage-dc13",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
        "peerName": "web3-storage-am6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
        "peerName": "web3-storage-sv15-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
        "peerName": "web3-storage-am6-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
        "peerName": "web3-storage-dc13-2",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
        "peerName": "web3-storage-dc13-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
        "peerName": "web3-storage-sv15-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
        "peerName": "web3-storage-am6-3",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
        "peerName": "web3-storage-am6-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
        "peerName": "web3-storage-am6-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
        "peerName": "web3-storage-dc13-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
        "peerName": "web3-storage-dc13-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
        "peerName": "web3-storage-sv15-5",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
        "peerName": "web3-storage-sv15-4",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
        "peerName": "web3-storage-am6-6",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
        "peerName": "web3-storage-am6-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
        "peerName": "web3-storage-dc13-8",
        "region": null
      },
      {
        "status": "Unpinned",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
        "peerName": "web3-storage-sv15-8",
        "region": null
      }
    ]
  },
  "delegates": []
}
```
## Pagination: First page of pins - ✓ SUCCESS

### Expectations (5/5 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Count is greater than or equal to 15 (success)

  ✓ Count is greater than the number of pins returned (success)

  ✓ Number of pins returned defaults to 10 (success)





### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 15,
  results: [
    {
      requestid: '37b5c8d9-b77f-4255-9233-b7442912b50d',
      status: 'queued',
      created: '2022-06-07T23:41:33.946+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqha2tmnruhe2q',
        _id: '37b5c8d9-b77f-4255-9233-b7442912b50d',
        sourceCid: 'baeaaadjrguycynjqha2tmnruhe2q',
        contentCid: 'baeaaadjrguycynjqha2tmnruhe2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:33.946+00:00',
        updated: '2022-06-07T23:41:33.946+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
      status: 'queued',
      created: '2022-06-07T23:41:32.269+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqhazdinzxhe3q',
        _id: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
        sourceCid: 'baeaaadjrguycynjqhazdinzxhe3q',
        contentCid: 'baeaaadjrguycynjqhazdinzxhe3q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:32.269+00:00',
        updated: '2022-06-07T23:41:32.269+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
      status: 'queued',
      created: '2022-06-07T23:41:31.515+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqg44temrwhe4q',
        _id: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
        sourceCid: 'baeaaadjrguycynjqg44temrwhe4q',
        contentCid: 'baeaaadjrguycynjqg44temrwhe4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:31.515+00:00',
        updated: '2022-06-07T23:41:31.515+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
      status: 'queued',
      created: '2022-06-07T23:41:30.375+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqg42tsmrwgayq',
        _id: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
        sourceCid: 'baeaaadjrguycynjqg42tsmrwgayq',
        contentCid: 'baeaaadjrguycynjqg42tsmrwgayq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:30.375+00:00',
        updated: '2022-06-07T23:41:30.375+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '28c16a14-b0b7-4833-bac4-f5843921cf68',
      status: 'queued',
      created: '2022-06-07T23:41:30.007+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqg4zdimzzgazq',
        _id: '28c16a14-b0b7-4833-bac4-f5843921cf68',
        sourceCid: 'baeaaadjrguycynjqg4zdimzzgazq',
        contentCid: 'baeaaadjrguycynjqg4zdimzzgazq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:30.007+00:00',
        updated: '2022-06-07T23:41:30.007+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
      status: 'queued',
      created: '2022-06-07T23:41:28.463+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgy3tsmbrga3a',
        _id: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
        sourceCid: 'baeaaadjrguycynjqgy3tsmbrga3a',
        contentCid: 'baeaaadjrguycynjqgy3tsmbrga3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:28.463+00:00',
        updated: '2022-06-07T23:41:28.463+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: 'db03f48b-fd22-4599-a85d-d3adccef2749',
      status: 'queued',
      created: '2022-06-07T23:41:27.614+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgy2dimjtga4a',
        _id: 'db03f48b-fd22-4599-a85d-d3adccef2749',
        sourceCid: 'baeaaadjrguycynjqgy2dimjtga4a',
        contentCid: 'baeaaadjrguycynjqgy2dimjtga4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:27.614+00:00',
        updated: '2022-06-07T23:41:27.614+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '1a671893-a350-41be-afae-94640391a9fe',
      status: 'queued',
      created: '2022-06-07T23:41:26.641+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgyydkojugeyq',
        _id: '1a671893-a350-41be-afae-94640391a9fe',
        sourceCid: 'baeaaadjrguycynjqgyydkojugeyq',
        contentCid: 'baeaaadjrguycynjqgyydkojugeyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:26.641+00:00',
        updated: '2022-06-07T23:41:26.641+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
      status: 'queued',
      created: '2022-06-07T23:41:25.616+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgu2tsobxge2a',
        _id: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
        sourceCid: 'baeaaadjrguycynjqgu2tsobxge2a',
        contentCid: 'baeaaadjrguycynjqgu2tsobxge2a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:25.616+00:00',
        updated: '2022-06-07T23:41:25.616+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '5640ab66-67df-416d-9aab-328a116cbedf',
      status: 'queued',
      created: '2022-06-07T23:41:24.288+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqguzdcnztge3a',
        _id: '5640ab66-67df-416d-9aab-328a116cbedf',
        sourceCid: 'baeaaadjrguycynjqguzdcnztge3a',
        contentCid: 'baeaaadjrguycynjqguzdcnztge3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:24.288+00:00',
        updated: '2022-06-07T23:41:24.288+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 15,
  results: Set(10) {
    {
      requestid: '37b5c8d9-b77f-4255-9233-b7442912b50d',
      status: 'queued',
      created: 2022-06-07T23:41:33.946Z,
      pin: {
        cid: 'baeaaadjrguycynjqha2tmnruhe2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
      status: 'queued',
      created: 2022-06-07T23:41:32.269Z,
      pin: {
        cid: 'baeaaadjrguycynjqhazdinzxhe3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
      status: 'queued',
      created: 2022-06-07T23:41:31.515Z,
      pin: {
        cid: 'baeaaadjrguycynjqg44temrwhe4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
      status: 'queued',
      created: 2022-06-07T23:41:30.375Z,
      pin: {
        cid: 'baeaaadjrguycynjqg42tsmrwgayq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '28c16a14-b0b7-4833-bac4-f5843921cf68',
      status: 'queued',
      created: 2022-06-07T23:41:30.007Z,
      pin: {
        cid: 'baeaaadjrguycynjqg4zdimzzgazq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
      status: 'queued',
      created: 2022-06-07T23:41:28.463Z,
      pin: {
        cid: 'baeaaadjrguycynjqgy3tsmbrga3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'db03f48b-fd22-4599-a85d-d3adccef2749',
      status: 'queued',
      created: 2022-06-07T23:41:27.614Z,
      pin: {
        cid: 'baeaaadjrguycynjqgy2dimjtga4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '1a671893-a350-41be-afae-94640391a9fe',
      status: 'queued',
      created: 2022-06-07T23:41:26.641Z,
      pin: {
        cid: 'baeaaadjrguycynjqgyydkojugeyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
      status: 'queued',
      created: 2022-06-07T23:41:25.616Z,
      pin: {
        cid: 'baeaaadjrguycynjqgu2tsobxge2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5640ab66-67df-416d-9aab-328a116cbedf',
      status: 'queued',
      created: 2022-06-07T23:41:24.288Z,
      pin: {
        cid: 'baeaaadjrguycynjqguzdcnztge3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d40992e05b5-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:34 GMT",
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
      "requestid": "37b5c8d9-b77f-4255-9233-b7442912b50d",
      "status": "queued",
      "created": "2022-06-07T23:41:33.946+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqha2tmnruhe2q",
        "_id": "37b5c8d9-b77f-4255-9233-b7442912b50d",
        "sourceCid": "baeaaadjrguycynjqha2tmnruhe2q",
        "contentCid": "baeaaadjrguycynjqha2tmnruhe2q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:33.946+00:00",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "14cc140e-8e26-4402-9e3f-9e7bf5c1b139",
      "status": "queued",
      "created": "2022-06-07T23:41:32.269+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqhazdinzxhe3q",
        "_id": "14cc140e-8e26-4402-9e3f-9e7bf5c1b139",
        "sourceCid": "baeaaadjrguycynjqhazdinzxhe3q",
        "contentCid": "baeaaadjrguycynjqhazdinzxhe3q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:32.269+00:00",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0",
      "status": "queued",
      "created": "2022-06-07T23:41:31.515+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqg44temrwhe4q",
        "_id": "1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0",
        "sourceCid": "baeaaadjrguycynjqg44temrwhe4q",
        "contentCid": "baeaaadjrguycynjqg44temrwhe4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:31.515+00:00",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7",
      "status": "queued",
      "created": "2022-06-07T23:41:30.375+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqg42tsmrwgayq",
        "_id": "4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7",
        "sourceCid": "baeaaadjrguycynjqg42tsmrwgayq",
        "contentCid": "baeaaadjrguycynjqg42tsmrwgayq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:30.375+00:00",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "28c16a14-b0b7-4833-bac4-f5843921cf68",
      "status": "queued",
      "created": "2022-06-07T23:41:30.007+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqg4zdimzzgazq",
        "_id": "28c16a14-b0b7-4833-bac4-f5843921cf68",
        "sourceCid": "baeaaadjrguycynjqg4zdimzzgazq",
        "contentCid": "baeaaadjrguycynjqg4zdimzzgazq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:30.007+00:00",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "aa5e2c66-5815-4d36-8303-d663c21491a4",
      "status": "queued",
      "created": "2022-06-07T23:41:28.463+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgy3tsmbrga3a",
        "_id": "aa5e2c66-5815-4d36-8303-d663c21491a4",
        "sourceCid": "baeaaadjrguycynjqgy3tsmbrga3a",
        "contentCid": "baeaaadjrguycynjqgy3tsmbrga3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:28.463+00:00",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db03f48b-fd22-4599-a85d-d3adccef2749",
      "status": "queued",
      "created": "2022-06-07T23:41:27.614+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgy2dimjtga4a",
        "_id": "db03f48b-fd22-4599-a85d-d3adccef2749",
        "sourceCid": "baeaaadjrguycynjqgy2dimjtga4a",
        "contentCid": "baeaaadjrguycynjqgy2dimjtga4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:27.614+00:00",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1a671893-a350-41be-afae-94640391a9fe",
      "status": "queued",
      "created": "2022-06-07T23:41:26.641+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgyydkojugeyq",
        "_id": "1a671893-a350-41be-afae-94640391a9fe",
        "sourceCid": "baeaaadjrguycynjqgyydkojugeyq",
        "contentCid": "baeaaadjrguycynjqgyydkojugeyq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:26.641+00:00",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "01bbcdb3-857c-459e-afcf-6c226de1b48a",
      "status": "queued",
      "created": "2022-06-07T23:41:25.616+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgu2tsobxge2a",
        "_id": "01bbcdb3-857c-459e-afcf-6c226de1b48a",
        "sourceCid": "baeaaadjrguycynjqgu2tsobxge2a",
        "contentCid": "baeaaadjrguycynjqgu2tsobxge2a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:25.616+00:00",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5640ab66-67df-416d-9aab-328a116cbedf",
      "status": "queued",
      "created": "2022-06-07T23:41:24.288+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqguzdcnztge3a",
        "_id": "5640ab66-67df-416d-9aab-328a116cbedf",
        "sourceCid": "baeaaadjrguycynjqguzdcnztge3a",
        "contentCid": "baeaaadjrguycynjqguzdcnztge3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:24.288+00:00",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
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
## Pagination: Retrieve the next page of pins - ✘ FAILED

### Expectations (2/3 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✘ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T23%3A41%3A24.288Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T23%3A41%3A24.288Z
```
{
  count: 6,
  results: [
    {
      requestid: '5640ab66-67df-416d-9aab-328a116cbedf',
      status: 'queued',
      created: '2022-06-07T23:41:24.288+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqguzdcnztge3a',
        _id: '5640ab66-67df-416d-9aab-328a116cbedf',
        sourceCid: 'baeaaadjrguycynjqguzdcnztge3a',
        contentCid: 'baeaaadjrguycynjqguzdcnztge3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:24.288+00:00',
        updated: '2022-06-07T23:41:24.288+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
      status: 'queued',
      created: '2022-06-07T23:41:23.846+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgq3tmnbtge4q',
        _id: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
        sourceCid: 'baeaaadjrguycynjqgq3tmnbtge4q',
        contentCid: 'baeaaadjrguycynjqgq3tmnbtge4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:23.846+00:00',
        updated: '2022-06-07T23:41:23.846+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
      status: 'queued',
      created: '2022-06-07T23:41:22.585+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgqydmnjxgizq',
        _id: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
        sourceCid: 'baeaaadjrguycynjqgqydmnjxgizq',
        contentCid: 'baeaaadjrguycynjqgqydmnjxgizq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:22.585+00:00',
        updated: '2022-06-07T23:41:22.585+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
      status: 'queued',
      created: '2022-06-07T23:41:17.378+00:00',
      pin: {
        cid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        _id: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
        sourceCid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        contentCid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        authKey: 315318824629964100,
        name: '28648e36-eb53-4814-9213-ce569fdf115a',
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:17.378+00:00',
        updated: '2022-06-07T23:41:17.378+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
      status: 'queued',
      created: '2022-06-07T23:41:15.326+00:00',
      pin: {
        cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        _id: 'c06893f6-8c5c-4278-abe8-592a734628c5',
        sourceCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        contentCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:15.326+00:00',
        updated: '2022-06-07T23:41:15.326+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
      status: 'queued',
      created: '2022-06-07T23:41:10.471+00:00',
      pin: {
        cid: 'baeaaadjrgm4cymrxg43denjygeza',
        _id: '11566992-af0a-4ede-9530-ea28bc7cf58a',
        sourceCid: 'baeaaadjrgm4cymrxg43denjygeza',
        contentCid: 'baeaaadjrgm4cymrxg43denjygeza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:10.471+00:00',
        updated: '2022-06-07T23:41:10.471+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 6,
  results: Set(6) {
    {
      requestid: '5640ab66-67df-416d-9aab-328a116cbedf',
      status: 'queued',
      created: 2022-06-07T23:41:24.288Z,
      pin: {
        cid: 'baeaaadjrguycynjqguzdcnztge3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
      status: 'queued',
      created: 2022-06-07T23:41:23.846Z,
      pin: {
        cid: 'baeaaadjrguycynjqgq3tmnbtge4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
      status: 'queued',
      created: 2022-06-07T23:41:22.585Z,
      pin: {
        cid: 'baeaaadjrguycynjqgqydmnjxgizq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
      status: 'queued',
      created: 2022-06-07T23:41:17.378Z,
      pin: {
        cid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        name: '28648e36-eb53-4814-9213-ce569fdf115a',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
      status: 'queued',
      created: 2022-06-07T23:41:15.326Z,
      pin: {
        cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
      status: 'queued',
      created: 2022-06-07T23:41:10.471Z,
      pin: {
        cid: 'baeaaadjrgm4cymrxg43denjygeza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d41e8fa8023-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:34 GMT",
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
      "requestid": "5640ab66-67df-416d-9aab-328a116cbedf",
      "status": "queued",
      "created": "2022-06-07T23:41:24.288+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqguzdcnztge3a",
        "_id": "5640ab66-67df-416d-9aab-328a116cbedf",
        "sourceCid": "baeaaadjrguycynjqguzdcnztge3a",
        "contentCid": "baeaaadjrguycynjqguzdcnztge3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:24.288+00:00",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "0fe60154-196b-4782-b098-42cdd4eb1a3e",
      "status": "queued",
      "created": "2022-06-07T23:41:23.846+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgq3tmnbtge4q",
        "_id": "0fe60154-196b-4782-b098-42cdd4eb1a3e",
        "sourceCid": "baeaaadjrguycynjqgq3tmnbtge4q",
        "contentCid": "baeaaadjrguycynjqgq3tmnbtge4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:23.846+00:00",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1ec3c301-23c3-458f-89e8-75eb20c0c88d",
      "status": "queued",
      "created": "2022-06-07T23:41:22.585+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgqydmnjxgizq",
        "_id": "1ec3c301-23c3-458f-89e8-75eb20c0c88d",
        "sourceCid": "baeaaadjrguycynjqgqydmnjxgizq",
        "contentCid": "baeaaadjrguycynjqgqydmnjxgizq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:22.585+00:00",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "7bc74f01-4e1d-4929-9422-ff0f41ff63cb",
      "status": "queued",
      "created": "2022-06-07T23:41:17.378+00:00",
      "pin": {
        "cid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "_id": "7bc74f01-4e1d-4929-9422-ff0f41ff63cb",
        "sourceCid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "contentCid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "authKey": 315318824629964100,
        "name": "28648e36-eb53-4814-9213-ce569fdf115a",
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:17.378+00:00",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "c06893f6-8c5c-4278-abe8-592a734628c5",
      "status": "queued",
      "created": "2022-06-07T23:41:15.326+00:00",
      "pin": {
        "cid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "_id": "c06893f6-8c5c-4278-abe8-592a734628c5",
        "sourceCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "contentCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:15.326+00:00",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "11566992-af0a-4ede-9530-ea28bc7cf58a",
      "status": "queued",
      "created": "2022-06-07T23:41:10.471+00:00",
      "pin": {
        "cid": "baeaaadjrgm4cymrxg43denjygeza",
        "_id": "11566992-af0a-4ede-9530-ea28bc7cf58a",
        "sourceCid": "baeaaadjrgm4cymrxg43denjygeza",
        "contentCid": "baeaaadjrgm4cymrxg43denjygeza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:10.471+00:00",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
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
## Pagination: Get all pins, create new pins (optional), get first and second pages - ✘ FAILED

### Expectations (33/34 successful)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✓ Count is greater than or equal to 15 (success)

  ✓ Count is greater than the number of pins returned (success)

  ✓ Number of pins returned defaults to 10 (success)

  ✓ Response is ok (success)

  ✓ Result is not null (success)

  ✘ The next page of pins doesn't contain any of previous pages pins (failure)





### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 3,
  results: [
    {
      requestid: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
      status: 'queued',
      created: '2022-06-07T23:41:17.378+00:00',
      pin: {
        cid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        _id: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
        sourceCid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        contentCid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        authKey: 315318824629964100,
        name: '28648e36-eb53-4814-9213-ce569fdf115a',
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:17.378+00:00',
        updated: '2022-06-07T23:41:17.378+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
      status: 'queued',
      created: '2022-06-07T23:41:15.326+00:00',
      pin: {
        cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        _id: 'c06893f6-8c5c-4278-abe8-592a734628c5',
        sourceCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        contentCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:15.326+00:00',
        updated: '2022-06-07T23:41:15.326+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
      status: 'queued',
      created: '2022-06-07T23:41:10.471+00:00',
      pin: {
        cid: 'baeaaadjrgm4cymrxg43denjygeza',
        _id: '11566992-af0a-4ede-9530-ea28bc7cf58a',
        sourceCid: 'baeaaadjrgm4cymrxg43denjygeza',
        contentCid: 'baeaaadjrgm4cymrxg43denjygeza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:10.471+00:00',
        updated: '2022-06-07T23:41:10.471+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 3,
  results: Set(3) {
    {
      requestid: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
      status: 'queued',
      created: 2022-06-07T23:41:17.378Z,
      pin: {
        cid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        name: '28648e36-eb53-4814-9213-ce569fdf115a',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
      status: 'queued',
      created: 2022-06-07T23:41:15.326Z,
      pin: {
        cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
      status: 'queued',
      created: 2022-06-07T23:41:10.471Z,
      pin: {
        cid: 'baeaaadjrgm4cymrxg43denjygeza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3cee9df581be-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:21 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 3,
  "results": [
    {
      "requestid": "7bc74f01-4e1d-4929-9422-ff0f41ff63cb",
      "status": "queued",
      "created": "2022-06-07T23:41:17.378+00:00",
      "pin": {
        "cid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "_id": "7bc74f01-4e1d-4929-9422-ff0f41ff63cb",
        "sourceCid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "contentCid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "authKey": 315318824629964100,
        "name": "28648e36-eb53-4814-9213-ce569fdf115a",
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:17.378+00:00",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "c06893f6-8c5c-4278-abe8-592a734628c5",
      "status": "queued",
      "created": "2022-06-07T23:41:15.326+00:00",
      "pin": {
        "cid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "_id": "c06893f6-8c5c-4278-abe8-592a734628c5",
        "sourceCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "contentCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:15.326+00:00",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "11566992-af0a-4ede-9530-ea28bc7cf58a",
      "status": "queued",
      "created": "2022-06-07T23:41:10.471+00:00",
      "pin": {
        "cid": "baeaaadjrgm4cymrxg43denjygeza",
        "_id": "11566992-af0a-4ede-9530-ea28bc7cf58a",
        "sourceCid": "baeaaadjrgm4cymrxg43denjygeza",
        "contentCid": "baeaaadjrgm4cymrxg43denjygeza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:10.471+00:00",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
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
## Can delete pin with requestid '37b5c8d9-b77f-4255-9233-b7442912b50d' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/37b5c8d9-b77f-4255-9233-b7442912b50d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/37b5c8d9-b77f-4255-9233-b7442912b50d
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d4e6f5d82d2-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '14cc140e-8e26-4402-9e3f-9e7bf5c1b139' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/14cc140e-8e26-4402-9e3f-9e7bf5c1b139

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/14cc140e-8e26-4402-9e3f-9e7bf5c1b139
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d54ad788f29-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:37 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d5b1cf5059c-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d61383282bc-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:39 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '28c16a14-b0b7-4833-bac4-f5843921cf68' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/28c16a14-b0b7-4833-bac4-f5843921cf68

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/28c16a14-b0b7-4833-bac4-f5843921cf68
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d677cf93812-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:40 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'aa5e2c66-5815-4d36-8303-d663c21491a4' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/aa5e2c66-5815-4d36-8303-d663c21491a4

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/aa5e2c66-5815-4d36-8303-d663c21491a4
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d6db8556f9e-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'db03f48b-fd22-4599-a85d-d3adccef2749' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/db03f48b-fd22-4599-a85d-d3adccef2749

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/db03f48b-fd22-4599-a85d-d3adccef2749
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d73ff7e700f-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:42 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '1a671893-a350-41be-afae-94640391a9fe' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/1a671893-a350-41be-afae-94640391a9fe

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/1a671893-a350-41be-afae-94640391a9fe
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d7a2cdc828c-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '01bbcdb3-857c-459e-afcf-6c226de1b48a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/01bbcdb3-857c-459e-afcf-6c226de1b48a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/01bbcdb3-857c-459e-afcf-6c226de1b48a
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d807e857ff1-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:44 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '5640ab66-67df-416d-9aab-328a116cbedf' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/5640ab66-67df-416d-9aab-328a116cbedf

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/5640ab66-67df-416d-9aab-328a116cbedf
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d86c9d15a45-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '0fe60154-196b-4782-b098-42cdd4eb1a3e' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/0fe60154-196b-4782-b098-42cdd4eb1a3e

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/0fe60154-196b-4782-b098-42cdd4eb1a3e
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d8feae13812-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '1ec3c301-23c3-458f-89e8-75eb20c0c88d' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/1ec3c301-23c3-458f-89e8-75eb20c0c88d

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/1ec3c301-23c3-458f-89e8-75eb20c0c88d
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d962eca81ee-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '7bc74f01-4e1d-4929-9422-ff0f41ff63cb' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/7bc74f01-4e1d-4929-9422-ff0f41ff63cb

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/7bc74f01-4e1d-4929-9422-ff0f41ff63cb
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d9c6cb4068c-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:49 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid 'c06893f6-8c5c-4278-abe8-592a734628c5' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/c06893f6-8c5c-4278-abe8-592a734628c5

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/c06893f6-8c5c-4278-abe8-592a734628c5
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3da29ba27ff4-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Can delete pin with requestid '11566992-af0a-4ede-9530-ea28bc7cf58a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - DELETE: https://api.web3.storage/pins/11566992-af0a-4ede-9530-ea28bc7cf58a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins/11566992-af0a-4ede-9530-ea28bc7cf58a
```
{}
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3da8ea7c82e0-IAD",
  "connection": "close",
  "content-length": "2",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:51 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{}
```
## Get all Pins created before 'Tue Jun 07 2022 23:41:24 GMT+0000 (Coordinated Universal Time)' - ✓ SUCCESS

### Expectations (10/10 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)





### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T23%3A41%3A24.288Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-07T23%3A41%3A24.288Z
```
{
  count: 5,
  results: [
    {
      requestid: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
      status: 'queued',
      created: '2022-06-07T23:41:23.846+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgq3tmnbtge4q',
        _id: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
        sourceCid: 'baeaaadjrguycynjqgq3tmnbtge4q',
        contentCid: 'baeaaadjrguycynjqgq3tmnbtge4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:23.846+00:00',
        updated: '2022-06-07T23:41:23.846+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
      status: 'queued',
      created: '2022-06-07T23:41:22.585+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgqydmnjxgizq',
        _id: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
        sourceCid: 'baeaaadjrguycynjqgqydmnjxgizq',
        contentCid: 'baeaaadjrguycynjqgqydmnjxgizq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:22.585+00:00',
        updated: '2022-06-07T23:41:22.585+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
      status: 'queued',
      created: '2022-06-07T23:41:17.378+00:00',
      pin: {
        cid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        _id: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
        sourceCid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        contentCid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        authKey: 315318824629964100,
        name: '28648e36-eb53-4814-9213-ce569fdf115a',
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:17.378+00:00',
        updated: '2022-06-07T23:41:17.378+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
      status: 'queued',
      created: '2022-06-07T23:41:15.326+00:00',
      pin: {
        cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        _id: 'c06893f6-8c5c-4278-abe8-592a734628c5',
        sourceCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        contentCid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:15.326+00:00',
        updated: '2022-06-07T23:41:15.326+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
      status: 'queued',
      created: '2022-06-07T23:41:10.471+00:00',
      pin: {
        cid: 'baeaaadjrgm4cymrxg43denjygeza',
        _id: '11566992-af0a-4ede-9530-ea28bc7cf58a',
        sourceCid: 'baeaaadjrgm4cymrxg43denjygeza',
        contentCid: 'baeaaadjrgm4cymrxg43denjygeza',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:10.471+00:00',
        updated: '2022-06-07T23:41:10.471+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 5,
  results: Set(5) {
    {
      requestid: '0fe60154-196b-4782-b098-42cdd4eb1a3e',
      status: 'queued',
      created: 2022-06-07T23:41:23.846Z,
      pin: {
        cid: 'baeaaadjrguycynjqgq3tmnbtge4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '1ec3c301-23c3-458f-89e8-75eb20c0c88d',
      status: 'queued',
      created: 2022-06-07T23:41:22.585Z,
      pin: {
        cid: 'baeaaadjrguycynjqgqydmnjxgizq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '7bc74f01-4e1d-4929-9422-ff0f41ff63cb',
      status: 'queued',
      created: 2022-06-07T23:41:17.378Z,
      pin: {
        cid: 'baeaaadjrgq2syobwha2tsnzwgqza',
        name: '28648e36-eb53-4814-9213-ce569fdf115a',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'c06893f6-8c5c-4278-abe8-592a734628c5',
      status: 'queued',
      created: 2022-06-07T23:41:15.326Z,
      pin: {
        cid: 'baeaaadjrgqzcynrtgqztanjzgi4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '11566992-af0a-4ede-9530-ea28bc7cf58a',
      status: 'queued',
      created: 2022-06-07T23:41:10.471Z,
      pin: {
        cid: 'baeaaadjrgm4cymrxg43denjygeza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d8cfe2b5890-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:46 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 5,
  "results": [
    {
      "requestid": "0fe60154-196b-4782-b098-42cdd4eb1a3e",
      "status": "queued",
      "created": "2022-06-07T23:41:23.846+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgq3tmnbtge4q",
        "_id": "0fe60154-196b-4782-b098-42cdd4eb1a3e",
        "sourceCid": "baeaaadjrguycynjqgq3tmnbtge4q",
        "contentCid": "baeaaadjrguycynjqgq3tmnbtge4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:23.846+00:00",
        "updated": "2022-06-07T23:41:23.846+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:23.846+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1ec3c301-23c3-458f-89e8-75eb20c0c88d",
      "status": "queued",
      "created": "2022-06-07T23:41:22.585+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgqydmnjxgizq",
        "_id": "1ec3c301-23c3-458f-89e8-75eb20c0c88d",
        "sourceCid": "baeaaadjrguycynjqgqydmnjxgizq",
        "contentCid": "baeaaadjrguycynjqgqydmnjxgizq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:22.585+00:00",
        "updated": "2022-06-07T23:41:22.585+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:22.585+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "7bc74f01-4e1d-4929-9422-ff0f41ff63cb",
      "status": "queued",
      "created": "2022-06-07T23:41:17.378+00:00",
      "pin": {
        "cid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "_id": "7bc74f01-4e1d-4929-9422-ff0f41ff63cb",
        "sourceCid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "contentCid": "baeaaadjrgq2syobwha2tsnzwgqza",
        "authKey": 315318824629964100,
        "name": "28648e36-eb53-4814-9213-ce569fdf115a",
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:17.378+00:00",
        "updated": "2022-06-07T23:41:17.378+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:17.378+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "c06893f6-8c5c-4278-abe8-592a734628c5",
      "status": "queued",
      "created": "2022-06-07T23:41:15.326+00:00",
      "pin": {
        "cid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "_id": "c06893f6-8c5c-4278-abe8-592a734628c5",
        "sourceCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "contentCid": "baeaaadjrgqzcynrtgqztanjzgi4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:15.326+00:00",
        "updated": "2022-06-07T23:41:15.326+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:15.326+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "11566992-af0a-4ede-9530-ea28bc7cf58a",
      "status": "queued",
      "created": "2022-06-07T23:41:10.471+00:00",
      "pin": {
        "cid": "baeaaadjrgm4cymrxg43denjygeza",
        "_id": "11566992-af0a-4ede-9530-ea28bc7cf58a",
        "sourceCid": "baeaaadjrgm4cymrxg43denjygeza",
        "contentCid": "baeaaadjrgm4cymrxg43denjygeza",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:10.471+00:00",
        "updated": "2022-06-07T23:41:10.471+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:10.471+00:00",
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
## Call pinsGet after deletions - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Final pinsGet call returns a count of zero (success)





### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3daf2f9e5c46-IAD",
  "connection": "close",
  "content-length": "24",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{
  "count": 0,
  "results": []
}
```
## Can delete all pins - ✓ SUCCESS

### Expectations (31/31 successful)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Response is ok (success)

  ✓ Response code is 202 (success)

  ✓ Final pinsGet call returns a count of zero (success)





### Details

#### Request - GET: https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.web3.storage/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 15,
  results: [
    {
      requestid: '37b5c8d9-b77f-4255-9233-b7442912b50d',
      status: 'queued',
      created: '2022-06-07T23:41:33.946+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqha2tmnruhe2q',
        _id: '37b5c8d9-b77f-4255-9233-b7442912b50d',
        sourceCid: 'baeaaadjrguycynjqha2tmnruhe2q',
        contentCid: 'baeaaadjrguycynjqha2tmnruhe2q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:33.946+00:00',
        updated: '2022-06-07T23:41:33.946+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
      status: 'queued',
      created: '2022-06-07T23:41:32.269+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqhazdinzxhe3q',
        _id: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
        sourceCid: 'baeaaadjrguycynjqhazdinzxhe3q',
        contentCid: 'baeaaadjrguycynjqhazdinzxhe3q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:32.269+00:00',
        updated: '2022-06-07T23:41:32.269+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
      status: 'queued',
      created: '2022-06-07T23:41:31.515+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqg44temrwhe4q',
        _id: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
        sourceCid: 'baeaaadjrguycynjqg44temrwhe4q',
        contentCid: 'baeaaadjrguycynjqg44temrwhe4q',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:31.515+00:00',
        updated: '2022-06-07T23:41:31.515+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
      status: 'queued',
      created: '2022-06-07T23:41:30.375+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqg42tsmrwgayq',
        _id: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
        sourceCid: 'baeaaadjrguycynjqg42tsmrwgayq',
        contentCid: 'baeaaadjrguycynjqg42tsmrwgayq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:30.375+00:00',
        updated: '2022-06-07T23:41:30.375+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '28c16a14-b0b7-4833-bac4-f5843921cf68',
      status: 'queued',
      created: '2022-06-07T23:41:30.007+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqg4zdimzzgazq',
        _id: '28c16a14-b0b7-4833-bac4-f5843921cf68',
        sourceCid: 'baeaaadjrguycynjqg4zdimzzgazq',
        contentCid: 'baeaaadjrguycynjqg4zdimzzgazq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:30.007+00:00',
        updated: '2022-06-07T23:41:30.007+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
      status: 'queued',
      created: '2022-06-07T23:41:28.463+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgy3tsmbrga3a',
        _id: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
        sourceCid: 'baeaaadjrguycynjqgy3tsmbrga3a',
        contentCid: 'baeaaadjrguycynjqgy3tsmbrga3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:28.463+00:00',
        updated: '2022-06-07T23:41:28.463+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: 'db03f48b-fd22-4599-a85d-d3adccef2749',
      status: 'queued',
      created: '2022-06-07T23:41:27.614+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgy2dimjtga4a',
        _id: 'db03f48b-fd22-4599-a85d-d3adccef2749',
        sourceCid: 'baeaaadjrguycynjqgy2dimjtga4a',
        contentCid: 'baeaaadjrguycynjqgy2dimjtga4a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:27.614+00:00',
        updated: '2022-06-07T23:41:27.614+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '1a671893-a350-41be-afae-94640391a9fe',
      status: 'queued',
      created: '2022-06-07T23:41:26.641+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgyydkojugeyq',
        _id: '1a671893-a350-41be-afae-94640391a9fe',
        sourceCid: 'baeaaadjrguycynjqgyydkojugeyq',
        contentCid: 'baeaaadjrguycynjqgyydkojugeyq',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:26.641+00:00',
        updated: '2022-06-07T23:41:26.641+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
      status: 'queued',
      created: '2022-06-07T23:41:25.616+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqgu2tsobxge2a',
        _id: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
        sourceCid: 'baeaaadjrguycynjqgu2tsobxge2a',
        contentCid: 'baeaaadjrguycynjqgu2tsobxge2a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:25.616+00:00',
        updated: '2022-06-07T23:41:25.616+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    },
    {
      requestid: '5640ab66-67df-416d-9aab-328a116cbedf',
      status: 'queued',
      created: '2022-06-07T23:41:24.288+00:00',
      pin: {
        cid: 'baeaaadjrguycynjqguzdcnztge3a',
        _id: '5640ab66-67df-416d-9aab-328a116cbedf',
        sourceCid: 'baeaaadjrguycynjqguzdcnztge3a',
        contentCid: 'baeaaadjrguycynjqguzdcnztge3a',
        authKey: 315318824629964100,
        name: null,
        meta: null,
        deleted: null,
        created: '2022-06-07T23:41:24.288+00:00',
        updated: '2022-06-07T23:41:24.288+00:00',
        pins: [
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object], [Object], [Object],
          [Object]
        ]
      },
      delegates: []
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 15,
  results: Set(10) {
    {
      requestid: '37b5c8d9-b77f-4255-9233-b7442912b50d',
      status: 'queued',
      created: 2022-06-07T23:41:33.946Z,
      pin: {
        cid: 'baeaaadjrguycynjqha2tmnruhe2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '14cc140e-8e26-4402-9e3f-9e7bf5c1b139',
      status: 'queued',
      created: 2022-06-07T23:41:32.269Z,
      pin: {
        cid: 'baeaaadjrguycynjqhazdinzxhe3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0',
      status: 'queued',
      created: 2022-06-07T23:41:31.515Z,
      pin: {
        cid: 'baeaaadjrguycynjqg44temrwhe4q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7',
      status: 'queued',
      created: 2022-06-07T23:41:30.375Z,
      pin: {
        cid: 'baeaaadjrguycynjqg42tsmrwgayq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '28c16a14-b0b7-4833-bac4-f5843921cf68',
      status: 'queued',
      created: 2022-06-07T23:41:30.007Z,
      pin: {
        cid: 'baeaaadjrguycynjqg4zdimzzgazq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'aa5e2c66-5815-4d36-8303-d663c21491a4',
      status: 'queued',
      created: 2022-06-07T23:41:28.463Z,
      pin: {
        cid: 'baeaaadjrguycynjqgy3tsmbrga3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'db03f48b-fd22-4599-a85d-d3adccef2749',
      status: 'queued',
      created: 2022-06-07T23:41:27.614Z,
      pin: {
        cid: 'baeaaadjrguycynjqgy2dimjtga4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '1a671893-a350-41be-afae-94640391a9fe',
      status: 'queued',
      created: 2022-06-07T23:41:26.641Z,
      pin: {
        cid: 'baeaaadjrguycynjqgyydkojugeyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '01bbcdb3-857c-459e-afcf-6c226de1b48a',
      status: 'queued',
      created: 2022-06-07T23:41:25.616Z,
      pin: {
        cid: 'baeaaadjrguycynjqgu2tsobxge2a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: '5640ab66-67df-416d-9aab-328a116cbedf',
      status: 'queued',
      created: 2022-06-07T23:41:24.288Z,
      pin: {
        cid: 'baeaaadjrguycynjqguzdcnztge3a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Link",
  "cf-ray": "717d3d482ffe5cac-IAD",
  "connection": "close",
  "content-encoding": "gzip",
  "content-type": "application/json;charset=UTF-8",
  "date": "Tue, 07 Jun 2022 23:41:35 GMT",
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
      "requestid": "37b5c8d9-b77f-4255-9233-b7442912b50d",
      "status": "queued",
      "created": "2022-06-07T23:41:33.946+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqha2tmnruhe2q",
        "_id": "37b5c8d9-b77f-4255-9233-b7442912b50d",
        "sourceCid": "baeaaadjrguycynjqha2tmnruhe2q",
        "contentCid": "baeaaadjrguycynjqha2tmnruhe2q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:33.946+00:00",
        "updated": "2022-06-07T23:41:33.946+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:33.946+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "14cc140e-8e26-4402-9e3f-9e7bf5c1b139",
      "status": "queued",
      "created": "2022-06-07T23:41:32.269+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqhazdinzxhe3q",
        "_id": "14cc140e-8e26-4402-9e3f-9e7bf5c1b139",
        "sourceCid": "baeaaadjrguycynjqhazdinzxhe3q",
        "contentCid": "baeaaadjrguycynjqhazdinzxhe3q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:32.269+00:00",
        "updated": "2022-06-07T23:41:32.269+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:32.269+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0",
      "status": "queued",
      "created": "2022-06-07T23:41:31.515+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqg44temrwhe4q",
        "_id": "1f7b9eb1-fb20-4ba5-aeea-74bd83497fa0",
        "sourceCid": "baeaaadjrguycynjqg44temrwhe4q",
        "contentCid": "baeaaadjrguycynjqg44temrwhe4q",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:31.515+00:00",
        "updated": "2022-06-07T23:41:31.515+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:31.515+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7",
      "status": "queued",
      "created": "2022-06-07T23:41:30.375+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqg42tsmrwgayq",
        "_id": "4f0cc4b3-265a-40d5-81ce-6d1ed2bf9ac7",
        "sourceCid": "baeaaadjrguycynjqg42tsmrwgayq",
        "contentCid": "baeaaadjrguycynjqg42tsmrwgayq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:30.375+00:00",
        "updated": "2022-06-07T23:41:30.375+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.375+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "28c16a14-b0b7-4833-bac4-f5843921cf68",
      "status": "queued",
      "created": "2022-06-07T23:41:30.007+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqg4zdimzzgazq",
        "_id": "28c16a14-b0b7-4833-bac4-f5843921cf68",
        "sourceCid": "baeaaadjrguycynjqg4zdimzzgazq",
        "contentCid": "baeaaadjrguycynjqg4zdimzzgazq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:30.007+00:00",
        "updated": "2022-06-07T23:41:30.007+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:30.007+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "aa5e2c66-5815-4d36-8303-d663c21491a4",
      "status": "queued",
      "created": "2022-06-07T23:41:28.463+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgy3tsmbrga3a",
        "_id": "aa5e2c66-5815-4d36-8303-d663c21491a4",
        "sourceCid": "baeaaadjrguycynjqgy3tsmbrga3a",
        "contentCid": "baeaaadjrguycynjqgy3tsmbrga3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:28.463+00:00",
        "updated": "2022-06-07T23:41:28.463+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:28.463+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "db03f48b-fd22-4599-a85d-d3adccef2749",
      "status": "queued",
      "created": "2022-06-07T23:41:27.614+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgy2dimjtga4a",
        "_id": "db03f48b-fd22-4599-a85d-d3adccef2749",
        "sourceCid": "baeaaadjrguycynjqgy2dimjtga4a",
        "contentCid": "baeaaadjrguycynjqgy2dimjtga4a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:27.614+00:00",
        "updated": "2022-06-07T23:41:27.614+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:27.614+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "1a671893-a350-41be-afae-94640391a9fe",
      "status": "queued",
      "created": "2022-06-07T23:41:26.641+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgyydkojugeyq",
        "_id": "1a671893-a350-41be-afae-94640391a9fe",
        "sourceCid": "baeaaadjrguycynjqgyydkojugeyq",
        "contentCid": "baeaaadjrguycynjqgyydkojugeyq",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:26.641+00:00",
        "updated": "2022-06-07T23:41:26.641+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:26.641+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "01bbcdb3-857c-459e-afcf-6c226de1b48a",
      "status": "queued",
      "created": "2022-06-07T23:41:25.616+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqgu2tsobxge2a",
        "_id": "01bbcdb3-857c-459e-afcf-6c226de1b48a",
        "sourceCid": "baeaaadjrguycynjqgu2tsobxge2a",
        "contentCid": "baeaaadjrguycynjqgu2tsobxge2a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:25.616+00:00",
        "updated": "2022-06-07T23:41:25.616+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:25.616+00:00",
            "peerId": "12D3KooWSH5uLrYe7XSFpmnQj1NCsoiGeKSRCV7T5xijpX2Po2aT",
            "peerName": "web3-storage-sv15-8",
            "region": null
          }
        ]
      },
      "delegates": []
    },
    {
      "requestid": "5640ab66-67df-416d-9aab-328a116cbedf",
      "status": "queued",
      "created": "2022-06-07T23:41:24.288+00:00",
      "pin": {
        "cid": "baeaaadjrguycynjqguzdcnztge3a",
        "_id": "5640ab66-67df-416d-9aab-328a116cbedf",
        "sourceCid": "baeaaadjrguycynjqguzdcnztge3a",
        "contentCid": "baeaaadjrguycynjqguzdcnztge3a",
        "authKey": 315318824629964100,
        "name": null,
        "meta": null,
        "deleted": null,
        "created": "2022-06-07T23:41:24.288+00:00",
        "updated": "2022-06-07T23:41:24.288+00:00",
        "pins": [
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWR19qPPiZH4khepNjS3CLXiB7AbrbAD4ZcDjN1UjGUNE1",
            "peerName": "web3-storage-sv15",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWPySxxWQjBgX9Jp6uAHQfVmdq8HG1gVvS1fRawHNSrmqW",
            "peerName": "web3-storage-am6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWEDMw7oRqQkdCJbyeqS5mUmWGwTp8JJ2tjCzTkHboF6wK",
            "peerName": "web3-storage-sv15-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWNuoVEfVLJvU3jWY2zLYjGUaathsecwT19jhByjnbQvkj",
            "peerName": "web3-storage-am6-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWKytRAd2ujxhGzaLHKJuje8sVrHXvjGNvHXovpar5KaKQ",
            "peerName": "web3-storage-dc13-2",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWJEfH2MB4RsUoaJPogDPRWbFTi8iehsxsqrQpiJwFNDrP",
            "peerName": "web3-storage-dc13-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWRi18oHN1j8McxS9RMnuibcTwxu6VCTYHyLNH2R14qhTy",
            "peerName": "web3-storage-sv15-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWQYBPcvxFnnWzPGEx6JuBnrbF1FZq4jTahczuG2teEk1m",
            "peerName": "web3-storage-am6-3",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWDdzN3snjaMJEH9zuq3tjKUFpYHeSGNkiAreF6dQSbCiL",
            "peerName": "web3-storage-am6-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWEzCun34s9qpYEnKkG6epx2Ts9oVGRGnzCvM2s2edioLA",
            "peerName": "web3-storage-am6-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWHpE5KiQTkqbn8KbU88ZxwJxYJFaqP4mp9Z9bhNPhym9V",
            "peerName": "web3-storage-dc13-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWBHvsSSKHeragACma3HUodK5FcPUpXccLu2vHooNsDf9k",
            "peerName": "web3-storage-dc13-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWAdxvJCV5KXZ6zveTJmnYGrSzAKuLUKZYkZssLk7UKv4i",
            "peerName": "web3-storage-sv15-5",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWKhPb9tSnCqBswVfC5EPE7iSTXhbF4Ywwz2MKg5UCagbr",
            "peerName": "web3-storage-sv15-4",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWQE3CWA3MJ1YhrYNP8EE3JErGbrCtpKRkFrWgi45nYAMn",
            "peerName": "web3-storage-am6-6",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWSafoW6yrSL7waghFAaiCqGy5mdjpQx4jn4CRNqbG7eqG",
            "peerName": "web3-storage-am6-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
            "peerId": "12D3KooWDRak1XzURGh9MvGR4EWaP9kcbmdoagAcGMcNxBXXLzTF",
            "peerName": "web3-storage-dc13-8",
            "region": null
          },
          {
            "status": "Unpinned",
            "updated": "2022-06-07T23:41:24.288+00:00",
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
